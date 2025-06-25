import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { CodesPhoneHeadComponent } from './codes-phone-head/codes-phone-head.component';




@NgModule({
  declarations: [
    CodesPhoneHeadComponent
  ],
  exports: [
    TranslateModule,
    CodesPhoneHeadComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ]
})
export class ComponentsModule { }
