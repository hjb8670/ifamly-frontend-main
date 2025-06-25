(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_forgot-password_forgot-password_module_ts"],{

/***/ 50120:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPageRoutingModule: () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 99504);




const routes = [{
  path: '',
  component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
}];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ForgotPasswordPageRoutingModule);


/***/ }),

/***/ 30332:
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPageModule: () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 50120);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 99504);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let ForgotPasswordPageModule = class ForgotPasswordPageModule {};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
})], ForgotPasswordPageModule);


/***/ }),

/***/ 99504:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPage: () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 95964);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 30216);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ 90628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/constants */ 57724);











let ForgotPasswordPage = class ForgotPasswordPage {
  constructor(translate, formBuilder, uiService, userService, router) {
    this.translate = translate;
    this.formBuilder = formBuilder;
    this.uiService = uiService;
    this.userService = userService;
    this.router = router;
    this.passwordForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    });
    this.validation_messages = {
      'email': [{
        type: 'required',
        message: 'msgErrReqEmail'
      }, {
        type: 'pattern',
        message: 'msgErrPattEmail'
      }]
    };
    this.lang = "";
  }
  get email() {
    return this.passwordForm.get('email');
  }
  ngOnInit() {
    if (this.translate.currentLang == 'es') {
      this.lang = src_environments_constants__WEBPACK_IMPORTED_MODULE_5__.constants.languages.es;
    } else {
      this.lang = src_environments_constants__WEBPACK_IMPORTED_MODULE_5__.constants.languages.en;
    }
  }
  next() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.email);
      if (_this.validaCampo(_this.email, _this.validation_messages.email)) {
        return;
      }
      let res = yield _this.userService.resetPasssword(_this.email.value, _this.lang);
      if (res === 500) {
        _this.uiService.alertOK(_this.translate.instant("REC_PASS.resetPasswordError"));
        return;
      } else if (res === 421) {
        _this.uiService.alertOK_CANCEL(_this.translate.instant("REC_PASS.emailNotFound"));
        return;
      }
      yield _this.uiService.alertOK_CANCEL(_this.translate.instant("REC_PASS.resetPassword"));
      _this.router.navigate(['login']);
    })();
  }
  validaCampo(campo, message) {
    for (let validation of message) {
      if (campo.hasError(validation.type)) {
        this.uiService.alertOK(this.translate.instant('LOGIN.' + validation.message));
        return true;
      }
    }
    return false;
  }
  static {
    this.ctorParameters = () => [{
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }];
  }
};
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-forgot-password',
  template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ForgotPasswordPage);


/***/ }),

/***/ 30216:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-content {
  --padding-top: 15%;
  --padding-start: 5%;
  --padding-end: 5%;
  --padding-bottom: 5%;
}

h1 {
  font-family: "Sk-Modernist-Bold";
  font-size: 30px;
  margin-top: 0px;
  margin-bottom: -10px;
  text-align: center;
}

.camposLabel-CItem {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
}
.camposLabel-CItem.label-floating {
  font-family: "Sk-Modernist-Regular";
  font-size: 17px;
  color: var(--ion-color-negro) !important;
  max-width: -moz-fit-content !important;
  max-width: fit-content !important;
  margin-top: -6px;
}

.next-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
  width: 100%;
  height: 40px;
  --border-radius: 10px;
  --box-shadow:none;
  margin-top: 20px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/auth/forgot-password/forgot-password.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/auth/forgot-password/forgot-password.page.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,eAAA;EACA,oBAAA;EACA,kBAAA;ACCJ;;ADEA;EACI,mCAAA;EACA,eAAA;ACCJ;ADCI;EACI,mCAAA;EACA,eAAA;EACA,wCAAA;EACA,sCAAA;EAAA,iCAAA;EACA,gBAAA;ACCR;;ADGA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;ACAJ","sourcesContent":["ion-content {\n    --padding-top: 15%;\n    --padding-start: 5%;\n    --padding-end: 5%;\n    --padding-bottom: 5%;\n}\n\nh1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 30px;\n    margin-top: 0px;\n    margin-bottom: -10px;\n    text-align: center;\n}\n\n.camposLabel-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    \n    &.label-floating {\n        font-family: 'Sk-Modernist-Regular';\n        font-size: 17px;\n        color: var(--ion-color-negro) !important;\n        max-width: fit-content !important;\n        margin-top: -6px;\n    }\n}\n\n.next-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 40px;\n    --border-radius: 10px;\n    --box-shadow:none;\n    margin-top: 20px;\n}","ion-content {\n  --padding-top: 15%;\n  --padding-start: 5%;\n  --padding-end: 5%;\n  --padding-bottom: 5%;\n}\n\nh1 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 30px;\n  margin-top: 0px;\n  margin-bottom: -10px;\n  text-align: center;\n}\n\n.camposLabel-CItem {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n}\n.camposLabel-CItem.label-floating {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 17px;\n  color: var(--ion-color-negro) !important;\n  max-width: fit-content !important;\n  margin-top: -6px;\n}\n\n.next-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 40px;\n  --border-radius: 10px;\n  --box-shadow:none;\n  margin-top: 20px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 95964:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"login\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <div id=\"sign-in-button\"></div>\n  <form [formGroup]=\"passwordForm\" (ngSubmit)=\"next()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"title-h1\">{{ 'REC_PASS.TitleTxt' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"text-p\">{{ 'REC_PASS.Text' | translate }}</p>\n        </ion-col>\n      </ion-row>\n\n       <ion-row mode=\"md\">\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'REC_PASS.EmailLabel' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"email\" type=\"text\" inputmode=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-button class=\"next-Bt\" color=\"primary1\" type=\"submit\">\n          {{ 'REC_PASS.btnNext' | translate }}\n        </ion-button>\n      </ion-row>  \n\n    </ion-grid>\n\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_forgot-password_forgot-password_module_ts.js.map