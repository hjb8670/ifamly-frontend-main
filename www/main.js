(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 80484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/user.guard */ 79688);
/* harmony import */ var _guards_init_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/init.guard */ 84020);





const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'registry'
}, {
  path: 'main',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 39532)).then(m => m.TabsPageModule),
  canLoad: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard]
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/login/login.module */ 9151)).then(m => m.LoginPageModule)
  // canActivate: [InitGuard],
}, {
  path: 'registry',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_registry_registry_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/registry/registry.module */ 48600)).then(m => m.RegistryPageModule),
  canActivate: [_guards_init_guard__WEBPACK_IMPORTED_MODULE_1__.InitGuard]
}, {
  path: 'my-mobile',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_my-mobile_my-mobile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/my-mobile/my-mobile.module */ 47932)).then(m => m.MyMobilePageModule)
}, {
  path: 'experience-menu-popover',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_experience_experience-menu-popover_experience-menu-popover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/experience/experience-menu-popover/experience-menu-popover.module */ 94104)).then(m => m.ExperienceMenuPopoverPageModule)
}, {
  path: 'verification-code',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_verification-code_verification-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/verification-code/verification-code.module */ 83748)).then(m => m.VerificationCodePageModule)
}, {
  path: 'profile-details',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_auth_profile-details_profile-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/profile-details/profile-details.module */ 88676)).then(m => m.ProfileDetailsPageModule)
}, {
  path: 'about-me',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_about-me_about-me_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/about-me/about-me.module */ 40932)).then(m => m.AboutMePageModule)
  // canLoad: [ UserGuard ]
}, {
  path: 'i-am-alooking-for',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_i-am-alooking-for_i-am-alooking-for_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/i-am-alooking-for/i-am-alooking-for.module */ 90500)).then(m => m.IAmALookingForPageModule)
  // canLoad: [ UserGuard ]
}, {
  path: 'location',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_auth_location_location_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/location/location.module */ 94139)).then(m => m.LocationPageModule)
}, {
  path: 'detail-exp',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_experience_service_ts"), __webpack_require__.e("default-src_app_pages_match_detail-match-menu-popover_detail-match-menu-popover_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_experience_detail-exp_detail-exp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/experience/detail-exp/detail-exp.module */ 52436)).then(m => m.DetailExpPageModule),
  canLoad: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard]
}, {
  path: 'new-edit-exp',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_experience_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_experience_new-edit-exp_new-edit-exp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/experience/new-edit-exp/new-edit-exp.module */ 38288)).then(m => m.NewEditExpPageModule),
  canLoad: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard]
}, {
  path: 'detail-match',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_match_detail-match-menu-popover_detail-match-menu-popover_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_match_detail-match_detail-match_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/match/detail-match/detail-match.module */ 90516)).then(m => m.DetailMatchPageModule),
  canLoad: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard]
}, {
  path: 'leave-ratings',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic_core_components_animation_js"), __webpack_require__.e("default-node_modules_ionic_core_components_ios_transition_js"), __webpack_require__.e("default-node_modules_ion-rating-stars_fesm2022_ion-rating-stars_mjs"), __webpack_require__.e("src_app_pages_match_leave-ratings_leave-ratings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/match/leave-ratings/leave-ratings.module */ 90396)).then(m => m.LeaveRatingsPageModule),
  canLoad: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard]
}, {
  path: 'ratings',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_match_ratings_ratings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/match/ratings/ratings.module */ 45744)).then(m => m.RatingsPageModule),
  canLoad: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard]
}, {
  path: 'edit-account',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_account_edit-account_edit-account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/edit-account/edit-account.module */ 54292)).then(m => m.EditAccountPageModule)
}, {
  path: 'settings-account',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_settings-account_settings-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/settings-account/settings-account.module */ 97768)).then(m => m.SettingsAccountPageModule)
}, {
  path: 'detail-match-menu-popover',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_match_detail-match-menu-popover_detail-match-menu-popover_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_match_detail-match-menu-popover_detail-match-menu-popover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/match/detail-match-menu-popover/detail-match-menu-popover.module */ 91560)).then(m => m.DetailMatchMenuPopoverPageModule)
}, {
  path: 'photos-view',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_extras_photos-view_photos-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/extras/photos-view/photos-view.module */ 48628)).then(m => m.PhotosViewPageModule)
}, {
  path: 'params',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_extras_privacy_privacy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/extras/privacy/privacy.module */ 4836)).then(m => m.PrivacyPageModule)
}, {
  path: 'forgot-password',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/forgot-password/forgot-password.module */ 30332)).then(m => m.ForgotPasswordPageModule)
}, {
  path: 'change-password',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_extras_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/extras/change-password/change-password.module */ 44480)).then(m => m.ChangePasswordPageModule)
}, {
  path: 'report-popover',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_match_report-popover_report-popover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/match/report-popover/report-popover.module */ 77792)).then(m => m.ReportPopoverPageModule)
}, {
  path: 'leave-ratings-experience',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_experience_service_ts"), __webpack_require__.e("default-node_modules_ionic_core_components_animation_js"), __webpack_require__.e("default-node_modules_ionic_core_components_ios_transition_js"), __webpack_require__.e("default-node_modules_ion-rating-stars_fesm2022_ion-rating-stars_mjs"), __webpack_require__.e("src_app_pages_experience_leave-ratings-experience_leave-ratings-experience_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/experience/leave-ratings-experience/leave-ratings-experience.module */ 12140)).then(m => m.LeaveRatingsExperiencePageModule)
}, {
  path: 'ratings-experience',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_experience_service_ts"), __webpack_require__.e("src_app_pages_experience_ratings-experience_ratings-experience_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/experience/ratings-experience/ratings-experience.module */ 85440)).then(m => m.RatingsExperiencePageModule)
}, {
  path: 'ratings-experience-assistant',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_experience_service_ts"), __webpack_require__.e("src_app_pages_experience_ratings-experience-assistant_ratings-experience-assistant_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/experience/ratings-experience-assistant/ratings-experience-assistant.module */ 78548)).then(m => m.RatingsExperienceAssistantPageModule)
}, {
  path: 'leave-ratings-experience-assistant',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_experience_service_ts"), __webpack_require__.e("default-node_modules_ionic_core_components_animation_js"), __webpack_require__.e("default-node_modules_ionic_core_components_ios_transition_js"), __webpack_require__.e("default-node_modules_ion-rating-stars_fesm2022_ion-rating-stars_mjs"), __webpack_require__.e("src_app_pages_experience_leave-ratings-experience-assistant_leave-ratings-experience-assistan-a1021b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/experience/leave-ratings-experience-assistant/leave-ratings-experience-assistant.module */ 19220)).then(m => m.LeaveRatingsExperienceAssistantPageModule)
}, {
  path: 'selectlang',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_selectlang_selectlang_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/selectlang/selectlang.module */ 15056)).then(m => m.SelectlangPageModule)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 86108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 10440);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 25004);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/es-MX */ 10932);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/language.service */ 42608);
/* harmony import */ var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/firebase-auth.service */ 26372);
/* harmony import */ var _services_google_sign_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/google-sign-in.service */ 24572);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _pages_selectlang_selectlang_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/selectlang/selectlang.page */ 49036);













(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.registerLocaleData)(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_8__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.registerLocaleData)(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_8__["default"], 'es');
let AppComponent = class AppComponent {
  constructor(languageService, firebaseAuthService, modalController, navCtrl, googleSingInService) {
    this.languageService = languageService;
    this.firebaseAuthService = firebaseAuthService;
    this.modalController = modalController;
    this.navCtrl = navCtrl;
    this.googleSingInService = googleSingInService;
    this.initializeApp();
  }
  ngOnInit() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  initializeApp() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Initialize Language Service
        const lang = yield _this.languageService.getSavedLanguage();
        if (lang) {
          // If language is saved, set the language and navigate to the login screen
          console.log(lang);
          _this.languageService.setLanguage(lang);
          _this.navCtrl.navigateRoot('/registry'); // Navigate to login page
        } else {
          // If no language is saved, navigate to language selection page
          _this.languageService.setInitialAppLanguage(); // Initialize the app language
          const modal = yield _this.modalController.create({
            component: _pages_selectlang_selectlang_page__WEBPACK_IMPORTED_MODULE_6__.SelectlangPage,
            backdropDismiss: false,
            cssClass: 'popupclass'
          });
          modal.onDidDismiss().then( /*#__PURE__*/function () {
            var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataReturned) {});
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          return yield modal.present();
        }
      } catch (error) {
        console.log('Failed to initialize LANGUAGE: ', error);
        // Fallback to the language selection page in case of an error
        const modal = yield _this.modalController.create({
          component: _pages_selectlang_selectlang_page__WEBPACK_IMPORTED_MODULE_6__.SelectlangPage,
          backdropDismiss: false,
          cssClass: 'popupclass'
        });
        modal.onDidDismiss().then( /*#__PURE__*/function () {
          var _ref2 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dataReturned) {});
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
        return yield modal.present();
      }
      try {
        // Initialize Firebase Auth Service
        yield _this.firebaseAuthService.initialize();
      } catch (error) {
        console.log('Failed to initialize FIREBASE SERVICES: ', error);
      }
      try {
        // Initialize Google SignIn Service
        _this.googleSingInService.initialize();
      } catch (error) {
        console.log('Failed to initialize GOOGLE SERVICES: ', error);
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
    }, {
      type: _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
    }, {
      type: _services_google_sign_in_service__WEBPACK_IMPORTED_MODULE_5__.GoogleSignInService
    }];
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.LOCALE_ID,
    useValue: 'es-MX'
  }],
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   createTranslateLoader: () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 50168);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 80484);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 86108);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 33712);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 36724);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 36716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 16088);
/* harmony import */ var _services_google_translate_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/google-translate.loader */ 47944);








//Librerias para Localizar App





function createTranslateLoader(http) {
  return new _services_google_translate_loader__WEBPACK_IMPORTED_MODULE_3__.GoogleTranslateLoader(http);
}
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient]
    }
  }), _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig), _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 84020:
/*!**************************************!*\
  !*** ./src/app/guards/init.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitGuard: () => (/* binding */ InitGuard)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 90628);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/match.service */ 5876);






