(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_settings-account_settings-account_module_ts"],{

/***/ 48572:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/account/settings-account/settings-account-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsAccountPageRoutingModule: () => (/* binding */ SettingsAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _settings_account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-account.page */ 65640);




const routes = [{
  path: '',
  component: _settings_account_page__WEBPACK_IMPORTED_MODULE_0__.SettingsAccountPage
}];
let SettingsAccountPageRoutingModule = class SettingsAccountPageRoutingModule {};
SettingsAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SettingsAccountPageRoutingModule);


/***/ }),

/***/ 97768:
/*!***************************************************************************!*\
  !*** ./src/app/pages/account/settings-account/settings-account.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsAccountPageModule: () => (/* binding */ SettingsAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _settings_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-account-routing.module */ 48572);
/* harmony import */ var _settings_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-account.page */ 65640);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let SettingsAccountPageModule = class SettingsAccountPageModule {};
SettingsAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _settings_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsAccountPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_settings_account_page__WEBPACK_IMPORTED_MODULE_1__.SettingsAccountPage]
})], SettingsAccountPageModule);


/***/ }),

/***/ 65640:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/settings-account/settings-account.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsAccountPage: () => (/* binding */ SettingsAccountPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _settings_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-account.page.html?ngResource */ 24344);
/* harmony import */ var _settings_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-account.page.scss?ngResource */ 18468);
/* harmony import */ var _settings_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_settings_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_app_services_google_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/google-sign-in.service */ 24572);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 90628);
/* harmony import */ var src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase-auth.service */ 26372);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);
/* harmony import */ var _selectlang_selectlang_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../selectlang/selectlang.page */ 49036);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78848);













let SettingsAccountPage = class SettingsAccountPage {
  constructor(translate, userService, router, modalController, googleSingInService, firebaseAuthService, uiService) {
    this.translate = translate;
    this.userService = userService;
    this.router = router;
    this.modalController = modalController;
    this.googleSingInService = googleSingInService;
    this.firebaseAuthService = firebaseAuthService;
    this.uiService = uiService;
  }
  ngOnInit() {}
  logout() {
    var _this = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = yield _this.uiService.alertOK_CANCEL(_this.translate.instant('SETTINGS-ACOUNT.ConfirmLogout'));
      if (!res) {
        return;
      }
      //await this.googleSingInService.logout();  //Cerrar sesión en Google
      //await this.firebaseAuthService.logout();  //Cerrar sesión en Firebase
      const {
        rs
      } = yield _this.userService.getUserRS();
      if (rs === 'google') {
        yield _this.googleSingInService.logout();
      } else if (rs === 'apple') {
        yield _this.firebaseAuthService.logout();
      }
      yield _this.userService.removeUserRS();
      yield _this.userService.logout();
    })();
  }
  langchange() {
    var _this2 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _selectlang_selectlang_page__WEBPACK_IMPORTED_MODULE_7__.SelectlangPage,
        cssClass: 'popupclass2',
        backdropDismiss: false,
        componentProps: {
          pageid: 'settings'
        }
      });
      modal.onDidDismiss().then( /*#__PURE__*/function () {
        var _ref = (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataReturned) {});
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return yield modal.present();
    })();
  }
  params(parameters) {
    var _this3 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let navegationExtras = {
        state: {
          parameters: parameters,
          paramReturn: 'settings-account'
        }
      };
      _this3.router.navigate(['params'], navegationExtras);
    })();
  }
  changePassword() {
    this.router.navigate(['change-password']);
  }
  deleteAccount() {
    var _this4 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = yield _this4.uiService.alertOK_CANCEL(_this4.translate.instant('SETTINGS-ACOUNT.ConfirmDelete'));
      if (res) {
        _this4.uiService.showLoader();
        let resp = yield _this4.userService.deleteAccount();
        _this4.uiService.hideLoader();
        if (resp) {
          yield _this4.uiService.alertOK_CANCEL(_this4.translate.instant('SETTINGS-ACOUNT.DeleteSuccess'));
          yield _this4.userService.removeUserRS();
          yield _this4.userService.logout(); //this.router.navigate(['login']);
        } else {
          _this4.uiService.alertOK(_this4.translate.instant('SETTINGS-ACOUNT.DeleteError'));
        }
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
    }, {
      type: src_app_services_google_sign_in_service__WEBPACK_IMPORTED_MODULE_3__.GoogleSignInService
    }, {
      type: src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__.FirebaseAuthService
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__.UiService
    }];
  }
};
SettingsAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-settings-account',
  template: _settings_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_settings_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SettingsAccountPage);


/***/ }),

/***/ 18468:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/account/settings-account/settings-account.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-header {
  background-color: var(--ion-color-blanco);
  margin-bottom: -30px;
}

.title_txt {
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
}

ion-item {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  --detail-icon-color: var(--ion-color-primary1);
}

.list-item-delete {
  text-align: center;
  font-weight: bold;
}

.logoImg {
  max-width: 50% !important;
  padding-top: 4px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/account/settings-account/settings-account.page.scss"],"names":[],"mappings":"AAAA;EACI,yCAAA;EACA,oBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,8CAAA;AACJ;;AAEA;EACI,kBAAA;EACA,iBAAA;AACJ;;AACA;EACI,yBAAA;EACA,gBAAA;AAEJ","sourcesContent":["ion-header {\n    background-color: var(--ion-color-blanco);\n    margin-bottom: -30px;\n}\n\n.title_txt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n}\n\nion-item {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    --detail-icon-color: var(--ion-color-primary1);\n}\n\n.list-item-delete{\n    text-align: center;\n    font-weight: bold;\n}\n.logoImg{\n    max-width: 50% !important;\n    padding-top: 4px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 24344:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/account/settings-account/settings-account.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\">\n  <ion-toolbar color=\"blanco\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"main/tabs/account\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title_txt\" mode=\"ios\">{{ 'SETTINGS-ACOUNT.TitleTxt' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <ion-list>\n    <ion-item style=\"text-align: center; padding-top: 10px;\">\n      <div><img class=\"logoImg\" src=\"../../../../assets/logoApp.jpg\"></div>\n    </ion-item>\n    <ion-item detail (click)=\"params('privacy')\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.privacy' | translate }}</ion-label>\n    </ion-item>\n    <ion-item detail (click)=\"params('terms')\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.terms' | translate }}</ion-label>\n    </ion-item>\n    <ion-item detail (click)=\"params('AgePolicy')\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.AgePolicy' | translate }}</ion-label>\n    </ion-item>\n    <ion-item detail (click)=\"params('UserLic')\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.UserLic' | translate }}</ion-label>\n    </ion-item>\n    <ion-item detail (click)=\"params('Community')\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.Community' | translate }}</ion-label>\n    </ion-item>\n    <ion-item detail (click)=\"params('DMCAPOL')\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.DMCAPOL' | translate }}</ion-label>\n    </ion-item>\n    <ion-item detail (click)=\"params('RADW')\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.RADW' | translate }}</ion-label>\n    </ion-item>\n      <ion-item detail (click)=\"langchange()\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.ChangeLanguage' | translate }}</ion-label>\n    </ion-item>\n    <ion-item detail (click)=\"changePassword()\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.ChangePassword' | translate }}</ion-label>\n    </ion-item>\n    <ion-item detail (click)=\"logout()\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.logout' | translate }}</ion-label>\n    </ion-item>\n    <ion-item color=\"light\" class=\"list-item-delete\" (click)=\"deleteAccount()\">\n      <ion-label>{{ 'SETTINGS-ACOUNT.deleteAccount' | translate }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_settings-account_settings-account_module_ts.js.map