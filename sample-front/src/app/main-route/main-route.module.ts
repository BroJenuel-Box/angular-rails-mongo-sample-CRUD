import { AuthGuardGuard } from './../guard/auth-guard.guard';
import { Routes } from '@angular/router';
import { ExamplesComponent } from '../pages/examples-lang/examples.component';
import { ViewChildComponent } from '../pages/sample-examples/view-child/view-child.component';

export const  MainRouteModule: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./../pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./../users/admin/admin.module').then(mod => mod.AdminModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'regular',
    loadChildren: () => import('./../users/regular/regular.module').then(mod => mod.RegularModule)
  },
  {
    path: 'example-component-path',
    component: ExamplesComponent
  },
  {
    path: 'sharing-data-between-components',
    loadChildren: () => import('./../pages/sample-examples/sharing-data-between-com/sharing-data-between-com.module').then(mod => mod.SharingDataBetweenComModule)

  },
  {
    path: 'share-data-from-neighbors',
    loadChildren: () => import('./../pages/sample-examples/share-without-com-con/share-without-com-con.module').then(mod => mod.ShareWithoutComConModule)
  },
  {
    path: 'view-child',
    component: ViewChildComponent
  },
  {
    path: '',   redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./../pages/notfound/notfound.module').then(mod => mod.NotfoundModule)
  }
];
