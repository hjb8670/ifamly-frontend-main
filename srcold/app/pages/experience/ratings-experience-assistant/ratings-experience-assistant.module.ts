import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingsExperienceAssistantPageRoutingModule } from './ratings-experience-assistant-routing.module';

import { RatingsExperienceAssistantPage } from './ratings-experience-assistant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingsExperienceAssistantPageRoutingModule
  ],
  declarations: [RatingsExperienceAssistantPage]
})
export class RatingsExperienceAssistantPageModule {}
