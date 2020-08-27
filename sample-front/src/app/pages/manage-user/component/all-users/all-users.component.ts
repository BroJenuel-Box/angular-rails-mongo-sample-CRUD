import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/service/request-service.service';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from './component/add-user/add-user.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./../../manage-user.component.css'],
})
export class AllUsersComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'username', 'email', 'type', 'action'];
  dataSource = [];


  // search
  search = '';
  // pagination
  limit = 10;
  length = 0;
  page = 1;

  constructor(
      private RS: RequestServiceService,
      private dialog: MatDialog,
    ) {
    this.getAllUser();
  }

  getAllUser() {
    this.RS.httpGet('/get_users', { limit: this.limit, page: this.page, search: this.search  }).subscribe(
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
      console.log(result);
      if (this.dataSource.length === 10) {
        return true;
      }
      this.dataSource = [...this.dataSource, {
        _id: result._id,
        username: result.username,
        email: result.email,
        type: result.type
      }];
      console.log(this.dataSource);
    });
  }

  deleteUser(user) {
    if (confirm('Are you sure to remove ' + user.username)) {
      this.RS.httpDelete('/delete_user?id=' + user._id.$oid).subscribe(
        (data: any) => {
          this.getAllUser();
          alert(data.message);
        },
        error => {
          console.log(error.error.message)
        }
      );
    } else {
      return true;
    }
  }

  editUser(user) {
    const dialogref = this.dialog.open(EditUserComponent, {
      width: '300px',
      data: {
        id: user._id.$oid,
        username: user.username,
        email: user.email,
        type: user.type + ''
      }
    });

    dialogref.afterClosed().subscribe((result: any) => {
      this.getAllUser();
      console.log(result);
    });
  }

  checkPage(event){
    this.limit = event.pageSize;
    this.page = event.pageIndex + 1;
    this.getAllUser();
  }

  ngOnInit(): void {}
}




