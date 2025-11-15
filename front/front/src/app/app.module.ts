import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './login/login.component';
import { RegistreentraineurComponent } from './registreentraineur/registreentraineur.component';
import { RegistreclientComponent } from './registreclient/registreclient.component';
import { LoginclientComponent } from './loginclient/loginclient.component';
import { LoginentraineurComponent } from './loginentraineur/loginentraineur.component';
import { RegistresalledesportComponent } from './registresalledesport/registresalledesport.component';
import { LoginsalledesportComponent } from './loginsalledesport/loginsalledesport.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterpackComponent } from './ajouterpack/ajouterpack.component';
import { ListpackComponent } from './listpack/listpack.component';
import { MespackComponent } from './mespack/mespack.component';
import { MenuComponent } from './menu/menu.component';
import { ChoixComponent } from './choix/choix.component';

import { ListresentraineurComponent } from './listresentraineur/listresentraineur.component';
import { PayementComponent } from './payement/payement.component';
import { FactureComponent } from './facture/facture.component';
import { AjoutcategorieComponent } from './ajoutcategorie/ajoutcategorie.component';
import { VideocallComponent } from './videocall/videocall.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListplaningComponent } from './listplaning/listplaning.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SeanceclientComponent } from './seanceclient/seanceclient.component';
import { ListreservationclientComponent } from './listreservationclient/listreservationclient.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
 
    LoginComponent,
    RegistreentraineurComponent,
    RegistreclientComponent,
    LoginclientComponent,
    LoginentraineurComponent,
    RegistresalledesportComponent,
    LoginsalledesportComponent,
    AjouterpackComponent,
    ListpackComponent,
    MespackComponent,
    MenuComponent,
    ChoixComponent,
    ListresentraineurComponent,
    PayementComponent,
    FactureComponent,
    AjoutcategorieComponent,
    VideocallComponent,
    ListCategorieComponent,
    ListplaningComponent,
    SeanceclientComponent,
    ListreservationclientComponent,
 
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
