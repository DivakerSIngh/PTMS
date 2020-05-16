import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseBasicInfoComponent } from './components/course-basic-info/course-basic-info.component';
import { CoursePublishComponent } from './components/course-publish/course-publish.component';
import { AvailibityComponent } from './components/availibity/availibity.component';
import { CommonModule } from '@angular/common';
import { CourseMediaComponent } from './components/course-media/course-media.component';



const routes: Routes = [
  {path:'',redirectTo:'basic-info'},
  {path:'basic-info',component:CourseBasicInfoComponent},
  {path:'media',component:CourseMediaComponent},
  {path:'publish',component:CoursePublishComponent},
  {path:'slot',component: AvailibityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseSetupRoutingModule { }
