import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/service/request-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./../login.component.css']
})
export class LoginPageComponent implements OnInit {

  username = '';
  password = '';
  hide = true;
  error = false;
  submitLoading = false;

  constructor(
    private RS: RequestServiceService,
    private router: Router,
    public route: ActivatedRoute
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
          alert(error.error.message);
          this.submitLoading = false;
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
