(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabAccount_tabAccount_module_ts"],{

/***/ 43024:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabAccount/tabAccount-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabAccountPageRoutingModule: () => (/* binding */ TabAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _tabAccount_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabAccount.page */ 78728);




const routes = [{
  path: '',
  component: _tabAccount_page__WEBPACK_IMPORTED_MODULE_0__.TabAccountPage
}];
let TabAccountPageRoutingModule = class TabAccountPageRoutingModule {};
TabAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TabAccountPageRoutingModule);


/***/ }),

/***/ 16112:
/*!*******************************************************!*\
  !*** ./src/app/pages/tabAccount/tabAccount.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabAccountPageModule: () => (/* binding */ TabAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _tabAccount_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabAccount-routing.module */ 43024);
/* harmony import */ var _tabAccount_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabAccount.page */ 78728);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let TabAccountPageModule = class TabAccountPageModule {};
TabAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tabAccount_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabAccountPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_tabAccount_page__WEBPACK_IMPORTED_MODULE_1__.TabAccountPage]
})], TabAccountPageModule);


/***/ }),

/***/ 78728:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabAccount/tabAccount.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabAccountPage: () => (/* binding */ TabAccountPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _tabAccount_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabAccount.page.html?ngResource */ 39856);
/* harmony import */ var _tabAccount_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabAccount.page.scss?ngResource */ 82520);
/* harmony import */ var _tabAccount_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabAccount_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _capacitor_community_photoviewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/photoviewer */ 68308);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 90628);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/match.service */ 5876);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 50168);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);













let TabAccountPage = class TabAccountPage {
  constructor(translate, router, route, animationCtrl, userService, matchService, dms, uiService, activatedRoute) {
    this.translate = translate;
    this.router = router;
    this.route = route;
    this.animationCtrl = animationCtrl;
    this.userService = userService;
    this.matchService = matchService;
    this.dms = dms;
    this.uiService = uiService;
    this.activatedRoute = activatedRoute;
    this.showAboutMe = false;
    this.imgProfile = '../../../assets/icon/30-Default_no-image.jpeg';
    this.textAboutMe = '';
    this.galImgs = [];
    //Imagenes
    this.image = '';
    this.name_img = '';
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
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.iniUsr();
    });
  }
  ionViewDidEnter() {
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  iniUsr() {
    var _this = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Ini User');
      _this.uiService.showLoader();
      _this.usrApp = yield _this.userService.getUserBasic('');
      yield _this.getAvatarImg();
      _this.imgProfile = _this.usrApp.image;
      console.log(_this.imgProfile);
      _this.textAboutMe = _this.usrApp?.aboutMe || '';
      _this.uiService.hideLoader();
    })();
  }
  getAvatarImg() {
    var _this2 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.galleryImgs = [];
      _this2.galImgs = [];
      _this2.galleryImgs = yield _this2.matchService.getIMGS('');
      console.log();
      let i = 0;
      if (_this2.galleryImgs === undefined || _this2.galleryImgs === null || _this2.galleryImgs.length === 0) {
        console.log("No hay fotos");
        return;
      }
      for (const img of _this2.galleryImgs) {
        if (!img.avatar) {
          _this2.galImgs[i] = '../../../assets/icon/30-Default_no-image.jpeg';
          _this2.galImgs[i++] = img.multimediaUrl;
        } else {
          _this2.usrApp.image = img.multimediaUrl;
        }
      }
    })();
  }
  trimString(string, length) {
    return string.length > length ? string.substring(0, length) + '...' : string;
  }
  setting() {
    var _this3 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('SETTING');
      let navegationExtras = {
        state: {
          usrApp: _this3.usrApp
        }
      };
      _this3.router.navigate(['settings-account'], navegationExtras);
    })();
  }
  edit() {
    let navegationExtras = {
      state: {
        usrApp: this.usrApp
      }
    };
    this.router.navigate(['edit-account'], navegationExtras);
  }
  openPhoto(index) {
    var _this4 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  static {
    this.ctorParameters = () => [{
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AnimationController
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_5__.MatchService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__.UiService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
    }];
  }
  static {
    this.propDecorators = {
      modalPhoto: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
        args: ['mPhoto']
      }]
    };
  }
};
TabAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-tabAccount',
  template: _tabAccount_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tabAccount_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TabAccountPage);


/***/ }),

