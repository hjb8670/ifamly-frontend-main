import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  @Input() images: string[] = [];
  @Input() startIndex = 0;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log('GalleryPage initialized with images:', this.images);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
