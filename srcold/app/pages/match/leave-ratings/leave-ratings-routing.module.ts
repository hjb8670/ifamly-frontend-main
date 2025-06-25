import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveRatingsPage } from './leave-ratings.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveRatingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRatingsPageRoutingModule {}
