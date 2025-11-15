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
  
    constructor(private service: CrudService, private router: Router) {}
  
    ngOnInit(): void {
      this.service.getPack().subscribe(packs => {
        this.listPack = packs;
      });
    }
  
    DeletePack(pack: Pack): void {
      if (confirm("Voulez-vous supprimer ce message de pack avec l'ID " + pack.id + "?")) {
        this.service.onDeletePack(pack.id).subscribe(() => {
          this.router.navigate(['/listpack']).then(() => {
            window.location.reload();
          });
        });
      }
    }

}
