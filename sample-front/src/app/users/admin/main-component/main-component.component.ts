import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  appMenu = [
    {
      title: 'Home',
      icon: 'home',
      route: '/admin'
    },
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

  constructor() {}

  ngOnInit(): void {
  }

}
