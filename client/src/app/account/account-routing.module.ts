import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningComponent } from './components/learning/learning.component';
import { TeachingComponent } from './components/teaching/teaching.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InboxComponent } from './components/inbox/inbox.component';


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
export class AccountRoutingModule { }
