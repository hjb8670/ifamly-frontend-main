(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabExperience_tabExperience_module_ts"],{

/***/ 37260:
/*!*********************************************************************!*\
  !*** ./src/app/pages/tabExperience/tabExperience-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabExperiencePageRoutingModule: () => (/* binding */ TabExperiencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _tabExperience_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabExperience.page */ 12004);




const routes = [{
  path: '',
  component: _tabExperience_page__WEBPACK_IMPORTED_MODULE_0__.TabExperiencePage
}];
let TabExperiencePageRoutingModule = class TabExperiencePageRoutingModule {};
TabExperiencePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TabExperiencePageRoutingModule);


/***/ }),

/***/ 57084:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabExperience/tabExperience.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabExperiencePageModule: () => (/* binding */ TabExperiencePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _tabExperience_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabExperience.page */ 12004);
/* harmony import */ var _tabExperience_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabExperience-routing.module */ 37260);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let TabExperiencePageModule = class TabExperiencePageModule {};
TabExperiencePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabExperience_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabExperiencePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_tabExperience_page__WEBPACK_IMPORTED_MODULE_0__.TabExperiencePage]
})], TabExperiencePageModule);


/***/ }),

/***/ 12004:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabExperience/tabExperience.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabExperiencePage: () => (/* binding */ TabExperiencePage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _tabExperience_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabExperience.page.html?ngResource */ 96392);
/* harmony import */ var _tabExperience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabExperience.page.scss?ngResource */ 94268);
/* harmony import */ var _tabExperience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabExperience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _experience_experience_menu_popover_experience_menu_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../experience/experience-menu-popover/experience-menu-popover.page */ 40504);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/experience.service */ 29340);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ 90628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);













