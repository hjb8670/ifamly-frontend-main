(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabDiscover_tabDiscover_module_ts"],{

/***/ 35928:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabDiscover/tabDiscover-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabDiscoverPageRoutingModule: () => (/* binding */ TabDiscoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _tabDiscover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabDiscover.page */ 85419);




const routes = [{
  path: '',
  component: _tabDiscover_page__WEBPACK_IMPORTED_MODULE_0__.TabDiscoverPage
}];
let TabDiscoverPageRoutingModule = class TabDiscoverPageRoutingModule {};
TabDiscoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TabDiscoverPageRoutingModule);


/***/ }),

/***/ 30860:
/*!*********************************************************!*\
  !*** ./src/app/pages/tabDiscover/tabDiscover.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabDiscoverPageModule: () => (/* binding */ TabDiscoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _tabDiscover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabDiscover.page */ 85419);
/* harmony import */ var _tabDiscover_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabDiscover-routing.module */ 35928);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let TabDiscoverPageModule = class TabDiscoverPageModule {};
TabDiscoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _tabDiscover_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabDiscoverPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_tabDiscover_page__WEBPACK_IMPORTED_MODULE_0__.TabDiscoverPage]
})], TabDiscoverPageModule);


/***/ }),

/***/ 85419:
/*!*******************************************************!*\
  !*** ./src/app/pages/tabDiscover/tabDiscover.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabDiscoverPage: () => (/* binding */ TabDiscoverPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _tabDiscover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabDiscover.page.html?ngResource */ 97524);
/* harmony import */ var _tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabDiscover.page.scss?ngResource */ 18344);
/* harmony import */ var _tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 90628);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/match.service */ 5876);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ui.service */ 44136);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _gallery_gallery_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gallery/gallery.page */ 5548);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/share */ 54524);
/* harmony import */ var src_app_match_modal_match_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/match-modal/match-modal.page */ 95180);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ 3536);
/* harmony import */ var src_app_services_talk_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/talk.service */ 68648);
/* harmony import */ var src_app_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/tab.service */ 87548);
/* harmony import */ var _services_discover_state_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/discover-state.service */ 36508);





















