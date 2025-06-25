(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_extras_change-password_change-password_module_ts"],{

/***/ 15699:
/*!********************************************************************************!*\
  !*** ./src/app/pages/extras/change-password/change-password-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordPageRoutingModule: () => (/* binding */ ChangePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page */ 3132);




const routes = [{
  path: '',
  component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPage
}];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {};
ChangePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ChangePasswordPageRoutingModule);


/***/ }),

/***/ 44480:
/*!************************************************************************!*\
  !*** ./src/app/pages/extras/change-password/change-password.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordPageModule: () => (/* binding */ ChangePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-routing.module */ 15699);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page */ 3132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let ChangePasswordPageModule = class ChangePasswordPageModule {};
ChangePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPage]
})], ChangePasswordPageModule);


/***/ }),

/***/ 3132:
/*!**********************************************************************!*\
  !*** ./src/app/pages/extras/change-password/change-password.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordPage: () => (/* binding */ ChangePasswordPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page.html?ngResource */ 5864);
/* harmony import */ var _change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.page.scss?ngResource */ 75960);
/* harmony import */ var _change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ 90628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 24040);










let ChangePasswordPage = class ChangePasswordPage {
  constructor(translate, formBuilder, uiService, userService, router) {
    this.translate = translate;
    this.formBuilder = formBuilder;
    this.uiService = uiService;
    this.userService = userService;
    this.router = router;
    //public usrApp: User;
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.regexValidator(new RegExp('(?=.*[a-z]).*$'), {
        '1lowercase': true
      }), this.regexValidator(new RegExp('(?=.*[A-Z]).*$'), {
        '1uppercase': true
      }), this.regexValidator(new RegExp('(?=.*[0-9]).*$'), {
        '1number': true
      }), this.regexValidator(new RegExp('(?=.*[#?!@$%^&*-+]).*$'), {
        '1especial': true
      }), this.regexValidator(new RegExp('.{8,}$'), {
        'longmin': true
      })]],
      confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.regexValidator(new RegExp('(?=.*[a-z]).*$'), {
        '1lowercase': true
      }), this.regexValidator(new RegExp('(?=.*[A-Z]).*$'), {
        '1uppercase': true
      }), this.regexValidator(new RegExp('(?=.*[0-9]).*$'), {
        '1number': true
      }), this.regexValidator(new RegExp('(?=.*[#?!@$%^&*-+]).*$'), {
        '1especial': true
      }), this.regexValidator(new RegExp('.{8,}$'), {
        'longmin': true
      })]],
      view: false,
      viewOld: false,
      viewC: false
    });
    this.validation_messages = {
      'oldPassword': [{
        type: 'required',
        message: 'msgErrReqOldPassword'
      }],
      'password': [{
        type: 'required',
        message: 'msgErrReqPassword'
      }, {
        type: '1lowercase',
        message: 'msgErrMin'
      }, {
        type: '1uppercase',
        message: 'msgErrMay'
      }, {
        type: '1number',
        message: 'msgErrNum'
      }, {
        type: '1especial',
        message: 'msgErrCarc'
      }, {
        type: 'longmin',
        message: 'msgErrLongMin'
      }],
      'confirm': [{
        type: 'required',
        message: 'msgErrReqConfirm'
      }, {
        type: '1lowercase',
        message: 'msgErrMin'
      }, {
        type: '1uppercase',
        message: 'msgErrMay'
      }, {
        type: '1number',
        message: 'msgErrNum'
      }, {
        type: '1especial',
        message: 'msgErrCarc'
      }, {
        type: 'longmin',
        message: 'msgErrLongMin'
      }]
    };
    this.oldPassword.setValue("");
    this.password.setValue("");
    this.confirm.setValue("");
  }
  get password() {
    return this.passwordForm.get('password');
  }
  get oldPassword() {
    return this.passwordForm.get('oldPassword');
  }
  get confirm() {
    return this.passwordForm.get('confirm');
  }
  get view() {
    return this.passwordForm.get('view');
  }
  get viewOld() {
    return this.passwordForm.get('viewOld');
  }
  get viewC() {
    return this.passwordForm.get('viewC');
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.uiService.showLoader();
      const tVal = yield _this.userService.validaToken();
      if (!tVal) {
        _this.uiService.hideLoader();
        return;
      }
      //this.usrApp = await this.userService.getUser('');
      _this.uiService.hideLoader();
    })();
  }
  next() {
    var _this2 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //if(this.validaCampo(this.password, this.validation_messages.password) || this.validaCampo(this.confirm, this.validation_messages.confirm)){
      console.log(_this2.passwordForm);
      if (_this2.passwordForm.status === 'INVALID') {
        _this2.oldPassword.markAsTouched();
        _this2.password.markAsTouched();
        _this2.confirm.markAsTouched();
        return;
      } else if (_this2.password.value !== _this2.confirm.value) {
        _this2.uiService.alertOK(_this2.translate.instant('CHANGE_PASS.msgErrEqualPassword'));
        return;
      } else if (_this2.password.value === _this2.oldPassword.value) {
        _this2.uiService.alertOK(_this2.translate.instant('CHANGE_PASS.msgErrEqualOldPassword'));
        return;
      }
      let usr = {
        password: _this2.password.value,
        oldPassword: _this2.oldPassword.value
      };
      _this2.uiService.showLoader();
      let res = yield _this2.userService.changePassword(usr);
      console.log(res);
      let mensaje = res === 1 ? _this2.translate.instant('CHANGE_PASS.ChangePassword') : res === 427 ? _this2.translate.instant('CHANGE_PASS.msgErrOldPassword') : _this2.translate.instant('CHANGE_PASS.ChangePasswordError');
      _this2.uiService.hideLoader();
      yield _this2.uiService.alertOK_CANCEL(mensaje);
      if (res === 1) {
        _this2.router.navigate(['settings-account']);
      }
    })();
  }
  /*validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        this.uiService.alertOK(this.translate.instant('CHANGE_PASS.'+validation.message));
        return true;
      }
    }
    return false;
  }*/
  regexValidator(regex, error) {
    return control => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
  verContra(control) {
    this.passwordForm.get(control).setValue(!this.passwordForm.get(control).value);
  }
  static {
    this.ctorParameters = () => [{
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }];
  }
};
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-change-password',
  template: _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ChangePasswordPage);


