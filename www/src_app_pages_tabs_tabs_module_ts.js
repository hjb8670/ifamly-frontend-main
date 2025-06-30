(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 72324:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 34088);




const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'experience',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_experience_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabExperience_tabExperience_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tabExperience/tabExperience.module */ 57084)).then(m => m.TabExperiencePageModule)
  }, {
    path: 'my-experience',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_experience_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabExperience_tabExperience_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tabExperience/tabExperience.module */ 57084)).then(m => m.TabExperiencePageModule)
  }, {
    path: 'discover',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_match_detail-match-menu-popover_detail-match-menu-popover_page_ts"), __webpack_require__.e("src_app_pages_tabDiscover_tabDiscover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tabDiscover/tabDiscover.module */ 30860)).then(m => m.TabDiscoverPageModule)
  }, {
    path: 'match',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabMatch_tabMatch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tabMatch/tabMatch.module */ 46320)).then(m => m.TabMatchPageModule)
  }, {
    path: 'message',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabMessage_tabMessage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tabMessage/tabMessage.module */ 93816)).then(m => m.TabMessagePageModule)
  }, {
    path: 'account',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabAccount_tabAccount_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tabAccount/tabAccount.module */ 16112)).then(m => m.TabAccountPageModule)
  }, {
    path: '',
    redirectTo: '/main/tabs/experience',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/main/tabs/experience',
  pathMatch: 'full'
}];
let TabsPageRoutingModule = class TabsPageRoutingModule {};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
})], TabsPageRoutingModule);


/***/ }),

/***/ 39532:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageModule: () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 72324);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 34088);







let TabsPageModule = class TabsPageModule {};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
  declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
})], TabsPageModule);


/***/ }),

/***/ 34088:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 60600);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 84920);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 90628);
/* harmony import */ var _services_talk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/talk.service */ 68648);
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/match.service */ 5876);
/* harmony import */ var src_app_services_tab_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tab.service */ 87548);









let TabsPage = class TabsPage {
  constructor(userService, talkService, matchService, cdr,
  // Inyectamos ChangeDetectorRef
  tabService) {
    this.userService = userService;
    this.talkService = talkService;
    this.matchService = matchService;
    this.cdr = cdr;
    this.tabService = tabService;
    this.activeExperience = false;
    this.activeDiscover = false;
    this.activeMatch = false;
    this.activeMessage = false;
    this.activeAccount = false;
    //Talkjs
    this.unreadMessages = 0; // Contador de mensajes no leídos
    this.activeDiscover = true;
    // Subscribe to tab changes
    this.tabService.currentTab$.subscribe(tab => {
      this.changeIcon(tab);
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = yield _this.userService.getUserBasic('');
      _this.session = yield _this.talkService.createCurrentSession(_this.user.personId, _this.user.firstName.concat(" ", _this.user.lastName));
      _this.escucharTalkJS();
    })();
  }
  changeIcon(page) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (page == 'discover') {
        _this2.activeExperience = false;
        _this2.activeDiscover = true;
        _this2.activeMatch = false;
        _this2.activeMessage = false;
        _this2.activeAccount = false;
      } else if (page == 'match') {
        _this2.activeExperience = false;
        _this2.activeDiscover = false;
        _this2.activeMatch = true;
        _this2.activeMessage = false;
        _this2.activeAccount = false;
      } else if (page == 'experience') {
        _this2.activeExperience = true;
        _this2.activeDiscover = false;
        _this2.activeMatch = false;
        _this2.activeMessage = false;
        _this2.activeAccount = false;
      } else if (page == 'message') {
        _this2.activeExperience = false;
        _this2.activeDiscover = false;
        _this2.activeMatch = false;
        _this2.activeMessage = true;
        _this2.activeAccount = false;
      } else {
        _this2.activeExperience = false;
        _this2.activeDiscover = false;
        _this2.activeMatch = false;
        _this2.activeMessage = false;
        _this2.activeAccount = true;
      }
      // Update the tab service
      _this2.tabService.setActiveTab(page);
    })();
  }
  escucharTalkJS() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.session.unreads.onChange(conversations => {
        _this3.unreadMessages = 0;
        conversations.forEach(conver => {
          if (_this3.unreadMessages >= 9) {
            return;
          }
          _this3.unreadMessages += conver.unreadMessageCount;
        });
        _this3.cdr.detectChanges();
      });
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
    }, {
      type: _services_talk_service__WEBPACK_IMPORTED_MODULE_4__.TalkService
    }, {
      type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_5__.MatchService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
    }, {
      type: src_app_services_tab_service__WEBPACK_IMPORTED_MODULE_6__.TabService
    }];
  }
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TabsPage);


