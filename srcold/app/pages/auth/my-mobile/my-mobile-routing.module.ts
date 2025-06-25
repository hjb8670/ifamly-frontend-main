import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMobilePage } from './my-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: MyMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMobilePageRoutingModule {}
