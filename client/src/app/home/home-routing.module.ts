import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountLayoutComponent } from '../account/components/account-layout/account-layout.component';
import { CourseLayoutComponent } from '../course/components/course-layout/course-layout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TestComponent } from './components/test/test.component';



const routes: Routes = [
  {
    path:'',component: WelcomeComponent,pathMatch:'full'
  },
  {
    path:'test',component: TestComponent,pathMatch:'full'
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
      loadChildren: () => import('../account/account.module').then(m => m.AccountModule)
    }
  ]
  },
  {
    path: 'course',
    component: CourseLayoutComponent,
    children: [
      {
      path:'',
      loadChildren: () => import('../course/course.module').then(m => m.CourseModule)
    }
  ]
  }
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
