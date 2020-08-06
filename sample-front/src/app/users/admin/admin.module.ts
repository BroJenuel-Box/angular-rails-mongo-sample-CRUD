import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutesModule } from './admin-routes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from './main-component/main-component.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule} from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [MainComponentComponent],
  imports: [
    CommonModule,
    AdminRoutesModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ]
})
export class AdminModule { }
