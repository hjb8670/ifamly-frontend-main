import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingsExperiencePage } from './ratings-experience.page';

const routes: Routes = [
  {
    path: '',
    component: RatingsExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingsExperiencePageRoutingModule {}
