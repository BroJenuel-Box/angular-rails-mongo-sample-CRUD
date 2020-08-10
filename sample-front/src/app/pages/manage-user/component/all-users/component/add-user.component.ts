import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RequestServiceService } from 'src/app/service/request-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Add user Dialog
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})

export class AddUserComponent {

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



  constructor (
    private RS: RequestServiceService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

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
    }else{
      const form = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.RS.httpRegister('/create_user', form).subscribe(
        (data: any) => {
          this.dialogRef.close(data.user);
          this.submitLoading = false;
        },
        error => { alert(error.error.message); this.submitLoading = false; }
      );
    }
  }

  ngOninit() :void {}

}
