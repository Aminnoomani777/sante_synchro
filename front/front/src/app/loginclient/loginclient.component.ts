import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../Entity/Client.Entities';
import { CrudService } from '../service/crud.service';
declare var google:any;

@Component({
  selector: 'app-loginclient',
  templateUrl: './loginclient.component.html',
  styleUrls: ['./loginclient.component.css']
})
export class LoginclientComponent {



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

  let client = new Client(null, null, null, data.email, data.mp, null, null, null);
  console.log(client);

  
  if (!data.email.trim() || !data.mp.trim()) {
    this.messageCommande = `<div class="alert alert-danger" role="alert">
      Veuillez remplir tous les champs.
    </div>`;
    return;
  }

  this.service.loginClient(client).subscribe(
    res => {
      console.log(res);
      this.messageCommande = `<div class="alert alert-success" role="alert">
        Connexion réussie.
      </div>`;

      let token = res.token;

      localStorage.setItem("myTokenClient", token);
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




ngOnInit(): void {
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  script.onload = () => {

    
    google.accounts.id.initialize({
      client_id: '570330663869-chf487vscieop2fijj52maav38bcjd8n.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this)
    });

    google.accounts.id.renderButton(
      document.getElementById('g_id_signin'),
      { theme: 'outline', size: 'medium', shape: 'pill', text: 'continue_with' }
    );

    google.accounts.id.prompt();
  };
}

handleCredentialResponse(response: any): void {
  const idToken = response.credential;
  console.log("ID Token:", idToken);

  this.service.signInWithGoogle(idToken).subscribe(
    res => {
      console.log('Connexion réussie via Google!', res);
      localStorage.setItem("myTokenClient", res.token);
      this.router.navigate(['']).then(() => window.location.reload());
    },
    err => {
      console.error('Erreur de connexion Google:', err);
      this.messageCommande = `
        <div class="alert alert-danger" role="alert">
          Erreur lors de la connexion avec Google.
        </div>`;
    }
  );
}
}
