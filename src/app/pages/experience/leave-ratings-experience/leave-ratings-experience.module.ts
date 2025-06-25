import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonRatingStarsComponent } from 'ion-rating-stars';
import { TranslateModule } from '@ngx-translate/core';

import { LeaveRatingsExperiencePageRoutingModule } from './leave-ratings-experience-routing.module';

import { LeaveRatingsExperiencePage } from './leave-ratings-experience.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LeaveRatingsExperiencePageRoutingModule,
    IonRatingStarsComponent,
    TranslateModule
  ],
  declarations: [LeaveRatingsExperiencePage]
})
export class LeaveRatingsExperiencePageModule {}
