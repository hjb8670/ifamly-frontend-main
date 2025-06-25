(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_match_detail-match-menu-popover_detail-match-menu-popover_page_ts"],{

/***/ 76244:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/match/detail-match-menu-popover/detail-match-menu-popover.page.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailMatchMenuPopoverPage: () => (/* binding */ DetailMatchMenuPopoverPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _detail_match_menu_popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-match-menu-popover.page.html?ngResource */ 8688);
/* harmony import */ var _detail_match_menu_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-match-menu-popover.page.scss?ngResource */ 2100);
/* harmony import */ var _detail_match_menu_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_detail_match_menu_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _report_popover_report_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report-popover/report-popover.page */ 55276);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/match.service */ 5876);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 72584);












let DetailMatchMenuPopoverPage = class DetailMatchMenuPopoverPage {
  constructor(popoverCtrl, router, translate, uiService, matchService) {
    this.popoverCtrl = popoverCtrl;
    this.router = router;
    this.translate = translate;
    this.uiService = uiService;
    this.matchService = matchService;
    this.typeBlock = 0;
    this.matchId = null;
    this.personId = null;
    this.experienceId = null;
  }
  ngOnInit() {
    console.log('type Block', this.typeBlock);
    console.log('MATCH ID: ', this.matchId);
    console.log('PERSON ID: ', this.personId);
    console.log('Experience ID', this.experienceId);
  }
  selectOp(op, ev) {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('report');
      if (op == 0) {
        yield _this.popoverCtrl.dismiss();
        let report = yield _this.popoverCtrl.create({
          component: _report_popover_report_popover_page__WEBPACK_IMPORTED_MODULE_3__.ReportPopoverPage,
          cssClass: "report-popever",
          showBackdrop: true,
          //mode: 'ios',
          event: ev,
          componentProps: {
            typeBlock: _this.typeBlock,
            matchId: _this.matchId,
            personId: _this.personId
          }
        });
        report.present();
      } else {
        let res = yield _this.uiService.alertOK_CANCEL(_this.translate.instant('MATCH-DETAIL.confirmBlock1'));
        if (!res) {
          return;
        }
        if (_this.typeBlock == 0) {
          _this.blockPerson(_this.matchId.toString(), '/main/tabs/match');
        } else if (_this.typeBlock == 1) {
          console.log("I am in block experience");
          _this.blockPerson(_this.personId.toString(), '/main/tabs/experience');
        } else if (_this.typeBlock == 2) {
          _this.blockPerson(_this.personId.toString(), '/main/tabs/discover');
        }
      }
    })();
  }
  blockPerson(personId, routeStr) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.uiService.showLoader();
      let res;
      if (_this2.typeBlock == 0) {
        res = yield _this2.matchService.blockMatch(_this2.matchId, '');
      } else {
        res = yield _this2.matchService.doMatchProfiles(personId, src_environments_constants__WEBPACK_IMPORTED_MODULE_5__.constants.statusUsrMatch.block.toString(), 'false', 'false', null);
      }
      _this2.uiService.hideLoader();
      if (res) {
        yield _this2.popoverCtrl.dismiss();
        yield _this2.uiService.alertOK_CANCEL(_this2.translate.instant('MATCH-DETAIL.block1'));
        const randomParam = Math.random().toString(36).substring(2);
        _this2.router.navigate([routeStr], {
          queryParams: {
            random: randomParam
          }
        });
      } else {
        _this2.uiService.alertOK(_this2.translate.instant('MATCH-DETAIL.block1'));
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService
    }, {
      type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_6__.MatchService
    }];
  }
  static {
    this.propDecorators = {
      typeBlock: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
      }],
      matchId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
      }],
      personId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
      }],
      experienceId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
      }]
    };
  }
};
DetailMatchMenuPopoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-detail-match-menu-popover',
  template: _detail_match_menu_popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_detail_match_menu_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DetailMatchMenuPopoverPage);


/***/ }),

/***/ 55276:
/*!*******************************************************************!*\
  !*** ./src/app/pages/match/report-popover/report-popover.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportPopoverPage: () => (/* binding */ ReportPopoverPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _report_popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-popover.page.html?ngResource */ 62944);
/* harmony import */ var _report_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-popover.page.scss?ngResource */ 59232);
/* harmony import */ var _report_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_report_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/match.service */ 5876);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/constants */ 57724);