let TabDiscoverPage = class TabDiscoverPage {
  constructor(formBuilder, alertController, popoverCtrl, translate, userService, uiService, matchService, gestureCtrl, zone, plt, cdRef, activatedRoute, router, modalController, navCtrl, platform, talkService, tabService, discoverState) {
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.popoverCtrl = popoverCtrl;
    this.translate = translate;
    this.userService = userService;
    this.uiService = uiService;
    this.matchService = matchService;
    this.gestureCtrl = gestureCtrl;
    this.zone = zone;
    this.plt = plt;
    this.cdRef = cdRef;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.modalController = modalController;
    this.navCtrl = navCtrl;
    this.platform = platform;
    this.talkService = talkService;
    this.tabService = tabService;
    this.discoverState = discoverState;
    this.isLoading = true;
    this.canReset = false;
    this.limToLoadProfiles = 3;
    this.heightImg = '';
    this.user = {};
    this.discoverUsrs = [];
    this.currentCardIndex = 0;
    this.lanCatalogo = 'EN';
    this.longPressActive = false;
    this.statusUsrDicover = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.statusUsrMatch;
    this.iniDiscover = 0;
    this.deltaDiscover = 3;
    this.filter = {};
    this.latitud_gps = null;
    this.longitud_gps = null;
    this.disLikeBtn = false;
    this.likeBtn = false;
    this.noDiscoverFound = false;
    this.lastActionUserId = 0;
    this.lastActionUser = null;
    this.lastActionType = null;
    this.filterForm = this.formBuilder.group({
      iam_a: [''],
      iam_looking: [''],
      age_between: [{
        lower: 18,
        upper: 100
      }],
      distance: ['1'],
      height: [{
        lower: 1,
        upper: 8
      }],
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
    this.customExerciseOptions = {
      header: this.translate.instant('DISCOVER.Title_Exercise'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdExe'),
      translucent: true
    };
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        if (!this.router.getCurrentNavigation().extras.state.mntList || this.router.getCurrentNavigation().extras.state.mntList.length > 0) {
          this.discoverUsrs = this.router.getCurrentNavigation().extras.state.discoverUsrs;
        }
      }
    });
  }
  // Form getters
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
  ngOnInit() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('=== DISCOVER INIT ===');
      _this.iniSizeContenedorCard();
      yield _this.initializeDiscover();
    })();
  }
  ngAfterViewInit() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('=== AFTER VIEW INIT ===');
      setTimeout(() => {
        _this2.initializeSwiper();
        _this2.setupGestures();
      }, 500);
    })();
  }
  ionViewDidEnter() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('=== ION VIEW DID ENTER ===');
      if (_this3.translate.currentLang == 'es') {
        _this3.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.es;
      } else {
        _this3.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.en;
      }
      _this3.matchService.newMatch = false;
      _this3.matchService.matchPerson = [];
      _this3.matchService.principal();
      _this3.iniSizeContenedorCard();
      _this3.user = yield _this3.userService.getUserBasic('');
    })();
  }
  initializeDiscover() {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Restore state if available
        const savedList = _this4.discoverState.getCardList();
        const savedIndex = _this4.discoverState.getLastCardIndex();
        if (savedList && savedList.length > 0) {
          console.log('Restoring saved state:', savedList.length, 'cards, index:', savedIndex);
          _this4.discoverUsrs = [...savedList];
          _this4.currentCardIndex = Math.max(0, Math.min(savedIndex, _this4.discoverUsrs.length - 1));
          _this4.isLoading = false;
          _this4.noDiscoverFound = false;
        } else {
          console.log('Loading fresh discover data');
          yield _this4.reLoadDiscover();
        }
      } catch (error) {
        console.error('Error initializing discover:', error);
        _this4.isLoading = false;
        _this4.noDiscoverFound = true;
      }
    })();
  }
  initializeSwiper() {
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
  setupGestures() {
    setTimeout(() => {
      const cardArray = this.cards.toArray();
      if (cardArray.length > 0) {
        this.useSwipe(cardArray);
        console.log('Gestures setup for', cardArray.length, 'cards');
      }
    }, 100);
  }
  updateSwiperToCurrentCard() {
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
  saveCurrentState() {
    this.discoverState.setCardList(this.discoverUsrs);
    this.discoverState.setLastCardIndex(this.currentCardIndex);
    console.log('State saved - Cards:', this.discoverUsrs.length, 'Index:', this.currentCardIndex);
  }
  openGallery(usr) {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let currentModal = yield _this5.modalController.getTop();
        if (currentModal) {
          yield currentModal.dismiss();
        }
        const resImg = yield _this5.matchService.getIMGSOfPerson(usr.personId.toString());
        const safeImgList = Array.isArray(resImg) ? resImg : [];
        const images = safeImgList.map(img => img.multimediaUrl || '');
        const modal = yield _this5.modalController.create({
          component: _gallery_gallery_page__WEBPACK_IMPORTED_MODULE_7__.GalleryPage,
          componentProps: {
            images,
            startIndex: 0
          },
          cssClass: 'gallery-modal'
        });
        yield modal.present();
      } catch (err) {
        console.error('Failed to open gallery modal:', err);
      }
    })();
  }
  iniSizeContenedorCard() {
    let imgSizeWidth = this.plt.width() * .9;
    let imgSizeHeight = this.plt.height() * .58;
    if (this.plt.platforms().indexOf('android') > -1) imgSizeHeight = this.plt.height() * .65;
    this.heightImg = imgSizeHeight + 'px';
    this.cdRef.detectChanges();
  }
  iniFilter() {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.user = yield _this6.userService.getUser('');
      _this6.filter = {
        selfRole: _this6.user.iam_a,
        targetRole: _this6.user.iam_looking,
        ageIni: 18,
        ageEnd: 100,
        distance: null,
        minHeight: 1,
        maxHeight: 100,
        exercise: Number(_this6.user.exercise),
        zodiacSign: Number(_this6.user.sings),
        education: Number(_this6.user.education),
        drinking: Number(_this6.user.drinking),
        smoking: Number(_this6.user.smoking),
        kids: Number(_this6.user.kids),
        religion: Number(_this6.user.religion),
        location: null
      };
      _this6.setFilterForm();
    })();
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
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
          this.setIconPeople(ev.deltaX, i);
        },
        onEnd: ev => {
          card.nativeElement.style.transition = '.5s ease-out';
          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
            this.handleSwipeAction('like');
          } else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
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
    } else if (x > 25) {
      if (this.discoverUsrs[numCard].status != this.statusUsrDicover.like) {
        this.discoverUsrs[numCard].status = this.statusUsrDicover.like;
        this.cdRef.detectChanges();
      }
    } else {
      this.discoverUsrs[numCard].status = this.statusUsrDicover.none;
      this.cdRef.detectChanges();
    }
  }
  handleSwipeAction(action) {
    var _this7 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (action === 'like') {
        yield _this7.doLike();
      } else {
        yield _this7.doDislike();
      }
    })();
  }
  loadDiscover() {
    var _this8 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Loading more discover profiles...');
        _this8.isLoading = true;
        const discoverUsr_res = yield _this8.matchService.getDiscoverProfiles(_this8.iniDiscover.toString(), _this8.deltaDiscover.toString(), _this8.filter);
        if (discoverUsr_res === null) {
          _this8.discoverUsrs = null;
          _this8.noDiscoverFound = true;
          console.log('No more profiles available');
          return;
        }
        console.log('Loaded profiles:', discoverUsr_res.length);
        const newProfiles = discoverUsr_res.filter(newUser => !_this8.discoverUsrs.some(existingUser => existingUser.personId === newUser.personId));
        _this8.discoverUsrs = [...newProfiles, ..._this8.discoverUsrs];
        _this8.currentCardIndex = newProfiles.length - 1;
        _this8.cdRef.detectChanges();
        // Update swiper and gestures
        setTimeout(() => {
          _this8.updateSwiperToCurrentCard();
          _this8.setupGestures();
        }, 100);
        _this8.noDiscoverFound = _this8.discoverUsrs.length <= 0;
        _this8.saveCurrentState();
      } catch (error) {
        console.error('Error loading discover profiles:', error);
      } finally {
        _this8.isLoading = false;
      }
    })();
  }
  reLoadDiscover() {
    var _this9 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Reloading discover profiles...');
      _this9.uiService.showLoader();
      try {
        _this9.iniDiscover = 0;
        _this9.discoverUsrs = [];
        _this9.currentCardIndex = 0;
        _this9.noDiscoverFound = true;
        _this9.isLoading = true;
        _this9.cdRef.detectChanges();
        const discoverUsr_res = yield _this9.matchService.getDiscoverProfiles(_this9.iniDiscover.toString(), _this9.deltaDiscover.toString(), _this9.filter);
        if (discoverUsr_res === null) {
          _this9.noDiscoverFound = true;
          console.log('No profiles found');
          return;
        }
        console.log('Reloaded profiles:', discoverUsr_res.length);
        _this9.discoverUsrs = [...discoverUsr_res];
        _this9.iniDiscover = _this9.discoverUsrs.length;
        _this9.currentCardIndex = _this9.discoverUsrs.length - 1;
        _this9.noDiscoverFound = _this9.discoverUsrs.length <= 0;
        _this9.cdRef.detectChanges();
        // Update swiper and gestures
        setTimeout(() => {
          _this9.updateSwiperToCurrentCard();
          _this9.setupGestures();
        }, 200);
        _this9.saveCurrentState();
      } catch (error) {
        console.error('Error reloading discover profiles:', error);
        _this9.noDiscoverFound = true;
      } finally {
        _this9.isLoading = false;
        _this9.uiService.hideLoader();
      }
    })();
  }
  setStatusDiscover(idDiscover, accionId, actionType) {
    var _this10 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('=== SET STATUS DISCOVER ===');
      console.log('User ID:', idDiscover, 'Action:', accionId, 'Type:', actionType);
      console.log('Current Index:', _this10.currentCardIndex, 'Total Cards:', _this10.discoverUsrs.length);
      if (!_this10.discoverUsrs || _this10.discoverUsrs.length === 0 || _this10.currentCardIndex < 0) {
        console.log('No cards available or invalid index');
        return;
      }
      // Ensure we're working with the correct card
      const currentUser = _this10.discoverUsrs[_this10.currentCardIndex];
      if (!currentUser || currentUser.personId !== idDiscover) {
        console.log('Card mismatch - finding correct card');
        const correctIndex = _this10.discoverUsrs.findIndex(user => user.personId === idDiscover);
        if (correctIndex !== -1) {
          _this10.currentCardIndex = correctIndex;
        } else {
          console.error('Could not find user with ID:', idDiscover);
          return;
        }
      }
      try {
        // Store for potential rollback
        _this10.lastActionUser = {
          ..._this10.discoverUsrs[_this10.currentCardIndex]
        };
        _this10.lastActionUserId = idDiscover;
        _this10.lastActionType = actionType;
        _this10.canReset = true;
        // API call
        let resLike = actionType === 'like' ? 'true' : 'false';
        let resSuperLike = 'false';
        console.log('Making API call...');
        let matchId = yield _this10.matchService.doMatchProfiles(idDiscover.toString(), accionId.toString(), resLike, resSuperLike, null);
        // Handle match result
        if (matchId != null) {
          console.log('Match found!', matchId);
          yield _this10.showMatchModal(matchId);
        }
        // Remove current card
        console.log('Removing card at index:', _this10.currentCardIndex);
        _this10.discoverUsrs.splice(_this10.currentCardIndex, 1);
        // Adjust current index
        if (_this10.currentCardIndex >= _this10.discoverUsrs.length) {
          _this10.currentCardIndex = _this10.discoverUsrs.length - 1;
        }
        console.log('After removal - Index:', _this10.currentCardIndex, 'Total:', _this10.discoverUsrs.length);
        // Force UI update
        _this10.cdRef.detectChanges();
        // Update swiper
        setTimeout(() => {
          _this10.updateSwiperToCurrentCard();
        }, 50);
        // Load more if needed
        if (_this10.discoverUsrs.length <= 2) {
          console.log('Loading more cards...');
          yield _this10.loadDiscover();
        }
        // Save state
        _this10.saveCurrentState();
      } catch (error) {
        console.error('Error in setStatusDiscover:', error);
        _this10.canReset = false;
      }
    })();
  }
  showMatchModal(matchId) {
    var _this11 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentUser = _this11.discoverUsrs[_this11.currentCardIndex];
      const modal = yield _this11.modalController.create({
        component: src_app_match_modal_match_modal_page__WEBPACK_IMPORTED_MODULE_9__.MatchModalPage,
        componentProps: {
          matchedUserName: `${currentUser.firstName} ${currentUser.lastName}`,
          matchedUserImage: getImageUrl(currentUser.image, 'assets/icon/30-Default_no-image.jpeg'),
          currentUserImage: getImageUrl(_this11.user.image, 'assets/img/you.jpg')
        },
        cssClass: 'match-modal'
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data?.action === 'message') {
        _this11.uiService.showLoader();
        const resp = yield _this11.talkService.updateConversation(matchId.toString());
        _this11.uiService.hideLoader();
        if (Object.keys(resp).length === 0) {
          console.log("Chat registration issue");
          return;
        }
        const navExtras = {
          state: {
            idConversation: resp["idConversation"]
          }
        };
        _this11.router.navigate(['main/tabs/message'], navExtras).then(() => {
          _this11.tabService.setActiveTab('message');
        });
      } else if (data?.action === 'share') {
        try {
          const url = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__.Capacitor.getPlatform() === 'ios' ? 'https://apps.apple.com/app/id123456789' : 'https://play.google.com/store/apps/details?id=com.ifmly.package';
          yield _capacitor_share__WEBPACK_IMPORTED_MODULE_8__.Share.share({
            title: 'Check out this match!',
            text: 'I just got a new match on the app! 🎉',
            url: url,
            dialogTitle: 'Share with your friends'
          });
        } catch (err) {
          console.error('Error sharing:', err);
        }
      }
    })();
  }
  returnDicover() {
    var _this12 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('=== RETURN DISCOVER ===');
      if (!_this12.canReset || _this12.lastActionUserId === 0 || !_this12.lastActionUser) {
        _this12.uiService.alertOK(_this12.translate.instant('DISCOVER.notRollback'));
        return;
      }
      try {
        console.log('Attempting rollback for user:', _this12.lastActionUserId);
        const rollbackSuccess = yield _this12.matchService.rollbackLike(_this12.lastActionUserId.toString());
        if (rollbackSuccess) {
          console.log('Rollback successful, restoring card');
          // Insert the card back at the current position
          _this12.discoverUsrs.splice(_this12.currentCardIndex, 0, _this12.lastActionUser);
          console.log('Card restored at index:', _this12.currentCardIndex);
          // Reset rollback data
          _this12.lastActionUserId = 0;
          _this12.lastActionUser = null;
          _this12.lastActionType = null;
          _this12.canReset = false;
          // Force UI update
          _this12.cdRef.detectChanges();
          // Update swiper
          setTimeout(() => {
            _this12.updateSwiperToCurrentCard();
            _this12.setupGestures();
          }, 100);
          // Save state
          _this12.saveCurrentState();
          console.log('Rollback completed successfully');
        } else {
          console.log('Rollback failed');
          _this12.uiService.alertOK(_this12.translate.instant('DISCOVER.rollbackFalse'));
        }
      } catch (error) {
        console.error('Error during rollback:', error);
        _this12.uiService.alertOK(_this12.translate.instant('DISCOVER.rollbackFalse'));
      }
    })();
  }
  doDislike() {
    var _this13 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('=== DO DISLIKE ===');
      if (_this13.currentCardIndex < 0 || !_this13.discoverUsrs[_this13.currentCardIndex]) {
        console.log('Cannot dislike - no card available');
        return;
      }
      yield _this13.setStatusDiscover(_this13.discoverUsrs[_this13.currentCardIndex].personId, _this13.statusUsrDicover.dislike, 'dislike');
    })();
  }
  doLike() {
    var _this14 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('=== DO LIKE ===');
      if (_this14.currentCardIndex < 0 || !_this14.discoverUsrs[_this14.currentCardIndex]) {
        console.log('Cannot like - no card available');
        return;
      }
      yield _this14.setStatusDiscover(_this14.discoverUsrs[_this14.currentCardIndex].personId, _this14.statusUsrDicover.like, 'like');
    })();
  }
  getNames(items) {
    if (!items || items.length === 0) return '';
    return items.slice(0, 3).map(i => i.name).join(', ');
  }
  clearFilter() {
    this.iam_a.setValue('');
    this.iam_looking.setValue('');
    this.age_between.setValue({
      lower: 18,
      upper: 100
    });
    this.distance.setValue('1');
    this.height.setValue({
      lower: 1,
      upper: 8
    });
    this.exercise.setValue('');
    this.sing.setValue('');
    this.education.setValue('');
    this.drink.setValue('');
    this.smok.setValue('');
    this.kid.setValue('');
    this.religion.setValue('');
  }
  applyFilter() {
    var _this15 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this15.filter = {
        selfRole: _this15.iam_a.value == '' ? null : _this15.iam_a.value,
        targetRole: _this15.iam_looking.value == '' ? null : _this15.iam_looking.value,
        ageIni: _this15.age_between.value.lower,
        ageEnd: _this15.age_between.value.upper,
        distance: _this15.distance.value == '' ? null : Number(_this15.distance.value),
        minHeight: _this15.height.value.lower,
        maxHeight: _this15.height.value.upper,
        exercise: _this15.exercise.value == '' ? null : Number(_this15.exercise.value),
        zodiacSign: _this15.sing.value == '' ? null : Number(_this15.sing.value),
        education: _this15.education.value == '' ? null : Number(_this15.education.value),
        drinking: _this15.drink.value == '' ? null : Number(_this15.drink.value),
        smoking: _this15.smok.value == '' ? null : Number(_this15.smok.value),
        kids: _this15.kid.value == '' ? null : Number(_this15.kid.value),
        religion: _this15.religion.value == '' ? null : Number(_this15.religion.value),
        location: null
      };
      console.log('Applying filter:', _this15.filter);
      yield _this15.modal.dismiss();
      yield _this15.reLoadDiscover();
    })();
  }
  onWillPresent() {
    this.noDiscoverFound = false;
  }
  onWillDismiss(event) {
    const ev = event;
    if (ev.detail.role === 'backdrop') {
      this.setFilterForm();
      if (this.discoverUsrs.length <= 0) {
        this.noDiscoverFound = true;
      } else {
        this.noDiscoverFound = false;
      }
    }
  }
  viewProfile(user) {
    console.log('Viewing profile for user:', user);
    let navegationExtras = {
      state: {
        typePerson: 1,
        otherPerson: user.personId,
        image: JSON.stringify(user.image)
      }
    };
    this.router.navigate(['detail-match'], navegationExtras);
    this.saveCurrentState();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.PopoverController
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_6__.UiService
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_5__.MatchService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.GestureController
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.NgZone
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.NavController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform
    }, {
      type: src_app_services_talk_service__WEBPACK_IMPORTED_MODULE_11__.TalkService
    }, {
      type: src_app_services_tab_service__WEBPACK_IMPORTED_MODULE_12__.TabService
    }, {
      type: _services_discover_state_service__WEBPACK_IMPORTED_MODULE_13__.DiscoverStateService
    }];
  }
  static {
    this.propDecorators = {
      cards: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChildren,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCard, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ElementRef
        }]
      }],
      modal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonModal]
      }],
      swiperElRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
        args: ['swiperEl', {
          static: false
        }]
      }]
    };
  }
};
TabDiscoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-tabDiscover',
  template: _tabDiscover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TabDiscoverPage);

