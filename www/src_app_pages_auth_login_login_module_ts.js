(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

/***/ 80192:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 73208);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 9151:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 80192);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 73208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 73208:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 87400);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 47144);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ 90628);
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/match.service */ 5876);
/* harmony import */ var src_app_services_google_sign_in_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/google-sign-in.service */ 24572);
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utilities.service */ 61412);
/* harmony import */ var src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firebase-auth.service */ 26372);














let LoginPage = class LoginPage {
  constructor(formBuilder, router, translate, uiService, userService, matchService, utilities, firebaseAuthService, googleSingInService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.translate = translate;
    this.uiService = uiService;
    this.userService = userService;
    this.matchService = matchService;
    this.utilities = utilities;
    this.firebaseAuthService = firebaseAuthService;
    this.googleSingInService = googleSingInService;
    this.verApp = 'v1.0.2 r20.03-3p';
    this.presentarErroresCampos = false;
    //*public currentUser: User | null = null;
    this.idToken = '';
    this.view = false;
    this.loginForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
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
      }]
    };
  }
  ngOnInit() {}
  ionViewDidEnter() {
    var _this = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.userService.sesionFin) {
        _this.uiService.alertOK(_this.translate.instant('LOGIN.FinSesionMsg'));
      }
      /* const { rs } = await this.userService.getUserRS();
           if(rs === 'email') {
        if(await this.intoUser('email')) {
          return;
        }
      } else if (rs === 'google') {
        if(await this.ValidaUsrGoogle()) {
          return;
        }
      } else if (rs === 'apple') {
        if(await this.ValidaUsrApple()) {
          return;
        }
      } */
    })();
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  validaCampo(campo, message) {
    for (let validation of message) {
      if (campo.hasError(validation.type)) {
        this.uiService.alertOK(this.translate.instant('LOGIN.' + validation.message));
        return true;
      }
    }
    return false;
  }
  intoUser(fromRS) {
    var _this2 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        email,
        password,
        rs
      } = yield _this2.userService.getUserRS();
      const valido = yield _this2.userService.login(email, password);
      if (valido['ok']) {
        yield _this2.goDiscovers();
        return true;
      } else {
        if (rs === 'google') {
          yield _this2.googleSingInService.logout();
        } else if (rs === 'apple') {
          yield _this2.firebaseAuthService.logout();
        }
        _this2.uiService.alertOK(_this2.translate.instant('LOGIN.errRegistroMsg'));
      }
      return false;
    })();
  }
  ValidaUsrGoogle() {
    var _this3 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.idToken = yield _this3.googleSingInService.refreshToken();
      console.log('ID TOKEN - GOOGLE - ANT: ', _this3.idToken);
      if (_this3.idToken !== null && _this3.idToken !== '' && _this3.idToken !== undefined) {
        console.log('ID TOKEN - GOOGLE: ', _this3.idToken);
        return yield _this3.intoUser('google');
      }
      return false;
    })();
  }
  ValidaUsrApple() {
    var _this4 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.firebaseAuthService.getIdToken({
          forceRefresh: true
        }).then( /*#__PURE__*/function () {
          var _ref = (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (idToken) {
            _this4.idToken = idToken;
            console.log('ID TOKEN - APPLE:', _this4.idToken);
            return yield _this4.intoUser('apple');
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (error) {
        console.log('ERROR AL OBTENER ID TOKEN - APPLE: ', error);
      }
      return false;
    })();
  }
  singIn() {
    var _this5 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /* if(this.validaCampo(this.email, this.validation_messages.email)){
        return;
      } */
      if (_this5.validaCampo(_this5.password, _this5.validation_messages.password)) {
        return;
      }
      yield _this5.uiService.showLoader();
      try {
        const valido = yield _this5.userService.login(_this5.email.value, _this5.password.value);
        if (valido['ok']) {
          //this.navCtrl.navigateRoot( '/main/tabs/discover', { animated: true } );
          _this5.userService.setUserRS(_this5.email.value, _this5.password.value, 'email');
          yield _this5.goDiscovers();
        } else {
          if (valido['name'] === "HttpErrorResponse") {
            if (valido['status'] === 401) _this5.uiService.alertOK(_this5.translate.instant('LOGIN.msgErrLogin'));else _this5.uiService.alertOK(_this5.translate.instant('LOGIN.msgErrCnx'));
          } else {
            _this5.uiService.alertOK(_this5.translate.instant('LOGIN.msgErrLogin'));
          }
        }
      } catch (err) {
        console.log('ERROR LOGIN: ', err);
        _this5.uiService.alertOK(_this5.translate.instant('LOGIN.msgErrCnx'));
      }
      yield _this5.uiService.hideLoader();
    })();
  }
  preLoadDis() {
    var _this6 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        let discoverU = yield _this6.matchService.getDiscoverProfiles("0", "10", filter);
        yield _this6.setAvatarImg(discoverU);
        console.log('RE-LOAD DISCOVER_USR: ', discoverU);
        return discoverU;
      } catch (error) {
        console.log('ERROR AL RECARGAR PROFILES');
        return [];
      }
    })();
  }
  setAvatarImg(usrDicover) {
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // for (const usr of usrDicover) {
  //   usr.image = '../../../assets/icon/30-Default_no-image.jpeg';
  //   const res_imgs =  <ImagesUser[]> await this.matchService.getIMGS(usr.personId.toString());
  //   for (const img of res_imgs) {
  //     if(img.avatar) {
  //       usr.image = img.multimediaUrl;
  //     }
  //   }
  // }
  singInFacebook() {
    console.log("SING IN WITH FACEBOOK");
    this.uiService.alertOK(this.translate.instant('LOGIN.msgOtherSign'));
  }
  singInGoogle() {
    var _this7 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("SING IN WITH GOOGLE");
      let email_final = '';
      let password_final = '';
      try {
        const usr = yield _this7.googleSingInService.loginViaGoogle();
        if (usr === null) {
          _this7.uiService.alertOK(_this7.translate.instant('LOGIN.msgErrGoogle'));
          return;
        }
        let {
          email,
          password,
          rs
        } = yield _this7.userService.getUserRS();
        console.log('EMAIL_SAVE: ', email);
        console.log('PASSWORD_SAVE: ', password);
        console.log('RS_SAVE: ', rs);
        if (email === usr.email) {
          email_final = email;
          password_final = password;
        } else {
          email = '';
          password = '';
        }
        if (email === null || password === null || email === '' || password === '') {
          //Valida si el usuario ya esta registrado
          const res = yield _this7.userService.existI(usr.email);
          if (!res) {
            //Si no esta registrado, se registra
            _this7.goRegistro(usr.email, _this7.generateRandomPassword(), '', 'google');
            return;
          } else {
            //Si esta registrado, se cambia password, se hace login y se guarda email y password
            email_final = usr.email;
            password_final = _this7.generateRandomPassword();
            const resP = yield _this7.userService.upPas(usr.email, password_final);
            if (resP) {
              _this7.userService.setUserRS(email_final, password_final, 'google');
            } else {
              return;
            }
          }
        }
        const valido = yield _this7.userService.login(email_final, password_final);
        if (valido['ok']) {
          yield _this7.goDiscovers();
        } else {
          yield _this7.googleSingInService.logout();
          _this7.uiService.alertOK(_this7.translate.instant('LOGIN.errRegistroMsg'));
        }
      } catch (error) {
        console.log("Google Sign in Error", error);
        _this7.uiService.alertOK(_this7.translate.instant('LOGIN.msgErrGoogle'));
      }
    })();
  }
  singInApple() {
    var _this8 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("SING IN WITH APPLE");
      let email_final = '';
      let password_final = '';
      try {
        const user = yield _this8.firebaseAuthService.signInWithApple();
        console.log('USER APPLE: ', user);
        let {
          email,
          password,
          rs
        } = yield _this8.userService.getUserRS();
        console.log('EMAIL_SAVE: ', email);
        console.log('PASSWORD_SAVE: ', password);
        console.log('RS_SAVE: ', rs);
        if (email === user.email) {
          email_final = email;
          password_final = password;
        } else {
          email = '';
          password = '';
        }
        if (email === null || password === null || email === '' || password === '') {
          //Valida si el usuario ya esta registrado
          const res = yield _this8.userService.existI(user.email);
          console.log('RES_EXIST: ', res);
          if (!res) {
            //Si no esta registrado, se registra
            _this8.goRegistro(user.email, _this8.generateRandomPassword(), user.displayName, 'apple');
            return;
          } else {
            //Si esta registrado, se cambia password, se hace login y se guarda email y password
            email_final = user.email;
            password_final = _this8.generateRandomPassword();
            const resP = yield _this8.userService.upPas(user.email, password_final);
            if (resP) {
              _this8.userService.setUserRS(email_final, password_final, 'apple');
            } else {
              return;
            }
          }
        }
        const valido = yield _this8.userService.login(email_final, password_final);
        if (valido['ok']) {
          yield _this8.goDiscovers();
        } else {
          yield _this8.googleSingInService.logout();
          _this8.uiService.alertOK(_this8.translate.instant('LOGIN.errRegistroMsg'));
        }
      } catch (error) {
        console.log("Apple Sign in Error", error);
        _this8.uiService.alertOK(_this8.translate.instant('LOGIN.msgErrApple'));
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
  goRegistro(email, password, name, rs) {
    var _this9 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this9.utilities.getCountryISO();
      console.log('RES: ', res);
      let contryISO = 'us';
      if (res['ok']) {
        contryISO = String(res['country']).toLowerCase();
      } else {
        console.log('ERROR al obtener CONTRY ISO');
        contryISO = 'us';
      }
      let navegationExtras = {
        state: {
          email: email,
          password: password,
          name: name,
          rs: rs,
          cISO: contryISO
        }
      };
      _this9.router.navigate(['my-mobile'], navegationExtras);
    })();
  }
  params(parameters) {
    var _this10 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let navegationExtras = {
        state: {
          parameters: parameters,
          paramReturn: 'login'
        }
      };
      _this10.router.navigate(['params'], navegationExtras);
    })();
  }
  goDiscovers() {
    var _this11 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const discoverUsrs = yield _this11.preLoadDis();
      let navegationExtras = {
        state: {
          discoverUsrs
        }
      };
      yield _this11.router.navigate(['/main/tabs/discover'], navegationExtras);
    })();
  }
  verContra() {
    this.view = !this.view;
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_5__.MatchService
    }, {
      type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__.UtilitiesService
    }, {
      type: src_app_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__.FirebaseAuthService
    }, {
      type: src_app_services_google_sign_in_service__WEBPACK_IMPORTED_MODULE_6__.GoogleSignInService
    }];
  }
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LoginPage);


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
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
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
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

