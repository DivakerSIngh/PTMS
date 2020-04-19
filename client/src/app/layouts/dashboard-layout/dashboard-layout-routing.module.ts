import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { RfiComponent } from './rfi/rfi.component';
import { MemberComponent } from './member/member.component';


const routes: Routes = [
 
  { path: '',redirectTo: 'dashboard'},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'project',component: ProjectComponent},
  {path: 'task',component: TaskComponent},
  {path: 'rfi',component: RfiComponent},
  {path: 'member',component: MemberComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardLayoutRoutingModule { }
