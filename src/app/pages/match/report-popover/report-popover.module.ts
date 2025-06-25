import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPopoverPageRoutingModule } from './report-popover-routing.module';

import { ReportPopoverPage } from './report-popover.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPopoverPageRoutingModule,
    TranslateModule
  ],
  declarations: [ReportPopoverPage]
})
export class ReportPopoverPageModule {}
