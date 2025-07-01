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
export class TabDiscoverPage implements AfterViewInit {
  @ViewChildren(IonCard, {read: ElementRef}) cards: QueryList<ElementRef>;
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('swiperEl', { static: false }) swiperElRef!: ElementRef;

  isLoading = true;
  canReset = false;

  private limToLoadProfiles = 3;
  public heightImg = '';
  public user: User = {};
  public discoverUsrs: DiscoverUsr[] = [];
  public currentCardIndex = 0;
  private lanCatalogo = 'EN';
  private longPressActive = false;
  public statusUsrDicover = constants.statusUsrMatch;
  private iniDiscover = 0;
  private deltaDiscover = 3;
  private filter: FilterDiscover = {};
  private latitud_gps: string = null;
  private longitud_gps: string = null;
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
  private lastActionUserId = 0;
  private lastActionUser: DiscoverUsr = null;
  private lastActionType: 'like' | 'dislike' | null = null;

  filterForm = this.formBuilder.group({
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

  customExerciseOptions = {
    header: this.translate.instant('DISCOVER.Title_Exercise'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('DISCOVER.SubHdExe'),
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
      if (this.router.getCurrentNavigation()?.extras?.state) {
        if (!this.router.getCurrentNavigation().extras.state.mntList || 
            this.router.getCurrentNavigation().extras.state.mntList.length > 0) {
          this.discoverUsrs = this.router.getCurrentNavigation().extras.state.discoverUsrs;
        }
      }
    });
  }

  // Form getters
  get iam_a() { return this.filterForm.get('iam_a'); }
  get iam_looking() { return this.filterForm.get('iam_looking'); }
  get age_between() { return this.filterForm.get('age_between'); }
  get distance() { return this.filterForm.get('distance'); }
  get height() { return this.filterForm.get('height'); }
  get exercise() { return this.filterForm.get('exercise'); }
  get sing() { return this.filterForm.get('sing'); }
  get education() { return this.filterForm.get('education'); }
  get drink() { return this.filterForm.get('drink'); }
  get smok() { return this.filterForm.get('smok'); }
  get kid() { return this.filterForm.get('kid'); }
  get religion() { return this.filterForm.get('religion'); }
  get distanceToggle() { return this.filterForm.get('distanceToggle'); }
  get ageToggle() { return this.filterForm.get('ageToggle'); }

  async ngOnInit() {
    console.log('=== DISCOVER INIT ===');
    this.iniSizeContenedorCard();
    await this.initializeDiscover();
  }

  async ngAfterViewInit() {
    console.log('=== AFTER VIEW INIT ===');
    setTimeout(() => {
      this.initializeSwiper();
      this.setupGestures();
    }, 500);
  }

  async ionViewDidEnter() {
    console.log('=== ION VIEW DID ENTER ===');
    if (this.translate.currentLang == 'es') {
      this.lanCatalogo = constants.languages.es;
    } else {
      this.lanCatalogo = constants.languages.en;
    }

    this.matchService.newMatch = false;
    this.matchService.matchPerson = [];
    this.matchService.principal();
    this.iniSizeContenedorCard();
    this.user = await this.userService.getUserBasic('');
  }

  private async initializeDiscover() {
    try {
      // Restore state if available
      const savedList = this.discoverState.getCardList();
      const savedIndex = this.discoverState.getLastCardIndex();
      
      if (savedList && savedList.length > 0) {
        console.log('Restoring saved state:', savedList.length, 'cards, index:', savedIndex);
        this.discoverUsrs = [...savedList];
        this.currentCardIndex = Math.max(0, Math.min(savedIndex, this.discoverUsrs.length - 1));
        this.isLoading = false;
        this.noDiscoverFound = false;
      } else {
        console.log('Loading fresh discover data');
        await this.reLoadDiscover();
      }
    } catch (error) {
      console.error('Error initializing discover:', error);
      this.isLoading = false;
      this.noDiscoverFound = true;
    }
  }

  private initializeSwiper() {
    const swiper = this.swiperElRef?.nativeElement;
    if (swiper) {
      if (swiper.initialize) {
        swiper.initialize();
      }
      
      // Set initial slide
      setTimeout(() => {
        if (swiper.swiper && this.currentCardIndex >= 0) {
          swiper.swiper.slideTo(this.currentCardIndex, 0);
        }
      }, 100);
    }
  }

  private setupGestures() {
    setTimeout(() => {
      const cardArray = this.cards.toArray();
      if (cardArray.length > 0) {
        this.useSwipe(cardArray);
        console.log('Gestures setup for', cardArray.length, 'cards');
      }
    }, 100);
  }

  private updateSwiperToCurrentCard() {
    const swiper = this.swiperElRef?.nativeElement;
    if (swiper && swiper.swiper && this.discoverUsrs.length > 0) {
      // Ensure currentCardIndex is within bounds
      this.currentCardIndex = Math.max(0, Math.min(this.currentCardIndex, this.discoverUsrs.length - 1));
      
      setTimeout(() => {
        swiper.swiper.update();
        swiper.swiper.slideTo(this.currentCardIndex, 300);
        console.log('Updated swiper to slide:', this.currentCardIndex);
      }, 50);
    }
  }

  private saveCurrentState() {
    this.discoverState.setCardList(this.discoverUsrs);
    this.discoverState.setLastCardIndex(this.currentCardIndex);
    console.log('State saved - Cards:', this.discoverUsrs.length, 'Index:', this.currentCardIndex);
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

  iniSizeContenedorCard() {
    let imgSizeWidth = this.plt.width() * .9;
    let imgSizeHeight = this.plt.height() * .58;
    if (this.plt.platforms().indexOf('android') > -1)
      imgSizeHeight = this.plt.height() * .65;

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

  useSwipe(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipe',
        onStart: ev => {
          // Gesture start
        },
        onMove: ev => {
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX/10}deg)`;
          this.setIconPeople(ev.deltaX, i);
        },
        onEnd: ev => {
          card.nativeElement.style.transition = '.5s ease-out';
          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`
            this.handleSwipeAction('like');
          } else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`
            this.handleSwipeAction('dislike');
          } else {
            card.nativeElement.style.transform = '';
            if (this.discoverUsrs[i]) {
              this.discoverUsrs[i].status = this.statusUsrDicover.none;
              this.cdRef.detectChanges();
            }
          }
        }
      });
      gesture.enable(true);
    }
  }

  setIconPeople(x, numCard) {
    if (!this.discoverUsrs[numCard]) return;

    if (x < -25) {
      if (this.discoverUsrs[numCard].status != this.statusUsrDicover.dislike) {
        this.discoverUsrs[numCard].status = this.statusUsrDicover.dislike;
        this.cdRef.detectChanges();
      }
    } else if ((x > 25)) {
      if (this.discoverUsrs[numCard].status != this.statusUsrDicover.like) {
        this.discoverUsrs[numCard].status = this.statusUsrDicover.like;
        this.cdRef.detectChanges();
      }
    } else {
      this.discoverUsrs[numCard].status = this.statusUsrDicover.none;
      this.cdRef.detectChanges();
    }
  }

  private async handleSwipeAction(action: 'like' | 'dislike') {
    if (action === 'like') {
      await this.doLike();
    } else {
      await this.doDislike();
    }
  }

  async loadDiscover() {
    try {
      console.log('Loading more discover profiles...');
      this.isLoading = true;
      
      const discoverUsr_res = <DiscoverUsr[]> await this.matchService.getDiscoverProfiles(
        this.iniDiscover.toString(), 
        this.deltaDiscover.toString(), 
        this.filter
      );

      if (discoverUsr_res === null) {
        this.discoverUsrs = null;
        this.noDiscoverFound = true;
        console.log('No more profiles available');
        return;
      }

      console.log('Loaded profiles:', discoverUsr_res.length);
      
      // Add new profiles to the beginning of the array
      this.discoverUsrs = [...discoverUsr_res, ...this.discoverUsrs];
      this.currentCardIndex = discoverUsr_res.length - 1;
      
      this.cdRef.detectChanges();
      
      // Update swiper and gestures
      setTimeout(() => {
        this.updateSwiperToCurrentCard();
        this.setupGestures();
      }, 100);

      this.noDiscoverFound = this.discoverUsrs.length <= 0;
      this.saveCurrentState();
      
    } catch (error) {
      console.error('Error loading discover profiles:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async reLoadDiscover() {
    console.log('Reloading discover profiles...');
    this.uiService.showLoader();
    
    try {
      this.iniDiscover = 0;
      this.discoverUsrs = [];
      this.currentCardIndex = 0;
      this.noDiscoverFound = true;
      this.isLoading = true;
      
      this.cdRef.detectChanges();
      
      const discoverUsr_res = <DiscoverUsr[]> await this.matchService.getDiscoverProfiles(
        this.iniDiscover.toString(), 
        this.deltaDiscover.toString(), 
        this.filter
      );

      if (discoverUsr_res === null) {
        this.noDiscoverFound = true;
        console.log('No profiles found');
        return;
      }

      console.log('Reloaded profiles:', discoverUsr_res.length);
      
      this.discoverUsrs = [...discoverUsr_res];
      this.iniDiscover = this.discoverUsrs.length;
      this.currentCardIndex = this.discoverUsrs.length - 1;
      
      this.noDiscoverFound = this.discoverUsrs.length <= 0;
      
      this.cdRef.detectChanges();
      
      // Update swiper and gestures
      setTimeout(() => {
        this.updateSwiperToCurrentCard();
        this.setupGestures();
      }, 200);

      this.saveCurrentState();
      
    } catch (error) {
      console.error('Error reloading discover profiles:', error);
      this.noDiscoverFound = true;
    } finally {
      this.isLoading = false;
      this.uiService.hideLoader();
    }
  }

  async setStatusDiscover(idDiscover: number, accionId: number, actionType: 'like' | 'dislike') {
    console.log('=== SET STATUS DISCOVER ===');
    console.log('User ID:', idDiscover, 'Action:', accionId, 'Type:', actionType);
    console.log('Current Index:', this.currentCardIndex, 'Total Cards:', this.discoverUsrs.length);

    if (!this.discoverUsrs || this.discoverUsrs.length === 0 || this.currentCardIndex < 0) {
      console.log('No cards available or invalid index');
      return;
    }

    // Ensure we're working with the correct card
    const currentUser = this.discoverUsrs[this.currentCardIndex];
    if (!currentUser || currentUser.personId !== idDiscover) {
      console.log('Card mismatch - finding correct card');
      const correctIndex = this.discoverUsrs.findIndex(user => user.personId === idDiscover);
      if (correctIndex !== -1) {
        this.currentCardIndex = correctIndex;
      } else {
        console.error('Could not find user with ID:', idDiscover);
        return;
      }
    }

    try {
      // Store for potential rollback
      this.lastActionUser = {...this.discoverUsrs[this.currentCardIndex]};
      this.lastActionUserId = idDiscover;
      this.lastActionType = actionType;
      this.canReset = true;

      // API call
      let resLike = actionType === 'like' ? 'true' : 'false';
      let resSuperLike = 'false';
      
      console.log('Making API call...');
      let matchId = await this.matchService.doMatchProfiles(
        idDiscover.toString(), 
        accionId.toString(), 
        resLike, 
        resSuperLike, 
        null
      );

      // Handle match result
      if (matchId != null) {
        console.log('Match found!', matchId);
        await this.showMatchModal(matchId);
      }

      // Remove current card
      console.log('Removing card at index:', this.currentCardIndex);
      this.discoverUsrs.splice(this.currentCardIndex, 1);
      
      // Adjust current index
      if (this.currentCardIndex >= this.discoverUsrs.length) {
        this.currentCardIndex = this.discoverUsrs.length - 1;
      }
      
      console.log('After removal - Index:', this.currentCardIndex, 'Total:', this.discoverUsrs.length);
      
      // Force UI update
      this.cdRef.detectChanges();
      
      // Update swiper
      setTimeout(() => {
        this.updateSwiperToCurrentCard();
      }, 50);

      // Load more if needed
      if (this.discoverUsrs.length <= 2) {
        console.log('Loading more cards...');
        await this.loadDiscover();
      }

      // Save state
      this.saveCurrentState();
      
    } catch (error) {
      console.error('Error in setStatusDiscover:', error);
      this.canReset = false;
    }
  }

  private async showMatchModal(matchId: any) {
    const currentUser = this.discoverUsrs[this.currentCardIndex];
    const modal = await this.modalController.create({
      component: MatchModalPage,
      componentProps: {
        matchedUserName: `${currentUser.firstName} ${currentUser.lastName}`,
        matchedUserImage: getImageUrl(currentUser.image, 'assets/icon/30-Default_no-image.jpeg'),
        currentUserImage: getImageUrl(this.user.image, 'assets/img/you.jpg'),
      },
      cssClass: 'match-modal',
    });
    
    await modal.present();
    
    const { data } = await modal.onDidDismiss();
    
    if (data?.action === 'message') {
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
      
      this.router.navigate(['main/tabs/message'], navExtras).then(() => {
        this.tabService.setActiveTab('message');
      });
    } else if (data?.action === 'share') {
      try {
        const url = Capacitor.getPlatform() === 'ios'
          ? 'https://apps.apple.com/app/id123456789'
          : 'https://play.google.com/store/apps/details?id=com.ifmly.package';
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

  async returnDicover() {
    console.log('=== RETURN DISCOVER ===');
    
    if (!this.canReset || this.lastActionUserId === 0 || !this.lastActionUser) {
      this.uiService.alertOK(this.translate.instant('DISCOVER.notRollback'));
      return;
    }

    try {
      console.log('Attempting rollback for user:', this.lastActionUserId);
      
      const rollbackSuccess = await this.matchService.rollbackLike(this.lastActionUserId.toString());
      
      if (rollbackSuccess) {
        console.log('Rollback successful, restoring card');
        
        // Insert the card back at the current position
        this.discoverUsrs.splice(this.currentCardIndex, 0, this.lastActionUser);
        
        console.log('Card restored at index:', this.currentCardIndex);
        
        // Reset rollback data
        this.lastActionUserId = 0;
        this.lastActionUser = null;
        this.lastActionType = null;
        this.canReset = false;
        
        // Force UI update
        this.cdRef.detectChanges();
        
        // Update swiper
        setTimeout(() => {
          this.updateSwiperToCurrentCard();
          this.setupGestures();
        }, 100);
        
        // Save state
        this.saveCurrentState();
        
        console.log('Rollback completed successfully');
      } else {
        console.log('Rollback failed');
        this.uiService.alertOK(this.translate.instant('DISCOVER.rollbackFalse'));
      }
    } catch (error) {
      console.error('Error during rollback:', error);
      this.uiService.alertOK(this.translate.instant('DISCOVER.rollbackFalse'));
    }
  }

  async doDislike() {
    console.log('=== DO DISLIKE ===');
    
    if (this.currentCardIndex < 0 || !this.discoverUsrs[this.currentCardIndex]) {
      console.log('Cannot dislike - no card available');
      return;
    }

    await this.setStatusDiscover(
      this.discoverUsrs[this.currentCardIndex].personId, 
      this.statusUsrDicover.dislike,
      'dislike'
    );
  }

  async doLike() {
    console.log('=== DO LIKE ===');
    
    if (this.currentCardIndex < 0 || !this.discoverUsrs[this.currentCardIndex]) {
      console.log('Cannot like - no card available');
      return;
    }

    await this.setStatusDiscover(
      this.discoverUsrs[this.currentCardIndex].personId, 
      this.statusUsrDicover.like,
      'like'
    );
  }

  getNames(items?: { name: string }[]): string {
    if (!items || items.length === 0) return '';
    return items.slice(0, 3).map(i => i.name).join(', ');
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
      location: null
    };
    
    console.log('Applying filter:', this.filter);
    
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
      if (this.discoverUsrs.length <= 0) {
        this.noDiscoverFound = true;
      } else {
        this.noDiscoverFound = false;
      }
    }
  }

  viewProfile(user: User) {
    console.log('Viewing profile for user:', user);
    let navegationExtras: NavigationExtras = {
      state: {
        typePerson: 1,
        otherPerson: user.personId,
        image: JSON.stringify(user.image)
      }
    }
    
    this.router.navigate(['detail-match'], navegationExtras);
    this.saveCurrentState();
  }
}

function getImageUrl(image: any, fallback: string): string {
  if (!image) return fallback;
  if (typeof image === 'object' && 'multimediaUrl' in image && image.multimediaUrl) {
    return image.multimediaUrl;
  }
  if (typeof image === 'string') {
    return image;
  }
  return fallback;
}