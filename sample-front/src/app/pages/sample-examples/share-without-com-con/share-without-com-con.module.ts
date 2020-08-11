import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareWithoutComConComponent } from './share-without-com-con.component';
import { ShareWithoutComConRoutingModule } from './share-without-com-con-routing.module';
import { Com1Module } from 'src/app/components/comp1/comp1.module';
import { Comp2Module } from 'src/app/components/comp2/comp2.module';
import { Com3Module } from 'src/app/components/comp3/comp3.module';
import { Com4Module } from 'src/app/components/com4-value-setter/comp4.module';
import { DataService } from 'src/app/service/data.service';



@NgModule({
  declarations: [ShareWithoutComConComponent],
  imports: [
    CommonModule,
    ShareWithoutComConRoutingModule,
    Com1Module,
    Comp2Module,
    Com3Module,
    Com4Module
  ],
  providers: [
    DataService
  ]
})
export class ShareWithoutComConModule { }
