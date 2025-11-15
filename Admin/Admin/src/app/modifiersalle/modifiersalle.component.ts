import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Salle } from '../Entity/Salle.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifiersalle',
  templateUrl: './modifiersalle.component.html',
  styleUrls: ['./modifiersalle.component.css']
})
export class ModifiersalleComponent {
  id:number;
    
    
       messageCommande=""
       salleForm:FormGroup
        
        userFile: any;
        public imagePath: any;
        emailURL: any
        newProduit=new Salle()
        public message!: string;
        constructor( private services : CrudService , private router : Router,private fb:FormBuilder,private rout:ActivatedRoute
        ) {
          let formControls = {
            nom: new FormControl('',[
              Validators.required,
            Validators.minLength(4)]),
            adress: new FormControl('',[
                Validators.required,]),
          
            email: new FormControl('',[
              Validators.required,
            Validators.email]),
            telephone: new FormControl('',[
              Validators.required,]),
            
            mp: new FormControl('',[
              Validators.required,]),
             
              }
           this.salleForm = this.fb.group(formControls)
         }
         get nom() {return this.salleForm.get('nom');} 
         get adress() {return this.salleForm.get('adress');} 
        get email() { return this.salleForm.get('email');}
        get telephone() {return this.salleForm.get('telephone');}
        get mp() {return this.salleForm.get('mp');}
      
  
    
        ngOnInit(): void {
          let idEvent = this.rout.snapshot.params['id'];
          this.id = idEvent;
          this.services.findSalleById(idEvent).subscribe((result) => {
            let event = result;
            console.log(event);
            this.salleForm.patchValue({
              nom: event.nom,
              adress: event.adress,
              email: event.email,
              telephone: event.telephone,
              mp: event.mp,
             
             });}); }
        updateSalle() {
          let data = this.salleForm.value;
          let salle =new Salle(
            this.id,
            data.nom,
            data.adress,
            data.email,
            data.telephone,
            data.mp,
          
         
             );
          console.log(salle);
          console.log(data);
          this.services.updateSalle(this.id,salle).subscribe((res) => {
            console.log(res);
            this.router.navigate(['/listsalle']).then(()=>window.location.reload())}); }

}
