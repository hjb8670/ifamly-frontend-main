import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveRatingsExperienceAssistantPage } from './leave-ratings-experience-assistant.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveRatingsExperienceAssistantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRatingsExperienceAssistantPageRoutingModule {}
