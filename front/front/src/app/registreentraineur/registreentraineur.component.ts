import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Entraineur } from '../Entity/Entraineur.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-registreentraineur',
  templateUrl: './registreentraineur.component.html',
  styleUrls: ['./registreentraineur.component.css']
})
export class RegistreentraineurComponent {
  messageCommande = "";
  entraineurForm: FormGroup;
  
  constructor(private services: CrudService, private router: Router, private fb: FormBuilder) {
    let formControls = {
      nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mp: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8,15}$")]),
      etat: new FormControl(false)
    };
    this.entraineurForm = this.fb.group(formControls);
  }

  get nom() { return this.entraineurForm.get('nom'); }
  get prenom() { return this.entraineurForm.get('prenom'); }
  get email() { return this.entraineurForm.get('email'); }
  get mp() { return this.entraineurForm.get('mp'); }
  get telephone() { return this.entraineurForm.get('telephone'); }
  get etat() { return this.entraineurForm.get('etat'); }
  
  addNewEntraineur() {
    console.log("addNewEntraineur() called"); // Vérifiez si ce message apparaît dans la console
    let data = this.entraineurForm.value;
    let entraineur = new Entraineur(
      undefined, data.nom, data.prenom, data.email, data.mp, data.telephone, data.etat
    );
  
    if (!data.nom || !data.prenom || !data.email || !data.mp || !data.telephone) {
      this.messageCommande = `<div class="alert alert-danger" role="alert">
      Veuillez remplir tous les champs requis.
      </div>`;
    } else {
      this.services.addEntraineur(entraineur).subscribe(
        res => {
          console.log(res);
          this.messageCommande = `<div class="alert alert-success" role="alert">
          Entraineur ajouté avec succès !
          </div>`;
          this.router.navigate(['/loginentraineur']).then(() => { window.location.reload(); });
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
