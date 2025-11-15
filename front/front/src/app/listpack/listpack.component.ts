import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from '../Entity/Pack.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-listpack',
  templateUrl: './listpack.component.html',
  styleUrls: ['./listpack.component.css']
})
export class ListpackComponent {

  listPack: Pack[];
  messageCommande=""
  IsClientIn:boolean

  constructor(private service: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.service.getPack().subscribe(packs => {
      this.listPack = packs;
    });
    this.IsClientIn=this.service.isClientIn();

   

    
  }

  goToLogin() {
    this.router.navigate(['/loginclient']);
  }
  

  reserver(event:any)
  {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    Veuillez patienter ...
  </div>`
    console.log(event)
    let rq:any={}
    rq.idClient=this.service.getClientInfo()?.id
    rq.idPack=event.id
   
    console.log(rq,"what we senddddd")
    this.service.reserverFromApi(rq).subscribe((data:any)=>{
      const id=data.id

      this.router.navigate([`/payement/${id}`]).then(()=>{
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
  


