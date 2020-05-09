import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountModuleRoutingModule } from './account-module-routing.module';
import { AccountLayoutComponent } from './account-layout.component';
import { LearningComponent } from './learning/learning.component';
import { TeachingComponent } from './teaching/teaching.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';


@NgModule({
  declarations: [AccountLayoutComponent, LearningComponent, TeachingComponent, AssignmentComponent, ProfileComponent, InboxComponent],
  imports: [
    CommonModule,
    AccountModuleRoutingModule
  ]
})
export class AccountModuleModule { }
