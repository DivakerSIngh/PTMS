import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseTakeComponent } from './components/course-take/course-take.component';
import { CourseConfirmationComponent } from './components/course-confirmation/course-confirmation.component';
import { CourseSetupComponent } from './components/course-setup/course-setup.component';




const routes: Routes = [
  {path:'',redirectTo:'courselist'},
  {
    path:'courseinfo',component: CourseInfoComponent,pathMatch:'full'
  },
  {
    path:'courselist',component:CourseListComponent ,pathMatch:'full'
  },
  {
    path:'take/:mode',component: CourseTakeComponent,pathMatch:'full'
  },
  {
    path:'bookingconfirmation',component: CourseConfirmationComponent,pathMatch:'full'
  },  
  {
    path: 'setup',
    component: CourseSetupComponent,
    children: [
      {
      path:'',
      loadChildren: () => import('./components/course-setup/course-setup.module').then(m => m.CourseSetupModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
