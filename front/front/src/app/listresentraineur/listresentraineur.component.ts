import { Component } from '@angular/core';
import { Entraineur } from '../Entity/Entraineur.Entities';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listresentraineur',
  templateUrl: './listresentraineur.component.html',
  styleUrls: ['./listresentraineur.component.css']
})
export class ListresentraineurComponent {

   listEntraineur: Entraineur[];
    messageCommande=""
    IsClientIn:boolean
  
    constructor(private service: CrudService, private router: Router,private http: HttpClient,) {}
  
    ngOnInit(): void {
      this.service.getEntraineur().subscribe(entraineurs => {
        this.listEntraineur = entraineurs;
      });
      this.IsClientIn=this.service.isClientIn();
  
     
  
      
    }
  
    reserver(event:any)
  {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    Veuillez patienter ...
  </div>`
    console.log(event)
    let rq:any={}
    rq.idClient=this.service.getClientInfo()?.id
    rq.idEntraineur=event.id
    this.service.reserverentraineur(rq).subscribe((data:any)=>{
   
    
      this.router.navigate([`/payem`]).then(()=>{
        window.location.reload()
      })
    
      this.messageCommande=`<div class="alert alert-success" role="alert">
    Réservé avec succès
  </div>`
    }, err=>{
      this.messageCommande=`<div class="alert alert-warning" role="alert">
     Erreur, Veuillez réssayer !! 
    </div>`

    })
    setTimeout(() => {
      this.messageCommande=""
    }, 3000);
  }

}
