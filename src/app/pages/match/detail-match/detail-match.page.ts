import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PhotoViewer, capShowOptions, Image, ViewerOptions } from '@capacitor-community/photoviewer';
import { AnimationController, IonModal, NavController, Platform, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { constants } from 'src/environments/constants';
import { User, ImagesUser } from '../../../interfaces/interfaces';
import { UserService } from '../../../services/user.service';
import { MatchService } from '../../../services/match.service';
import { DetailMatchMenuPopoverPage } from '../detail-match-menu-popover/detail-match-menu-popover.page';
import { UiService } from 'src/app/services/ui.service';
import { TalkService } from '../../../services/talk.service';

@Component({
  selector: 'app-detail-match',
  templateUrl: './detail-match.page.html',
  styleUrls: ['./detail-match.page.scss'],
})
export class DetailMatchPage implements OnInit {
  @ViewChild('mPhoto') modalPhoto: IonModal;

  public typePerson = 0; //0: match, 1: profile
  private matchId = '';
  private otherPerson = '';
  public imgCover:any = '../../../assets/icon/30-Default_no-image.jpeg';
  public uniDistancia = 'mi';
  public usrMatch: User;
  public galleryImgs:  ImagesUser[];
  public galImgs: string[] = [];
  public iam_des = '';
  public showAboutMe = false;
  public textAboutMe = '';
  //More About
  public height = '';
  public gender = '';
  public education = '';
  public languajes = '';
  public sign = '';
  public sports = '';
  public hobbies = '';
  public kids = '';
  public pets = '';
  public values_traits = '';
  public drinking = '';
  public smoking = '';
  public drugs = '';
  public religion = '';
  public political = '';


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private popoverCtrl: PopoverController,
    private translate: TranslateService,
    private userService: UserService,
    private matchService: MatchService,
    private uiService: UiService,
    private talkService: TalkService,
    public platform: Platform
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.typePerson = this.router.getCurrentNavigation().extras.state.typePerson ?? 0;
        this.matchId = this.router.getCurrentNavigation().extras.state.matchId;
        this.otherPerson = this.router.getCurrentNavigation().extras.state.otherPerson;
        this.imgCover = this.router.getCurrentNavigation().extras.state.image;
        this.imgCover = JSON.parse(this.imgCover);
        this.imgCover = this.imgCover.multimediaUrl;
        console.log('TYPE-PERSON: ', this.typePerson);
        console.log('MATCH-ID: ', this.otherPerson);
        console.log('IMAGE: ', this.imgCover);
      }
    });
  }

  ngOnInit() { }

  async ionViewDidEnter() {
    if(this.translate.currentLang == 'es'){
      this.uniDistancia = 'Km';
    } else {
      this.uniDistancia = 'mi';
    }
    this.uiService.showLoader();
    console.log(this.otherPerson);
    this.usrMatch = <User> await this.userService.getUserBasic3(this.otherPerson); //<User> await this.matchService.getMatchUser(Number(this.matchId));
    await this.setAvatarImg();
    console.log('USR-MATCH: ', this.usrMatch);
    this.uiService.hideLoader();

    let resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.IamA.toString());
    this.iam_des = resCat[0]?.name;
    this.textAboutMe = this.usrMatch?.aboutMe  || '';
    if(this.usrMatch.height !== null && this.usrMatch.height !== ''){
      if(this.translate.currentLang == 'es'){ //TODO: VALIDAR UNIDAD DE MEDIDA DE CONFIGURACION DE LA APP
        this.height = this.usrMatch.height + 'cm'
      } else {
        this.height = this.usrMatch.height + 'ft'
      }
    }

    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Gender.toString());
    this.gender = resCat[0]?.name;
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Educacion.toString());
    this.education = resCat[0]?.name;
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Lenguage.toString());
    this.languajes = this.extraeNameOfCatalogMulti(resCat);
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Sing.toString());
    this.sign = resCat[0]?.name;
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Ejercicio.toString());
    this.sports = this.extraeNameOfCatalogMulti(resCat);
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Hobbies.toString());
    this.hobbies = this.extraeNameOfCatalogMulti(resCat);
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Hijos.toString());
    this.kids = resCat[0]?.name;
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Pets.toString());
    this.pets = this.extraeNameOfCatalogMulti(resCat);
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Values_Traits.toString());
    this.values_traits = this.extraeNameOfCatalogMulti(resCat);
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Bebe.toString());
    this.drinking = resCat[0]?.name;
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Fuma.toString());
    this.smoking = resCat[0]?.name;
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Drugs.toString());
    this.drugs = resCat[0]?.name;
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Religion.toString());
    this.religion = resCat[0]?.name;
    resCat = await this.matchService.getCatalogueXUsr(this.usrMatch.personId, constants.catalogs.Political.toString());
    this.political = resCat[0]?.name;
  }

  extraeNameOfCatalogMulti(cadJSON): string {

    let names = '';

    try {
      const nameArray = cadJSON.map(item => item.name);
      names = nameArray.join(', ');

      console.log('NAME: ', names);
    } catch (error) {
      console.log('ERROR: ', error);
      
    }
    
    return names;
  }

  backTabMatch() {

     if (this.typePerson == 0) {
      this.navCtrl.navigateRoot( '/main/tabs/match', { animated: true } );
      
    } else {
      this.navCtrl.back();
    } 
    
  }

  async sendMessage() {
    console.log(this.matchId);
    console.log('SEND MESSAGE');
    this.uiService.showLoader();
    let resp = await this.talkService.updateConversation(this.matchId);
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

  createTempArray(number){
    var arr=[];
    for(let i=0;i<number;i++){
      arr[i]="";
    }
    return arr;
  }

  setPositionStart(ini, pos) {
    let posF = ini+(15*pos);
    
    return posF+'px';
  }

  trimString(string: string, length: number){
    return string.length > length ? 
             string.substring(0, length) + '...' :
             string;
  }

  async setAvatarImg() {
    this.galleryImgs =  <ImagesUser[]> await this.matchService.getIMGSOfPerson(this.otherPerson);
    console.log(this.galleryImgs);
    let i = 0;
    for (const img of this.galleryImgs) {
      if(!img.avatar) {
        this.galImgs[i] = '../../../assets/icon/30-Default_no-image.jpeg';
        this.galImgs[i++] = img.multimediaUrl;
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

  async unMatch() {
    console.log('UNMATCH');

    let res = await this.matchService.doMatchProfiles(this.usrMatch.personId.toString(), constants.statusUsrMatch.block.toString(), 'false', 'false', null);
  }

  leaveRating() {
    console.log('LEAVE RATING', this.otherPerson);

    let navegationExtras: NavigationExtras = {
      state: {
        matchId: this.matchId,
        otherPerson: this.otherPerson,
        name: this.usrMatch.firstName,
        lastName: this.usrMatch.lastName,
        image: this.imgCover
      }
    }
    
    this.router.navigate(['leave-ratings'], navegationExtras);
  }

  async msghost(personid:any){
    console.log(personid);
     this.uiService.showLoader();
    let resp = await this.talkService.updateConversation(personid.toString());
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

  async openMenuPopover( ev: any ) {
    ev.stopPropagation();
    const popover = await this.popoverCtrl.create({
      component: DetailMatchMenuPopoverPage,
      event: ev,
      componentProps: { typeBlock: 0, matchId: this.matchId, personId: null }
    });
    
    await popover.present();
  }

  openMap(town: string) {
  let url: string;

  if (this.platform.is('android')) {
    url = `geo:0,0?q=${encodeURIComponent(town)}`;
  } else if (this.platform.is('ios')) {
    url = `maps://?q=${encodeURIComponent(town)}`;
  } else {
    url = `https://maps.google.com/?q=${encodeURIComponent(town)}`;
  }

  window.location.href = url;
}

}
