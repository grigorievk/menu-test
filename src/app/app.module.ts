import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PHomeComponent } from './pages/p-home/p-home.component';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { PNotfoundComponent } from './pages/p-notfound/p-notfound.component';

const AppRoutes: Routes = [
  {path: '', component: PHomeComponent},
  {path: 'dashboard', component: PDashboardComponent},
  {path: '**', component: PNotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PHomeComponent,
    PDashboardComponent,
    PNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