let InitGuard = class InitGuard {
  constructor(userService, router, matchService) {
    this.userService = userService;
    this.router = router;
    this.matchService = matchService;
    this.isInitialized = false;
  }
  canActivate() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isInitialized) {
        return true;
      }
      // Realiza la validación inicial
      const {
        rs
      } = yield _this.userService.getUserRS();
      if (rs === 'email' && (yield _this.userService.loginWithEmail())) {
        _this.isInitialized = true;
        yield _this.goDiscovers();
        return false;
      } else if (rs === 'google' && (yield _this.userService.loginWithGoogle())) {
        _this.isInitialized = true;
        yield _this.goDiscovers();
        return false;
      } else if (rs === 'apple' && (yield _this.userService.loginWithApple())) {
        _this.isInitialized = true;
        //this.router.navigate(['/main/tabs/discover']);
        yield _this.goDiscovers();
        return false;
      }
      // Si no hay credenciales válidas, permite el acceso a la pantalla de login
      _this.isInitialized = true;
      return true;
    })();
  }
  goDiscovers() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const discoverUsrs = yield _this2.preLoadDis();
      console.log('GO DISCOVER USRS: ', discoverUsrs);
      let navegationExtras = {
        state: {
          discoverUsrs
        }
      };
      yield _this2.router.navigate(['/main/tabs/discover'], navegationExtras);
    })();
  }
  preLoadDis() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const filter = {
          selfRole: null,
          targetRole: null,
          ageIni: 18,
          ageEnd: 100,
          distance: 1,
          minHeight: 1,
          maxHeight: 100,
          exercise: null,
          zodiacSign: null,
          education: null,
          drinking: null,
          smoking: null,
          kids: null,
          religion: null,
          location: null
        };
        let discoverU = yield _this3.matchService.getDiscoverProfiles("0", "10", filter);
        yield _this3.setAvatarImg(discoverU);
        console.log('RE-LOAD DISCOVER_USR: ', discoverU);
        return discoverU;
      } catch (error) {
        console.log('ERROR AL RECARGAR PROFILES');
        return [];
      }
    })();
  }
  setAvatarImg(usrDicover) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // for (const usr of usrDicover) {
  //   usr.image = '../../../assets/icon/30-Default_no-image.jpeg';
  //   const res_imgs =  <ImagesUser[]> await this.matchService.getIMGS(usr.personId.toString());
  //   for (const img of res_imgs) {
  //     if(img.avatar) {
  //       usr.image = img.multimediaUrl;
  //     }
  //   }
  // }
  static {
    this.ctorParameters = () => [{
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_2__.MatchService
    }];
  }
};
InitGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], InitGuard);


/***/ }),

/***/ 79688:
/*!**************************************!*\
  !*** ./src/app/guards/user.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserGuard: () => (/* binding */ UserGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 90628);



let UserGuard = class UserGuard {
  constructor(usuarioService) {
    this.usuarioService = usuarioService;
  }
  canActivate(route, state) {
    return true;
  }
  canLoad(route, segments) {
    return this.usuarioService.validaToken();
  }
  static {
    this.ctorParameters = () => [{
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService
    }];
  }
};
UserGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], UserGuard);


/***/ }),

/***/ 49036:
/*!*****************************************************!*\
  !*** ./src/app/pages/selectlang/selectlang.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectlangPage: () => (/* binding */ SelectlangPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _selectlang_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectlang.page.html?ngResource */ 1634);
/* harmony import */ var _selectlang_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectlang.page.scss?ngResource */ 26392);
/* harmony import */ var _selectlang_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selectlang_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 42608);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50168);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 72584);













let SelectlangPage = class SelectlangPage {
  constructor(languageService, navCtrl, sanitizer, activeroute, modalController, navparams) {
    this.languageService = languageService;
    this.navCtrl = navCtrl;
    this.sanitizer = sanitizer;
    this.activeroute = activeroute;
    this.modalController = modalController;
    this.navparams = navparams;
    this.languages = [];
    this.showScrollIcon = true;
    this.pageid = this.navparams.get('pageid');
    console.log(this.pageid);
    console.log('🧪 SelectlangPage loaded');
  }
  ionViewDidEnter() {
    this.languages = this.languageService.getLanguages();
  }
  close() {
    this.modalController.dismiss();
  }
  sanitizeFlag(flag) {
    return this.sanitizer.bypassSecurityTrustHtml(flag);
  }
  selectLanguage(lang) {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.pageid == 'settings') {
        console.log(lang);
        _this.languageService.setLanguage(lang.value);
        _this.navCtrl.navigateRoot('/main/tabs/account');
        _this.modalController.dismiss();
      } else {
        _this.languageService.setLanguage(lang.value);
        // navigate to next page after selection (e.g., Home or Onboarding)
        _this.navCtrl.navigateRoot('/registry');
        _this.modalController.dismiss();
      }
    })();
  }
  onScroll() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scrollEl = yield _this2.content.getScrollElement();
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight;
      const offsetHeight = scrollEl.offsetHeight;
      const scrollBottom = scrollTop + offsetHeight;
      const isAtBottom = scrollBottom >= scrollHeight - 30; // buffer
      _this2.showScrollIcon = !isAtBottom;
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams
    }];
  }
  static {
    this.propDecorators = {
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
        args: ['scrollableContent', {
          static: false
        }]
      }]
    };
  }
};
SelectlangPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  standalone: true,
  selector: 'app-selectlang',
  template: _selectlang_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule],
  styles: [(_selectlang_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SelectlangPage);


/***/ }),

/***/ 2160:
/*!***************************************************!*\
  !*** ./src/app/services/apple-sign-in.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppleSignInService: () => (/* binding */ AppleSignInService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 16088);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 39280);
/* harmony import */ var _capacitor_community_apple_sign_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/apple-sign-in */ 73472);






let AppleSignInService = class AppleSignInService {
  constructor(afAuth) {
    this.afAuth = afAuth;
    this.optionsAppleSignIn = {
      clientId: 'com.hit2b.iFamily',
      redirectURI: 'https://ifamily-180d6.firebaseapp.com/__/auth/handler',
      scopes: 'email name',
      state: '12345'
    };
  }
  signInWithAppleNative() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const appleAuthResponse = yield _capacitor_community_apple_sign_in__WEBPACK_IMPORTED_MODULE_2__.SignInWithApple.authorize(_this.optionsAppleSignIn);
        const credential = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.OAuthProvider('apple.com').credential({
          idToken: appleAuthResponse.response.identityToken
        });
        const firebaseUserCredential = yield _this.afAuth.signInWithCredential(credential);
        return firebaseUserCredential.user;
      } catch (error) {
        console.error('Error during sign in with Apple', error);
        return null;
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth
    }];
  }
};
AppleSignInService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], AppleSignInService);


/***/ }),

/***/ 92288:
/*!**************************************************!*\
  !*** ./src/app/services/data-storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataStorageService: () => (/* binding */ DataStorageService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 2108);




let DataStorageService = class DataStorageService {
  constructor() {}
  set(key, value) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
        key: key,
        value: value
      });
    })();
  }
  get(key) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        value
      } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({
        key: key
      });
      return value;
    })();
  }
  remove(key) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
        key: key
      });
    })();
  }
  static {
    this.ctorParameters = () => [];
  }
};
DataStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], DataStorageService);


/***/ }),

/***/ 26372:
/*!***************************************************!*\
  !*** ./src/app/services/firebase-auth.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAuthService: () => (/* binding */ FirebaseAuthService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 36716);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ 82100);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/auth */ 48116);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 23680);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75100);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 26464);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 37496);
/* harmony import */ var _apple_sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apple-sign-in.service */ 2160);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ 90628);
/* harmony import */ var _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor-firebase/authentication */ 2584);






//import { OAuthProvider } from '@firebase/auth-types';





let FirebaseAuthService = class FirebaseAuthService {
  constructor(platform, ngZone, appleSignInService, usrService) {
    var _this = this;
    this.platform = platform;
    this.ngZone = ngZone;
    this.appleSignInService = appleSignInService;
    this.usrService = usrService;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.ReplaySubject(1);
    this.authStateSubj = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.phoneCodeSentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthentication.removeAllListeners().then(() => {
      _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthentication.addListener('authStateChange', change => {
        this.ngZone.run(() => {
          this.authStateSubj.next(change);
        });
      });
      _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthentication.addListener('phoneCodeSent', /*#__PURE__*/function () {
        var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
          _this.ngZone.run(() => {
            _this.phoneCodeSentSubject.next(event);
          });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      // Only needed to support dev livereload.
      _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthentication.getCurrentUser().then(result => {
        this.currentUserSubject.next(result.user);
      });
    });
  }
  get authState$() {
    return this.authStateSubj.asObservable();
  }
  initialize() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.platform.is('capacitor')) {
        return;
      }
      (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.firebaseConfig);
    })();
  }
  get currentUser$() {
    return this.currentUserSubject.asObservable();
  }
  //Obtener el usuario actual
  getCurrentUser() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.lastValueFrom)(this.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.take)(1)));
  }
  //Obtener el token de autenticación
  getIdToken(options) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthentication.getIdToken(options);
      return result.token;
    })();
  }
  //Validación con telefono y generación de código SMS
  signInWithPhoneNumber(options) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthentication.signInWithPhoneNumber(options);
    })();
  }
  confirmVerificationCode(options) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthentication.confirmVerificationCode(options);
    })();
  }
  get phoneCodeSent$() {
    return this.phoneCodeSentSubject.asObservable();
  }
  sendVerificationCodeEmail(email, lang) {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.usrService.getCodeEmail(email, lang);
    })();
  }
  validaCodeEmail(email, code) {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.usrService.validaCodeEmail(email, code);
    })();
  }
  //SignIn con Apple
  signInWithApple() {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.platform.is('ios')) {
        return yield _this5.appleSignInService.signInWithAppleNative();
      } else {
        return yield _this5.signInWithAppleWeb();
      }
    })();
  }
  signInWithAppleWeb() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthentication.signInWithApple()).user;
    })();
  }
  getidToken() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
      console.log('Usr: ', auth.currentUser);
      yield (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getIdToken)(auth.currentUser, true).then(idToken => {
        console.log("IdToken: ", idToken);
      });
    })();
  }
  //Cerrar sesión
  logout() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthentication.signOut();
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone
    }, {
      type: _apple_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.AppleSignInService
    }, {
      type: _user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
    }];
  }
};
FirebaseAuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
  providedIn: 'root'
})], FirebaseAuthService);


/***/ }),

/***/ 24572:
/*!****************************************************!*\
  !*** ./src/app/services/google-sign-in.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleSignInService: () => (/* binding */ GoogleSignInService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 10323);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 95480);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ 36716);







let GoogleSignInService = class GoogleSignInService {
  constructor(platform) {
    this.platform = platform;
    this.userLogged = null;
    this.firebase = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig);
  }
  initialize() {
    if (this.platform.is('capacitor')) {
      return;
    }
    _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuth.initialize({
      clientId: '1008524938992-tesl4nq07h550n063b9p28kenopd0ule.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true
    });
  }
  /* public async refreshToken(): Promise<string>{
    let currentTokens: Authentication;
       await GoogleAuth.refresh()
        .then((data) => {
            //console.log('REFRESH TOKEN: ', data);
            if (data.accessToken) {
                currentTokens = data;            }
        })
        .catch((error) => {
            console.log('ERROR REFRESH TOKEN: ', error);
            if (error.type === 'userLoggedOut') {
                console.log('USER LOGGED OUT');
            }
        });
       return currentTokens?.idToken;
  } */
  refreshToken() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const data = yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuth.refresh();
        if (data.accessToken) {
          console.log('Token de Google refrescado correctamente:', data.accessToken);
          return data.idToken || null;
        }
      } catch (error) {
        console.log('ERROR REFRESH TOKEN:', error);
        if (error.type === 'userLoggedOut' || error.message === 'User not logged in.') {
          console.log('El usuario no está autenticado. Iniciando sesión con Google...');
          const user = yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuth.signIn();
          return user.authentication.idToken || null;
        }
      }
      return null;
    })();
  }
  loginViaGoogle() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let user_t = null;
      yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuth.signIn().then(user => {
        user_t = user;
      }).catch(error => {
        console.log('ERROR LOGIN VIA GOOGLE: ', error);
      });
      return user_t;
    })();
  }
  logout() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuth.signOut().then(user => {
        console.log('SUCCESS LOGOUT');
      }).catch(error => {
        console.log('ERROR LOGOUT VIA GOOGLE: ', error);
      });
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
    }];
  }
};
GoogleSignInService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], GoogleSignInService);


