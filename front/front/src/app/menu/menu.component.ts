import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  IsCoachIn:boolean
  IsSalleIn:boolean
  IsClientIn:boolean
 
  constructor(private service:CrudService,private router:Router) { }

  ngOnInit(): void {
    this.IsCoachIn=this.service.isCoachIn();
    this.IsSalleIn=this.service.isSalleInIn();
    this.IsClientIn=this.service.isClientIn();
  }
 

  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/']).then(() => {
      window.location.reload()
    })
    
  }

  showDropdown: boolean = false;

toggleDropdown() {
  this.showDropdown = !this.showDropdown;
}

navigateToLogin(event: any) {
  const selectedValue = event.target.value;
  if (selectedValue) {
    this.router.navigate([selectedValue]);
  }
}


}
