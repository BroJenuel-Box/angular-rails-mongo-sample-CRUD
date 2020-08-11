import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareWithoutComConComponent } from './share-without-com-con.component';
import { ShareWithoutComConRoutingModule } from './share-without-com-con-routing.module';
import { Com1Module } from 'src/app/components/comp1/com1.module';
import { Comp2Module } from 'src/app/components/comp2/comp2.module';
import { Com3Module } from 'src/app/components/comp3/com3.module';
import { Com4Module } from 'src/app/components/com4-value-setter/com4.module';



@NgModule({
  declarations: [ShareWithoutComConComponent],
  imports: [
    CommonModule,
    ShareWithoutComConRoutingModule,
    Com1Module,
    Comp2Module,
    Com3Module,
    Com4Module
  ]
})
export class ShareWithoutComConModule { }
