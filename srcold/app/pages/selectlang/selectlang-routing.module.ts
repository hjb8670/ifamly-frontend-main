import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectlangPage } from './selectlang.page';

const routes: Routes = [
  {
    path: '',
    component: SelectlangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectlangPageRoutingModule {}
