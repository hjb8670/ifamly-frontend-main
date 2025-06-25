import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMessagePageRoutingModule } from './tabMessage-routing.module';

import { TabMessagePage } from './tabMessage.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMessagePageRoutingModule,
    TranslateModule
  ],
  declarations: [TabMessagePage]
})
export class TabMessagePageModule {}
