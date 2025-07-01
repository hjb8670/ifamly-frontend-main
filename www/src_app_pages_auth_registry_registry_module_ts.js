(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_registry_registry_module_ts"],{

/***/ 19956:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/registry/registry-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistryPageRoutingModule: () => (/* binding */ RegistryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _registry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry.page */ 29908);




const routes = [{
  path: '',
  component: _registry_page__WEBPACK_IMPORTED_MODULE_0__.RegistryPage
}];
let RegistryPageRoutingModule = class RegistryPageRoutingModule {};
RegistryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], RegistryPageRoutingModule);


/***/ }),

/***/ 48600:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/registry/registry.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistryPageModule: () => (/* binding */ RegistryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _registry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry-routing.module */ 19956);
/* harmony import */ var _registry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registry.page */ 29908);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let RegistryPageModule = class RegistryPageModule {};
RegistryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _registry_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistryPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_registry_page__WEBPACK_IMPORTED_MODULE_1__.RegistryPage]
})], RegistryPageModule);


/***/ }),

/***/ 29908:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/registry/registry.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistryPage: () => (/* binding */ RegistryPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _registry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registry.page.html?ngResource */ 73596);
/* harmony import */ var _registry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registry.page.scss?ngResource */ 14424);
/* harmony import */ var _registry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_registry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/utilities.service */ 61412);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var src_app_services_google_sign_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/google-sign-in.service */ 24572);
/* harmony import */ var src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firebase-auth.service */ 26372);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ 90628);














