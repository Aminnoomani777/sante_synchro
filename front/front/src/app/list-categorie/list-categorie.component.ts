import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../Entity/categorie.Entities';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent {


  listCategorie: Categorie[];
  
    constructor(private service: CrudService, private router: Router) {}
  
    ngOnInit(): void {
      this.service.getCategorie().subscribe(clients => {
        this.listCategorie = clients;
      });
    }
  
    DeleteCategorie(categorie: Categorie): void {
      if (confirm("Voulez-vous supprimer ce message de categorie avec l'ID " + categorie.id + "?")) {
        this.service.onDeleteCategorie(categorie.id).subscribe(() => {
          this.router.navigate(['/listcategorie']).then(() => {
            window.location.reload();
          });
        });
      }
    }

}
