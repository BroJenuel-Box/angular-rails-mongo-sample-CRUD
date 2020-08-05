import { AuthGuardGuard } from './guard/auth-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainRouteModule } from './main-route/main-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRouteModule),
    BrowserAnimationsModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
