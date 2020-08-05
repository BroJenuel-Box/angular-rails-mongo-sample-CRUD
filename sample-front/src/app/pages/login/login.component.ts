import { RequestServiceService } from './../../service/request-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  username = '';
  password = '';
  hide = true;
  error = false;
  submitLoading = false;

  constructor(
    private RS: RequestServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  login() {
    this.submitLoading = true;
    if (
      this.usernameFormControl.hasError('required') ||
      this.passwordFormControl.hasError('required')
      ) {
        alert('Fields Are Required');
        this.submitLoading = true;
        return true;
    } else {
      this.RS.httpLogin('/login', { username: this.username, password: this.password }).subscribe(
        (data: any) => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('type', data.type);
          this.router.navigate([data.type === 1 ? '/admin' : 'regular']);
          this.submitLoading = false;
        },
        error => {
          alert(error.error);
          this.submitLoading = false;
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
