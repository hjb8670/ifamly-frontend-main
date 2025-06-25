import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyMobilePageRoutingModule } from './my-mobile-routing.module';
import { MyMobilePage } from './my-mobile.page';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MyMobilePageRoutingModule,
    ComponentsModule,
    TranslateModule,
  ],
  declarations: [MyMobilePage]
})
export class MyMobilePageModule {}
