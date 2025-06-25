import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationCodePageRoutingModule } from './verification-code-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { VerificationCodePage } from './verification-code.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    VerificationCodePageRoutingModule,
    TranslateModule
  ],
  declarations: [VerificationCodePage]
})
export class VerificationCodePageModule {}
