import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../Entity/Contact.Entities';
import { CrudService } from '../service/crud.service';
import { SavePack } from '../Entity/SavePack.Entities';
import { Categorie } from '../Entity/categorie.Entities';

@Component({
  selector: 'app-ajouterpack',
  templateUrl: './ajouterpack.component.html',
  styleUrls: ['./ajouterpack.component.css']
})
export class AjouterpackComponent {
 
  listcategorie: Categorie[] 
  imgURL:any
  messageCommande = "";
   packForm: FormGroup;
 
   userFile: any;
   public imagePath: any;
    prixURL: any;
   newProduit = new Contact();
   public message1!: string;
 
   constructor(private services: CrudService, private router: Router, private fb: FormBuilder) {
     let formControls = {
       nom: new FormControl('', [
         Validators.required,
         Validators.minLength(4)
       ]),
      
       prix: new FormControl('', [
         Validators.required,
        
       ]),
       
     
       image: new FormControl('', [
         Validators.required,
       ]),
       description: new FormControl('', [
        Validators.required,
      ]),
      categorie: new FormControl('', [
         Validators.required,
       ])
     };
     this.packForm = this.fb.group(formControls);
   }
 
   get nom() { return this.packForm.get('nom'); }
 
   get prix() { return this.packForm.get('prix'); }

  
   get image() { return this.packForm.get('image'); }
   get description() { return this.packForm.get('description'); }
  
   get categorie() { return this.packForm.get('categorie'); }

 
 
  addNewAjouter() {
    let data = this.packForm.value;
    let datas=this.services.userDetails()
    console.log(data);
    let model:SavePack=new SavePack();
    console.log(model);
    model.id=null;
    model.nom=data.nom;
    model.prix=data.prix;
    model.image=this.imgURL;
    model.description =data.description;
   

    model.idCategorie=+data.categorie;
    model. idSalleDeSport=datas?.id ;
    if (
      !data.nom ||
      !data.prix ||
      !data.image ||
      !data.description ||
      !data.categorie
    ) {
      this.messageCommande = `<div class="alert alert-danger">Remplissez tous les champs</div>`;
      return;
    
    } else {
    this.services.addPack(model).subscribe(
      res=>{
        console.log(res);
        this.messageCommande=`<div class="alert alert-success" image="alert">
        Message envoyer avec succe
      </div>`
        
        this.router.navigate(['/mespack'])
        ;
      },
       err=>{
        this.messageCommande=`<div class="alert alert-warning" image="alert">
        service en panne!!!! 
      </div>`
  
      })
      setTimeout(() => {
        this.messageCommande=""
      }, 3000);
    
    }



    
  }


  ngOnInit(): void {
    this.services.getCategorie().subscribe(categorie=>{this.listcategorie=categorie})
    
  }
onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message1 = 'Only images are supported.';
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  
 
  
    }
  

  }
      
  
    
    
   