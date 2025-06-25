(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_verification-code_verification-code_module_ts"],{

/***/ 43996:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/verification-code/verification-code-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationCodePageRoutingModule: () => (/* binding */ VerificationCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _verification_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-code.page */ 45600);




const routes = [{
  path: '',
  component: _verification_code_page__WEBPACK_IMPORTED_MODULE_0__.VerificationCodePage
}];
let VerificationCodePageRoutingModule = class VerificationCodePageRoutingModule {};
VerificationCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], VerificationCodePageRoutingModule);


/***/ }),

/***/ 83748:
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/verification-code/verification-code.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationCodePageModule: () => (/* binding */ VerificationCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _verification_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-code-routing.module */ 43996);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _verification_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification-code.page */ 45600);








let VerificationCodePageModule = class VerificationCodePageModule {};
VerificationCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _verification_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerificationCodePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_verification_code_page__WEBPACK_IMPORTED_MODULE_1__.VerificationCodePage]
})], VerificationCodePageModule);


/***/ }),

/***/ 45600:
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/verification-code/verification-code.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationCodePage: () => (/* binding */ VerificationCodePage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _verification_code_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification-code.page.html?ngResource */ 49808);
/* harmony import */ var _verification_code_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verification-code.page.scss?ngResource */ 95912);
/* harmony import */ var _verification_code_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_verification_code_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/firebase-auth.service */ 26372);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/constants */ 57724);











