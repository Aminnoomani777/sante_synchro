import { Component } from '@angular/core';
import { Client } from '../Entity/Client.Entities';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent {

  listClient: Client[];

  constructor(private service: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.service.getClient().subscribe(clients => {
      this.listClient = clients;
    });
  }

  DeleteClient(client: Client): void {
    if (confirm("Voulez-vous supprimer ce message de client avec l'ID " + client.id + "?")) {
      this.service.onDeleteClient(client.id).subscribe(() => {
        this.router.navigate(['/listclient']).then(() => {
          window.location.reload();
        });
      });
    }
  }
}
