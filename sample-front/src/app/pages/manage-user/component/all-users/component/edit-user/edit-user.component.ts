import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { RequestServiceService } from "src/app/service/request-service.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
})
export class EditUserComponent implements OnInit {
  // form
  username = "";
  usernameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(5),
  ]);

  email = "";
  emailFormControl = new FormControl("", [
    Validators.email,
    Validators.required,
  ]);
  type = "";

  submitLoading = false;

  constructor(
    private RS: RequestServiceService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  update() {
    this.submitLoading = true;
    if (
      this.usernameFormControl.hasError("required") ||
      this.usernameFormControl.hasError("minLength") ||
      this.emailFormControl.hasError("required") ||
      this.emailFormControl.hasError("email")
    ) {
      alert("Please Check Input Field Before Proceeing");
      this.submitLoading = false;
    } else {
      this.RS.httpPut("/update_user", this.data).subscribe(
        (data: any) => {
          this.dialogRef.close(data);
          this.submitLoading = false;
        },
        (error) => {
          alert(error.error.message);
          this.submitLoading = false;
        }
      );
    }
  }

  ngOnInit(): void {}
}
