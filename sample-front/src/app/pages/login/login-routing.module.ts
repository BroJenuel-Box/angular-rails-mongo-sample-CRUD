import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login/login-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [
    {
      path: '',
      component: LoginPageComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
