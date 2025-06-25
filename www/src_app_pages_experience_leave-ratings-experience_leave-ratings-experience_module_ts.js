(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_experience_leave-ratings-experience_leave-ratings-experience_module_ts"],{

/***/ 11028:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/experience/leave-ratings-experience/leave-ratings-experience-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaveRatingsExperiencePageRoutingModule: () => (/* binding */ LeaveRatingsExperiencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _leave_ratings_experience_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-ratings-experience.page */ 91000);




const routes = [{
  path: '',
  component: _leave_ratings_experience_page__WEBPACK_IMPORTED_MODULE_0__.LeaveRatingsExperiencePage
}];
let LeaveRatingsExperiencePageRoutingModule = class LeaveRatingsExperiencePageRoutingModule {};
LeaveRatingsExperiencePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LeaveRatingsExperiencePageRoutingModule);


/***/ }),

/***/ 12140:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/experience/leave-ratings-experience/leave-ratings-experience.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaveRatingsExperiencePageModule: () => (/* binding */ LeaveRatingsExperiencePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var ion_rating_stars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion-rating-stars */ 93508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _leave_ratings_experience_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-ratings-experience-routing.module */ 11028);
/* harmony import */ var _leave_ratings_experience_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-ratings-experience.page */ 91000);









let LeaveRatingsExperiencePageModule = class LeaveRatingsExperiencePageModule {};
LeaveRatingsExperiencePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _leave_ratings_experience_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveRatingsExperiencePageRoutingModule, ion_rating_stars__WEBPACK_IMPORTED_MODULE_7__.IonRatingStarsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  declarations: [_leave_ratings_experience_page__WEBPACK_IMPORTED_MODULE_1__.LeaveRatingsExperiencePage]
})], LeaveRatingsExperiencePageModule);


/***/ }),

/***/ 91000:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/experience/leave-ratings-experience/leave-ratings-experience.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaveRatingsExperiencePage: () => (/* binding */ LeaveRatingsExperiencePage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _leave_ratings_experience_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-ratings-experience.page.html?ngResource */ 70504);
/* harmony import */ var _leave_ratings_experience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-ratings-experience.page.scss?ngResource */ 2488);
/* harmony import */ var _leave_ratings_experience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_leave_ratings_experience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/experience.service */ 29340);










let LeaveRatingsExperiencePage = class LeaveRatingsExperiencePage {
  constructor(formBuilder, activatedRoute, router, translate, uiService, experienceService) {
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.translate = translate;
    this.uiService = uiService;
    this.experienceService = experienceService;
    this.presentarErroresCampos = false;
    this.idExperience = '';
    this.nameExp = '';
    this.fechaExp = '';
    this.imgCover = '../../../assets/icon/30-Default_no-image.jpeg';
    this.rate = 0;
    this.idHost = '';
    this.nameHost = '';
    this.lastNameHost = '';
    this.imageHost = '';
    this.leaveRForm = this.formBuilder.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
    this.validation_messages = {
      'comment': [{
        type: 'required',
        message: 'msgErrReqMsg'
      }]
    };
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.idExperience = this.router.getCurrentNavigation().extras.state.idExperience;
        this.nameExp = this.router.getCurrentNavigation().extras.state.nameExp;
        this.fechaExp = this.router.getCurrentNavigation().extras.state.fechaExp;
        this.imgCover = this.router.getCurrentNavigation().extras.state.image;
        this.idHost = this.router.getCurrentNavigation().extras.state.idHost;
        this.nameHost = this.router.getCurrentNavigation().extras.state.nameHost;
        this.lastNameHost = this.router.getCurrentNavigation().extras.state.lastNameHost;
        this.imageHost = this.router.getCurrentNavigation().extras.state.imageHost;
        console.log('NAME: ', this.nameExp);
        console.log('DATE: ', this.fechaExp);
        console.log('IMG COVER: ', this.imgCover);
        console.log('ID HOST: ', this.idHost);
        console.log('NAME HOST: ', this.nameHost);
        console.log('LAST NAME HOST: ', this.lastNameHost);
        console.log('IMG HOST: ', this.imageHost);
      }
    });
  }
  ngOnInit() {}
  get comment() {
    return this.leaveRForm.get('comment');
  }
  validaCampo(campo, message) {
    for (let validation of message) {
      if (campo.hasError(validation.type)) {
        console.log(this.translate.instant('LEAVE-RATING.' + validation.message));
        this.uiService.alertOK(this.translate.instant('LEAVE-RATING.' + validation.message));
        return true;
      }
    }
    return false;
  }
  ratingChanged(valRating) {
    this.rate = valRating;
  }
  onSubmit() {
    var _this = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('COMMENT: ', _this.comment.value);
      console.log('RATE', _this.rate);
      if (_this.rate == 0) {
        _this.uiService.alertOK(_this.translate.instant('LEAVE-RATING.msgErrReqRate'));
        return;
      }
      if (_this.validaCampo(_this.comment, _this.validation_messages.comment)) {
        return;
      }
      _this.uiService.showLoader();
      const res = yield _this.experienceService.setFeedbackExperience(_this.idExperience, _this.rate, _this.comment.value);
      _this.uiService.hideLoader();
      if (!res) {
        _this.uiService.alertOK(_this.translate.instant('LEAVE-RATING.errResFeedback'));
        return;
      } else {
        let navegationExtras = {
          state: {
            /* idExperience: this.idExperience,
            nameExp: this.nameExp,
            fechaExp: this.fechaExp,
            image: this.imgCover */
            idHost: _this.idHost,
            nameHost: _this.nameHost,
            lastNameHost: _this.lastNameHost,
            imageHost: _this.imageHost
          }
        };
        _this.router.navigate(['ratings-experience'], navegationExtras);
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService
    }, {
      type: _services_experience_service__WEBPACK_IMPORTED_MODULE_4__.ExperienceService
    }];
  }
};
LeaveRatingsExperiencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-leave-ratings-experience',
  template: _leave_ratings_experience_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_leave_ratings_experience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LeaveRatingsExperiencePage);