let RegistryPage = class RegistryPage {
  constructor(formBuilder, translate, router, uiService, utilities, googleSingInService, firebaseAuthService, userService, platform) {
    this.formBuilder = formBuilder;
    this.translate = translate;
    this.router = router;
    this.uiService = uiService;
    this.utilities = utilities;
    this.googleSingInService = googleSingInService;
    this.firebaseAuthService = firebaseAuthService;
    this.userService = userService;
    this.platform = platform;
    this.presentarErroresCampos = true;
    this.contryISO = 'us';
    this.idToken = '';
    this.view = false;
    this.isLegal = true;
    this.isTerms = true;
    this.isMobile = false;
    this.isWeb = false;
    this.registryForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.regexValidator(new RegExp('(?=.*[a-z]).*$'), {
        '1lowercase': true
      }), this.regexValidator(new RegExp('(?=.*[A-Z]).*$'), {
        '1uppercase': true
      }), this.regexValidator(new RegExp('(?=.*[0-9]).*$'), {
        '1number': true
      }), this.regexValidator(new RegExp('(?=.*[#?!@$%^&*-+]).*$'), {
        '1especial': true
      }), this.regexValidator(new RegExp('.{8,}$'), {
        'longmin': true
      })
      //Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
      ]]
    });
    this.validation_messages = {
      'email': [{
        type: 'required',
        message: 'msgErrReqEmail'
      }, {
        type: 'pattern',
        message: 'msgErrPattEmail'
      }],
      'password': [{
        type: 'required',
        message: 'msgErrReqPassword'
      }
      // { type: '1lowercase', message: 'msgErrMin'},
      // { type: '1uppercase', message: 'msgErrMay'},
      // { type: '1number', message: 'msgErrNum'},
      // { type: '1especial', message: 'msgErrCarc'},
      // { type: 'longmin', message: 'msgErrLongMin'}
      ]
    };
  }
  ngOnInit() {
    // Detect platform
    this.isMobile = this.platform.is('mobile') || this.platform.is('capacitor');
    this.isWeb = this.platform.is('desktop') || this.platform.is('pwa');
    console.log('Platform detection:', {
      isMobile: this.isMobile,
      isWeb: this.isWeb,
      platform: this.platform.platforms(),
      userAgent: navigator.userAgent
    });
    // Initialize OAuth services for web platform
    if (this.isWeb) {
      console.log('Initializing OAuth services for web platform');
      try {
        this.googleSingInService.initialize();
        this.firebaseAuthService.initialize();
        console.log('OAuth services initialized successfully');
      } catch (error) {
        console.error('Failed to initialize OAuth services:', error);
      }
    }
  }
  regexValidator(regex, error) {
    return control => {
      if (!control.value) {
        return null;
      }
      /* console.log('EVALUANDO: ', control.value);
      console.log('CON:', regex); */
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
  get email() {
    return this.registryForm.get('email');
  }
  get password() {
    return this.registryForm.get('password');
  }
  validaCampo(campo, message) {
    for (let validation of message) {
      if (campo.hasError(validation.type)) {
        console.log(this.translate.instant('REGISTRY.' + validation.message));
        this.uiService.alertOK(this.translate.instant('REGISTRY.' + validation.message));
        return true;
      }
    }
    return false;
  }
  singUpFacebook() {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("SING UP WITH FACEBOOK");
      // if(!this.isLegal){
      //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorLegal'));
      //   return;
      // }
      // if(!this.isTerms){
      //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorTerms'));
      //   return;
      // }
    })();
  }
  singUpGoogle() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("SING UP WITH GOOGLE");
      // Check if OAuth is available for current platform
      if (!_this.isMobile && !_this.isWeb) {
        _this.uiService.alertOK('Google Sign-In is not available on this platform');
        return;
      }
      try {
        const usr = yield _this.googleSingInService.loginViaGoogle();
        console.log('USER GOOGLE: ', usr);
        if (!usr || !usr.email) {
          throw new Error('Failed to get user data from Google');
        }
        // Store complete OAuth user data
        const oauthUserData = {
          email: usr.email,
          password: _this.generateRandomPassword(),
          firstName: usr.givenName || '',
          lastName: usr.familyName || '',
          image: usr.imageUrl || null
        };
        _this.userService.setOAuthUserData(oauthUserData);
        _this.userService.setOAuthProvider('google');
        _this.goMobile(usr.email, oauthUserData.password, `${usr.givenName} ${usr.familyName}`, 'google');
      } catch (error) {
        console.log("Google Sign Up Error", error);
        _this.uiService.alertOK(_this.translate.instant('REGISTRY.msgErrGoogle') || 'Google Sign-In failed. Please try again.');
      }
    })();
  }
  singUpApple() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("SING UP WITH APPLE");
      // Check if OAuth is available for current platform
      if (!_this2.isMobile && !_this2.isWeb) {
        _this2.uiService.alertOK('Apple Sign-In is not available on this platform');
        return;
      }
      // if(!this.isLegal){
      //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorLegal'));
      //   return;
      // }
      // if(!this.isTerms){
      //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorTerms'));
      //   return;
      // }
      try {
        const usr = yield _this2.firebaseAuthService.signInWithApple();
        console.log("USER APPLE", usr);
        if (!usr || !usr.email) {
          throw new Error('Failed to get user data from Apple');
        }
        // Store complete OAuth user data
        const oauthUserData = {
          email: usr.email,
          password: _this2.generateRandomPassword(),
          firstName: usr.displayName ? usr.displayName.split(' ')[0] : '',
          lastName: usr.displayName ? usr.displayName.split(' ').slice(1).join(' ') : '',
          image: usr.photoURL || null
        };
        _this2.userService.setOAuthUserData(oauthUserData);
        _this2.userService.setOAuthProvider('apple');
        _this2.goMobile(usr.email, oauthUserData.password, usr.displayName, 'apple');
      } catch (error) {
        console.log("Apple Sign Up Error", error);
        _this2.uiService.alertOK(_this2.translate.instant('REGISTRY.msgErrApple') || 'Apple Sign-In failed. Please try again.');
      }
    })();
  }
  generateRandomPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
  create() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("CREATE");
      //document.getElementById('item').style.border = "solid 2px #107CF1";
      if (_this3.validaCampo(_this3.email, _this3.validation_messages.email)) {
        return;
      }
      if (_this3.validaCampo(_this3.password, _this3.validation_messages.password)) {
        return;
      }
      // if(!this.isLegal){
      //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorLegal'));
      //   return;
      // }
      // if(!this.isTerms){
      //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorTerms'));
      //   return;
      // }
      const user = {
        email: _this3.email.value,
        password: _this3.password.value
      };
      // Save it somewhere accessible (like a service or localStorage)
      _this3.userService.setUserr(user);
      yield _this3.goMobile(_this3.email.value, _this3.password.value, '', 'email');
    })();
  }
  goMobile(email, password, name, rs) {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this4.utilities.getCountryISO();
      console.log('RES: ', res);
      if (res['ok']) {
        _this4.contryISO = String(res['country']).toLowerCase();
      } else {
        console.log('ERROR al obtener CONTRY ISO');
        _this4.contryISO = 'us';
      }
      let navegationExtras = {
        state: {
          email: email,
          password: password,
          name: name,
          rs: rs,
          cISO: _this4.contryISO
        }
      };
      _this4.router.navigate(['my-mobile'], navegationExtras);
    })();
  }
  params(parameters) {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let navegationExtras = {
        state: {
          parameters: parameters,
          paramReturn: 'registry'
        }
      };
      _this5.router.navigate(['params'], navegationExtras);
    })();
  }
  verContra() {
    this.view = !this.view;
  }
  isChecked(indChecked) {
    switch (indChecked) {
      case 'legal':
        this.isLegal = !this.isLegal;
        break;
      case 'terms':
        this.isTerms = !this.isTerms;
        break;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService
    }, {
      type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__.UtilitiesService
    }, {
      type: src_app_services_google_sign_in_service__WEBPACK_IMPORTED_MODULE_5__.GoogleSignInService
    }, {
      type: src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__.FirebaseAuthService
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
    }];
  }
};
RegistryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-registry',
  template: _registry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_registry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], RegistryPage);


