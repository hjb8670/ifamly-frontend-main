import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonRatingStarsComponent } from 'ion-rating-stars';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { LeaveRatingsPageRoutingModule } from './leave-ratings-routing.module';

import { LeaveRatingsPage } from './leave-ratings.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    IonRatingStarsComponent, 
    LeaveRatingsPageRoutingModule,
    TranslateModule
  ],
  declarations: [LeaveRatingsPage]
})
export class LeaveRatingsPageModule {}
