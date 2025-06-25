import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMessagePage } from './tabMessage.page';

const routes: Routes = [
  {
    path: '',
    component: TabMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMessagePageRoutingModule {}
