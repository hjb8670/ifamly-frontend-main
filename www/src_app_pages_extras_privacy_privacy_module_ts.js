(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_extras_privacy_privacy_module_ts"],{

/***/ 28532:
/*!****************************************************************!*\
  !*** ./src/app/pages/extras/privacy/privacy-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyPageRoutingModule: () => (/* binding */ PrivacyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.page */ 46852);




const routes = [{
  path: '',
  component: _privacy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPage
}];
let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {};
PrivacyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PrivacyPageRoutingModule);


/***/ }),

/***/ 4836:
/*!********************************************************!*\
  !*** ./src/app/pages/extras/privacy/privacy.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyPageModule: () => (/* binding */ PrivacyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-routing.module */ 28532);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page */ 46852);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let PrivacyPageModule = class PrivacyPageModule {};
PrivacyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPage]
})], PrivacyPageModule);


/***/ }),

/***/ 46852:
/*!******************************************************!*\
  !*** ./src/app/pages/extras/privacy/privacy.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyPage: () => (/* binding */ PrivacyPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _privacy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page.html?ngResource */ 60708);
/* harmony import */ var _privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy.page.scss?ngResource */ 29840);
/* harmony import */ var _privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ 90628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);









let PrivacyPage = class PrivacyPage {
  constructor(translate, userService, activatedRoute, router, uiserve) {
    this.translate = translate;
    this.userService = userService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.uiserve = uiserve;
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.paramReturn = this.router.getCurrentNavigation().extras.state['paramReturn'];
        switch (this.router.getCurrentNavigation().extras.state['parameters']) {
          case 'terms':
            this.parameters = "TCAQ";
            this.title = this.translate.instant('PARAMS.TitleTerms');
            break;
          case 'terms-complete':
            this.parameters = "TCAQ_COMPLETE";
            this.title = this.translate.instant('PARAMS.TitleTerms');
            break;
          case 'privacy':
            this.parameters = "POLPRIV";
            this.title = this.translate.instant('PARAMS.TitlePrivacy');
            break;
          case 'AgePolicy':
            this.parameters = 'AVP';
            this.title = this.translate.instant('PARAMS.TitleAge');
            break;
          case 'UserLic':
            this.parameters = 'EULA';
            this.title = this.translate.instant('PARAMS.TitleUserLic');
            break;
          case 'Community':
            this.parameters = 'CPOL';
            this.title = this.translate.instant('PARAMS.TitleCommunity');
            break;
          case 'DMCAPOL':
            this.parameters = 'DMCAPOL';
            this.title = this.translate.instant('PARAMS.TitleDMCAPOL');
            break;
          case 'RADW':
            this.parameters = 'RADW';
            this.title = this.translate.instant('PARAMS.TitleRADW');
            break;
        }
      }
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.uiserve.showLoader();
      //await this.userService.getUser('');//Este es para que el token no venga vacio
      if (_this.translate.currentLang == 'es') {
        _this.lenguaje = "";
      } else {
        _this.lenguaje = "_ENG";
      }
      if (!_this.parameters) {
        _this.uiserve.hideLoader();
        console.log("No estan los parametros");
        return;
      }
      _this.contenido = yield _this.userService.getParametros(_this.parameters.concat(_this.lenguaje));
      console.log(_this.contenido);
      _this.uiserve.hideLoader();
    })();
  }
  regresar() {
    this.router.navigate([this.paramReturn]);
  }
  static {
    this.ctorParameters = () => [{
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService
    }];
  }
};
PrivacyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-privacy',
  template: _privacy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_privacy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PrivacyPage);


/***/ }),

/***/ 29840:
/*!*******************************************************************!*\
  !*** ./src/app/pages/extras/privacy/privacy.page.scss?ngResource ***!
  \*******************************************************************/
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
}`, "",{"version":3,"sources":["webpack://./src/app/pages/extras/privacy/privacy.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/extras/privacy/privacy.page.scss"],"names":[],"mappings":"AAAA;EACI,yCAAA;EACA,oBAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;ACCJ","sourcesContent":["ion-header {\n    background-color: var(--ion-color-blanco);\n    margin-bottom: -30px;\n}\n\n.title_txt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n}","ion-header {\n  background-color: var(--ion-color-blanco);\n  margin-bottom: -30px;\n}\n\n.title_txt {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 60708:
/*!*******************************************************************!*\
  !*** ./src/app/pages/extras/privacy/privacy.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" mode=\"md\" (click)=\"regresar()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title_txt\" mode=\"ios\">{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <ion-text>\n    <p [innerHTML]=\"contenido\"></p>\n  </ion-text>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_extras_privacy_privacy_module_ts.js.map