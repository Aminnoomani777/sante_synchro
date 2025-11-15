import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { LoginComponent } from './login/login.component';
import { ListadminComponent } from './listadmin/listadmin.component';
import { HomeComponent } from './home/home.component';
import { ListclientComponent } from './listclient/listclient.component';

import { ListsalleComponent } from './listsalle/listsalle.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import { ListentraineurComponent } from './listentraineur/listentraineur.component';
import { ModifieradminComponent } from './modifieradmin/modifieradmin.component';
import { AuthGuard } from './service/Auth.serevice';
import { ModifierentraineurComponent } from './modifierentraineur/modifierentraineur.component';
import { ModifierclientComponent } from './modifierclient/modifierclient.component';
import { ModifiersalleComponent } from './modifiersalle/modifiersalle.component';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';
import { ModifiercategorieComponent } from './modifiercategorie/modifiercategorie.component';
import { ListpackComponent } from './listpack/listpack.component';
import { ListabonnementComponent } from './listabonnement/listabonnement.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';



const routes: Routes = 
[ {path:'',component:AjoutAdminComponent,canActivate:[AuthGuard]}

  ,{path:'login',component:LoginComponent}
  ,{path:'listadmin',component:ListadminComponent,canActivate:[AuthGuard]}
  ,{path:'Home',component:HomeComponent,canActivate:[AuthGuard]}
  ,{path:'listclient',component:ListclientComponent,canActivate:[AuthGuard]}
 
  ,{path:'listsalle',component:ListsalleComponent,canActivate:[AuthGuard]}
  ,{path:'listcontact',component:ListcontactComponent,canActivate:[AuthGuard]}
  ,{path:'listentraineur',component:ListentraineurComponent,canActivate:[AuthGuard]}
  ,{path:'modifieradmin/:id',component:ModifieradminComponent,canActivate:[AuthGuard]}
  ,{path:'modifierentraineur/:id',component:ModifierentraineurComponent,canActivate:[AuthGuard]}
  ,{path:'modifierclient/:id',component:ModifierclientComponent,canActivate:[AuthGuard]}
  ,{path:'modifiersalle/:id',component:ModifiersalleComponent,canActivate:[AuthGuard]}
  ,{path:'listcategorie',component:ListcategorieComponent,canActivate:[AuthGuard]}
  ,{path:'modifiercategorie/:id',component:ModifiercategorieComponent,canActivate:[AuthGuard]}
  ,{path:'listpack',component:ListpackComponent,canActivate:[AuthGuard]},
  {path:'listabonnement',component:ListabonnementComponent,canActivate:[AuthGuard]}, 
   {path:'reservation',component:ListReservationComponent,canActivate:[AuthGuard]},



 
 
 
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