/***/ }),

/***/ 61412:
/*!***********************************************!*\
  !*** ./src/app/services/utilities.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilitiesService: () => (/* binding */ UtilitiesService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33712);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 36716);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 90628);






const urlIPInfo = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlSrvIPInfo;
const tokenIPInfo = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tokenIPInfo;
const urlServer = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlSrv;
let UtilitiesService = class UtilitiesService {
  constructor(http, userService) {
    this.http = http;
    this.userService = userService;
  }
  getCountryISO() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        _this.http.get(`${urlIPInfo}?token=${tokenIPInfo}`).subscribe({
          next: resp => {
            console.log('RESP: ', resp);
            let resp_ok = {
              'ok': true,
              country: resp['country']
            };
            resolve(resp_ok);
          },
          error: err => {
            let resp_err = {
              'ok': false,
              err
            };
            resolve(resp_err);
          }
        });
      });
    })();
  }
  static compressBase64Image(base64, maxWidth = 800, maxHeight = 800, quality = 0.7) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;
          // Redimensionar manteniendo proporción
          if (width > maxWidth || height > maxHeight) {
            const ratio = width / height;
            if (width > height) {
              width = maxWidth;
              height = maxWidth / ratio;
            } else {
              height = maxHeight;
              width = maxHeight * ratio;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          const compressedData = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedData.split(',')[1]); // solo base64
        };
        img.src = `data:image/jpeg;base64,${base64}`;
      });
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
    }, {
      type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
    }];
  }
};
UtilitiesService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], UtilitiesService);


/***/ }),

/***/ 14424:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/registry/registry.page.scss?ngResource ***!
  \*******************************************************************/
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

.singIn-Bt {
  font-family: "Sk-Modernist-Regular";
  font-size: 15px;
  text-transform: none;
  width: 90px;
  --border-style: solid;
  --border-width: 1px;
  --border-color: var(--ion-color-negro);
  --border-radius: 25px;
  --box-shadow:none;
  margin-left: auto;
  margin-right: 0px;
}

.logoImg {
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  margin-bottom: 3%;
}

