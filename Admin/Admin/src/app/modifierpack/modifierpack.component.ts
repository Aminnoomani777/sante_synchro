import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Pack } from '../Entity/Pack.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifierpack',
  templateUrl: './modifierpack.component.html',
  styleUrls: ['./modifierpack.component.css']
})
export class ModifierpackComponent {

   id:number;
      
      
         messageCommande=""
        packForm:FormGroup
          
          userFile: any;
          public imagePath: any;
        
          newProduit=new Pack()
          public message!: string;
          constructor( private services : CrudService , private router : Router,private fb:FormBuilder,private rout:ActivatedRoute
          ) {
            let formControls = {
              nom: new FormControl('',[
                Validators.required,
              Validators.minLength(4)]),
              prix: new FormControl('',[
                Validators.required,
              ]),

              description : new FormControl('',[
                Validators.required,
              ]),
              
              
              
                }
             this.packForm = this.fb.group(formControls)
           }
           get nom() {return this.packForm.get('nom');} 
           get prix() {return this.packForm.get(' prix');} 
           get description () {return this.packForm.get('nom');} 
      
         
          
      
          ngOnInit(): void {
            let idEvent = this.rout.snapshot.params['id'];
            this.id = idEvent;
            this.services.findPackById(idEvent).subscribe((result) => {
              let event = result;
              console.log(event);
              this.packForm.patchValue({
                nom: event.nom,
               
               });}); }
          updatePack() {
                  let data = this.packForm.value;
                  let pack =new Pack(
                    this.id,
                    data.nom,
                    data. prix,
                    data.
                    description ,
                  
                   
                     );
                  console.log(pack);
                  console.log(data);
                  this.services.updatePack(this.id,pack).subscribe((res) => {
                    console.log(res);
                    this.router.navigate(['/listpack']).then(()=>window.location.reload())}); }

}
