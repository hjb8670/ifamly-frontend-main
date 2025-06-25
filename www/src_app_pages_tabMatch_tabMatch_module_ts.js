(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabMatch_tabMatch_module_ts"],{

/***/ 31820:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabMatch/tabMatch-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabMatchPageRoutingModule: () => (/* binding */ TabMatchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _tabMatch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabMatch.page */ 4048);




const routes = [{
  path: '',
  component: _tabMatch_page__WEBPACK_IMPORTED_MODULE_0__.TabMatchPage
}];
let TabMatchPageRoutingModule = class TabMatchPageRoutingModule {};
TabMatchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TabMatchPageRoutingModule);


/***/ }),

/***/ 46320:
/*!***************************************************!*\
  !*** ./src/app/pages/tabMatch/tabMatch.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabMatchPageModule: () => (/* binding */ TabMatchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _tabMatch_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabMatch.page */ 4048);
/* harmony import */ var _tabMatch_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabMatch-routing.module */ 31820);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let TabMatchPageModule = class TabMatchPageModule {};
TabMatchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabMatch_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabMatchPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_tabMatch_page__WEBPACK_IMPORTED_MODULE_0__.TabMatchPage]
})], TabMatchPageModule);


/***/ }),

/***/ 4048:
/*!*************************************************!*\
  !*** ./src/app/pages/tabMatch/tabMatch.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabMatchPage: () => (/* binding */ TabMatchPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _tabMatch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabMatch.page.html?ngResource */ 97368);
/* harmony import */ var _tabMatch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabMatch.page.scss?ngResource */ 67016);
/* harmony import */ var _tabMatch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabMatch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 90628);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/match.service */ 5876);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ui.service */ 44136);
/* harmony import */ var _services_talk_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/talk.service */ 68648);
/* harmony import */ var src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data-storage.service */ 92288);
/* harmony import */ var src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/firebase-auth.service */ 26372);














let TabMatchPage = class TabMatchPage {
  constructor(router, translate, userService, matchService, uiService, talkService, activatedRoute, authService, dataHelper) {
    this.router = router;
    this.translate = translate;
    this.userService = userService;
    this.matchService = matchService;
    this.uiService = uiService;
    this.talkService = talkService;
    this.activatedRoute = activatedRoute;
    this.authService = authService;
    this.dataHelper = dataHelper;
    this.lanCatalogo = '1';
    this.isLoading = false;
  }
  ngOnInit() {
    // Only one queryParam subscription here
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['random']) {
        this.safeRefresh();
      }
    });
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.safeRefresh();
    })();
  }
  safeRefresh() {
    var _this2 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.isLoading) return;
      _this2.isLoading = true;
      try {
        yield _this2.refreshMatches();
      } catch (err) {
        console.error('Error refreshing matches:', err);
      } finally {
        _this2.isLoading = false;
      }
    })();
  }
  refreshMatches() {
    var _this3 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.uiService.showLoader();
      // Clear both in component and service (important)
      _this3.matchService.matchPerson = [];
      _this3.user = yield _this3.userService.getUserBasic('');
      yield _this3.matchService.principal(); // <- ensure this method clears internal arrays
      _this3.uiService.hideLoader();
      _this3.lanCatalogo = _this3.translate.currentLang === 'es' ? src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.es.toString() : src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.en.toString();
    })();
  }
  setAvatarImg(matchP) {
    var _this4 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const usr of matchP) {
        usr.image = '../../../assets/icon/30-Default_no-image.jpeg';
        const personId = usr.personLiked.toString() === _this4.user.personId ? usr.personLikes : usr.personLiked;
        let res_imgs = yield _this4.matchService.getIMGS(personId.toString());
        res_imgs = res_imgs.filter(res => res.avatar);
        usr.image = res_imgs[0]?.multimediaUrl;
      }
    })();
  }
  selectMatch(match) {
    const otherPerson = match.personLiked.toString() === this.user.personId ? match.personLikes : match.personLiked;
    const navExtras = {
      state: {
        typePerson: 0,
        otherPerson,
        matchId: match.matchId,
        image: match.image
      }
    };
    this.router.navigate(['detail-match'], navExtras);
  }
  cancelMatch(matchP) {
    var _this5 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const resCancel = yield _this5.uiService.alertOK_CANCEL(_this5.translate.instant('MATCH.ConfirmDelete'));
      if (!resCancel) return;
      const id = matchP.personLiked.toString() === _this5.user.personId ? matchP.personLikes : matchP.personLiked;
      _this5.uiService.showLoader();
      const res = yield _this5.matchService.doMatchProfiles(id.toString(), src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.statusUsrMatch.block.toString(), 'false', 'false', matchP.matchId);
      _this5.uiService.hideLoader();
      if (res) {
        // Navigate back with random param to force list reload
        const randomParam = Math.random().toString(36).substring(2);
        _this5.router.navigate(['main/tabs/match'], {
          queryParams: {
            random: randomParam
          }
        });
      }
    })();
  }
  chatMatch(matchId) {
    var _this6 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.uiService.showLoader();
      const resp = yield _this6.talkService.updateConversation(matchId.toString());
      _this6.uiService.hideLoader();
      if (Object.keys(resp).length === 0) {
        console.log("Chat registration issue");
        return;
      }
      const navExtras = {
        state: {
          idConversation: resp["idConversation"]
        }
      };
      _this6.router.navigate(['main/tabs/message'], navExtras);
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_5__.MatchService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_6__.UiService
    }, {
      type: _services_talk_service__WEBPACK_IMPORTED_MODULE_7__.TalkService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
    }, {
      type: src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_9__.FirebaseAuthService
    }, {
      type: src_app_services_data_storage_service__WEBPACK_IMPORTED_MODULE_8__.DataStorageService
    }];
  }
};
TabMatchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-tabMatch',
  template: _tabMatch_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tabMatch_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TabMatchPage);


