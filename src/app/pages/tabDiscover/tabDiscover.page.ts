import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList, NgZone, ChangeDetectorRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GestureController, IonCard, IonModal, Platform, AlertController, PopoverController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { constants } from 'src/environments/constants';
import { UserService } from '../../services/user.service';
import { DiscoverUsr, User, FilterDiscover, Catalog, ImagesUser } from '../../interfaces/interfaces';
import { MatchService } from '../../services/match.service';
import { UiService } from '../../services/ui.service';
import { FormBuilder } from '@angular/forms';
import { UtilitiesService } from '../../services/utilities.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DetailMatchMenuPopoverPage } from '../match/detail-match-menu-popover/detail-match-menu-popover.page';
import { GalleryPage } from '../gallery/gallery.page';
import { ModalController, NavController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { MatchModalPage } from 'src/app/match-modal/match-modal.page';
import { Capacitor } from '@capacitor/core';
import { TalkService } from 'src/app/services/talk.service';
import { TabService } from 'src/app/services/tab.service';
import { DiscoverStateService } from '../../services/discover-state.service';



@Component({
  selector: 'app-tabDiscover',
  templateUrl: 'tabDiscover.page.html',
  styleUrls: ['tabDiscover.page.scss']
})
export class TabDiscoverPage implements AfterViewInit{
  @ViewChildren(IonCard, {read: ElementRef}) cards: QueryList<ElementRef>;
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('swiperEl', { static: false }) swiperElRef!: ElementRef;

  isLoading = true;

  private limToLoadProfiles = 3;//se actualizo a 0 por que no actualizaba el final 
  public heightImg = '';
  public user: User = {};
  public discoverUsrs: DiscoverUsr[] = [];
  private lanCatalogo = 'EN';
  private longPressActive = false;
  public statusUsrDicover = constants.statusUsrMatch;
  private iniDiscover = 0;
  private deltaDiscover = 3;
  private filter: FilterDiscover = {};
  private latitud_gps: string = null;
  private longitud_gps: string = null;
  private posCardGlobal = 1;
  public disLikeBtn = false;
  public likeBtn = false;
  public iams: Catalog[];
  public iamlookings: Catalog[];
  public exercises: Catalog[];
  public sings: Catalog[];
  public educations: Catalog[];
  public drinks: Catalog[];
  public smoks: Catalog[];
  public kids: Catalog[];
  public religions: Catalog[];
  public noDiscoverFound = false;
  private idAntDiscover = 0;
  private antDiscoverUsrs: DiscoverUsr;

  filterForm = this.formBuilder.group( {
    iam_a: [''],
    iam_looking: [''],
    age_between: [{lower: 18, upper: 100}],
    distance: ['1'],
    height: [{lower: 1, upper: 8}],
    exercise: [''],
    sing: [''],
    education: [''],
    drink: [''],
    smok: [''],
    kid: [''],
    religion: [''],
    distanceToggle: [true],
    ageToggle: [true]
  });

  customIamOptions = {
    header: this.translate.instant('DISCOVER.Title_iam'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdIam'),
    translucent: true,
  };

  customIamLookingOptions = {
    header: this.translate.instant('DISCOVER.Title_looking'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdIamLooking'),
    translucent: true,
  };

  customExerciseOptions = {
    header: this.translate.instant('DISCOVER.Title_Exercise'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdExe'),
    translucent: true,
  };

  customSingOptions = {
    header: this.translate.instant('DISCOVER.Title_Sing'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdSing'),
    translucent: true,
  };

  customEducationOptions = {
    header: this.translate.instant('DISCOVER.Title_Education'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdEdu'),
    translucent: true,
  };

  customDrinkOptions = {
    header: this.translate.instant('DISCOVER.Title_Drink'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdDrnk'),
    translucent: true,
  };

  customSmokOptions = {
    header: this.translate.instant('DISCOVER.Title_Smok'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdSmk'),
    translucent: true,
  };

  customKidOptions = {
    header: this.translate.instant('DISCOVER.Title_Kid'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdKid'),
    translucent: true,
  };

  customReligionOptions = {
    header: this.translate.instant('DISCOVER.Title_Religion'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdRlgn'),
    translucent: true,
  };

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private popoverCtrl: PopoverController,
    private translate: TranslateService,
    private userService: UserService,
    private uiService: UiService,
    private matchService: MatchService,
    private gestureCtrl: GestureController,
    private zone: NgZone,
    private plt: Platform,
    private cdRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private navCtrl: NavController,
    private platform: Platform,
    private talkService: TalkService,
    private tabService: TabService,
    private discoverState: DiscoverStateService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        if (!this.router.getCurrentNavigation().extras.state.mntList || this.router.getCurrentNavigation().extras.state.mntList.length > 0) {
          this.discoverUsrs = this.router.getCurrentNavigation().extras.state.discoverUsrs;
        }
      }
    });
  }

  get iam_a() {
    return this.filterForm.get('iam_a');
  }

  get iam_looking() {
    return this.filterForm.get('iam_looking');
  }

  get age_between() {
    return this.filterForm.get('age_between');
  }

  get distance() {
    return this.filterForm.get('distance');
  }

  get height() {
    return this.filterForm.get('height');
  }

  get exercise() {
    return this.filterForm.get('exercise');
  }

  get sing() {
    return this.filterForm.get('sing');
  }

  get education() {
    return this.filterForm.get('education');
  }

  get drink() {
    return this.filterForm.get('drink');
  }

  get smok() {
    return this.filterForm.get('smok');
  }
  
  get kid() {
    return this.filterForm.get('kid');
  }

  get religion() {
    return this.filterForm.get('religion');
  }

  get distanceToggle() {
    return this.filterForm.get('distanceToggle');
  }

  get ageToggle() {
    return this.filterForm.get('ageToggle');
  }

  async ngOnInit() {
    this.iniSizeContenedorCard();

    // Restore state if available
    const savedList = this.discoverState.getCardList();
    if (savedList && savedList.length > 0) {
      this.discoverUsrs = savedList;
      this.posCardGlobal = this.discoverState.getLastCardIndex();
      this.isLoading = false;
    } else {
      this.activatedRoute.queryParams.subscribe(async params => {
        await this.reLoadDiscover();
      });
    }

    setTimeout(() => {
      const cardArray = this.cards.toArray();
      this.useSwipe(cardArray);
    }, 100);
  }

  async ionViewDidEnter() {
    if(this.translate.currentLang == 'es'){
      this.lanCatalogo = constants.languages.es;
    } else {
      this.lanCatalogo = constants.languages.en;
    }

    // const tVal = await this.userService.validaToken();
    // if( !tVal ) {
    //   return;
    // }
    this.matchService.newMatch = false;
    this.matchService.matchPerson = [];
    this.matchService.principal();
    this.iniSizeContenedorCard();
    this.user = await this.userService.getUserBasic('');
    // this.iams = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.IamA.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    // this.iamlookings = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.IamLooking.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    // this.exercises = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Ejercicio.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    // this.sings = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Sing.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    // this.educations = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Educacion.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    // this.drinks =  <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Bebe.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    // this.smoks =  <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Fuma.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    // this.kids = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Hijos.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    // this.religions = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Religion.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    

  }

  // async ngAfterViewInit() {
  //   //await this.reLoadDiscover();
  // }
  async ngAfterViewInit() {
  const swiper = this.swiperElRef?.nativeElement;
  if (swiper && swiper.initialize) {
    swiper.initialize();
  }
}

async openGallery(usr: any) {
  try {
    let currentModal = await this.modalController.getTop();
    if (currentModal) {
      await currentModal.dismiss();
    }
    const resImg = await this.matchService.getIMGSOfPerson(usr.personId.toString()) as ImagesUser[];
    const safeImgList = Array.isArray(resImg) ? resImg : [];
    const images = safeImgList.map(img => img.multimediaUrl || '');
    const modal = await this.modalController.create({
      component: GalleryPage,
      componentProps: {
        images,
        startIndex: 0
      },
      cssClass: 'gallery-modal'
    });
    await modal.present();
  } catch (err) {
    console.error('Failed to open gallery modal:', err);
  }
}


  iniSizeContenedorCard(){
    let imgSizeWidth = this.plt.width() * .9;
    let imgSizeHeight = this.plt.height() * .58;
    if(this.plt.platforms().indexOf('android') > -1)
      imgSizeHeight = this.plt.height() * .65;

    let heightImg_tmp = ((imgSizeWidth * 531) / 354) + 35
    //this.heightImg = heightImg_tmp + 'px';
    this.heightImg = imgSizeHeight + 'px';

    this.cdRef.detectChanges();
  }

  async iniFilter() {
    this.user = await this.userService.getUser('');

    this.filter = {
      selfRole: this.user.iam_a,
      targetRole: this.user.iam_looking,
      ageIni: 18,
      ageEnd: 100,
      distance: null,
      minHeight: 1,
      maxHeight: 100,
      exercise: Number(this.user.exercise),
      zodiacSign: Number(this.user.sings),
      education: Number(this.user.education),
      drinking: Number(this.user.drinking),
      smoking: Number(this.user.smoking),
      kids: Number(this.user.kids),
      religion: Number(this.user.religion),
      /* location: {
        country: null,
        state: null,
        address: null,
        latitud: this.latitud_gps,
        longitud: this.longitud_gps
      } */
      location: null
    }

    this.setFilterForm();
  }

  setFilterForm() {
    this.iam_a.setValue(this.user.iam_a);
    this.iam_looking.setValue(this.user.iam_looking);
    this.exercise.setValue(this.user.exercise);
    this.sing.setValue(this.user.sings);
    this.education.setValue(this.user.education);
    this.drink.setValue(this.user.drinking);
    this.smok.setValue(this.user.smoking);
    this.kid.setValue(this.user.kids);
    this.religion.setValue(this.user.religion);
  }

  useSuperLike(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'long-press',
        onStart: ev => {
          this.longPressActive = true;
          this.superLike(i);
        },
        onEnd: ev => {
          this.longPressActive = false;
        }
      });
      gesture.enable(true);
    }
  }

  superLike(i) {
    console.log('SUPER LIKE: ', i);

    setTimeout(() => {
      if (this.longPressActive) {
        this.zone.run(() => {
          console.log('SUPER LIKE A: ', this.discoverUsrs[i].firstName);
          this.superLike(i);
        });
      }
    }, 200);
    
  }

  useSwipe(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipe',
        onStart: ev => {
          
        },
        onMove: ev => {
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX/10}deg)`;
          this.setIconPeople(ev.deltaX, i);
        },
        onEnd: ev => {
          card.nativeElement.style.transition = '.5s ease-out';
          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`
            this.setStatusDiscover(this.discoverUsrs[i].personId, this.statusUsrDicover.like)
          } else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`
            this.setStatusDiscover(this.discoverUsrs[i].personId, this.statusUsrDicover.dislike);
          } else {
            card.nativeElement.style.transform = '';
            this.discoverUsrs[i].status = this.statusUsrDicover.none;
            this.cdRef.detectChanges();
          }
        }
      });
      gesture.enable(true);
    }
  }

  setIconPeople(x, numCard) {
    if (x < -25) {
      if(this.discoverUsrs[numCard].status != this.statusUsrDicover.dislike) {
        this.discoverUsrs[numCard].status = this.statusUsrDicover.dislike;
        this.cdRef.detectChanges();
      }
    } else if ((x > 25)) {
      if(this.discoverUsrs[numCard].status != this.statusUsrDicover.like) {
        this.discoverUsrs[numCard].status = this.statusUsrDicover.like;
        this.cdRef.detectChanges();
      }
    } else {
      this.discoverUsrs[numCard].status = this.statusUsrDicover.none;
      this.cdRef.detectChanges();
    }
  }

  createTempArray(number){
    var arr=[];
    for(let i=0;i<number;i++){
      arr[i]="";
    }
    return arr;
  }

  setPositionStart(pos) {
    let posF = 0;
    if(this.translate.currentLang == 'es'){
      posF = 115+(15*pos);
    } else {
      posF = 80+(15*pos);
    }
    
    return posF+'px';
  }

  async openMenuPopover( ev: any ) {
    console.log('POPOVER');
    
    /* const popover = await this.popoverCtrl.create({
      component: ExperienceMenuPopoverPage,
      event: ev,
      componentProps: { isMyExp: this.isMyExp }
    });

    await popover.present(); */
  }

  async loadDiscover() {
    // await this.uiService.showLoader();
    try {
      this.isLoading = true;
      const discoverUsr_res = <DiscoverUsr[]> await this.matchService.getDiscoverProfiles(this.iniDiscover.toString(), this.deltaDiscover.toString(), this.filter);
      //this.iniDiscover += this.deltaDiscover;
      this.cdRef.detectChanges();
      if(discoverUsr_res === null){
        this.discoverUsrs = null
        await this.uiService.hideLoader();
        this.noDiscoverFound = true;
        return;
      }

     // this.setAvatarImg(discoverUsr_res);

      console.log('LOAD DISCOVER_USR: ', discoverUsr_res);
      
      //this.discoverUsrs.push(...discoverUsr_res);
      this.discoverUsrs = [ ...discoverUsr_res, ...this.discoverUsrs ]
      this.cdRef.detectChanges();

      // Espera a que las tarjetas se rendericen y actualiza los gestos
      setTimeout(() => {
        const cardArray = this.cards.toArray();
        this.useSwipe(cardArray);
      }, 100);

      this.posCardGlobal = this.discoverUsrs.length-1;

      if(this.discoverUsrs.length <= 0) {
        this.noDiscoverFound = true;
      } else {
        this.noDiscoverFound = false;
      }
    } catch (error) {
      console.log('ERROR AL OBTENER PROFILE');
    } finally {
      this.isLoading = false;
    }
    // await this.uiService.hideLoader();
  }

  async setAvatarImg(usrDicover: DiscoverUsr[]) {
    // for (const usr of usrDicover) {
    //   usr.image = '../../../assets/icon/30-Default_no-image.jpeg';

    //   const res_imgs =  <ImagesUser[]> await this.matchService.getIMGS(usr.personId.toString());
    //   for (const img of res_imgs) {
    //     if(img.avatar) {
    //       usr.image = img.multimediaUrl;
    //     }
    //   }
    // }

  }

  getNameFull(user: User){
    return user.firstName + (
      (user.lastName && user.lastName !== '') 
        ? ' ' + user.lastName 
        : ''
      )
  }


  async setStatusDiscover(idDiscover: number, accionId: number) {
    let resLike = 'false'
    let resSuperLike = 'false';
    
    if(accionId == 3){ //Like
      resLike = 'true'
      resSuperLike = 'false'
    } else if (accionId == 6) { //Dislike
      resLike = 'false'
      resSuperLike = 'false'
    }
    
    let matchId = await this.matchService.doMatchProfiles(idDiscover.toString(), accionId.toString(), resLike, resSuperLike, null);
    if(matchId!=null){
      const modal = await this.modalController.create({
        component: MatchModalPage,
        componentProps: {
          matchedUserName: this.discoverUsrs[this.posCardGlobal].firstName.concat(" "+ this.discoverUsrs[this.posCardGlobal].lastName) ,
          matchedUserImage: 'assets/img/allison.jpg',
          currentUserImage: 'assets/img/you.jpg',
        },
        cssClass: 'match-modal',
      });
      await modal.present();

        const { data } = await modal.onDidDismiss();

        if (data?.action === 'message') {
          // Navigate to messages tab
              this.uiService.showLoader();
              const resp = await this.talkService.updateConversation(matchId.toString());
              this.uiService.hideLoader();
              if (Object.keys(resp).length === 0) {
                console.log("Chat registration issue");
                return;
              }
              const navExtras: NavigationExtras = {
                state: {
                  idConversation: resp["idConversation"]
                }
              };
              
              // Navigate to message tab and trigger the tab change
              this.router.navigate(['main/tabs/message'], navExtras).then(() => {
                // Update tab state using the tab service
                this.tabService.setActiveTab('message');
              });
        } else if (data?.action === 'swipe') {
          // Navigate to discover tab
          this.router.navigateByUrl('/main/tabs/discover');
        } else if (data?.action === 'share') {
          // Open native share dialog
          try {
            const url = Capacitor.getPlatform() === 'ios'
            ? 'https://apps.apple.com/app/id123456789' // iOS App Store URL
            : 'https://play.google.com/store/apps/details?id=com.ifmly.package'; // Android
            await Share.share({
              title: 'Check out this match!',
              text: 'I just got a new match on the app! 🎉',
              url: url,
              dialogTitle: 'Share with your friends',
            });
          } catch (err) {
            console.error('Error sharing:', err);
          }
        }
    }
    //let res = await this.matchService.doMatchProfiles(this.idAntDiscover.toString(), accionId.toString(), resLike, resSuperLike);
    console.log('APLICAR MATCH: ', idDiscover.toString());
      /* if(!res) {
        return;
      } */

    // Store the current user before removing it for potential rollback
    if(this.discoverUsrs.length > 0) {
      this.antDiscoverUsrs = {...this.discoverUsrs[this.posCardGlobal]};
    }

    this.discoverUsrs.pop();
    this.posCardGlobal--;
    
    // Save state after change
    this.discoverState.setCardList(this.discoverUsrs);
    this.discoverState.setLastCardIndex(this.posCardGlobal);

    if(this.discoverUsrs.length <= 1) {
      await this.loadDiscover();
    }

    this.idAntDiscover = idDiscover;
  }

  async reLoadDiscover() {
    this.uiService.showLoader();
    this.iniDiscover = 0;
    this.discoverUsrs = [];
    this.noDiscoverFound = true;
    this.cdRef.detectChanges();
    try {
      this.isLoading = true;
      this.discoverUsrs = <DiscoverUsr[]> await this.matchService.getDiscoverProfiles(this.iniDiscover.toString(), this.deltaDiscover.toString(), this.filter);
      this.cdRef.detectChanges();
      await this.setAvatarImg(this.discoverUsrs);

      if(this.discoverUsrs === null){
        await this.uiService.hideLoader();
        this.noDiscoverFound = true;
        return;
      }

      
      console.log('RE-LOAD DISCOVER_USR: ', this.discoverUsrs);
      
      this.iniDiscover = this.discoverUsrs.length;
      this.posCardGlobal = this.discoverUsrs.length-1;
      
      if(this.discoverUsrs.length <= 0) {
        this.noDiscoverFound = true;
      } else {
        this.noDiscoverFound = false;
      }

      // Espera a que las tarjetas se rendericen y actualiza los gestos
      setTimeout(() => {
        const cardArray = this.cards.toArray();
        this.useSwipe(cardArray);
      }, 100);
    } catch (error) {
      console.log('ERROR AL RECARGAR PROFILES');
    } finally {
      this.isLoading = false;
    }
    
    await this.uiService.hideLoader();
  }

  async returnDicover() {
    if(this.idAntDiscover === 0){
      this.uiService.alertOK(this.translate.instant('DISCOVER.notRollback'));
      return;
    }
    this.uiService.showLoader();
    if(await this.matchService.rollbackLike(this.idAntDiscover.toString())){
      this.uiService.hideLoader();
      this.idAntDiscover = 0;
      if(this.antDiscoverUsrs) {
        this.discoverUsrs.push(this.antDiscoverUsrs);
        this.posCardGlobal++;
        setTimeout(() => {
          const cardArray = this.cards.toArray();
          this.useSwipe(cardArray);
        }, 100);
        this.antDiscoverUsrs = null;
        // Save state after rollback
        this.discoverState.setCardList(this.discoverUsrs);
        this.discoverState.setLastCardIndex(this.posCardGlobal);
      }
    }else{
      this.uiService.hideLoader();
      this.uiService.alertOK(this.translate.instant('DISCOVER.rollbackFalse'));
    }
  }

  async doDislike() {
    console.log('DIS-LIKE', this.posCardGlobal);
    this.disLikeBtn = true;
    this.uiService.showLoader();
    await this.setStatusDiscover(this.discoverUsrs[this.posCardGlobal].personId, this.statusUsrDicover.dislike);
    this.disLikeBtn = false;
    this.uiService.hideLoader();
  }

  async doLike() {
    this.uiService.showLoader();
    console.log('LIKE', this.posCardGlobal);
    this.likeBtn = true;
    await this.setStatusDiscover(this.discoverUsrs[this.posCardGlobal].personId, this.statusUsrDicover.like);
    this.likeBtn = false;
    this.uiService.hideLoader();
  }

  getNames(items?: { name: string }[]): string {
    if (!items || items.length === 0) return '';
    return items.slice(0, 3).map(i => i.name).join(', ');
  }

  async doSuperLike() {
    const alert = await this.alertController.create({
      cssClass: 'alert-superlike-class',
      header: '*',
      subHeader: this.translate.instant('DISCOVER.superLikeTitle'),
      message: this.translate.instant('DISCOVER.superLikeMsg'),
      //mode: 'md',
      //buttons: [this.translate.instant('ALERT.btnMsg')]
      buttons: [
        {
          text: this.translate.instant('DISCOVER.superLikeBtnOK'),
          role: 'OK',
          cssClass: 'alert-button-confirm',
        },
        {
          text: this.translate.instant('DISCOVER.superLikeBtnCancel'),
          role: 'CANCEL',
          cssClass: 'alert-button-cancel',
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('RESP ALERT: ', role);
  }

  clearFilter() {
    this.iam_a.setValue('');
    this.iam_looking.setValue('');
    this.age_between.setValue({lower: 18, upper: 100});
    this.distance.setValue('1');
    this.height.setValue({lower: 1, upper: 8});
    this.exercise.setValue('');
    this.sing.setValue('');
    this.education.setValue('');
    this.drink.setValue('');
    this.smok.setValue('');
    this.kid.setValue('');
    this.religion.setValue('');
  }

  async applyFilter() {
    this.filter = {
      selfRole: this.iam_a.value == '' ? null : this.iam_a.value,
      targetRole: this.iam_looking.value == '' ? null : this.iam_looking.value,
      ageIni: this.age_between.value.lower,
      ageEnd: this.age_between.value.upper,
      distance: this.distance.value == '' ? null : Number(this.distance.value),
      minHeight: this.height.value.lower,
      maxHeight: this.height.value.upper,
      exercise: this.exercise.value == '' ? null : Number(this.exercise.value),
      zodiacSign: this.sing.value == '' ? null : Number(this.sing.value),
      education: this.education.value == '' ? null : Number(this.education.value),
      drinking: this.drink.value == '' ? null : Number(this.drink.value),
      smoking: this.smok.value == '' ? null : Number(this.smok.value),
      kids: this.kid.value == '' ? null : Number(this.kid.value),
      religion: this.religion.value == '' ? null : Number(this.religion.value),
      /* location: {
        country: null,
        state: null,
        address: null,
        latitud: this.latitud_gps,
        longitud: this.longitud_gps
      } */
      location: null
    };
    console.log('FILTER: ', this.filter);

    await this.modal.dismiss();
    await this.reLoadDiscover();
  }

  onWillPresent() {
    this.noDiscoverFound = false;
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'backdrop') {
      this.setFilterForm();
      if(this.discoverUsrs.length <= 0) {
        this.noDiscoverFound = true;
      } else {
        this.noDiscoverFound = false;
      }
    }
  }

  onClickAgeToggle() {
    if(!this.ageToggle.value) {
      this.age_between.enable();
      this.age_between.setValue({lower: 18, upper: 100});
    } else {
      this.age_between.disable();
      this.age_between.setValue({lower: 0, upper: 0});
    }
  }

  onClickDisToggle() {
    if(!this.distanceToggle.value) {
      this.distance.enable();
      this.distance.setValue('1');
    } else {
      this.distance.disable();
      this.distance.setValue('0');
    }
  }

  async openMenuPopoverBlock( ev: any, personId: number ) {
    ev.stopPropagation();
    const popover = await this.popoverCtrl.create({
      component: DetailMatchMenuPopoverPage,
      event: ev,
      componentProps: { typeBlock: 2, matchId: null, personId }
    });
    
    await popover.present();
  }


  viewProfile(user: User) {
      console.log('SELECTED VIEW PROFILE: ', user);
      //Validacion para sacar al otro usuario del match (matchId esta mal estructurado es personId)
      let navegationExtras: NavigationExtras = {
        state: {
          typePerson: 1,
          otherPerson: user.personId, //(match.personLiked.toString() == this.user.personId ? match.personLikes : match.personLiked),
          //matchId: ustInt.personId, 
          image: JSON.stringify(user.image)
        }
      }
      
      this.router.navigate(['detail-match'], navegationExtras);
      this.discoverState.setCardList(this.discoverUsrs);
      this.discoverState.setLastCardIndex(this.posCardGlobal);
    }
}