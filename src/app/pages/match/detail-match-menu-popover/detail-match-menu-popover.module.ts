import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMatchMenuPopoverPageRoutingModule } from './detail-match-menu-popover-routing.module';

import { DetailMatchMenuPopoverPage } from './detail-match-menu-popover.page';
import { TranslateModule } from '@ngx-translate/core';
import { ReportPopoverPageRoutingModule } from '../report-popover/report-popover-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMatchMenuPopoverPageRoutingModule,
    ReportPopoverPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailMatchMenuPopoverPage]
})
export class DetailMatchMenuPopoverPageModule {}
