import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {


  message: string;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(data => this.message = data);
  }

}