/***/ }),

/***/ 47944:
/*!*****************************************************!*\
  !*** ./src/app/services/google-translate.loader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleTranslateLoader: () => (/* binding */ GoogleTranslateLoader)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7080);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 21296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44816);
/* harmony import */ var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/i18n/en.json */ 88848);


class GoogleTranslateLoader {
  constructor(http) {
    this.http = http;
    this.apiKey = 'AIzaSyDrPqtPfXGYIBk_7O-xG4SST3-q5SNaGHU';
  }
  getTranslation(lang) {
    if (lang === 'en') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(Promise.resolve(_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_0__));
    }
    // ✅ Check localStorage cache
    const cached = localStorage.getItem(`translation_${lang}`);
    if (cached) {
      console.log(JSON.parse(cached));
      console.log(`[CACHE] Loaded ${lang} translations from localStorage`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(Promise.resolve(JSON.parse(cached)));
    }
    const flattened = this.flattenObject(_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_0__);
    const keys = Object.keys(flattened);
    const values = Object.values(flattened);
    const requests = values.map(text => {
      const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
      const body = {
        q: text,
        source: 'en',
        target: lang,
        format: 'text',
        model: 'nmt'
      };
      return this.http.post(url, body);
    });
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(requests).subscribe({
        next: responses => {
          const translatedTexts = responses.map(r => r.data.translations[0].translatedText);
          const translatedObj = this.unflattenObject(keys, translatedTexts);
          // 🧠 Save to localStorage
          localStorage.setItem(`translation_${lang}`, JSON.stringify(translatedObj));
          console.log(`[CACHE] Saved ${lang} translations to localStorage`);
          observer.next(translatedObj);
          observer.complete();
        },
        error: err => {
          console.error('[Translation API Error]', err);
          observer.error(err);
        }
      });
    });
  }
  flattenObject(obj, parentKey = '', result = {}) {
    for (let key in obj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object') {
        this.flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
    return result;
  }
  unflattenObject(keys, values) {
    const result = {};
    keys.forEach((key, index) => {
      const parts = key.split('.');
      let current = result;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i === parts.length - 1) {
          current[part] = values[index];
        } else {
          current[part] = current[part] || {};
          current = current[part];
        }
      }
    });
    return result;
  }
}

/***/ }),

/***/ 42608:
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 2108);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 72584);






const LNG_KEY = 'SELECTED_LANGUAGE';
const TRANSLATION_CACHE_KEY = 'TRANSLATION_CACHE';
let LanguageService = class LanguageService {
  constructor(translate, http) {
    this.translate = translate;
    this.http = http;
    this.languages = [];
    this.selected = '';
    this.apiKey = 'AIzaSyDrPqtPfXGYIBk_7O-xG4SST3-q5SNaGHU'; // 🔐 Add your API Key here
    this.targetLang = 'en';
    this.translationCache = new Map();
  }
  setInitialAppLanguage() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let language = 'en'; // Fallback language
      try {
        // Ensure the translate service is initialized
        _this.setLanguage(language);
        const savedLanguage = yield _this.getSavedLanguage();
        if (savedLanguage) {
          _this.setLanguage(savedLanguage);
          _this.selected = savedLanguage;
        } else {
          _this.setLanguage(language);
        }
      } catch (error) {
        console.error("Error setting initial language", error);
        // Fallback to default language if any error occurs
        _this.setLanguage(language);
      }
    })();
  }
  getSavedLanguage() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({
        key: LNG_KEY
      });
      return result.value || ''; // Return saved language or empty string if not found
    })();
  }
  setLanguage(lng) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.translate.use(lng); // Change the language dynamically
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
        key: LNG_KEY,
        value: lng
      });
    })();
  }
  translateText(text) {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cacheKey = `${_this3.targetLang}-${text}`;
      if (_this3.translationCache.has(cacheKey)) {
        return _this3.translationCache.get(cacheKey);
      }
      const url = `https://translation.googleapis.com/language/translate/v2?key=${_this3.apiKey}`;
      const body = {
        q: text,
        target: _this3.targetLang
      };
      try {
        const res = yield _this3.http.post(url, body).toPromise();
        const translatedText = res.data.translations[0].translatedText;
        _this3.translationCache.set(cacheKey, translatedText);
        return translatedText;
      } catch (err) {
        console.error('Translation error:', err);
        return text; // Return original text in case of error
      }
    })();
  }
  getLanguages() {
    return [{
      text: 'English',
      value: 'en',
      flag: '🇬🇧'
    }, {
      text: '日本語',
      value: 'ja',
      flag: '🇯🇵'
    },
    // Japanese
    {
      text: 'Español',
      value: 'es',
      flag: '🇪🇸'
    },
    // Spanish
    {
      text: 'Français',
      value: 'fr',
      flag: '🇫🇷'
    },
    // French
    {
      text: '한국어',
      value: 'ko',
      flag: '🇰🇷'
    },
    // Korean
    {
      text: 'العربية',
      value: 'ar',
      flag: '🇸🇦'
    },
    // Arabic
    {
      text: '中文 (Zhōngwén)',
      value: 'zh',
      flag: '🇨🇳'
    },
    // Mandarin Chinese
    {
      text: '粵語 (Jyutping)',
      value: 'yue',
      flag: '🇭🇰'
    },
    // Cantonese
    {
      text: '吴语 (Wúyǔ)',
      value: 'wuu',
      flag: '🇨🇳'
    },
    // Shanghainese
    {
      text: 'Русский',
      value: 'ru',
      flag: '🇷🇺'
    },
    // Russian
    {
      text: 'Português',
      value: 'pt',
      flag: '🇵🇹'
    },
    // Portuguese
    {
      text: 'Nederlands',
      value: 'nl',
      flag: '🇳🇱'
    },
    // Dutch
    {
      text: 'Deutsch',
      value: 'de',
      flag: '🇩🇪'
    },
    // German
    {
      text: 'Italiano',
      value: 'it',
      flag: '🇮🇹'
    },
    // Italian
    {
      text: 'Türkçe',
      value: 'tr',
      flag: '🇹🇷'
    },
    // Turkish
    {
      text: 'हिन्दी',
      value: 'hi',
      flag: '🇮🇳'
    },
    // Hindi
    {
      text: 'Svenska',
      value: 'sv',
      flag: '🇸🇪'
    },
    // Swedish
    {
      text: 'Dansk',
      value: 'da',
      flag: '🇩🇰'
    },
    // Danish
    {
      text: 'Norsk',
      value: 'no',
      flag: '🇳🇴'
    },
    // Norwegian
    {
      text: 'Suomi',
      value: 'fi',
      flag: '🇫🇮'
    } // Finnish
    ];
    // return [
    //   { text: 'English', value: 'en', flag: '🇬🇧' },
    //   { text: '中文 (Zhōngwén)', value: 'zh', flag: '🇨🇳' }, // Mandarin Chinese
    //   { text: 'Español', value: 'es', flag: '🇪🇸' },
    //   { text: 'Français', value: 'fr', flag: '🇫🇷' },
    //   { text: 'العربية', value: 'ar', flag: '🇸🇦' },
    //   { text: 'Русский', value: 'ru', flag: '🇷🇺' },
    //   { text: 'Português', value: 'pt', flag: '🇵🇹' },
    //   { text: 'Nederlands', value: 'nl', flag: '🇳🇱' },
    //   { text: 'Deutsch', value: 'de', flag: '🇩🇪' },
    //   { text: '日本語', value: 'ja', flag: '🇯🇵' },
    //   { text: '粵語 (Jyutping)', value: 'yue', flag: '🇭🇰' }, // Cantonese
    //   { text: 'Italiano', value: 'it', flag: '🇮🇹' },
    //   { text: '한국어', value: 'ko', flag: '🇰🇷' },
    //   { text: '吴语 (Wúyǔ)', value: 'wuu', flag: '🇨🇳' }, // Shanghainese
    //   { text: 'Türkçe', value: 'tr', flag: '🇹🇷' },
    //   { text: 'हिन्दी', value: 'hi', flag: '🇮🇳' },
    //   { text: 'Svenska', value: 'sv', flag: '🇸🇪' },
    //   { text: 'Dansk', value: 'da', flag: '🇩🇰' },
    //   { text: 'Norsk', value: 'no', flag: '🇳🇴' },
    //   { text: 'Suomi', value: 'fi', flag: '🇫🇮' },
    // ];
  }
  static {
    this.ctorParameters = () => [{
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
    }];
  }
};
LanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], LanguageService);


/***/ }),

/***/ 5876:
/*!*******************************************!*\
  !*** ./src/app/services/match.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchService: () => (/* binding */ MatchService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 33712);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 36716);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 90628);
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.service */ 44136);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/storage */ 2108);









