import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './shared/component/product-details/product-details.component';
import { ProductFormComponent } from './shared/component/product-form/product-form.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { LoginDashboardComponent } from './shared/component/login-dashboard/login-dashboard.component';
import { RouterLink, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutingModule } from './app-routing-module';
 import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './shared/component/user/user.component';
import { UserFormComponent } from './shared/component/user/user-form/user-form.component';
import { UserDetailsComponent } from './shared/component/user/user-details/user-details.component'
import { MaterialModule } from './shared/Material/material.model';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
// import { MaterialModule } from './shared/Material/mateiral.model';
@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NavbarComponent,
    LoginDashboardComponent,
    HomeDashboardComponent,
    UserComponent,
    UserFormComponent,
    UserDetailsComponent,
    GetConfirmComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    RouterLinkWithHref,
    appRoutingModule ,
    HttpClientModule ,
    MaterialModule,
    ReactiveFormsModule 
],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
