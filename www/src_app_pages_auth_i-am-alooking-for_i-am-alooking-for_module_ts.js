(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_i-am-alooking-for_i-am-alooking-for_module_ts"],{

/***/ 83696:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/i-am-alooking-for/i-am-alooking-for-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IAmALookingForPageRoutingModule: () => (/* binding */ IAmALookingForPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _i_am_alooking_for_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i-am-alooking-for.page */ 63856);




const routes = [{
  path: '',
  component: _i_am_alooking_for_page__WEBPACK_IMPORTED_MODULE_0__.IAmALookingForPage
}];
let IAmALookingForPageRoutingModule = class IAmALookingForPageRoutingModule {};
IAmALookingForPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], IAmALookingForPageRoutingModule);


/***/ }),

/***/ 90500:
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/i-am-alooking-for/i-am-alooking-for.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IAmALookingForPageModule: () => (/* binding */ IAmALookingForPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _i_am_alooking_for_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i-am-alooking-for-routing.module */ 83696);
/* harmony import */ var _i_am_alooking_for_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i-am-alooking-for.page */ 63856);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let IAmALookingForPageModule = class IAmALookingForPageModule {};
IAmALookingForPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _i_am_alooking_for_routing_module__WEBPACK_IMPORTED_MODULE_0__.IAmALookingForPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_i_am_alooking_for_page__WEBPACK_IMPORTED_MODULE_1__.IAmALookingForPage]
})], IAmALookingForPageModule);


/***/ }),

/***/ 63856:
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/i-am-alooking-for/i-am-alooking-for.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IAmALookingForPage: () => (/* binding */ IAmALookingForPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _i_am_alooking_for_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i-am-alooking-for.page.html?ngResource */ 30748);
/* harmony import */ var _i_am_alooking_for_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i-am-alooking-for.page.scss?ngResource */ 85524);
/* harmony import */ var _i_am_alooking_for_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i_am_alooking_for_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 90628);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/storage */ 2108);
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utilities.service */ 61412);
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/match.service */ 5876);














