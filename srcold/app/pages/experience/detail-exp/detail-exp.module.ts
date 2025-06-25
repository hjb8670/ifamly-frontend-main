import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailExpPageRoutingModule } from './detail-exp-routing.module';

import { DetailExpPage } from './detail-exp.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailExpPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailExpPage]
})
export class DetailExpPageModule {}
