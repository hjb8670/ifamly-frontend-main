import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEditExpPage } from './new-edit-exp.page';

const routes: Routes = [
  {
    path: '',
    component: NewEditExpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewEditExpPageRoutingModule {}
