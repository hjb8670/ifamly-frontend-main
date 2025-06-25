import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingsExperienceAssistantPage } from './ratings-experience-assistant.page';

const routes: Routes = [
  {
    path: '',
    component: RatingsExperienceAssistantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingsExperienceAssistantPageRoutingModule {}
