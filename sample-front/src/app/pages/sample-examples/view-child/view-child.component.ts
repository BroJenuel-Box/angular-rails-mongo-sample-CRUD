import { Component, OnInit ,ViewChild, AfterViewInit} from '@angular/core';
import { SampleComponent } from 'src/app/components/sample/sample.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild(SampleComponent) child;
  text = 'this is a text';

  constructor() { }

  ngAfterViewInit() {
    this.text = this.child.componetName;
  }

  ngOnInit(): void {
  }

}
