import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Experience, OwnerExperience, InterestedUsr, ImagesExperience, ImagesUser,User } from '../../../interfaces/interfaces';
import { ExperienceService } from '../../../services/experience.service';
import { PhotoViewer, capShowOptions, Image, ViewerOptions } from '@capacitor-community/photoviewer';
import { AnimationController, IonModal, Platform, PopoverController } from '@ionic/angular';
import { UiService } from '../../../services/ui.service';
import { UserService } from '../../../services/user.service';
// import { User } from 'talkjs/all';
import { MatchService } from 'src/app/services/match.service';
import { DetailMatchMenuPopoverPage } from '../../match/detail-match-menu-popover/detail-match-menu-popover.page';
import { fi } from 'date-fns/locale';
import { TalkService } from 'src/app/services/talk.service';

@Component({
  selector: 'app-detail-exp',
  templateUrl: './detail-exp.page.html',
  styleUrls: ['./detail-exp.page.scss'],
})
export class DetailExpPage implements OnInit {
  @ViewChild('mPhoto') modalPhoto: IonModal;

  private expId = '';
  public imgCover = '../../../assets/icon/30-Default_no-image.jpeg';
  public isOwner = false; //Se actualiza de servicio
  public isVIPExp = false; //Se actualiza de servicio
  public iAmVIP = false; //Se actualiza de servicio
  public interestedExp = false; //Se actualiza de servicio
  public experience: Experience;
  public galleryImgs:  ImagesExperience[];
  public galImgs: string[] = [];
  public uniDistancia = 'mi';
  public showMoreDes = false;
  public textDes = '';
  public showAboutMe = false;
  public textAboutMe = '';
  public ownerExp: OwnerExperience;
  public interestedUsrList: InterestedUsr[] = [];
  public imgUsers = [];
  public noPendingReq = 0;
  public noRegistered = 0;
  public pendingUsr = 0; //Esta pendiente de aceptar
  public allowUsr = 1; //Esta aceptado
  public denyUsr = 2; //Esta denegado
  //public registeredUsr = 3;
  public isOpen = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private popoverCtrl: PopoverController,
    private translate: TranslateService,
    private animationCtrl: AnimationController,
    private experienceService: ExperienceService,
    private userService: UserService,
    private uiService: UiService,
    private matchService: MatchService,
    public platform:Platform,
    public talkService:TalkService
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.expId = this.router.getCurrentNavigation().extras.state.expId;
        this.isOwner = this.router.getCurrentNavigation().extras.state.isMyExp;
      }
    });
  }

  ngOnInit() {
  }

openMap(lat: any, long: any) {
  const url = `https://www.google.com/maps?q=${lat},${long}`;
  window.open(url, '_blank');
}

  async ionViewDidEnter() {
    this.uiService.showLoader();
    if(this.translate.currentLang == 'es'){
      this.uniDistancia = 'Km';
    } else {
      this.uniDistancia = 'mi';
    }

    this.experience = <Experience> await this.experienceService.getExperiencesById(Number(this.expId));
    this.setAvatarImg();
    this.textDes = this.experience?.description || '';
    console.log('EXP DETAIL: ', this.experience);
    this.isOpen = this.experience?.isOpen || false;

    console.log('IS OPEN: ', this.isOpen);
    

    if(this.isOwner) {
      this.interestedUsrList = await this.experienceService.getAllUsers(this.experience.experienceId.toString());
      console.log('INTERESTED USERS: ', this.interestedUsrList);
      for (let index = 0; index < this.interestedUsrList.length; index++) {
        const user = this.interestedUsrList[index];
        let datos = await this.userService.getUser(user.personId.toString());
        user.name = datos.firstName.concat(" "+ datos.lastName); 
        user.location = datos.location;
        user.rateUserExperiences = datos.rateUserExperiences;
        this.imgUsers[index] = '../../../assets/icon/30-Default_no-image.jpeg';
        if(user.status !== 2){
          let resImg = <ImagesUser[]> await this.matchService.getIMGS(user.personId.toString());
          for (const img of resImg) {
            if(img.avatar) {
              this.imgUsers[index] = img.multimediaUrl;
            }
          }
        }
      }
      this.noPendingReq = this.countUsrList(this.pendingUsr);
      this.noRegistered = this.countUsrList(this.allowUsr);

    } else { 
      //this.ownerExp = await this.experienceService.getOwnerExperiences(this.experience.ownerPersonId);
      this.ownerExp = await this.userService.getUserOnly(this.experience.ownerPersonId.toString());
      this.textAboutMe = this.ownerExp?.aboutMe  || '';
      this.interestedExp = await this.experienceService.checkedRegisterGuest(this.expId);
      console.log('OWNER: ', this.ownerExp);
      console.log('INTERESTED: ', this.interestedExp);
      
      this.imgUsers[0] = '../../../assets/icon/30-Default_no-image.jpeg';
          let resImg = <ImagesUser[]> await this.matchService.getIMGSOfPerson(this.experience.ownerPersonId.toString());
          for (const img of resImg) {
            if(img.avatar) {
              this.imgUsers[0] = img.multimediaUrl;
            }
          }
      
    }
    this.uiService.hideLoader();
  }

  editExp() {
    let navegationExtras: NavigationExtras = {
      state: {
        experience: this.experience,
        isEdit: true
      }
    }
    
    this.router.navigate(['new-edit-exp'], navegationExtras);
    
  }

  trimString(string: string, length: number){
    return string.length > length ? 
             string.substring(0, length) + '...' :
             string;
  }

  async setAvatarImg() {
    this.galleryImgs =  <ImagesExperience[]> await this.experienceService.getIMGS(this.expId);
    let i = 0;
    for (const img of this.galleryImgs) {
      if(!img.avatar) {
        this.galImgs[i] = '../../../assets/icon/30-Default_no-image.jpeg';
        this.galImgs[i++] = img.multimediaUrl;
      } else {
        this.imgCover = img.multimediaUrl;
      }
    }
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

  async doInterest() {
    console.log('INTERESTED');
    this.uiService.showLoader();
    if (this.isVIPExp) {
      if(this.iAmVIP) {
        console.log('INTERESADO-VIP');
        const res = await this.experienceService.setInterestExperiences(Number(this.expId));
        console.log(res);
        if(res == 'Interest set') {
          this.interestedExp = true;
          this.uiService.alertOK( this.translate.instant('EXP-DETAIL.sucInterest') + this.experience?.title );
        } else {
          this.uiService.alertOK( this.translate.instant('EXP-DETAIL.errInterest') );
        }
      } else {
        //AQUI VA A LA TIENDA PARA ADQUIRIR MEMBRESIA 
        console.log('PURCHASING');
      }
    } else {
      console.log('INTERESADO-NO-VIP');
      const res = await this.experienceService.setInterestExperiences(Number(this.expId));
      if(res == 'Exito') {
        this.interestedExp = true;
        this.uiService.alertOK( this.translate.instant('EXP-DETAIL.sucInterest') + this.experience?.title );
      } else {
        this.uiService.alertOK( this.translate.instant('EXP-DETAIL.errInterest') );
      }
    }
    this.uiService.hideLoader();
  }

  async doUnInterest() {
    this.uiService.showLoader();
    const res = await this.experienceService.deleteInterestExperiences(Number(this.expId));
    this.uiService.hideLoader();
    if(res == 'Exito') {
      this.interestedExp = false;
      this.uiService.alertOK( this.translate.instant('EXP-DETAIL.sucUnInterest') + this.experience?.title );
    } else {
      this.uiService.alertOK( this.translate.instant('EXP-DETAIL.errUnInterest') );
    }
  }

  async acceptPeople(personId: number, status: number, cont: number) {
    this.uiService.showLoader();
    let resp = await this.experienceService.updateGuest(personId.toString(), this.experience.experienceId.toString(), status.toString());
    this.uiService.hideLoader();
    if(resp){
      //Se cambio el estado y se actualiza la tabla y los contadores
      this.interestedUsrList[cont].status = status;
      this.noPendingReq = this.countUsrList(this.pendingUsr);
      this.noRegistered = this.countUsrList(this.allowUsr);
    }
  }

  countUsrList(op: number) {
    let count = 0;

    for (let usr of this.interestedUsrList) {
      if (usr.status == op) {
        count++;
      }
    }

    return count;
  }

  async cancelExperience() {
    let resp = false;
    
    if(this.expId !== undefined && this.expId !== null){
      this.uiService.showLoader();
      resp = await this.experienceService.deleteExperience(this.expId);
      this.uiService.hideLoader();
    }
    let mensaje = 'EXP-DETAIL.cancel'.concat((resp ? '': 'Error'));
    await this.uiService.alertOK_CANCEL( this.translate.instant(mensaje));

    let navegationExtras: NavigationExtras = {
      state: {
        isMyExp: true
      }
    }
    
    this.router.navigate(['/main/tabs/my-experience'], navegationExtras);
  }

  async openMenuPopover( ev: any ) {
    console.log('OWNER POP-UP: ', this.ownerExp);
    ev.stopPropagation();
    const popover = await this.popoverCtrl.create({
      component: DetailMatchMenuPopoverPage,
      event: ev,
      componentProps: { typeBlock: 1, matchId: null, personId: this.ownerExp.personId, experienceId: this.expId }
    });
    
    await popover.present();
  }

  selectPerson(ustInt: InterestedUsr, img_usr: string) {
    console.log('SELECTED INTERESTED PERSON: ', ustInt);
    //Validacion para sacar al otro usuario del match (matchId esta mal estructurado es personId)
    let navegationExtras: NavigationExtras = {
      state: {
        typePerson: 3,
        otherPerson: ustInt.personId, //(match.personLiked.toString() == this.user.personId ? match.personLikes : match.personLiked),
        matchId: ustInt.personId, 
        image: img_usr
      }
    }
    
    this.router.navigate(['detail-match'], navegationExtras);
  }

  leaveRating() {
    let navegationExtras: NavigationExtras = {
      state: {
        idExperience: this.experience.experienceId,
        nameExp: this.experience.title,
        fechaExp: this.experience.dateTime,
        image: this.imgCover,
        idHost: this.ownerExp.personId,
        nameHost: this.ownerExp.firstName,
        lastNameHost: this.ownerExp.lastName,
        imageHost: this.imgUsers[0]
      }
    }
    
    this.router.navigate(['leave-ratings-experience'], navegationExtras);
  }

  openRatingExperiences() {
    if(this.ownerExp.rateExperiences == null || this.ownerExp.rateExperiences == 0) {
     // this.uiService.alertOK(this.translate.instant('EXP-DETAIL.noRate'));
      return;
    }

    let navegationExtras: NavigationExtras = {
      state: {
        idHost: this.ownerExp.personId,
        nameHost: this.ownerExp.firstName,
        lastNameHost: this.ownerExp.lastName,
        imageHost: this.imgUsers[0]
      }
    }
    
    this.router.navigate(['ratings-experience'], navegationExtras);
  }

  leaveRatingAssistan(idAssistant: number, nameAssistant: string, imageAssistant: string) {
    let navegationExtras: NavigationExtras = {
      state: {
        idAssistant,
        nameAssistant,
        imageAssistant,
        idExperience: this.experience.experienceId
      }
    }
    
    this.router.navigate(['leave-ratings-experience-assistant'], navegationExtras);
    
  }

  openRatingUser(idAssistant: number, nameAssistant: string, rateAssistant: number, imageAssistant: string) {
    if(rateAssistant == null || rateAssistant == 0) {
     // this.uiService.alertOK(this.translate.instant('EXP-DETAIL.noRate'));
      return;
    }

    let navegationExtras: NavigationExtras = {
      state: {
        idAssistant,
        nameAssistant,
        imageAssistant,
        idExperience: this.experience.experienceId
      }
    }
    
    this.router.navigate(['ratings-experience-assistant'], navegationExtras);
    
  }

  async chatMatch(event,user) {
    event.stopPropagation();
    console.log('user',user);
    this.uiService.showLoader();
    let resp = await this.talkService.updateConversation(user.experienceId.toString());
    debugger;
    this.uiService.hideLoader();
    if(Object.keys(resp).length === 0){
      console.log("Ocurrio un error alguno de los usuarios no esta registrado en chat.");
      return;
    }
    let navegationExtras: NavigationExtras = {
      state: {
        idConversation: resp["idConversation"]
      }
    }
    this.router.navigate(['main/tabs/message'], navegationExtras);
  }
}