.welcome-h11 {
  font-family: "Sk-Modernist-Bold";
  font-size: 30px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.welcome-h12 {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: -10px;
}

ion-item {
  --background: var(--ion-color-blanco);
  --color: var(--ion-color-negro);
  --color-focused: var(--ion-color-negro);
  --border-width: 1px !important;
  --padding-top: 3px;
  --padding-start: 0px;
  --highlight-color-invalid: none;
  --highlight-color-valid: none;
  --highlight-color-focused: none !important;
}
ion-item.item-shape-round {
  border-style: solid !important;
  border-width: 1px !important;
  border-radius: 15px !important;
}

ion-item::part(native) {
  border: none;
}

.item-highlight {
  border-width: 0px !important;
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

.input-CItem {
  font-family: "Sk-Modernist-Regular";
  font-size: 19px;
}

hr {
  height: 0.1px;
  width: 100%;
  background: var(--ion-color-negro);
  margin-top: 35px;
  margin-left: auto;
}

.OrSingIn-P {
  display: block;
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  text-align: center;
  width: -moz-fit-content;
  width: fit-content;
  margin-top: -17px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--ion-color-blanco);
}

.singInF-Bt {
  width: 50px;
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: 10px;
}

.singInG-Bt {
  width: 50px;
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: 20px;
}

.singInA-Bt {
  width: 50px;
  height: 50px;
  display: block;
  margin-left: 20px;
  margin-right: auto;
}

.TermTxt-P {
  display: block;
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--ion-color-blanco);
}

.TermTxtLink-P {
  display: block;
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  text-align: center;
  margin-top: -20px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--ion-color-blanco);
}

.create-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
  width: 100%;
  height: 40px;
  --border-radius: 10px;
  --box-shadow:none;
}

.label_ver {
  font-family: "Sk-Modernist-Regular";
  font-size: 10px;
  display: flex;
  justify-content: center;
  color: var(--ion-color-negro);
}

.error-message {
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  line-height: 1.5;
}

