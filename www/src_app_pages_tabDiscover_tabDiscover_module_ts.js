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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _tabDiscover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabDiscover.page.html?ngResource */ 97524);
/* harmony import */ var _tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabDiscover.page.scss?ngResource */ 18344);
/* harmony import */ var _tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 90628);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/match.service */ 5876);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ui.service */ 44136);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _match_detail_match_menu_popover_detail_match_menu_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../match/detail-match-menu-popover/detail-match-menu-popover.page */ 76244);
/* harmony import */ var _gallery_gallery_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gallery/gallery.page */ 5548);
















let TabDiscoverPage = class TabDiscoverPage {
  constructor(formBuilder, alertController, popoverCtrl, translate, userService, uiService, matchService, gestureCtrl, zone, plt, cdRef, activatedRoute, router, modalController) {
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
    this.isLoading = true;
    this.limToLoadProfiles = 3; //se actualizo a 0 por que no actualizaba el final 
    this.heightImg = '';
    this.user = {};
    this.discoverUsrs = [];
    this.lanCatalogo = 'EN';
    this.longPressActive = false;
    this.statusUsrDicover = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.statusUsrMatch;
    this.iniDiscover = 0;
    this.deltaDiscover = 3;
    this.filter = {};
    this.latitud_gps = null;
    this.longitud_gps = null;
    this.posCardGlobal = 1;
    this.disLikeBtn = false;
    this.likeBtn = false;
    this.noDiscoverFound = false;
    this.idAntDiscover = 0;
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
    this.customIamOptions = {
      header: this.translate.instant('DISCOVER.Title_iam'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdIam'),
      translucent: true
    };
    this.customIamLookingOptions = {
      header: this.translate.instant('DISCOVER.Title_looking'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdIamLooking'),
      translucent: true
    };
    this.customExerciseOptions = {
      header: this.translate.instant('DISCOVER.Title_Exercise'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdExe'),
      translucent: true
    };
    this.customSingOptions = {
      header: this.translate.instant('DISCOVER.Title_Sing'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdSing'),
      translucent: true
    };
    this.customEducationOptions = {
      header: this.translate.instant('DISCOVER.Title_Education'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdEdu'),
      translucent: true
    };
    this.customDrinkOptions = {
      header: this.translate.instant('DISCOVER.Title_Drink'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdDrnk'),
      translucent: true
    };
    this.customSmokOptions = {
      header: this.translate.instant('DISCOVER.Title_Smok'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdSmk'),
      translucent: true
    };
    this.customKidOptions = {
      header: this.translate.instant('DISCOVER.Title_Kid'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdKid'),
      translucent: true
    };
    this.customReligionOptions = {
      header: this.translate.instant('DISCOVER.Title_Religion'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('DISCOVER.SubHdRlgn'),
      translucent: true
    };
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
  ngOnInit() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.iniSizeContenedorCard();
      _this.activatedRoute.queryParams.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          console.log('PARAMS: ', params);
          yield _this.reLoadDiscover();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  ionViewDidEnter() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.translate.currentLang == 'es') {
        _this2.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.es;
      } else {
        _this2.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.en;
      }
      // const tVal = await this.userService.validaToken();
      // if( !tVal ) {
      //   return;
      // }
      _this2.matchService.newMatch = false;
      _this2.matchService.matchPerson = [];
      _this2.matchService.principal();
      _this2.iniSizeContenedorCard();
      _this2.user = yield _this2.userService.getUserBasic('');
      // this.iams = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.IamA.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
      // this.iamlookings = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.IamLooking.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
      // this.exercises = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Ejercicio.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
      // this.sings = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Sing.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
      // this.educations = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Educacion.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
      // this.drinks =  <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Bebe.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
      // this.smoks =  <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Fuma.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
      // this.kids = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Hijos.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
      // this.religions = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.Religion.toString(), this.lanCatalogo,this.user.birthDay,this.user.gender,this.user.email);
    })();
  }
  // async ngAfterViewInit() {
  //   //await this.reLoadDiscover();
  // }
  ngAfterViewInit() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const swiper = _this3.swiperElRef?.nativeElement;
      if (swiper && swiper.initialize) {
        swiper.initialize();
      }
    })();
  }
  openGallery(usr) {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resImg = yield _this4.matchService.getIMGS(usr.personId.toString());
        const safeImgList = Array.isArray(resImg) ? resImg : [];
        const images = safeImgList.map(img => img.multimediaUrl || '');
        console.log("IMAGES: ", images);
        const modal = yield _this4.modalController.create({
          component: _gallery_gallery_page__WEBPACK_IMPORTED_MODULE_8__.GalleryPage,
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
    let heightImg_tmp = imgSizeWidth * 531 / 354 + 35;
    //this.heightImg = heightImg_tmp + 'px';
    this.heightImg = imgSizeHeight + 'px';
    this.cdRef.detectChanges();
  }
  iniFilter() {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.user = yield _this5.userService.getUser('');
      _this5.filter = {
        selfRole: _this5.user.iam_a,
        targetRole: _this5.user.iam_looking,
        ageIni: 18,
        ageEnd: 100,
        distance: null,
        minHeight: 1,
        maxHeight: 100,
        exercise: Number(_this5.user.exercise),
        zodiacSign: Number(_this5.user.sings),
        education: Number(_this5.user.education),
        drinking: Number(_this5.user.drinking),
        smoking: Number(_this5.user.smoking),
        kids: Number(_this5.user.kids),
        religion: Number(_this5.user.religion),
        /* location: {
          country: null,
          state: null,
          address: null,
          latitud: this.latitud_gps,
          longitud: this.longitud_gps
        } */
        location: null
      };
      _this5.setFilterForm();
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
        onStart: ev => {},
        onMove: ev => {
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
          this.setIconPeople(ev.deltaX, i);
        },
        onEnd: ev => {
          card.nativeElement.style.transition = '.5s ease-out';
          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
            this.setStatusDiscover(this.discoverUsrs[i].personId, this.statusUsrDicover.like);
          } else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
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
  createTempArray(number) {
    var arr = [];
    for (let i = 0; i < number; i++) {
      arr[i] = "";
    }
    return arr;
  }
  setPositionStart(pos) {
    let posF = 0;
    if (this.translate.currentLang == 'es') {
      posF = 115 + 15 * pos;
    } else {
      posF = 80 + 15 * pos;
    }
    return posF + 'px';
  }
  openMenuPopover(ev) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('POPOVER');
      /* const popover = await this.popoverCtrl.create({
        component: ExperienceMenuPopoverPage,
        event: ev,
        componentProps: { isMyExp: this.isMyExp }
      });
           await popover.present(); */
    })();
  }
  loadDiscover() {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.uiService.showLoader();
      try {
        _this6.isLoading = true;
        const discoverUsr_res = yield _this6.matchService.getDiscoverProfiles(_this6.iniDiscover.toString(), _this6.deltaDiscover.toString(), _this6.filter);
        //this.iniDiscover += this.deltaDiscover;
        _this6.cdRef.detectChanges();
        if (discoverUsr_res === null) {
          _this6.discoverUsrs = null;
          yield _this6.uiService.hideLoader();
          _this6.noDiscoverFound = true;
          return;
        }
        // this.setAvatarImg(discoverUsr_res);
        console.log('LOAD DISCOVER_USR: ', discoverUsr_res);
        //this.discoverUsrs.push(...discoverUsr_res);
        _this6.discoverUsrs = [...discoverUsr_res, ..._this6.discoverUsrs];
        _this6.cdRef.detectChanges();
        // Espera a que las tarjetas se rendericen y actualiza los gestos
        setTimeout(() => {
          const cardArray = _this6.cards.toArray();
          _this6.useSwipe(cardArray);
        }, 100);
        _this6.posCardGlobal = _this6.discoverUsrs.length - 1;
        if (_this6.discoverUsrs.length <= 0) {
          _this6.noDiscoverFound = true;
        } else {
          _this6.noDiscoverFound = false;
        }
      } catch (error) {
        console.log('ERROR AL OBTENER PROFILE');
      } finally {
        _this6.isLoading = false;
      }
      // await this.uiService.hideLoader();
    })();
  }
  setAvatarImg(usrDicover) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // for (const usr of usrDicover) {
  //   usr.image = '../../../assets/icon/30-Default_no-image.jpeg';
  //   const res_imgs =  <ImagesUser[]> await this.matchService.getIMGS(usr.personId.toString());
  //   for (const img of res_imgs) {
  //     if(img.avatar) {
  //       usr.image = img.multimediaUrl;
  //     }
  //   }
  // }
  getNameFull(user) {
    return user.firstName + (user.lastName && user.lastName !== '' ? ' ' + user.lastName : '');
  }
  setStatusDiscover(idDiscover, accionId) {
    var _this7 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resLike = 'false';
      let resSuperLike = 'false';
      if (accionId == 3) {
        //Like
        resLike = 'true';
        resSuperLike = 'false';
      } else if (accionId == 6) {
        //Dislike
        resLike = 'false';
        resSuperLike = 'false';
      }
      let res = yield _this7.matchService.doMatchProfiles(idDiscover.toString(), accionId.toString(), resLike, resSuperLike, null);
      //let res = await this.matchService.doMatchProfiles(this.idAntDiscover.toString(), accionId.toString(), resLike, resSuperLike);
      console.log('APLICAR MATCH: ', idDiscover.toString());
      /* if(!res) {
        return;
      } */
      // Store the current user before removing it for potential rollback
      if (_this7.discoverUsrs.length > 0) {
        _this7.antDiscoverUsrs = {
          ..._this7.discoverUsrs[_this7.posCardGlobal]
        };
      }
      _this7.discoverUsrs.pop();
      _this7.posCardGlobal--;
      if (_this7.discoverUsrs.length <= 1) {
        yield _this7.loadDiscover();
      }
      _this7.idAntDiscover = idDiscover;
    })();
  }
  reLoadDiscover() {
    var _this8 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.uiService.showLoader();
      _this8.iniDiscover = 0;
      _this8.discoverUsrs = [];
      _this8.noDiscoverFound = true;
      _this8.cdRef.detectChanges();
      try {
        _this8.isLoading = true;
        _this8.discoverUsrs = yield _this8.matchService.getDiscoverProfiles(_this8.iniDiscover.toString(), _this8.deltaDiscover.toString(), _this8.filter);
        _this8.cdRef.detectChanges();
        yield _this8.setAvatarImg(_this8.discoverUsrs);
        if (_this8.discoverUsrs === null) {
          yield _this8.uiService.hideLoader();
          _this8.noDiscoverFound = true;
          return;
        }
        console.log('RE-LOAD DISCOVER_USR: ', _this8.discoverUsrs);
        _this8.iniDiscover = _this8.discoverUsrs.length;
        _this8.posCardGlobal = _this8.discoverUsrs.length - 1;
        if (_this8.discoverUsrs.length <= 0) {
          _this8.noDiscoverFound = true;
        } else {
          _this8.noDiscoverFound = false;
        }
        // Espera a que las tarjetas se rendericen y actualiza los gestos
        setTimeout(() => {
          const cardArray = _this8.cards.toArray();
          _this8.useSwipe(cardArray);
        }, 100);
      } catch (error) {
        console.log('ERROR AL RECARGAR PROFILES');
      } finally {
        _this8.isLoading = false;
      }
      yield _this8.uiService.hideLoader();
    })();
  }
  returnDicover() {
    var _this9 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this9.idAntDiscover === 0) {
        _this9.uiService.alertOK(_this9.translate.instant('DISCOVER.notRollback'));
        return;
      }
      _this9.uiService.showLoader();
      if (yield _this9.matchService.rollbackLike(_this9.idAntDiscover.toString())) {
        _this9.uiService.hideLoader();
        // this.uiService.alertOK(this.translate.instant('DISCOVER.rollbackTrue'));
        _this9.idAntDiscover = 0;
        // Instead of reloading all profiles, just add the previous user back to the stack
        if (_this9.antDiscoverUsrs) {
          _this9.discoverUsrs.push(_this9.antDiscoverUsrs);
          _this9.posCardGlobal++;
          // Re-enable gestures for the new card
          setTimeout(() => {
            const cardArray = _this9.cards.toArray();
            _this9.useSwipe(cardArray);
          }, 100);
          _this9.antDiscoverUsrs = null; // Clear the stored user
        }
      } else {
        _this9.uiService.hideLoader();
        _this9.uiService.alertOK(_this9.translate.instant('DISCOVER.rollbackFalse'));
      }
    })();
  }
  doDislike() {
    var _this10 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('DIS-LIKE', _this10.posCardGlobal);
      _this10.disLikeBtn = true;
      _this10.uiService.showLoader();
      yield _this10.setStatusDiscover(_this10.discoverUsrs[_this10.posCardGlobal].personId, _this10.statusUsrDicover.dislike);
      _this10.disLikeBtn = false;
      _this10.uiService.hideLoader();
    })();
  }
  doLike() {
    var _this11 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.uiService.showLoader();
      console.log('LIKE', _this11.posCardGlobal);
      _this11.likeBtn = true;
      yield _this11.setStatusDiscover(_this11.discoverUsrs[_this11.posCardGlobal].personId, _this11.statusUsrDicover.like);
      _this11.likeBtn = false;
      _this11.uiService.hideLoader();
    })();
  }
  getNames(items) {
    if (!items || items.length === 0) return '';
    return items.slice(0, 3).map(i => i.name).join(', ');
  }
  doSuperLike() {
    var _this12 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alertController.create({
        cssClass: 'alert-superlike-class',
        header: '*',
        subHeader: _this12.translate.instant('DISCOVER.superLikeTitle'),
        message: _this12.translate.instant('DISCOVER.superLikeMsg'),
        //mode: 'md',
        //buttons: [this.translate.instant('ALERT.btnMsg')]
        buttons: [{
          text: _this12.translate.instant('DISCOVER.superLikeBtnOK'),
          role: 'OK',
          cssClass: 'alert-button-confirm'
        }, {
          text: _this12.translate.instant('DISCOVER.superLikeBtnCancel'),
          role: 'CANCEL',
          cssClass: 'alert-button-cancel'
        }]
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
      console.log('RESP ALERT: ', role);
    })();
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
    var _this13 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this13.filter = {
        selfRole: _this13.iam_a.value == '' ? null : _this13.iam_a.value,
        targetRole: _this13.iam_looking.value == '' ? null : _this13.iam_looking.value,
        ageIni: _this13.age_between.value.lower,
        ageEnd: _this13.age_between.value.upper,
        distance: _this13.distance.value == '' ? null : Number(_this13.distance.value),
        minHeight: _this13.height.value.lower,
        maxHeight: _this13.height.value.upper,
        exercise: _this13.exercise.value == '' ? null : Number(_this13.exercise.value),
        zodiacSign: _this13.sing.value == '' ? null : Number(_this13.sing.value),
        education: _this13.education.value == '' ? null : Number(_this13.education.value),
        drinking: _this13.drink.value == '' ? null : Number(_this13.drink.value),
        smoking: _this13.smok.value == '' ? null : Number(_this13.smok.value),
        kids: _this13.kid.value == '' ? null : Number(_this13.kid.value),
        religion: _this13.religion.value == '' ? null : Number(_this13.religion.value),
        /* location: {
          country: null,
          state: null,
          address: null,
          latitud: this.latitud_gps,
          longitud: this.longitud_gps
        } */
        location: null
      };
      console.log('FILTER: ', _this13.filter);
      yield _this13.modal.dismiss();
      yield _this13.reLoadDiscover();
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
  onClickAgeToggle() {
    if (!this.ageToggle.value) {
      this.age_between.enable();
      this.age_between.setValue({
        lower: 18,
        upper: 100
      });
    } else {
      this.age_between.disable();
      this.age_between.setValue({
        lower: 0,
        upper: 0
      });
    }
  }
  onClickDisToggle() {
    if (!this.distanceToggle.value) {
      this.distance.enable();
      this.distance.setValue('1');
    } else {
      this.distance.disable();
      this.distance.setValue('0');
    }
  }
  openMenuPopoverBlock(ev, personId) {
    var _this14 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ev.stopPropagation();
      const popover = yield _this14.popoverCtrl.create({
        component: _match_detail_match_menu_popover_detail_match_menu_popover_page__WEBPACK_IMPORTED_MODULE_7__.DetailMatchMenuPopoverPage,
        event: ev,
        componentProps: {
          typeBlock: 2,
          matchId: null,
          personId
        }
      });
      yield popover.present();
    })();
  }
  viewProfile(user) {
    console.log('SELECTED VIEW PROFILE: ', user);
    //Validacion para sacar al otro usuario del match (matchId esta mal estructurado es personId)
    let navegationExtras = {
      state: {
        typePerson: 1,
        otherPerson: user.personId,
        //(match.personLiked.toString() == this.user.personId ? match.personLikes : match.personLiked),
        //matchId: ustInt.personId, 
        image: JSON.stringify(user.image)
      }
    };
    this.router.navigate(['detail-match'], navegationExtras);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_6__.UiService
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_5__.MatchService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.GestureController
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
    }];
  }
  static {
    this.propDecorators = {
      cards: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChildren,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCard, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef
        }]
      }],
      modal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal]
      }],
      swiperElRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: ['swiperEl', {
          static: false
        }]
      }]
    };
  }
};
TabDiscoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-tabDiscover',
  template: _tabDiscover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TabDiscoverPage);


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
  margin: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.profile-card ion-card-content {
  padding: 16px;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  margin-top: 16px;
  border-radius: 10%;
  object-fit: cover;
  border: 3px solid #eee;
}

.profile-name {
  font-size: 20px;
  font-weight: bold;
  margin-top: 12px;
  color: #333;
}

.profile-description {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* show 3 lines max */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  font-size: 14px;
}

.profile-info-block {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 13px;
  line-height: 1.3;
  margin-bottom: 6px;
}

.profile-info-block strong {
  font-weight: 600;
  margin-right: 4px;
  white-space: nowrap;
}

.profile-info-block span {
  flex: 1;
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
  margin-top: 15px;
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
}`, "",{"version":3,"sources":["webpack://./src/app/pages/tabDiscover/tabDiscover.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/tabDiscover/tabDiscover.page.scss"],"names":[],"mappings":"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","sourcesContent":["/* styles.scss */\n@import 'swiper/swiper-bundle.css';\n\n.profile-card {\n  margin: 10px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  ion-card-content {\n    padding: 16px;\n  }\n}\n\n.profile-avatar {\n  width: 150px;\n  height: 150px;\n  margin-top: 16px;\n  border-radius: 10%;\n  object-fit: cover;\n  border: 3px solid #eee;\n}\n\n.profile-name {\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 12px;\n  color: #333;\n}\n\n.profile-description {\n  display: -webkit-box;\n  -webkit-line-clamp: 3; /* show 3 lines max */\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n\n.profile-info-block {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 13px;\n  line-height: 1.3;\n  margin-bottom: 6px;\n}\n\n.profile-info-block strong {\n  font-weight: 600;\n  margin-right: 4px;\n  white-space: nowrap;\n}\n\n.profile-info-block span {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.profile-section {\n  margin-top: 16px;\n  text-align: left;\n\n  h3 {\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 6px;\n    color: #555;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    li {\n      font-size: 14px;\n      color: #333;\n      padding-left: 12px;\n      position: relative;\n    }\n  }\n}\n\n.profile-actions {\n  display: flex;\n  justify-content: space-around;\n  padding: 16px;\n  border-top: 1px solid #eee;\n  ion-icon {\n    font-size: 32px;\n    color: #ff6b6b;\n    cursor: pointer;\n\n    &:nth-child(2) {\n      color: #ffc107;\n    }\n\n    &:nth-child(3) {\n      color: #4cd137;\n    }\n  }\n}\n\n.profile-photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nswiper-container,\nswiper-slide,\nion-card {\n  background-color: #f4f0e5;\n  height: 100%;\n  margin-top: 15px;\n}\n\nion-content{\n    --overflow:hidden;\n}\n.hdPage {\n    background: var(--ion-color-blanco);\n    padding-bottom: 0px;\n}\n\nion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n}\n\n.titlePage {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n    text-align: center;\n    margin-top: -5px;\n    margin-bottom: 0;\n}\n\n.titleLoc {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-gris1);\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 0;\n}\n\n.menuBtn {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 10px;\n    width: 50px;\n    height: 50px;\n}\n\n.menuIcon {\n    font-size: 28px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.contenedorCard {\n    position: relative;\n    height: 82%;\n}\n\nion-card {\n    position: absolute;\n    width: 90%;\n    margin-left: 5%;\n    //margin-right: 5%;\n    //text-align: center;\n    /* border-style: solid;\n    border-width: 0;\n    border-radius: 15px; */\n    --background: none;\n    box-shadow: none !important;\n}\n\n.card-img {\n    object-fit: cover;\n    width: 100%;\n    background-color: white;\n    //height: 550px;\n    border-style: solid;\n    border-width: 0;\n    border-radius: 15px;\n}\n\n.card-boton {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.card-gradient {\n    position: absolute;\n    background: linear-gradient(0deg, rgba(255, 79, 1, 1) 0%, rgba(255, 255, 255, 0) 25%);\n    width: 100%;\n    height: 100%;\n    border-style: solid;\n    border-width: 0;\n    border-radius: 15px;\n    top: 0;\n}\n\n.menuBtn {\n    font-size: 18px;\n    background: var(--ion-color-blanco);\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-negro);\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n}\n\n.menuIcon {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.card-title {\n    position: absolute;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 30px;\n    color: var(--ion-color-blanco);\n    bottom: 50px;\n    left: 15px;\n}\n\n.card-subtitle {\n    position: absolute;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 18px;\n    color: var(--ion-color-blanco);\n    bottom: 25px;\n    left: 15px;\n}\n\n.card-start {\n    position: absolute;\n    width: 13px;\n    bottom: 25px;\n}\n\n.card-ratings {\n    position: absolute;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-blanco);\n    bottom: 25px;\n    right: 15px;\n    //right: 5%;\n}\n\n.card-like-dis {\n    position: absolute;\n    width: 26%;\n    top: 38%;\n    left: 38%;\n}\n\n.row-btn {\n    align-items: center;\n    text-align: center;\n    padding-left: 5%;\n    padding-right: 5%;\n}\n\n.btn-small {\n    width: 60px;\n}\n\n.btn-big {\n    width: 100px;\n}\n\n//******** MODAL FILTER ***********//\n.header-filter {\n    margin-top: 10px;\n}\n\n.div-modal-g {\n    height: 75%;\n}\n\n.div-modal {\n    height: 100%;\n    overflow-y: scroll;\n}\n\n.listModal {\n    margin-top: 0;\n    padding-top: 0;\n    /* .ios {\n        margin-top: 8px;\n    } */\n}\n\n.titleModal {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 22px;\n}\n\n.clearModal {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-primary1);\n    padding-top: 14px;\n    //padding-right: 10px;\n}\n\n.text-h1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    /* margin-top: -10px;\n    margin-bottom: 0px; */\n}\n\n.text-h1-2 {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    text-align: end;\n    color: var(--ion-color-gris1);\n    margin-top: 22px;\n}\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --border-radius: 15px;\n    --border-color: var(--ion-color-negro);\n    //--padding-bottom: 0px; \n    --padding-start: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    /* margin-top: 30px;\n    margin-bottom: 70px; */\n}\n\nion-select {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    --padding-end: 0px;\n}\n\nion-select::part(icon) {\n    display: none !important;\n}\n\n.rangePersonal {\n    --bar-background: var(--ion-color-gris1);\n    --bar-background-active: var(--ion-color-primary1);\n    --bar-height: 5px;\n    --knob-size: 28px;\n    --knob-border-radius: 50%;\n    --bar-border-radius: 20px;\n    --knob-background: var(--ion-color-primary1);\n    --knob-box-shadow: 0px 0px 0px 3px #fff;\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\n.text-subtitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-negro);\n    margin-bottom: -10px;\n}\n\n.apply-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 45px;\n    --border-radius: 10px;\n    --box-shadow: none;\n    margin-top: 40px;\n    margin-bottom: 20px;\n}\n\n.item-toggle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    --detail-icon-color: var(--ion-color-primary1);\n    --border-width: 0 !important;\n    --padding-start: 10px;\n    --padding-end: 0px !important;\n    margin-right: -10px;\n}\n\n.toggleChk {\n    display: flex;\n    --background: var(--ion-color-gris1);\n    --background-checked: var(--ion-color-primary1);\n    --handle-background: var(--ion-color-blanco);\n    --handle-background-checked: var(--ion-color-blanco);\n    --handle-spacing: 2px;\n    --handle-height: 25px;\n    --handle-width: 25px;\n    width: 50px;\n    height: 30px;\n    padding: 0;\n    padding-right: 0;\n    border: 0.6px solid var(--ion-color-blanco);\n    border-radius: 18px;\n}\n\n.divNoFound {\n    height: 100%;\n}\n\n.imgNoFound {\n    display: block;\n    width: 35%;\n    margin-top: 35%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.pNoFoundRegular {\n    text-align: center;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    margin: 30px 20px 0 20px;\n}\n\n.pNoFound {\n    text-align: center;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    margin: 30px 20px 0 20px;\n}\n\n.skeleton-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.skeleton-img {\n    width: 100%;\n    //height: 500px;\n    border-radius: 8px;\n}\n\n.skeleton-buttons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 8px 0;\n    margin-top: 40px;\n}\n\n.skeleton-btnT {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n}\n\n.skeleton-btnL {\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n}","/* styles.scss */\n@import 'swiper/swiper-bundle.css';\n.profile-card {\n  margin: 10px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.profile-card ion-card-content {\n  padding: 16px;\n}\n\n.profile-avatar {\n  width: 150px;\n  height: 150px;\n  margin-top: 16px;\n  border-radius: 10%;\n  object-fit: cover;\n  border: 3px solid #eee;\n}\n\n.profile-name {\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 12px;\n  color: #333;\n}\n\n.profile-description {\n  display: -webkit-box;\n  -webkit-line-clamp: 3; /* show 3 lines max */\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n\n.profile-info-block {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 13px;\n  line-height: 1.3;\n  margin-bottom: 6px;\n}\n\n.profile-info-block strong {\n  font-weight: 600;\n  margin-right: 4px;\n  white-space: nowrap;\n}\n\n.profile-info-block span {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.profile-section {\n  margin-top: 16px;\n  text-align: left;\n}\n.profile-section h3 {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 6px;\n  color: #555;\n}\n.profile-section ul {\n  list-style: none;\n  padding: 0;\n}\n.profile-section ul li {\n  font-size: 14px;\n  color: #333;\n  padding-left: 12px;\n  position: relative;\n}\n\n.profile-actions {\n  display: flex;\n  justify-content: space-around;\n  padding: 16px;\n  border-top: 1px solid #eee;\n}\n.profile-actions ion-icon {\n  font-size: 32px;\n  color: #ff6b6b;\n  cursor: pointer;\n}\n.profile-actions ion-icon:nth-child(2) {\n  color: #ffc107;\n}\n.profile-actions ion-icon:nth-child(3) {\n  color: #4cd137;\n}\n\n.profile-photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nswiper-container,\nswiper-slide,\nion-card {\n  background-color: #f4f0e5;\n  height: 100%;\n  margin-top: 15px;\n}\n\nion-content {\n  --overflow:hidden;\n}\n\n.hdPage {\n  background: var(--ion-color-blanco);\n  padding-bottom: 0px;\n}\n\nion-back-button {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n}\n\n.titlePage {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin-top: -5px;\n  margin-bottom: 0;\n}\n\n.titleLoc {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-gris1);\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n\n.menuBtn {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 10px;\n  width: 50px;\n  height: 50px;\n}\n\n.menuIcon {\n  font-size: 28px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.contenedorCard {\n  position: relative;\n  height: 82%;\n}\n\nion-card {\n  position: absolute;\n  width: 90%;\n  margin-left: 5%;\n  /* border-style: solid;\n  border-width: 0;\n  border-radius: 15px; */\n  --background: none;\n  box-shadow: none !important;\n}\n\n.card-img {\n  object-fit: cover;\n  width: 100%;\n  background-color: white;\n  border-style: solid;\n  border-width: 0;\n  border-radius: 15px;\n}\n\n.card-boton {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.card-gradient {\n  position: absolute;\n  background: linear-gradient(0deg, rgb(255, 79, 1) 0%, rgba(255, 255, 255, 0) 25%);\n  width: 100%;\n  height: 100%;\n  border-style: solid;\n  border-width: 0;\n  border-radius: 15px;\n  top: 0;\n}\n\n.menuBtn {\n  font-size: 18px;\n  background: var(--ion-color-blanco);\n  height: 48px;\n  width: 50px;\n  color: var(--ion-color-negro);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n}\n\n.menuIcon {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card-title {\n  position: absolute;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 30px;\n  color: var(--ion-color-blanco);\n  bottom: 50px;\n  left: 15px;\n}\n\n.card-subtitle {\n  position: absolute;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 18px;\n  color: var(--ion-color-blanco);\n  bottom: 25px;\n  left: 15px;\n}\n\n.card-start {\n  position: absolute;\n  width: 13px;\n  bottom: 25px;\n}\n\n.card-ratings {\n  position: absolute;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-blanco);\n  bottom: 25px;\n  right: 15px;\n}\n\n.card-like-dis {\n  position: absolute;\n  width: 26%;\n  top: 38%;\n  left: 38%;\n}\n\n.row-btn {\n  align-items: center;\n  text-align: center;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.btn-small {\n  width: 60px;\n}\n\n.btn-big {\n  width: 100px;\n}\n\n.header-filter {\n  margin-top: 10px;\n}\n\n.div-modal-g {\n  height: 75%;\n}\n\n.div-modal {\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.listModal {\n  margin-top: 0;\n  padding-top: 0;\n  /* .ios {\n      margin-top: 8px;\n  } */\n}\n\n.titleModal {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 22px;\n}\n\n.clearModal {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-primary1);\n  padding-top: 14px;\n}\n\n.text-h1 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  /* margin-top: -10px;\n  margin-bottom: 0px; */\n}\n\n.text-h1-2 {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  text-align: end;\n  color: var(--ion-color-gris1);\n  margin-top: 22px;\n}\n\nion-item {\n  --background: var(--ion-color-blanco);\n  --color: var(--ion-color-negro);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --border-radius: 15px;\n  --border-color: var(--ion-color-negro);\n  --padding-start: 15px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n  /* margin-top: 30px;\n  margin-bottom: 70px; */\n}\n\nion-select {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n  --padding-end: 0px;\n}\n\nion-select::part(icon) {\n  display: none !important;\n}\n\n.rangePersonal {\n  --bar-background: var(--ion-color-gris1);\n  --bar-background-active: var(--ion-color-primary1);\n  --bar-height: 5px;\n  --knob-size: 28px;\n  --knob-border-radius: 50%;\n  --bar-border-radius: 20px;\n  --knob-background: var(--ion-color-primary1);\n  --knob-box-shadow: 0px 0px 0px 3px #fff;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.text-subtitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  color: var(--ion-color-negro);\n  margin-bottom: -10px;\n}\n\n.apply-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 45px;\n  --border-radius: 10px;\n  --box-shadow: none;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n\n.item-toggle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  --detail-icon-color: var(--ion-color-primary1);\n  --border-width: 0 !important;\n  --padding-start: 10px;\n  --padding-end: 0px !important;\n  margin-right: -10px;\n}\n\n.toggleChk {\n  display: flex;\n  --background: var(--ion-color-gris1);\n  --background-checked: var(--ion-color-primary1);\n  --handle-background: var(--ion-color-blanco);\n  --handle-background-checked: var(--ion-color-blanco);\n  --handle-spacing: 2px;\n  --handle-height: 25px;\n  --handle-width: 25px;\n  width: 50px;\n  height: 30px;\n  padding: 0;\n  padding-right: 0;\n  border: 0.6px solid var(--ion-color-blanco);\n  border-radius: 18px;\n}\n\n.divNoFound {\n  height: 100%;\n}\n\n.imgNoFound {\n  display: block;\n  width: 35%;\n  margin-top: 35%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pNoFoundRegular {\n  text-align: center;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n  margin: 30px 20px 0 20px;\n}\n\n.pNoFound {\n  text-align: center;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  margin: 30px 20px 0 20px;\n}\n\n.skeleton-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.skeleton-img {\n  width: 100%;\n  border-radius: 8px;\n}\n\n.skeleton-buttons {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 8px 0;\n  margin-top: 40px;\n}\n\n.skeleton-btnT {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.skeleton-btnL {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 97524:
/*!********************************************************************!*\
  !*** ./src/app/pages/tabDiscover/tabDiscover.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"hdPage ion-no-border ion-padding\">\n  <ion-toolbar color=\"blanco\">\n    <ion-title class=\"titlePage\" mode=\"ios\">{{ 'DISCOVER.Title' | translate }}</ion-title>\n    <ion-title class=\"titleLoc\" mode=\"ios\">{{user?.location?.city}}, {{user?.location?.state}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen color=\"blanco\" *ngIf=\"!isLoading\">\n  <div class=\"divNoFound\" *ngIf=\"noDiscoverFound\">\n    <img class=\"imgNoFound\" src=\"../../../assets/icon/31-NoFoundCards.png\">\n    <p class=\"pNoFound\" *ngIf=\"discoverUsrs !== null\">{{ 'DISCOVER.txtNoFound' | translate }}</p>\n    <p class=\"pNoFound\" *ngIf=\"discoverUsrs === null\">{{ 'DISCOVER.txtToLimit' | translate }}</p>\n    <p class=\"pNoFoundRegular\" *ngIf=\"discoverUsrs === null\">{{ 'DISCOVER.txtToLimit2' | translate }}</p>\n  </div>\n\n  <swiper-container\n  #swiperEl\n  slides-per-view=\"1\"\n  pagination=\"false\"\n  style=\"height: 70vh;\"\n  *ngIf=\"!noDiscoverFound\"\n>\n  <swiper-slide *ngFor=\"let usr of discoverUsrs\">\n      <ion-card class=\"profile-card\">\n        <div (click)=\"openGallery(usr)\">\n          <img class=\"profile-avatar\" [src]=\"usr.image?.multimediaUrl || 'assets/icon/30-Default_no-image.jpeg'\"/>\n        </div>\n        <ion-card-content>\n        <h2 class=\"profile-name\">{{ usr.firstName }} {{ usr.lastName }}, {{ usr.age }}</h2>\n        <p class=\"profile-description\">  {{ usr.aboutMe }} </p>\n\n        <div class=\"profile-info-block\" *ngIf=\"usr.hobbies?.length > 0\">\n          <strong>Hobbies:</strong>\n          <span>{{ getNames(usr.hobbies) }}</span>\n        </div>\n\n        <div class=\"profile-info-block\" *ngIf=\"usr.sports?.length > 0\">\n          <strong>Sports:</strong>\n          <span>{{ getNames(usr.sports) }}</span>\n        </div>\n\n        <div class=\"profile-info-block\" *ngIf=\"usr.languajes?.length > 0\">\n          <strong>Languages:</strong>\n          <span>{{ getNames(usr.languajes) }}</span>\n        </div>\n\n        <div class=\"profile-info-block\" *ngIf=\"usr.sign?.length > 0\">\n          <strong>Sign:</strong>\n          <span>{{ getNames(usr.sign) }}</span>\n        </div>\n\n        <div class=\"profile-info-block\" *ngIf=\"usr.education?.length > 0\">\n          <strong>Education:</strong>\n          <span>{{ getNames(usr.education) }}</span>\n        </div>\n\n        </ion-card-content>\n        <!-- <div class=\"profile-actions\">\n          <ion-icon name=\"close-circle-outline\" (click)=\"doDislike()\"></ion-icon>\n          <ion-icon name=\"refresh-outline\" (click)=\"returnDicover()\"></ion-icon>\n          <ion-icon name=\"heart-circle\" (click)=\"doLike()\"></ion-icon>\n        </div> -->\n      </ion-card>\n    </swiper-slide>\n  </swiper-container>\n\n\n  <ion-grid fixed *ngIf=\"!noDiscoverFound\">\n    <ion-row class=\"row-btn ion-no-margin ion-no-padding\">\n      \n      <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-small\" src=\"../../../assets/icon/19-Dislike_button_grey.png\" (click)=\"doDislike()\">\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-small\" src=\"../../../assets/icon/24-Refresh_button.png\" (click)=\"returnDicover()\"> <!-- (click)=\"reLoadDiscover()\"> -->\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-small\" src=\"../../../assets/icon/21-like_button_orage.png\" (click)=\"doLike()\">\n      </ion-col>\n      <!-- <ion-col size=\"2\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-small\" src=\"../../../assets/icon/22-Favorite_button_grey.png\" (click)=\"doSuperLike()\">\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n\n  <ion-modal #modal trigger=\"open-modal\" [initialBreakpoint]=\"0.8\" [breakpoints]=\"[0, 0.8]\" (willPresent)=\"onWillPresent()\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <div class=\"div-modal-g\">\n        <ion-header class=\"header-filter ion-no-border\">\n          <ion-toolbar color=\"blanco\" mode=\"ios\">\n            <ion-title class=\"titleModal \">{{ 'DISCOVER.TitleFilter' | translate }}</ion-title>\n            <ion-buttons class=\"clearModal\" slot=\"end\"  (click)=\"clearFilter()\"> <!-- (click)=\"openMenuPopover( $event )\"> -->\n              {{ 'DISCOVER.ClearBtnFilter' | translate }}\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n\n        <div class=\"div-modal\">\n          <form [formGroup]=\"filterForm\" (ngSubmit)=\"applyFilter()\">\n            <ion-list class=\"listModal ion-padding\">\n              <!-- <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_iam' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"iam_a\" [interfaceOptions]=\"customIamOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of iams\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item> -->\n        \n              <!-- <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_looking' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"iam_looking\" [interfaceOptions]=\"customIamLookingOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of iamlookings\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item> -->\n\n              <ion-row>\n                <ion-col size=\"10\">\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Age' | translate }}</h1>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <h1 class=\"text-h1-2\">{{ this.age_between.value.lower }} - {{ this.age_between.value.upper }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-range class=\"rangePersonal\" formControlName=\"age_between\" [dualKnobs]=\"true\" min=\"18\" max=\"100\"></ion-range>\n              <!-- <ion-item class=\"item-toggle\" lines=\"none\">\n                <ion-label class=\"label\">{{ 'DISCOVER.LabelageToggle' | translate }}</ion-label>\n                <ion-toggle class=\"toggleChk\" formControlName=\"ageToggle\" (click)=\"onClickAgeToggle()\"></ion-toggle>\n              </ion-item> -->\n\n              <ion-row>\n                <ion-col size=\"10\">\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Distancia' | translate }}</h1>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <h1 class=\"text-h1-2\">1 - {{ this.distance.value }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-range class=\"rangePersonal\" formControlName=\"distance\" min=\"1\" max=\"1000\"></ion-range>\n              \n              <!-- <ion-item class=\"item-toggle\" lines=\"none\">\n                <ion-label class=\"label\">{{ 'DISCOVER.LabeldistToggle' | translate }}</ion-label>\n                <ion-toggle class=\"toggleChk\" formControlName=\"distanceToggle\" (click)=\"onClickDisToggle()\"></ion-toggle>\n              </ion-item> -->\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-subtitle\">{{ 'DISCOVER.SubTitle_Filter' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"10\">\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Height' | translate }}</h1>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <h1 class=\"text-h1-2\">{{ this.height.value.lower }} - {{ this.height.value.upper }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-range class=\"rangePersonal\" formControlName=\"height\" [dualKnobs]=\"true\" min=\"1\" max=\"8\"></ion-range>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Exercise' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"exercise\" [interfaceOptions]=\"customExerciseOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of exercises\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Sing' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"sing\" [interfaceOptions]=\"customSingOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of sings\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Education' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"education\" [interfaceOptions]=\"customEducationOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of educations\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Drink' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"drink\" [interfaceOptions]=\"customDrinkOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of drinks\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Smok' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"smok\" [interfaceOptions]=\"customSmokOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of smoks\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Kid' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"kid\" [interfaceOptions]=\"customKidOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of kids\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Religion' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"religion\" [interfaceOptions]=\"customReligionOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of religions\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n\n              <ion-row>\n                <ion-button class=\"apply-Bt\" color=\"primary1\" type=\"submit\">\n                  {{ 'DISCOVER.btnApply' | translate }}\n                </ion-button>\n              </ion-row>\n\n            </ion-list>\n          </form>\n        </div>\n      </div>\n    </ng-template>\n  </ion-modal>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabDiscover_tabDiscover_module_ts.js.map