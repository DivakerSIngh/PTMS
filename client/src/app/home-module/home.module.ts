import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './home-layout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';




@NgModule({
  declarations: [HomeComponent, HomeLayoutComponent, LoginComponent, CategoryComponent],
  imports: [    
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }
