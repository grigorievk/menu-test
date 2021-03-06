import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { reducers, metaReducers } from './store/reducers';

import { AppComponent } from './app.component';
import { PHomeComponent } from './pages/p-home/p-home.component';
import { PDashboardComponent } from './pages/p-dashboard/p-dashboard.component';
import { PNotfoundComponent } from './pages/p-notfound/p-notfound.component';
import { BAsideMenuComponent } from './blocks/b-aside-menu/b-aside-menu.component';
import { BListItemsComponent } from './blocks/b-list-items/b-list-items.component';
import { BHeaderComponent } from './blocks/b-header/b-header.component';

const AppRoutes: Routes = [
  {path: '', component: PHomeComponent},
  {path: 'dashboard', component: PDashboardComponent},
  {path: 'dashboard/:id', component: PDashboardComponent},
  {path: '404', component: PNotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    PHomeComponent,
    PDashboardComponent,
    PNotfoundComponent,
    BAsideMenuComponent,
    BListItemsComponent,
    BHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
