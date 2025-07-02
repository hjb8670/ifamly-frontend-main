import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { NotificationPromptPageRoutingModule } from './notification-prompt-routing.module';
import { NotificationPromptPage } from './notification-prompt.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NotificationPromptPageRoutingModule
  ],
  declarations: [NotificationPromptPage]
})
export class NotificationPromptPageModule {}
