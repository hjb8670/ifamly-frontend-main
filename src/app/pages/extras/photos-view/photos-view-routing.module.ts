import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosViewPage } from './photos-view.page';

const routes: Routes = [
  {
    path: '',
    component: PhotosViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosViewPageRoutingModule {}
