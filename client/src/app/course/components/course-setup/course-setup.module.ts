import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseSetupRoutingModule } from './course-setup-routing.module';

import { CourseSetupComponent } from './course-setup.component';
import { CoursePublishComponent } from './components/course-publish/course-publish.component';
import { CourseBasicInfoComponent } from './components/course-basic-info/course-basic-info.component';
import { AvailibityComponent } from './components/availibity/availibity.component';
import { CourseMediaComponent } from './components/course-media/course-media.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};




@NgModule({
  declarations: [CourseSetupComponent,AvailibityComponent, CourseBasicInfoComponent, CoursePublishComponent,CourseMediaComponent],
  imports: [
   
    CourseSetupRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    PerfectScrollbarModule
    
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG  
    }
  ]
})
export class CourseSetupModule { }
