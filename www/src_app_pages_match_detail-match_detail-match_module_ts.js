(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_match_detail-match_detail-match_module_ts"],{

/***/ 19724:
/*!*************************************************************************!*\
  !*** ./src/app/pages/match/detail-match/detail-match-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailMatchPageRoutingModule: () => (/* binding */ DetailMatchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _detail_match_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-match.page */ 53140);




const routes = [{
  path: '',
  component: _detail_match_page__WEBPACK_IMPORTED_MODULE_0__.DetailMatchPage
}];
let DetailMatchPageRoutingModule = class DetailMatchPageRoutingModule {};
DetailMatchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DetailMatchPageRoutingModule);


/***/ }),

/***/ 90516:
/*!*****************************************************************!*\
  !*** ./src/app/pages/match/detail-match/detail-match.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailMatchPageModule: () => (/* binding */ DetailMatchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _detail_match_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-match-routing.module */ 19724);
/* harmony import */ var _detail_match_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-match.page */ 53140);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let DetailMatchPageModule = class DetailMatchPageModule {};
DetailMatchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _detail_match_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailMatchPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_detail_match_page__WEBPACK_IMPORTED_MODULE_1__.DetailMatchPage]
})], DetailMatchPageModule);


/***/ }),

/***/ 53140:
/*!***************************************************************!*\
  !*** ./src/app/pages/match/detail-match/detail-match.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailMatchPage: () => (/* binding */ DetailMatchPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _detail_match_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-match.page.html?ngResource */ 9180);
/* harmony import */ var _detail_match_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-match.page.scss?ngResource */ 50780);
/* harmony import */ var _detail_match_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_detail_match_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _capacitor_community_photoviewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/photoviewer */ 68308);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ 90628);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/match.service */ 5876);
/* harmony import */ var _detail_match_menu_popover_detail_match_menu_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detail-match-menu-popover/detail-match-menu-popover.page */ 76244);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);
/* harmony import */ var _services_talk_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/talk.service */ 68648);















