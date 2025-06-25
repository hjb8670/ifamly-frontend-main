import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IAmALookingForPageRoutingModule } from './i-am-alooking-for-routing.module';

import { IAmALookingForPage } from './i-am-alooking-for.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    IAmALookingForPageRoutingModule,
    TranslateModule
  ],
  declarations: [IAmALookingForPage]
})
export class IAmALookingForPageModule {}