.img-view {
  width: 39px;
  margin: 0;
  margin-bottom: 10px;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/auth/registry/registry.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/auth/registry/registry.page.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;ACCJ;;ADEA;EACI,mCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;EACA,sCAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;ACCJ;;ADEA;EACI,YAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;ACCJ;;ADEA;EACI,mCAAA;EACA,eAAA;EACA,eAAA;EACA,oBAAA;ACCJ;;ADEA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;ACCJ;ADCI;EACI,8BAAA;EACA,4BAAA;EACA,8BAAA;ACCR;;ADIA;EACI,YAAA;ACDJ;;ADIA;EACI,4BAAA;ACDJ;;ADKA;EACI,mCAAA;EACA,eAAA;ACFJ;ADII;EACI,mCAAA;EACA,eAAA;EACA,wCAAA;EACA,sCAAA;EAAA,iCAAA;EACA,gBAAA;ACFR;;ADMA;EACI,mCAAA;EACA,eAAA;ACHJ;;ADOA;EACI,aAAA;EACA,WAAA;EACA,kCAAA;EACA,gBAAA;EACA,iBAAA;ACJJ;;ADOA;EACI,cAAA;EACA,mCAAA;EACA,eAAA;EACA,kBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;ACJJ;;ADOA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;ACJJ;;ADOA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;ACJJ;;ADOA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;ACJJ;;ADOA;EACI,cAAA;EACA,mCAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;ACJJ;;ADOA;EACI,cAAA;EACA,mCAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;ACJJ;;ADOA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;ACJJ;;ADQA;EACI,mCAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,6BAAA;ACLJ;;ADQA;EACI,mCAAA;EACA,eAAA;EACA,gBAAA;ACLJ;;ADQA;EACI,WAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;ACLJ","sourcesContent":["ion-content {\n    --padding-top: 15%;\n    --padding-start: 5%;\n    --padding-end: 5%;\n    --padding-bottom: 5%;\n}\n\n.singIn-Bt {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 15px;\n    text-transform: none;\n    width: 90px;\n    --border-style: solid;\n    --border-width: 1px;\n    --border-color: var(--ion-color-negro);\n    --border-radius: 25px;\n    --box-shadow:none;\n    margin-left: auto;\n    margin-right: 0px;\n}\n\n.logoImg {\n    width: 100px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 3%;\n    margin-bottom: 3%;\n}\n\n.welcome-h11 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 30px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\n.welcome-h12 {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    margin-top: 0px;\n    margin-bottom: -10px;\n}\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --padding-top: 3px; \n    --padding-start: 0px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n\n    &.item-shape-round {\n        border-style: solid !important;\n        border-width: 1px !important;\n        border-radius: 15px !important; \n    }\n\n}\n\nion-item::part(native) {\n    border: none;\n}\n\n.item-highlight {\n    border-width: 0px !important;\n}\n\n//CAMPOS CON ION-ITEM\n.camposLabel-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    \n    &.label-floating {\n        font-family: 'Sk-Modernist-Regular';\n        font-size: 17px;\n        color: var(--ion-color-negro) !important;\n        max-width: fit-content !important;\n        margin-top: -6px;\n    }\n}\n\n.input-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 19px;\n    //height: 20px !important;\n}\n\nhr {\n    height: 0.1px;\n    width: 100%;\n    background: var(--ion-color-negro);\n    margin-top: 35px;\n    margin-left: auto;\n}\n\n.OrSingIn-P {\n    display: block;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    text-align: center;\n    width:fit-content;\n    margin-top: -17px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: var(--ion-color-blanco);\n}\n\n.singInF-Bt {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin-left: auto;\n    margin-right: 10px;\n}\n\n.singInG-Bt {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin-left: auto;\n    margin-right: 20px; //auto\n}\n\n.singInA-Bt {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin-left: 20px; //10px\n    margin-right: auto;\n}\n\n.TermTxt-P {\n    display: block;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: var(--ion-color-blanco);\n}\n\n.TermTxtLink-P {\n    display: block;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    text-align: center;\n    margin-top: -20px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: var(--ion-color-blanco);\n}\n\n.create-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 40px;\n    --border-radius: 10px;\n    --box-shadow:none;\n    //margin-top: -5px;\n}\n\n.label_ver {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 10px;\n    display: flex;\n    justify-content: center;\n    color: var(--ion-color-negro); \n}\n\n.error-message {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    line-height: 1.5;\n}\n\n.img-view{\n    width: 39px;\n    margin: 0;\n    margin-bottom: 10px;\n    cursor: pointer;\n}","ion-content {\n  --padding-top: 15%;\n  --padding-start: 5%;\n  --padding-end: 5%;\n  --padding-bottom: 5%;\n}\n\n.singIn-Bt {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 15px;\n  text-transform: none;\n  width: 90px;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: var(--ion-color-negro);\n  --border-radius: 25px;\n  --box-shadow:none;\n  margin-left: auto;\n  margin-right: 0px;\n}\n\n.logoImg {\n  width: 100px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n\n.welcome-h11 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 30px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.welcome-h12 {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  margin-top: 0px;\n  margin-bottom: -10px;\n}\n\nion-item {\n  --background: var(--ion-color-blanco);\n  --color: var(--ion-color-negro);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --padding-top: 3px;\n  --padding-start: 0px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n}\nion-item.item-shape-round {\n  border-style: solid !important;\n  border-width: 1px !important;\n  border-radius: 15px !important;\n}\n\nion-item::part(native) {\n  border: none;\n}\n\n.item-highlight {\n  border-width: 0px !important;\n}\n\n.camposLabel-CItem {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n}\n.camposLabel-CItem.label-floating {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 17px;\n  color: var(--ion-color-negro) !important;\n  max-width: fit-content !important;\n  margin-top: -6px;\n}\n\n.input-CItem {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 19px;\n}\n\nhr {\n  height: 0.1px;\n  width: 100%;\n  background: var(--ion-color-negro);\n  margin-top: 35px;\n  margin-left: auto;\n}\n\n.OrSingIn-P {\n  display: block;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  text-align: center;\n  width: fit-content;\n  margin-top: -17px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: var(--ion-color-blanco);\n}\n\n.singInF-Bt {\n  width: 50px;\n  height: 50px;\n  display: block;\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n.singInG-Bt {\n  width: 50px;\n  height: 50px;\n  display: block;\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n.singInA-Bt {\n  width: 50px;\n  height: 50px;\n  display: block;\n  margin-left: 20px;\n  margin-right: auto;\n}\n\n.TermTxt-P {\n  display: block;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: var(--ion-color-blanco);\n}\n\n.TermTxtLink-P {\n  display: block;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  text-align: center;\n  margin-top: -20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: var(--ion-color-blanco);\n}\n\n.create-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 40px;\n  --border-radius: 10px;\n  --box-shadow:none;\n}\n\n.label_ver {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 10px;\n  display: flex;\n  justify-content: center;\n  color: var(--ion-color-negro);\n}\n\n.error-message {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.img-view {\n  width: 39px;\n  margin: 0;\n  margin-bottom: 10px;\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 73596:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/registry/registry.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content color=\"blanco\" fullscreen>\n\n  <form [formGroup]=\"registryForm\" (ngSubmit)=\"create()\">\n    <ion-grid>\n      <ion-row>\n        <ion-button class=\"singIn-Bt\" color=\"blanco\" [routerLink]=\"['/login']\">\n          {{ 'REGISTRY.btnSingIn' | translate }}\n        </ion-button>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <div><img class=\"logoImg\" src=\"../../../../assets/logoApp.jpg\"></div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h1 class=\"welcome-h11\">{{ 'REGISTRY.WelcomeTxt1' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h1 class=\"welcome-h12\">{{ 'REGISTRY.WelcomeTxt2' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 20px;\">\n        <ion-col>\n          <ion-item fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'REGISTRY.EmailLabel' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"email\" type=\"email\" inputmode=\"email\" required></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\" style=\"margin-top: 8px; margin-bottom: 5px;\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div class=\"error-message\" *ngIf=\"email.hasError(validation.type) && (email.dirty || email.touched)\">\n                <small class=\"error-message\">{{ 'REGISTRY.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'REGISTRY.PasswordLabel' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"password\" type=\"{{!view ? 'password' : 'text'}}\" required></ion-input>\n            <ion-img class=\"img-view\" slot=\"end\" src=\"../../../../assets/icon/view.png\" (click)=\"verContra()\"></ion-img>\n          </ion-item>\n          <div class=\"validation-errors\" style=\"margin-top: 8px;\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n              <div class=\"error-message\" *ngIf=\"password.hasError(validation.type) && (password.dirty || password.touched)\">\n                <small class=\"error-message\">{{ 'REGISTRY.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n          <!-- <ion-item >\n            <ion-label >{{ 'REGISTRY.checkLegal' | translate }}</ion-label> \n            <ion-checkbox [value]=\"isLegal\"  (ionChange)=\"isChecked('legal')\"></ion-checkbox>\n          </ion-item>\n          <ion-item >\n            <ion-label >\n              {{ 'REGISTRY.checkTerms' | translate }} \n              <a class=\"a_ft\" (click)=\"params('terms-complete')\">{{ 'REGISTRY.terminosCondiciones' | translate }}</a>\n            </ion-label> \n            <ion-checkbox [value]=\"isTerms\"  (ionChange)=\"isChecked('terms')\"></ion-checkbox>\n          </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"isMobile || isWeb\">\n        <ion-col>\n          <hr>\n          <p class=\"OrSingIn-P\">{{ 'REGISTRY.OrSingIn' | translate }}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"isMobile || isWeb\">\n        \n        <ion-col size=\"6\">\n          <img class=\"singInG-Bt\" src=\"../../../../assets/icon/02-Boton_Google.png\" (click)=\"singUpGoogle()\">\n        </ion-col>\n        <ion-col size=\"6\">\n          <img class=\"singInA-Bt\" src=\"../../../../assets/icon/03-Boton_Apple.png\" (click)=\"singUpApple()\">\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"TermTxt-P\">{{ 'LOGIN.TermsText2' | translate }} <a class=\"a_ft\" (click)=\"params('terms-complete')\">{{ 'REGISTRY.terminosCondiciones' | translate }}</a></p>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row>\n        <ion-col>\n          <p class=\"TermTxtLink-P\"><a class=\"a_ft\" (click)=\"params('terms-complete')\">{{ 'REGISTRY.terminosCondiciones' | translate }}</a></p>\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row>\n        <ion-button class=\"create-Bt\" color=\"primary1\" type=\"submit\">\n          {{ 'REGISTRY.btnCreate' | translate }}\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_registry_registry_module_ts.js.map