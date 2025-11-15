import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../Entity/Client.Entities';
import { catchError, Observable } from 'rxjs';
import { Entraineur } from '../Entity/Entraineur.Entities';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Salle } from '../Entity/Salle.Entities';
import { Contact } from '../Entity/Contact.Entities';
import { SavePack } from '../Entity/SavePack.Entities';
import { Categorie } from '../Entity/categorie.Entities';
import { Pack } from '../Entity/Pack.Entities';
import { ReservationPack } from '../Entity/ReservationPack.Entities';
import { Planing } from '../Entity/Palning.Entities';
import { Reservations } from '../Entity/Reservations.Entities';



@Injectable({
  providedIn: 'root'
})
export class CrudService {
 

  apiUrl = 'http://localhost:8081/api';
  loginUserUrl = 'http://localhost:8081/api/client/login';
  helper = new JwtHelperService();
  GoogleUrl = 'http://localhost:8081/api/client/login-google';

  constructor(private http: HttpClient) {}

  // Client
  addClient(client: Client): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/client`, client);
  }
  //entraineur
  addEntraineur(entraineur: Entraineur): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/entraineur`, entraineur);
  }
  //salleDeSport
  addSalle(salle: Salle): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/salleDeSport`, salle);
  }
  //Contact
  addcontact(contact:Contact){
    return this.http.post<any>(`${this.apiUrl}/contact`, contact);
  
  }
  loginClient(client: Client): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/client/login`, client);
}
loginSalle(salle: Salle): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/salleDeSport/login`, salle);
}
loginEntraineur(entraineur: Entraineur): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/entraineur/login`, entraineur);
}


// Pack
addPack(savepack:SavePack): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/pack`, savepack);
}
userDetails(){
  let token:any=localStorage.getItem('myToken'); 
  let decodeToken= this.helper.decodeToken(token);
   return decodeToken.data;
 }
 getCategorie(): Observable<Categorie[]> {
  return this.http.get<Categorie[]>(this.apiUrl + "/categorie"); 
}
getSalle(): Observable<Salle[]> {
  return this.http.get<Salle[]>(this.apiUrl + "/salleDeSport"); 
}
getPack(): Observable<Pack[]> {
  return this.http.get<Pack[]>(this.apiUrl + "/pack"); 
}


getAllPackbySalleDeSportId(){


  return this.http.get<any>( "http://localhost:8081/api/pack/get-all-by-id-salledesport/"+this.userDetails()?.id );
}
isCoachIn(){

  let token = localStorage.getItem("myTokenCoach");
  if (token) {
    return true ;
  } else {
    return false;
  }}
  isSalleInIn(){

    let token = localStorage.getItem("myToken");
    if (token) {
      return true ;
    } else {
      return false;
    }}
    isClientIn(){

      let token = localStorage.getItem("myTokenClient");
      if (token) {
        return true ;
      } else {
        return false;
      }
}
isLoggedIn(){
  
  let token = localStorage.getItem("myToken");

  if (token) {
    return true ;
  } else {
    return false;
  }
}
getEntraineur(): Observable<Entraineur[]> {
  return this.http.get<Entraineur[]>(this.apiUrl + "/entraineur"); 
}



getCoachInfo() {
  let token = localStorage.getItem('myTokenCoach'); 
  if (token) {
    let decodeToken = this.helper.decodeToken(token);
    return decodeToken?.data;
  }
  return null;
}
 
    getClientInfo(){
      let token:any=localStorage.getItem('myTokenClient'); 
      let decodeToken= this.helper.decodeToken(token);
       return decodeToken.data;
     }

     reserverFromApi(rq:any){
      return this.http.post<any>( "http://localhost:8081/api/packres" ,rq);
   }


 
  

   reserverentraineur(rq:any){
    return this.http.post<any>( "http://localhost:8081/api/entrraineurres" ,rq);
 }

 getById(id: number): Observable<ReservationPack> {
  return this.http.get<ReservationPack>(`${this.apiUrl+"/packres"}/${id}`);
}



addcategorie(categorie:Categorie){
  return this.http.post<any>(this.apiUrl+"/categorie", categorie);
}



signInWithGoogle(idToken: string): Observable<any> {
  const params = new HttpParams().set('id_token', idToken);
  return this.http.post(this.GoogleUrl, null, { params });

}

onDeleteCategorie(id: number): Observable<void> {
  const url = `${this.apiUrl + "/categorie"}/${id}`;
  return this.http.delete<void>(url);
}

addPlanning(planning:Planing){
  return this.http.post<any>(this.apiUrl+"/planning",planning);
}
getPlanning(id : number): Observable<Planing[]>{
  const url = `${this.apiUrl + "/planning/get-all-by-id-coach"}/${id}`;
  return this.http.get<Planing[]>(url)
  
}
reserverseanceFromApi(rq:any){
  return this.http.post<any>( "http://localhost:8081/api/reservation",rq );
}
getReservationByIdclient(id : number): Observable<Reservations[]> {
  const url = `${this.apiUrl + "/reservation/get-all-by-id-client"}/${id}`;
  return this.http.get<Reservations[]>(url)
}

}
