(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_notification-prompt_notification-prompt_module_ts"],{

/***/ 84260:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/notification-prompt/notification-prompt-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPromptPageRoutingModule: () => (/* binding */ NotificationPromptPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _notification_prompt_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-prompt.page */ 32200);




const routes = [{
  path: '',
  component: _notification_prompt_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPromptPage
}];
let NotificationPromptPageRoutingModule = class NotificationPromptPageRoutingModule {};
NotificationPromptPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NotificationPromptPageRoutingModule);


/***/ }),

/***/ 78220:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/notification-prompt/notification-prompt.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPromptPageModule: () => (/* binding */ NotificationPromptPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _notification_prompt_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-prompt-routing.module */ 84260);
/* harmony import */ var _notification_prompt_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-prompt.page */ 32200);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let NotificationPromptPageModule = class NotificationPromptPageModule {};
NotificationPromptPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _notification_prompt_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPromptPageRoutingModule],
  declarations: [_notification_prompt_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPromptPage]
})], NotificationPromptPageModule);


/***/ }),

/***/ 32200:
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/notification-prompt/notification-prompt.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPromptPage: () => (/* binding */ NotificationPromptPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _notification_prompt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-prompt.page.html?ngResource */ 99136);
/* harmony import */ var _notification_prompt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-prompt.page.scss?ngResource */ 95440);
/* harmony import */ var _notification_prompt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notification_prompt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ 44244);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 90628);









let NotificationPromptPage = class NotificationPromptPage {
  constructor(userService, router, translate, zone, notificationService) {
    this.userService = userService;
    this.router = router;
    this.translate = translate;
    this.zone = zone;
    this.notificationService = notificationService;
    this.loading = false;
  }
  allowNotifications() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      try {
        const token = yield _this.notificationService.requestPermission();
        console.log(token);
        _this.userService.setNotificationsAllowed(true);
        _this.notificationService.listenToMessages(); // Start listening
        yield _this.userService.sendDeviceToken(token);
        // Force navigation inside Angular zone
        _this.zone.run(() => {
          _this.router.navigate(['/main/tabs/discover']);
          _this.loading = false;
        });
      } catch (err) {
        console.error('Notification permission denied or failed:', err);
        _this.userService.setNotificationsAllowed(false);
        _this.loading = false;
        _this.zone.run(() => {
          _this.router.navigate(['/main/tabs/discover']);
          _this.loading = false;
        });
      }
    })();
  }
  skip() {
    this.userService.setNotificationsAllowed(false);
    this.router.navigate(['/main/tabs/discover']);
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }, {
      type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService
    }];
  }
};
NotificationPromptPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-notification-prompt',
  template: _notification_prompt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_notification_prompt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NotificationPromptPage);


/***/ }),

/***/ 95440:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/auth/notification-prompt/notification-prompt.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.notification-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.notification-page .notification-content {
  text-align: center;
  width: 100%;
  max-width: 320px;
  margin: auto;
}
.notification-page .bell-icon {
  width: 200px;
}
.notification-page .title {
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 12px;
  color: #000;
}
.notification-page .subtitle {
  font-size: 15px;
  color: #444;
  margin-bottom: 30px;
}
.notification-page .allow-btn {
  --background: #000;
  --color: #fff;
  border-radius: 12px;
  margin-bottom: 12px;
}
.notification-page .skip-btn {
  color: #000;
  text-transform: none;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/auth/notification-prompt/notification-prompt.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/auth/notification-prompt/notification-prompt.page.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;ACCF;ADCE;EACE,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;ACCJ;ADEE;EACE,YAAA;ACAJ;ADGE;EACE,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;ACDJ;ADIE;EACE,eAAA;EACA,WAAA;EACA,mBAAA;ACFJ;ADKE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ACHJ;ADME;EACE,WAAA;EACA,oBAAA;ACJJ","sourcesContent":[".notification-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .notification-content {\n    text-align: center;\n    width: 100%;\n    max-width: 320px;\n    margin: auto;\n  }\n\n  .bell-icon {\n    width: 200px;\n  }\n\n  .title {\n    font-weight: bold;\n    font-size: 22px;\n    margin-bottom: 12px;\n    color: #000;\n  }\n\n  .subtitle {\n    font-size: 15px;\n    color: #444;\n    margin-bottom: 30px;\n  }\n\n  .allow-btn {\n    --background: #000;\n    --color: #fff;\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n\n  .skip-btn {\n    color: #000;\n    text-transform: none;\n  }\n}\n",".notification-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.notification-page .notification-content {\n  text-align: center;\n  width: 100%;\n  max-width: 320px;\n  margin: auto;\n}\n.notification-page .bell-icon {\n  width: 200px;\n}\n.notification-page .title {\n  font-weight: bold;\n  font-size: 22px;\n  margin-bottom: 12px;\n  color: #000;\n}\n.notification-page .subtitle {\n  font-size: 15px;\n  color: #444;\n  margin-bottom: 30px;\n}\n.notification-page .allow-btn {\n  --background: #000;\n  --color: #fff;\n  border-radius: 12px;\n  margin-bottom: 12px;\n}\n.notification-page .skip-btn {\n  color: #000;\n  text-transform: none;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 99136:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/auth/notification-prompt/notification-prompt.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding notification-page\">\n  <div class=\"notification-content\">\n    <img src=\"assets/notification-bell.png\" alt=\"Notification Bell\" class=\"bell-icon\" />\n\n    <h2 class=\"title\">Don’t miss a message or match!</h2>\n    <p class=\"subtitle\">\n      Turn on your notifications so we can let you know when you have new matches, likes, or messages.\n    </p>\n\n    <ion-button expand=\"block\" class=\"allow-btn\" (click)=\"allowNotifications()\">\n      <ng-container *ngIf=\"!loading\">\n        {{ 'LOGIN.allowbtn' | translate }}\n      </ng-container>\n      <ng-container *ngIf=\"loading\">\n        <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\n      </ng-container>\n    </ion-button>\n\n    <ion-button fill=\"clear\" class=\"skip-btn\" (click)=\"skip()\"> {{ 'LOGIN.skipp' | translate }}</ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_notification-prompt_notification-prompt_module_ts.js.map