import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabMatchPage } from './tabMatch.page';

import { TabMatchPageRoutingModule } from './tabMatch-routing.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabMatchPageRoutingModule,
    TranslateModule
  ],
  declarations: [TabMatchPage]
})
export class TabMatchPageModule {}