let TabExperiencePage = class TabExperiencePage {
  constructor(router, activatedRoute, translate, popoverCtrl, experienceService, userService, uiService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.translate = translate;
    this.popoverCtrl = popoverCtrl;
    this.experienceService = experienceService;
    this.userService = userService;
    this.uiService = uiService;
    this.isMyExp = false;
    this.lanCatalogo = 'EN';
    this.isBigList = true;
    this.user = {};
    this.experienceCat = [];
    this.experiences = [];
    this.iniExp = 0;
    this.deltaExp = 10;
    this.cateExp = null;
    this.lanDate = 'en_US';
    this.mostrarLoginFinito = true;
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isMyExp = this.router.getCurrentNavigation().extras.state.isMyExp;
        console.log('MyExp: ', this.isMyExp);
      }
      this.principal();
    });
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.translate.currentLang == 'es') {
        _this.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.languages.es;
        _this.lanDate = 'es_MX';
      } else {
        _this.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.languages.en;
        _this.lanDate = 'en_US';
      }
    })();
  }
  principal() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const tVal = await this.userService.validaToken();
      // if( !tVal ) {
      //   return;
      // } //Haciendo menos pesada las busquedas
      yield _this2.uiService.showLoader();
      _this2.user = yield _this2.userService.getUserBasic('');
      _this2.user.location = null; // NULL mientras se define VIP
      console.log('USR: ', _this2.user);
      //PAra que sirve este catalogo ?
      _this2.experienceCat = yield _this2.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.ExperienceCat.toString(), _this2.lanCatalogo);
      console.log('CAT EXP: ', _this2.experienceCat);
      _this2.iniExp = 0;
      const preloadImages = /*#__PURE__*/function () {
        var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (experiences) {
          const imageUrls = experiences.map(exp => exp.image);
          const promises = imageUrls.map(url => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = resolve;
              img.onerror = reject;
            });
          });
          yield Promise.all(promises);
        });
        return function preloadImages(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      // Usage
      _this2.experiences = (yield _this2.getExperiences()).sort((a, b) => {
        const now = new Date().getTime();
        const aDiff = new Date(a.dateTime).getTime() - now;
        const bDiff = new Date(b.dateTime).getTime() - now;
        return aDiff - bDiff;
      });
      yield preloadImages(_this2.experiences);
      // Now, images should be cached, and blinking should be minimized
      console.log('EXPERIENCIES: ', _this2.experiences);
      _this2.uiService.hideLoader();
    })();
  }
  setAvatarImg(experience) {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const exp of experience) {
        exp.image = '../../../assets/icon/30-Default_no-image.jpeg';
        const res_imgs = yield _this3.experienceService.getIMGS(exp.experienceId.toString());
        for (const img of res_imgs) {
          if (img.avatar) {
            exp.image = img.multimediaUrl;
          }
        }
      }
    })();
  }
  openMenuPopover(ev) {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this4.popoverCtrl.create({
        component: _experience_experience_menu_popover_experience_menu_popover_page__WEBPACK_IMPORTED_MODULE_3__.ExperienceMenuPopoverPage,
        event: ev,
        componentProps: {
          isMyExp: _this4.isMyExp
        }
      });
      /* popover.onDidDismiss().then((result: object) => {
        console.log('RES POPOVER: ', result);
        
      }); */
      yield popover.present();
    })();
  }
  changeList() {
    this.isBigList = !this.isBigList;
  }
  optionSelected(ev) {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.cateExp = Number(ev.detail.value);
      _this5.experiences = yield _this5.getExperiences();
      console.log('EXPERIENCIES: ', _this5.experiences);
    })();
  }
  loadExp(ev) {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.iniExp += _this6.deltaExp;
      const newExp = yield _this6.getExperiences();
      yield setTimeout(() => {
        if (newExp.length < 1) {
          _this6.iniExp -= _this6.deltaExp;
          _this6.infiniteScroll.disabled = true;
        } else {
          _this6.experiences.push(...newExp);
        }
        _this6.infiniteScroll.complete();
      });
    })();
  }
  getExperiences() {
    var _this7 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let exps;
      if (_this7.isMyExp) {
        exps = yield _this7.experienceService.getMyExperiences(_this7.iniExp.toString(), _this7.deltaExp.toString(), _this7.cateExp);
      } else {
        exps = yield _this7.experienceService.getExperiences(_this7.iniExp.toString(), _this7.deltaExp.toString(), _this7.user.location, _this7.cateExp);
        //  debugger;
      }
      yield _this7.setAvatarImg(exps);
      return exps;
    })();
  }
  selectExperience(expId) {
    let navegationExtras = {
      state: {
        expId,
        isMyExp: this.isMyExp
      }
    };
    this.router.navigate(['detail-exp'], navegationExtras);
  }
  setPortadaImg(expP) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } /* for (const exp of expP) {
      exp.image = '../../../assets/icon/30-Default_no-image.jpeg';
           const res_imgs =  <ImagesUser[]> await this.matchService.getIMGS(usr.personLikes.toString());
      for (const img of res_imgs) {
        if(img.avatar) {
          usr.image = img.multimediaUrl;
        }
      }
    } */
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController
    }, {
      type: _services_experience_service__WEBPACK_IMPORTED_MODULE_5__.ExperienceService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_7__.UiService
    }];
  }
  static {
    this.propDecorators = {
      infiniteScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInfiniteScroll]
      }]
    };
  }
};
TabExperiencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-tabExperience',
  template: _tabExperience_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tabExperience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TabExperiencePage);


/***/ }),

