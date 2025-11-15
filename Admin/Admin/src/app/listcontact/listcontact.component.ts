import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../Entity/Contact.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent {






  listContact: Contact[];
    
      constructor(private service: CrudService, private router: Router) {}
    
      ngOnInit(): void {
        this.service.getContact().subscribe(contact => {
          this.listContact = contact;
        });
      }
    
      DeleteContact(contact: Contact): void {
        if (confirm("Voulez-vous supprimer ce message de contact avec l'ID " + contact.id + "?")) {
          this.service.onDeleteContact(contact.id).subscribe(() => {
            this.router.navigate(['/listcontact']).then(() => {
              window.location.reload();
            });
          });
        }
      }

}
