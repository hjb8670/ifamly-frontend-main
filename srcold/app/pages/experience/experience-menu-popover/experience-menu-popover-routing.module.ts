import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienceMenuPopoverPage } from './experience-menu-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ExperienceMenuPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceMenuPopoverPageRoutingModule {}
