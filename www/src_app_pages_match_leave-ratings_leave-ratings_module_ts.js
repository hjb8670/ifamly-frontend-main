(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_match_leave-ratings_leave-ratings_module_ts"],{

/***/ 72472:
/*!***************************************************************************!*\
  !*** ./src/app/pages/match/leave-ratings/leave-ratings-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaveRatingsPageRoutingModule: () => (/* binding */ LeaveRatingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _leave_ratings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-ratings.page */ 19996);




const routes = [{
  path: '',
  component: _leave_ratings_page__WEBPACK_IMPORTED_MODULE_0__.LeaveRatingsPage
}];
let LeaveRatingsPageRoutingModule = class LeaveRatingsPageRoutingModule {};
LeaveRatingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LeaveRatingsPageRoutingModule);


/***/ }),

/***/ 90396:
/*!*******************************************************************!*\
  !*** ./src/app/pages/match/leave-ratings/leave-ratings.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaveRatingsPageModule: () => (/* binding */ LeaveRatingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var ion_rating_stars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion-rating-stars */ 93508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _leave_ratings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-ratings-routing.module */ 72472);
/* harmony import */ var _leave_ratings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-ratings.page */ 19996);









let LeaveRatingsPageModule = class LeaveRatingsPageModule {};
LeaveRatingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, ion_rating_stars__WEBPACK_IMPORTED_MODULE_7__.IonRatingStarsComponent, _leave_ratings_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveRatingsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
  declarations: [_leave_ratings_page__WEBPACK_IMPORTED_MODULE_1__.LeaveRatingsPage]
})], LeaveRatingsPageModule);


/***/ }),

/***/ 19996:
/*!*****************************************************************!*\
  !*** ./src/app/pages/match/leave-ratings/leave-ratings.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaveRatingsPage: () => (/* binding */ LeaveRatingsPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _leave_ratings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-ratings.page.html?ngResource */ 32648);
/* harmony import */ var _leave_ratings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-ratings.page.scss?ngResource */ 52216);
/* harmony import */ var _leave_ratings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_leave_ratings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/match.service */ 5876);










let LeaveRatingsPage = class LeaveRatingsPage {
  constructor(formBuilder, activatedRoute, router, translate, uiService, matchService) {
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.translate = translate;
    this.uiService = uiService;
    this.matchService = matchService;
    this.presentarErroresCampos = false;
    this.matchId = '';
    this.otherPerson = '';
    this.name = '';
    this.lastName = '';
    this.imgCover = '../../../assets/icon/30-Default_no-image.jpeg';
    this.rate = 0;
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
        this.matchId = this.router.getCurrentNavigation().extras.state.matchId;
        this.otherPerson = this.router.getCurrentNavigation().extras.state.otherPerson;
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.lastName = this.router.getCurrentNavigation().extras.state.lastName;
        this.imgCover = this.router.getCurrentNavigation().extras.state.image;
        console.log('MATCH-ID: ', this.matchId);
        console.log('NAME: ', this.name + this.lastName);
        console.log('IMG COVER: ', this.imgCover);
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
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      const res = yield _this.matchService.setFeedback(Number(_this.otherPerson), _this.rate, _this.comment.value);
      _this.uiService.hideLoader();
      if (!res) {
        _this.uiService.alertOK(_this.translate.instant('LEAVE-RATING.errResFeedback'));
        return;
      } else {
        let navegationExtras = {
          state: {
            otherPerson: _this.otherPerson,
            matchId: _this.matchId,
            image: _this.imgCover
          }
        };
        _this.router.navigate(['ratings'], navegationExtras);
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
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_4__.MatchService
    }];
  }
};
LeaveRatingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-leave-ratings',
  template: _leave_ratings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_leave_ratings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LeaveRatingsPage);


/***/ }),

/***/ 52216:
/*!******************************************************************************!*\
  !*** ./src/app/pages/match/leave-ratings/leave-ratings.page.scss?ngResource ***!
  \******************************************************************************/
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
}`, "",{"version":3,"sources":["webpack://./src/app/pages/match/leave-ratings/leave-ratings.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/match/leave-ratings/leave-ratings.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,YAAA;EACA,aAAA;EACA,cAAA;ACCJ;;ADEA;EACI,sDAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,SAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,kBAAA;EACA,gBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EACA,aAAA;ACCJ;ADCI;EACI,8BAAA;EACA,4BAAA;EACA,8BAAA;ACCR;;ADGA;EACI,YAAA;ACAJ;;ADGA;EACI,4BAAA;ACAJ;;ADGA;EACI,mCAAA;EACA,eAAA;ACAJ;;ADGA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,YAAA;EACA,qBAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;ACAJ","sourcesContent":["ion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n}\n\nion-avatar { \n    width: 100px;  \n    height: 100px;\n    margin: 0 auto;\n}\n\n.img-avatar {\n    border: 2px solid var(--ion-color-primary1) !important;\n}\n\n.txtName {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\n.fieldTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-top: 20px;\n}\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --padding-top: 3px;\n    margin-top: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    height: 170px;\n\n    &.item-shape-round {\n        border-style: solid !important;\n        border-width: 1px !important;\n        border-radius: 10px !important; \n    }\n}\n\nion-item::part(native) {\n    border: none;\n}\n\n.item-highlight {\n    border-width: 0px !important;\n}\n\n.input-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n}\n\n.submit-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    text-transform: none;\n    height: 60px;\n    --border-style: solid;\n    --border-width: 1px;\n    --border-radius: 15px;\n    --box-shadow: none;\n    margin-top: 80px;\n}","ion-back-button {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 20px;\n}\n\nion-avatar {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n}\n\n.img-avatar {\n  border: 2px solid var(--ion-color-primary1) !important;\n}\n\n.txtName {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 24px;\n  color: var(--ion-color-negro);\n  margin: 0;\n}\n\n.fieldTitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  margin-top: 20px;\n}\n\nion-item {\n  --background: var(--ion-color-blanco);\n  --color: var(--ion-color-negro);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --padding-top: 3px;\n  margin-top: 15px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n  height: 170px;\n}\nion-item.item-shape-round {\n  border-style: solid !important;\n  border-width: 1px !important;\n  border-radius: 10px !important;\n}\n\nion-item::part(native) {\n  border: none;\n}\n\n.item-highlight {\n  border-width: 0px !important;\n}\n\n.input-CItem {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n}\n\n.submit-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 14px;\n  text-transform: none;\n  height: 60px;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-radius: 15px;\n  --box-shadow: none;\n  margin-top: 80px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 32648:
/*!******************************************************************************!*\
  !*** ./src/app/pages/match/leave-ratings/leave-ratings.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"detail-match\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"blanco\" fullscreen>\n  <form [formGroup]=\"leaveRForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-avatar>\n            <img class=\"img-avatar\" src={{imgCover}} />\n          </ion-avatar>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <p class=\"txtName\">{{name}} {{lastName}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 15px; margin-left:16px;\">\n        <ion-col class=\"ion-text-center\">\n          <ion-rating-stars\n            [rating]=\"0\"\n            color=\"var(--ion-color-gris1)\"\n            filledColor=\"var(--ion-color-primary1)\"\n            [margin]=\"10\"\n            [size]=\"42\"\n            [disabled]=\"false\"\n            (ratingChange)=\"ratingChanged($event)\">\n          </ion-rating-stars>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"fieldTitle\">{{ 'LEAVE-RATING.ExpComment' | translate }}</p>\n          <ion-item shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-textarea class=\"input-CItem\" formControlName=\"comment\" inputmode=\"text\" placeholder=\"{{ 'LEAVE-RATING.phComment' | translate }}\" rows=\"6\" required></ion-textarea>\n          </ion-item>\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.comment\">\n              <div class=\"error-message\" *ngIf=\"comment.hasError(validation.type) && (comment.dirty || comment.touched)\">\n                <small class=\"error-message\">{{ 'LEAVE-RATING.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"submit-Bt\" color=\"primary1\" type=\"submit\">\n            {{ 'LEAVE-RATING.btnSubmit' | translate }}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_match_leave-ratings_leave-ratings_module_ts.js.map