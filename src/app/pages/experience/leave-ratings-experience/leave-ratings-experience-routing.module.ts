import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveRatingsExperiencePage } from './leave-ratings-experience.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveRatingsExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRatingsExperiencePageRoutingModule {}
