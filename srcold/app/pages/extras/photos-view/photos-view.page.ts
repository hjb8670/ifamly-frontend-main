import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Image, PhotoViewer, ViewerOptions, capShowOptions } from '@capacitor-community/photoviewer';
import { AnimationController, IonModal } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ImagesUser } from 'src/app/interfaces/interfaces';
import { MatchService } from 'src/app/services/match.service';
import { UiService } from 'src/app/services/ui.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { UtilitiesService } from 'src/app/services/utilities.service';
@Component({
  selector: 'app-photos-view',
  templateUrl: './photos-view.page.html',
  styleUrls: ['./photos-view.page.scss'],
})
export class PhotosViewPage implements OnInit {
  @ViewChild('mPhoto') modalPhoto: IonModal;
  public galleryImgs:  ImagesUser[];
  public imgsChecked = [];
canDelete: boolean = false;
  name_img: string;
  image: string;
  base64Imagebulk: any;
  constructor(private translate: TranslateService,
    private matchService: MatchService,
    private uiService: UiService,
    private router: Router,
    private animationCtrl: AnimationController,
  ) { }

  async ngOnInit() {
    await this.principal();
    this.checkDeleteEligibility();
  }

  checkDeleteEligibility() {
  this.canDelete = this.galleryImgs.length > 1;
}

files: FileList | undefined;
arr: any[] = [];

async testup(event: any) {
  const files = event.target.files;
  this.arr = []; // clear previous entries

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = async (e: any) => {
      const result = e.target.result;
      const base64Data = result.split(',')[1];

      // Compress base64 image before pushing
      const compressed = await UtilitiesService.compressBase64Image(base64Data, 800, 800, 0.7);

      this.arr.push({
        multimediaName: file.name,
        multimediaBase64: compressed,
        avatar: true  // or false depending on your use-case
      });

      // Wait until all files are processed
      if (this.arr.length === files.length) {
        let resp = await this.matchService.uploadIMG(this.arr);
    this.uiService.hideLoader();
    if(resp){
     console.log(resp);
     this.uiService.alertOK(this.translate.instant('ACCOUNT.multipleimagesuccess'));
     await this.principal();
    }else{
      this.uiService.alertOK(this.translate.instant('ACCOUNT.imageError'));
    }
      }
    };

    reader.onerror = (err) => {
      console.error("FileReader error:", err);
      alert('Error reading file.');
    };

    reader.readAsDataURL(file);
  }
}

  // async addPhoto() {
  //   console.log('ADD PHOTO');

  //   const imge = await Camera.getPhoto({
  //     quality: 100,
  //     allowEditing: false,
  //     resultType: CameraResultType.Base64
  //   });
    
   
  //   this.name_img = 'profile.'+imge.format;
  //   this.image = imge.base64String;
  //   this.uiService.showLoader();
    
  //   let resp = await this.matchService.uploadIMG(this.name_img, this.image, true);
  //   this.uiService.hideLoader();
  //   if(resp){
  //     await this.iniUsr();
  //     this.uiService.alertOK(this.translate.instant('ACCOUNT.imageSuccess'));
  //   }else{
  //     this.uiService.alertOK(this.translate.instant('ACCOUNT.imageError'));
  //   }
  // }
  iniUsr() {
    throw new Error('Method not implemented.');
  }

  async principal() {
    this.uiService.showLoader();
    this.imgsChecked = []; // ← empty array for storing selected image IDs
  
    this.galleryImgs = <ImagesUser[]> await this.matchService.getIMGS('');
    if (!this.galleryImgs) {
      this.galleryImgs = [];
    }
  
    this.uiService.hideLoader();
  }
  

  async save() {
    if (this.imgsChecked.length === 0) {
      this.uiService.alertOK(this.translate.instant('PHOTO-VIEW.notSelected'));
      return;
    }
  
    const selectedId = this.imgsChecked[0];
    const selectedImg = this.galleryImgs.find(img => img.imageId === selectedId);
  
    if (!selectedImg) {
      this.uiService.alertOK(this.translate.instant('PHOTO-VIEW.saveError'));
      return;
    }
  
    this.uiService.showLoader();
    const resp = await this.matchService.setAvatarIMG(selectedImg.imageId.toString());
    this.uiService.hideLoader();
  
    if (resp) {
      await this.uiService.alertOK_CANCEL(this.translate.instant('PHOTO-VIEW.save'));
      this.router.navigate(['main/tabs/account'], { queryParams: { reload: true } });
    } else {
      this.uiService.alertOK(this.translate.instant('PHOTO-VIEW.saveError'));
    }
  }
  

  async openPhoto(url: string) {
    const img: Image[] = [{
      url: url
    }];

    const opImg: ViewerOptions = {
      share: false,
      title: false,
      transformer: 'zoom'
    };

    const optPhoto: capShowOptions = {
      images: img,
      mode: 'one',
      options: opImg
    };

    await this.modalPhoto.present();
    const res = await PhotoViewer.show(optPhoto);
    console.log(res);
    this.modalPhoto.dismiss();
  }

  public seleccionarImg(index: number, imgid: any) {
    const idx = this.imgsChecked.indexOf(imgid);
  
    if (idx > -1) {
      // Deselect
      this.imgsChecked.splice(idx, 1);
    } else {
      // Select
      this.imgsChecked.push(imgid);
    }
  
    console.log(this.imgsChecked); // Logs selected image IDs
  }
  
  back(){
    this.router.navigate(['main/tabs/account']);
   
  }
  

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  async delete() {
    console.log(this.imgsChecked);
  
    if (this.imgsChecked.length === 0) {
      await this.uiService.alertOK(this.translate.instant('PHOTO-VIEW.notSelected'));
      return;
    }
  
    const confirm = await this.uiService.alertOK_CANCEL(this.translate.instant('PHOTO-VIEW.deleteConfirm'));
    if (!confirm) return;
  
    this.uiService.showLoader();
    console.log(this.imgsChecked);
    const resp = await this.matchService.deleteIMG(this.imgsChecked); // Pass whole array
  
    this.uiService.hideLoader();
  
    if (resp) {
      await this.uiService.alertOK(this.translate.instant('PHOTO-VIEW.deleteOk'));
      await this.principal(); // Refresh gallery
    } else {
      await this.uiService.alertOK(this.translate.instant('PHOTO-VIEW.deleteError'));
    }
  }
  

}
