import { NgModule } from '@angular/core';
import { MyButtonModule } from './button/my-button.module';
import { MyHeaderModule } from './header/my-header.module';
import { GetMyDataButtonModule } from './get-my-data-button/get-my-data-button.module';
import { Com3Module } from './comp3/comp3.module';
import { Comp2Module } from './comp2/comp2.module';
import { Com1Module } from './comp1/comp1.module';
import { Com4Module } from './com4-value-setter/comp4.module';

@NgModule({
  imports: [
    MyButtonModule,
    MyHeaderModule,
    GetMyDataButtonModule,
    Com3Module,
    Comp2Module,
    Com1Module,
    Com4Module
  ],
  exports: [
    MyButtonModule,
    MyHeaderModule,
    GetMyDataButtonModule,
    Com3Module,
    Com3Module,
    Comp2Module,
    Com1Module,
    Com4Module
  ],
})
export class MyComponentModule { }
