import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabAccountPageRoutingModule } from './tabAccount-routing.module';
import { TabAccountPage } from './tabAccount.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabAccountPageRoutingModule,
    TranslateModule
  ],
  declarations: [TabAccountPage]
})
export class TabAccountPageModule {}
