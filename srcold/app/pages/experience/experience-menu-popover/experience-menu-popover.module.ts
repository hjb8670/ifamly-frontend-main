import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperienceMenuPopoverPageRoutingModule } from './experience-menu-popover-routing.module';
import { ExperienceMenuPopoverPage } from './experience-menu-popover.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienceMenuPopoverPageRoutingModule,
    TranslateModule
  ],
  declarations: [ExperienceMenuPopoverPage]
})
export class ExperienceMenuPopoverPageModule {}
