import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Entity/Admin.Entity';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent {
  role:String



  listAdmin:Admin[]
  constructor(private service:CrudService,private router:Router){}
  ngOnInit(

  ):void{
    this.role=localStorage.getItem("role" )as String;
    this.service.getAdmin().subscribe(admin=>{
      this.listAdmin=admin
    })
  }
  DeleteAdmin(admin: Admin){
    if(confirm("Voulez vous supprimer ce message de admin avec l'ID " +admin.id+ "?")) {
     
      this.service.onDeleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/listadmin']).then(() => {
          window.location.reload()
        })
      })
   
  }
}

}