const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlSrv;
let MatchService = class MatchService {
  map(arg0) {
    throw new Error('Method not implemented.');
  }
  constructor(http, userService, uiService) {
    this.http = http;
    this.userService = userService;
    this.uiService = uiService;
    this.token = '';
  }
  principal() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /* */
      // this.uiService.showLoader();
      _this.user = yield _this.userService.getUserBasic('');
      console.log("Basic prince");
      _this.todayMatchPerson = yield _this.getMatches(src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.matcheOlder.today, _this.user.personId);
      _this.setAvatarImg(_this.todayMatchPerson);
      _this.yesterdayMatchPerson = yield _this.getMatches(src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.matcheOlder.yesterday, _this.user.personId);
      _this.setAvatarImg(_this.yesterdayMatchPerson);
      _this.oldMatchPerson = yield _this.getMatches(src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.matcheOlder.old, _this.user.personId);
      _this.setAvatarImg(_this.oldMatchPerson);
      _this.uiService.hideLoader();
      // console.log('MATCH TODAY: ', this.todayMatchPerson);
      // console.log('MATCH YESTERADY: ', this.yesterdayMatchPerson);
      // console.log('MATCH OLD: ', this.oldMatchPerson);
      if (_this.todayMatchPerson.length > 0) {
        _this.todayMatchPerson.forEach(x => {
          if (!_this.matchPerson.some(m => m.matchId === x.matchId)) {
            _this.matchPerson.push(x);
          }
        });
      }
      _this.todayMatchPerson.length > 1 ? _this.newMatch = true : _this.newMatch = false;
      if (_this.yesterdayMatchPerson.length > 0) {
        _this.yesterdayMatchPerson.forEach(x => {
          if (!_this.matchPerson.some(m => m.matchId === x.matchId)) {
            _this.matchPerson.push(x);
          }
        });
      }
      if (_this.oldMatchPerson.length > 0) {
        _this.oldMatchPerson.forEach(x => {
          if (!_this.matchPerson.some(m => m.matchId === x.matchId)) {
            _this.matchPerson.push(x);
          }
        });
      }
      _this.uiService.loader ? _this.uiService.hideLoader : null;
    })();
  }
  setAvatarImg(matchP) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const usr of matchP) {
        usr.image = '../../../assets/icon/30-Default_no-image.jpeg';
        // validación para tomar el otro usuario del match
        let personId = usr.personLiked.toString() == _this2.user.personId ? usr.personLikes : usr.personLiked;
        let res_imgs = yield _this2.getIMGSOfPerson(personId.toString());
        res_imgs = res_imgs.filter(res => res.avatar);
        usr.image = res_imgs[0]?.multimediaUrl;
        /*for (const img of res_imgs) {
          if(img.avatar) {
            usr.image = img.multimediaUrl;
          }
        }*/
      }
    })();
  }
  getDiscoverProfiles(pagNextId, pagRecordLimit, filter) {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = '';
      // { pagNextId, pagRecordLimit, ...filter };
      // if(Array.isArray(data["selfRole"])){data["selfRole"] = Number(data["selfRole"][0])}
      // if(Array.isArray(data["targetRole"])){data["targetRole"] = Number(data["targetRole"][0])}
      // console.log('DATA (find-profile): ', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this3.userService.token);
      return new Promise(resolve => {
        _this3.http.post(`${URL}/discover/find-profile`, data, {
          headers
        }).subscribe({
          next: function () {
            var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
              if (resp['sCode'] == 200) {
                let usrs_discover = resp['sData'] === undefined ? [] : resp['sData'];
                /* for (const usr of usrs_discover) {
                  let resCat = await this.getCatalogueXUsr(usr.personId.toString(), constants.catalogs.IamA.toString());
                  usr.iam_a = resCat[0]?.name;
                } */
                resolve(usrs_discover);
              } else {
                if (resp['sCode'] == -20) {
                  resolve(null);
                }
                resolve([]);
              }
            });
            return function next(_x) {
              return _ref.apply(this, arguments);
            };
          }(),
          error: err => {
            console.log('ERR OBTENER PERFILES', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getCatalogueXUsr(idDiscover, idCatalogue) {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this4.userService.token);
      return new Promise(resolve => {
        _this4.http.get(`${URL}/catalogue/person/${idDiscover}/catalogue/${idCatalogue}`, {
          headers
        }).subscribe({
          next: resp => {
            let usrs_Discover = resp['sData'];
            if (resp['sCode'] == 2) {
              //const resID = resp['sData'];
              resolve(resp['sData']);
            }
            resolve({});
          },
          error: err => {
            console.log('ERR MATCHES', err);
            resolve({});
          }
        });
      });
    })();
  }
  doMatchProfiles(personLiked, accionId, isLike, isSuperLike, matchId) {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        personLiked,
        accionId,
        isLike,
        isSuperLike,
        matchId
      };
      console.log('DATA (crear-like): ', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this5.userService.token);
      return new Promise(resolve => {
        _this5.http.post(`${URL}/match/crear-like`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RESP (crear-like): ', resp);
            if (resp['sCode'] != 7) {
              resolve(false);
            }
            resolve(true);
          },
          error: err => {
            console.log('ERR CREATE-LIKE', err);
            resolve(false);
          }
        });
      });
    })();
  }
  getMatches(fecha, personIdOwner) {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this6.userService.token);
      return new Promise(resolve => {
        _this6.http.get(`${URL}/match/matches/${fecha}`, {
          headers
        }).subscribe({
          next: function () {
            var _ref2 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
              let usrMatchPerson = resp['sData'];
              for (const usr of usrMatchPerson) {
                let personId = usr.personLiked.toString() == personIdOwner ? usr.personLikes : usr.personLiked;
                let dataUsr = yield _this6.userService.getUser(personId.toString());
                usr.name = dataUsr.firstName;
                usr.lastName = dataUsr.lastName;
                usr.age = dataUsr.age;
              }
              console.log('RES - Matches: ', usrMatchPerson);
              resolve(usrMatchPerson);
            });
            return function next(_x2) {
              return _ref2.apply(this, arguments);
            };
          }(),
          error: err => {
            console.log('ERR MATCHES', err);
            resolve({});
          }
        });
      });
    })();
  }
  /* async getMatchUser( matchId: number ) {
     
       const data = { id: matchId };
       const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);
       return new Promise(resolve => {
      this.http.post(`${URL}/discover/getDiscoveredProfile`, data, { headers }).subscribe({
        next: resp => {
          resolve(resp['sData']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve({});
        }
      });
    });
  } */
  setFeedback(targetProfile, rate, comment) {
    var _this7 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        selfProfile: (yield _this7.userService.getUser('')).personId,
        targetProfile,
        rate,
        comment
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this7.userService.token);
      return new Promise(resolve => {
        _this7.http.post(`${URL}/discover/feedback`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RES SET FEED-BACK: ', resp['sData']);
            resolve(resp['sData']);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  getRates(idMatch) {
    var _this8 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this8.userService.token);
      return new Promise(resolve => {
        _this8.http.get(`${URL}/discover/feedback/${idMatch}`, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RES GET FEEDBACKS: ', resp['sData']);
            resolve(resp['sData']);
          },
          error: err => {
            console.log('ERR MATCHES', err);
            resolve({});
          }
        });
      });
    })();
  }
  uploadIMG(imagesArray) {
    var _this9 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Homologar tamaño de imagenes
      console.log(imagesArray);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this9.userService.token);
      return new Promise(resolve => {
        _this9.http.post(`${URL}/discover/image`, imagesArray, {
          headers
        }).subscribe({
          //this.http.post(`https://ifmly.com/discover/image`, data, { headers }).subscribe({ 
          next: resp => {
            if (resp['sCode'] == 3) {
              resolve(true);
            } else resolve(false);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  uploadIMG2(imagesArray) {
    var _this10 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Homologar tamaño de imagenes
      const {
        value
      } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__.Storage.get({
        key: 'token'
      });
      _this10.token = value;
      console.log(imagesArray);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this10.token);
      return new Promise(resolve => {
        _this10.http.post(`${URL}/discover/image`, imagesArray, {
          headers
        }).subscribe({
          //this.http.post(`https://ifmly.com/discover/image`, data, { headers }).subscribe({ 
          next: resp => {
            if (resp['sCode'] == 3) {
              resolve(true);
            } else resolve(false);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  getIMGS(personId) {
    var _this11 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("GetImags: ", personId);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this11.userService.token);
      return new Promise(resolve => {
        _this11.http.get(`${URL}/discover/image`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] == 200) {
              console.log("images of person :", resp['sData']);
              resolve(resp['sData']);
            } else resolve([]);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getIMGSOfPerson(personId) {
    var _this12 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this12.userService.token);
      return new Promise(resolve => {
        _this12.http.get(`${URL}/discover/image/${personId}`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] == 200) {
              console.log("images of person :", resp['sData']);
              resolve(resp['sData']);
            } else resolve([]);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  setAvatarIMG(imageId) {
    var _this13 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this13.userService.token);
      return new Promise(resolve => {
        _this13.http.get(`${URL}/discover/image/set-avatar/${imageId}`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] == 200) {
              resolve(true);
            } else resolve(false);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  deleteIMG(imageIds) {
    var _this14 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this14.userService.token);
      return new Promise(resolve => {
        _this14.http.request('delete', `${URL}/discover/image`, {
          headers,
          body: imageIds // 👈 Important: sending array in body
        }).subscribe({
          next: resp => {
            resolve(resp['sCode'] == 3);
          },
          error: err => {
            console.log('❌ Delete Error:', err);
            resolve(false);
          }
        });
      });
    })();
  }
  rollbackLike(personaId) {
    var _this15 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this15.userService.token);
      return new Promise(resolve => {
        _this15.http.get(`${URL}/match/rollback/${personaId}`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] == 200) {
              resolve(true);
            } else resolve(false);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  blockMatch(matchId, report) {
    var _this16 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        matchId,
        report
      };
      console.log('DATA (/block-like-match): ', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this16.userService.token);
      return new Promise(resolve => {
        _this16.http.post(`${URL}/match/block-like-match`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RESP (block-like-match): ', resp);
            if (resp['sCode'] != 200) {
              resolve(false);
              return;
            }
            resolve(true);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  getConversationXUsr(personId) {
    var _this17 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this17.userService.token);
      return new Promise(resolve => {
        _this17.http.get(`${URL}/match/conversation/${personId}`, {
          headers
        }).subscribe({
          next: resp => {
            let usrs_Discover = [];
            if (resp['sCode'] === 200) {
              usrs_Discover = resp['sData'];
            }
            resolve(usrs_Discover);
          },
          error: err => {
            console.log('ERR CONVERSATION', err);
            resolve([]);
          }
        });
      });
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
    }, {
      type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
    }, {
      type: _ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService
    }];
  }
};
MatchService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], MatchService);


/***/ }),

/***/ 44136:
/*!****************************************!*\
  !*** ./src/app/services/ui.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiService: () => (/* binding */ UiService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 72584);





let UiService = class UiService {
  constructor(alertController, loadingController, translate) {
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.translate = translate;
  }
  alertOK(message) {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        backdropDismiss: false,
        message,
        buttons: [_this.translate.instant('UI-SERVICE.OKBtn')]
      });
      yield alert.present();
    })();
  }
  alertOK_CANCEL(message) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resUsr = false;
      const alert = yield _this2.alertController.create({
        message,
        buttons: [{
          text: _this2.translate.instant('UI-SERVICE.CANCELBtn'),
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            resUsr = false;
          }
        }, {
          text: _this2.translate.instant('UI-SERVICE.OKBtn'),
          role: 'ok',
          handler: () => {
            console.log('OK clicked');
            resUsr = true;
          }
        }]
      });
      alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
      return role == 'ok';
    })();
  }
  //***** LOADER CONTROL *****
  showLoader() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  hideLoader() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
    }];
  }
};
UiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], UiService);


/***/ }),

/***/ 90628:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 33712);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 2108);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 36716);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-storage.service */ 92288);
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firebase-auth.service */ 26372);
/* harmony import */ var _google_sign_in_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-sign-in.service */ 24572);












