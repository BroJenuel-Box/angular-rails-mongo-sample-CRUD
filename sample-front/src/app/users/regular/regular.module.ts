import { MainComponentComponent } from './main-component/main-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularRoutingModule } from './regular-routing.module';



@NgModule({
  declarations: [MainComponentComponent],
  imports: [
    CommonModule,
    RegularRoutingModule
  ]
})
export class RegularModule { }
