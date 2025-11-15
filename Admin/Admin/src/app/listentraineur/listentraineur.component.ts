import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entraineur } from '../Entity/Entraineur.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-listentraineur',
  templateUrl: './listentraineur.component.html',
  styleUrls: ['./listentraineur.component.css']
})
export class ListentraineurComponent implements OnInit {

  listEntraineur: Entraineur[] ;

  constructor(private service: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.service.getEntraineur().subscribe(entraineur => {
      this.listEntraineur = entraineur;
    });
  }

  DeleteEntraineur(entraineur: Entraineur): void {
    if (confirm("Voulez-vous supprimer cet entraîneur avec l'ID " + entraineur.id + "?")) {
      this.service.onDeleteEntraineur(entraineur.id).subscribe(() => {
        this.router.navigate(['/listentraineur']).then(() => {
          window.location.reload();
        });
      });
    }
  }
}