import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  message: string;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }

}
