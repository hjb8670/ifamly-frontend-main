import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportPopoverPage } from './report-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ReportPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportPopoverPageRoutingModule {}
