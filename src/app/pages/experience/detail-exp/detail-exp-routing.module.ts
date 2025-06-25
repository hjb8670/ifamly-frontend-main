import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailExpPage } from './detail-exp.page';

const routes: Routes = [
  {
    path: '',
    component: DetailExpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailExpPageRoutingModule {}