function getImageUrl(image, fallback) {
  if (!image) return fallback;
  if (typeof image === 'object' && 'multimediaUrl' in image && image.multimediaUrl) {
    return image.multimediaUrl;
  }
  if (typeof image === 'string') {
    return image;
  }
  return fallback;
}

/***/ }),

/***/ 36508:
/*!****************************************************!*\
  !*** ./src/app/services/discover-state.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscoverStateService: () => (/* binding */ DiscoverStateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94280);


let DiscoverStateService = class DiscoverStateService {
  constructor() {
    this.cardListKey = 'discover_card_list';
    this.cardIndexKey = 'discover_card_index';
  }
  setCardList(list) {
    localStorage.setItem(this.cardListKey, JSON.stringify(list));
  }
  getCardList() {
    const data = localStorage.getItem(this.cardListKey);
    return data ? JSON.parse(data) : [];
  }
  setLastCardIndex(index) {
    localStorage.setItem(this.cardIndexKey, index.toString());
  }
  getLastCardIndex() {
    const data = localStorage.getItem(this.cardIndexKey);
    return data ? parseInt(data, 10) : 0;
  }
  clear() {
    localStorage.removeItem(this.cardListKey);
    localStorage.removeItem(this.cardIndexKey);
  }
};
DiscoverStateService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], DiscoverStateService);


/***/ }),

/***/ 18344:
/*!********************************************************************!*\
  !*** ./src/app/pages/tabDiscover/tabDiscover.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].rules[0].oneOf[1].use[0]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].rules[0].oneOf[1].use[1]!../../../../node_modules/swiper/swiper-bundle.css */ 66860);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* styles.scss */
.profile-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.profile-card ion-card-content {
  padding: 16px;
}

.profile-avatar {
  width: 200px;
  height: 200px;
  margin-top: 2px;
  border-radius: 10%;
  object-fit: cover;
  border: 3px solid #eee;
}

.profile-name {
  font-size: 25px;
  font-weight: bold;
  color: #333;
}

.profile-description {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* show 3 lines max */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
  margin-top: 5px;
  font-size: 14px;
  color: orange;
}

.profile-info-block {
  display: flex;
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 1.3;
}

.profile-info-block .info-label {
  width: 100px;
  font-weight: 600;
  color: #333;
  flex-shrink: 0;
  text-align: left;
}

