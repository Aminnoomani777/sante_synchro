import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Salle } from '../Entity/Salle.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-registresalledesport',
  templateUrl: './registresalledesport.component.html',
  styleUrls: ['./registresalledesport.component.css']
})
export class RegistresalledesportComponent { 
  messageCommande = "";

  salleForm: FormGroup;
  
  
  constructor(private services: CrudService, private router: Router, private fb: FormBuilder) {
    let formControls = {
      nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      adress: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mp: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8,15}$")]),
      etat: new FormControl(false)
    };
    this.salleForm = this.fb.group(formControls);
  }

  get nom() { return this.salleForm.get('nom'); }
  get adress() { return this.salleForm.get('adress'); }
  get email() { return this.salleForm.get('email'); }
  get mp() { return this.salleForm.get('mp'); }
  get telephone() { return this.salleForm.get('telephone'); }
  get etat() { return this.salleForm.get('etat'); }
  
  addNewSalle() {
    console.log("addNewSalle() called"); // Vérifiez si ce message apparaît dans la console
    let data = this.salleForm.value;
    let salle = new Salle(
      undefined, data.nom, data.adress, data.email, data.telephone, data.mp, data.etat
    );
  
    if (!data.nom || !data.adress || !data.email || !data.mp || !data.telephone) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">
      Veuillez remplir tous les champs requis.
      </div>`;
    } else {
      this.services.addSalle(salle).subscribe(
        res => {
          console.log(res);
          this.messageCommande = `<div class="alert alert-success" role="alert">
          Salle ajoutée avec succès !
          </div>`;
          this.router.navigate(['/loginsalledesport']).then(() => { window.location.reload(); });
        },
        err => {
          this.messageCommande = `<div class="alert alert-warning" role="alert">
          L'email existe déjà !
          </div>`;
        }
      );
      setTimeout(() => {
        this.messageCommande = "";
      }, 3000);
    }
  }

  ngOnInit(): void {
  }
}