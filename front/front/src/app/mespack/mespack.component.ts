import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-mespack',
  templateUrl: './mespack.component.html',
  styleUrls: ['./mespack.component.css']
})
export class MespackComponent {

  
  listpack:any=[]
  constructor(private service:CrudService , private router : Router) { }
  
  ngOnInit(): void {
    this.service.getAllPackbySalleDeSportId().subscribe((data:any)=>{
      console.log(data)
      this.listpack=data;
    })
  }


}