.profile-info-block .info-value {
  flex-grow: 1;
  text-align: left;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.profile-section {
  margin-top: 16px;
  text-align: left;
}
.profile-section h3 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #555;
}
.profile-section ul {
  list-style: none;
  padding: 0;
}
.profile-section ul li {
  font-size: 14px;
  color: #333;
  padding-left: 12px;
  position: relative;
}

.profile-actions {
  display: flex;
  justify-content: space-around;
  padding: 16px;
  border-top: 1px solid #eee;
}
.profile-actions ion-icon {
  font-size: 32px;
  color: #ff6b6b;
  cursor: pointer;
}
.profile-actions ion-icon:nth-child(2) {
  color: #ffc107;
}
.profile-actions ion-icon:nth-child(3) {
  color: #4cd137;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

swiper-container,
swiper-slide,
ion-card {
  background-color: #f4f0e5;
  height: 100%;
  margin-top: 2px;
}

ion-content {
  --overflow:hidden;
}

.hdPage {
  background: var(--ion-color-blanco);
  padding-bottom: 0px;
}

ion-back-button {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
}

.titlePage {
  font-family: "Sk-Modernist-Bold";
  font-size: 24px;
  text-align: center;
  margin-top: -5px;
  margin-bottom: 0;
}

.titleLoc {
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  color: var(--ion-color-gris1);
  text-align: center;
  margin-top: 15px;
  margin-bottom: 0;
}

.menuBtn {
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
}

.menuIcon {
  font-size: 28px;
  margin-left: auto;
  margin-right: auto;
}

.contenedorCard {
  position: relative;
  height: 82%;
}

ion-card {
  position: absolute;
  width: 90%;
  margin-left: 5%;
  /* border-style: solid;
  border-width: 0;
  border-radius: 15px; */
  --background: none;
  box-shadow: none !important;
}

.card-img {
  object-fit: cover;
  width: 100%;
  background-color: white;
  border-style: solid;
  border-width: 0;
  border-radius: 15px;
}

.card-boton {
  position: absolute;
  top: 10px;
  right: 10px;
}

.card-gradient {
  position: absolute;
  background: linear-gradient(0deg, rgb(255, 79, 1) 0%, rgba(255, 255, 255, 0) 25%);
  width: 100%;
  height: 100%;
  border-style: solid;
  border-width: 0;
  border-radius: 15px;
  top: 0;
}

.menuBtn {
  font-size: 18px;
  background: var(--ion-color-blanco);
  height: 48px;
  width: 50px;
  color: var(--ion-color-negro);
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
}

.menuIcon {
  margin-left: auto;
  margin-right: auto;
}

.card-title {
  position: absolute;
  font-family: "Sk-Modernist-Bold";
  font-size: 30px;
  color: var(--ion-color-blanco);
  bottom: 50px;
  left: 15px;
}

.card-subtitle {
  position: absolute;
  font-family: "Sk-Modernist-Regular";
  font-size: 18px;
  color: var(--ion-color-blanco);
  bottom: 25px;
  left: 15px;
}

.card-start {
  position: absolute;
  width: 13px;
  bottom: 25px;
}

.card-ratings {
  position: absolute;
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  color: var(--ion-color-blanco);
  bottom: 25px;
  right: 15px;
}

.card-like-dis {
  position: absolute;
  width: 26%;
  top: 38%;
  left: 38%;
}

.row-btn {
  align-items: center;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 3%;
}

.btn-small {
  width: 60px;
}

.btn-big {
  width: 100px;
}

.header-filter {
  margin-top: 10px;
}

.div-modal-g {
  height: 75%;
}

.div-modal {
  height: 100%;
  overflow-y: scroll;
}

.listModal {
  margin-top: 0;
  padding-top: 0;
  /* .ios {
      margin-top: 8px;
  } */
}

.titleModal {
  font-family: "Sk-Modernist-Bold";
  font-size: 22px;
}

.clearModal {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-primary1);
  padding-top: 14px;
}

.text-h1 {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  /* margin-top: -10px;
  margin-bottom: 0px; */
}

.text-h1-2 {
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  text-align: end;
  color: var(--ion-color-gris1);
  margin-top: 22px;
}

ion-item {
  --background: var(--ion-color-blanco);
  --color: var(--ion-color-negro);
  --color-focused: var(--ion-color-negro);
  --border-width: 1px !important;
  --border-radius: 15px;
  --border-color: var(--ion-color-negro);
  --padding-start: 15px;
  --highlight-color-invalid: none;
  --highlight-color-valid: none;
  --highlight-color-focused: none !important;
  /* margin-top: 30px;
  margin-bottom: 70px; */
}

ion-select {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  --padding-end: 0px;
}

ion-select::part(icon) {
  display: none !important;
}

.rangePersonal {
  --bar-background: var(--ion-color-gris1);
  --bar-background-active: var(--ion-color-primary1);
  --bar-height: 5px;
  --knob-size: 28px;
  --knob-border-radius: 50%;
  --bar-border-radius: 20px;
  --knob-background: var(--ion-color-primary1);
  --knob-box-shadow: 0px 0px 0px 3px #fff;
  padding-top: 0;
  padding-bottom: 0;
}

.text-subtitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
  color: var(--ion-color-negro);
  margin-bottom: -10px;
}

.apply-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
  width: 100%;
  height: 45px;
  --border-radius: 10px;
  --box-shadow: none;
  margin-top: 40px;
  margin-bottom: 20px;
}

.item-toggle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  --detail-icon-color: var(--ion-color-primary1);
  --border-width: 0 !important;
  --padding-start: 10px;
  --padding-end: 0px !important;
  margin-right: -10px;
}

.toggleChk {
  display: flex;
  --background: var(--ion-color-gris1);
  --background-checked: var(--ion-color-primary1);
  --handle-background: var(--ion-color-blanco);
  --handle-background-checked: var(--ion-color-blanco);
  --handle-spacing: 2px;
  --handle-height: 25px;
  --handle-width: 25px;
  width: 50px;
  height: 30px;
  padding: 0;
  padding-right: 0;
  border: 0.6px solid var(--ion-color-blanco);
  border-radius: 18px;
}

.divNoFound {
  height: 100%;
}

.imgNoFound {
  display: block;
  width: 35%;
  margin-top: 35%;
  margin-left: auto;
  margin-right: auto;
}

.pNoFoundRegular {
  text-align: center;
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  margin: 30px 20px 0 20px;
}

.pNoFound {
  text-align: center;
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
  margin: 30px 20px 0 20px;
}

.skeleton-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skeleton-img {
  width: 100%;
  border-radius: 8px;
}

.skeleton-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0;
  margin-top: 40px;
}