const limiteTimeOTP = 60;
let VerificationCodePage = class VerificationCodePage {
  constructor(formBuilder, activatedRoute, router, translate, uiService, firebaseAuthService) {
    var _this = this;
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.translate = translate;
    this.uiService = uiService;
    this.firebaseAuthService = firebaseAuthService;
    this.tOTP = limiteTimeOTP;
    this.strTOTO = '00:' + this.tOTP;
    this.verifID = '';
    this.isMailCode = false;
    this.lang = "";
    this.metodCode = " phone";
    this.VCodeForm = this.formBuilder.group({
      codigo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
      /*c0: ['', [ Validators.required ]],
      c1: ['', [ Validators.required ]],
      c2: ['', [ Validators.required ]],
      c3: ['', [ Validators.required ]],
      c4: ['', [ Validators.required ]],
      c5: ['', [ Validators.required ]]*/
    });
    this.validation_messages = {
      codigo: [{
        type: 'required',
        message: 'msgErrReqMobile'
      }]
      /*'c0': [ { type: 'required', message: 'msgErrReqMobile'} ],
      'c1': [ { type: 'required', message: 'msgErrReqMobile'} ],
      'c2': [ { type: 'required', message: 'msgErrReqMobile'} ],
      'c3': [ { type: 'required', message: 'msgErrReqMobile'} ],
      'c4': [ { type: 'required', message: 'msgErrReqMobile'} ],
      'c5': [ { type: 'required', message: 'msgErrReqMobile'} ]*/
    };
    this.activatedRoute.queryParams.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (_this.router.getCurrentNavigation().extras.state) {
          _this.email = _this.router.getCurrentNavigation().extras.state.email;
          _this.password = _this.router.getCurrentNavigation().extras.state.password;
          _this.name = _this.router.getCurrentNavigation().extras.state.name;
          _this.rs = _this.router.getCurrentNavigation().extras.state.rs;
          _this.mobile = _this.router.getCurrentNavigation().extras.state.mobile;
          yield _this.sendAgain();
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  get codigo() {
    return this.VCodeForm.get('codigo');
  }
  ngOnInit() {
    var _this2 = this;
    this.metodCode = this.translate.instant('VC.Phone');
    if (this.translate.currentLang == 'es') {
      this.lang = src_environments_constants__WEBPACK_IMPORTED_MODULE_5__.constants.languages.es;
    } else {
      this.lang = src_environments_constants__WEBPACK_IMPORTED_MODULE_5__.constants.languages.en;
    }
    this.firebaseAuthService.phoneCodeSent$.subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        try {
          _this2.verifID = event.verificationId;
        } catch (error) {
          console.log('ERROR AL OBTENER CODIGO DE SEGURIDAD: ', error);
          _this2.tOTP = 0;
          _this2.uiService.alertOK(_this2.translate.instant('VC.ErrServ'));
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    this.calculaTimeOTP();
  }
  onInputC(field, pos, nextC) {
    let val = field.target.value;
    //this.styleC[pos] = 'ion-itemW'
    console.log('EVEN: ', val);
    var patt = new RegExp('^[0-9]{1}$');
    if (!patt.test(val)) {
      val = '';
    } else {
      //this.styleC[pos] = 'ion-itemO'
    }
    /*switch (pos) {
      case 0:
        //this.c1.setValue(val.substr(-1));
        this.c0.setValue(val);
        break;
      case 1:
        this.c1.setValue(val);
        break;
      case 2:
        this.c2.setValue(val);
        break;
      case 3:
        this.c3.setValue(val);
        break;
      case 4:
        this.c4.setValue(val);
        break;
      case 5:
        this.c5.setValue(val);
        break;
      default:
        break;
    }*/
    if (val != '') {
      nextC.setFocus();
    }
  }
  timeOTP(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.tOTP--;
        if (this.tOTP < 0) this.tOTP = 0;
        this.strTOTO = '00:' + ('00' + this.tOTP).slice(-2);
        resolve();
      }, ms);
    });
  }
  calculaTimeOTP() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      while (_this3.tOTP > 0) {
        yield _this3.timeOTP(1000);
      }
    })();
  }
  sendAgain() {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('SEND AGAIN');
      console.log(_this4.verifID !== '');
      _this4.VCodeForm.reset();
      _this4.isMailCode = false;
      try {
        if (_this4.verifID !== '') {
          _this4.uiService.showLoader();
        }
        yield _this4.firebaseAuthService.signInWithPhoneNumber({
          phoneNumber: _this4.mobile
        });
        _this4.uiService.hideLoader();
        _this4.tOTP = limiteTimeOTP;
      } catch (error) {
        _this4.uiService.hideLoader();
        console.log("Phoner number verification finally", error);
        _this4.tOTP = 0;
        _this4.uiService.alertOK(_this4.translate.instant('VC.ErrServ'));
      }
    })();
  }
  sendCodeEmail() {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('SEND CODE EMAIL');
      _this5.isMailCode = true;
      _this5.metodCode = _this5.translate.instant('VC.Email');
      _this5.uiService.showLoader();
      try {
        yield _this5.firebaseAuthService.sendVerificationCodeEmail(_this5.email, _this5.lang);
      } catch (error) {
        console.log("Email verification finally", error);
        _this5.uiService.alertOK(_this5.translate.instant('VC.ErrServ'));
      } finally {
        _this5.uiService.hideLoader();
      }
    })();
  }
  next() {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('NEXT');
      var patt = new RegExp('^[0-9]{6}$');
      if (_this6.VCodeForm.invalid) {
        _this6.uiService.alertOK(_this6.translate.instant('VC.ErrMesg'));
        return;
      } else if (!patt.test(_this6.codigo.value)) {
        _this6.uiService.alertOK(_this6.translate.instant('VC.ErrLengthCode'));
        return;
      }
      //const code =  this.c0.value + this.c1.value + this.c2.value + this.c3.value + this.c4.value + this.c5.value
      let valCod = false;
      try {
        if (_this6.isMailCode) {
          console.log('CODIGO EMAIL');
          const resCodeValido = yield _this6.firebaseAuthService.validaCodeEmail(_this6.email, _this6.codigo.value);
          console.log('RES CODE: ', resCodeValido);
          if (resCodeValido == '10') {
            valCod = true;
          }
        } else {
          console.log('CODIGO TELEFONO');
          let SIResult = yield _this6.firebaseAuthService.confirmVerificationCode({
            verificationCode: _this6.codigo.value,
            verificationId: _this6.verifID
          });
          console.log(SIResult);
          if (SIResult.user != null) {
            valCod = true;
          }
        }
      } catch (error) {
        console.log("ERROR COD: ", JSON.stringify(error));
        valCod = false;
      }
      valCod = true; //TODO: Borrar esta linea cuando se termine el desarrollo
      if (!valCod) {
        _this6.uiService.alertOK(_this6.translate.instant('VC.ErrCode'));
      } else {
        let navegationExtras = {
          state: {
            email: _this6.email,
            password: _this6.password,
            name: _this6.name,
            rs: _this6.rs,
            mobile: _this6.mobile
          }
        };
        _this6.router.navigate(['profile-details'], navegationExtras);
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService
    }, {
      type: _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseAuthService
    }];
  }
};
VerificationCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-verification-code',
  template: _verification_code_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_verification_code_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], VerificationCodePage);


/***/ }),

/***/ 95912:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/auth/verification-code/verification-code.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-back-button {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  margin-top: 20px;
}

.time-h1 {
  display: flex;
  justify-content: center;
  font-family: "Sk-Modernist-Bold";
  font-size: 36px;
  margin-top: 30px;
  margin-bottom: 0px;
}

.text-h1 {
  display: flex;
  justify-content: center;
  font-family: "Sk-Modernist-Regular";
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 40px;
}

.ion-itemW {
  --background: var(--ion-color-blanco);
  --color: var(--ion-color-negro);
  --color-focused: var(--ion-color-negro);
  --border-width: 1px !important;
  --border-radius: 15px;
  --border-color: var(--ion-color-negro);
  --padding-start: 15px;
  --highlight-color-invalid: none;
  --highlight-color-valid: none;
  --highlight-color-focused: none !important;
  width: 45px;
}

.ion-itemO {
  --background: var(--ion-color-primary1);
  --color: var(--ion-color-blanco);
  --color-focused: var(--ion-color-negro);
  --border-width: 1px !important;
  --border-radius: 15px;
  --border-color: var(--ion-color-primary1);
  --padding-start: 15px;
  --highlight-color-invalid: none;
  --highlight-color-valid: none;
  --highlight-color-focused: none !important;
  width: 45px;
}

.input-CItem {
  font-family: "Sk-Modernist-Bold";
  font-size: 22px;
}

.SendAgain-P {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--ion-color-blanco);
}

.link {
  display: contents;
  color: var(--ion-color-primary1-tint);
  cursor: pointer;
}

.a_sa {
  color: var(--ion-color-negro);
}

.next-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
  width: 100%;
  height: 40px;
  --border-radius: 10px;
  --box-shadow: none;
  margin-top: 30px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/auth/verification-code/verification-code.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/auth/verification-code/verification-code.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,aAAA;EACA,uBAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;ACCJ;;ADEA;EACI,aAAA;EACA,uBAAA;EACA,mCAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;ACCJ;;ADEA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,qBAAA;EACA,sCAAA;EAEA,qBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EACA,WAAA;ACAJ;;ADGA;EACI,uCAAA;EACA,gCAAA;EACA,uCAAA;EACA,8BAAA;EACA,qBAAA;EACA,yCAAA;EAEA,qBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EACA,WAAA;ACDJ;;ADIA;EACI,gCAAA;EACA,eAAA;ACDJ;;ADKA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;ACFJ;;ADKA;EACI,iBAAA;EACA,qCAAA;EACA,eAAA;ACFJ;;ADKA;EACI,6BAAA;ACFJ;;ADKA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;ACFJ","sourcesContent":["ion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n}\n\n.time-h1 {\n    display: flex;\n    justify-content: center;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 36px;\n    margin-top: 30px;\n    margin-bottom: 0px;\n}\n\n.text-h1 {\n    display: flex;\n    justify-content: center;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 18px;\n    text-align: center;\n    margin-top: 10px;\n    margin-left: 50px;\n    margin-right: 50px;\n    margin-bottom: 40px;\n}\n\n.ion-itemW {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --border-radius: 15px;\n    --border-color: var(--ion-color-negro);\n    //--padding-bottom: 0px; \n    --padding-start: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    width: 45px;\n}\n\n.ion-itemO {\n    --background: var(--ion-color-primary1);\n    --color: var(--ion-color-blanco);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --border-radius: 15px;\n    --border-color: var(--ion-color-primary1);\n    //--padding-bottom: 0px; \n    --padding-start: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    width: 45px;\n}\n\n.input-CItem {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 22px;\n    //height: 20px !important;\n}\n\n.SendAgain-P {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    text-align: center;\n    margin-top: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: var(--ion-color-blanco);\n}\n\n.link {\n    display: contents;\n    color: var(--ion-color-primary1-tint);\n    cursor: pointer;\n}\n\n.a_sa {\n    color: var(--ion-color-negro);\n}\n\n.next-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 40px;\n    --border-radius: 10px;\n    --box-shadow: none;\n    margin-top: 30px;\n}","ion-back-button {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 20px;\n}\n\n.time-h1 {\n  display: flex;\n  justify-content: center;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 36px;\n  margin-top: 30px;\n  margin-bottom: 0px;\n}\n\n.text-h1 {\n  display: flex;\n  justify-content: center;\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 18px;\n  text-align: center;\n  margin-top: 10px;\n  margin-left: 50px;\n  margin-right: 50px;\n  margin-bottom: 40px;\n}\n\n.ion-itemW {\n  --background: var(--ion-color-blanco);\n  --color: var(--ion-color-negro);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --border-radius: 15px;\n  --border-color: var(--ion-color-negro);\n  --padding-start: 15px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n  width: 45px;\n}\n\n.ion-itemO {\n  --background: var(--ion-color-primary1);\n  --color: var(--ion-color-blanco);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --border-radius: 15px;\n  --border-color: var(--ion-color-primary1);\n  --padding-start: 15px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n  width: 45px;\n}\n\n.input-CItem {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 22px;\n}\n\n.SendAgain-P {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  text-align: center;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: var(--ion-color-blanco);\n}\n\n.link {\n  display: contents;\n  color: var(--ion-color-primary1-tint);\n  cursor: pointer;\n}\n\n.a_sa {\n  color: var(--ion-color-negro);\n}\n\n.next-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 40px;\n  --border-radius: 10px;\n  --box-shadow: none;\n  margin-top: 30px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 49808:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/auth/verification-code/verification-code.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"my-mobile\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <div id=\"sign-in-button\"></div>\n\n  <form [formGroup]=\"VCodeForm\" (ngSubmit)=\"next()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"time-h1\">{{strTOTO}}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h1 class=\"text-h1\">{{ 'VC.Text' | translate }} {{metodCode}}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-row mode=\"md\">\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-input class=\"input-CItem\" formControlName=\"codigo\" type=\"numeric\" inputmode=\"numeric\" minlength=\"6\" maxlength=\"6\" style=\"text-align: center;\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row mode=\"md\">\n        <ion-col style=\"display: flex; justify-content: center;\">\n          <ion-item [class]=\"styleC[0]\" lines=\"none\">\n            <ion-input class=\"input-CItem\" #C0 formControlName=\"c0\" type=\"text\" inputmode=\"numeric\" placeholder=\"0\" autofocus=\"true\" \n              clearOnEdit=\"true\" minlength=\"1\" maxlength=\"1\" size=\"1\" (ionChange)=\"onInputC($event, 0, C1)\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"display: flex; justify-content: center;\">\n          <ion-item [class]=\"styleC[1]\" lines=\"none\">\n            <ion-input class=\"input-CItem\" #C1 formControlName=\"c1\" type=\"text\" inputmode=\"numeric\" placeholder=\"0\" \n              clearOnEdit=\"true\" minlength=\"1\" maxlength=\"1\" size=\"1\" (ionChange)=\"onInputC($event, 1, C2)\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"display: flex; justify-content: center;\">\n          <ion-item [class]=\"styleC[2]\" lines=\"none\">\n            <ion-input class=\"input-CItem\" #C2 formControlName=\"c2\" type=\"text\" inputmode=\"numeric\" placeholder=\"0\" \n              clearOnEdit=\"true\" minlength=\"1\" maxlength=\"1\" size=\"1\" (ionChange)=\"onInputC($event, 2, C3)\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"display: flex; justify-content: center;\">\n          <ion-item [class]=\"styleC[3]\" lines=\"none\">\n            <ion-input class=\"input-CItem\" #C3 formControlName=\"c3\" type=\"text\" inputmode=\"numeric\" placeholder=\"0\" \n              clearOnEdit=\"true\" minlength=\"1\" maxlength=\"1\" size=\"1\" (ionChange)=\"onInputC($event, 3, C4)\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"display: flex; justify-content: center;\">\n          <ion-item [class]=\"styleC[4]\" lines=\"none\">\n            <ion-input class=\"input-CItem\" #C4 formControlName=\"c4\" type=\"text\" inputmode=\"numeric\" placeholder=\"0\" \n              clearOnEdit=\"true\" minlength=\"1\" maxlength=\"1\" size=\"1\" (ionChange)=\"onInputC($event, 4, C5)\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"display: flex; justify-content: center;\">\n          <ion-item [class]=\"styleC[5]\" lines=\"none\">\n            <ion-input class=\"input-CItem\" #C5 formControlName=\"c5\" type=\"text\" inputmode=\"numeric\" placeholder=\"0\" \n              clearOnEdit=\"true\" minlength=\"1\" maxlength=\"1\" size=\"1\" (ionChange)=\"onInputC($event, 5, C5)\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col>\n          <h1 class=\"text-h1\">{{ 'VC.SendCodeEmail' | translate }} <a class=\"link\" (click)=\"sendCodeEmail()\">{{ 'VC.Email' | translate }}</a></h1>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row>\n        <ion-col>\n          <p class=\"SendAgain-P\"><a class=\"a_sa\" (click)=\"sendAgain()\">{{ 'VC.SendAgain' | translate }}</a></p>\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row>\n        <ion-button class=\"next-Bt\" color=\"primary1\" type=\"submit\">\n          {{ 'VC.btnNext' | translate }}\n        </ion-button>\n      </ion-row>\n\n      <!-- <ion-row>\n        <ion-col size=\"12\">\n          <p class=\"SendAgain-P\"><a class=\"a_sa\" (click)=\"sendCodeEmail()\">{{ 'VC.SendCodeEmail' | translate }}</a></p>\n        </ion-col>\n      </ion-row> -->\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_verification-code_verification-code_module_ts.js.map