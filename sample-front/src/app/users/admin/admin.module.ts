import { AdminRoutesModule } from './admin-routes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from './main-component/main-component.component';



@NgModule({
  declarations: [MainComponentComponent],
  imports: [
    CommonModule,
    AdminRoutesModule
  ]
})
export class AdminModule { }
