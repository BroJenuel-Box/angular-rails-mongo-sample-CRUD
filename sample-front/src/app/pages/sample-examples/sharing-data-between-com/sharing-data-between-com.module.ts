import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharingDataBetweenComComponent } from './sharing-data-between-com.component';
import { SharingDataBetweenComRoutingModule } from './sharing-data-between-com-routing.module';
import { MyComponentModule } from 'src/app/components/my-component.module';



@NgModule({
  declarations: [SharingDataBetweenComComponent],
  imports: [
    CommonModule,
    SharingDataBetweenComRoutingModule,
    MyComponentModule
  ]
})
export class SharingDataBetweenComModule { }
