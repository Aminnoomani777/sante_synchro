import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservations } from '../Entity/Reservations.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-listreservationclient',
  templateUrl: './listreservationclient.component.html',
  styleUrls: ['./listreservationclient.component.css']
})
export class ListreservationclientComponent {





  listeReseravtion:Reservations[];
  constructor(private service:CrudService,private router:Router ) { }
  ngOnInit(): void {
    let datas=this.service.getClientInfo();
      this.service.getReservationByIdclient(datas.id).subscribe(client =>{
        this.listeReseravtion = client
       })
  } 
  isSessionCompleted(planningDate: Date, debut: string, fin: string): string {
    const today = new Date();
    const sessionDate = new Date(planningDate);
    const debutTime = new Date(sessionDate.toDateString() + " " + debut);
    const finTime = new Date(sessionDate.toDateString() + " " + fin);

    if (today < debutTime) {
        return 'Séance en attente';
    } else if (today >= debutTime && today <= finTime) {
        return 'Séance en cours';
    } else {
        return 'Séance terminée';
    }
}

}
