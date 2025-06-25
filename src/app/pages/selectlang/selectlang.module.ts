import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectlangPageRoutingModule } from './selectlang-routing.module';
import { SelectlangPage } from './selectlang.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SelectlangPageRoutingModule
  ],
  declarations: [SelectlangPage]
})
export class SelectlangPageModule {}
