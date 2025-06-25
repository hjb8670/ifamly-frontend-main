import { Component,ViewChild } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { IonContent, ModalController, NavController, NavParams } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  standalone: true,
  selector: 'app-selectlang',
  templateUrl: './selectlang.page.html',
  styleUrls: ['./selectlang.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, TranslateModule],
})
export class SelectlangPage {
   @ViewChild('scrollableContent', { static: false }) content!: IonContent;
  languages = [];
  pageid: string;

  constructor(
    private languageService: LanguageService,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private activeroute: ActivatedRoute,
     public modalController: ModalController,
    public navparams: NavParams,) {
   
    this.pageid=this.navparams.get('pageid');
    console.log(this.pageid);
    console.log('🧪 SelectlangPage loaded');
  }

  ionViewDidEnter() {
    this.languages = this.languageService.getLanguages();
  }

  close(){
    this.modalController.dismiss();
  }

  sanitizeFlag(flag: string) {
    return this.sanitizer.bypassSecurityTrustHtml(flag);
  }
  async selectLanguage(lang: any) {
    if(this.pageid == 'settings'){
   
      console.log(lang);
      this.languageService.setLanguage(lang.value);
      this.navCtrl.navigateRoot('/main/tabs/account');
       this.modalController.dismiss();
    }
    else{
     this.languageService.setLanguage(lang.value);
    // navigate to next page after selection (e.g., Home or Onboarding)
  
    this.navCtrl.navigateRoot('/registry');
     this.modalController.dismiss();
    }
   
  }

  showScrollIcon: boolean = true;

 async onScroll() {
    const scrollEl = await this.content.getScrollElement();

    const scrollTop = scrollEl.scrollTop;
    const scrollHeight = scrollEl.scrollHeight;
    const offsetHeight = scrollEl.offsetHeight;

    const scrollBottom = scrollTop + offsetHeight;
    const isAtBottom = scrollBottom >= scrollHeight - 30; // buffer

    this.showScrollIcon = !isAtBottom;
  }

}
