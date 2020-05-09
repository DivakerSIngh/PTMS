import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseModuleRoutingModule } from './course-module-routing.module';
import { CourseLayoutComponent } from './course-layout.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseConfirmationComponent } from './course-confirmation/course-confirmation.component';
import { CourseTakeComponent } from './course-take/course-take.component';
import { LoginComponent } from '../home-module/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BargainComponent } from './bargain/bargain.component';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

@NgModule({
  declarations: [CourseLayoutComponent, CourseInfoComponent, CourseListComponent, CourseTakeComponent, CourseConfirmationComponent, BargainComponent],
  imports: [
    MatDialogModule,
    CourseModuleRoutingModule,
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
export class CourseModuleModule { }
