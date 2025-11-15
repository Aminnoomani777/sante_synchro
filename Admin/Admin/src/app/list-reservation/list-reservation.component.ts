import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import Swal from 'sweetalert2';
import { Reservation } from '../Entity/Reservation.Entity';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent {



  listReservation: Reservation[];
    
      constructor(private service: CrudService, private router: Router) {}
    
      ngOnInit(): void {
        this.service.getReservation().subscribe(packs => {
          this.listReservation= packs;
        });
      }
      


             Deletereservation(reservationPackRq: Reservation): void {
                   Swal.fire({
                        title: 'Etes-vous sur ?',
                        text: `Voulez-vous vraiment supprimer l'Abonnement avec l'ID ${reservationPackRq.id} ?`,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Oui, supprimer',
                        cancelButtonText: 'Annuler'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          this.service.onDeletePack(reservationPackRq.id).subscribe(() => {
                            Swal.fire({
                              icon: 'success',
                              title: 'Compte désactivé',
                              text: 'Le compte a été désactivé avec succès.',
                              showConfirmButton: false,
                              timer: 2000
                            });
                            this.router.navigate(['/list-reservation']).then(() => {
                              window.location.reload();
                            });
                          });
                        }
                      });
                    }





             

}
