import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  message: any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(data => this.message = data);
  }

}
