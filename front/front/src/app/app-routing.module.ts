import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './login/login.component';
import { LoginentraineurComponent } from './loginentraineur/loginentraineur.component';
import { LoginclientComponent } from './loginclient/loginclient.component';
import { LoginsalledesportComponent } from './loginsalledesport/loginsalledesport.component';
import { RegistresalledesportComponent } from './registresalledesport/registresalledesport.component';
import { RegistreentraineurComponent } from './registreentraineur/registreentraineur.component';
import { RegistreclientComponent } from './registreclient/registreclient.component';
import { AjouterpackComponent } from './ajouterpack/ajouterpack.component';
import { ListpackComponent } from './listpack/listpack.component';
import { MespackComponent } from './mespack/mespack.component';
import { ChoixComponent } from './choix/choix.component';
import { AuthGuard } from './service/Auth.serevice';
import { ListresentraineurComponent } from './listresentraineur/listresentraineur.component';
import { PayementComponent } from './payement/payement.component';
import { AjoutcategorieComponent } from './ajoutcategorie/ajoutcategorie.component';
import { VideocallComponent } from './videocall/videocall.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListplaningComponent } from './listplaning/listplaning.component';
import { SeanceclientComponent } from './seanceclient/seanceclient.component';
import { ListreservationclientComponent } from './listreservationclient/listreservationclient.component';


const routes: Routes = [
  {path:'',component:HomeComponent}
  ,{path:'about',component:AboutComponent}
  ,{path:'contact',component:ContactComponent}
  
  ,{path:'login',component:LoginComponent}
  ,{path:'loginentraineur',component:LoginentraineurComponent}
  ,{path:'loginclient',component:LoginclientComponent}
  ,{path:'loginsalledesport',component:LoginsalledesportComponent}
  ,{path:'registreclient',component:RegistreclientComponent}

    ,{path:'registreentraineur',component:RegistreentraineurComponent}

    ,{path:'registresalle',component:RegistresalledesportComponent}
    ,{path:'ajouterpack',component:AjouterpackComponent,canActivate:[AuthGuard]}
    ,{path:'listpack',component:ListpackComponent}
    ,{path:'mespack',component:MespackComponent}
    ,{path:'choix',component:ChoixComponent}
    ,{path:'listresentraineur',component:ListresentraineurComponent}
    ,{path:'payement/:id',component:PayementComponent}
    ,{path:'ajoutcategorie',component:AjoutcategorieComponent}
    ,{path:'videocall',component:VideocallComponent}
    ,{path:'listcategorie',component:ListCategorieComponent}
    ,{path:'listplaning',component:ListplaningComponent}
    ,{path:'seanceclient/:id',component:SeanceclientComponent}
    ,{path:'listresclient',component:ListreservationclientComponent}
    
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
