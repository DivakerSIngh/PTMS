import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/home-layout/login/login.component';
import { SignupComponent } from './layouts/home-layout/signup/signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { MaterialModule } from './shared/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { HomeComponent } from './layouts/home-layout/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeLayoutComponent,
    DashboardLayoutComponent,
    HomeComponent
  ],
  imports: [
    CarouselModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