/***/ 82520:
/*!******************************************************************!*\
  !*** ./src/app/pages/tabAccount/tabAccount.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.img-acc {
  max-width: 150px;
  max-height: 150px;
  border-radius: 10px;
}

.p-name {
  font-family: "Sk-Modernist-Bold";
  font-size: 26px;
  margin: 0;
}

.row-btn {
  align-items: center;
  text-align: center;
  padding-left: 8%;
  padding-right: 8%;
  margin-top: 20px;
}

.btn-lat {
  width: 60px;
  height: 60px;
}

.btn-center {
  width: 90px;
  height: 90px;
}

.btn-title {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  margin: 5px;
}

.txtTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-top: 30px;
  margin-bottom: 0;
}

.txtBody {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-gris1);
  margin-top: 8px;
  margin-bottom: 0;
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
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/tabAccount/tabAccount.page.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,iBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,SAAA;AACJ;;AAEA;EACI,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;AACJ;;AAEA;EACI,mCAAA;EACA,eAAA;EACA,WAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,gCAAA;EACA,eAAA;AACJ;;AAEA;EACI,kBAAA;EACA,qBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;AACJ","sourcesContent":[".img-acc {\n    max-width: 150px;\n    max-height: 150px;\n    border-radius: 10px;\n}\n\n.p-name {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 26px;\n    margin: 0;\n}\n\n.row-btn {\n    align-items: center;\n    text-align: center;\n    padding-left: 8%;\n    padding-right: 8%;\n    margin-top: 20px;\n}\n\n.btn-lat {\n    width: 60px;\n    height: 60px;\n}\n\n.btn-center {\n    width: 90px;\n    height: 90px;\n}\n\n.btn-title {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    margin: 5px;\n}\n\n.txtTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-top: 30px;\n    margin-bottom: 0;\n}\n\n.txtBody {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-gris1);\n    margin-top: 8px;\n    margin-bottom: 0;\n}\n\n.DesA {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    color: var(--ion-color-primary1);\n    margin-top: 5px;\n}\n\n.img-col {\n    text-align: center;\n    align-content: center;\n}\n\n.imgGallery1 {\n    object-fit: cover;\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 10px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39856:
/*!******************************************************************!*\
  !*** ./src/app/pages/tabAccount/tabAccount.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\" color=\"blanco\" fullscreen>\n  <ion-grid style=\"margin-top: 80px;\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <img class=\"img-acc\" *ngIf=\"imgProfile  !== undefined\" src=\"{{imgProfile}}\">\n         <img class=\"img-acc\" *ngIf=\"imgProfile == undefined\" src=\"../../../assets/icon/30-Default_no-image.jpeg\">\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-no-padding ion-no-margin ion-text-center\">\n        <p class=\"p-name\">{{usrApp?.firstName}} , {{usrApp?.age}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row-btn\">\n      <ion-col size=\"6\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-lat\" src=\"../../../assets/icon/27-Settings.png\" (click)=\"setting()\">\n        <p class=\"btn-title\">{{ 'ACCOUNT.tSetting' | translate }}</p>\n      </ion-col>\n      \n      <!-- <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-center\" src=\"../../../assets/icon/28-Add_photo.png\" (click)=\"addPhoto()\">\n        <p class=\"btn-title\">{{ 'ACCOUNT.tAddPhoto' | translate }}</p>\n      </ion-col> -->\n      <ion-col size=\"6\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"btn-lat\" src=\"../../../assets/icon/29-Edit.png\" (click)=\"edit()\">\n        <p class=\"btn-title\">{{ 'ACCOUNT.tEdit' | translate }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p class=\"txtTitle\">{{ 'ACCOUNT.LocTitle' | translate }}</p>\n        <p class=\"txtBody\">{{ usrApp?.location.city }}, {{ usrApp?.location.state }} {{ usrApp?.location.country }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p class=\"txtTitle\">{{ 'ACCOUNT.BioTitle' | translate }}</p>\n        <p class=\"txtBody\" *ngIf=\"!showAboutMe\">{{ trimString(textAboutMe,100) }}</p>\n        <p class=\"txtBody\" *ngIf=\"showAboutMe\">{{ textAboutMe }}</p>\n        <a class=\"DesA\" (click)=\"showAboutMe = !showAboutMe\" *ngIf=\"textAboutMe.length > 100\">{{ 'MATCH-DETAIL.txtRead' | translate }} <span [innerHtml]=\"(showAboutMe ? 'MATCH-DETAIL.txtLess' : 'MATCH-DETAIL.txtMore') | translate\"></span></a>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p class=\"txtTitle\">{{ 'ACCOUNT.txtGallery' | translate }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"img-col\" size=\"6\" >\n        <img class=\"imgGallery1\" src={{galImgs[0]}} (click)=\"openPhoto(0)\" *ngIf = galImgs[0] />\n      </ion-col>\n      <ion-col class=\"img-col\" size=\"6\">\n        <img class=\"imgGallery1\" src={{galImgs[1]}} (click)=\"openPhoto(1)\" *ngIf = galImgs[1]/>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"img-col\" size=\"4\">\n        <img class=\"imgGallery1\" src={{galImgs[2]}} (click)=\"openPhoto(2)\" *ngIf = galImgs[2]/>\n      </ion-col>\n      <ion-col class=\"img-col\" size=\"4\">\n        <img class=\"imgGallery1\" src={{galImgs[3]}} (click)=\"openPhoto(3)\" *ngIf = galImgs[3]/>\n      </ion-col>\n      <ion-col class=\"img-col\" size=\"4\">\n        <img class=\"imgGallery1\" src={{galImgs[4]}} (click)=\"openPhoto(4)\" *ngIf = galImgs[4]/>\n      </ion-col>\n    </ion-row>\n\n    <ion-modal #mPhoto class=\"modalPhoto\" [enterAnimation]=\"enterAnimation\" [leaveAnimation]=\"leaveAnimation\">\n      <ng-template>\n        <ion-content>\n          <div id=\"photoviewer-container\"></div>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n\n\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabAccount_tabAccount_module_ts.js.map