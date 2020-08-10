import { Component, OnInit } from "@angular/core";
import { RequestServiceService } from "src/app/service/request-service.service";
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from './component/add-user.component';

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./../../manage-user.component.css"],
})
export class AllUsersComponent implements OnInit {
  displayedColumns: string[] = ["_id", "username", "email", "type", "action"];
  dataSource = [];

  // pagination
  limit = 10;
  length = 0;

  constructor(
      private RS: RequestServiceService,
      private dialog: MatDialog,
    ) {
    this.getAllUser();
  }

  getAllUser(page = 1) {
    this.RS.httpGet("/get_users", { limit: this.limit, page: page }).subscribe(
      (data: any) => {
        this.dataSource = data.data;
        this.length = data.count;
      },
      (error) => {
        console.log(error.error);
      }
    );
  }

  addUserDialog() {
    const dialogref = this.dialog.open(AddUserComponent, {
      width: '300px',
      data: {
        animal: 'tiger'
      }
    });

    dialogref.afterClosed().subscribe((result: any) => {
      console.log(result)
      this.dataSource.push(
        {
          _id: result._id,
          username: result.username,
          email: result.email,
          type: result.type
        }
      )
      console.log(this.dataSource);
    });
  }

  checkPage(event){
    this.limit = event.pageSize;
    this.getAllUser(event.pageIndex + 1);
  }

  ngOnInit(): void {}
}




