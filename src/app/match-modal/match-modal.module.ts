import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchModalPageRoutingModule } from './match-modal-routing.module';

import { MatchModalPage } from './match-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchModalPageRoutingModule
  ],
  declarations: [MatchModalPage]
})
export class MatchModalPageModule {}