/***/ }),

/***/ 75960:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/extras/change-password/change-password.page.scss?ngResource ***!
  \***********************************************************************************/
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

.error-message {
  font-family: "Sk-Modernist-Regular";
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--ion-color-negro);
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
}

.img-view {
  width: 39px;
  margin: 0;
  margin-bottom: 10px;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/extras/change-password/change-password.page.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,eAAA;EACA,oBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,mCAAA;EACA,eAAA;AACJ;AACI;EACI,mCAAA;EACA,eAAA;EACA,wCAAA;EACA,sCAAA;EAAA,iCAAA;EACA,gBAAA;AACR;;AAGA;EACI,mCAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,6BAAA;AAAJ;;AAGA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;AAAJ","sourcesContent":["ion-content {\n    --padding-top: 15%;\n    --padding-start: 5%;\n    --padding-end: 5%;\n    --padding-bottom: 5%;\n}\n\nh1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 30px;\n    margin-top: 0px;\n    margin-bottom: -10px;\n    text-align: center;\n}\n\n.camposLabel-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    \n    &.label-floating {\n        font-family: 'Sk-Modernist-Regular';\n        font-size: 17px;\n        color: var(--ion-color-negro) !important;\n        max-width: fit-content !important;\n        margin-top: -6px;\n    }\n}\n\n.error-message {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 15px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    color: var(--ion-color-negro); \n}\n\n.next-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 40px;\n    --border-radius: 10px;\n    --box-shadow:none;\n    margin-top: 20px;\n}\n\n.img-view{\n    width: 39px;\n    margin: 0;\n    margin-bottom: 10px;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5864:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/extras/change-password/change-password.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"settings-account\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <div id=\"sign-in-button\"></div>\n  <form [formGroup]=\"passwordForm\" (ngSubmit)=\"next()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"title-h1\">{{ 'CHANGE_PASS.TitleTxt' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"text-p\">{{ 'CHANGE_PASS.Text' | translate }}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row mode=\"md\">\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'CHANGE_PASS.OldPassword' | translate }}</ion-label> \n            <ion-input class=\"camposLabel-CItem\" formControlName=\"oldPassword\" type=\"{{!this.passwordForm.get('viewOld').value ? 'password' : 'text'}}\" inputmode=\"password\"></ion-input>\n            <ion-img class=\"img-view\" slot=\"end\" src=\"../../../../assets/icon/view.png\" (click)=\"verContra('viewOld')\"></ion-img>\n          </ion-item>\n          <div class=\"validation-errors\" style=\"margin-top: 8px;\" >\n            <ng-container *ngFor=\"let validation of validation_messages.oldPassword\">\n              <div class=\"error-message\" *ngIf=\"oldPassword.hasError(validation.type) && (oldPassword.dirty || oldPassword.touched)\">\n                <small class=\"error-message\">{{ 'CHANGE_PASS.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row mode=\"md\">\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'CHANGE_PASS.Password' | translate }}</ion-label> \n            <ion-input class=\"camposLabel-CItem\" formControlName=\"password\" type=\"{{!this.passwordForm.get('view').value ? 'password' : 'text'}}\" inputmode=\"password\"></ion-input>\n            <ion-img class=\"img-view\" slot=\"end\" src=\"../../../../assets/icon/view.png\" (click)=\"verContra('view')\"></ion-img>\n          </ion-item>\n          <div class=\"validation-errors\" style=\"margin-top: 8px;\" >\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n              <div class=\"error-message\" *ngIf=\"password.hasError(validation.type) && (password.dirty || password.touched)\">\n                <small class=\"error-message\">{{ 'CHANGE_PASS.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row mode=\"md\">\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'CHANGE_PASS.Confirm' | translate }}</ion-label> \n            <ion-input class=\"camposLabel-CItem\" formControlName=\"confirm\" type=\"{{!this.passwordForm.get('viewC').value ? 'password' : 'text'}}\" inputmode=\"password\"></ion-input>\n            <ion-img class=\"img-view\" slot=\"end\" src=\"../../../../assets/icon/view.png\" (click)=\"verContra('viewC')\"></ion-img>\n          </ion-item>\n          <div class=\"validation-errors\" style=\"margin-top: 8px;\" >\n            <ng-container *ngFor=\"let validation of validation_messages.confirm\">\n              <div class=\"error-message\" *ngIf=\"confirm.hasError(validation.type) && (confirm.dirty || confirm.touched)\">\n                <small class=\"error-message\">{{ 'CHANGE_PASS.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-button class=\"next-Bt\" color=\"primary1\" type=\"submit\">\n          {{ 'CHANGE_PASS.btnNext' | translate }}\n        </ion-button>\n      </ion-row>  \n\n    </ion-grid>\n\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_extras_change-password_change-password_module_ts.js.map