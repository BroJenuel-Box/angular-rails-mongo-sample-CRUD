import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user.component';
import { ManageUserRoutingModule } from './manage-user-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { AllUsersComponent } from './component/all-users/all-users.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './component/all-users/component/add-user.component';


@NgModule({
  declarations: [
    ManageUserComponent,
    AllUsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class ManageUserModule { }
