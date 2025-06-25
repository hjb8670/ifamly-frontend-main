import {  LOCALE_ID, Component } from '@angular/core';

import mx from '@angular/common/locales/es-MX';
import localeMx from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';

import { LanguageService } from './services/language.service';
import { FirebaseAuthService } from './services/firebase-auth.service';
import { GoogleSignInService } from './services/google-sign-in.service';
import { ModalController, NavController } from '@ionic/angular';
import { SelectlangPage } from './pages/selectlang/selectlang.page';

registerLocaleData(mx);
registerLocaleData(localeMx, 'es');

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }]
})
export class AppComponent {
  constructor(
    private languageService: LanguageService,
    private firebaseAuthService: FirebaseAuthService,
    public modalController: ModalController,
     private navCtrl: NavController,
    private googleSingInService: GoogleSignInService
  ) {
    
    this.initializeApp();
  }

  async ngOnInit() {

  }


async initializeApp() {
    try {
    // Initialize Language Service
    
    const lang = await this.languageService.getSavedLanguage();
    
    if (lang) {
      // If language is saved, set the language and navigate to the login screen
     console.log(lang);
      this.languageService.setLanguage(lang);
      this.navCtrl.navigateRoot('/registry');  // Navigate to login page
      
    } else {
      // If no language is saved, navigate to language selection page
       this.languageService.setInitialAppLanguage(); // Initialize the app language
      const modal = await this.modalController.create({
        component: SelectlangPage,
        backdropDismiss:false,
        cssClass: 'popupclass',

      });

      modal.onDidDismiss().then(async (dataReturned) => {
      });
      return await modal.present();
     
    }
  } catch (error) {
    console.log('Failed to initialize LANGUAGE: ', error);
    // Fallback to the language selection page in case of an error
    const modal = await this.modalController.create({
        component: SelectlangPage,
        backdropDismiss:false,
        cssClass: 'popupclass',

      });

      modal.onDidDismiss().then(async (dataReturned) => {
      });
      return await modal.present();
  }


  try {
    // Initialize Firebase Auth Service
    await this.firebaseAuthService.initialize();
  } catch (error) {
    console.log('Failed to initialize FIREBASE SERVICES: ', error);
  }

  try {
    // Initialize Google SignIn Service
    this.googleSingInService.initialize();
  } catch (error) {
    console.log('Failed to initialize GOOGLE SERVICES: ', error);
  }
}

}