let ReportPopoverPage = class ReportPopoverPage {
  constructor(translate, uiService, matchService, router, popoverCtrl) {
    this.translate = translate;
    this.uiService = uiService;
    this.matchService = matchService;
    this.router = router;
    this.popoverCtrl = popoverCtrl;
  }
  ngOnInit() {}
  sendReport() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.description);
      if (_this.description === undefined || _this.description === "") {
        _this.uiService.alertOK(_this.translate.instant('MATCH-DETAIL.requiredPOReport'));
        return;
      }
      let res = yield _this.uiService.alertOK_CANCEL(_this.translate.instant('MATCH-DETAIL.confirmBlock'));
      if (!res) {
        return;
      }
      /* if(!this.matchId){
        console.log("No tiene matchID");
        return
      } */
      if (_this.typeBlock == 0) {
        yield _this.blockMatch();
      } else if (_this.typeBlock == 1) {
        yield _this.blockExperiencie();
      } else if (_this.typeBlock == 2) {
        yield _this.blockDiscover();
      }
    })();
  }
  blockMatch() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.uiService.showLoader();
      let resp = yield _this2.matchService.blockMatch(_this2.matchId, _this2.description);
      _this2.uiService.hideLoader();
      if (resp) {
        _this2.popoverCtrl.dismiss();
        yield _this2.uiService.alertOK_CANCEL(_this2.translate.instant('MATCH-DETAIL.block'));
        _this2.router.navigate(['/main/tabs/match']);
      } else {
        _this2.popoverCtrl.dismiss();
        _this2.uiService.alertOK(_this2.translate.instant('MATCH-DETAIL.block'));
      }
    })();
  }
  blockExperiencie() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.uiService.showLoader();
      let res = yield _this3.matchService.doMatchProfiles(_this3.personId.toString(), src_environments_constants__WEBPACK_IMPORTED_MODULE_5__.constants.statusUsrMatch.block.toString(), 'false', 'false', null);
      _this3.uiService.hideLoader();
      if (res) {
        _this3.popoverCtrl.dismiss();
        yield _this3.uiService.alertOK_CANCEL(_this3.translate.instant('MATCH-DETAIL.block'));
        _this3.router.navigate(['/main/tabs/experience']);
      } else {
        _this3.popoverCtrl.dismiss();
        _this3.uiService.alertOK(_this3.translate.instant('MATCH-DETAIL.block'));
      }
    })();
  }
  blockDiscover() {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.uiService.showLoader();
      let res = yield _this4.matchService.doMatchProfiles(_this4.personId.toString(), src_environments_constants__WEBPACK_IMPORTED_MODULE_5__.constants.statusUsrMatch.block.toString(), 'false', 'false', null);
      _this4.uiService.hideLoader();
      if (res) {
        _this4.popoverCtrl.dismiss();
        yield _this4.uiService.alertOK_CANCEL(_this4.translate.instant('MATCH-DETAIL.block'));
        const randomParam = Math.random().toString(36).substring(2); // Genera un parámetro aleatorio
        _this4.router.navigate(['/main/tabs/discover'], {
          queryParams: {
            random: randomParam
          }
        });
      } else {
        _this4.popoverCtrl.dismiss();
        _this4.uiService.alertOK(_this4.translate.instant('MATCH-DETAIL.block'));
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService
    }, {
      type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__.MatchService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
    }];
  }
  static {
    this.propDecorators = {
      typeBlock: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
      }],
      matchId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
      }],
      personId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
      }]
    };
  }
};
ReportPopoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-report-popover',
  template: _report_popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_report_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ReportPopoverPage);


/***/ }),

/***/ 2100:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/match/detail-match-menu-popover/detail-match-menu-popover.page.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-item {
  height: 30px;
}

.label_op {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  margin-top: 0;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/match/detail-match-menu-popover/detail-match-menu-popover.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/match/detail-match-menu-popover/detail-match-menu-popover.page.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,aAAA;ACCJ","sourcesContent":["ion-item {\n    height: 30px;\n}\n\n.label_op{\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    margin-top: 0;\n}","ion-item {\n  height: 30px;\n}\n\n.label_op {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  margin-top: 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59232:
/*!********************************************************************************!*\
  !*** ./src/app/pages/match/report-popover/report-popover.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.input-CItem {
  font-family: "Sk-Modernist-Regular";
  font-size: 19px;
  margin-top: 5px;
  border: 1px solid var(--ion-color-primary1);
  border-radius: 10px;
}

.save-Bt {
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
  color: var(--ion-color-primary1);
  text-transform: none;
  width: 100%;
}

.label_op {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  margin-top: -10px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/match/report-popover/report-popover.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/match/report-popover/report-popover.page.scss"],"names":[],"mappings":"AAAA;EACI,mCAAA;EACA,eAAA;EACA,eAAA;EACA,2CAAA;EACA,mBAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,gCAAA;EACA,oBAAA;EACA,WAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,iBAAA;ACCJ","sourcesContent":[".input-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 19px;\n    margin-top: 5px;\n    border: 1px solid var(--ion-color-primary1);\n    border-radius: 10px;\n}\n\n.save-Bt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-primary1);\n    text-transform: none;\n    width: 100%;\n}\n\n.label_op{\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    margin-top: -10px;\n}",".input-CItem {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 19px;\n  margin-top: 5px;\n  border: 1px solid var(--ion-color-primary1);\n  border-radius: 10px;\n}\n\n.save-Bt {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  color: var(--ion-color-primary1);\n  text-transform: none;\n  width: 100%;\n}\n\n.label_op {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  margin-top: -10px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8688:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/match/detail-match-menu-popover/detail-match-menu-popover.page.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list class=\"ion-padding\">\n  <ion-item (click)=\"selectOp(0, $event)\" lines=\"none\" detail=\"false\" mode=\"ios\">\n    <ion-label class=\"label_op\" text-wrap>\n      {{ 'MATCH-DETAIL.MenuOp1' | translate }}\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"selectOp(1, $event)\" lines=\"none\" detail=\"false\" mode=\"ios\">\n    <ion-label class=\"label_op\" text-wrap>\n      {{ 'MATCH-DETAIL.MenuOp2' | translate }}\n    </ion-label>\n  </ion-item>\n</ion-list>";

/***/ }),

/***/ 62944:
/*!********************************************************************************!*\
  !*** ./src/app/pages/match/report-popover/report-popover.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-row class=\"ion-padding\">\n  <ion-label class=\"label_op\" text-wrap>{{ 'MATCH-DETAIL.titlePOReport' | translate }}</ion-label>\n  <ion-textarea class=\"input-CItem\" [(ngModel)]=\"description\" inputmode=\"text\" maxlength=\"500\" rows=\"4\" ></ion-textarea>\n  <ion-button  color=\"blanco\"  color=\"primary1\" style=\"width: 100%;\" (click)=\"sendReport()\">{{ 'MATCH-DETAIL.buttonPOReport' | translate }}</ion-button>\n</ion-row>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_match_detail-match-menu-popover_detail-match-menu-popover_page_ts.js.map