.skeleton-btnT {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.skeleton-btnL {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/tabDiscover/tabDiscover.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/tabDiscover/tabDiscover.page.scss"],"names":[],"mappings":"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","sourcesContent":["/* styles.scss */\n@import 'swiper/swiper-bundle.css';\n\n.profile-card {\n//   margin-left: 10px;\n//   margin-right: 10px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  ion-card-content {\n    padding: 16px;\n  }\n}\n\n.profile-avatar {\n  width: 200px;\n  height: 200px;\n  margin-top: 2px;\n  border-radius: 10%;\n  object-fit: cover;\n  border: 3px solid #eee;\n}\n\n.profile-name {\n  font-size: 25px;\n  font-weight: bold;\n  color: #333;\n}\n\n.profile-description {\n  display: -webkit-box;\n  -webkit-line-clamp: 3; /* show 3 lines max */\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 15px;\n  margin-top: 5px;\n  font-size: 14px;\n  color: orange;\n}\n\n\n\n.profile-info-block {\n  display: flex;\n  margin-bottom: 6px;\n  font-size: 13px;\n  line-height: 1.3;\n}\n\n.profile-info-block .info-label {\n  width: 100px;\n  font-weight: 600;\n  color: #333;\n  flex-shrink: 0;\n  text-align: left;\n}\n\n.profile-info-block .info-value {\n  flex-grow: 1;\n  text-align: left;\n  color: #555;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.profile-section {\n  margin-top: 16px;\n  text-align: left;\n\n  h3 {\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 6px;\n    color: #555;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    li {\n      font-size: 14px;\n      color: #333;\n      padding-left: 12px;\n      position: relative;\n    }\n  }\n}\n\n.profile-actions {\n  display: flex;\n  justify-content: space-around;\n  padding: 16px;\n  border-top: 1px solid #eee;\n  ion-icon {\n    font-size: 32px;\n    color: #ff6b6b;\n    cursor: pointer;\n\n    &:nth-child(2) {\n      color: #ffc107;\n    }\n\n    &:nth-child(3) {\n      color: #4cd137;\n    }\n  }\n}\n\n.profile-photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nswiper-container,\nswiper-slide,\nion-card {\n  background-color: #f4f0e5;\n  height: 100%;\n  margin-top: 2px;\n}\n\nion-content{\n    --overflow:hidden;\n}\n.hdPage {\n    background: var(--ion-color-blanco);\n    padding-bottom: 0px;\n}\n\nion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n}\n\n.titlePage {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n    text-align: center;\n    margin-top: -5px;\n    margin-bottom: 0;\n}\n\n.titleLoc {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-gris1);\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 0;\n}\n\n.menuBtn {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 10px;\n    width: 50px;\n    height: 50px;\n}\n\n.menuIcon {\n    font-size: 28px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.contenedorCard {\n    position: relative;\n    height: 82%;\n}\n\nion-card {\n    position: absolute;\n    width: 90%;\n    margin-left: 5%;\n    //margin-right: 5%;\n    //text-align: center;\n    /* border-style: solid;\n    border-width: 0;\n    border-radius: 15px; */\n    --background: none;\n    box-shadow: none !important;\n}\n\n.card-img {\n    object-fit: cover;\n    width: 100%;\n    background-color: white;\n    //height: 550px;\n    border-style: solid;\n    border-width: 0;\n    border-radius: 15px;\n}\n\n.card-boton {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.card-gradient {\n    position: absolute;\n    background: linear-gradient(0deg, rgba(255, 79, 1, 1) 0%, rgba(255, 255, 255, 0) 25%);\n    width: 100%;\n    height: 100%;\n    border-style: solid;\n    border-width: 0;\n    border-radius: 15px;\n    top: 0;\n}\n\n.menuBtn {\n    font-size: 18px;\n    background: var(--ion-color-blanco);\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-negro);\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n}\n\n.menuIcon {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.card-title {\n    position: absolute;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 30px;\n    color: var(--ion-color-blanco);\n    bottom: 50px;\n    left: 15px;\n}\n\n.card-subtitle {\n    position: absolute;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 18px;\n    color: var(--ion-color-blanco);\n    bottom: 25px;\n    left: 15px;\n}\n\n.card-start {\n    position: absolute;\n    width: 13px;\n    bottom: 25px;\n}\n\n.card-ratings {\n    position: absolute;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-blanco);\n    bottom: 25px;\n    right: 15px;\n    //right: 5%;\n}\n\n.card-like-dis {\n    position: absolute;\n    width: 26%;\n    top: 38%;\n    left: 38%;\n}\n\n.row-btn {\n    align-items: center;\n    text-align: center;\n    padding-left: 5%;\n    padding-right: 5%;\n    margin-top: 3%;\n    // padding-top: 1%;\n}\n\n.btn-small {\n    width: 60px;\n}\n\n.btn-big {\n    width: 100px;\n}\n\n//******** MODAL FILTER ***********//\n.header-filter {\n    margin-top: 10px;\n}\n\n.div-modal-g {\n    height: 75%;\n}\n\n.div-modal {\n    height: 100%;\n    overflow-y: scroll;\n}\n\n.listModal {\n    margin-top: 0;\n    padding-top: 0;\n    /* .ios {\n        margin-top: 8px;\n    } */\n}\n\n.titleModal {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 22px;\n}\n\n.clearModal {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-primary1);\n    padding-top: 14px;\n    //padding-right: 10px;\n}\n\n.text-h1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    /* margin-top: -10px;\n    margin-bottom: 0px; */\n}\n\n.text-h1-2 {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    text-align: end;\n    color: var(--ion-color-gris1);\n    margin-top: 22px;\n}\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --border-radius: 15px;\n    --border-color: var(--ion-color-negro);\n    //--padding-bottom: 0px; \n    --padding-start: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    /* margin-top: 30px;\n    margin-bottom: 70px; */\n}\n\nion-select {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    --padding-end: 0px;\n}\n\nion-select::part(icon) {\n    display: none !important;\n}\n\n.rangePersonal {\n    --bar-background: var(--ion-color-gris1);\n    --bar-background-active: var(--ion-color-primary1);\n    --bar-height: 5px;\n    --knob-size: 28px;\n    --knob-border-radius: 50%;\n    --bar-border-radius: 20px;\n    --knob-background: var(--ion-color-primary1);\n    --knob-box-shadow: 0px 0px 0px 3px #fff;\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\n.text-subtitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-negro);\n    margin-bottom: -10px;\n}\n\n.apply-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 45px;\n    --border-radius: 10px;\n    --box-shadow: none;\n    margin-top: 40px;\n    margin-bottom: 20px;\n}\n\n.item-toggle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    --detail-icon-color: var(--ion-color-primary1);\n    --border-width: 0 !important;\n    --padding-start: 10px;\n    --padding-end: 0px !important;\n    margin-right: -10px;\n}\n\n.toggleChk {\n    display: flex;\n    --background: var(--ion-color-gris1);\n    --background-checked: var(--ion-color-primary1);\n    --handle-background: var(--ion-color-blanco);\n    --handle-background-checked: var(--ion-color-blanco);\n    --handle-spacing: 2px;\n    --handle-height: 25px;\n    --handle-width: 25px;\n    width: 50px;\n    height: 30px;\n    padding: 0;\n    padding-right: 0;\n    border: 0.6px solid var(--ion-color-blanco);\n    border-radius: 18px;\n}\n\n.divNoFound {\n    height: 100%;\n}\n\n.imgNoFound {\n    display: block;\n    width: 35%;\n    margin-top: 35%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.pNoFoundRegular {\n    text-align: center;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    margin: 30px 20px 0 20px;\n}\n\n.pNoFound {\n    text-align: center;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    margin: 30px 20px 0 20px;\n}\n\n.skeleton-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.skeleton-img {\n    width: 100%;\n    //height: 500px;\n    border-radius: 8px;\n}\n\n.skeleton-buttons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 8px 0;\n    margin-top: 40px;\n    \n}\n\n.skeleton-btnT {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n}\n\n.skeleton-btnL {\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n}","/* styles.scss */\n@import 'swiper/swiper-bundle.css';\n.profile-card {\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.profile-card ion-card-content {\n  padding: 16px;\n}\n\n.profile-avatar {\n  width: 200px;\n  height: 200px;\n  margin-top: 2px;\n  border-radius: 10%;\n  object-fit: cover;\n  border: 3px solid #eee;\n}\n\n.profile-name {\n  font-size: 25px;\n  font-weight: bold;\n  color: #333;\n}\n\n.profile-description {\n  display: -webkit-box;\n  -webkit-line-clamp: 3; /* show 3 lines max */\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 15px;\n  margin-top: 5px;\n  font-size: 14px;\n  color: orange;\n}\n\n.profile-info-block {\n  display: flex;\n  margin-bottom: 6px;\n  font-size: 13px;\n  line-height: 1.3;\n}\n\n.profile-info-block .info-label {\n  width: 100px;\n  font-weight: 600;\n  color: #333;\n  flex-shrink: 0;\n  text-align: left;\n}\n\n.profile-info-block .info-value {\n  flex-grow: 1;\n  text-align: left;\n  color: #555;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.profile-section {\n  margin-top: 16px;\n  text-align: left;\n}\n.profile-section h3 {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 6px;\n  color: #555;\n}\n.profile-section ul {\n  list-style: none;\n  padding: 0;\n}\n.profile-section ul li {\n  font-size: 14px;\n  color: #333;\n  padding-left: 12px;\n  position: relative;\n}\n\n.profile-actions {\n  display: flex;\n  justify-content: space-around;\n  padding: 16px;\n  border-top: 1px solid #eee;\n}\n.profile-actions ion-icon {\n  font-size: 32px;\n  color: #ff6b6b;\n  cursor: pointer;\n}\n.profile-actions ion-icon:nth-child(2) {\n  color: #ffc107;\n}\n.profile-actions ion-icon:nth-child(3) {\n  color: #4cd137;\n}\n\n.profile-photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nswiper-container,\nswiper-slide,\nion-card {\n  background-color: #f4f0e5;\n  height: 100%;\n  margin-top: 2px;\n}\n\nion-content {\n  --overflow:hidden;\n}\n\n.hdPage {\n  background: var(--ion-color-blanco);\n  padding-bottom: 0px;\n}\n\nion-back-button {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n}\n\n.titlePage {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin-top: -5px;\n  margin-bottom: 0;\n}\n\n.titleLoc {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-gris1);\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n\n.menuBtn {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 10px;\n  width: 50px;\n  height: 50px;\n}\n\n.menuIcon {\n  font-size: 28px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.contenedorCard {\n  position: relative;\n  height: 82%;\n}\n\nion-card {\n  position: absolute;\n  width: 90%;\n  margin-left: 5%;\n  /* border-style: solid;\n  border-width: 0;\n  border-radius: 15px; */\n  --background: none;\n  box-shadow: none !important;\n}\n\n.card-img {\n  object-fit: cover;\n  width: 100%;\n  background-color: white;\n  border-style: solid;\n  border-width: 0;\n  border-radius: 15px;\n}\n\n.card-boton {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.card-gradient {\n  position: absolute;\n  background: linear-gradient(0deg, rgb(255, 79, 1) 0%, rgba(255, 255, 255, 0) 25%);\n  width: 100%;\n  height: 100%;\n  border-style: solid;\n  border-width: 0;\n  border-radius: 15px;\n  top: 0;\n}\n\n.menuBtn {\n  font-size: 18px;\n  background: var(--ion-color-blanco);\n  height: 48px;\n  width: 50px;\n  color: var(--ion-color-negro);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n}\n\n.menuIcon {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card-title {\n  position: absolute;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 30px;\n  color: var(--ion-color-blanco);\n  bottom: 50px;\n  left: 15px;\n}\n\n.card-subtitle {\n  position: absolute;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 18px;\n  color: var(--ion-color-blanco);\n  bottom: 25px;\n  left: 15px;\n}\n\n.card-start {\n  position: absolute;\n  width: 13px;\n  bottom: 25px;\n}\n\n.card-ratings {\n  position: absolute;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-blanco);\n  bottom: 25px;\n  right: 15px;\n}\n\n.card-like-dis {\n  position: absolute;\n  width: 26%;\n  top: 38%;\n  left: 38%;\n}\n\n.row-btn {\n  align-items: center;\n  text-align: center;\n  padding-left: 5%;\n  padding-right: 5%;\n  margin-top: 3%;\n}\n\n.btn-small {\n  width: 60px;\n}\n\n.btn-big {\n  width: 100px;\n}\n\n.header-filter {\n  margin-top: 10px;\n}\n\n.div-modal-g {\n  height: 75%;\n}\n\n.div-modal {\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.listModal {\n  margin-top: 0;\n  padding-top: 0;\n  /* .ios {\n      margin-top: 8px;\n  } */\n}\n\n.titleModal {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 22px;\n}\n\n.clearModal {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-primary1);\n  padding-top: 14px;\n}\n\n.text-h1 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  /* margin-top: -10px;\n  margin-bottom: 0px; */\n}\n\n.text-h1-2 {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  text-align: end;\n  color: var(--ion-color-gris1);\n  margin-top: 22px;\n}\n\nion-item {\n  --background: var(--ion-color-blanco);\n  --color: var(--ion-color-negro);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --border-radius: 15px;\n  --border-color: var(--ion-color-negro);\n  --padding-start: 15px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n  /* margin-top: 30px;\n  margin-bottom: 70px; */\n}\n\nion-select {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n  --padding-end: 0px;\n}\n\nion-select::part(icon) {\n  display: none !important;\n}\n\n.rangePersonal {\n  --bar-background: var(--ion-color-gris1);\n  --bar-background-active: var(--ion-color-primary1);\n  --bar-height: 5px;\n  --knob-size: 28px;\n  --knob-border-radius: 50%;\n  --bar-border-radius: 20px;\n  --knob-background: var(--ion-color-primary1);\n  --knob-box-shadow: 0px 0px 0px 3px #fff;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.text-subtitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  color: var(--ion-color-negro);\n  margin-bottom: -10px;\n}\n\n.apply-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 45px;\n  --border-radius: 10px;\n  --box-shadow: none;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n\n.item-toggle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  --detail-icon-color: var(--ion-color-primary1);\n  --border-width: 0 !important;\n  --padding-start: 10px;\n  --padding-end: 0px !important;\n  margin-right: -10px;\n}\n\n.toggleChk {\n  display: flex;\n  --background: var(--ion-color-gris1);\n  --background-checked: var(--ion-color-primary1);\n  --handle-background: var(--ion-color-blanco);\n  --handle-background-checked: var(--ion-color-blanco);\n  --handle-spacing: 2px;\n  --handle-height: 25px;\n  --handle-width: 25px;\n  width: 50px;\n  height: 30px;\n  padding: 0;\n  padding-right: 0;\n  border: 0.6px solid var(--ion-color-blanco);\n  border-radius: 18px;\n}\n\n.divNoFound {\n  height: 100%;\n}\n\n.imgNoFound {\n  display: block;\n  width: 35%;\n  margin-top: 35%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pNoFoundRegular {\n  text-align: center;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n  margin: 30px 20px 0 20px;\n}\n\n.pNoFound {\n  text-align: center;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  margin: 30px 20px 0 20px;\n}\n\n.skeleton-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.skeleton-img {\n  width: 100%;\n  border-radius: 8px;\n}\n\n.skeleton-buttons {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 8px 0;\n  margin-top: 40px;\n}\n\n.skeleton-btnT {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.skeleton-btnL {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66860:
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].rules[0].oneOf[1].use[0]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].rules[0].oneOf[1].use[1]!./node_modules/swiper/swiper-bundle.css ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Swiper 11.2.10
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 28, 2025
 */

/* FONT_START */
@font-face {
  font-family: 'swiper-icons';
  src: url('data:application/font-woff;charset=utf-8;base64, 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');
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}
:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}
.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-horizontal {
  touch-action: pan-y;
}
.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}
.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  backface-visibility: hidden;
}
/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}
.swiper-3d {
  perspective: 1200px;
}
.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: '';
  flex-shrink: 0;
  order: 9999;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}
