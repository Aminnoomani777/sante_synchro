import { Component } from '@angular/core';
import { Categorie } from '../Entity/categorie.Entities';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifiercategorie',
  templateUrl: './modifiercategorie.component.html',
  styleUrls: ['./modifiercategorie.component.css']
})
export class ModifiercategorieComponent {

   id:number;
    
    
       messageCommande=""
      categorieForm:FormGroup
        
        userFile: any;
        public imagePath: any;
      
        newProduit=new Categorie()
        public message!: string;
        constructor( private services : CrudService , private router : Router,private fb:FormBuilder,private rout:ActivatedRoute
        ) {
          let formControls = {
            nom: new FormControl('',[
              Validators.required,
            Validators.minLength(4)]),
            
              }
           this.categorieForm = this.fb.group(formControls)
         }
         get nom() {return this.categorieForm.get('nom');} 
       
        
    
        ngOnInit(): void {
          let idEvent = this.rout.snapshot.params['id'];
          this.id = idEvent;
          this.services.findCategorieById(idEvent).subscribe((result) => {
            let event = result;
            console.log(event);
            this.categorieForm.patchValue({
              nom: event.nom,
             
             });}); }
        updateCategorie() {
                let data = this.categorieForm.value;
                let categorie =new Categorie(
                  this.id,
                  data.nom,
                 
                   );
                console.log(categorie);
                console.log(data);
                this.services.updateCategorie(this.id,categorie).subscribe((res) => {
                  console.log(res);
                  this.router.navigate(['/listcategorie']).then(()=>window.location.reload())}); }
}