/***/ }),

/***/ 87548:
/*!*****************************************!*\
  !*** ./src/app/services/tab.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabService: () => (/* binding */ TabService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 54844);



let TabService = class TabService {
  constructor() {
    this.currentTabSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('discover');
    this.currentTab$ = this.currentTabSubject.asObservable();
  }
  setActiveTab(tab) {
    this.currentTabSubject.next(tab);
  }
  getCurrentTab() {
    return this.currentTabSubject.value;
  }
  static {
    this.ctorParameters = () => [];
  }
};
TabService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], TabService);


/***/ }),

/***/ 84920:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-img {
  width: 25px;
}

.border-tab {
  border-top-color: var(--ion-color-primary1);
  border-top-width: 2px;
  border-top-style: solid;
}

.numeroUnread {
  background: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15%;
  top: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/tabs/tabs.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/tabs/tabs.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;ACCJ;;ADEA;EACI,2CAAA;EACA,qBAAA;EACA,uBAAA;ACCJ;;ADEA;EACI,eAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;ACAJ","sourcesContent":["ion-img {\n    width: 25px;\n}\n\n.border-tab {\n    border-top-color: var(--ion-color-primary1);\n    border-top-width: 2px;\n    border-top-style: solid;\n}\n\n.numeroUnread {\n    background: red;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    right: 15%;\n    top: 15%;\n\n    display: flex; \n    align-items: center; \n    justify-content: center; \n    color: white; \n    font-size: 12px; \n    font-weight: bold;\n}\n","ion-img {\n  width: 25px;\n}\n\n.border-tab {\n  border-top-color: var(--ion-color-primary1);\n  border-top-width: 2px;\n  border-top-style: solid;\n}\n\n.numeroUnread {\n  background: red;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 15%;\n  top: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 60600:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"discover\" [ngClass]=\"{'border-tab' : activeDiscover}\" class=\"border-tab\" (click)=\"changeIcon('discover')\">\n      <ion-img *ngIf=\"activeDiscover\" src=\"../../../assets/icon/05-Discover_active.png\"></ion-img>\n      <ion-img *ngIf=\"!activeDiscover\" src=\"../../../assets/icon/05-Discover.png\"></ion-img>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"match\" [ngClass]=\"{'border-tab' : activeMatch}\" (click)=\"changeIcon('match')\">\n      <div class=\"red-dot\" *ngIf=\"matchService.newMatch\"></div>\n      <ion-img *ngIf=\"activeMatch\" src=\"../../../assets/icon/heart_active.png\"></ion-img>\n      <ion-img *ngIf=\"!activeMatch\" src=\"../../../assets/icon/heart.png\"></ion-img>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"experience\" [ngClass]=\"{'border-tab' : activeExperience}\" (click)=\"changeIcon('experience')\">\n      <ion-img *ngIf=\"activeExperience\" src=\"../../../assets/icon/04-Experince_active.png\"></ion-img>\n      <ion-img *ngIf=\"!activeExperience\" src=\"../../../assets/icon/04-Experince.png\"></ion-img>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"message\" [ngClass]=\"{'border-tab' : activeMessage}\" (click)=\"changeIcon('message')\">\n      <ion-img *ngIf=\"activeMessage\" src=\"../../../assets/icon/07-Messages_active.png\"></ion-img>\n      <ion-img *ngIf=\"!activeMessage\" src=\"../../../assets/icon/07-Message.png\"></ion-img>\n      <div *ngIf=\"unreadMessages !== 0\" class=\"numeroUnread\">{{unreadMessages}}</div>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\" [ngClass]=\"{'border-tab' : activeAccount}\" (click)=\"changeIcon('account')\">\n      <ion-img *ngIf=\"activeAccount\" src=\"../../../assets/icon/08-Account_active.png\"></ion-img>\n      <ion-img *ngIf=\"!activeAccount\" src=\"../../../assets/icon/08-Account.png\"></ion-img>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map