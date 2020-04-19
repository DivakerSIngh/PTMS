import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RfiComponent } from './rfi/rfi.component';
import { MemberComponent } from './member/member.component';


@NgModule({
  declarations: [DashboardComponent, ProjectComponent, TaskComponent, RfiComponent, MemberComponent],
  imports: [
    CommonModule,
    CarouselModule,
    DashboardLayoutRoutingModule
  ]
})
export class DashboardLayoutModule { }