/***/ }),

/***/ 67016:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabMatch/tabMatch.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hdPage {
  background: var(--ion-color-blanco);
  padding-bottom: 0px;
}

ion-back-button {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
}

.titlePage {
  font-family: "Sk-Modernist-Bold";
  font-size: 24px;
  margin-top: -10px;
  margin-bottom: 0;
}

.titleLoc {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  color: var(--ion-color-gris1);
  width: 80%;
  margin-top: 0;
  margin-bottom: 0;
}

.menuBtn {
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
}

.menuIcon {
  font-size: 28px;
  margin-left: auto;
  margin-right: auto;
}

hr {
  height: 1px;
  width: 100%;
  background: var(--ion-color-gris1);
  margin-top: 20px;
}

.titleSec {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 14px;
  text-align: center;
  color: var(--ion-color-gris1);
  background-color: var(--ion-color-blanco);
  width: 70px;
  margin-top: -18px;
  margin-left: auto;
  margin-right: auto;
}

.colD {
  padding: 0px;
  margin-right: -5px;
}
.colD .ios {
  margin-bottom: 0px;
}

.colI {
  padding: 0px;
  margin-left: -5px;
}
.colI .ios {
  margin-bottom: 0px;
}

.cardBig {
  border-radius: 10px;
  height: 185px;
}

.parent {
  position: relative;
  width: 100%;
  height: 150px;
  top: 0;
  left: 0;
  text-align: center;
  align-content: center;
}

.imgListBig {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}

.name-p {
  position: absolute;
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
  color: var(--ion-color-blanco);
  bottom: 30px;
  left: 10px;
  background: gray;
  padding: 2px;
  border-radius: 6px;
  opacity: 0.8;
}

.col-btn {
  padding: 0;
  margin: 0;
}