let DetailMatchPage = class DetailMatchPage {
  constructor(activatedRoute, router, navCtrl, animationCtrl, popoverCtrl, translate, userService, matchService, uiService, talkService, platform) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.navCtrl = navCtrl;
    this.animationCtrl = animationCtrl;
    this.popoverCtrl = popoverCtrl;
    this.translate = translate;
    this.userService = userService;
    this.matchService = matchService;
    this.uiService = uiService;
    this.talkService = talkService;
    this.platform = platform;
    this.typePerson = 0; //0: match, 1: profile
    this.matchId = '';
    this.otherPerson = '';
    this.imgCover = '../../../assets/icon/30-Default_no-image.jpeg';
    this.uniDistancia = 'mi';
    this.galImgs = [];
    this.iam_des = '';
    this.showAboutMe = false;
    this.textAboutMe = '';
    //More About
    this.height = '';
    this.gender = '';
    this.education = '';
    this.languajes = '';
    this.sign = '';
    this.sports = '';
    this.hobbies = '';
    this.kids = '';
    this.pets = '';
    this.values_traits = '';
    this.drinking = '';
    this.smoking = '';
    this.drugs = '';
    this.religion = '';
    this.political = '';
    this.enterAnimation = baseEl => {
      const root = baseEl.shadowRoot;
      const backdropAnimation = this.animationCtrl.create().addElement(root.querySelector('ion-backdrop')).fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
      const wrapperAnimation = this.animationCtrl.create().addElement(root.querySelector('.modal-wrapper')).keyframes([{
        offset: 0,
        opacity: '0',
        transform: 'scale(0)'
      }, {
        offset: 1,
        opacity: '0.99',
        transform: 'scale(1)'
      }]);
      return this.animationCtrl.create().addElement(baseEl).easing('ease-out').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    this.leaveAnimation = baseEl => {
      return this.enterAnimation(baseEl).direction('reverse');
    };
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.typePerson = this.router.getCurrentNavigation().extras.state.typePerson ?? 0;
        this.matchId = this.router.getCurrentNavigation().extras.state.matchId;
        this.otherPerson = this.router.getCurrentNavigation().extras.state.otherPerson;
        this.imgCover = this.router.getCurrentNavigation().extras.state.image;
        console.log('TYPE-PERSON: ', this.typePerson);
        console.log('MATCH-ID: ', this.matchId);
        console.log('IMAGE: ', this.imgCover);
      }
    });
  }
  ngOnInit() {}
  ionViewDidEnter() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.translate.currentLang == 'es') {
        _this.uniDistancia = 'Km';
      } else {
        _this.uniDistancia = 'mi';
      }
      _this.uiService.showLoader();
      _this.usrMatch = yield _this.userService.getUserBasic(_this.otherPerson); //<User> await this.matchService.getMatchUser(Number(this.matchId));
      yield _this.setAvatarImg();
      console.log('USR-MATCH: ', _this.usrMatch);
      _this.uiService.hideLoader();
      let resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.IamA.toString());
      _this.iam_des = resCat[0]?.name;
      _this.textAboutMe = _this.usrMatch?.aboutMe || '';
      if (_this.usrMatch.height !== null && _this.usrMatch.height !== '') {
        if (_this.translate.currentLang == 'es') {
          //TODO: VALIDAR UNIDAD DE MEDIDA DE CONFIGURACION DE LA APP
          _this.height = _this.usrMatch.height + 'cm';
        } else {
          _this.height = _this.usrMatch.height + 'ft';
        }
      }
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Gender.toString());
      _this.gender = resCat[0]?.name;
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Educacion.toString());
      _this.education = resCat[0]?.name;
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Lenguage.toString());
      _this.languajes = _this.extraeNameOfCatalogMulti(resCat);
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Sing.toString());
      _this.sign = resCat[0]?.name;
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Ejercicio.toString());
      _this.sports = _this.extraeNameOfCatalogMulti(resCat);
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Hobbies.toString());
      _this.hobbies = _this.extraeNameOfCatalogMulti(resCat);
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Hijos.toString());
      _this.kids = resCat[0]?.name;
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Pets.toString());
      _this.pets = _this.extraeNameOfCatalogMulti(resCat);
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Values_Traits.toString());
      _this.values_traits = _this.extraeNameOfCatalogMulti(resCat);
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Bebe.toString());
      _this.drinking = resCat[0]?.name;
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Fuma.toString());
      _this.smoking = resCat[0]?.name;
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Drugs.toString());
      _this.drugs = resCat[0]?.name;
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Religion.toString());
      _this.religion = resCat[0]?.name;
      resCat = yield _this.matchService.getCatalogueXUsr(_this.usrMatch.personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.Political.toString());
      _this.political = resCat[0]?.name;
    })();
  }
  extraeNameOfCatalogMulti(cadJSON) {
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
      this.navCtrl.navigateRoot('/main/tabs/match', {
        animated: true
      });
    } else {
      this.navCtrl.back();
    }
  }
  sendMessage() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this2.matchId);
      console.log('SEND MESSAGE');
      _this2.uiService.showLoader();
      let resp = yield _this2.talkService.updateConversation(_this2.matchId);
      _this2.uiService.hideLoader();
      if (Object.keys(resp).length === 0) {
        console.log("Ocurrio un error alguno de los usuarios no esta registrado en chat.");
        return;
      }
      let navegationExtras = {
        state: {
          idConversation: resp["idConversation"]
        }
      };
      _this2.router.navigate(['main/tabs/message'], navegationExtras);
    })();
  }
  createTempArray(number) {
    var arr = [];
    for (let i = 0; i < number; i++) {
      arr[i] = "";
    }
    return arr;
  }
  setPositionStart(ini, pos) {
    let posF = ini + 15 * pos;
    return posF + 'px';
  }
  trimString(string, length) {
    return string.length > length ? string.substring(0, length) + '...' : string;
  }
  setAvatarImg() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.galleryImgs = yield _this3.matchService.getIMGS(_this3.otherPerson);
      let i = 0;
      for (const img of _this3.galleryImgs) {
        if (!img.avatar) {
          _this3.galImgs[i] = '../../../assets/icon/30-Default_no-image.jpeg';
          _this3.galImgs[i++] = img.multimediaUrl;
        }
      }
    })();
  }
  openPhoto(index) {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = [{
        url: _this4.galImgs[index]
      }];
      const opImg = {
        share: false,
        title: false,
        transformer: 'zoom'
      };
      const optPhoto = {
        images: img,
        mode: 'one',
        options: opImg
      };
      yield _this4.modalPhoto.present();
      const res = yield _capacitor_community_photoviewer__WEBPACK_IMPORTED_MODULE_3__.PhotoViewer.show(optPhoto);
      _this4.modalPhoto.dismiss();
    })();
  }
  unMatch() {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('UNMATCH');
      let res = yield _this5.matchService.doMatchProfiles(_this5.usrMatch.personId.toString(), src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.statusUsrMatch.block.toString(), 'false', 'false', null);
    })();
  }
  leaveRating() {
    console.log('LEAVE RATING', this.otherPerson);
    let navegationExtras = {
      state: {
        matchId: this.matchId,
        otherPerson: this.otherPerson,
        name: this.usrMatch.firstName,
        lastName: this.usrMatch.lastName,
        image: this.imgCover
      }
    };
    this.router.navigate(['leave-ratings'], navegationExtras);
  }
  msghost(personid) {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(personid);
      _this6.uiService.showLoader();
      let resp = yield _this6.talkService.updateConversation(personid.toString());
      _this6.uiService.hideLoader();
      if (Object.keys(resp).length === 0) {
        console.log("Ocurrio un error alguno de los usuarios no esta registrado en chat.");
        return;
      }
      let navegationExtras = {
        state: {
          idConversation: resp["idConversation"]
        }
      };
      _this6.router.navigate(['main/tabs/message'], navegationExtras);
    })();
  }
  openMenuPopover(ev) {
    var _this7 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ev.stopPropagation();
      const popover = yield _this7.popoverCtrl.create({
        component: _detail_match_menu_popover_detail_match_menu_popover_page__WEBPACK_IMPORTED_MODULE_7__.DetailMatchMenuPopoverPage,
        event: ev,
        componentProps: {
          typeBlock: 0,
          matchId: _this7.matchId,
          personId: null
        }
      });
      yield popover.present();
    })();
  }
  openMap(town) {
    let url;
    if (this.platform.is('android')) {
      url = `geo:0,0?q=${encodeURIComponent(town)}`;
    } else if (this.platform.is('ios')) {
      url = `maps://?q=${encodeURIComponent(town)}`;
    } else {
      url = `https://maps.google.com/?q=${encodeURIComponent(town)}`;
    }
    window.location.href = url;
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AnimationController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_6__.MatchService
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_8__.UiService
    }, {
      type: _services_talk_service__WEBPACK_IMPORTED_MODULE_9__.TalkService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
    }];
  }
  static {
    this.propDecorators = {
      modalPhoto: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
        args: ['mPhoto']
      }]
    };
  }
};
DetailMatchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-detail-match',
  template: _detail_match_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_detail_match_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DetailMatchPage);


