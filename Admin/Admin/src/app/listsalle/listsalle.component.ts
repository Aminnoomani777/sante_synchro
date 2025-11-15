import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from '../Entity/Salle.Entities';
import { CrudService } from '../service/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listsalle',
  templateUrl: './listsalle.component.html',
  styleUrls: ['./listsalle.component.css']
})
export class ListsalleComponent {






   listSalle: Salle[];
  
    constructor(private service: CrudService, private router: Router) {}
  
    ngOnInit(): void {
      this.service.getSalle().subscribe(salleDeSport => {
        this.listSalle = salleDeSport;
      });
    }
  
    DeleteSalle(salle: Salle): void {
      if (confirm("Voulez-vous supprimer ce message de salle avec l'ID " + salle.id + "?")) {
        this.service.onDeleteSalle(salle.id).subscribe(() => {
          this.router.navigate(['/listsalle']).then(() => {
            window.location.reload();
          });
        });
      }
    }
    updatesalleetat(salle:Salle){
      console.log(salle);
    
      let index=this.listSalle.indexOf(salle);
      if(salle.etat==true)
      {let newSalle=new Salle(salle.id,salle.nom,salle.adress,salle.email,salle.telephone,salle.mp,false)
    this.service.updateSalle(salle.id,newSalle).subscribe
    (
      res=>{console.log(res)
      this.listSalle[index]=newSalle
      Swal.fire({
        icon: "error",
        title: "Compte désactivé",
        text: "Le compte a été désactivé avec succès.",
        showConfirmButton: false,
        timer: 3000
      });
      },
      err=>console.log(err)
    )
      }
     
      else{
    
        let newSalle=new Salle(salle.id,salle.nom,salle.adress,salle.email,salle.telephone,salle.mp,true)
        this.service.updateSalle(salle.id,newSalle).subscribe
      (
        res=>{console.log(res)
        this.listSalle[index]=newSalle
        Swal.fire({
          title: "Succès !",
          text: "Le compte de responsable de salle a été activé avec succès.",
          icon: "success",
          showConfirmButton: false,
          timer: 3000
        });
        
        },
        err=>console.log(err)
      )
    
      }
    
    
    
    }

}
