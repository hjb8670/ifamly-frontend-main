import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, PopoverController } from '@ionic/angular';
import { ExperienceMenuPopoverPage } from '../experience/experience-menu-popover/experience-menu-popover.page';
import { Experience, Catalog, User, ImagesExperience } from '../../interfaces/interfaces';
import { constants } from 'src/environments/constants';
import { TranslateService } from '@ngx-translate/core';
import { ExperienceService } from '../../services/experience.service';
import { UserService } from '../../services/user.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { set } from 'date-fns';

@Component({
  selector: 'app-tabExperience',
  templateUrl: 'tabExperience.page.html',
  styleUrls: ['tabExperience.page.scss']
})
export class TabExperiencePage {
  @ViewChild (IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public isMyExp = false;
  private lanCatalogo = 'EN';
  public isBigList = true;
  private user: User = {};
  public experienceCat: Catalog[] = [];
  public experiences: Experience[] = [];
  private iniExp = 0;
  private deltaExp = 10;
  private cateExp = null;
  public lanDate = 'en_US';
  public mostrarLoginFinito = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private popoverCtrl: PopoverController,
    private experienceService: ExperienceService,
    private userService: UserService, 
    private uiService: UiService
  ) {
    
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isMyExp = this.router.getCurrentNavigation().extras.state.isMyExp;
        
        console.log('MyExp: ', this.isMyExp);
      }
      this.principal();
    });
  }

  async ionViewDidEnter() {
    if(this.translate.currentLang == 'es'){
      this.lanCatalogo = constants.languages.es;
      this.lanDate = 'es_MX'
    } else {
      this.lanCatalogo = constants.languages.en;
      this.lanDate = 'en_US'
    }
  }

  async principal(){
    // const tVal = await this.userService.validaToken();
    // if( !tVal ) {
    //   return;
    // } //Haciendo menos pesada las busquedas
    await this.uiService.showLoader();
    this.user = <User> await this.userService.getUserBasic('');
    this.user.location = null; // NULL mientras se define VIP
    console.log('USR: ', this.user);
    
    //PAra que sirve este catalogo ?
    this.experienceCat = <Catalog[]> await this.userService.getCatalogo(constants.catalogs.ExperienceCat.toString(), this.lanCatalogo);
    console.log('CAT EXP: ', this.experienceCat);

    this.iniExp = 0;
    const preloadImages = async (experiences) => {
      const imageUrls = experiences.map((exp) => exp.image);
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
    };
    
    // Usage
    this.experiences = (<Experience[]> await this.getExperiences())
      .sort((a, b) => {
        const now = new Date().getTime();
        const aDiff = new Date(a.dateTime).getTime() - now;
        const bDiff = new Date(b.dateTime).getTime() - now;
        return aDiff - bDiff;
      });
    
    await preloadImages(this.experiences);
    // Now, images should be cached, and blinking should be minimized
    console.log('EXPERIENCIES: ', this.experiences);
    this.uiService.hideLoader();
  }

  async setAvatarImg(experience: Experience[]) {
    for (const exp of experience) {
      
      exp.image ='../../../assets/icon/30-Default_no-image.jpeg';
      const res_imgs =  <ImagesExperience[]> await this.experienceService.getIMGS(exp.experienceId.toString());
      for (const img of res_imgs) {
        if(img.avatar) {
          exp.image = img.multimediaUrl;
        }
      }
    }

  }

  async openMenuPopover( ev: any ) {
    const popover = await this.popoverCtrl.create({
      component: ExperienceMenuPopoverPage,
      event: ev,
      componentProps: { isMyExp: this.isMyExp }
    });

    /* popover.onDidDismiss().then((result: object) => {
      console.log('RES POPOVER: ', result);
      
    }); */

    await popover.present();
  }

  changeList() {
    this.isBigList = !this.isBigList;
  }

  async optionSelected(ev: any) {
    this.cateExp = Number(ev.detail.value);
    this.experiences = <Experience[]> await this.getExperiences();
    console.log('EXPERIENCIES: ', this.experiences);
  }

  async loadExp(ev: any){
    this.iniExp += this.deltaExp;
    const newExp = <Experience[]> await this.getExperiences();
    await setTimeout(() => {
      if(newExp.length < 1) {
        this.iniExp -= this.deltaExp;
        this.infiniteScroll.disabled = true;
      } else {
        this.experiences.push(...newExp);
      }
      this.infiniteScroll.complete();
    });
  }

  async getExperiences(): Promise<Experience[]> {
    let exps: Experience[];

    if(this.isMyExp) {
      exps = <Experience[]> await this.experienceService.getMyExperiences(this.iniExp.toString(), this.deltaExp.toString(), this.cateExp)
    }else {
      exps = <Experience[]> await this.experienceService.getExperiences(this.iniExp.toString(), this.deltaExp.toString(), this.user.location, this.cateExp);
    //  debugger;
    }
    
   await this.setAvatarImg(exps);

    return exps;
  }

  selectExperience( expId: number ) {
    let navegationExtras: NavigationExtras = {
      state: {
        expId,
        isMyExp: this.isMyExp
      }
    }
    
    this.router.navigate(['detail-exp'], navegationExtras);
  }

  async setPortadaImg(expP: Experience[]) {
    /* for (const exp of expP) {
      exp.image = '../../../assets/icon/30-Default_no-image.jpeg';

      const res_imgs =  <ImagesUser[]> await this.matchService.getIMGS(usr.personLikes.toString());
      for (const img of res_imgs) {
        if(img.avatar) {
          usr.image = img.multimediaUrl;
        }
      }
    } */

  }
}
