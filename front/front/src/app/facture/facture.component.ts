import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { ReservationPack } from '../Entity/ReservationPack.Entities';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {

 /* date: Date = new Date();
  message = "";
  data: ReservationPack | undefined;
  id: any;
  qrCodeData: string | null = null;

  constructor(public service: CrudService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe({
        next: (res: ReservationPack) => {
            this.data = res;
            this.generateQRCode();
        },
        error: (err: any) => {
            console.log(err);
        }
    });
}

generateQRCode() {
    if (this.data && this.data.client) {
        const clientData = Id: ${this.data.client.id}\n  Nom prenom :${this.data.client.nom} ${this.data.client.prenom}\n Email: ${this.data.client.email}\n Telephone : ${this.data.client.tel};
        QRCode.toDataURL(clientData, (err, url) => {
            if (err) {
                console.error(err);
                // Gérer l'erreur ici
            } else {
                this.qrCodeData = url;
            }
        });
    }
}*/
}