.btn-card {
  display: block;
  height: 41px;
  margin-top: -4px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: -20px;
  padding: 0;
  --border-radius: 0;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/tabMatch/tabMatch.page.scss"],"names":[],"mappings":"AAAA;EACI,mCAAA;EACA,mBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,mCAAA;EACA,eAAA;EACA,6BAAA;EACA,UAAA;EACA,aAAA;EACA,gBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AACJ;;AAGA;EACI,eAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,WAAA;EACA,kCAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,kBAAA;EACA,6BAAA;EACA,yCAAA;EACA,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;;AAKA;EACI,YAAA;EACA,kBAAA;AAFJ;AAII;EACI,kBAAA;AAFR;;AAMA;EACI,YAAA;EACA,iBAAA;AAHJ;AAKI;EACI,kBAAA;AAHR;;AAOA;EACI,mBAAA;EAEA,aAAA;AALJ;;AAQA;EACI,kBAAA;EACA,WAAA;EAEA,aAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,qBAAA;AANJ;;AASA;EAMI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;EACA,uCAAA;EACA,wCAAA;AAXJ;;AAcA;EACI,kBAAA;EACA,gCAAA;EACA,eAAA;EACA,8BAAA;EACA,YAAA;EACA,UAAA;EAEA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;AAZJ;;AAeA;EACI,UAAA;EACA,SAAA;AAZJ;;AAeA;EACI,cAAA;EACA,YAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,oBAAA;EACA,UAAA;EACA,kBAAA;AAZJ","sourcesContent":[".hdPage {\n    background: var(--ion-color-blanco);\n    padding-bottom: 0px;\n}\n\nion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n}\n\n.titlePage {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n    margin-top: -10px;\n    margin-bottom: 0;\n}\n\n.titleLoc {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    color: var(--ion-color-gris1);\n    width: 80%;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.menuBtn {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 10px;\n    width: 50px;\n    height: 50px;\n    //margin-top: -24px;\n}\n\n.menuIcon {\n    font-size: 28px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nhr {\n    height: 1px;\n    width: 100%;\n    background: var(--ion-color-gris1);\n    margin-top: 20px;\n}\n\n.titleSec {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    text-align: center;\n    color: var(--ion-color-gris1);\n    background-color: var(--ion-color-blanco);\n    width: 70px;\n    margin-top: -18px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n\n.colD {\n    padding: 0px;\n    margin-right: -5px;\n\n    .ios {\n        margin-bottom: 0px;\n    }\n}\n\n.colI {\n    padding: 0px;\n    margin-left: -5px;\n\n    .ios {\n        margin-bottom: 0px;\n    }\n}\n\n.cardBig {\n    border-radius: 10px;\n    // height: 240px;\n    height: 185px;\n}\n\n.parent {\n    position: relative;\n    width: 100%;\n    // height: 200px;\n    height: 150px;\n    top: 0;\n    left: 0;\n    text-align: center;\n    align-content: center;\n}\n\n.imgListBig {\n    // object-fit: cover;\n    // top: 0;\n    // left: 0;\n    // max-width: 100%;\n    // max-height: 100%;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: top;\n    border-top-left-radius: 10px !important;\n    border-top-right-radius: 10px !important;\n}\n\n.name-p {\n    position: absolute;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-blanco);\n    bottom: 30px;\n    left: 10px;\n\n    background: gray;\n    padding: 2px;\n    border-radius: 6px;\n    opacity: 0.8;\n}\n\n.col-btn {\n    padding: 0;\n    margin: 0;\n}\n\n.btn-card {\n    display: block;\n    height: 41px;\n    margin-top: -4px;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: -20px;\n    padding: 0;\n    --border-radius: 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 97368:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabMatch/tabMatch.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"hdPage ion-no-border ion-padding\">\n  <ion-toolbar color=\"blanco\">\n    <p class=\"titlePage\">{{ 'MATCH.Title' | translate }}</p>\n    <!-- <ion-buttons class=\"menuBtn\" slot=\"end\"  id=\"open-modal\" expand=\"block\"> (click)=\"openMenuPopover( $event )\">\n      <ion-icon class=\"menuIcon\" name=\"swap-vertical\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n  <p class=\"titleLoc\">{{ 'MATCH.SubTitle' | translate }}</p>\n</ion-header>\n\n<ion-content color=\"blanco\" class=\"ion-no-padding\">\n  <ion-grid class=\"ion-padding\">\n    <!-- <ion-row>\n      <ion-col>\n        <hr>\n        <p class=\"titleSec\">{{ 'MATCH.TitleToday' | translate }}</p>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ng-container *ngFor=\"let match of matchService.matchPerson; let i = index;\">\n        <ion-col class=\"colD\" size=\"6\" *ngIf=\"i%2 == 0\">\n          <ion-card class=\"cardBig\">\n            <div class=\"parent\" (click)=\"selectMatch(match)\">\n              <img class=\"imgListBig\" src={{match.image}} >\n              <!-- <img class=\"img-VIPB\" src=\"../../../../assets/icon/12-Vip_card.png\" *ngIf=\"exp.vip && !isMyExp\"> -->\n            </div>\n            <p class=\"name-p\">{{ match.name }}, {{ match.age }}</p>\n            <ion-row>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-right: 0.5px;\" (click)=\"cancelMatch(match)\">\n                  <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-left: 0.5px;\" (click)=\"chatMatch(match.matchId)\">\n                  <ion-icon slot=\"icon-only\" name=\"chatbubble\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n\n        <ion-col class=\"colD\" size=\"6\" *ngIf=\"i%2 != 0\">\n          <ion-card class=\"cardBig\">\n            <div class=\"parent\" (click)=\"selectMatch(match)\">\n              <img class=\"imgListBig\" src={{match.image}} >\n              <!-- <img class=\"img-VIPB\" src=\"../../../../assets/icon/12-Vip_card.png\" *ngIf=\"exp.vip && !isMyExp\"> -->\n            </div>\n            <p class=\"name-p\">{{ match.name }}, {{ match.age }}</p>\n            <ion-row>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-right: 0.5px;\" (click)=\"cancelMatch(match)\">\n                  <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-left: 0.5px;\" (click)=\"chatMatch(match.matchId)\">\n                  <ion-icon slot=\"icon-only\" name=\"chatbubble\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-col>\n        <hr>\n        <p class=\"titleSec\">{{ 'MATCH.TitleYesterday' | translate }}</p>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row>\n      <ng-container *ngFor=\"let match of yesterdayMatchPerson; let i = index;\">\n        <ion-col class=\"colD\" size=\"6\" *ngIf=\"i%2 == 0\">\n          <ion-card class=\"cardBig\">\n            <div class=\"parent\">\n              <img class=\"imgListBig\" src={{match.image}} (click)=\"selectMatch(match)\">\n            </div>\n            <p class=\"name-p\">{{ match.name }}, {{ match.age }}</p>\n            <ion-row>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-right: 0.5px;\" (click)=\"cancelMatch(match)\">\n                  <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-left: 0.5px;\" (click)=\"chatMatch(match.matchId)\">\n                  <ion-icon slot=\"icon-only\" name=\"chatbubble\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n\n        <ion-col class=\"colD\" size=\"6\" *ngIf=\"i%2 != 0\">\n          <ion-card class=\"cardBig\">\n            <div class=\"parent\">\n              <img class=\"imgListBig\" src={{match.image}} (click)=\"selectMatch(match)\">\n            </div>\n            <p class=\"name-p\">{{ match.name }}, {{ match.age }}</p>\n            <ion-row>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-right: 0.5px;\" (click)=\"cancelMatch(match)\">\n                  <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-left: 0.5px;\" (click)=\"chatMatch(match.matchId)\">\n                  <ion-icon slot=\"icon-only\" name=\"chatbubble\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row> -->\n\n    <!-- <ion-row>\n      <ion-col>\n        <hr>\n        <p class=\"titleSec\">{{ 'MATCH.TitleOld' | translate }}</p>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row>\n      <ng-container *ngFor=\"let match of oldMatchPerson; let i = index;\">\n        <ion-col class=\"colD\" size=\"6\" *ngIf=\"i%2 == 0\">\n          <ion-card class=\"cardBig\">\n            <div class=\"parent\">\n              <img class=\"imgListBig\" src={{match.image}} (click)=\"selectMatch(match)\">\n            </div>\n            <p class=\"name-p\">{{ match.name }}, {{ match.age }}</p>\n            <ion-row>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-right: 0.5px;\" (click)=\"cancelMatch(match)\">\n                  <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-left: 0.5px;\" (click)=\"chatMatch(match.matchId)\">\n                  <ion-icon slot=\"icon-only\" name=\"chatbubble\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n\n        <ion-col class=\"colD\" size=\"6\" *ngIf=\"i%2 != 0\">\n          <ion-card class=\"cardBig\">\n            <div class=\"parent\">\n              <img class=\"imgListBig\" src={{match.image}} (click)=\"selectMatch(match)\">\n            </div>\n            <p class=\"name-p\">{{ match.name }}, {{ match.age }}</p>\n            <ion-row>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-right: 0.5px;\" (click)=\"cancelMatch(match)\">\n                  <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" class=\"col-btn\">\n                <ion-button class=\"btn-card\" color=\"negro\" style=\"padding-left: 0.5px;\" (click)=\"chatMatch(match.matchId)\">\n                  <ion-icon slot=\"icon-only\" name=\"chatbubble\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabMatch_tabMatch_module_ts.js.map