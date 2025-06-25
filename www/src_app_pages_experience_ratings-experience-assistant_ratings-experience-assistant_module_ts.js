(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_experience_ratings-experience-assistant_ratings-experience-assistant_module_ts"],{

/***/ 40028:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/experience/ratings-experience-assistant/ratings-experience-assistant-routing.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingsExperienceAssistantPageRoutingModule: () => (/* binding */ RatingsExperienceAssistantPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ratings_experience_assistant_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings-experience-assistant.page */ 57520);




const routes = [{
  path: '',
  component: _ratings_experience_assistant_page__WEBPACK_IMPORTED_MODULE_0__.RatingsExperienceAssistantPage
}];
let RatingsExperienceAssistantPageRoutingModule = class RatingsExperienceAssistantPageRoutingModule {};
RatingsExperienceAssistantPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], RatingsExperienceAssistantPageRoutingModule);


/***/ }),

/***/ 78548:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/experience/ratings-experience-assistant/ratings-experience-assistant.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingsExperienceAssistantPageModule: () => (/* binding */ RatingsExperienceAssistantPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ratings_experience_assistant_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings-experience-assistant-routing.module */ 40028);
/* harmony import */ var _ratings_experience_assistant_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratings-experience-assistant.page */ 57520);







let RatingsExperienceAssistantPageModule = class RatingsExperienceAssistantPageModule {};
RatingsExperienceAssistantPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ratings_experience_assistant_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatingsExperienceAssistantPageRoutingModule],
  declarations: [_ratings_experience_assistant_page__WEBPACK_IMPORTED_MODULE_1__.RatingsExperienceAssistantPage]
})], RatingsExperienceAssistantPageModule);


/***/ }),

/***/ 57520:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/experience/ratings-experience-assistant/ratings-experience-assistant.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingsExperienceAssistantPage: () => (/* binding */ RatingsExperienceAssistantPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _ratings_experience_assistant_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratings-experience-assistant.page.html?ngResource */ 74200);
/* harmony import */ var _ratings_experience_assistant_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ratings-experience-assistant.page.scss?ngResource */ 96292);
/* harmony import */ var _ratings_experience_assistant_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ratings_experience_assistant_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 90628);
/* harmony import */ var src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/experience.service */ 29340);











let RatingsExperienceAssistantPage = class RatingsExperienceAssistantPage {
  constructor(activatedRoute, router, navCtrl, translate, userService, experienceService) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.navCtrl = navCtrl;
    this.translate = translate;
    this.userService = userService;
    this.experienceService = experienceService;
    this.idAssistant = '';
    this.nameAssistant = '';
    this.rateAssistant = 0;
    this.imageAssistant = '';
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.idAssistant = this.router.getCurrentNavigation().extras.state.idAssistant;
        this.nameAssistant = this.router.getCurrentNavigation().extras.state.nameAssistant;
        this.imageAssistant = this.router.getCurrentNavigation().extras.state.imageAssistant;
        console.log('ID ASSISTANT: ', this.idAssistant);
        console.log('NAME ASSISTANT: ', this.nameAssistant);
        console.log('IMG ASSISTANT: ', this.imageAssistant);
      }
    });
  }
  ngOnInit() {}
  ionViewDidEnter() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let ratedUser = yield _this.userService.getUserBasic(_this.idAssistant);
      _this.rateAssistant = Math.round(ratedUser.rateUserExperiences);
      _this.rates = yield _this.experienceService.getRatesAssistan(_this.idAssistant);
      console.log('RATES: ', _this.rates);
    })();
  }
  backPage() {
    this.router.navigate(['detail-exp']);
    //this.location.back();
    //this.navCtrl.back();
  }
  createTempArray(number) {
    var arr = [];
    for (let i = 0; i < number; i++) {
      arr[i] = "";
    }
    return arr;
  }
  setPositionStart(ini, delta, pos) {
    let posF = ini + delta * pos;
    return posF + 'px';
  }
  converterDatetoString(dateT) {
    const fec = new Date(dateT);
    const day = ('00' + fec.getDate()).slice(-2);
    const year = fec.getFullYear();
    const hours = ('00' + fec.getHours()).slice(-2);
    const minutes = ('00' + fec.getMinutes()).slice(-2);
    let t_date;
    if (this.translate.instant('PROF-DETAIL.lanCal') == 'es-MX') {
      t_date = day + ' ' + src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.meses.mesES[fec.getMonth()] + ', ' + year;
    } else {
      t_date = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.meses.mesEN[fec.getMonth()] + ' ' + day + ', ' + year;
    }
    return t_date;
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: src_app_services_experience_service__WEBPACK_IMPORTED_MODULE_5__.ExperienceService
    }];
  }
};
RatingsExperienceAssistantPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-ratings-experience-assistant',
  template: _ratings_experience_assistant_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_ratings_experience_assistant_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], RatingsExperienceAssistantPage);


