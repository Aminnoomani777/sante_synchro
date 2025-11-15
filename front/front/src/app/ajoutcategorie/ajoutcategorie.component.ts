import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../Entity/categorie.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-ajoutcategorie',
  templateUrl: './ajoutcategorie.component.html',
  styleUrls: ['./ajoutcategorie.component.css']
})
export class AjoutcategorieComponent {

  messageCommande = "";
  categorieForm: FormGroup;
  userFile: any;
  public imagePath: any;
  emailURL: any;
  newProduit = new Categorie();
  public message!: string;

  constructor(private services: CrudService, private router: Router, private fb: FormBuilder) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    };

    this.categorieForm = this.fb.group(formControls);
  }

  get nom() { 
    return this.categorieForm.get('nom'); 
  } 

  addNewCategorie() {
    if (this.categorieForm.invalid) return;

    const data = this.categorieForm.value;
    const categorie = new Categorie(undefined, data.nom);
  
    this.services.addcategorie(categorie).subscribe(
      err=> {
        this.messageCommande = `<div class="alert alert-danger" role="alert">Erreur lors de l’ajout</div>`;
      },
    
      res   => {
        
      this.messageCommande = `<div class="alert alert-success" role="alert">Ajouté avec succès</div>`;
      setTimeout(() => {
        this.router.navigate(['/listcategorie']).then(() => window.location.reload());
      }, 1000);
    },
     
    );
  
    setTimeout(() => {
      this.messageCommande = "";
    }, 3000);
  }
  
}
