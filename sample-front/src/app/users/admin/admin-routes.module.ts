import { MainComponentComponent } from './main-component/main-component.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: MainComponentComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./../../pages/home/home.module').then(mod => mod.HomeModule)
    },
    {
      path: 'about',
      loadChildren: () => import('./../../pages/about/about.module').then(mod => mod.AboutModule)
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutesModule { }
