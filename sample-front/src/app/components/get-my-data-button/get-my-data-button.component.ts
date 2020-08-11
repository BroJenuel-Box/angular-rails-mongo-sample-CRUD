import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-my-data-button',
  templateUrl: './get-my-data-button.component.html',
  styleUrls: ['./get-my-data-button.component.css']
})
export class GetMyDataButtonComponent implements OnInit {

  @Output() getMyData = new EventEmitter<any>();

  myData = {
    name: 'Jenuel',
    Age: '18',
    Address: 'La Trinidad'
  };

  constructor() { }

  MyData() {
    this.getMyData.emit(this.myData);
  }

  ngOnInit(): void {
  }

}
