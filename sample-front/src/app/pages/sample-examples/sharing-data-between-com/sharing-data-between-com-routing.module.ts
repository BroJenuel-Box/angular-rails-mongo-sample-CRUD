import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharingDataBetweenComComponent } from './sharing-data-between-com.component';

const routes: Routes = [{
  path: '',
  component: SharingDataBetweenComComponent
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharingDataBetweenComRoutingModule { }
