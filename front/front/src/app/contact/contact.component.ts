import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { CrudService } from '../service/crud.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Contact } from '../Entity/Contact.Entities';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  messageCommande = "";
  contactForm: FormGroup;
  newProduit = new Contact();

  constructor(private services: CrudService, private router: Router, private fb: FormBuilder) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      sujet: new FormControl('', [Validators.required]),
    };
    this.contactForm = this.fb.group(formControls);
  }

  get nom() { return this.contactForm.get('nom'); }
  get email() { return this.contactForm.get('email'); }
  get telephone() { return this.contactForm.get('telephone'); }
  get message() { return this.contactForm.get('message'); }
  get sujet() { return this.contactForm.get('sujet'); }

  addNewContact() {
    let data = this.contactForm.value;
    if (!data.nom || !data.email || !data.telephone || !data.message || !data.sujet) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">Remplir tous les champs</div>`;
    } else {
      let contact = new Contact(undefined, data.nom, data.email, data.telephone, data.message, data.sujet);
      this.services.addcontact(contact).subscribe(
        res => {
          this.messageCommande = `<div class="alert alert-success" role="alert">Contact ajouté avec succès</div>`;
          this.router.navigate(['/contact']).then(() => { window.location.reload(); });
        },
        err => {
          this.messageCommande = `<div class="alert alert-warning" role="alert">Email existe déjà !!!</div>`;
        }
      );
      setTimeout(() => { this.messageCommande = ""; }, 3000);
    }
  }

  ngOnInit(): void {}
}