/***/ 94268:
/*!************************************************************************!*\
  !*** ./src/app/pages/tabExperience/tabExperience.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hdExperience {
  background: var(--ion-color-blanco);
  padding-bottom: 0px;
}

.titleExperience {
  font-family: "Sk-Modernist-Bold";
  font-size: 24px;
}

h1 {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-bottom: 10px;
}

.menuBtn {
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
}

.menuIcon {
  margin-left: auto;
  margin-right: auto;
}

ion-toolbar {
  --background: var(--ion-color-blanco);
}

.iconList {
  font-size: 30px;
  margin-top: 10px;
}

ion-segment {
  --background: var(--ion-color-blanco);
}
ion-segment::-webkit-scrollbar {
  display: none;
}

ion-segment-button {
  border-style: solid;
  --color: var(--ion-color-gris1);
  --color-checked: var(--ion-color-blanco) !important;
  --indicator-color: var(--ion-color-primary1);
  --border-radius:20px;
  --border-color: none;
  min-width: auto;
  margin-right: 10px;
}

ion-label {
  font-family: "Sk-Modernist-Bold";
}

ion-grid {
  margin-top: -10px;
}

.colD {
  padding: 0px;
  margin-right: -5px;
}
.colD .ios {
  margin-bottom: 0px;
}

.colI {
  padding: 0px;
  margin-left: -5px;
}
.colI .ios {
  margin-bottom: 0px;
}

.cardBig {
  border-radius: 10px;
}

.parent {
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
}

.imgListBig {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-VIPB {
  width: 50px;
  height: 50px;
  position: absolute;
  top: -9px;
  right: 0;
}

.title-p {
  font-family: "Sk-Modernist-Bold";
  font-size: 14px;
  color: var(--ion-color-negro);
  height: 35px;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
}

.date-p {
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  margin-top: 3px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
}

.cap-p {
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  color: var(--ion-color-negro);
  margin-top: 3px;
  margin-left: 10px;
  margin-right: 10px;
}

.cap-2 {
  font-family: "Sk-Modernist-Bold";
  font-size: 12px;
  color: var(--ion-color-primary1);
}

.cardSmall {
  height: 70px;
  margin-bottom: 0px;
}

.imgListSmall {
  width: 100%;
  height: 70px;
  border-radius: 10px !important;
  margin-top: 0px;
  margin-left: -10px;
  margin-bottom: 5px;
}

.img-VIPS {
  width: 35px;
  height: 35px;
  margin-left: -28px;
  margin-bottom: 40px;
}

.title-pS {
  font-family: "Sk-Modernist-Bold";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 0px;
}

.date-pS {
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 3px;
}

.cap-pS {
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  color: var(--ion-color-negro);
  margin-top: 3px;
  margin-right: 10px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/tabExperience/tabExperience.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/tabExperience/tabExperience.page.scss"],"names":[],"mappings":"AAAA;EACI,mCAAA;EAEA,mBAAA;ACAJ;;ADGA;EACI,gCAAA;EACA,eAAA;ACAJ;;ADGA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,mBAAA;ACAJ;;ADGA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;ACAJ;;ADGA;EACI,iBAAA;EACA,kBAAA;ACAJ;;ADGA;EACI,qCAAA;ACAJ;;ADGA;EACI,eAAA;EACA,gBAAA;ACAJ;;ADIA;EACI,qCAAA;ACDJ;ADGI;EACI,aAAA;ACDR;;ADKA;EACI,mBAAA;EACA,+BAAA;EACA,mDAAA;EACA,4CAAA;EACA,oBAAA;EACA,oBAAA;EACA,eAAA;EACA,kBAAA;ACFJ;;ADKA;EACI,gCAAA;ACFJ;;ADOA;EACI,iBAAA;ACJJ;;ADQA;EACI,YAAA;EACA,kBAAA;ACLJ;ADOI;EACI,kBAAA;ACLR;;ADSA;EACI,YAAA;EACA,iBAAA;ACNJ;ADQI;EACI,kBAAA;ACNR;;ADUA;EACI,mBAAA;ACPJ;;ADWA;EACI,kBAAA;EAGA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;ACVJ;;ADeA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;ACZJ;;ADkBA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EAEA,QAAA;AChBJ;;ADmBA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;AChBJ;;ADmBA;EACI,mCAAA;EACA,eAAA;EAEA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;ACjBJ;;ADoBA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;ACjBJ;;ADoBA;EACI,gCAAA;EACA,eAAA;EACA,gCAAA;ACjBJ;;ADoBA;EAEI,YAAA;EACA,kBAAA;AClBJ;;ADqBA;EACI,WAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;AClBJ;;ADqBA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;AClBJ;;ADqBA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;AClBJ;;ADqBA;EACI,mCAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AClBJ;;ADqBA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,eAAA;EACA,kBAAA;AClBJ","sourcesContent":[".hdExperience {\n    background: var(--ion-color-blanco);\n    //margin-top: 0px;\n    padding-bottom: 0px;\n}\n\n.titleExperience {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n}\n\nh1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-bottom: 10px;\n}\n\n.menuBtn {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 10px;\n    width: 50px;\n    height: 50px;\n}\n\n.menuIcon {\n    margin-left: auto;\n    margin-right: auto;\n}\n\nion-toolbar {\n    --background: var(--ion-color-blanco);\n}\n\n.iconList {\n    font-size: 30px;\n    margin-top: 10px;\n}\n\n//****** SELECTOR DE CATEGORIAS ******//\nion-segment {\n    --background: var(--ion-color-blanco);\n\n    &::-webkit-scrollbar {\n        display: none;\n    }\n}\n\nion-segment-button {\n    border-style: solid;\n    --color: var(--ion-color-gris1);\n    --color-checked: var(--ion-color-blanco) !important;\n    --indicator-color: var(--ion-color-primary1);\n    --border-radius:20px;\n    --border-color: none;\n    min-width: auto;\n    margin-right: 10px;\n}\n\nion-label {\n    font-family: 'Sk-Modernist-Bold';\n}\n\n//**********************************//\n\nion-grid {\n    margin-top: -10px;\n}\n\n//****** LISTA DE EXPEDIENTES ******//\n.colD {\n    padding: 0px;\n    margin-right: -5px;\n\n    .ios {\n        margin-bottom: 0px;\n    }\n}\n\n.colI {\n    padding: 0px;\n    margin-left: -5px;\n\n    .ios {\n        margin-bottom: 0px;\n    }\n}\n\n.cardBig {\n    border-radius: 10px;\n    // height: 240px;\n}\n\n.parent {\n    position: relative;\n    // top: 0;\n    // left: 0;\n    width: 100%;\n    height: 120px;\n    border-radius: 10px;\n    overflow:hidden;\n    // text-align: center;\n    // align-content: center;\n}\n\n.imgListBig {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    // max-width: 100%;\n    // max-height: 100%;\n    // border-radius: 10px !important;\n}\n\n.img-VIPB {\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    top: -9px;\n    //left: 123px;\n    right: 0;\n}\n\n.title-p {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    height: 35px;\n    margin-top: 5px;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n}\n\n.date-p {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    //color: var(--ion-color-negro);\n    margin-top: 3px;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n}\n\n.cap-p {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-negro);\n    margin-top: 3px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.cap-2 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 12px;\n    color: var(--ion-color-primary1);\n}\n\n.cardSmall {\n    //border-radius: 10px 5% / 20px 25em 30px 35em;\n    height: 70px;\n    margin-bottom: 0px;\n}\n\n.imgListSmall {\n    width: 100%;\n    height: 70px;\n    border-radius: 10px !important;\n    margin-top: 0px;\n    margin-left: -10px;\n    margin-bottom: 5px;\n}\n\n.img-VIPS {\n    width: 35px;\n    height: 35px;\n    margin-left: -28px;\n    margin-bottom: 40px;\n}\n\n.title-pS {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin-top: 5px;\n    margin-right: 10px;\n    margin-bottom: 0px;\n}\n\n.date-pS {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    margin-top: 10px;\n    margin-right: 10px;\n    margin-bottom: 3px;\n}\n\n.cap-pS {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-negro);\n    margin-top: 3px;\n    margin-right: 10px;\n}\n\n//**********************************//\n",".hdExperience {\n  background: var(--ion-color-blanco);\n  padding-bottom: 0px;\n}\n\n.titleExperience {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 24px;\n}\n\nh1 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  margin-bottom: 10px;\n}\n\n.menuBtn {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 10px;\n  width: 50px;\n  height: 50px;\n}\n\n.menuIcon {\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-toolbar {\n  --background: var(--ion-color-blanco);\n}\n\n.iconList {\n  font-size: 30px;\n  margin-top: 10px;\n}\n\nion-segment {\n  --background: var(--ion-color-blanco);\n}\nion-segment::-webkit-scrollbar {\n  display: none;\n}\n\nion-segment-button {\n  border-style: solid;\n  --color: var(--ion-color-gris1);\n  --color-checked: var(--ion-color-blanco) !important;\n  --indicator-color: var(--ion-color-primary1);\n  --border-radius:20px;\n  --border-color: none;\n  min-width: auto;\n  margin-right: 10px;\n}\n\nion-label {\n  font-family: \"Sk-Modernist-Bold\";\n}\n\nion-grid {\n  margin-top: -10px;\n}\n\n.colD {\n  padding: 0px;\n  margin-right: -5px;\n}\n.colD .ios {\n  margin-bottom: 0px;\n}\n\n.colI {\n  padding: 0px;\n  margin-left: -5px;\n}\n.colI .ios {\n  margin-bottom: 0px;\n}\n\n.cardBig {\n  border-radius: 10px;\n}\n\n.parent {\n  position: relative;\n  width: 100%;\n  height: 120px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.imgListBig {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.img-VIPB {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: -9px;\n  right: 0;\n}\n\n.title-p {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  height: 35px;\n  margin-top: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n\n.date-p {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  margin-top: 3px;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n\n.cap-p {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-negro);\n  margin-top: 3px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.cap-2 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 12px;\n  color: var(--ion-color-primary1);\n}\n\n.cardSmall {\n  height: 70px;\n  margin-bottom: 0px;\n}\n\n.imgListSmall {\n  width: 100%;\n  height: 70px;\n  border-radius: 10px !important;\n  margin-top: 0px;\n  margin-left: -10px;\n  margin-bottom: 5px;\n}\n\n.img-VIPS {\n  width: 35px;\n  height: 35px;\n  margin-left: -28px;\n  margin-bottom: 40px;\n}\n\n.title-pS {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  margin-top: 5px;\n  margin-right: 10px;\n  margin-bottom: 0px;\n}\n\n.date-pS {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  margin-top: 10px;\n  margin-right: 10px;\n  margin-bottom: 3px;\n}\n\n.cap-pS {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-negro);\n  margin-top: 3px;\n  margin-right: 10px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96392:
