import { RequestServiceService } from 'src/app/service/request-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample-project';

  load = false;

  constructor(
    private router: Router,
    private SR: RequestServiceService
  ) {
    if (localStorage.getItem('type') != null && localStorage.getItem('token') != null) {
      this.load = true;
      this.SR.httpPost('/check_token').subscribe(
        (data: any) => {
          this.router.navigate([data.type === 1 ? '/admin' : '/regular']);
          this.load = false;
        },
        error => {
          localStorage.clear();
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
