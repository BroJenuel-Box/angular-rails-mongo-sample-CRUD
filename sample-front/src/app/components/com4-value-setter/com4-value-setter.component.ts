import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-com4-value-setter',
  templateUrl: './com4-value-setter.component.html',
  styleUrls: ['./com4-value-setter.component.css']
})
export class Com4ValueSetterComponent implements OnInit {

  value = '';
  message: string;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(data => this.message = data)
  }

  newMessage(){
    this.dataservice.changeMessage(this.value);
  }

}
