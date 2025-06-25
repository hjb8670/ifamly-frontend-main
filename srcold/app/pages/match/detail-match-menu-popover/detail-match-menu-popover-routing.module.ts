import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMatchMenuPopoverPage } from './detail-match-menu-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMatchMenuPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMatchMenuPopoverPageRoutingModule {}
