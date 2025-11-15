import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Salle } from '../Entity/Salle.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-loginsalledesport',
  templateUrl: './loginsalledesport.component.html',
  styleUrls: ['./loginsalledesport.component.css']
})
export class LoginsalledesportComponent {
 
   messageCommande = "";
 loginForm: FormGroup;
 
 constructor(
   private fb: FormBuilder,
   private service: CrudService,
   private router: Router
 ) { 
   let formControls = {
     email: new FormControl('', [
       Validators.required,
       Validators.email
     ]),
     mp: new FormControl('', [
       Validators.required
     ])
   };
 
   this.loginForm = this.fb.group(formControls);
 }
 
 get email() { return this.loginForm.get('email'); }
 get mp() { return this.loginForm.get('mp'); }
 
 login() {
   let data = this.loginForm.value;
   console.log(data);
 
   let salle = new Salle(null, null, null, data.email, null, data.mp, null);
   console.log(salle);
 
   
   if (!data.email.trim() || !data.mp.trim()) {
     this.messageCommande = `<div class="alert alert-danger" role="alert">
       Veuillez remplir tous les champs.
     </div>`;
     return;
   }
 
   this.service.loginSalle(salle).subscribe(
     res => {
       console.log(res);
       this.messageCommande = `<div class="alert alert-success" role="alert">
         Connexion réussie.
       </div>`;
 
       let token = res.token;
 
       localStorage.setItem("myToken", token);
       localStorage.setItem("role", res.role);
       this.router.navigate(['']).then(() => { window.location.reload(); });
     },
     err => {
       console.log(err);
       this.messageCommande = `<div class="alert alert-danger" role="alert">
         Erreur de connexion. Vérifiez vos identifiants.
       </div>`;
     }
   );
 }
}