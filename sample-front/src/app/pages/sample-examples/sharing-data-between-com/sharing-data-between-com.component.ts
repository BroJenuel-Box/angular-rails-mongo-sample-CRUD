import { Component, OnInit } from '@angular/core';

// parent component
@Component({
  selector: 'app-sharing-data-between-com',
  templateUrl: './sharing-data-between-com.component.html',
  styleUrls: ['./sharing-data-between-com.component.css']
})
export class SharingDataBetweenComComponent implements OnInit {

  data: string;

  constructor() { }

  ngOnInit(): void {
  }

  getData(event){
    this.data = JSON.stringify(event);
  }

}
