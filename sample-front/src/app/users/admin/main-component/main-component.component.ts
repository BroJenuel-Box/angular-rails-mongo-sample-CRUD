import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  appMenu = [
    // {
    //   title: 'Home',
    //   icon: 'home',
    //   route: 'home'
    // },
    {
      title: 'Manage Users',
      icon: 'person',
      route: 'manage-user'
    },
    {
      title: 'about',
      icon: 'priority_high',
      route: 'about'
    }
  ];

  navOpen = true;

  constructor(
    private router: Router
  ) {}

  logout(){
    if(confirm("Are YOu Sure To Logout?")){
      localStorage.clear();
      this.router.navigate(['/login']);
    }else{
      return true;
    }
  }

  ngOnInit(): void {
  }

}
