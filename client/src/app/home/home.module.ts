import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RxFormBuilder, RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from '../service/app.service';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { WelcomeComponent } from './components/welcome/welcome.component';




@NgModule({
  declarations: [HomeLayoutComponent, HomeLayoutComponent, LoginComponent, CategoryComponent, WelcomeComponent],
  imports: [    
    HomeRoutingModule,
    CommonModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],providers:[AppService ]
})
export class HomeModule { }
