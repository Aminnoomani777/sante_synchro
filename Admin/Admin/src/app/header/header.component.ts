import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Contact } from '../Entity/Contact.Entities';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  contacts: Contact[] = [];
    showDropdown = false;
    unreadCount = 0;
    recentContacts: Contact[] = [];
    userDetails: any = {
      nom: '',
      prenom: ''
    };
  
    constructor(
      private service: CrudService,
      private router: Router,
      private notificationService: NotificationService,
      private crudService: CrudService
    ) {}
    ngOnInit(): void {
      this.userDetails = this.service.userDetails() || this.userDetails;
      this.crudService.getContact().subscribe(data => console.log(data));
      

    
      this.notificationService.currentUnreadCount.subscribe(count => {
        this.unreadCount = count;
        this.loadRecentContacts();
      });
    
      this.notificationService.refreshUnreadCount(); // <- pour être synchro dès le départ
      this.loadRecentContacts();
      
    }
  
    toggleDropdown(): void {
      this.showDropdown = !this.showDropdown;
      if (this.showDropdown && this.unreadCount > 0) {
        this.markAllAsRead();
      }
    }
  
    loadRecentContacts(): void {
      this.crudService.getContact().subscribe({
        next: (contacts) => {
          this.recentContacts = contacts
            .filter(c => !c.read)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 5);
        },
        error: (err) => {
          console.error('Erreur lors du chargement des contacts:', err);
        }
      });
    }
  
    logout(): void {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  
    markAsRead(id: number): void {
      this.crudService.markContactAsRead(id).subscribe({
        next: () => {
          this.loadRecentContacts();
          this.notificationService.checkNotifications();
        },
        error: (err) => {
          console.error('Erreur lors du marquage comme lu:', err);
        }
      });
    }
    
    markAllAsRead(): void {
      this.crudService.markAllContactsAsRead().subscribe({
        next: () => {
          this.loadRecentContacts();
          this.notificationService.checkNotifications();
        },
        error: (err) => {
          console.error('Erreur lors du marquage global comme lu:', err);
        }
      });
    }


    
  }