/*!************************************************************************!*\
  !*** ./src/app/pages/tabExperience/tabExperience.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"hdExperience ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-title class=\"titleExperience\" mode=\"ios\" [innerHtml]=\"(isMyExp ? 'EXPERIENCE.Title2' : 'EXPERIENCE.Title') | translate\"></ion-title>\n    <ion-buttons class=\"menuBtn\" slot=\"end\" (click)=\"openMenuPopover( $event )\">\n      <ion-icon class=\"menuIcon\" name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <h1 [innerHtml]=\"(isMyExp ? 'EXPERIENCE.SubTitle2' : 'EXPERIENCE.SubTitle') | translate\"></h1>\n    <!-- <ion-buttons slot=\"end\" (click)=\"changeList()\">\n      <ion-icon class=\"iconList\" name=\"list-outline\" *ngIf=\"isBigList\"></ion-icon>\n      <ion-icon class=\"iconList\" name=\"grid-outline\" *ngIf=\"!isBigList\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n\n  <ion-toolbar  mode=\"ios\" *ngIf=\"!isMyExp && experienceCat.length != 0\">\n    <ion-segment (ionChange)=\"optionSelected($event)\" scrollable value=\"all\">\n      <ion-segment-button value='all'>\n        <ion-label>All</ion-label>\n      </ion-segment-button>\n      <ion-segment-button *ngFor=\"let op of experienceCat\" value={{op.id}}>\n        <ion-label>{{ op.name }}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco\">\n  <ion-grid fixed *ngIf=\"isBigList\">\n    <ion-row>\n      <ng-container *ngFor=\"let exp of experiences; let i = index;\">\n        <ion-col class=\"colD\" size=\"6\" *ngIf=\"i%2 == 0\">\n          <ion-card class=\"cardBig\" (click)=\"selectExperience(exp.experienceId)\">\n            <!-- <img class=\"imgListBig\" [src]=\"exp.image\"> -->\n            <div class=\"parent\">\n              <img class=\"imgListBig\" src={{exp.image}}>\n              <img class=\"img-VIPB\" src=\"../../../../assets/icon/12-Vip_card.png\" *ngIf=\"exp.vip && !isMyExp\">\n            </div>\n            <p class=\"title-p\">{{ exp.title }}</p>\n            <p class=\"date-p\">{{ exp.dateTime | date:'LLL, dd, hh:mm aa' : '' : lanDate }}</p>\n            <p class=\"cap-p\">Capacity&nbsp; <span class=\"cap-2\">{{ exp.amountPeople }} Persons</span></p>\n          </ion-card>\n        </ion-col>\n\n        <ion-col class=\"colD\" size=\"6\" *ngIf=\"i%2 != 0\">\n          <ion-card class=\"cardBig\" (click)=\"selectExperience(exp.experienceId)\">\n            <!-- <img class=\"imgListBig\" [src]=\"exp.image\"> -->\n            <div class=\"parent\">\n              <img class=\"imgListBig\" src={{exp.image}}>\n              <img class=\"img-VIPB\" src=\"../../../../assets/icon/12-Vip_card.png\" *ngIf=\"exp.vip && !isMyExp\">\n            </div>\n            <p class=\"title-p\">{{ exp.title }}</p>\n            <p class=\"date-p\">{{ exp.dateTime | date:'LLL, dd, hh:mm aa' : '' : lanDate }}</p>\n            <p class=\"cap-p\">Capacity&nbsp; <span class=\"cap-2\">{{ exp.amountPeople }} Persons</span></p>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed *ngIf=\"!isBigList\">\n    <ng-container *ngFor=\"let exp of experiences; let i = index;\">\n      <ion-row>\n        <ion-col>\n          <ion-card class=\"cardSmall\" (click)=\"selectExperience(exp.experienceId)\">\n            <!-- <img [src]=\"exp.image\">\n            <p class=\"title-p\">{{ exp.title }}</p>\n            <p class=\"date-p\">{{ exp.datetime }}</p>\n            <p class=\"cap-p\">Capacity&nbsp; <span class=\"cap-2\">{{ exp.amountPeople }} Persons</span></p> -->\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"3\">\n                  <!-- <img [src]=\"exp.image\"> -->\n                  <img class=\"imgListSmall\" src={{exp.image}}>\n                  <img class=\"img-VIPS\" src=\"../../../../assets/icon/12-Vip_card.png\" *ngIf=\"exp.vip && !isMyExp\">\n                </ion-col>\n                <ion-col size=\"9\">\n                  <p class=\"title-pS\">{{ exp.title }}</p>\n                  <p class=\"date-pS\">{{ exp.dateTime | date:'LLL, dd, hh:mm aa' : '' : lanDate }}</p>\n                  <p class=\"cap-pS\">Capacity&nbsp; <span class=\"cap-2\">{{ exp.amountPeople }} Persons</span></p>\n                  <!-- <ion-card-content>\n                    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n                  </ion-card-content> -->\n                </ion-col>\n              </ion-row>\n             </ion-grid>  \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </ion-grid>\n\n  <!-- INFINITE SCROLL -->\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadExp($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"crescent\"\n      loadingText=\"{{ 'EXPERIENCE.LoadingTxt' | translate }}\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabExperience_tabExperience_module_ts.js.map