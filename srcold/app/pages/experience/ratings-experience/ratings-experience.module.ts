import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RatingsExperiencePageRoutingModule } from './ratings-experience-routing.module';

import { RatingsExperiencePage } from './ratings-experience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingsExperiencePageRoutingModule
  ],
  declarations: [RatingsExperiencePage]
})
export class RatingsExperiencePageModule {}
