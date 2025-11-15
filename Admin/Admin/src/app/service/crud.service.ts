import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entity/Admin.Entity';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Client } from '../Entity/Client.Entities';
import { Entraineur } from '../Entity/Entraineur.Entities';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Salle } from '../Entity/Salle.Entities';
import { Categorie } from '../Entity/categorie.Entities';
import { Pack } from '../Entity/Pack.Entities';
import { Contact } from '../Entity/Contact.Entities';
import { Reservation } from '../Entity/Reservation.Entity';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  
  private unreadContactsCount = new BehaviorSubject<number>(0);
  unreadContactsCount$ = this.unreadContactsCount.asObservable();

  apiUrl='http://localhost:8081/api'
  loginUserUrl='http://localhost:8081/api/admin/login'
  helper=new JwtHelperService()

  constructor(    private http:HttpClient) { 



  }

 


  addadmin(admin:Admin){
    return this.http.post<any>(this.apiUrl+"/admin", admin);
  }
  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl + "/admin");
  }
  getReservation(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl + "/packres");
  }
onDeleteAdmin(id: number){
    const url =`${this.apiUrl+"/admin"}/${id}` 
    return this.http.delete(url )
  }

  loginAdmin(admin:Admin){
    return this.http.post<any>(this.loginUserUrl, admin);
  }


  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl + "/client"); 
  }
  
  onDeleteClient(id: number): Observable<void> {
    const url = `${this.apiUrl + "/client"}/${id}`;
    return this.http.delete<void>(url);
  }

  getSalle(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.apiUrl + "/salleDeSport"); 
  }
  
  
  onDeleteSalle(id: number): Observable<void> {
    const url = `${this.apiUrl + "/salleDeSport"}/${id}`;
    return this.http.delete<void>(url);
  }
  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl + "/contact"); 
  }
  
  
  onDeleteContact(id: number): Observable<void> {
    const url = `${this.apiUrl + "/contact"}/${id}`;
    return this.http.delete<void>(url);
  }

 // getEntraineur(): Observable<Entraineur[]> {
//    return this.http.get<Entraineur[]>(`${this.apiUrl}/entraineur`);
  //}

  //onDeleteEntraineur(id: number): Observable<void> {
  //  return this.http.delete<void>(`${this.apiUrl}/entraineur/${id}`);
 // }

 getEntraineur(): Observable<Entraineur[]> {
  return this.http.get<Entraineur[]>(this.apiUrl + "/entraineur"); 
}


onDeleteEntraineur(id: number): Observable<void> {
  const url = `${this.apiUrl + "/entraineur"}/${id}`;
  return this.http.delete<void>(url);
}
findAdminById(id : number): Observable<Admin> {
  const url = `${this.apiUrl + "/admin"}/${id}`;
  return this.http.get<Admin>(url)
}

updateAdmin(id:number,admin: Admin) {
  const url = `${this.apiUrl+"/admin"}/${id}`
  return this.http.put<any>(url,admin);
}

findClientById(id : number): Observable<Client> {
  const url = `${this.apiUrl + "/client"}/${id}`;
  return this.http.get<Client>(url)
}
updateClient(id:number,client: Client) {
  const url = `${this.apiUrl+"/client"}/${id}`
  return this.http.put<any>(url,client);
}
findEntraineurById(id : number): Observable<Client> {
  const url = `${this.apiUrl + "/entraineur"}/${id}`;
  return this.http.get<Entraineur>(url)
}
updateEntraineur(id:number,entraineur: Entraineur) {
  const url = `${this.apiUrl+"/entraineur"}/${id}`
  return this.http.put<any>(url,entraineur);
}
findSalleById(id : number): Observable<Salle> {
  const url = `${this.apiUrl + "/salleDeSport"}/${id}`;
  return this.http.get<Salle>(url)
}
updateSalle(id:number,salle: Salle) {
  const url = `${this.apiUrl+"/salleDeSport"}/${id}`
  return this.http.put<any>(url,salle);
}

findCategorieById(id : number): Observable<Categorie> {
  const url = `${this.apiUrl + "/categorie"}/${id}`;
  return this.http.get<Categorie>(url)
}
updateCategorie(id:number,salle: Categorie) {
  const url = `${this.apiUrl+"/categorie"}/${id}`
  return this.http.put<any>(url,salle);
}
getCategorie(): Observable<Categorie[]> {
  return this.http.get<Categorie[]>(this.apiUrl + "/categorie"); 
}





onDeleteCategorie(id: number): Observable<void> {
  const url = `${this.apiUrl + "/categorie"}/${id}`;
  return this.http.delete<void>(url);
}


isLoggedIn(){
  
  let token = localStorage.getItem("myToken");

  if (token) {
    return true ;
  } else {
    return false;
  }
}
userDetails(){
  let token:any=localStorage.getItem('myToken'); 
  let decodeToken= this.helper.decodeToken(token);
   return decodeToken.data;
 }


 getPack(): Observable<Pack[]> {
  return this.http.get<Pack[]>(this.apiUrl + "/pack"); 
}

onDeletePack(id: number): Observable<void> {
  const url = `${this.apiUrl + "/pack"}/${id}`;
  return this.http.delete<void>(url);
}

updatePack(id:number,salle: Pack) {
  const url = `${this.apiUrl+"/pack"}/${id}`
  return this.http.put<any>(url,salle);
}
findPackById(id : number): Observable<Pack> {
  const url = `${this.apiUrl + "/pack"}/${id}`;
  return this.http.get<Pack>(url)
}



markContactAsRead(id: number): Observable<any> {
  return this.http.put(`${this.apiUrl}/contact/markAsRead/${id}`, {});
}

markAllContactsAsRead(): Observable<any> {
  return this.http.put(`${this.apiUrl}/contact/markAllAsRead`, {});
}

getUnreadContactCount(): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/contact/unread/count`);
}

getContact1(): Observable<Contact[]> {
  return this.http.get<Contact[]>(this.apiUrl + "/contact").pipe(
    map(contacts => {
      console.log(contacts);  // ← ici
      return contacts.map(c => new Contact(
        c.id, c.nom, c.email, c.telephone, c.message, c.sujet, c.read, c.createdAt
      ));
    })
  );
}


}
