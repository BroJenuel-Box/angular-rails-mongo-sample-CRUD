import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2.component';



@NgModule({
  declarations: [Comp2Component],
  imports: [
    CommonModule
  ],
  exports: [Comp2Component]
})
export class Comp2Module { }