/***/ }),

/***/ 50780:
/*!****************************************************************************!*\
  !*** ./src/app/pages/match/detail-match/detail-match.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-header {
  height: 40%;
  background-color: whitesmoke;
}

ion-toolbar {
  --background: transparent;
}

.img-conteiner {
  width: 100%;
  height: 100%;
  text-align: center;
  align-content: center;
  position: absolute;
  left: 0;
  top: 0;
}

.imgCover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
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
  margin-top: 0px;
  margin-left: 0px;
}

.menuIcon {
  margin-left: auto;
  margin-right: auto;
}

.ext {
  margin-top: 0% !important;
  width: 100% !important;
  background: black !important;
  border: 1px solid black !important;
}
.ext ion-label {
  font-size: 16px !important;
  font-weight: bold !important;
}

.btnBack {
  font-size: 18px;
  background: var(--ion-color-blanco);
  height: 48px;
  width: 50px;
  color: var(--ion-color-negro);
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  margin-top: 0px;
}

.nameMatch {
  font-family: "Sk-Modernist-Bold";
  font-size: 24px;
  color: var(--ion-color-negro);
  margin: 0;
}

.roleMatch {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-gris1);
  margin-top: 5px;
}

.btnMessage {
  font-size: 18px;
  border-style: solid;
  height: 48px;
  width: 50px;
  color: var(--ion-color-primary1);
  border-width: 1px;
  border-radius: 15px;
  margin-top: 0px;
}

.rate-start {
  position: absolute;
  width: 13px;
}

.text-ratings {
  position: absolute;
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  color: var(--ion-color-gris1);
}

.txtLocation {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-top: 2px;
  margin-bottom: 0;
}

ion-accordion-group {
  margin-left: -15px;
  margin-right: -15px;
  margin-bottom: -15px;
}

ion-accordion {
  background: var(--ion-color-blanco);
}

.accord-label-hd {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
}

.accord-slot_cntnt {
  padding-top: 0;
  padding-bottom: 0;
}

.accord-title-secc {
  font-family: "Sk-Modernist-Bold";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin-bottom: 5px;
  margin-left: -5.5%;
}

.accord-body-secc {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin: 0;
  margin-left: -5.5%;
}

.txtTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-top: 20px;
  margin-bottom: 0;
}

.dirExp {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-gris1);
  margin-top: 8px;
  margin-bottom: 0;
}

.contPosition {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--ion-color-primary1);
  width: 95%;
  height: 35px;
  border-style: solid;
  border-color: var(--ion-color-primary1);
  border-width: 1px;
  border-radius: 5px;
  margin-top: 38px;
  margin-right: 0;
  margin-left: auto;
}

.imgPosition {
  width: 12px;
  margin-right: 4px;
}

.txtPosition {
  font-family: "Sk-Modernist-Bold";
  font-size: 12px;
  color: var(--ion-color-blanco);
}

.pExp {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-gris1);
  margin-top: 5px;
  margin-bottom: 5px;
}

.DesA {
  font-family: "Sk-Modernist-Bold";
  font-size: 14px;
  color: var(--ion-color-primary1);
  margin-top: 5px;
}

.img-col {
  text-align: center;
  align-content: center;
}

.imgGallery1 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
}

.btnAction {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 12px;
  text-transform: none;
  color: var(--ion-color-gris1);
  height: 40px;
  --border-style: solid;
  --border-width: 1px;
  --border-radius: 8px;
  --box-shadow: none;
  margin-top: 0;
  margin-right: 0;
  margin-left: auto;
  margin-bottom: 0;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/match/detail-match/detail-match.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/match/detail-match/detail-match.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,4BAAA;ACCJ;;ADGA;EACI,yBAAA;ACAJ;;ADGA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;ACAJ;;ADGA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;ACAJ;;ADMA;EACI,eAAA;EACA,mCAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;ACHJ;;ADOA;EACI,iBAAA;EACA,kBAAA;ACJJ;;ADMA;EACI,yBAAA;EACA,sBAAA;EACA,4BAAA;EACA,kCAAA;ACHJ;ADII;EACA,0BAAA;EACA,4BAAA;ACFJ;;ADKA;EACI,eAAA;EACA,mCAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;ACFJ;;ADMA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,SAAA;ACHJ;;ADMA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,eAAA;ACHJ;;ADOA;EACI,eAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,gCAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;ACJJ;;ADOA;EACI,kBAAA;EACA,WAAA;ACJJ;;ADOA;EACI,kBAAA;EACA,mCAAA;EACA,eAAA;EACA,6BAAA;ACJJ;;ADOA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,eAAA;EACA,gBAAA;ACJJ;;ADOA;EACI,kBAAA;EACA,mBAAA;EACA,oBAAA;ACJJ;;ADOA;EACI,mCAAA;ACJJ;;ADOA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;ACJJ;;ADOA;EACI,cAAA;EACA,iBAAA;ACJJ;;ADOA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,kBAAA;EACA,kBAAA;ACJJ;;ADQA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,SAAA;EACA,kBAAA;ACLJ;;ADSA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;EACA,gBAAA;ACNJ;;ADSA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,eAAA;EACA,gBAAA;ACNJ;;ADSA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,qCAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;EACA,uCAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ACNJ;;ADSA;EACI,WAAA;EACA,iBAAA;ACNJ;;ADSA;EACI,gCAAA;EACA,eAAA;EACA,8BAAA;ACNJ;;ADSA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,eAAA;EACA,kBAAA;ACNJ;;ADSA;EACI,gCAAA;EACA,eAAA;EACA,gCAAA;EACA,eAAA;ACNJ;;ADSA;EACI,kBAAA;EACA,qBAAA;ACNJ;;ADSA;EACI,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;ACNJ;;ADSA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,6BAAA;EACA,YAAA;EACA,qBAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;ACNJ","sourcesContent":["ion-header {\n    height: 40%;\n    background-color: whitesmoke;\n    //background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8));\n\n}\nion-toolbar{\n    --background: transparent;\n}\n\n.img-conteiner{\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    align-content: center;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.imgCover {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: top;\n\n    // max-width: 100%;\n    // max-height: 100%;\n}\n\n.menuBtn {\n    font-size: 18px;\n    background: var(--ion-color-blanco);\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-negro);\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 0px;\n    margin-left: 0px;\n   \n}\n\n.menuIcon {\n    margin-left: auto;\n    margin-right: auto;\n}\n.ext{\n    margin-top: 0% !important;\n    width: 100% !important;\n    background: black !important;\n    border: 1px solid black !important;\n    ion-label{\n    font-size: 16px !important;\n    font-weight: bold !important;\n    }\n}\n.btnBack {\n    font-size: 18px;\n    background: var(--ion-color-blanco);\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-negro);\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 0px;\n    \n}\n\n.nameMatch {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\n.roleMatch {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-gris1);\n    margin-top: 5px;\n    //margin: 0;\n}\n\n.btnMessage {\n    font-size: 18px;\n    border-style: solid;\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-primary1);\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 0px;\n}\n\n.rate-start {\n    position: absolute;\n    width: 13px;\n}\n\n.text-ratings {\n    position: absolute;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-gris1);\n}\n\n.txtLocation {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-top: 2px;\n    margin-bottom: 0;\n}\n\nion-accordion-group {\n    margin-left: -15px;\n    margin-right: -15px;\n    margin-bottom: -15px;\n}\n\nion-accordion {\n    background: var(--ion-color-blanco);\n}\n\n.accord-label-hd {\n    font-family:'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n}\n\n.accord-slot_cntnt {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\n.accord-title-secc {\n    font-family:'Sk-Modernist-Bold';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin-bottom: 5px;\n    margin-left: -5.5%;\n   \n}\n\n.accord-body-secc {\n    font-family:'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin: 0;\n    margin-left: -5.5%;\n    \n}\n\n.txtTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-top: 20px;\n    margin-bottom: 0;\n}\n\n.dirExp {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-gris1);\n    margin-top: 8px;\n    margin-bottom: 0;\n}\n\n.contPosition {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: var(--ion-color-primary1);\n    width: 95%;\n    height: 35px;\n    border-style: solid;\n    border-color: var(--ion-color-primary1);;\n    border-width: 1px;\n    border-radius: 5px;\n    margin-top: 38px;\n    margin-right: 0;\n    margin-left: auto;\n}\n\n.imgPosition {\n    width: 12px;\n    margin-right: 4px;\n}\n\n.txtPosition {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 12px;\n    color: var(--ion-color-blanco);\n}\n\n.pExp {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-gris1);\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.DesA {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    color: var(--ion-color-primary1);\n    margin-top: 5px;\n}\n\n.img-col {\n    text-align: center;\n    align-content: center;\n}\n\n.imgGallery1 {\n    object-fit: cover;\n    max-height: 100%;\n    max-width: 100%;\n    border-radius: 10px;\n}\n\n.btnAction {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 12px;\n    text-transform: none;\n    color: var(--ion-color-gris1);\n    height: 40px;\n    --border-style: solid;\n    --border-width: 1px;\n    --border-radius: 8px;\n    --box-shadow: none;\n    margin-top: 0;\n    margin-right: 0;\n    margin-left: auto;\n    margin-bottom: 0;\n}","ion-header {\n  height: 40%;\n  background-color: whitesmoke;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\n.img-conteiner {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  align-content: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.imgCover {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n\n.menuBtn {\n  font-size: 18px;\n  background: var(--ion-color-blanco);\n  height: 48px;\n  width: 50px;\n  color: var(--ion-color-negro);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 0px;\n  margin-left: 0px;\n}\n\n.menuIcon {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ext {\n  margin-top: 0% !important;\n  width: 100% !important;\n  background: black !important;\n  border: 1px solid black !important;\n}\n.ext ion-label {\n  font-size: 16px !important;\n  font-weight: bold !important;\n}\n\n.btnBack {\n  font-size: 18px;\n  background: var(--ion-color-blanco);\n  height: 48px;\n  width: 50px;\n  color: var(--ion-color-negro);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 0px;\n}\n\n.nameMatch {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 24px;\n  color: var(--ion-color-negro);\n  margin: 0;\n}\n\n.roleMatch {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-gris1);\n  margin-top: 5px;\n}\n\n.btnMessage {\n  font-size: 18px;\n  border-style: solid;\n  height: 48px;\n  width: 50px;\n  color: var(--ion-color-primary1);\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 0px;\n}\n\n.rate-start {\n  position: absolute;\n  width: 13px;\n}\n\n.text-ratings {\n  position: absolute;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-gris1);\n}\n\n.txtLocation {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  margin-top: 2px;\n  margin-bottom: 0;\n}\n\nion-accordion-group {\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: -15px;\n}\n\nion-accordion {\n  background: var(--ion-color-blanco);\n}\n\n.accord-label-hd {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n}\n\n.accord-slot_cntnt {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.accord-title-secc {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  margin-bottom: 5px;\n  margin-left: -5.5%;\n}\n\n.accord-body-secc {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  margin: 0;\n  margin-left: -5.5%;\n}\n\n.txtTitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  margin-top: 20px;\n  margin-bottom: 0;\n}\n\n.dirExp {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-gris1);\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n\n.contPosition {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--ion-color-primary1);\n  width: 95%;\n  height: 35px;\n  border-style: solid;\n  border-color: var(--ion-color-primary1);\n  border-width: 1px;\n  border-radius: 5px;\n  margin-top: 38px;\n  margin-right: 0;\n  margin-left: auto;\n}\n\n.imgPosition {\n  width: 12px;\n  margin-right: 4px;\n}\n\n.txtPosition {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 12px;\n  color: var(--ion-color-blanco);\n}\n\n.pExp {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-gris1);\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.DesA {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 14px;\n  color: var(--ion-color-primary1);\n  margin-top: 5px;\n}\n\n.img-col {\n  text-align: center;\n  align-content: center;\n}\n\n.imgGallery1 {\n  object-fit: cover;\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 10px;\n}\n\n.btnAction {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 12px;\n  text-transform: none;\n  color: var(--ion-color-gris1);\n  height: 40px;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-radius: 8px;\n  --box-shadow: none;\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: auto;\n  margin-bottom: 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9180:
/*!****************************************************************************!*\
  !*** ./src/app/pages/match/detail-match/detail-match.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <div class=\"img-conteiner\">\n    <img class=\"imgCover ion-no-padding\" src={{imgCover}}>\n  </div>\n\n  <ion-toolbar color=\"rgba(255,255,255,0)\">\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"btnBack\" (click)=\"backTabMatch()\">\n        <ion-icon name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons class=\"menuBtn\" slot=\"end\" (click)=\"openMenuPopover( $event )\">\n      <ion-icon class=\"menuIcon\" name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header [ngStyle]=\"{'background-image': 'url(' + imgCover + ' no-repeat center/cover fixed)'}\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"btnBack\" (click)=\"backTabMatch()\">\n        <ion-icon name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons class=\"menuBtn\" slot=\"end\" (click)=\"openMenuPopover( $event )\">\n      <ion-icon class=\"menuIcon\" name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n    <img src={{imgCover}} class=\"header-background\" />\n  </ion-toolbar>\n</ion-header> -->\n\n\n\n\n<ion-content class=\"ion-padding\" color=\"blanco\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <p class=\"nameMatch\">{{ usrMatch?.firstName }} {{ usrMatch?.lastName }}, {{ usrMatch?.age }}</p>\n        <!-- <p class=\"roleMatch\">{{ iam_des.slice(1) }}</p> -->\n         <p class=\"roleMatch\">{{ iam_des?.slice(1) || '' }}</p>\n      </ion-col>\n      <ion-col size=\"3\" *ngIf=\"typePerson !== 1\">\n        <ion-toolbar>\n          <ion-buttons slot=\"end\">\n            <ion-button class=\"btnMessage\" (click)=\"sendMessage()\">\n              <ion-icon name=\"paper-plane-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    \n    </ion-row>\n   \n    <!-- <ion-row>\n      <ion-col>\n        <div *ngFor=\"let itm of createTempArray(usrMatch?.rate); let i = index\">\n          <img class=\"rate-start\" src=\"../../../assets/icon/16-Star.png\" [style.left]=\"setPositionStart(5, i)\">\n        </div>\n        <div class=\"text-ratings\" [style.left]=\"setPositionStart(20, usrMatch?.rate)\">({{usrMatch?.rates}} {{ 'MATCH-DETAIL.RatingTxt' | translate }})</div>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col size=\"9\">\n        <p class=\"txtLocation\">{{ 'MATCH-DETAIL.LocTitle' | translate }}</p>\n        <!-- <p class=\"dir1Exp\">{{ usrMatch?.location.address }} {{ usrMatch?.location.city.name }}</p> -->\n        <p class=\"dirExp\">{{ usrMatch?.location.city }}, {{ usrMatch?.location.state }} {{ usrMatch?.location.country }}</p>\n      </ion-col>\n      <!-- <ion-col size=\"3\">\n        <div class=\"contPosition\" (click)=\"openMap(usrMatch?.location.city)\"  *ngIf=\"typePerson !== 1\">\n          <img class=\"imgPosition\" src=\"../../../../assets/icon/14-Location_white.png\">\n          <ion-label class=\"txtPosition\">{{ usrMatch?.location.radio }} {{ uniDistancia }}</ion-label>\n        </div>\n      </ion-col> -->\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p class=\"txtTitle\">{{ 'MATCH-DETAIL.txtAbout' | translate }}</p>\n        <p class=\"pExp\" *ngIf=\"!showAboutMe\">{{ trimString(textAboutMe,100) }}</p>\n        <p class=\"pExp\" *ngIf=\"showAboutMe\">{{ textAboutMe }}</p>\n        <a class=\"DesA\" (click)=\"showAboutMe = !showAboutMe\" *ngIf=\"textAboutMe.length > 100\">{{ 'MATCH-DETAIL.txtRead' | translate }} <span [innerHtml]=\"(showAboutMe ? 'MATCH-DETAIL.txtLess' : 'MATCH-DETAIL.txtMore') | translate\"></span></a>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n       \n            <ion-item slot=\"header\">\n              <ion-label class=\"accord-label-hd\">{{ 'MATCH-DETAIL.hdMoreAbout' | translate }}</ion-label>\n            </ion-item>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"height?.length > 0\">\n              <p class=\"accord-title-secc\" style=\"margin-top: 0px;\">{{ 'MATCH-DETAIL.titleSecc1' | translate }}</p>\n              <p class=\"accord-body-secc\">{{height}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"gender?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc2' | translate }}</p>\n              <p class=\"accord-body-secc\">{{gender}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"education?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc3' | translate }}</p>\n              <p class=\"accord-body-secc\">{{education}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"languajes?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc4' | translate }}</p>\n              <p class=\"accord-body-secc\">{{languajes}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"sign?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc5' | translate }}</p>\n              <p class=\"accord-body-secc\">{{sign}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"sports?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc6' | translate }}</p>\n              <p class=\"accord-body-secc\">{{sports}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"hobbies?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc7' | translate }}</p>\n              <p class=\"accord-body-secc\">{{hobbies}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"kids?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc8' | translate }}</p>\n              <p class=\"accord-body-secc\">{{kids}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"pets?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc9' | translate }}</p>\n              <p class=\"accord-body-secc\">{{pets}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"values_traits?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc10' | translate }}</p>\n              <p class=\"accord-body-secc\">{{values_traits}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"drinking?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc11' | translate }}</p>\n              <p class=\"accord-body-secc\">{{drinking}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"smoking?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc12' | translate }}</p>\n              <p class=\"accord-body-secc\">{{smoking}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"drugs?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc13' | translate }}</p>\n              <p class=\"accord-body-secc\">{{drugs}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"religion?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc14' | translate }}</p>\n              <p class=\"accord-body-secc\">{{religion}}</p>\n            </div>\n            <div class=\"accord-slot_cntnt ion-padding\"  *ngIf=\"political?.length > 0\">\n              <p class=\"accord-title-secc\">{{ 'MATCH-DETAIL.titleSecc15' | translate }}</p>\n              <p class=\"accord-body-secc\">{{political}}</p>\n            </div>\n         \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p class=\"txtTitle\">{{ 'MATCH-DETAIL.txtGallery' | translate }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"img-col\" size=\"6\" *ngIf=\"galImgs[0]?.length > 0\">\n        <img class=\"imgGallery1\" src={{galImgs[0]}} (click)=\"openPhoto(0)\" />\n      </ion-col>\n      <ion-col class=\"img-col\" size=\"6\" *ngIf=\"galImgs[1]?.length > 0\">\n        <img class=\"imgGallery1\" src={{galImgs[1]}} (click)=\"openPhoto(1)\" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"img-col\" size=\"4\" *ngIf=\"galImgs[2]?.length > 0\">\n        <img class=\"imgGallery1\" src={{galImgs[2]}} (click)=\"openPhoto(2)\" />\n      </ion-col>\n      <ion-col class=\"img-col\" size=\"4\" *ngIf=\"galImgs[3]?.length > 0\">\n        <img class=\"imgGallery1\" src={{galImgs[3]}} (click)=\"openPhoto(3)\" />\n      </ion-col>\n      <ion-col class=\"img-col\" size=\"4\" *ngIf=\"galImgs[4]?.length > 0\">\n        <img class=\"imgGallery1\" src={{galImgs[4]}} (click)=\"openPhoto(4)\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-modal #mPhoto class=\"modalPhoto\" [enterAnimation]=\"enterAnimation\" [leaveAnimation]=\"leaveAnimation\">\n      <ng-template>\n        <ion-content>\n          <div id=\"photoviewer-container\"></div>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n\n    <ion-row *ngIf=\"typePerson !== 1\">\n      <ion-col>\n        <ion-button class=\"btnAction\" (click)=\"unMatch()\" color=\"gris1\">\n          <ion-icon slot=\"start\" name=\"heart-dislike-outline\"></ion-icon>\n          {{ 'MATCH-DETAIL.btnUnMatch' | translate }}\n        </ion-button>\n      </ion-col>\n      <!-- <ion-col size=\"6\">\n        <ion-button class=\"btnAction\" (click)=\"leaveRating()\" color=\"primary1\">\n          <ion-icon slot=\"start\" name=\"star-outline\"></ion-icon>\n          {{ 'MATCH-DETAIL.btnLeaveRating' | translate }}\n        </ion-button>\n      </ion-col> -->\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_match_detail-match_detail-match_module_ts.js.map