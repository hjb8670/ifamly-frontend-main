import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabDiscoverPage } from './tabDiscover.page';

const routes: Routes = [
  {
    path: '',
    component: TabDiscoverPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabDiscoverPageRoutingModule {}
