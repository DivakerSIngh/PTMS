import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountLayoutComponent } from '../account-module/account-layout.component';
import { CourseLayoutComponent } from '../course-module/course-layout.component';


const routes: Routes = [
  {
    path:'',component: HomeComponent,pathMatch:'full'
  },
  {
    path:'login',component: LoginComponent,pathMatch:'full'
  }, 
  {
    path:'login/:returnUrl/:mode',component: LoginComponent,pathMatch:'full'
  }, 
  {
    path: 'account',
    component: AccountLayoutComponent,
    children: [
      {
      path:'',
      loadChildren: () => import('../account-module/account-module.module').then(m => m.AccountModuleModule)
    }
  ]
  },
  {
    path: 'course',
    component: CourseLayoutComponent,
    children: [
      {
      path:'',
      loadChildren: () => import('../course-module/course-module.module').then(m => m.CourseModuleModule)
    }
  ]
  }
 
 
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
