import { Component } from '@angular/core';
import { Reservation } from '../Entity/Reservation.Entity';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listabonnement',
  templateUrl: './listabonnement.component.html',
  styleUrls: ['./listabonnement.component.css']
})
export class ListabonnementComponent {



listreservation:Reservation[]
  constructor(private service:CrudService,private router:Router){}
  ngOnInit(

  ):void{
    this.service.getReservation().subscribe(reservation=>{
      this.listreservation=reservation
    })
  }

}