let IAmALookingForPage = class IAmALookingForPage {
  constructor(formBuilder, activatedRoute, router, translate, userService, uiService, matchService, route) {
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.translate = translate;
    this.userService = userService;
    this.uiService = uiService;
    this.matchService = matchService;
    this.route = route;
    this.lanCatalogo = 'EN';
    this.usr = {};
    this.password = '';
    this.customIamOptions = {
      header: this.translate.instant('I-AM.Title1'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('I-AM.SubHdIam'),
      translucent: true
    };
    this.customIamLookingOptions = {
      header: this.translate.instant('I-AM.Title2'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('I-AM.SubHdIamLooking'),
      translucent: true
    };
    this.iamForm = this.formBuilder.group({
      iam_a: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      iam_looking: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
    this.arr = [];
    this.selectedIamName = '';
    this.birth = this.route.snapshot.paramMap.get('birth');
    this.gender = this.route.snapshot.paramMap.get('gender');
    this.mail = this.route.snapshot.paramMap.get('mail');
    console.log(this.birth);
  }
  get iam_a() {
    return this.iamForm.get('iam_a');
  }
  get iam_looking() {
    return this.iamForm.get('iam_looking');
  }
  ngOnInit() {
    this.iamForm.get('iam_looking')?.disable();
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.translate.currentLang == 'es') {
        _this.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.es;
      } else {
        _this.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.en;
      }
      if (_this.gender == '214') {
        _this.gendername = 'Man';
      } else if (_this.gender == '215') {
        _this.gendername = 'Woman';
      } else if (_this.gender == '216') {
        _this.gendername = 'Nonbinary';
      } else if (_this.gender == '241') {
        _this.gendername = 'Prefer not to say';
      }
      _this.iams = yield _this.userService.getCatalogo2(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.IamA.toString(), _this.lanCatalogo, _this.birth, _this.gendername, _this.mail);
      // this.iamlookings = <Catalog[]> await this.userService.getCatalogo(constants.catalogs.IamLooking.toString(), this.lanCatalogo);
    })();
  }
  next(op) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.iamForm.invalid) {
        _this2.uiService.alertOK(_this2.translate.instant('I-AM.allfieldreq'));
        return;
      }
      console.log('IAM-A', _this2.iam_a.value);
      console.log('IAM-LOOKING', _this2.iam_looking.value);
      if (!_this2.iam_a.value) {
        _this2.uiService.alertOK(_this2.translate.instant('I-AM.msgErrIAM'));
        return;
      }
      if (!_this2.iam_looking.value) {
        _this2.uiService.alertOK(_this2.translate.instant('I-AM.msgErrIAMLookingFor'));
        return;
      }
      if (op == 'next') {
        // Check if this is an OAuth user (stored provider info)
        const oauthProvider = _this2.userService.getOAuthProvider();
        const isOAuthUser = oauthProvider === 'google' || oauthProvider === 'apple';
        // Get the complete user data
        let completeUserData;
        if (isOAuthUser) {
          // Merge OAuth data with collected profile data
          const oauthData = _this2.userService.getOAuthUserData();
          const collectedData = _this2.userService.getUserr();
          // Validate that we have the required OAuth data
          if (!oauthData.email || !oauthData.password || !oauthData.firstName || !oauthData.lastName) {
            console.error('Incomplete OAuth data:', oauthData);
            _this2.uiService.alertOK(_this2.translate.instant('I-AM.oauthDataError') || 'OAuth registration data is incomplete. Please try again.');
            _this2.router.navigate(['/registry']);
            return;
          }
          completeUserData = {
            ...oauthData,
            // Base OAuth data (email, password, firstName, lastName, image)
            ...collectedData,
            // Collected profile data (location, preferences, etc.)
            profileIam: _this2.selectedIamName,
            profileLookingFor: _this2.selectedIamllookingName
          };
          console.log('Complete OAuth user data:', completeUserData);
        } else {
          // Regular email registration
          completeUserData = {
            ..._this2.userService.getUserr(),
            profileIam: _this2.selectedIamName,
            profileLookingFor: _this2.selectedIamllookingName
          };
        }
        _this2.useremail = completeUserData.email;
        _this2.pass = completeUserData.password;
        let res;
        if (isOAuthUser) {
          console.log('Using OAuth registration for user:', completeUserData.email, 'Provider:', oauthProvider);
          res = yield _this2.userService.registerOAuth(completeUserData);
        } else {
          res = yield _this2.userService.register(completeUserData);
        }
        console.log(res);
        if (res['sCode'] == '1') {
          _this2.tokensaved = res['sData']['token'];
          yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
            key: 'token',
            value: _this2.tokensaved
          });
          // Retrieve the saved image (await is crucial here!)
          const {
            value
          } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.get({
            key: 'dp'
          });
          // Optional: check if value exists
          if (value) {
            // Compress base64 image before pushing
            const compressed = yield src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__.UtilitiesService.compressBase64Image(value, 800, 800, 0.7);
            _this2.arr.push({
              multimediaName: "Profile.png",
              multimediaBase64: compressed,
              avatar: true // or false depending on your use-case
            });
          }
          // Wait until all files are processed
          if (_this2.arr.length > 0) {
            let resp = yield _this2.matchService.uploadIMG2(_this2.arr);
            if (resp) {
              console.log(resp);
              const valido = yield _this2.userService.login(_this2.useremail, _this2.pass);
              if (valido['ok']) {
                //this.navCtrl.navigateRoot( '/main/tabs/discover', { animated: true } );
                const provider = isOAuthUser ? oauthProvider : 'email';
                _this2.userService.setUserRS(_this2.useremail, _this2.pass, provider);
                // Clear OAuth data after successful registration
                if (isOAuthUser) {
                  _this2.userService.clearOAuthUserData();
                }
                //  this.router.navigate(['/main/tabs/discover']);
                _this2.router.navigate(['/notification-prompt']);
                // this.uiService.alertOK(this.translate.instant('LOCATION.SuccessMsg2'));
              }
            } else {
              _this2.uiService.alertOK(_this2.translate.instant('ACCOUNT.imageError'));
              // this.router.navigate(['/main/tabs/discover']);
              _this2.router.navigate(['/notification-prompt']);
            }
          }
        } else {
          // this.uiService.alertOK(this.translate.instant('ABOUT-ME.ErrorMsg2'));
          _this2.router.navigate(['/registry']);
        }
      }
    })();
  }
  seleccionarIam() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedId = _this3.iamForm.get('iam_a')?.value;
      const selectedObj = _this3.iams.find(obj => obj.id === selectedId);
      _this3.selectedIamName = selectedObj?.name || '';
      console.log('Selected Name:', _this3.selectedIamName);
      _this3.iamlookings = [];
      _this3.iam_looking.setValue('');
      _this3.iam_looking.enable();
      console.log(_this3.iam_a.value);
      _this3.iamlookings = yield _this3.userService.getCatalogoImLookingFor(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.IamLooking.toString(), _this3.lanCatalogo, _this3.iam_a.value, _this3.email);
    })();
  }
  seleccionarIamlooking() {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedId = _this4.iamForm.get('iam_looking')?.value;
      const selectedObj = _this4.iamlookings.find(obj => obj.id === selectedId);
      _this4.selectedIamllookingName = selectedObj?.name || '';
      console.log('Selected Name:', _this4.selectedIamllookingName);
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_5__.UiService
    }, {
      type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_8__.MatchService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
    }];
  }
};
IAmALookingForPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-i-am-alooking-for',
  template: _i_am_alooking_for_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_i_am_alooking_for_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], IAmALookingForPage);


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

