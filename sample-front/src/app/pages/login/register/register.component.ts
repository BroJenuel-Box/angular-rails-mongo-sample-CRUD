import { Router } from '@angular/router';
import { RequestServiceService } from './../../../service/request-service.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../login.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  email = '';
  emailFormControl = new FormControl('', [
    Validators.email,
    Validators.required
  ]);
  password = '';
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  retypePassword = '';
  retypePasswordValidate = new FormControl('', [
    Validators.required
  ]);
  hide = true;
  hide2 = true;
  submitLoading = false;

  constructor(
    private RS: RequestServiceService,
    private router: Router
    ) { }

  register() {
    this.submitLoading = true;
    if (
      this.usernameFormControl.hasError('required') ||
      this.usernameFormControl.hasError('minLength') ||
      this.emailFormControl.hasError('required') ||
      this.emailFormControl.hasError('email') ||
      this.passwordFormControl.hasError('required') ||
      this.passwordFormControl.hasError('minLength') ||
      this.retypePasswordValidate.hasError('required') ||
      (this.password !== this.retypePassword)
    ) {
      alert('Please Check Form Errors Before Proceeding');
      this.submitLoading = false;
    } else {
      const form = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.RS.httpRegister('/create_user', form).subscribe(
        (data: any) => {
          this.router.navigate(['/login'], {queryParams: { signin: true }});
        },
        error => { console.log(error.error); this.submitLoading = false;}
      );
    }
  }

  ngOnInit(): void {
  }

}