/* Slide styles start */
/* 3D Shadows */
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Slide styles end */
.swiper-virtual .swiper-slide {
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
}
.swiper-virtual.swiper-css-mode .swiper-wrapper::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
}
.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
  height: 1px;
  width: var(--swiper-virtual-size);
}
.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
  width: 1px;
  height: var(--swiper-virtual-size);
}
:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev.swiper-button-hidden,
.swiper-button-next.swiper-button-hidden {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}
.swiper-navigation-disabled .swiper-button-prev,
.swiper-navigation-disabled .swiper-button-next {
  display: none !important;
}
.swiper-button-prev svg,
.swiper-button-next svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform-origin: center;
}
.swiper-rtl .swiper-button-prev svg,
.swiper-rtl .swiper-button-next svg {
  transform: rotate(180deg);
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: var(--swiper-navigation-sides-offset, 10px);
  right: auto;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.swiper-button-lock {
  display: none;
}
/* Navigation font start */
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: 'prev';
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: 'next';
}
/* Navigation font end */
:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-border-radius: 50%;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
  display: none !important;
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: var(--swiper-pagination-bottom, 8px);
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet:only-child {
  display: none !important;
}
.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: var(--swiper-pagination-right, 8px);
  left: var(--swiper-pagination-left, auto);
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
  display: block;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform,
        200ms top;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform,
        200ms left;
}
.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform,
    200ms right;
}
/* Fraction */
.swiper-pagination-fraction {
  color: var(--swiper-pagination-fraction-color, inherit);
}
/* Progress */
.swiper-pagination-progressbar {
  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}
