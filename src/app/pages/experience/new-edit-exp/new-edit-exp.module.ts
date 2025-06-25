import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewEditExpPageRoutingModule } from './new-edit-exp-routing.module';

import { NewEditExpPage } from './new-edit-exp.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewEditExpPageRoutingModule,
    TranslateModule
  ],
  declarations: [NewEditExpPage]
})
export class NewEditExpPageModule {}
