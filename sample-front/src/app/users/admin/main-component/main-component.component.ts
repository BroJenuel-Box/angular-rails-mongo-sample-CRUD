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
      title: 'about',
      icon: 'about',
      route: 'about'
    }
  ];

  navOpen = true;

  constructor() {}

  ngOnInit(): void {
  }

}
