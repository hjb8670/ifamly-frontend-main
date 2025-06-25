import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonRatingStarsComponent } from 'ion-rating-stars';
import { TranslateModule } from '@ngx-translate/core';

import { LeaveRatingsExperienceAssistantPageRoutingModule } from './leave-ratings-experience-assistant-routing.module';

import { LeaveRatingsExperienceAssistantPage } from './leave-ratings-experience-assistant.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LeaveRatingsExperienceAssistantPageRoutingModule,
    IonRatingStarsComponent,
    TranslateModule
  ],
  declarations: [LeaveRatingsExperienceAssistantPage]
})
export class LeaveRatingsExperienceAssistantPageModule {}
