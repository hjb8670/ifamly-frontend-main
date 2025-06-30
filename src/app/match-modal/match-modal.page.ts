import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-match-modal',
  templateUrl: './match-modal.page.html',
  styleUrls: ['./match-modal.page.scss'],
})
export class MatchModalPage {
  @Input() matchedUserName: string;
  @Input() matchedUserImage: string;
  @Input() currentUserImage: string;

  constructor(private modalCtrl: ModalController) {}

  sendMessage() {
    this.modalCtrl.dismiss({ action: 'message' });
  }

  keepSwiping() {
    this.modalCtrl.dismiss({ action: 'swipe' });
  }

  async share() {
    await Share.share({
      title: 'It’s a Match!',
      text: `I just matched with ${this.matchedUserName} on the app! 🎉`,
      url: 'https://play.google.com/store/apps/details?id=com.yourapp.package',
      dialogTitle: 'Share with your friends',
    });

    this.modalCtrl.dismiss({ action: 'share' });
  }
}