const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.urlSrv;
let UserService = class UserService {
  constructor(http, navCtrl, translate, dataStorageService, injector, googleSignInService
  /*  private utilitiesService: UtilitiesService, */) {
    this.http = http;
    this.navCtrl = navCtrl;
    this.translate = translate;
    this.dataStorageService = dataStorageService;
    this.injector = injector;
    this.googleSignInService = googleSignInService;
    this.token = '';
    this.usuario = {};
    this.sesionFin = false;
    this.user = {};
  }
  setUserr(user) {
    this.user = {
      ...this.user,
      ...user
    };
  }
  getUserr() {
    return this.user;
  }
  login(username, password) {
    var _this = this;
    const data = {
      username,
      password
    };
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(`${URL}/authenticate`, data, {
        headers
      }).subscribe({
        next: function () {
          var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
            console.log('RESP LOGIN', resp);
            if (String(resp['token']).length > 0) {
              let res_gToken = yield _this.guardarToken(resp['token']);
              if (res_gToken) {
                const resp_ok = {
                  ok: true,
                  token: resp['token']
                };
                _this.sesionFin = false;
                resolve(resp_ok);
              } else {
                const resp_err = {
                  ok: false,
                  mensaje: "Token Invalido"
                };
                resolve(resp_err);
              }
            } else {
              console.log("ERROR CON EL SERVIDOR", resp);
              _this.token = null;
              yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
                key: 'token'
              });
              resolve(resp);
            }
          });
          return function next(_x) {
            return _ref.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref2 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error) {
            console.log("ERROR CON EL SERVIDOR", _error);
            _this.token = null;
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
              key: 'token'
            });
            resolve(_error);
          });
          return function error(_x2) {
            return _ref2.apply(this, arguments);
          };
        }()
      });
    });
  }
  resetPasssword(email, lang) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Email reset password', email);
      return new Promise(resolve => {
        _this2.http.get(`${URL}/passwoord/resetPW/${email}/${lang}`).subscribe({
          next: resp => {
            resolve(resp['sCode']);
          },
          error: err => {
            console.log('ERROR RESET PASSWORD', err);
            resolve(500);
          }
        });
      });
    })();
  }
  register(usuario) {
    var _this3 = this;
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(`${URL}/register`, usuario, {
        headers
      }).subscribe({
        next: function () {
          var _ref3 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
            resolve(resp);
            /* if (resp['ok']) {
              this.guardarToken(resp['token']);
              resolve(resp);
            } else {
              this.token = null;
              await Storage.remove( {key: 'token'} );
              resolve(resp);
            } */
          });
          return function next(_x3) {
            return _ref3.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref4 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error2) {
            console.log("ERROR CON EL SERVIDOR", _error2);
            _this3.token = null;
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
              key: 'token'
            });
            resolve(_error2);
          });
          return function error(_x4) {
            return _ref4.apply(this, arguments);
          };
        }()
      });
    });
  }
  update(usuario) {
    console.log("editing save on backup : ", usuario);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);
    return new Promise(resolve => {
      this.http.post(`${URL}/discover/update`, usuario, {
        headers
      }).subscribe({
        next: function () {
          var _ref5 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
            if (resp['sCode'] != 1) {
              resolve(false);
              return;
            }
            resolve(true);
            return;
          });
          return function next(_x5) {
            return _ref5.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref6 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error3) {
            console.log("ERROR CON EL SERVIDOR", _error3);
            resolve(false);
          });
          return function error(_x6) {
            return _ref6.apply(this, arguments);
          };
        }()
      });
    });
  }
  locationnewapi(lat, lon) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
    const locationapi = {
      lat: lat,
      lon: lon
    };
    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/location`, locationapi, {
        headers
      }).subscribe({
        next: function () {
          var _ref7 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
            console.log(resp);
            resolve(resp);
          });
          return function next(_x7) {
            return _ref7.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref8 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error4) {
            console.log("ERROR CON EL SERVIDOR", _error4);
            resolve(false);
          });
          return function error(_x8) {
            return _ref8.apply(this, arguments);
          };
        }()
      });
    });
  }
  changePassword(change) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);
    return new Promise(resolve => {
      this.http.post(`${URL}/discover/changePassword`, change, {
        headers
      }).subscribe({
        next: function () {
          var _ref9 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
            resolve(resp['sCode']);
            return;
          });
          return function next(_x9) {
            return _ref9.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref10 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error5) {
            console.log("ERROR CON EL SERVIDOR", _error5);
            resolve(_error5['sCode']);
          });
          return function error(_x10) {
            return _ref10.apply(this, arguments);
          };
        }()
      });
    });
  }
  guardarToken(token) {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.token = token;
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
        key: 'token',
        value: token
      });
      const tokenValido = yield _this4.validaToken();
      if (!tokenValido) {
        return false;
      }
      return true;
    })();
  }
  cargarToken() {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        value
      } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({
        key: 'token'
      });
      _this5.token = value;
    })();
  }
  validaToken() {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.cargarToken();
      if (!_this6.token) {
        _this6.navCtrl.navigateRoot('/login');
        return Promise.resolve(false);
      }
      return new Promise((resolve, reject) => {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this6.token);
        try {
          _this6.http.get(`${URL}/validaToken`, {
            headers
          }).subscribe({
            next: resp => {
              //console.log('RESPUESTA VALIDA TOKEN: ', resp);
              if (resp['sCode'] == 200) {
                //this.usuario = resp;
                resolve(true);
              } else {
                _this6.sesionFin = true;
                _this6.navCtrl.navigateRoot('/login');
                resolve(false);
              }
            },
            error: err => {
              console.log('ERRO VALIDA-TOKEN: ', err);
              _this6.sesionFin = true;
              _this6.navCtrl.navigateRoot('/login');
              resolve(false);
            }
          });
        } catch (err) {
          console.log('ERROR LOGIN: ', err);
          _this6.sesionFin = true;
          _this6.navCtrl.navigateRoot('/login');
          reject(err);
          ;
        }
      });
    })();
  }
  getUser(userX) {
    var _this7 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this7.usuario?.personId) {}
      return new Promise((resolve, reject) => {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this7.token);
        _this7.http.get(`${URL}/discover/get-profile/${userX}`, {
          headers
        }).subscribe({
          next: function () {
            var _ref11 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
              if (resp['sCode'] == 2) {
                let usr = resp['sData'];
                _this7.usuario = usr;
                let res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.IamA), usr.iam_a = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.IamLooking), usr.iam_looking = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Ejercicio), usr.exercise = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Sing), usr.sings = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Educacion), usr.education = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Bebe), usr.drinking = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Fuma), usr.smoking = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Hijos), usr.kids = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Religion), usr.religion = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Gender), usr.gender = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Pronoun), usr.pronoun = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Lenguage), usr.languajes = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Hobbies), usr.hobbies = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Pets), usr.pets = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Values_Traits), usr.valTraits = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Drugs), usr.drugs = res == '' ? null : res;
                res = yield _this7.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Political), usr.political = res == '' ? null : res;
                resolve(usr);
              } else {
                resolve({});
              }
            });
            return function next(_x11) {
              return _ref11.apply(this, arguments);
            };
          }(),
          error: err => {
            console.log('ERRO VALIDA-TOKEN: ', err);
            _this7.sesionFin = true;
            _this7.navCtrl.navigateRoot('/login');
            resolve({});
          }
        });
      });
      //return { ...this.usuario };
    })();
  }
  getUserBasic3(userX) {
    var _this8 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this8.token);
        _this8.http.get(`${URL}/discover/get-profile/` + userX, {
          headers
        }).subscribe({
          next: function () {
            var _ref12 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
              if (resp['sCode'] == 2) {
                console.log('USER BASIC', resp['sData']);
                resolve(resp['sData']);
              } else {
                resolve({});
              }
            });
            return function next(_x12) {
              return _ref12.apply(this, arguments);
            };
          }(),
          error: err => {
            console.log('ERRO VALIDA-TOKEN: ', err);
            _this8.sesionFin = true;
            _this8.navCtrl.navigateRoot('/login');
            resolve({});
          }
        });
      });
    })();
  }
  getUserBasic(userX) {
    var _this9 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this9.token);
        _this9.http.get(`${URL}/discover/get-profile`, {
          headers
        }).subscribe({
          next: function () {
            var _ref13 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
              if (resp['sCode'] == 2) {
                console.log('USER BASIC', resp['sData']);
                resolve(resp['sData']);
              } else {
                resolve({});
              }
            });
            return function next(_x13) {
              return _ref13.apply(this, arguments);
            };
          }(),
          error: err => {
            console.log('ERRO VALIDA-TOKEN: ', err);
            _this9.sesionFin = true;
            _this9.navCtrl.navigateRoot('/login');
            resolve({});
          }
        });
      });
    })();
  }
  getUserBasic2(userX) {
    var _this10 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this10.token);
        _this10.http.get(`${URL}/discover/get-profile`, {
          headers
        }).subscribe({
          next: function () {
            var _ref14 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
              if (resp['sCode'] == 2) {
                console.log('USER BASIC', resp['sData']);
                resolve(resp['sData']);
              } else {
                resolve({});
              }
            });
            return function next(_x14) {
              return _ref14.apply(this, arguments);
            };
          }(),
          error: err => {
            console.log('ERRO VALIDA-TOKEN: ', err);
            _this10.sesionFin = true;
            _this10.navCtrl.navigateRoot('/login');
            resolve({});
          }
        });
      });
    })();
  }
  getCatalogo3(catalogueId, lang, birth, gender, mail) {
    var _this11 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        "catalogueId": catalogueId,
        "lang": lang,
        "email": mail,
        "gender": gender,
        "birthDay": birth
      };
      console.log('dataa', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this11.token);
      return new Promise(resolve => {
        _this11.http.post(`${URL}/catalogue/get-items`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('catalogue res', resp);
            if (resp['sCode'] == 2) {
              let arreglo = [];
              //ordenarlos por orden que defina el usuario
              if (resp['sData'] !== null) {
                arreglo = resp['sData'].sort((a, b) => a.orderRow > b.orderRow ? 1 : -1);
              }
              resolve(arreglo);
            } else {
              resolve([]);
            }
          },
          error: err => {
            console.log('ERR GET CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getCatalogo2(catalogueId, lang, birth, gender, mail) {
    var _this12 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        "catalogueId": catalogueId,
        "lang": lang,
        "email": mail,
        "gender": gender,
        "birthDay": birth
      };
      console.log('dataa', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      // .set('Authorization', this.token);
      return new Promise(resolve => {
        _this12.http.post(`${URL}/catalogue/get-items`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('catalogue res', resp);
            if (resp['sCode'] == 2) {
              let arreglo = [];
              //ordenarlos por orden que defina el usuario
              if (resp['sData'] !== null) {
                arreglo = resp['sData'].sort((a, b) => a.orderRow > b.orderRow ? 1 : -1);
              }
              resolve(arreglo);
            } else {
              resolve([]);
            }
          },
          error: err => {
            console.log('ERR GET CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getCatalogo(catalogueId, lang) {
    var _this13 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        catalogueId,
        lang
      };
      console.log('catalogue id', catalogueId);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      //  .set('Authorization', this.token);
      return new Promise(resolve => {
        _this13.http.post(`${URL}/catalogue/get-items`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('catalogue res', resp);
            if (resp['sCode'] == 2) {
              let arreglo = [];
              //ordenarlos por orden que defina el usuario
              if (resp['sData'] !== null) {
                arreglo = resp['sData'].sort((a, b) => a.orderRow > b.orderRow ? 1 : -1);
              }
              resolve(arreglo);
            } else {
              resolve([]);
            }
          },
          error: err => {
            console.log('ERR GET CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getCatalogoImLookingFor2(catalogueId, lang, iAmId, email) {
    var _this14 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        "catalogueId": catalogueId,
        "lang": lang,
        "imId": iAmId,
        "email": email
      };
      console.log(data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this14.token);
      return new Promise(resolve => {
        _this14.http.post(`${URL}/catalogue/get-items`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log("looking for", resp);
            if (resp['sCode'] == 2) {
              let arreglo = [];
              //ordenarlos por orden que defina el usuario
              if (resp['sData'] !== null) {
                arreglo = resp['sData'].sort((a, b) => a.orderRow > b.orderRow ? 1 : -1);
              }
              resolve(arreglo);
            } else {
              resolve([]);
            }
          },
          error: err => {
            console.log('ERR GET CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getCatalogoImLookingFor(catalogueId, lang, iAmId, email) {
    var _this15 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        "catalogueId": catalogueId,
        "lang": lang,
        "imId": iAmId,
        "email": email
      };
      console.log(data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      return new Promise(resolve => {
        _this15.http.post(`${URL}/catalogue/get-items`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log("looking for", resp);
            if (resp['sCode'] == 2) {
              let arreglo = [];
              //ordenarlos por orden que defina el usuario
              if (resp['sData'] !== null) {
                arreglo = resp['sData'].sort((a, b) => a.orderRow > b.orderRow ? 1 : -1);
              }
              resolve(arreglo);
            } else {
              resolve([]);
            }
          },
          error: err => {
            console.log('ERR GET CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  setCatalogo(id) {
    var _this16 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('id', id);
      const tVal = yield _this16.validaToken();
      if (!tVal) {
        return;
      }
      console.log('ID SET CATALOGO', id);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this16.token);
      return new Promise(resolve => {
        _this16.http.get(`${URL}/catalogue/set-item-xperson/${id}`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] != 200) {
              resolve(false);
            }
            resolve(true);
          },
          error: err => {
            console.log('ERR SET CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  setCatalogoMultiple(id_catalogo, opCat) {
    var _this17 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tVal = yield _this17.validaToken();
      if (!tVal) {
        return;
      }
      let elementos = [];
      if (Array.isArray(opCat)) {
        elementos = opCat.map(item => {
          return {
            item_id: item
          };
        });
      } else {
        elementos.push({
          item_id: opCat
        });
      }
      const data = {
        id_catalogo,
        elementos
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this17.token);
      return new Promise(resolve => {
        _this17.http.post(`${URL}/catalogue/update-items`, data, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] != 70) {
              resolve(false);
            }
            resolve(true);
          },
          error: err => {
            console.log('ERR SET CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  getXCatalogo(idCatalogo) {
    var _this18 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this18.token);
      return new Promise(resolve => {
        _this18.http.get(`${URL}/catalogue/get-item-xperson/${idCatalogo}`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] == 2) {
              const res = resp['sData'];
              if (res === null) {
                resolve('');
                return;
              }
              let arreglo = [];
              res.forEach(element => {
                arreglo.push(element.id);
              });
              resolve(arreglo);
              return;
            }
            resolve('');
          },
          error: err => {
            console.log('ERR GET X CATALOGO', err);
            resolve('');
          }
        });
      });
    })();
  }
  logout() {
    var _this19 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this19.token = null;
      _this19.usuario = null;
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
        key: 'token'
      });
      _this19.navCtrl.navigateRoot('/login', {
        animated: true
      });
    })();
  }
  getCountries() {
    var _this20 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      //.set('Authorization', this.token);
      return new Promise(resolve => {
        _this20.http.get(`${URL}/catalogue/countries`, {
          headers
        }).subscribe({
          next: resp => {
            console.log(resp);
            resolve(resp['sData'] ? resp['sData'] : []);
          },
          error: err => {
            console.log('ERR GET COUNTRIES', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getStates(country) {
    var _this21 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        country
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      return new Promise(resolve => {
        _this21.http.post(`${URL}/catalogue/state`, data, {
          headers
        }).subscribe({
          next: resp => {
            resolve(resp['sData'] ? resp['sData'] : []);
          },
          error: err => {
            console.log('ERR POST STATES', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getCities(country, state) {
    var _this22 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = {
        country,
        state
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      return new Promise(resolve => {
        _this22.http.post(`${URL}/catalogue/city`, data, {
          headers
        }).subscribe({
          next: resp => {
            resolve(resp['sData'] ? resp['sData'] : []);
          },
          error: err => {
            console.log('ERR POST CITIES', err);
            resolve([]);
          }
        });
      });
    })();
  }
  get personId() {
    return this.usuario?.personId || null;
  }
  getParametros(paramTerminos) {
    var _this23 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        paramTerminos
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      //.set('Authorization', this.token);
      return new Promise(resolve => {
        _this23.http.post(`${URL}/catalogue/terminos`, data, {
          headers
        }).subscribe({
          next: resp => {
            resolve(resp ? resp['valor'] : '');
          },
          error: err => {
            console.log('ERR POST PARAMETERS', err);
            resolve('');
          }
        });
      });
    })();
  }
  setUserRS(email, password, rs) {
    var _this24 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this24.dataStorageService.set('email', email);
      _this24.dataStorageService.set('password', password);
      _this24.dataStorageService.set('rs', rs);
    })();
  }
  getUserRS() {
    var _this25 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let email = yield _this25.dataStorageService.get('email');
      let password = yield _this25.dataStorageService.get('password');
      let rs = yield _this25.dataStorageService.get('rs');
      return {
        email,
        password,
        rs
      };
    })();
  }
  removeUserRS() {
    var _this26 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this26.dataStorageService.remove('email');
      yield _this26.dataStorageService.remove('password');
      yield _this26.dataStorageService.remove('rs');
    })();
  }
  deleteAccount() {
    var _this27 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tVal = yield _this27.validaToken();
      if (!tVal) {
        return;
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this27.token);
      return new Promise(resolve => {
        _this27.http.delete(`${URL}/discover/delete`, {
          headers
        }).subscribe({
          next: resp => {
            console.log(resp);
            if (resp['sCode'] == 200) {
              resolve(true);
            } else resolve(false);
          },
          error: err => {
            console.log('ERR DELTE USER', err);
            resolve(false);
          }
        });
      });
    })();
  }
  existI(email) {
    var _this28 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      return new Promise(resolve => {
        _this28.http.get(`${URL}/discover/existEmail/${email}`, {
          headers
        }).subscribe({
          next: resp => {
            resolve(true);
          },
          error: err => {
            console.log('ERR GET COUNTRIES', err);
            resolve(false);
          }
        });
      });
    })();
  }
  upPas(email, password) {
    var _this29 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        email,
        password
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      return new Promise(resolve => {
        _this29.http.post(`${URL}/discover/updatePassword`, data, {
          headers
        }).subscribe({
          next: resp => {
            resolve(true);
          },
          error: err => {
            console.log('ERR POST PARAMETERS', err);
            resolve(false);
          }
        });
      });
    })();
  }
  getCodeEmail(email, lang) {
    var _this30 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      return new Promise(resolve => {
        _this30.http.get(`${URL}/passwoord/verifyCodeEmail/${email}/${lang}`, {
          headers
        }).subscribe({
          next: resp => {
            resp["sCode"] == 200 ? resolve(true) : resolve(false);
          },
          error: err => {
            console.log('ERR GET COUNTRIES', err);
            resolve(false);
          }
        });
      });
    })();
  }
  validaCodeEmail(email, code) {
    var _this31 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders().set('Content-Type', 'application/json');
      return new Promise(resolve => {
        _this31.http.get(`${URL}/passwoord/verifyCode/${email}/${code}`, {
          headers
        }).subscribe({
          next: resp => {
            resolve(resp["sCode"]);
          },
          error: err => {
            console.log('ERR POST PARAMETERS', err);
            resolve('-30');
          }
        });
      });
    })();
  }
  getFirebaseAuthService() {
    if (!this.firebaseAuthService) {
      this.firebaseAuthService = this.injector.get(_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__.FirebaseAuthService);
    }
    return this.firebaseAuthService;
  }
  loginWithEmail() {
    var _this32 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        email,
        password
      } = yield _this32.getUserRS();
      if (email && password) {
        const valido = yield _this32.login(email, password);
        return valido['ok'];
      }
      return false;
    })();
  }
  loginWithGoogle() {
    var _this33 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this33.loginWithEmail();
      try {
        const idToken = yield _this33.googleSignInService.refreshToken();
        console.log('idToken', idToken);
        if (idToken) {
          return yield _this33.loginWithEmail();
        }
      } catch (error) {
        console.error('Error en loginWithGoogle:', error);
      }
    })();
  }
  loginWithApple() {
    var _this34 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this34.loginWithEmail();
      try {
        const idToken = yield _this34.getFirebaseAuthService().getIdToken({
          forceRefresh: true
        });
        if (idToken) {
          return yield _this34.loginWithEmail();
        }
      } catch (error) {
        console.error('Error al obtener ID Token de Apple:', error);
      }
      return false;
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
    }, {
      type: _data_storage_service__WEBPACK_IMPORTED_MODULE_4__.DataStorageService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector
    }, {
      type: _google_sign_in_service__WEBPACK_IMPORTED_MODULE_6__.GoogleSignInService
    }];
  }
};
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
  providedIn: 'root'
})], UserService);


/***/ }),

/***/ 57724:
/*!***************************************!*\
  !*** ./src/environments/constants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constants: () => (/* binding */ constants)
/* harmony export */ });
const constants = {
  catalogs: {
    IamA: 1,
    IamLooking: 2,
    ExperienceCat: 3,
    Sing: 4,
    Educacion: 5,
    Religion: 6,
    Ejercicio: 15,
    //7,
    Bebe: 8,
    Fuma: 9,
    Hijos: 10,
    Hobbies: 11,
    Pets: 12,
    Values_Traits: 13,
    Political: 14,
    //sports = 15
    Gender: 16,
    Pronoun: 17,
    Lenguage: 18,
    Drugs: 19,
    //YA NO APLICAN
    Pais: 111,
    Estado: 222,
    Ciudad: 333,
    Woman: 215,
    Man: 214
  },
  languages: {
    en: 'EN',
    es: 'ES'
  },
  meses: {
    mesES: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    mesEN: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    mesES_ln: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    mesEN_ln: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  statusUsrMatch: {
    none: 0,
    block: 2,
    like: 3,
    dislike: 5,
    superMatch: 3
  },
  matcheOlder: {
    today: '1',
    yesterday: '2',
    old: '3'
  }
};

/***/ }),

/***/ 36716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  // urlSrv: 'http://3.129.84.172:8081', //UAT
  // urlSrv: 'http://18.116.89.191:8081', //UAT Miami
  //urlSrv: 'http://localhost:8081',
  urlSrv: 'https://ifmly.com',
  //PROD
  //IPInfo.io para obtener CountryISO del Device
  urlSrvIPInfo: 'https://ipinfo.io',
  tokenIPInfo: 'a6dba9b2952bf5',
  //Firebase configuration
  firebaseConfig: {
    apiKey: "AIzaSyCczSqPLOZOvONTX32f8_02tydFMrojPX8",
    authDomain: "ifamily-180d6.firebaseapp.com",
    projectId: "ifamily-180d6",
    storageBucket: "ifamily-180d6.appspot.com",
    messagingSenderId: "1008524938992",
    appId: "1:1008524938992:web:c8ffed03da5f32bab13c35",
    measurementId: "G-S1F6DMDELP"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 27460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 45056);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 36716);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 21480:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		27844,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		55512,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		58104,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		51768,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		76488,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		46640,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		12387,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		64800,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		60308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		55176,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		944,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		77440,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		90128,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		93888,
		"default-node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		59608,
		"default-node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		24704,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		66792,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		58924,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2600,
		"default-node_modules_ionic_core_dist_esm_form-controller-21dd62b1_js-node_modules_ionic_core_-a176d1",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		30292,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		1328,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		69328,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		22344,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		83012,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		46176,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		89420,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		98916,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		62500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		37464,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		44624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		47744,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		76936,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		60376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		60272,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		43216,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		66764,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		88240,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		56168,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		77328,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		59716,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		3220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		13044,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		44040,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		97271,
		"default-node_modules_ionic_core_dist_esm_form-controller-21dd62b1_js-node_modules_ionic_core_-a176d1",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		20108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		94936,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 21480;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 29804:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 29804;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 25004:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26392:
/*!******************************************************************!*\
  !*** ./src/app/pages/selectlang/selectlang.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-content .scroll {
  font-size: 20px;
  position: fixed;
  right: 5%;
  background: black;
  color: white;
  padding: 2%;
  bottom: 4%;
  margin: auto;
  border-radius: 50%;
  z-index: 55;
}
ion-content .close {
  position: absolute;
  right: 5%;
  background: black;
  color: white;
  padding: 1%;
  border-radius: 50%;
  font-size: 25px;
  z-index: 555;
}
ion-content .toptit {
  margin: 0;
  padding: 5%;
  text-align: center;
  color: black;
  font-size: 18px;
  font-weight: bold;
}
ion-content ion-label {
  font-size: 18px;
  font-weight: bold;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/selectlang/selectlang.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/selectlang/selectlang.page.scss"],"names":[],"mappings":"AACA;EACQ,eAAA;EACJ,eAAA;EACA,SAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;ACAJ;ADGI;EACA,kBAAA;EACA,SAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;ACDJ;ADGI;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;ACDJ;ADGI;EACA,eAAA;EACA,iBAAA;ACDJ","sourcesContent":["ion-content{\n.scroll{\n        font-size: 20px;\n    position: fixed;\n    right: 5%;\n    background: black;\n    color: white;\n    padding: 2%;\n    bottom: 4%;\n    margin: auto;\n    border-radius: 50%;\n    z-index: 55;\n}\n\n    .close{\n    position: absolute;\n    right: 5%;\n    background: black;\n    color: white;\n    padding: 1%;\n    border-radius: 50%;\n    font-size: 25px;\n    z-index: 555;\n    }\n    .toptit{\n    margin: 0;\n    padding: 5%;\n    text-align: center;\n    color: black;\n    font-size: 18px;\n    font-weight: bold;\n    }\n    ion-label{\n    font-size: 18px;\n    font-weight: bold;\n    }\n}\n\n","ion-content .scroll {\n  font-size: 20px;\n  position: fixed;\n  right: 5%;\n  background: black;\n  color: white;\n  padding: 2%;\n  bottom: 4%;\n  margin: auto;\n  border-radius: 50%;\n  z-index: 55;\n}\nion-content .close {\n  position: absolute;\n  right: 5%;\n  background: black;\n  color: white;\n  padding: 1%;\n  border-radius: 50%;\n  font-size: 25px;\n  z-index: 555;\n}\nion-content .toptit {\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\nion-content ion-label {\n  font-size: 18px;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 10440:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet [swipeGesture]=\"false\"></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 1634:
/*!******************************************************************!*\
  !*** ./src/app/pages/selectlang/selectlang.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n\n<ion-content #scrollableContent *ngIf=\"pageid == 'settings'\" class=\"ion-padding show-scrollbar\" (ionScroll)=\"onScroll($event)\" scrollEvents=\"true\"  >\n  <ion-icon name=\"close\" class=\"close\" (click)=\"close()\"></ion-icon>\n  <p class=\"toptit\">{{ 'Language-POPUP.Title' | translate }}</p>\n  <ion-list lines=\"none\">\n    <ion-item \n      lines\n      *ngFor=\"let lang of languages\" \n      (click)=\"selectLanguage(lang)\" \n      button \n      class=\"language-item\">\n      <ion-label class=\"language-label\">{{ lang.flag }} {{ lang.text }}</ion-label>\n    </ion-item>\n  </ion-list>\n  <br>\n   <ion-icon name=\"chevron-down-outline\" class=\"scroll\"  *ngIf=\"showScrollIcon\"></ion-icon>\n</ion-content>\n\n\n<ion-content #scrollableContent class=\"ion-padding show-scrollbar\" *ngIf=\"pageid == undefined\" (ionScroll)=\"onScroll($event)\" scrollEvents=\"true\">\n  <p class=\"toptit\" >Select Language</p>\n  <ion-list lines=\"none\">\n    <ion-item \n      lines\n      *ngFor=\"let lang of languages\" \n      (click)=\"selectLanguage(lang)\" \n      button \n      class=\"language-item\">\n      <ion-label class=\"language-label\">{{ lang.flag }} {{ lang.text }}</ion-label>\n    </ion-item>\n  </ion-list>\n  <br>\n  <ion-icon name=\"chevron-down-outline\" class=\"scroll\"  *ngIf=\"showScrollIcon\"></ion-icon>\n</ion-content>\n";

/***/ }),

/***/ 88848:
/*!*********************************!*\
  !*** ./src/assets/i18n/en.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"UI-SERVICE":{"Msg":"Loading","OKBtn":"OK","CANCELBtn":"CANCEL"},"Language-POPUP":{"Title":"Select Language"},"LOGIN":{"btnSingUp":"Sign up","WelcomeTxt1":"Welcome back!","WelcomeTxt2":"you are back","EmailLabel":"Email","PasswordLabel":"Password","ForgotPass":"Forgot Password?","OrSingIn":"or sign in with","btnSingIn":"Sign in","TermsText":"By clicking Sign in, you confirm you are over 18 and agree to our","TermsText2":"By clicking Create, you confirm that you are over 18 and agree to our","terminosCondiciones":"Terms of Use","AndTerms":"and","avisoPrivacidad":"Privacy Policy","msgErrReqEmail":"Email is required","msgErrPattEmail":"Enter a valid Email","msgErrReqPassword":"Password is required","msgErrLogin":"Email/Password entered is incorrect. Try again","msgErrCnx":"Server connection error","FinSesionMsg":"The session is finished. Log in again","errRegistroMsg":"It could be completed, please try again later from profile – team@ifamily.org","msgErrGoogle":"Failed to sign in to your Google account","msgErrApple":"Failed to sign in to your Apple account","msgOtherSign":"Please try another method to Sign in"},"REGISTRY":{"btnSingIn":"Sign in","WelcomeTxt1":"Welcome!","WelcomeTxt2":"Create your personal account","EmailLabel":"Email","PasswordLabel":"Password","OrSingIn":"or sign up with","TermsText":"By clicking Create, you are agreeing to our","terminosCondiciones":"Terms of Use","AndTerms":"and","avisoPrivacidad":"Privacy Policy","btnCreate":"Create","msgErrReqEmail":"Email is required","msgErrPattEmail":"Enter a valid Email","msgErrReqPassword":"Password is required","msgErrMin":"Password must contain at least a lowercase letter","msgErrMay":"Password must contain at least a uppercase letter","msgErrNum":"Password must contain at least a number","msgErrCarc":"Password must contain at least a special character","msgErrLongMin":"Password must be at least 8 characters","msgErrGoogle":"Failed to register with your Google account","msgErrApple":"Failed to register with your Apple account","checkLegal":"By clicking, I hereby declare that I am at least 18 years old and of legal age.","errorLegal":"You must accept that you are of legal age","checkTerms":"By clicking, you agree to the ","errorTerms":"You must accept that you are of Terms of Use"},"REC_PASS":{"TitleTxt":"RECOVERY PASSWORD","EmailLabel":"Email","Text":"Please insert the email you want to reset your password","btnNext":"Recover password","resetPassword":"An email was sent with the new password","resetPasswordError":"Password was not updated, please try again later","emailNotFound":"Email does not exist"},"CHANGE_PASS":{"TitleTxt":"CHANGE PASSWORD","Text":"Enter the new password you want to assign to the user","Password":"Password","OldPassword":"Old Password","Confirm":"Confirm password","btnNext":"Change password","msgErrReqConfirm":"Confirm password is required","msgErrReqPassword":"Password is required","msgErrReqOldPassword":"Old password is required","msgErrEqualPassword":"Passwords must match","msgErrEqualOldPassword":"The new password cannot be the same as the old password","msgErrOldPassword":"The old password is incorrect","ChangePassword":"Password was updated successfully","ChangePasswordError":"Password was not updated, please try again later","msgErrMin":"Password must contain at least a lowercase letter","msgErrMay":"Password must contain at least a uppercase letter","msgErrNum":"Password must contain at least a number","msgErrCarc":"Password must contain at least a special character","msgErrLongMin":"Password must be at least 8 characters"},"MY-MOBILE":{"Title":"My Mobile","Text":"Verify phone number. We will send you a 4-digit code to verify your account","phMobile":"Mobile","ccTitle":"Select Country","ccSearchPH":"Enter country name","ccCloseTxt":"Close","btnNext":"Next","msgErrReqMobile":"Mobile is required","msgErrMobile":"Enter a valid Mobile"},"VC":{"Text":"Please enter the verification code we sent to your","Phone":"phone.","Email":"email.","SendAgain":"Send again","btnNext":"Next","SendCodeEmail":"Didn\'t receive it? We can resend the code to your","ErrMesg":"Capture complete verification code","ErrServ":"Offline service. Try again later","ErrCode":"Incorrect code. Request a new","ErrLengthCode":"Code must be 6 digits. Request a new"},"PROF-DETAIL":{"Title":"Profile details","FName":"First name","LName":"Last name","TextCalBtn":"Choose birthday date","lanCal":"en-us","TitleCal":"Birthday","btnSave":"Save","btnNext":"Next","msgErrReqFName":"First name is required","msgErrReqLName":"Last name is required","msgErrReqBirthday":"Birthday is required","msgErrReqImg":"A profile picture is required.","mayorEdad":"You must be of legal age to join iFamily","msgValidaEdad":"Are you sure with your date of birth? Cannot be changed later","msgValidYear":"The school year must be between 1900 and 2100","msgErrReqBio":"Bio is required","msgErrReqIam":"I am a is required","msgErrReqLocation":"Location is required","msgErrProfileImage":"Profile picture is required","msgErrGender":"Gender is required"},"ABOUT-ME":{"AboutTxt":"Skip","SaveTxt":"Save","Title":"More about me","Height":"Height","Unit1":"ft","Unit2":"in","Gender":"Gender","SubHdGender":"Select the gender you identify with","Pronoun":"Pronoun","SubHdPronoun":"Select the pronoun with which you identify yourself","Languaje":"Languajes","SubHdLanguaje":"Select the languages you speak","Exercise":"Sports","SubHdExe":"Select your favorite Sports","Gral_ph":"Add","Sing":"Sign","SubHdSing":"Select your Sign","Hobby":"Hobbies","SubHdHobby":"Select your favorite Hobbies","Education":"Education level","SubHdEdu":"Select your Education level","Pet":"Pets","SubHdPet":"Select the pets you have","valTrait":"Values & Traits","SubHdValTrait":"Select the Values & Traits you have","Drink":"Drinking","SubHdDrnk":"How often you drink?","Smok":"Smoking","SubHdSmk":"How often you smok?","Kid":"Kids","SubHdKid":"Do you have children?","Drug":"Drugs","SubHdDrug":"How often do you use drugs?","Religion":"Religion","SubHdRlgn":"Select your religion","Political":"Political","SubHdPolitical":"Select your Political preference","btnNext":"Next","missingfiled":"Plese select all mandatory fields","ErrorMsg2":"The registration of your information could not be completed, please try again later","ErrorMsg":"The registration of your information could not be completed, please try again later from PROFILE"},"I-AM":{"AboutTxt":"Skip","Title1":"I am a","Title2":"I am looking for","SubHdIam":"Select the option that best describes you","SubHdIamLooking":"Select what you are looking for","btnNext":"Finish","allfieldreq":"All Fields are required","SuccessMsg":"Your profile was completed successfully","msgErrIAM":"I am a is required","msgErrIAMLookingFor":"I am looking for is required","ErrorMsg":"It could be completed, please try again later from profile – team@ifamily.org"},"LOCATION":{"Title":"Location","CountryPH":"Country","SearchC":"Search Country","StatePH":"State","SearchS":"Search State","StateMsg":"Before you must select a Country","CityPH":"City","SearchCt":"Search City","CityMsg":"Before you must select a State","btnNext":"Next","SuccessMsg":"Your registration was successful. Complete your profile information","SuccessMsg2":"Your account is registered successfully.","ErrorMailRegistrado":"There is already a user with the provided email","ErrorMsg":"Your registration failed. Please try again later.","ErrorInfo":"Select country, states and city as they are required"},"EXPERIENCE":{"Title":"Experiences","Title2":"My Experiences","SubTitle":"Experiences Near by","SubTitle2":"Experiences by","MenuOp1":"My Experiences","MenuOp12":"Find Experiences","MenuOp2":"Create Experience","LoadingTxt":"Loading more experiences..."},"EXP-DETAIL":{"PleaseFill":"Please complete at least 3 required fields to continue.","EditBtn":"Edit","LocTitle":"Location","DTTitle":"Date & Time","DesTitle":"Description","txtRead":"Read","txtMore":"More","txtLess":"Less","txt1People":"Up to","txt2People":"people can join experiences","txtRates":"Ratings","txtAbout":"About","txtHost":"Host Images","btnIntersted":"Interested","btnUnIntersted":"Uninterested","sucInterest":"You successfully registered for the Experience: ","errInterest":"Registration was not possible. Try again later","sucUnInterest":"You are no longer registered in the Experience:","errUnInterest":"Could not delete your record in the experience, please try again later","titleIntPeople":"Interested People List","subTitleIntPeople":"People who shown interest in your event","PendingReq":"Pending Request:","AllowBt":"Allow","DenyBt":"Deny","RegisteredUsr":"Registered: ","btnCancelExp":"Cancel Experience","cancelError":"The experience was not cancelled, please try again later","cancel":"The experience was successfully canceled","noRate":"There are no ratings for this experience"},"NEW-EDIT-EXP":{"Title1":"Create","Title2":"experience","TxtUpload":"Upload Cover Image","ExpTitle":"Title","msgErrReqTitle":"Title is required","ExpDescripcion":"Description","msgErrReqDescription":"Description is required","ExpDate":"Date","msgErrReqDate":"Date is required","lanCal":"en-us","TitleCal":"Experience Date","btnSave":"Save","ExpLocation":"Location","msgErrReqLocation":"Location is required","ExpPrice":"Price","NoPeople":"Number of People Expected","msgErrReqNoPeople":"Number of People is required","msgErrMinNoPeople":"Number of People must be greater than 1","msgErrMaxNoPeople":"Number of people must not exceed 999","Category":"Category","msgErrReqCategory":"Category is required","btnSubmit":"Submit","createError":"The experience was not created, please try again later","imageError":"The experience image was not added correctly, please try again later","msgErrReqPrice":"Price is required","msgErrMinPrice":"Price must be greater than 0","msgErrMaxPrice":"Price must not exceed 999"},"DISCOVER":{"Title":"Discover","TitleFilter":"I am looking for...","ClearBtnFilter":"Clear","Title_iam":"I am a","Title_looking":"Advanced filters","SubHdIam":"Select the option that best describes you","SubHdIamLooking":"Select what you are looking for","Title_Age":"Age between","Title_Distancia":"Miles away","SubTitle_Filter":"Advance Filters:","Title_Height":"Height","Title_Exercise":"Exercise","SubHdExe":"Select a sports activity","Title_Sing":"Sign","SubHdSing":"Select a Sign","Title_Education":"Education level","SubHdEdu":"Select a Education level","Title_Drink":"Drinking","SubHdDrnk":"Select the frequency of the drinker","Title_Smok":"Smoking","SubHdSmk":"Select the frequency of smoking","Title_Kid":"Kids","SubHdKid":"Select with how many children you are looking for","Title_Religion":"Religion","SubHdRlgn":"Select a Religion","btnApply":"Apply","superLikeTitle":"Super like","superLikeMsg":"You just super liked, the user will see your like, even if you do not match","superLikeBtnCancel":"Cancel","superLikeBtnOK":"Understand","RatingTxt":"ratings","LabelageToggle":"Only show people within this range","LabeldistToggle":"Only show people within this range","txtNoFound":"There are no people with the characteristics established in the filters of “I am looking for“","rollbackTrue":"The last move has been successfully reversed","rollbackFalse":"Could not reverse last move, try again later","notRollback":"There are no movements to rollback","txtToLimit":"We are committed to maintaining an intimate community by limiting swipes to ten per day.","txtToLimit2":"Check back tomorrow for more match opportunities!"},"MATCH":{"Title":"Matches","SubTitle":"This is a list of people who have liked you and your matches","TitleToday":"Today","TitleYesterday":"Yesterday","TitleOld":"Old","ConfirmDelete":"Are you sure you want to unmatch? This action is irreversible, and you won’t be able to reconnect with this person."},"MATCH-DETAIL":{"RatingTxt":"ratings","LocTitle":"Location","txtAbout":"About","txtRead":"Read","txtMore":"More","txtLess":"Less","txtGallery":"Gallery","btnUnMatch":"Unmatch","btnLeaveRating":"Leave Rating","MenuOp1":"Report","MenuOp2":"Block","hdMoreAbout":"More About","titleSecc1":"Height","titleSecc2":"Gender","titleSecc3":"Education level","titleSecc4":"Languajes","titleSecc5":"Sign","titleSecc6":"Sports","titleSecc7":"Hobbies","titleSecc8":"Kids","titleSecc9":"Pets","titleSecc10":"Values & Traits","titleSecc11":"Drinking","titleSecc12":"Smoking","titleSecc13":"Drugs","titleSecc14":"Religion","titleSecc15":"Political","titlePOReport":"Reason for reporting","buttonPOReport":"Send","requiredPOReport":"Reason why you report this content","block":"This content was successfully reported","blockError":"Could not report this content, please try again later","confirmBlock":"Do you want to report this content?","block1":"This content was successfully blocked","blockError1":"Could not block this content, please try again later","confirmBlock1":"Do you want to block this content?"},"LEAVE-RATING":{"ExpComment":"Leave Comment:","phComment":"Type here","msgErrReqRate":"Rate is required","msgErrReqMsg":"Comment is required","btnSubmit":"Leave Feedback","errResFeedback":"Error saving rating. Please try again later."},"ACCOUNT":{"tSetting":"Settings","tAddPhoto":"Add photo","tEdit":"Edit","LocTitle":"Location","BioTitle":"Bio","txtGallery":"Gallery","imageSuccess":"The image was uploaded successfully","multipleimagesuccess":"All images uploaded successfully","imageError":"The image did not upload, please try again later"},"EDIT-ACCOUNT":{"TitleTxt":"Edit","SaveTxt":"Save","TitlePhoto":"Profile Photo","PhotoText":"Photo","ChangeText":"Change","TitleLocation":"My location","LabelLocGPS":"Using GPS","LocationField":"Location","TitleProfile":"Profile details","FName":"First name","LName":"Last name","Title_iam":"I am a","Title_iam_a_looking_for":"What you are looking for","SubHdIam":"Select the option that best describes you","TextCalBtn":"Choose birthday date","lanCal":"en-us","TitleCal":"Birthday","btnSave":"Save","TitleBio":"Bio","TitleEducation":"Education","School":"School","YearSchool":"Year","TitleWork":"My Work","WorkTitle":"Title","WorkCo":"Company","TitleMore":"More about me","AboutMeText":"Pastimes, Hobbies...","Hometown":"Hometown","Ethnicity":"Ethnicity","ErrorMsg":"The update was not complete. Please try again later","country":"Country","state":"State","city":"City","errorNotCSC":"Information for location is missing.","errorCSC":"An error occurred, the location was not updated"},"PHOTO-VIEW":{"TitleTxt":"Photos","SaveTxt":"Save","mensajeSubtitle":"Choose a photo that will be on your avatar","notSelected":"You must select an image","saveError":"The image was not saved, please try again later","save":"Your avatar has been successfully updated","cancelError":"The experience was not cancelled, please try again later","cancel":"The experience was successfully canceled","delete":"Delete","deleteConfirm":"Are you sure you want to delete the image?","deleteOk":"The image was deleted successfully","deleteError":"Could not delete the image, please try again later"},"SETTINGS-ACOUNT":{"ChangeLanguage":"Change language","TitleTxt":"Settings","privacy":"Privacy Policy","terms":"Terms of Service","deleteAccount":"Delete account","logout":"Log out","ChangePassword":"Change password","ConfirmDelete":"Are you sure you want to delete the account?","DeleteSuccess":"The user was successfully deleted","DeleteError":"The user was not deleted, please try again later","ConfirmLogout":"Are you sure you want to log out?","AgePolicy":"Age Verification Policy","UserLic":"End-User License Agreement","Community":"Community Policy","DMCAPOL":"DMCA Policy (Digital Millennium Copyright Act)","RADW":"Risk Acknowledgment, Disclaimer, and Waiver"},"CHAT":{"TitleTxt":"Messages","NotFound":"There are no messages to show."},"PARAMS":{"TitlePrivacy":"Privacy Policy","TitleTerms":"Terms of Service","TitleAge":"Age Verification","TitleUserLic":"End-User License","TitleCommunity":"Community Policy","TitleDMCAPOL":"DMCA Policy","TitleRADW":"RADW"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(27460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map