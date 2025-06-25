import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosViewPageRoutingModule } from './photos-view-routing.module';

import { PhotosViewPage } from './photos-view.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosViewPageRoutingModule,
    TranslateModule
  ],
  declarations: [PhotosViewPage]
})
export class PhotosViewPageModule {}
