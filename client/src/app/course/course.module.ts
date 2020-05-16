import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CourseRoutingModule } from './course-routing.module';
import { CourseLayoutComponent } from './components/course-layout/course-layout.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseTakeComponent } from './components/course-take/course-take.component';
import { CourseConfirmationComponent } from './components/course-confirmation/course-confirmation.component';
import { BargainComponent } from './components/bargain/bargain.component';
import { LoginComponent } from '../home/components/login/login.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

@NgModule({
  declarations: [CourseLayoutComponent, CourseInfoComponent, CourseListComponent, CourseTakeComponent, CourseConfirmationComponent, BargainComponent],
  imports: [
    MatDialogModule,
    CourseRoutingModule,
    CommonModule,
    PerfectScrollbarModule
    
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG  
    }
  ],entryComponents:[LoginComponent,BargainComponent]

})
export class CourseModule { }
