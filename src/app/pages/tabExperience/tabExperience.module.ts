import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabExperiencePage } from './tabExperience.page';

import { TabExperiencePageRoutingModule } from './tabExperience-routing.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabExperiencePageRoutingModule,
    TranslateModule
  ],
  declarations: [TabExperiencePage]
})
export class TabExperiencePageModule {}
