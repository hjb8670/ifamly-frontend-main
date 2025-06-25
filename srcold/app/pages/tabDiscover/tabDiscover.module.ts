import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabDiscoverPage } from './tabDiscover.page';

import { TabDiscoverPageRoutingModule } from './tabDiscover-routing.module';

import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    TabDiscoverPageRoutingModule,
    TranslateModule
  ],
  declarations: [TabDiscoverPage]
})
export class TabDiscoverPageModule {}
