import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';

import { LearningComponent } from './components/learning/learning.component';
import { TeachingComponent } from './components/teaching/teaching.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';


@NgModule({
  declarations: [AccountLayoutComponent, LearningComponent, TeachingComponent, AssignmentComponent, ProfileComponent, InboxComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
