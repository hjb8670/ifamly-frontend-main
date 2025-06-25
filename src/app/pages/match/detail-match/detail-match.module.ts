import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMatchPageRoutingModule } from './detail-match-routing.module';

import { DetailMatchPage } from './detail-match.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMatchPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailMatchPage]
})
export class DetailMatchPageModule {}
