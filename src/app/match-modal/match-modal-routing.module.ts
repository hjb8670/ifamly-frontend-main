import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchModalPage } from './match-modal.page';

const routes: Routes = [
  {
    path: 'match-notification',
    component: MatchModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchModalPageRoutingModule {}