.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}
.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: var(--swiper-pagination-progressbar-size, 4px);
  left: 0;
  top: 0;
}
.swiper-vertical > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
  width: var(--swiper-pagination-progressbar-size, 4px);
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-lock {
  display: none;
}
:root {
  /*
  --swiper-scrollbar-border-radius: 10px;
  --swiper-scrollbar-top: auto;
  --swiper-scrollbar-bottom: 4px;
  --swiper-scrollbar-left: auto;
  --swiper-scrollbar-right: 4px;
  --swiper-scrollbar-sides-offset: 1%;
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);
  --swiper-scrollbar-size: 4px;
  */
}
.swiper-scrollbar {
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  position: relative;
  touch-action: none;
  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));
}
.swiper-scrollbar-disabled > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-disabled {
  display: none !important;
}
.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
  position: absolute;
  left: var(--swiper-scrollbar-sides-offset, 1%);
  bottom: var(--swiper-scrollbar-bottom, 4px);
  top: var(--swiper-scrollbar-top, auto);
  z-index: 50;
  height: var(--swiper-scrollbar-size, 4px);
  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}
.swiper-vertical > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-vertical {
  position: absolute;
  left: var(--swiper-scrollbar-left, auto);
  right: var(--swiper-scrollbar-right, 4px);
  top: var(--swiper-scrollbar-sides-offset, 1%);
  z-index: 50;
  width: var(--swiper-scrollbar-size, 4px);
  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));
}
.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));
  border-radius: var(--swiper-scrollbar-border-radius, 10px);
  left: 0;
  top: 0;
}
.swiper-scrollbar-cursor-drag {
  cursor: move;
}
.swiper-scrollbar-lock {
  display: none;
}
/* Zoom container styles start */
.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.swiper-zoom-container > img,
.swiper-zoom-container > svg,
.swiper-zoom-container > canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
/* Zoom container styles end */
.swiper-slide-zoomed {
  cursor: move;
  touch-action: none;
}
/* a11y */
.swiper .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
.swiper-free-mode > .swiper-wrapper {
  transition-timing-function: ease-out;
  margin: 0 auto;
}
.swiper-grid > .swiper-wrapper {
  flex-wrap: wrap;
}
.swiper-grid-column > .swiper-wrapper {
  flex-wrap: wrap;
  flex-direction: column;
}
.swiper-fade.swiper-free-mode .swiper-slide {
  transition-timing-function: ease-out;
}
.swiper-fade .swiper-slide {
  pointer-events: none;
  transition-property: opacity;
}
.swiper-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-fade .swiper-slide-active {
  pointer-events: auto;
}
.swiper-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper.swiper-cube {
  overflow: visible;
}
.swiper-cube .swiper-slide {
  pointer-events: none;
  backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}
.swiper-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-cube.swiper-rtl .swiper-slide {
  transform-origin: 100% 0;
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-cube .swiper-slide-active,
.swiper-cube .swiper-slide-next,
.swiper-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible;
}
.swiper-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 0;
}
.swiper-cube .swiper-cube-shadow:before {
  content: '';
  background: #000;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  filter: blur(50px);
}
.swiper-cube .swiper-slide-next + .swiper-slide {
  pointer-events: auto;
  visibility: visible;
}
/* Cube slide shadows start */
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,
.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right {
  z-index: 0;
  backface-visibility: hidden;
}
/* Cube slide shadows end */
.swiper.swiper-flip {
  overflow: visible;
}
.swiper-flip .swiper-slide {
  pointer-events: none;
  backface-visibility: hidden;
  z-index: 1;
}
.swiper-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-flip .swiper-slide-active,
.swiper-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
/* Flip slide shadows start */
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,
.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {
  z-index: 0;
  backface-visibility: hidden;
}
/* Flip slide shadows end */
.swiper-creative .swiper-slide {
  backface-visibility: hidden;
  overflow: hidden;
  transition-property: transform, opacity, height;
}
.swiper.swiper-cards {
  overflow: visible;
}
.swiper-cards .swiper-slide {
  transform-origin: center bottom;
  backface-visibility: hidden;
  overflow: hidden;
}
`, "",{"version":3,"sources":["webpack://./node_modules/swiper/swiper-bundle.css"],"names":[],"mappings":"AAAA;;;;;;;;;;EAUE;;AAEF,eAAe;AACf;EACE,2BAA2B;EAC3B,6rEAA6rE;EAC7rE,gBAAgB;EAChB,kBAAkB;AACpB;AACA,aAAa;AACb;EACE,6BAA6B;EAC7B;;;GAGC;AACH;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;EACV,6BAA6B;EAC7B,UAAU;EACV,cAAc;AAChB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,qFAAqF;EACrF,uBAAuB;AACzB;AACA;;;EAGE,iCAAiC;AACnC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;EAC9B,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB;AACA,gBAAgB;AAChB;;EAEE,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,sCAAsC;AACxC;AACA;EACE,wBAAwB;EAEhB,2BAA2B;AACrC;AACA,eAAe;AACf;EACE,mBAAmB;AACrB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,mBAAmB;AACrB;AACA;;EAEE,4BAA4B;AAC9B;AACA,aAAa;AACb;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;EAChB,wBAAwB;EACxB,mCAAmC;AACrC;AACA;EACE,aAAa;AACf;AACA;EACE,8BAA8B;AAChC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,cAAc;EACd,WAAW;AACb;AACA;EACE,gCAAgC;EAChC,wBAAwB;AAC1B;AACA;EACE,yDAAyD;AAC3D;AACA;EACE,YAAY;EACZ,eAAe;EACf,0CAA0C;AAC5C;AACA;EAC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","sourcesContent":["/**\n * Swiper 11.2.10\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2025 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: June 28, 2025\n */\n\n/* FONT_START */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url('data:application/font-woff;charset=utf-8;base64, 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');\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n.swiper-virtual .swiper-slide {\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0);\n}\n.swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n  height: 1px;\n  width: var(--swiper-virtual-size);\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n  width: 1px;\n  height: var(--swiper-virtual-size);\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-top-offset: 50%;\n  --swiper-navigation-sides-offset: 10px;\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n.swiper-button-prev svg,\n.swiper-button-next svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transform-origin: center;\n}\n.swiper-rtl .swiper-button-prev svg,\n.swiper-rtl .swiper-button-next svg {\n  transform: rotate(180deg);\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-lock {\n  display: none;\n}\n/* Navigation font start */\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n/* Navigation font end */\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-border-radius: 50%;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform,\n        200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n        200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform,\n    200ms right;\n}\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-scrollbar-border-radius: 10px;\n  --swiper-scrollbar-top: auto;\n  --swiper-scrollbar-bottom: 4px;\n  --swiper-scrollbar-left: auto;\n  --swiper-scrollbar-right: 4px;\n  --swiper-scrollbar-sides-offset: 1%;\n  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);\n  --swiper-scrollbar-size: 4px;\n  */\n}\n.swiper-scrollbar {\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  position: relative;\n  touch-action: none;\n  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));\n}\n.swiper-scrollbar-disabled > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-disabled {\n  display: none !important;\n}\n.swiper-horizontal > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-horizontal {\n  position: absolute;\n  left: var(--swiper-scrollbar-sides-offset, 1%);\n  bottom: var(--swiper-scrollbar-bottom, 4px);\n  top: var(--swiper-scrollbar-top, auto);\n  z-index: 50;\n  height: var(--swiper-scrollbar-size, 4px);\n  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-vertical > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-vertical {\n  position: absolute;\n  left: var(--swiper-scrollbar-left, auto);\n  right: var(--swiper-scrollbar-right, 4px);\n  top: var(--swiper-scrollbar-sides-offset, 1%);\n  z-index: 50;\n  width: var(--swiper-scrollbar-size, 4px);\n  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n/* Zoom container styles start */\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/* Zoom container styles end */\n.swiper-slide-zoomed {\n  cursor: move;\n  touch-action: none;\n}\n/* a11y */\n.swiper .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-grid > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-grid-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper.swiper-cube {\n  overflow: visible;\n}\n.swiper-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-cube.swiper-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-next,\n.swiper-cube .swiper-slide-prev {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-cube .swiper-cube-shadow:before {\n  content: '';\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n/* Cube slide shadows start */\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Cube slide shadows end */\n.swiper.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n/* Flip slide shadows start */\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Flip slide shadows end */\n.swiper-creative .swiper-slide {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  transition-property: transform, opacity, height;\n}\n.swiper.swiper-cards {\n  overflow: visible;\n}\n.swiper-cards .swiper-slide {\n  transform-origin: center bottom;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 97524:
/*!********************************************************************!*\
  !*** ./src/app/pages/tabDiscover/tabDiscover.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"hdPage ion-no-border ion-padding\">\n  <ion-toolbar color=\"blanco\">\n    <ion-title class=\"titlePage\" mode=\"ios\">{{ 'DISCOVER.Title' | translate }}</ion-title>\n    <ion-title class=\"titleLoc\" mode=\"ios\">{{user?.location?.city}}, {{user?.location?.state}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen color=\"blanco\" *ngIf=\"!isLoading\">\n  <div class=\"divNoFound\" *ngIf=\"noDiscoverFound\">\n    <img class=\"imgNoFound\" src=\"../../../assets/icon/31-NoFoundCards.png\">\n    <p class=\"pNoFound\" *ngIf=\"discoverUsrs !== null\">{{ 'DISCOVER.txtNoFound' | translate }}</p>\n    <p class=\"pNoFound\" *ngIf=\"discoverUsrs === null\">{{ 'DISCOVER.txtToLimit' | translate }}</p>\n    <p class=\"pNoFoundRegular\" *ngIf=\"discoverUsrs === null\">{{ 'DISCOVER.txtToLimit2' | translate }}</p>\n  </div>\n\n  <swiper-container\n    #swiperEl\n    slides-per-view=\"1\"\n    pagination=\"false\"\n    style=\"height: 68vh;\"\n    *ngIf=\"!noDiscoverFound && discoverUsrs && discoverUsrs.length > 0\"\n    [initialSlide]=\"currentCardIndex\"\n  >\n    <swiper-slide *ngFor=\"let usr of discoverUsrs; let i = index\" [attr.data-index]=\"i\">\n      <ion-card class=\"profile-card\" [class.current-card]=\"i === currentCardIndex\">\n        <div (click)=\"openGallery(usr)\">\n          <img class=\"profile-avatar\" [src]=\"usr.image?.multimediaUrl || 'assets/icon/30-Default_no-image.jpeg'\"/>\n        </div>\n        <ion-card-content>\n          <h2 class=\"profile-name\">{{ usr.firstName }} {{ usr.lastName }}, {{ usr.age }}</h2>\n          <p class=\"profile-description\">{{ usr.aboutMe }}</p>\n\n          <div class=\"profile-info-block\" *ngIf=\"usr.hobbies?.length\">\n            <div class=\"info-label\">Hobbies:</div>\n            <div class=\"info-value\">{{ getNames(usr.hobbies) }}</div>\n          </div>\n\n          <div class=\"profile-info-block\" *ngIf=\"usr.sports?.length\">\n            <div class=\"info-label\">Sports:</div>\n            <div class=\"info-value\">{{ getNames(usr.sports) }}</div>\n          </div>\n\n          <div class=\"profile-info-block\" *ngIf=\"usr.languajes?.length\">\n            <div class=\"info-label\">Languages:</div>\n            <div class=\"info-value\">{{ getNames(usr.languajes) }}</div>\n          </div>\n\n          <div class=\"profile-info-block\" *ngIf=\"usr.sign?.length\">\n            <div class=\"info-label\">Sign:</div>\n            <div class=\"info-value\">{{ getNames(usr.sign) }}</div>\n          </div>\n\n          <div class=\"profile-info-block\" *ngIf=\"usr.education?.length\">\n            <div class=\"info-label\">Education:</div>\n            <div class=\"info-value\">{{ getNames(usr.education) }}</div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </swiper-slide>\n  </swiper-container>\n\n  <ion-grid fixed *ngIf=\"!noDiscoverFound && discoverUsrs && discoverUsrs.length > 0\">\n    <ion-row class=\"row-btn ion-no-margin ion-no-padding\">\n      <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img \n          class=\"btn-small\" \n          [class.btn-disabled]=\"isProcessing\"\n          src=\"../../../assets/icon/19-Dislike_button_grey.png\" \n          (click)=\"doDislike()\"\n        >\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img \n          class=\"btn-small\" \n          [class.btn-disabled]=\"!canReset || isProcessing\"\n          src=\"../../../assets/icon/24-Refresh_button.png\" \n          (click)=\"returnDicover()\"\n        >\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img \n          class=\"btn-small\" \n          [class.btn-disabled]=\"isProcessing\"\n          src=\"../../../assets/icon/21-like_button_orage.png\" \n          (click)=\"doLike()\"\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Processing Indicator -->\n  <div class=\"processing-indicator\" *ngIf=\"isProcessing\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n    <p>{{ processingMessage }}</p>\n  </div>\n\n  <!-- Debug Info (remove in production) -->\n  <div class=\"debug-info\" *ngIf=\"false\">\n    <p>Current Index: {{ currentCardIndex }}</p>\n    <p>Total Cards: {{ discoverUsrs?.length || 0 }}</p>\n    <p>Can Reset: {{ canReset }}</p>\n    <p>Processing: {{ isProcessing }}</p>\n  </div>\n\n  <ion-modal #modal trigger=\"open-modal\" [initialBreakpoint]=\"0.8\" [breakpoints]=\"[0, 0.8]\" (willPresent)=\"onWillPresent()\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <div class=\"div-modal-g\">\n        <ion-header class=\"header-filter ion-no-border\">\n          <ion-toolbar color=\"blanco\" mode=\"ios\">\n            <ion-title class=\"titleModal\">{{ 'DISCOVER.TitleFilter' | translate }}</ion-title>\n            <ion-buttons class=\"clearModal\" slot=\"end\" (click)=\"clearFilter()\">\n              {{ 'DISCOVER.ClearBtnFilter' | translate }}\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n\n        <div class=\"div-modal\">\n          <form [formGroup]=\"filterForm\" (ngSubmit)=\"applyFilter()\">\n            <ion-list class=\"listModal ion-padding\">\n              <ion-row>\n                <ion-col size=\"10\">\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Age' | translate }}</h1>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <h1 class=\"text-h1-2\">{{ this.age_between.value.lower }} - {{ this.age_between.value.upper }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-range class=\"rangePersonal\" formControlName=\"age_between\" [dualKnobs]=\"true\" min=\"18\" max=\"100\"></ion-range>\n\n              <ion-row>\n                <ion-col size=\"10\">\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Distancia' | translate }}</h1>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <h1 class=\"text-h1-2\">1 - {{ this.distance.value }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-range class=\"rangePersonal\" formControlName=\"distance\" min=\"1\" max=\"1000\"></ion-range>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-subtitle\">{{ 'DISCOVER.SubTitle_Filter' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"10\">\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Height' | translate }}</h1>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <h1 class=\"text-h1-2\">{{ this.height.value.lower }} - {{ this.height.value.upper }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-range class=\"rangePersonal\" formControlName=\"height\" [dualKnobs]=\"true\" min=\"1\" max=\"8\"></ion-range>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Exercise' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"exercise\" [interfaceOptions]=\"customExerciseOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of exercises\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-button class=\"apply-Bt\" color=\"primary1\" type=\"submit\">\n                  {{ 'DISCOVER.btnApply' | translate }}\n                </ion-button>\n              </ion-row>\n            </ion-list>\n          </form>\n        </div>\n      </div>\n    </ng-template>\n  </ion-modal>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabDiscover_tabDiscover_module_ts.js.map