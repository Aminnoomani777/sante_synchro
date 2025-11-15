import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { LoginComponent } from './login/login.component';
import { ListadminComponent } from './listadmin/listadmin.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import    { HttpClientModule}  from'@angular/common/http';
import { ListclientComponent } from './listclient/listclient.component';

import { ListsalleComponent } from './listsalle/listsalle.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import { ListentraineurComponent } from './listentraineur/listentraineur.component';
import { ModifieradminComponent } from './modifieradmin/modifieradmin.component';
import { ModifierclientComponent } from './modifierclient/modifierclient.component';
import { ModifierentraineurComponent } from './modifierentraineur/modifierentraineur.component';
import { ModifiersalleComponent } from './modifiersalle/modifiersalle.component';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';
import { ModifiercategorieComponent } from './modifiercategorie/modifiercategorie.component';
import { ListpackComponent } from './listpack/listpack.component';
import { ModifierpackComponent } from './modifierpack/modifierpack.component';
import { ListabonnementComponent } from './listabonnement/listabonnement.component';






@NgModule({
  declarations: [
    AppComponent,
    AjoutAdminComponent,
    LoginComponent,
    ListadminComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ListclientComponent,
 ListabonnementComponent,
    ListsalleComponent,
    ListcontactComponent,
    ListentraineurComponent,
    ModifieradminComponent,
    ModifierclientComponent,
    ModifierentraineurComponent,
    ModifiersalleComponent,
    ListcategorieComponent,
    ModifiercategorieComponent,
    ListpackComponent,
    ModifierpackComponent,
    ListabonnementComponent,
    
   
  
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
