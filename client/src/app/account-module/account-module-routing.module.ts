import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningComponent } from './learning/learning.component';
import { TeachingComponent } from './teaching/teaching.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';


const routes: Routes = [
  {path:'',redirectTo:'learning',pathMatch:'full'},
  {path:'learning',component:LearningComponent,pathMatch:'full'},
  {path:'teaching',component:TeachingComponent,pathMatch:'full'},
  {path:'assignment',component:AssignmentComponent,pathMatch:'full'},
  {path:'profile',component:ProfileComponent,pathMatch:'full'},
  {path:'inbox',component:InboxComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountModuleRoutingModule { }
