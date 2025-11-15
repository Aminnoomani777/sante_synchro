import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../Entity/Client.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifierclient',
  templateUrl: './modifierclient.component.html',
  styleUrls: ['./modifierclient.component.css']
})
export class ModifierclientComponent {

  id:number;
  
  
     messageCommande=""
     clientForm:FormGroup
      
      userFile: any;
      public imagePath: any;
      emailURL: any
      newProduit=new Client()
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
              Validators.required,]),
            age: new FormControl('',[
              Validators.required,]),
            }
         this.clientForm = this.fb.group(formControls)
       }
       get nom() {return this.clientForm.get('nom');} 
       get prenom() {return this.clientForm.get('prenom');} 
      get email() { return this.clientForm.get('email');}
      get mp() {return this.clientForm.get('mp');}
      get telephone() {return this.clientForm.get('telephone');}
      get age() {return this.clientForm.get('age');}
      
  
      ngOnInit(): void {
        let idEvent = this.rout.snapshot.params['id'];
        this.id = idEvent;
        this.services.findClientById(idEvent).subscribe((result) => {
          let event = result;
          console.log(event);
          this.clientForm.patchValue({
            nom: event.nom,
            prenom: event.prenom,
            email: event.email,
            mp: event.mp,
            telephone: event.telephone,
            age: event.age,
        
           });}); }
      updateClient() {
        let data = this.clientForm.value;
        let client =new Client(
          this.id,
          data.nom,
          data.prenom,
          data.email,
          data.mp,
          data.telephone,
          data.age,
           );
        console.log(client);
        console.log(data);
        this.services.updateClient(this.id,client).subscribe((res) => {
          console.log(res);
          this.router.navigate(['/listclient']).then(()=>window.location.reload())}); }
}

