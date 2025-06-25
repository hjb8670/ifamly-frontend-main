import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMatchPage } from './detail-match.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMatchPageRoutingModule {}