/***/ 85524:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/auth/i-am-alooking-for/i-am-alooking-for.page.scss?ngResource ***!
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

.skip-Bt {
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
}

.text-h1 {
  font-family: "Sk-Modernist-Bold";
  font-size: 36px;
  margin-top: -10px;
  margin-bottom: 0px;
}

ion-item {
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
  margin-top: 30px;
  margin-bottom: 70px;
}

ion-select {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  --padding-end: 0px;
}

ion-select::part(icon) {
  display: none !important;
}

.next-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
  width: 100%;
  height: 40px;
  --border-radius: 10px;
  --box-shadow:none;
  margin-top: 200px;
}

.select-disabled {
  cursor: no-drop !important;
  opacity: 0.5;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/auth/i-am-alooking-for/i-am-alooking-for.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/auth/i-am-alooking-for/i-am-alooking-for.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,oBAAA;ACCJ;;ADGA;EACI,gCAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;ACAJ;;ADGA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,qBAAA;EACA,sCAAA;EAEA,qBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EACA,gBAAA;EACA,mBAAA;ACDJ;;ADIA;EACI,mCAAA;EACA,eAAA;EACA,kBAAA;ACDJ;;ADIA;EACI,wBAAA;ACDJ;;ADIA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;ACDJ;;ADIA;EACI,0BAAA;EACA,YAAA;ACDJ","sourcesContent":["ion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n}\n\n.skip-Bt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    //margin-top: 160px;\n}\n\n.text-h1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 36px;\n    margin-top: -10px;\n    margin-bottom: 0px;\n}\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --border-radius: 15px;\n    --border-color: var(--ion-color-negro);\n    //--padding-bottom: 0px; \n    --padding-start: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    margin-top: 30px;\n    margin-bottom: 70px;\n}\n\nion-select {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    --padding-end: 0px;\n}\n\nion-select::part(icon) {\n    display: none !important;\n}\n\n.next-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 40px;\n    --border-radius: 10px;\n    --box-shadow:none;\n    margin-top: 200px;\n}\n\n.select-disabled {\n    cursor: no-drop !important;\n    opacity: 0.5;\n}","ion-back-button {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 20px;\n}\n\n.skip-Bt {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n}\n\n.text-h1 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 36px;\n  margin-top: -10px;\n  margin-bottom: 0px;\n}\n\nion-item {\n  --background: var(--ion-color-blanco);\n  --color: var(--ion-color-negro);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --border-radius: 15px;\n  --border-color: var(--ion-color-negro);\n  --padding-start: 15px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n  margin-top: 30px;\n  margin-bottom: 70px;\n}\n\nion-select {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n  --padding-end: 0px;\n}\n\nion-select::part(icon) {\n  display: none !important;\n}\n\n.next-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 40px;\n  --border-radius: 10px;\n  --box-shadow:none;\n  margin-top: 200px;\n}\n\n.select-disabled {\n  cursor: no-drop !important;\n  opacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30748:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/auth/i-am-alooking-for/i-am-alooking-for.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"profile-details\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button class=\"skip-Bt\" (click)=\"next('skip')\" defaultHref=\"profile-details\">{{ 'I-AM.AboutTxt' | translate }}</ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <form [formGroup]=\"iamForm\" (ngSubmit)=\"next('next')\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"text-h1\">{{ 'I-AM.Title1' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-item lines=\"none\" detail>\n        <ion-select formControlName=\"iam_a\"  [interfaceOptions]=\"customIamOptions\" interface=\"action-sheet\" \n          cancelText=\"Cancel\" (ionChange)=\"seleccionarIam()\">\n          <li *ngFor=\"let obj of iams\">\n            <ion-select-option [value]=\"obj.id\">{{ obj.name.slice(1) }}</ion-select-option>\n          </li>\n        </ion-select>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <h1 class=\"text-h1\">{{ 'I-AM.Title2' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-item lines=\"none\" detail>\n        <ion-select formControlName=\"iam_looking\" (ionChange)=\"seleccionarIamlooking()\" [interfaceOptions]=\"customIamLookingOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n          <li *ngFor=\"let obj of iamlookings\">\n            <ion-select-option [value]=\"obj.id\">{{ obj.name.slice(1) }}</ion-select-option>\n          </li>\n        </ion-select>\n      </ion-item>\n\n      <ion-row>\n        <ion-button class=\"next-Bt\" color=\"primary1\" type=\"submit\">\n          {{ 'I-AM.btnNext' | translate }}\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_i-am-alooking-for_i-am-alooking-for_module_ts.js.map