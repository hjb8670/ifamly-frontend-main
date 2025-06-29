import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonModal, AnimationController } from '@ionic/angular';
import { Image, ViewerOptions, capShowOptions, PhotoViewer } from '@capacitor-community/photoviewer';

import { User, ImagesUser } from '../../interfaces/interfaces';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatchService } from '../../services/match.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-tabAccount',
  templateUrl: './tabAccount.page.html',
  styleUrls: ['./tabAccount.page.scss'],
})
export class TabAccountPage implements OnInit {
  @ViewChild('mPhoto') modalPhoto: IonModal;

  public usrApp: User;
  public showAboutMe = false;
  public imgProfile = '../../../assets/icon/30-Default_no-image.jpeg';
  public textAboutMe = '';
  public galleryImgs:  ImagesUser[];
  public galImgs: string[] = [];
  //Imagenes
  private image = '';
  private name_img = '';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    private animationCtrl: AnimationController,
    private userService: UserService,
    private matchService: MatchService,
    public dms: DomSanitizer,
    private uiService: UiService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.iniUsr();
    });
  }

  async ionViewDidEnter() {
    
  }

  async iniUsr() {
    console.log('Ini User');
    this.uiService.showLoader();
    this.usrApp = await this.userService.getUserBasic('');
    
    await this.getAvatarImg();
  
    this.imgProfile = this.usrApp.image.multimediaUrl;
  console.log(this.imgProfile);
    this.textAboutMe = this.usrApp?.aboutMe  || '';
    this.uiService.hideLoader();
  }

  async getAvatarImg() {
    this.galleryImgs = [];
    this.galImgs = [];
    this.galleryImgs =  <ImagesUser[]> await this.matchService.getIMGS('');
    console.log();
    let i = 0;
    if(this.galleryImgs === undefined || this.galleryImgs === null || this.galleryImgs.length === 0){
      console.log("No hay fotos");
      return ;
    }
    for (const img of this.galleryImgs) {
      if(!img.avatar) {
        this.galImgs[i] = '../../../assets/icon/30-Default_no-image.jpeg';
        this.galImgs[i++] = img.multimediaUrl;
      } else {
        this.usrApp.image.multimediaUrl = img.multimediaUrl;
      }
    }
  }

  trimString(string: string, length: number){
    return string.length > length ? 
             string.substring(0, length) + '...' :
             string;
  }

  async setting() {
    console.log('SETTING');
    let navegationExtras: NavigationExtras = {
      state: {
        usrApp: this.usrApp
      }
    }
    
    this.router.navigate(['settings-account'], navegationExtras);
  }



  edit() {
    let navegationExtras: NavigationExtras = {
      state: {
        usrApp: this.usrApp
      }
    }
    
    this.router.navigate(['edit-account'], navegationExtras);
  }

  async openPhoto(index: number) {
    const img: Image[] = [{
      url: this.galImgs[index]
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
    this.modalPhoto.dismiss();
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

}
