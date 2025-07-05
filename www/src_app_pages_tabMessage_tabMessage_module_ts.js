(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabMessage_tabMessage_module_ts"],{

/***/ 40248:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabMessage/tabMessage-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabMessagePageRoutingModule: () => (/* binding */ TabMessagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _tabMessage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabMessage.page */ 43412);




const routes = [{
  path: '',
  component: _tabMessage_page__WEBPACK_IMPORTED_MODULE_0__.TabMessagePage
}];
let TabMessagePageRoutingModule = class TabMessagePageRoutingModule {};
TabMessagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TabMessagePageRoutingModule);


/***/ }),

/***/ 93816:
/*!*******************************************************!*\
  !*** ./src/app/pages/tabMessage/tabMessage.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabMessagePageModule: () => (/* binding */ TabMessagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _tabMessage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabMessage-routing.module */ 40248);
/* harmony import */ var _tabMessage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabMessage.page */ 43412);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let TabMessagePageModule = class TabMessagePageModule {};
TabMessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tabMessage_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabMessagePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_tabMessage_page__WEBPACK_IMPORTED_MODULE_1__.TabMessagePage]
})], TabMessagePageModule);


/***/ }),

/***/ 43412:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabMessage/tabMessage.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabMessagePage: () => (/* binding */ TabMessagePage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _tabMessage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabMessage.page.html?ngResource */ 320);
/* harmony import */ var _tabMessage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabMessage.page.scss?ngResource */ 10976);
/* harmony import */ var _tabMessage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabMessage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_talk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/talk.service */ 68648);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 90628);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ui.service */ 44136);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/match.service */ 5876);











let TabMessagePage = class TabMessagePage {
  constructor(talkService, router, activatedRoute, userService, uiService, translate, matchService) {
    this.talkService = talkService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.userService = userService;
    this.uiService = uiService;
    this.translate = translate;
    this.matchService = matchService;
    this.mostrarNoExiste = false;
    this.mostrarChat = false;
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.idConversation = this.router.getCurrentNavigation().extras.state.idConversation;
        console.log('idConversation: ', this.idConversation);
      }
      this.createInbox();
    });
  }
  ngOnInit() {}
  createInbox() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.mostrarNoExiste = false;
      _this.mostrarChat = false;
      _this.uiService.showLoader();
      try {
        const user = yield _this.userService.getUserBasic('');
        // Fallback if no conversation ID
        if (!_this.idConversation) {
          const resp = yield _this.matchService.getConversationXUsr(user.personId);
          if (!resp || resp.length === 0) {
            _this.mostrarNoExiste = true;
            return;
          }
          _this.idConversation = resp[0]; // fallback to first conversation
        }
        // Create TalkJS session and inbox with custom theme
        _this.session = yield _this.talkService.createCurrentSession(user.personId, user.firstName);
        _this.inbox = yield _this.session.createInbox({
          // selected: this.session.getOrCreateConversation(this.idConversation),
          theme: 'ifamily' // <- make sure you have this theme in dashboard
        });
        yield _this.inbox.mount(_this.talkjsContainer.nativeElement);
        _this.mostrarChat = true;
      } catch (error) {
        console.error('Failed to create TalkJS inbox:', error);
        _this.mostrarNoExiste = true;
      } finally {
        _this.uiService.hideLoader();
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _services_talk_service__WEBPACK_IMPORTED_MODULE_3__.TalkService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_5__.UiService
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_6__.MatchService
    }];
  }
  static {
    this.propDecorators = {
      talkjsContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
        args: ['talkjsContainer']
      }]
    };
  }
};
TabMessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-tabMessage',
  template: _tabMessage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tabMessage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TabMessagePage);


/***/ }),

/***/ 10976:
/*!******************************************************************!*\
  !*** ./src/app/pages/tabMessage/tabMessage.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hdExperience {
  background: var(--ion-color-blanco);
  padding-bottom: 0px;
  margin-bottom: 20px;
}

ion-toolbar {
  --background: white;
}

.titleExperience {
  font-family: "Sk-Modernist-Bold";
  font-size: 24px;
}

.ocultar {
  display: none;
}

.txtTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-bottom: 0;
  text-align: center;
}

.talkjs-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hide chat when !mostrarChat */
.ocultar {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/tabMessage/tabMessage.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/tabMessage/tabMessage.page.scss"],"names":[],"mappings":"AAAA;EACI,mCAAA;EACA,mBAAA;EACA,mBAAA;ACCJ;;ADCA;EACI,mBAAA;ACEJ;;ADAA;EACI,gCAAA;EACA,eAAA;ACGJ;;ADAA;EACI,aAAA;ACGJ;;ADDA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;EACA,kBAAA;ACIJ;;ADCA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ACEF;;ADCA,gCAAA;AACA;EACE,aAAA;ACEF","sourcesContent":[".hdExperience {\n    background: var(--ion-color-blanco);\n    padding-bottom: 0px;\n    margin-bottom: 20px;\n}\nion-toolbar{\n    --background: white;\n}\n.titleExperience {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 24px;\n}\n\n.ocultar{\n    display: none;\n}\n.txtTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-bottom: 0;\n    text-align: center;\n}\n\n\n\n.talkjs-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Hide chat when !mostrarChat */\n.ocultar {\n  display: none;\n}\n",".hdExperience {\n  background: var(--ion-color-blanco);\n  padding-bottom: 0px;\n  margin-bottom: 20px;\n}\n\nion-toolbar {\n  --background: white;\n}\n\n.titleExperience {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 24px;\n}\n\n.ocultar {\n  display: none;\n}\n\n.txtTitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.talkjs-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Hide chat when !mostrarChat */\n.ocultar {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 320:
/*!******************************************************************!*\
  !*** ./src/app/pages/tabMessage/tabMessage.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"hdExperience ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-title class=\"titleExperience\" mode=\"ios\">{{ 'CHAT.TitleTxt' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"chat-content\">\n  <div #talkjsContainer class=\"talkjs-container\"  [ngClass]=\"{'ocultar': !mostrarChat}\">Loading...</div>\n  <h1 class=\"txtTitle\" *ngIf=\"mostrarNoExiste\">{{ 'CHAT.NotFound' | translate }}</h1>\n</ion-content>\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabMessage_tabMessage_module_ts.js.map