/***/ }),

/***/ 96292:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/experience/ratings-experience-assistant/ratings-experience-assistant.page.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.btnBack {
  font-size: 18px;
  border-style: solid;
  height: 48px;
  width: 50px;
  color: var(--ion-color-negro);
  border-width: 1px;
  border-radius: 15px;
  margin-top: 20px;
  margin-left: 0px;
}

ion-icon {
  color: var(--ion-color-negro);
}

ion-avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.img-avatar {
  border: 2px solid var(--ion-color-primary1) !important;
}

.txtName {
  font-family: "Sk-Modernist-Bold";
  font-size: 24px;
  color: var(--ion-color-negro);
  margin: 0;
}

.content-starts {
  position: relative;
  width: 250px;
  height: 50px;
  margin-top: 17px;
  margin-left: auto;
  margin-right: auto;
}

.rate-start {
  position: absolute;
  font-size: 40px;
  color: var(--ion-color-primary1);
}

.rate-start-gris {
  position: absolute;
  font-size: 40px;
  color: var(--ion-color-gris1);
}

.date-rate {
  position: absolute;
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  border-left: 4px solid var(--ion-color-primary1);
  margin: 0;
  padding-left: 5px;
}

.div-start-lt {
  position: relative;
  margin-top: 4px;
  margin-left: 105px;
}

.rate-start-lt {
  position: absolute;
  width: 12px;
}

.comment-rate {
  font-family: "Sk-Modernist-Bold";
  font-size: 14px;
  color: var(--ion-color-gris1);
}`, "",{"version":3,"sources":["webpack://./src/app/pages/experience/ratings-experience-assistant/ratings-experience-assistant.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/experience/ratings-experience-assistant/ratings-experience-assistant.page.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,6BAAA;ACCJ;;ADEA;EACI,YAAA;EACA,aAAA;EACA,cAAA;ACCJ;;ADEA;EACI,sDAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,SAAA;ACCJ;;ADEA;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;ACCJ;;ADGA;EACI,kBAAA;EACA,eAAA;EACA,gCAAA;ACAJ;;ADGA;EACI,kBAAA;EACA,eAAA;EACA,6BAAA;ACAJ;;ADGA;EACI,kBAAA;EACA,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,gDAAA;EACA,SAAA;EACA,iBAAA;ACAJ;;ADGA;EACI,kBAAA;EACA,eAAA;EACA,kBAAA;ACAJ;;ADGA;EACI,kBAAA;EACA,WAAA;ACAJ;;ADGA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;ACAJ","sourcesContent":[".btnBack {\n    font-size: 18px;\n    border-style: solid;\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-negro);\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n    margin-left: 0px;\n}\n\nion-icon {\n    color: var(--ion-color-negro);\n}\n\nion-avatar { \n    width: 100px;  \n    height: 100px;\n    margin: 0 auto;\n}\n\n.img-avatar {\n    border: 2px solid var(--ion-color-primary1) !important;\n}\n\n.txtName {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\n.content-starts {\n    position: relative;\n    width: 250px;\n    height: 50px;\n    margin-top: 17px;\n    margin-left: auto;\n    margin-right: auto;\n    //margin-bottom: 20px;\n}\n\n.rate-start {\n    position: absolute;\n    font-size: 40px;\n    color: var(--ion-color-primary1);\n}\n\n.rate-start-gris {\n    position: absolute;\n    font-size: 40px;\n    color: var(--ion-color-gris1);\n}\n\n.date-rate {\n    position: absolute;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    border-left: 4px solid var(--ion-color-primary1);\n    margin: 0;\n    padding-left: 5px;\n}\n\n.div-start-lt {\n    position: relative;\n    margin-top: 4px;\n    margin-left: 105px;\n}\n\n.rate-start-lt {\n    position: absolute;\n    width: 12px;\n}\n\n.comment-rate {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    color: var(--ion-color-gris1);\n}",".btnBack {\n  font-size: 18px;\n  border-style: solid;\n  height: 48px;\n  width: 50px;\n  color: var(--ion-color-negro);\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 20px;\n  margin-left: 0px;\n}\n\nion-icon {\n  color: var(--ion-color-negro);\n}\n\nion-avatar {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n}\n\n.img-avatar {\n  border: 2px solid var(--ion-color-primary1) !important;\n}\n\n.txtName {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 24px;\n  color: var(--ion-color-negro);\n  margin: 0;\n}\n\n.content-starts {\n  position: relative;\n  width: 250px;\n  height: 50px;\n  margin-top: 17px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rate-start {\n  position: absolute;\n  font-size: 40px;\n  color: var(--ion-color-primary1);\n}\n\n.rate-start-gris {\n  position: absolute;\n  font-size: 40px;\n  color: var(--ion-color-gris1);\n}\n\n.date-rate {\n  position: absolute;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  border-left: 4px solid var(--ion-color-primary1);\n  margin: 0;\n  padding-left: 5px;\n}\n\n.div-start-lt {\n  position: relative;\n  margin-top: 4px;\n  margin-left: 105px;\n}\n\n.rate-start-lt {\n  position: absolute;\n  width: 12px;\n}\n\n.comment-rate {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 14px;\n  color: var(--ion-color-gris1);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74200:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/experience/ratings-experience-assistant/ratings-experience-assistant.page.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar  style=\"--background: none;\">\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"btnBack\" (click)=\"backPage()\">\n        <ion-icon name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"blanco\" fullscreen>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-avatar>\n          <img class=\"img-avatar\" src={{imageAssistant}} />\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <p class=\"txtName\">{{nameAssistant}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-bottom: 5px;\">\n      <ion-col>\n        <div class=\"content-starts\">\n          <div *ngFor=\"let itm of createTempArray(5); let i = index\">\n            <!-- <img class=\"rate-start\" src=\"../../../assets/icon/16-Star.png\" [style.left]=\"setPositionStart(5, i)\"> -->\n            <ion-icon class=\"rate-start\" name=\"star\" [style.left]=\"setPositionStart(5, 52, i)\" *ngIf=\"i < rateAssistant\"></ion-icon>\n            <ion-icon class=\"rate-start-gris\" name=\"star-outline\" [style.left]=\"setPositionStart(5, 52, i)\" *ngIf=\"i >= rateAssistant\"></ion-icon>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ng-container *ngFor=\"let rate of rates\">\n      <ion-row>\n        <ion-col>\n          <p class=\"date-rate\">{{converterDatetoString(rate?.dateRate)}}</p>\n          <div class=\"div-start-lt\" *ngFor=\"let itm of createTempArray(rate?.rate); let i = index\">\n            <img class=\"rate-start-lt\" src=\"../../../assets/icon/16-Star.png\" [style.left]=\"setPositionStart(5, 15, i)\">\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p class=\"comment-rate\">{{rate?.commentRate}}</p>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n\n  </ion-grid>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_experience_ratings-experience-assistant_ratings-experience-assistant_module_ts.js.map