/***/ }),

/***/ 2488:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/experience/leave-ratings-experience/leave-ratings-experience.page.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-back-button {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  margin-top: 20px;
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

.txtFecha {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin-top: 0;
  margin-bottom: 5px;
}

.fieldTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-top: 20px;
}

ion-item {
  --background: var(--ion-color-blanco);
  --color: var(--ion-color-negro);
  --color-focused: var(--ion-color-negro);
  --border-width: 1px !important;
  --padding-top: 3px;
  margin-top: 15px;
  --highlight-color-invalid: none;
  --highlight-color-valid: none;
  --highlight-color-focused: none !important;
  height: 170px;
}
ion-item.item-shape-round {
  border-style: solid !important;
  border-width: 1px !important;
  border-radius: 10px !important;
}

ion-item::part(native) {
  border: none;
}

.item-highlight {
  border-width: 0px !important;
}

.input-CItem {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
}

.submit-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 14px;
  text-transform: none;
  height: 60px;
  --border-style: solid;
  --border-width: 1px;
  --border-radius: 15px;
  --box-shadow: none;
  margin-top: 80px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/experience/leave-ratings-experience/leave-ratings-experience.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,YAAA;EACA,aAAA;EACA,cAAA;AACJ;;AAEA;EACI,sDAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,SAAA;AACJ;;AAEA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,aAAA;EACA,kBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;AACJ;;AAEA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,kBAAA;EACA,gBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EACA,aAAA;AACJ;AACI;EACI,8BAAA;EACA,4BAAA;EACA,8BAAA;AACR;;AAGA;EACI,YAAA;AAAJ;;AAGA;EACI,4BAAA;AAAJ;;AAGA;EACI,mCAAA;EACA,eAAA;AAAJ;;AAGA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,YAAA;EACA,qBAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;AAAJ","sourcesContent":["ion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n}\n\nion-avatar { \n    width: 100px;  \n    height: 100px;\n    margin: 0 auto;\n}\n\n.img-avatar {\n    border: 2px solid var(--ion-color-primary1) !important;\n}\n\n.txtName {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\n.txtFecha {\n    font-family: \"Sk-Modernist-Regular\";\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n\n.fieldTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-top: 20px;\n}\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --padding-top: 3px;\n    margin-top: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    height: 170px;\n\n    &.item-shape-round {\n        border-style: solid !important;\n        border-width: 1px !important;\n        border-radius: 10px !important; \n    }\n}\n\nion-item::part(native) {\n    border: none;\n}\n\n.item-highlight {\n    border-width: 0px !important;\n}\n\n.input-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n}\n\n.submit-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    text-transform: none;\n    height: 60px;\n    --border-style: solid;\n    --border-width: 1px;\n    --border-radius: 15px;\n    --box-shadow: none;\n    margin-top: 80px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 70504:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/experience/leave-ratings-experience/leave-ratings-experience.page.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\">\n  <ion-toolbar style=\"--background: none;\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"detail-exp\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"blanco\" fullscreen>\n  <form [formGroup]=\"leaveRForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-avatar>\n            <img class=\"img-avatar\" src={{imgCover}} />\n          </ion-avatar>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <p class=\"txtName\">{{nameExp}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <p class=\"txtFecha\">{{ fechaExp | date:'dd LLL, yyyy @ hh:mm aa' }}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 15px; margin-left:16px;\">\n        <ion-col class=\"ion-text-center\">\n          <ion-rating-stars\n            [rating]=\"0\"\n            color=\"var(--ion-color-gris1)\"\n            filledColor=\"var(--ion-color-primary1)\"\n            [margin]=\"10\"\n            [size]=\"42\"\n            [disabled]=\"false\"\n            (ratingChange)=\"ratingChanged($event)\">\n          </ion-rating-stars>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"fieldTitle\">{{ 'LEAVE-RATING.ExpComment' | translate }}</p>\n          <ion-item shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-textarea class=\"input-CItem\" formControlName=\"comment\" inputmode=\"text\" placeholder=\"{{ 'LEAVE-RATING.phComment' | translate }}\" rows=\"6\" required></ion-textarea>\n          </ion-item>\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.comment\">\n              <div class=\"error-message\" *ngIf=\"comment.hasError(validation.type) && (comment.dirty || comment.touched)\">\n                <small class=\"error-message\">{{ 'LEAVE-RATING.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"submit-Bt\" color=\"primary1\" type=\"submit\">\n            {{ 'LEAVE-RATING.btnSubmit' | translate }}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_experience_leave-ratings-experience_leave-ratings-experience_module_ts.js.map