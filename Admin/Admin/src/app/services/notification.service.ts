import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, switchMap } from 'rxjs';
import { CrudService } from '../service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


    private unreadCount = new BehaviorSubject<number>(0);
    currentUnreadCount = this.unreadCount.asObservable();
  
    constructor(private crudService: CrudService) {
      // Rafraîchir toutes les 30 secondes
      interval(300).pipe(
        switchMap(() => this.crudService.getUnreadContactCount())
      ).subscribe(count => {
        this.updateUnreadCount(count);
      });
  
      // Chargement initial
      this.checkNotifications();
    }
  
  
 
    
    updateUnreadCount(count: number) {
      // Met à jour la valeur du compteur des notifications non lues
      this.unreadCount.next(count);
    }
    


    resetUnreadCount() {
      // Supprimer cette méthode si tu ne veux pas réinitialiser manuellement le compteur
      // ou seulement l'appeler après la mise à jour correcte du compteur.
      this.unreadCount.next(0);
    }
    // Ajouter cette méthode
refreshUnreadCount(): void {
  this.crudService.getUnreadContactCount().subscribe(
    count => this.updateUnreadCount(count),
    error => console.error('Error refreshing unread count', error)
  );
}

// Modifier checkNotifications pour utiliser refreshUnreadCount
checkNotifications() {
  this.refreshUnreadCount();
}
    



  }
