import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabExperiencePage } from './tabExperience.page';

const routes: Routes = [
  {
    path: '',
    component: TabExperiencePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabExperiencePageRoutingModule {}
