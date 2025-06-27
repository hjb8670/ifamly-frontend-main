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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _tabDiscover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabDiscover.page.html?ngResource */ 97524);
/* harmony import */ var _tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabDiscover.page.scss?ngResource */ 18344);
/* harmony import */ var _tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabDiscover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 90628);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/match.service */ 5876);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ui.service */ 44136);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _match_detail_match_menu_popover_detail_match_menu_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../match/detail-match-menu-popover/detail-match-menu-popover.page */ 76244);














let TabDiscoverPage = class TabDiscoverPage {
  constructor(formBuilder, alertController, popoverCtrl, translate, userService, uiService, matchService, gestureCtrl, zone, plt, cdRef, activatedRoute, router) {
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
  ngAfterViewInit() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } //await this.reLoadDiscover();
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
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.user = yield _this3.userService.getUser('');
      _this3.filter = {
        selfRole: _this3.user.iam_a,
        targetRole: _this3.user.iam_looking,
        ageIni: 18,
        ageEnd: 100,
        distance: null,
        minHeight: 1,
        maxHeight: 100,
        exercise: Number(_this3.user.exercise),
        zodiacSign: Number(_this3.user.sings),
        education: Number(_this3.user.education),
        drinking: Number(_this3.user.drinking),
        smoking: Number(_this3.user.smoking),
        kids: Number(_this3.user.kids),
        religion: Number(_this3.user.religion),
        /* location: {
          country: null,
          state: null,
          address: null,
          latitud: this.latitud_gps,
          longitud: this.longitud_gps
        } */
        location: null
      };
      _this3.setFilterForm();
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
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.uiService.showLoader();
      try {
        _this4.isLoading = true;
        const discoverUsr_res = yield _this4.matchService.getDiscoverProfiles(_this4.iniDiscover.toString(), _this4.deltaDiscover.toString(), _this4.filter);
        //this.iniDiscover += this.deltaDiscover;
        _this4.cdRef.detectChanges();
        if (discoverUsr_res === null) {
          _this4.discoverUsrs = null;
          yield _this4.uiService.hideLoader();
          _this4.noDiscoverFound = true;
          return;
        }
        // this.setAvatarImg(discoverUsr_res);
        console.log('LOAD DISCOVER_USR: ', discoverUsr_res);
        //this.discoverUsrs.push(...discoverUsr_res);
        _this4.discoverUsrs = [...discoverUsr_res, ..._this4.discoverUsrs];
        _this4.cdRef.detectChanges();
        // Espera a que las tarjetas se rendericen y actualiza los gestos
        setTimeout(() => {
          const cardArray = _this4.cards.toArray();
          _this4.useSwipe(cardArray);
        }, 100);
        _this4.posCardGlobal = _this4.discoverUsrs.length - 1;
        if (_this4.discoverUsrs.length <= 0) {
          _this4.noDiscoverFound = true;
        } else {
          _this4.noDiscoverFound = false;
        }
      } catch (error) {
        console.log('ERROR AL OBTENER PROFILE');
      } finally {
        _this4.isLoading = false;
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
    var _this5 = this;
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
      let res = yield _this5.matchService.doMatchProfiles(idDiscover.toString(), accionId.toString(), resLike, resSuperLike, null);
      //let res = await this.matchService.doMatchProfiles(this.idAntDiscover.toString(), accionId.toString(), resLike, resSuperLike);
      console.log('APLICAR MATCH: ', idDiscover.toString());
      /* if(!res) {
        return;
      } */
      _this5.discoverUsrs.pop();
      _this5.posCardGlobal--;
      if (_this5.discoverUsrs.length <= 1) {
        yield _this5.loadDiscover();
      }
      _this5.idAntDiscover = idDiscover;
    })();
  }
  reLoadDiscover() {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.uiService.showLoader();
      _this6.iniDiscover = 0;
      _this6.discoverUsrs = [];
      _this6.noDiscoverFound = true;
      _this6.cdRef.detectChanges();
      try {
        _this6.isLoading = true;
        _this6.discoverUsrs = yield _this6.matchService.getDiscoverProfiles(_this6.iniDiscover.toString(), _this6.deltaDiscover.toString(), _this6.filter);
        _this6.cdRef.detectChanges();
        yield _this6.setAvatarImg(_this6.discoverUsrs);
        if (_this6.discoverUsrs === null) {
          yield _this6.uiService.hideLoader();
          _this6.noDiscoverFound = true;
          return;
        }
        console.log('RE-LOAD DISCOVER_USR: ', _this6.discoverUsrs);
        _this6.iniDiscover = _this6.discoverUsrs.length;
        _this6.posCardGlobal = _this6.discoverUsrs.length - 1;
        if (_this6.discoverUsrs.length <= 0) {
          _this6.noDiscoverFound = true;
        } else {
          _this6.noDiscoverFound = false;
        }
        // Espera a que las tarjetas se rendericen y actualiza los gestos
        setTimeout(() => {
          const cardArray = _this6.cards.toArray();
          _this6.useSwipe(cardArray);
        }, 100);
      } catch (error) {
        console.log('ERROR AL RECARGAR PROFILES');
      } finally {
        _this6.isLoading = false;
      }
      yield _this6.uiService.hideLoader();
    })();
  }
  returnDicover() {
    var _this7 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.idAntDiscover === 0) {
        _this7.uiService.alertOK(_this7.translate.instant('DISCOVER.notRollback'));
        return;
      }
      _this7.uiService.showLoader();
      if (yield _this7.matchService.rollbackLike(_this7.idAntDiscover.toString())) {
        _this7.uiService.hideLoader();
        // this.uiService.alertOK(this.translate.instant('DISCOVER.rollbackTrue'));
        _this7.idAntDiscover = 0;
        yield _this7.reLoadDiscover();
      } else {
        _this7.uiService.hideLoader();
        _this7.uiService.alertOK(_this7.translate.instant('DISCOVER.rollbackFalse'));
      }
    })();
  }
  doDislike() {
    var _this8 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('DIS-LIKE', _this8.posCardGlobal);
      _this8.disLikeBtn = true;
      _this8.uiService.showLoader();
      yield _this8.setStatusDiscover(_this8.discoverUsrs[_this8.posCardGlobal].personId, _this8.statusUsrDicover.dislike);
      _this8.disLikeBtn = false;
      _this8.uiService.hideLoader();
    })();
  }
  doLike() {
    var _this9 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.uiService.showLoader();
      console.log('LIKE', _this9.posCardGlobal);
      _this9.likeBtn = true;
      yield _this9.setStatusDiscover(_this9.discoverUsrs[_this9.posCardGlobal].personId, _this9.statusUsrDicover.like);
      _this9.likeBtn = false;
      _this9.uiService.hideLoader();
    })();
  }
  doSuperLike() {
    var _this10 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
        cssClass: 'alert-superlike-class',
        header: '*',
        subHeader: _this10.translate.instant('DISCOVER.superLikeTitle'),
        message: _this10.translate.instant('DISCOVER.superLikeMsg'),
        //mode: 'md',
        //buttons: [this.translate.instant('ALERT.btnMsg')]
        buttons: [{
          text: _this10.translate.instant('DISCOVER.superLikeBtnOK'),
          role: 'OK',
          cssClass: 'alert-button-confirm'
        }, {
          text: _this10.translate.instant('DISCOVER.superLikeBtnCancel'),
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
    var _this11 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.filter = {
        selfRole: _this11.iam_a.value == '' ? null : _this11.iam_a.value,
        targetRole: _this11.iam_looking.value == '' ? null : _this11.iam_looking.value,
        ageIni: _this11.age_between.value.lower,
        ageEnd: _this11.age_between.value.upper,
        distance: _this11.distance.value == '' ? null : Number(_this11.distance.value),
        minHeight: _this11.height.value.lower,
        maxHeight: _this11.height.value.upper,
        exercise: _this11.exercise.value == '' ? null : Number(_this11.exercise.value),
        zodiacSign: _this11.sing.value == '' ? null : Number(_this11.sing.value),
        education: _this11.education.value == '' ? null : Number(_this11.education.value),
        drinking: _this11.drink.value == '' ? null : Number(_this11.drink.value),
        smoking: _this11.smok.value == '' ? null : Number(_this11.smok.value),
        kids: _this11.kid.value == '' ? null : Number(_this11.kid.value),
        religion: _this11.religion.value == '' ? null : Number(_this11.religion.value),
        /* location: {
          country: null,
          state: null,
          address: null,
          latitud: this.latitud_gps,
          longitud: this.longitud_gps
        } */
        location: null
      };
      console.log('FILTER: ', _this11.filter);
      yield _this11.modal.dismiss();
      yield _this11.reLoadDiscover();
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
    var _this12 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ev.stopPropagation();
      const popover = yield _this12.popoverCtrl.create({
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
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_6__.UiService
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_5__.MatchService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.GestureController
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
    }];
  }
  static {
    this.propDecorators = {
      cards: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCard, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef
        }]
      }],
      modal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonModal]
      }]
    };
  }
};
TabDiscoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-content {
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
}`, "",{"version":3,"sources":["webpack://./src/app/pages/tabDiscover/tabDiscover.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/tabDiscover/tabDiscover.page.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;ACCJ;;ADCA;EACI,mCAAA;EACA,mBAAA;ACEJ;;ADCA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;ACEJ;;ADCA;EACI,gCAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;ACEJ;;ADCA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;ACEJ;;ADCA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;ACEJ;;ADCA;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;ACEJ;;ADCA;EACI,kBAAA;EACA,WAAA;ACEJ;;ADCA;EACI,kBAAA;EACA,UAAA;EACA,eAAA;EAGA;;wBAAA;EAGA,kBAAA;EACA,2BAAA;ACAJ;;ADGA;EACI,iBAAA;EACA,WAAA;EACA,uBAAA;EAEA,mBAAA;EACA,eAAA;EACA,mBAAA;ACDJ;;ADIA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;ACDJ;;ADIA;EACI,kBAAA;EACA,iFAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,MAAA;ACDJ;;ADIA;EACI,eAAA;EACA,mCAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;ACDJ;;ADIA;EACI,iBAAA;EACA,kBAAA;ACDJ;;ADIA;EACI,kBAAA;EACA,gCAAA;EACA,eAAA;EACA,8BAAA;EACA,YAAA;EACA,UAAA;ACDJ;;ADIA;EACI,kBAAA;EACA,mCAAA;EACA,eAAA;EACA,8BAAA;EACA,YAAA;EACA,UAAA;ACDJ;;ADIA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;ACDJ;;ADIA;EACI,kBAAA;EACA,mCAAA;EACA,eAAA;EACA,8BAAA;EACA,YAAA;EACA,WAAA;ACDJ;;ADKA;EACI,kBAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;ACFJ;;ADKA;EACI,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;ACFJ;;ADKA;EACI,WAAA;ACFJ;;ADKA;EACI,YAAA;ACFJ;;ADMA;EACI,gBAAA;ACHJ;;ADMA;EACI,WAAA;ACHJ;;ADMA;EACI,YAAA;EACA,kBAAA;ACHJ;;ADMA;EACI,aAAA;EACA,cAAA;EACA;;KAAA;ACDJ;;ADMA;EACI,gCAAA;EACA,eAAA;ACHJ;;ADMA;EACI,gCAAA;EACA,eAAA;EACA,gCAAA;EACA,iBAAA;ACHJ;;ADOA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA;uBAAA;ACHJ;;ADOA;EACI,mCAAA;EACA,eAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;ACJJ;;ADOA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,qBAAA;EACA,sCAAA;EAEA,qBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EACA;wBAAA;ACJJ;;ADQA;EACI,mCAAA;EACA,eAAA;EACA,kBAAA;ACLJ;;ADQA;EACI,wBAAA;ACLJ;;ADQA;EACI,wCAAA;EACA,kDAAA;EACA,iBAAA;EACA,iBAAA;EACA,yBAAA;EACA,yBAAA;EACA,4CAAA;EACA,uCAAA;EACA,cAAA;EACA,iBAAA;ACLJ;;ADQA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,oBAAA;ACLJ;;ADQA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;ACLJ;;ADQA;EACI,gCAAA;EACA,eAAA;EACA,8CAAA;EACA,4BAAA;EACA,qBAAA;EACA,6BAAA;EACA,mBAAA;ACLJ;;ADQA;EACI,aAAA;EACA,oCAAA;EACA,+CAAA;EACA,4CAAA;EACA,oDAAA;EACA,qBAAA;EACA,qBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EACA,2CAAA;EACA,mBAAA;ACLJ;;ADQA;EACI,YAAA;ACLJ;;ADQA;EACI,cAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;ACLJ;;ADQA;EACI,kBAAA;EACA,mCAAA;EACA,eAAA;EACA,wBAAA;ACLJ;;ADQA;EACI,kBAAA;EACA,gCAAA;EACA,eAAA;EACA,wBAAA;ACLJ;;ADQA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACLJ;;ADQA;EACI,WAAA;EAEA,kBAAA;ACNJ;;ADSA;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;ACNJ;;ADSA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;ACNJ;;ADSA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;ACNJ","sourcesContent":["ion-content{\n    --overflow:hidden;\n}\n.hdPage {\n    background: var(--ion-color-blanco);\n    padding-bottom: 0px;\n}\n\nion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n}\n\n.titlePage {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n    text-align: center;\n    margin-top: -5px;\n    margin-bottom: 0;\n}\n\n.titleLoc {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-gris1);\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 0;\n}\n\n.menuBtn {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 10px;\n    width: 50px;\n    height: 50px;\n}\n\n.menuIcon {\n    font-size: 28px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.contenedorCard {\n    position: relative;\n    height: 82%;\n}\n\nion-card {\n    position: absolute;\n    width: 90%;\n    margin-left: 5%;\n    //margin-right: 5%;\n    //text-align: center;\n    /* border-style: solid;\n    border-width: 0;\n    border-radius: 15px; */\n    --background: none;\n    box-shadow: none !important;\n}\n\n.card-img {\n    object-fit: cover;\n    width: 100%;\n    background-color: white;\n    //height: 550px;\n    border-style: solid;\n    border-width: 0;\n    border-radius: 15px;\n}\n\n.card-boton {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.card-gradient {\n    position: absolute;\n    background: linear-gradient(0deg, rgba(255, 79, 1, 1) 0%, rgba(255, 255, 255, 0) 25%);\n    width: 100%;\n    height: 100%;\n    border-style: solid;\n    border-width: 0;\n    border-radius: 15px;\n    top: 0;\n}\n\n.menuBtn {\n    font-size: 18px;\n    background: var(--ion-color-blanco);\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-negro);\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n}\n\n.menuIcon {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.card-title {\n    position: absolute;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 30px;\n    color: var(--ion-color-blanco);\n    bottom: 50px;\n    left: 15px;\n}\n\n.card-subtitle {\n    position: absolute;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 18px;\n    color: var(--ion-color-blanco);\n    bottom: 25px;\n    left: 15px;\n}\n\n.card-start {\n    position: absolute;\n    width: 13px;\n    bottom: 25px;\n}\n\n.card-ratings {\n    position: absolute;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-blanco);\n    bottom: 25px;\n    right: 15px;\n    //right: 5%;\n}\n\n.card-like-dis {\n    position: absolute;\n    width: 26%;\n    top: 38%;\n    left: 38%;\n}\n\n.row-btn {\n    align-items: center;\n    text-align: center;\n    padding-left: 5%;\n    padding-right: 5%;\n}\n\n.btn-small {\n    width: 60px;\n}\n\n.btn-big {\n    width: 100px;\n}\n\n//******** MODAL FILTER ***********//\n.header-filter {\n    margin-top: 10px;\n}\n\n.div-modal-g {\n    height: 75%;\n}\n\n.div-modal {\n    height: 100%;\n    overflow-y: scroll;\n}\n\n.listModal {\n    margin-top: 0;\n    padding-top: 0;\n    /* .ios {\n        margin-top: 8px;\n    } */\n}\n\n.titleModal {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 22px;\n}\n\n.clearModal {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-primary1);\n    padding-top: 14px;\n    //padding-right: 10px;\n}\n\n.text-h1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    /* margin-top: -10px;\n    margin-bottom: 0px; */\n}\n\n.text-h1-2 {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    text-align: end;\n    color: var(--ion-color-gris1);\n    margin-top: 22px;\n}\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --border-radius: 15px;\n    --border-color: var(--ion-color-negro);\n    //--padding-bottom: 0px; \n    --padding-start: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    /* margin-top: 30px;\n    margin-bottom: 70px; */\n}\n\nion-select {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    --padding-end: 0px;\n}\n\nion-select::part(icon) {\n    display: none !important;\n}\n\n.rangePersonal {\n    --bar-background: var(--ion-color-gris1);\n    --bar-background-active: var(--ion-color-primary1);\n    --bar-height: 5px;\n    --knob-size: 28px;\n    --knob-border-radius: 50%;\n    --bar-border-radius: 20px;\n    --knob-background: var(--ion-color-primary1);\n    --knob-box-shadow: 0px 0px 0px 3px #fff;\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\n.text-subtitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-negro);\n    margin-bottom: -10px;\n}\n\n.apply-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 45px;\n    --border-radius: 10px;\n    --box-shadow: none;\n    margin-top: 40px;\n    margin-bottom: 20px;\n}\n\n.item-toggle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    --detail-icon-color: var(--ion-color-primary1);\n    --border-width: 0 !important;\n    --padding-start: 10px;\n    --padding-end: 0px !important;\n    margin-right: -10px;\n}\n\n.toggleChk {\n    display: flex;\n    --background: var(--ion-color-gris1);\n    --background-checked: var(--ion-color-primary1);\n    --handle-background: var(--ion-color-blanco);\n    --handle-background-checked: var(--ion-color-blanco);\n    --handle-spacing: 2px;\n    --handle-height: 25px;\n    --handle-width: 25px;\n    width: 50px;\n    height: 30px;\n    padding: 0;\n    padding-right: 0;\n    border: 0.6px solid var(--ion-color-blanco);\n    border-radius: 18px;\n}\n\n.divNoFound {\n    height: 100%;\n}\n\n.imgNoFound {\n    display: block;\n    width: 35%;\n    margin-top: 35%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.pNoFoundRegular {\n    text-align: center;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    margin: 30px 20px 0 20px;\n}\n\n.pNoFound {\n    text-align: center;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    margin: 30px 20px 0 20px;\n}\n\n.skeleton-container {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.skeleton-img {\n    width: 100%;\n    //height: 500px;\n    border-radius: 8px;\n}\n\n.skeleton-buttons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 8px 0;\n    margin-top: 40px;\n}\n\n.skeleton-btnT {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n}\n\n.skeleton-btnL {\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n}","ion-content {\n  --overflow:hidden;\n}\n\n.hdPage {\n  background: var(--ion-color-blanco);\n  padding-bottom: 0px;\n}\n\nion-back-button {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n}\n\n.titlePage {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 24px;\n  text-align: center;\n  margin-top: -5px;\n  margin-bottom: 0;\n}\n\n.titleLoc {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-gris1);\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n\n.menuBtn {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 10px;\n  width: 50px;\n  height: 50px;\n}\n\n.menuIcon {\n  font-size: 28px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.contenedorCard {\n  position: relative;\n  height: 82%;\n}\n\nion-card {\n  position: absolute;\n  width: 90%;\n  margin-left: 5%;\n  /* border-style: solid;\n  border-width: 0;\n  border-radius: 15px; */\n  --background: none;\n  box-shadow: none !important;\n}\n\n.card-img {\n  object-fit: cover;\n  width: 100%;\n  background-color: white;\n  border-style: solid;\n  border-width: 0;\n  border-radius: 15px;\n}\n\n.card-boton {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.card-gradient {\n  position: absolute;\n  background: linear-gradient(0deg, rgb(255, 79, 1) 0%, rgba(255, 255, 255, 0) 25%);\n  width: 100%;\n  height: 100%;\n  border-style: solid;\n  border-width: 0;\n  border-radius: 15px;\n  top: 0;\n}\n\n.menuBtn {\n  font-size: 18px;\n  background: var(--ion-color-blanco);\n  height: 48px;\n  width: 50px;\n  color: var(--ion-color-negro);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n}\n\n.menuIcon {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card-title {\n  position: absolute;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 30px;\n  color: var(--ion-color-blanco);\n  bottom: 50px;\n  left: 15px;\n}\n\n.card-subtitle {\n  position: absolute;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 18px;\n  color: var(--ion-color-blanco);\n  bottom: 25px;\n  left: 15px;\n}\n\n.card-start {\n  position: absolute;\n  width: 13px;\n  bottom: 25px;\n}\n\n.card-ratings {\n  position: absolute;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-blanco);\n  bottom: 25px;\n  right: 15px;\n}\n\n.card-like-dis {\n  position: absolute;\n  width: 26%;\n  top: 38%;\n  left: 38%;\n}\n\n.row-btn {\n  align-items: center;\n  text-align: center;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.btn-small {\n  width: 60px;\n}\n\n.btn-big {\n  width: 100px;\n}\n\n.header-filter {\n  margin-top: 10px;\n}\n\n.div-modal-g {\n  height: 75%;\n}\n\n.div-modal {\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.listModal {\n  margin-top: 0;\n  padding-top: 0;\n  /* .ios {\n      margin-top: 8px;\n  } */\n}\n\n.titleModal {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 22px;\n}\n\n.clearModal {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-primary1);\n  padding-top: 14px;\n}\n\n.text-h1 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  /* margin-top: -10px;\n  margin-bottom: 0px; */\n}\n\n.text-h1-2 {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  text-align: end;\n  color: var(--ion-color-gris1);\n  margin-top: 22px;\n}\n\nion-item {\n  --background: var(--ion-color-blanco);\n  --color: var(--ion-color-negro);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --border-radius: 15px;\n  --border-color: var(--ion-color-negro);\n  --padding-start: 15px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n  /* margin-top: 30px;\n  margin-bottom: 70px; */\n}\n\nion-select {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n  --padding-end: 0px;\n}\n\nion-select::part(icon) {\n  display: none !important;\n}\n\n.rangePersonal {\n  --bar-background: var(--ion-color-gris1);\n  --bar-background-active: var(--ion-color-primary1);\n  --bar-height: 5px;\n  --knob-size: 28px;\n  --knob-border-radius: 50%;\n  --bar-border-radius: 20px;\n  --knob-background: var(--ion-color-primary1);\n  --knob-box-shadow: 0px 0px 0px 3px #fff;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.text-subtitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  color: var(--ion-color-negro);\n  margin-bottom: -10px;\n}\n\n.apply-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 45px;\n  --border-radius: 10px;\n  --box-shadow: none;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n\n.item-toggle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  --detail-icon-color: var(--ion-color-primary1);\n  --border-width: 0 !important;\n  --padding-start: 10px;\n  --padding-end: 0px !important;\n  margin-right: -10px;\n}\n\n.toggleChk {\n  display: flex;\n  --background: var(--ion-color-gris1);\n  --background-checked: var(--ion-color-primary1);\n  --handle-background: var(--ion-color-blanco);\n  --handle-background-checked: var(--ion-color-blanco);\n  --handle-spacing: 2px;\n  --handle-height: 25px;\n  --handle-width: 25px;\n  width: 50px;\n  height: 30px;\n  padding: 0;\n  padding-right: 0;\n  border: 0.6px solid var(--ion-color-blanco);\n  border-radius: 18px;\n}\n\n.divNoFound {\n  height: 100%;\n}\n\n.imgNoFound {\n  display: block;\n  width: 35%;\n  margin-top: 35%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pNoFoundRegular {\n  text-align: center;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n  margin: 30px 20px 0 20px;\n}\n\n.pNoFound {\n  text-align: center;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  margin: 30px 20px 0 20px;\n}\n\n.skeleton-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.skeleton-img {\n  width: 100%;\n  border-radius: 8px;\n}\n\n.skeleton-buttons {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 8px 0;\n  margin-top: 40px;\n}\n\n.skeleton-btnT {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.skeleton-btnL {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 97524:
/*!********************************************************************!*\
  !*** ./src/app/pages/tabDiscover/tabDiscover.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"hdPage ion-no-border ion-padding\">\n  <ion-toolbar color=\"blanco\">\n    <ion-title class=\"titlePage\" mode=\"ios\">{{ 'DISCOVER.Title' | translate }}</ion-title>\n    <!-- <ion-buttons class=\"menuBtn\" slot=\"end\"  id=\"open-modal\" expand=\"block\"> \n      <ion-icon class=\"menuIcon\" name=\"options-outline\"></ion-icon>\n    </ion-buttons> -->\n    <!-- <ion-title class=\"titleLoc\" mode=\"ios\">Chicago, Il</ion-title> -->\n    <ion-title class=\"titleLoc\" mode=\"ios\">{{user?.location?.city}}, {{user?.location?.state}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  color=\"blanco\" class=\"ion-no-padding\" *ngIf=\"isLoading\">\n \n</ion-content>\n\n<ion-content color=\"blanco\" class=\"ion-no-padding\" *ngIf=\"!isLoading\">\n  <div class=\"divNoFound\" *ngIf=\"noDiscoverFound\">\n    <img class=\"imgNoFound\" src=\"../../../assets/icon/31-NoFoundCards.png\">\n    <p class=\"pNoFound\" *ngIf=\"discoverUsrs !== null\">{{ 'DISCOVER.txtNoFound' | translate }}</p>\n    <p class=\"pNoFound\" *ngIf=\"discoverUsrs === null\">{{ 'DISCOVER.txtToLimit' | translate }}</p>\n    <p class=\"pNoFoundRegular\" *ngIf=\"discoverUsrs === null\">{{ 'DISCOVER.txtToLimit2' | translate }}</p>\n  </div>\n\n  <div class=\"contenedorCard\" *ngIf=\"!noDiscoverFound\"> <!-- [style.height]=\"heightImg\"> -->\n    <ion-card *ngFor=\"let usr of discoverUsrs\" (click)=\"viewProfile(usr)\">\n      <!-- <img id=\"cardIm\" class=\"card-img\" [src]=\"usr.image\"> -->\n      <img id=\"cardIm\" class=\"card-img\" *ngIf=\"usr.image?.multimediaUrl\" [src]=\"usr.image.multimediaUrl\"\n        [style.height]=\"heightImg\" />\n      <img id=\"cardIm\" class=\"card-img\" *ngIf=\"!usr.image?.multimediaUrl\" src=\"../../../assets/icon/30-Default_no-image.jpeg\"\n        [style.height]=\"heightImg\" />\n      <div class=\"card-gradient\"></div>\n      <div class=\"card-boton\">\n        <ion-buttons class=\"menuBtn\" slot=\"end\" (click)=\"openMenuPopoverBlock( $event, usr.image.personId )\">\n          <ion-icon class=\"menuIcon\" name=\"ellipsis-vertical\"></ion-icon>\n        </ion-buttons>\n      </div>\n      <div class=\"card-title\">{{usr.firstName}} {{usr.lastName}}, {{usr.age}}</div>\n      <div class=\"card-subtitle\">{{usr.iam_a.slice(1)}}</div>\n      <!-- <div *ngFor=\"let itm of createTempArray(usr.rate); let i = index\">\n        <img class=\"card-start\" src=\"../../../assets/icon/17-Star_yellow.png\" [style.right]=\"setPositionStart(i)\">\n      </div> -->\n      <!-- <div class=\"card-ratings\">({{usr.rates}} {{ 'DISCOVER.RatingTxt' | translate }})</div> -->\n      <img class=\"card-like-dis\" src=\"../../../assets/icon/18-Dislike.png\" *ngIf=\"usr.status == statusUsrDicover.dislike || disLikeBtn\">\n      <img class=\"card-like-dis\" src=\"../../../assets/icon/20-like_button_white.png\" *ngIf=\"usr.status == statusUsrDicover.like || likeBtn\">\n    </ion-card>\n  </div>\n\n  <ion-grid fixed *ngIf=\"!noDiscoverFound\">\n    <ion-row class=\"row-btn ion-no-margin ion-no-padding\">\n      \n      <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-big\" src=\"../../../assets/icon/19-Dislike_button_grey.png\" (click)=\"doDislike()\">\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-small\" src=\"../../../assets/icon/24-Refresh_button.png\" (click)=\"returnDicover()\"> <!-- (click)=\"reLoadDiscover()\"> -->\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-big\" src=\"../../../assets/icon/21-like_button_orage.png\" (click)=\"doLike()\">\n      </ion-col>\n      <!-- <ion-col size=\"2\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-small\" src=\"../../../assets/icon/22-Favorite_button_grey.png\" (click)=\"doSuperLike()\">\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n\n  <ion-modal #modal trigger=\"open-modal\" [initialBreakpoint]=\"0.8\" [breakpoints]=\"[0, 0.8]\" (willPresent)=\"onWillPresent()\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <div class=\"div-modal-g\">\n        <ion-header class=\"header-filter ion-no-border\">\n          <ion-toolbar color=\"blanco\" mode=\"ios\">\n            <ion-title class=\"titleModal \">{{ 'DISCOVER.TitleFilter' | translate }}</ion-title>\n            <ion-buttons class=\"clearModal\" slot=\"end\"  (click)=\"clearFilter()\"> <!-- (click)=\"openMenuPopover( $event )\"> -->\n              {{ 'DISCOVER.ClearBtnFilter' | translate }}\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n\n        <div class=\"div-modal\">\n          <form [formGroup]=\"filterForm\" (ngSubmit)=\"applyFilter()\">\n            <ion-list class=\"listModal ion-padding\">\n              <!-- <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_iam' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"iam_a\" [interfaceOptions]=\"customIamOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of iams\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item> -->\n        \n              <!-- <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_looking' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"iam_looking\" [interfaceOptions]=\"customIamLookingOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of iamlookings\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item> -->\n\n              <ion-row>\n                <ion-col size=\"10\">\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Age' | translate }}</h1>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <h1 class=\"text-h1-2\">{{ this.age_between.value.lower }} - {{ this.age_between.value.upper }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-range class=\"rangePersonal\" formControlName=\"age_between\" [dualKnobs]=\"true\" min=\"18\" max=\"100\"></ion-range>\n              <!-- <ion-item class=\"item-toggle\" lines=\"none\">\n                <ion-label class=\"label\">{{ 'DISCOVER.LabelageToggle' | translate }}</ion-label>\n                <ion-toggle class=\"toggleChk\" formControlName=\"ageToggle\" (click)=\"onClickAgeToggle()\"></ion-toggle>\n              </ion-item> -->\n\n              <ion-row>\n                <ion-col size=\"10\">\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Distancia' | translate }}</h1>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <h1 class=\"text-h1-2\">1 - {{ this.distance.value }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-range class=\"rangePersonal\" formControlName=\"distance\" min=\"1\" max=\"1000\"></ion-range>\n              \n              <!-- <ion-item class=\"item-toggle\" lines=\"none\">\n                <ion-label class=\"label\">{{ 'DISCOVER.LabeldistToggle' | translate }}</ion-label>\n                <ion-toggle class=\"toggleChk\" formControlName=\"distanceToggle\" (click)=\"onClickDisToggle()\"></ion-toggle>\n              </ion-item> -->\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-subtitle\">{{ 'DISCOVER.SubTitle_Filter' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"10\">\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Height' | translate }}</h1>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <h1 class=\"text-h1-2\">{{ this.height.value.lower }} - {{ this.height.value.upper }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-range class=\"rangePersonal\" formControlName=\"height\" [dualKnobs]=\"true\" min=\"1\" max=\"8\"></ion-range>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Exercise' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"exercise\" [interfaceOptions]=\"customExerciseOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of exercises\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Sing' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"sing\" [interfaceOptions]=\"customSingOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of sings\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Education' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"education\" [interfaceOptions]=\"customEducationOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of educations\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Drink' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"drink\" [interfaceOptions]=\"customDrinkOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of drinks\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Smok' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"smok\" [interfaceOptions]=\"customSmokOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of smoks\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Kid' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"kid\" [interfaceOptions]=\"customKidOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of kids\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n              <ion-row>\n                <ion-col>\n                  <h1 class=\"text-h1\">{{ 'DISCOVER.Title_Religion' | translate }}</h1>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" detail>\n                <ion-select formControlName=\"religion\" [interfaceOptions]=\"customReligionOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                  <li *ngFor=\"let obj of religions\">\n                    <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n                  </li>\n                </ion-select>\n              </ion-item>\n\n\n              <ion-row>\n                <ion-button class=\"apply-Bt\" color=\"primary1\" type=\"submit\">\n                  {{ 'DISCOVER.btnApply' | translate }}\n                </ion-button>\n              </ion-row>\n\n            </ion-list>\n          </form>\n        </div>\n      </div>\n    </ng-template>\n  </ion-modal>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabDiscover_tabDiscover_module_ts.js.map