import { HttpClientModule } from '@angular/common/http';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainRouteModule } from './main-route/main-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ExamplesComponent } from './pages/examples-lang/examples.component';
import { ViewChildComponent } from './pages/sample-examples/view-child/view-child.component';
import { SampleComponent } from './components/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    ViewChildComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRouteModule),
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
