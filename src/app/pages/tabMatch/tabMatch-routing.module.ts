import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabMatchPage } from './tabMatch.page';

const routes: Routes = [
  {
    path: '',
    component: TabMatchPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabMatchPageRoutingModule {}
