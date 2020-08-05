import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  email = '';
  password = '';
  hide = true;
  error = false;

  constructor() { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  login() {
    if (
      this.emailFormControl.hasError('email') ||
      this.emailFormControl.hasError('required') ||
      this.passwordFormControl.hasError('required') ||
      this.passwordFormControl.hasError('minLength')
      ) {
        this.error = true;
        return true;
    } else {
      alert('Logined');
    }
  }

  ngOnInit(): void {
  }

}