/***/ 47144:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss?ngResource ***!
  \*************************************************************/
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

.singUp-Bt {
  font-family: "Sk-Modernist-Regular";
  font-size: 15px;
  text-transform: none;
  width: auto;
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

h1 {
  font-family: "Sk-Modernist-Bold";
  font-size: 30px;
  margin-top: 0px;
  margin-bottom: -10px;
}

/* ion-item {
    --background: var(--ion-color-blanco);
    --border-style: solid;
    --border-width: 1px;
    --border-radius: 15px;
}

ion-item.item-has-focus {
    .inputLabel.label-floating {
        font-family: 'Sk-Modernist-Regular';
        background: var(--ion-color-light);
        color: var(--ion-color-negro);
    }
}

.inputLabel {
    font-family: 'Sk-Modernist-Regular';
    font-size: 20px;
    color: var(--ion-color-negro);
}

.input {
    font-family: 'Sk-Modernist-Regular';
    font-size: 20px;
    --color: var(--ion-color-negro);
} */
/* 
CASI
ion-item {
    --background:  var(--ion-color-blanco);
    //height: 10px !important;
}

ion-input {
    font-family: 'Sk-Modernist-Regular';
    font-size: 20px;
    --color: var(--ion-color-negro);
    border-style: solid !important;
    border-width: 1px !important;
    border-radius: 15px !important;
}

ion-label {
    font-family: 'Sk-Modernist-Regular';
    color: var(--ion-color-negro) !important;

    &.label-floating {
        font-family: 'Sk-Modernist-Regular';
        background: var(--ion-color-blanco) !important;
        color: var(--ion-color-negro) !important;
        border: none;
    }
} */
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
  /* &.item-has-focus {
      --highlight-background: rgb(0,0,0,0);
  } */
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

.camposLabel-SItem {
  font-family: "Sk-Modernist-Regular";
  font-size: 13px;
  text-align: start;
  background-color: var(--ion-color-blanco);
  width: -moz-fit-content;
  width: fit-content;
  margin-top: 0px;
  margin-left: 20px;
  margin-bottom: 4px;
  /*  &.label-floating {
       color: var(--ion-color-negro) !important;
   } */
}

.input-SItem {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  height: 50px;
  border-style: solid !important;
  border-width: 1px !important;
  border-radius: 15px !important;
  --padding-start: 20px;
  --padding-end: 20px;
  margin-top: -10px;
}

.forgotPass-a {
  font-family: "Sk-Modernist-Regular";
  font-size: 13px;
  text-decoration: none !important;
  color: var(--ion-color-primary, #3880ff);
  display: flex;
  justify-content: flex-end;
}

hr {
  height: 0.1px;
  width: 100%;
  background: var(--ion-color-negro);
  margin-top: 15px;
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

.error-message {
  font-family: "Sk-Modernist-Regular";
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--ion-color-negro);
}

.img-view {
  width: 39px;
  margin: 0;
  margin-bottom: 10px;
  cursor: pointer;
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

.singIn-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
  width: 100%;
  --border-radius: 10px;
  --box-shadow:none;
  margin-top: -5px;
}

.label_ver {
  font-family: "Sk-Modernist-Regular";
  font-size: 10px;
  display: flex;
  justify-content: center;
  color: var(--ion-color-negro);
}`, "",{"version":3,"sources":["webpack://./src/app/pages/auth/login/login.page.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,mCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;EACA,sCAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;AACJ;;AAEA;EACI,YAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,eAAA;EACA,oBAAA;AACJ;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;GAAA;AA2BA;;;;;;;;;;;;;;;;;;;;;;;;;;GAAA;AA4BA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EASA;;KAAA;AAPJ;AACI;EACI,8BAAA;EACA,4BAAA;EACA,8BAAA;AACR;;AAOA;EACI,YAAA;AAJJ;;AAOA;EACI,4BAAA;AAJJ;;AAQA;EACI,mCAAA;EACA,eAAA;AALJ;AAOI;EACI,mCAAA;EACA,eAAA;EACA,wCAAA;EACA,sCAAA;EAAA,iCAAA;EACA,gBAAA;AALR;;AASA;EACI,mCAAA;EACA,eAAA;AANJ;;AAYA;EAEI,mCAAA;EACA,eAAA;EACA,iBAAA;EACA,yCAAA;EACA,uBAAA;EAAA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EAED;;MAAA;AATH;;AAcA;EACI,mCAAA;EACA,eAAA;EACA,YAAA;EACA,8BAAA;EACA,4BAAA;EACA,8BAAA;EACA,qBAAA;EACA,mBAAA;EACA,iBAAA;AAXJ;;AAcA;EACI,mCAAA;EACA,eAAA;EACA,gCAAA;EACA,wCAAA;EACA,aAAA;EACA,yBAAA;AAXJ;;AAcA;EACI,aAAA;EACA,WAAA;EACA,kCAAA;EACA,gBAAA;EACA,iBAAA;AAXJ;;AAcA;EACI,cAAA;EACA,mCAAA;EACA,eAAA;EACA,kBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;AAXJ;;AAcA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;AAXJ;;AAcA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;AAXJ;;AAcA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;AAXJ;;AAeA;EACI,mCAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,6BAAA;AAZJ;;AAeA;EACI,WAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;AAZJ;;AAeA;EACI,cAAA;EACA,mCAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;AAZJ;;AAeA;EACI,cAAA;EACA,mCAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;AAZJ;;AAeA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;AAZJ;;AAeA;EACI,mCAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,6BAAA;AAZJ","sourcesContent":["ion-content {\n    --padding-top: 15%;\n    --padding-start: 5%;\n    --padding-end: 5%;\n    --padding-bottom: 5%;\n}\n\n.singUp-Bt {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 15px;\n    text-transform: none;\n    width: auto;\n    --border-style: solid;\n    --border-width: 1px;\n    --border-color: var(--ion-color-negro);\n    --border-radius: 25px;\n    --box-shadow:none;\n    margin-left: auto;\n    margin-right: 0px;\n}\n\n.logoImg {\n    width: 100px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 3%;\n    margin-bottom: 3%;\n}\n\nh1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 30px;\n    margin-top: 0px;\n    margin-bottom: -10px;\n}\n\n/* ion-item {\n    --background: var(--ion-color-blanco);\n    --border-style: solid;\n    --border-width: 1px;\n    --border-radius: 15px;\n}\n\nion-item.item-has-focus {\n    .inputLabel.label-floating {\n        font-family: 'Sk-Modernist-Regular';\n        background: var(--ion-color-light);\n        color: var(--ion-color-negro);\n    }\n}\n\n.inputLabel {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 20px;\n    color: var(--ion-color-negro);\n}\n\n.input {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 20px;\n    --color: var(--ion-color-negro);\n} */\n\n/* \nCASI\nion-item {\n    --background:  var(--ion-color-blanco);\n    //height: 10px !important;\n}\n\nion-input {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 20px;\n    --color: var(--ion-color-negro);\n    border-style: solid !important;\n    border-width: 1px !important;\n    border-radius: 15px !important;\n}\n\nion-label {\n    font-family: 'Sk-Modernist-Regular';\n    color: var(--ion-color-negro) !important;\n\n    &.label-floating {\n        font-family: 'Sk-Modernist-Regular';\n        background: var(--ion-color-blanco) !important;\n        color: var(--ion-color-negro) !important;\n        border: none;\n    }\n} */\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --padding-top: 3px; \n    --padding-start: 0px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    //height: 50px;\n\n    &.item-shape-round {\n        border-style: solid !important;\n        border-width: 1px !important;\n        border-radius: 15px !important; \n    }\n\n    /* &.item-has-focus {\n        --highlight-background: rgb(0,0,0,0);\n    } */\n}\n\nion-item::part(native) {\n    border: none;\n}\n\n.item-highlight {\n    border-width: 0px !important;\n}\n\n//CAMPOS CON ION-ITEM\n.camposLabel-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    \n    &.label-floating {\n        font-family: 'Sk-Modernist-Regular';\n        font-size: 17px;\n        color: var(--ion-color-negro) !important;\n        max-width: fit-content !important;\n        margin-top: -6px;\n    }\n}\n\n.input-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 19px;\n    //height: 20px !important;\n}\n\n\n//CAMPOS SIN ION-ITEM\n.camposLabel-SItem {\n    //display: initial;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 13px;\n    text-align: start;\n    background-color: var(--ion-color-blanco);\n    width: fit-content;\n    margin-top: 0px;\n    margin-left: 20px;\n    margin-bottom: 4px;\n    \n   /*  &.label-floating {\n        color: var(--ion-color-negro) !important;\n    } */\n}\n\n.input-SItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    height: 50px;\n    border-style: solid !important;\n    border-width: 1px !important;\n    border-radius: 15px !important;\n    --padding-start: 20px;\n    --padding-end: 20px;\n    margin-top: -10px;\n}\n\n.forgotPass-a {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 13px;\n    text-decoration: none !important;\n    color: var(--ion-color-primary, #3880ff);\n    display: flex;\n    justify-content: flex-end;\n}\n\nhr {\n    height: 0.1px;\n    width: 100%;\n    background: var(--ion-color-negro);\n    margin-top: 15px;\n    margin-left: auto;\n}\n\n.OrSingIn-P {\n    display: block;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    text-align: center;\n    width: fit-content;\n    margin-top: -17px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: var(--ion-color-blanco);\n}\n\n.singInF-Bt {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin-left: auto;\n    margin-right: 10px;\n}\n\n.singInG-Bt {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin-left: auto;\n    margin-right: 20px; //auto\n}\n\n.singInA-Bt {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin-left: 20px; //10px\n    margin-right: auto;\n}\n\n\n.error-message {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 15px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    color: var(--ion-color-negro); \n}\n\n.img-view{\n    width: 39px;\n    margin: 0;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\n.TermTxt-P {\n    display: block;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: var(--ion-color-blanco);\n}\n\n.TermTxtLink-P {\n    display: block;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    text-align: center;\n    margin-top: -20px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: var(--ion-color-blanco);\n}\n\n.singIn-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    --border-radius: 10px;\n    --box-shadow:none;\n    margin-top: -5px;\n}\n\n.label_ver {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 10px;\n    display: flex;\n    justify-content: center;\n    color: var(--ion-color-negro); \n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 87400:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content color=\"blanco\" fullscreen>\n\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"singIn()\">\n    <ion-grid>\n      <ion-row>\n        <ion-button class=\"singUp-Bt\" color=\"blanco\" [routerLink]=\"['/registry']\">\n          {{ 'LOGIN.btnSingUp' | translate }}\n        </ion-button>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <div><img class=\"logoImg\" src=\"../../../../assets/logoApp.jpg\"></div>\n          <!-- <h4>{{ 'LOGIN.title' | translate }}</h4> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h1>{{ 'LOGIN.WelcomeTxt1' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row>\n        <ion-col>\n          <h1>{{ 'LOGIN.WelcomeTxt2' | translate }}</h1>\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row style=\"margin-top: 20px;\">\n        <ion-col>\n          <ion-item fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'LOGIN.EmailLabel' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"email\" type=\"email\" inputmode=\"email\" required></ion-input>\n          </ion-item>\n          <!-- <p class=\"camposLabel\">{{ 'LOGIN.EmailLabel' | translate }}</p> \n          <ion-input formControlName=\"email\" type=\"email\" inputmode=\"email\" placeholder=\"{{ 'LOGIN.EmailLabel' | translate }}\"required></ion-input> -->\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div class=\"error-message\" *ngIf=\"email.hasError(validation.type) && (email.dirty || email.touched)\">\n                <small class=\"error-message\">{{ 'LOGIN.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'LOGIN.PasswordLabel' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"password\" type=\"{{!view ? 'password' : 'text'}}\" required></ion-input>\n            <ion-img class=\"img-view\" slot=\"end\" src=\"../../../../assets/icon/view.png\" (click)=\"verContra()\"></ion-img>\n          </ion-item>\n\n          <!-- <p class=\"camposLabel-SItem\">{{ 'LOGIN.PasswordLabel' | translate }}</p> \n          <ion-input class=\"input-SItem\" formControlName=\"password\" type=\"password\" placeholder=\"{{ 'LOGIN.PasswordLabel' | translate }}\" required></ion-input> -->\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n              <div class=\"error-message\" *ngIf=\"password.hasError(validation.type) && (password.dirty || password.touched)\">\n                <small class=\"error-message\">{{ 'LOGIN.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <a class=\"forgotPass-a\" routerLink='/forgot-password'>{{ 'LOGIN.ForgotPass' | translate }}</a>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row>\n        <ion-col>\n          <hr>\n          <p class=\"OrSingIn-P\">{{ 'LOGIN.OrSingIn' | translate }}</p>\n        </ion-col>\n      </ion-row> -->\n\n      <!-- <ion-row>\n       \n        <ion-col size=\"6\">\n          <img class=\"singInG-Bt\" src=\"../../../../assets/icon/02-Boton_Google.png\" (click)=\"singInGoogle()\">\n        </ion-col>\n        <ion-col size=\"6\">\n          <img class=\"singInA-Bt\" src=\"../../../../assets/icon/03-Boton_Apple.png\" (click)=\"singInApple()\">\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row>\n        <ion-col>\n          <p class=\"TermTxt-P\">{{ 'LOGIN.TermsText' | translate }} <a class=\"a_ft\" (click)=\"params('terms-complete')\">{{ 'LOGIN.terminosCondiciones' | translate }}</a></p>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row>\n        <ion-col>\n        \n          <p class=\"TermTxtLink-P\"><a class=\"a_ft\" (click)=\"params('terms-complete')\">{{ 'LOGIN.terminosCondiciones' | translate }}</a></p>\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row>\n        <ion-button class=\"singIn-Bt\" color=\"primary1\" type=\"submit\">\n          {{ 'LOGIN.btnSingIn' | translate }}\n        </ion-button>\n      </ion-row>\n\n\n      <!-- <ion-row>\n        <ion-col>\n          <ion-label class=\"label_ver\">\n            {{verApp}}\n          </ion-label>\n        </ion-col>\n      </ion-row> -->\n      \n    </ion-grid>\n  </form>\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar>\n    <ion-title>Footer</ion-title>\n  </ion-toolbar>\n</ion-footer> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map