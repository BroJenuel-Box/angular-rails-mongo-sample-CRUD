import { MainComponentComponent } from './main-component/main-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponentComponent,
    children: [
      {
        path: 'about',
        loadChildren: () => import('./../../pages/about/about.module').then(mod => mod.AboutModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegularRoutingModule { }
