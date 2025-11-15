import { Component } from '@angular/core';
import { Entraineur } from '../Entity/Entraineur.Entities';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifierentraineur',
  templateUrl: './modifierentraineur.component.html',
  styleUrls: ['./modifierentraineur.component.css']
})
export class ModifierentraineurComponent {

  id:number;
  
  
     messageCommande=""
      entraineurForm:FormGroup
      
      userFile: any;
      public imagePath: any;
      emailURL: any
      newProduit=new Entraineur()
      public message!: string;
      constructor( private services : CrudService , private router : Router,private fb:FormBuilder,private rout:ActivatedRoute
      ) {
        let formControls = {
          nom: new FormControl('',[
            Validators.required,
          Validators.minLength(4)]),
            prenom: new FormControl('',[
              Validators.required,]),
        
          email: new FormControl('',[
            Validators.required,
          Validators.email]),
          mp: new FormControl('',[
            Validators.required,]),
            
         telephone: new FormControl('',[
              Validators.required,])}

              
         this.entraineurForm = this.fb.group(formControls)
       }
       get nom() {return this.entraineurForm.get('nom');} 
       get prenom() {return this.entraineurForm.get('prenom');} 
      get email() { return this.entraineurForm.get('email');}
      get mp() {return this.entraineurForm.get('mp');}
      get telephone() {return this.entraineurForm.get('telephone');}
      
  
      ngOnInit(): void {
        let idEvent = this.rout.snapshot.params['id'];
        this.id = idEvent;
        this.services.findEntraineurById(idEvent).subscribe((result) => {
          let event = result;
          console.log(event);
          this.entraineurForm.patchValue({
            nom: event.nom,
            prenom: event.prenom,
            email: event.email,
            mp: event.mp,
            telephone: event.telephone,
       

           });}); }
      updateEntraineur() {
        let data = this.entraineurForm.value;
        let entraineur =new Entraineur(
          this.id,
          data.nom,
          data.prenom,
          data.email,
          data.mp,
          data.telephone,
          
           );
        console.log(entraineur);
        console.log(data);
        this.services.updateEntraineur(this.id,entraineur).subscribe((res) => {
          console.log(res);
          this.router.navigate(['/listentraineur']).then(()=>window.location.reload())}); }

}
