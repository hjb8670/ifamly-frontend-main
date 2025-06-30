import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {
  @Input() images: string[] = [];
  @Input() startIndex = 0;

  constructor(private modalCtrl: ModalController) {}

  ionViewDidEnter() {
    console.log('GalleryPage: images =', this.images);
    console.log('GalleryPage: startIndex =', this.startIndex);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
