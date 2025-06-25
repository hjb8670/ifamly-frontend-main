(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_edit-account_edit-account_module_ts"],{

/***/ 47548:
/*!***************************************************************************!*\
  !*** ./src/app/pages/account/edit-account/edit-account-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditAccountPageRoutingModule: () => (/* binding */ EditAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-account.page */ 12620);




const routes = [{
  path: '',
  component: _edit_account_page__WEBPACK_IMPORTED_MODULE_0__.EditAccountPage
}];
let EditAccountPageRoutingModule = class EditAccountPageRoutingModule {};
EditAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EditAccountPageRoutingModule);


/***/ }),

/***/ 54292:
/*!*******************************************************************!*\
  !*** ./src/app/pages/account/edit-account/edit-account.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditAccountPageModule: () => (/* binding */ EditAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-account-routing.module */ 47548);
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account.page */ 12620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let EditAccountPageModule = class EditAccountPageModule {};
EditAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditAccountPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_edit_account_page__WEBPACK_IMPORTED_MODULE_1__.EditAccountPage]
})], EditAccountPageModule);


/***/ }),

/***/ 12620:
/*!*****************************************************************!*\
  !*** ./src/app/pages/account/edit-account/edit-account.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditAccountPage: () => (/* binding */ EditAccountPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _edit_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account.page.html?ngResource */ 24452);
/* harmony import */ var _edit_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-account.page.scss?ngResource */ 20716);
/* harmony import */ var _edit_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_edit_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ 90628);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);











let EditAccountPage = class EditAccountPage {
  constructor(formBuilder, activatedRoute, router, userService, translate, uiService) {
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.userService = userService;
    this.translate = translate;
    this.uiService = uiService;
    this.txtBirthDay = '';
    this.lanCatalogo = 'EN';
    this.imgsSelected = [];
    this.newLocation = null;
    this.editAccountForm = this.formBuilder.group({
      locGPSToggle: false,
      location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      fname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      lname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      gender_S: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      bday: ['', [/*Validators.required */]],
      bio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      iam_a: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      iam_looking: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      school: '',
      yearSchool: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(2101)]],
      workTitle: '',
      workCo: '',
      hometown: '',
      ethnicity: '',
      country: '',
      state: '',
      city: ''
    });
    this.customIamOptions = {
      header: this.translate.instant('EDIT-ACCOUNT.Title_iam'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
      translucent: true
    };
    this.customiam_lookingOptions = {
      header: this.translate.instant('EDIT-ACCOUNT.Title_iam_a_looking_for'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
      translucent: true
    };
    this.customCountryOptions = {
      header: this.translate.instant('EDIT-ACCOUNT.country'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
      translucent: true
    };
    this.customStateOptions = {
      header: this.translate.instant('EDIT-ACCOUNT.state'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
      translucent: true
    };
    this.customCityOptions = {
      header: this.translate.instant('EDIT-ACCOUNT.city'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
      translucent: true
    };
    this.validation_messages = {
      'location': [{
        type: 'required',
        message: 'msgErrReqLocation'
      }],
      'fname': [{
        type: 'required',
        message: 'msgErrReqFName'
      }],
      //'lname': [ { type: 'required', message: 'msgErrReqLName'} ],
      'bday': [{
        type: 'required',
        message: 'msgErrReqBirthday'
      }],
      'bio': [{
        type: 'required',
        message: 'msgErrReqBio'
      }],
      'iam_a': [{
        type: 'required',
        message: 'msgErrReqIam'
      }],
      'iam_looking': [{
        type: 'required',
        message: 'msgErrReqIamlooking'
      }],
      'schollYear': [{
        type: 'min',
        message: 'msgValidYear'
      }, {
        type: 'max',
        message: 'msgValidYear'
      }]
    };
    this.activatedRoute.queryParams.subscribe(params => {
      this.principal();
    });
  }
  principal() {
    var _this = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.uiService.showLoader();
      _this.usrApp = yield _this.userService.getUserBasic('');
      _this.user = _this.usrApp;
      console.log('USR-APP: ', _this.usrApp);
      _this.email = _this.usrApp.email;
      _this.userService.getCatalogo2(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Gender.toString(), _this.lanCatalogo, _this.user.birthDay, _this.user.gender, _this.user.email).then(value => {
        _this.genders = value;
      });
      _this.countries = yield _this.userService.getCountries();
      _this.fillForm();
      _this.uiService.hideLoader();
    })();
  }
  get locGPSToggle() {
    return this.editAccountForm.get('locGPSToggle');
  }
  get location() {
    return this.editAccountForm.get('location');
  }
  get fname() {
    return this.editAccountForm.get('fname');
  }
  get lname() {
    return this.editAccountForm.get('lname');
  }
  get bday() {
    return this.editAccountForm.get('bday');
  }
  get iam_a() {
    return this.editAccountForm.get('iam_a');
  }
  get iam_looking() {
    return this.editAccountForm.get('iam_looking');
  }
  get bio() {
    return this.editAccountForm.get('bio');
  }
  get school() {
    return this.editAccountForm.get('school');
  }
  get gender_S() {
    return this.editAccountForm.get('gender_S');
  }
  get yearSchool() {
    return this.editAccountForm.get('yearSchool');
  }
  get workTitle() {
    return this.editAccountForm.get('workTitle');
  }
  get workCo() {
    return this.editAccountForm.get('workCo');
  }
  get country() {
    return this.editAccountForm.get('country');
  }
  get state() {
    return this.editAccountForm.get('state');
  }
  get city() {
    return this.editAccountForm.get('city');
  }
  get hometown() {
    return this.editAccountForm.get('hometown');
  }
  get ethnicity() {
    return this.editAccountForm.get('ethnicity');
  }
  ngOnInit() {}
  ionViewDidEnter() {
    var _this2 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.translate.currentLang == 'es') {
        _this2.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.es;
      } else {
        _this2.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.en;
      }
    })();
  }
  fillForm() {
    var _this3 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.iams = yield _this3.userService.getCatalogo3(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.IamA.toString(), _this3.lanCatalogo, _this3.usrApp.birthDay, _this3.user.gender, _this3.usrApp.email);
      setTimeout(() => {
        _this3.editAccountForm.get('iam_a')?.valueChanges.subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (selectedValue) {
            console.log('iam_a selected:', selectedValue);
            if (!selectedValue) return; // ⛔ Guard clause
            _this3.iam_looking.setValue(_this3.usrApp.iam_looking_4_id);
            _this3.iamlookings = yield _this3.userService.getCatalogoImLookingFor2(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.IamLooking.toString(), _this3.lanCatalogo, selectedValue, _this3.email);
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        _this3.iam_looking.setValue(_this3.usrApp.iam_looking_4_id);
      });
      // this.iam_looking.setValue(this.iamlookings);
      _this3.location.setValue(`${_this3.usrApp.location.city}, ${_this3.usrApp.location.state}, ${_this3.usrApp.location.country}`);
      _this3.fname.setValue(_this3.usrApp.firstName);
      _this3.lname.setValue(_this3.usrApp.lastName);
      _this3.setBirthdayVal(_this3.usrApp.birthDay);
      _this3.bday.setValue(_this3.usrApp.birthDay);
      _this3.bio.setValue(_this3.usrApp.aboutMe);
      _this3.school.setValue(_this3.usrApp.educationName);
      _this3.yearSchool.setValue(_this3.usrApp.educationYear);
      _this3.workTitle.setValue(_this3.usrApp.title);
      _this3.workCo.setValue(_this3.usrApp.company);
      _this3.hometown.setValue(_this3.usrApp.dondeSoy);
      _this3.ethnicity.setValue(_this3.usrApp.queSoy);
      const iam_a_val = yield _this3.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.IamA);
      _this3.iam_a.setValue(iam_a_val);
      _this3.iam_a.setValue(_this3.usrApp.iam_a_id);
    })();
  }
  save() {
    var _this4 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.iam_a.invalid || !_this4.iam_a.value || _this4.iam_looking.invalid || !_this4.iam_looking.value) {
        _this4.uiService.alertOK(_this4.translate.instant('ABOUT-ME.missingfiled'));
        _this4.iam_a.markAsTouched();
        _this4.iam_looking.markAsTouched();
        return;
      } else {
        _this4.uiService.showLoader();
        let usr = {
          //usr.location = this.location.value,//Dato especial necesitamos cambiarlo.
          firstName: _this4.fname.value === undefined ? null : _this4.fname.value,
          lastName: _this4.lname.value === undefined ? null : _this4.lname.value,
          aboutMe: _this4.bio.value === undefined ? null : _this4.bio.value,
          educationName: _this4.school.value === undefined ? null : _this4.school.value,
          educationYear: _this4.yearSchool.value === undefined ? null : _this4.yearSchool.value,
          title: _this4.workTitle.value === undefined ? null : _this4.workTitle.value,
          company: _this4.workCo.value === undefined ? null : _this4.workCo.value,
          dondeSoy: _this4.hometown.value === undefined ? null : _this4.hometown.value,
          queSoy: _this4.ethnicity.value === undefined ? null : _this4.ethnicity.value,
          location: _this4.newLocation,
          iam_a: _this4.iam_a.value,
          gender: _this4.gender_S.value
        };
        console.log('i am', _this4.iam_a);
        let res1 = yield _this4.userService.setCatalogo(_this4.iam_a.value);
        let res0 = yield _this4.userService.update(usr);
        // debugger;
        // let res2 = <boolean> await this.userService.setCatalogo(this.iam_looking.value);
        _this4.uiService.hideLoader();
        if (!res0 && !res1) {
          // this.uiService.alertOK(this.translate.instant('EDIT-ACCOUNT.ErrorMsg'));
          _this4.router.navigate(['main/tabs/account']);
          return;
        }
        _this4.router.navigate(['main/tabs/account']);
      }
    })();
  }
  setPhotoPrfile() {
    let navegationExtras = {
      state: {
        usrApp: this.usrApp
      }
    };
    this.router.navigate(['photos-view'], navegationExtras);
  }
  setBirthday() {
    this.setBirthdayVal(this.bday.value);
  }
  setBirthdayVal(dateB) {
    console.log('FECHA: ', dateB);
    const fec = new Date(dateB);
    const day = ('00' + fec.getDate()).slice(-2);
    const t_month = fec.getMonth() + 1;
    const month = ('00' + t_month).slice(-2);
    const year = fec.getFullYear();
    //this.birthday = year+'-'+month+'-'+day; // 2022-05-27
    if (this.translate.instant('PROF-DETAIL.lanCal') == 'es-MX') {
      this.txtBirthDay = day + '.' + month + '.' + year; //'01.20.75';
    } else {
      this.txtBirthDay = month + '.' + day + '.' + year;
    }
    //this.modalCal.dismiss();
  }
  aboutMe() {
    console.log('ABOUT ME');
    let navegationExtras = {
      state: {
        usrApp: this.usrApp,
        banEdit: true
      }
    };
    this.router.navigate(['about-me'], navegationExtras);
  }
  validaCampo(campo, message) {
    for (let validation of message) {
      if (campo.hasError(validation.type)) {
        this.uiService.alertOK(this.translate.instant('PROF-DETAIL.' + validation.message));
        return true;
      }
    }
    return false;
  }
  locationChange() {
    console.log(this.country.value);
    console.log(this.state.value);
    console.log(this.city.value);
    if (this.city.value === '' || this.state.value === '' || this.country.value === null) {
      this.uiService.alertOK(this.translate.instant('EDIT-ACCOUNT.errorNotCSC'));
      return;
    }
    let countryS = this.countries.filter(c => c['id'] === Number(this.country.value));
    let stateS = this.states.filter(t => t['id'] === Number(this.state.value));
    let cityS = this.cities.filter(c => c['id'] === Number(this.city.value));
    if (countryS.length === 0 || stateS.length === 0 || cityS.length === 0) {
      this.uiService.alertOK(this.translate.instant('EDIT-ACCOUNT.errorCSC'));
      return;
    }
    this.location.setValue(countryS[0]['country'] + ", " + stateS[0]['state'] + ", " + cityS[0]['city']);
    this.newLocation = {
      country: countryS[0]['country'],
      state: stateS[0]['state'],
      city: cityS[0]['city'],
      latitud: '19.2824',
      //Definidas por defecto en lo que se da solución al mismo
      longitud: '-99.6569',
      address: ''
    };
    this.modalLoc.dismiss();
  }
  selectCountry() {
    var _this5 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.uiService.showLoader();
      _this5.state.setValue('');
      _this5.city.setValue('');
      _this5.cities = [];
      _this5.states = [];
      _this5.states = yield _this5.userService.getStates(_this5.country.value);
      _this5.uiService.hideLoader();
    })();
  }
  selectState() {
    var _this6 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.uiService.showLoader();
      _this6.cities = [];
      _this6.city.setValue('');
      _this6.cities = yield _this6.userService.getCities(_this6.country.value, _this6.state.value);
      console.log(_this6.cities);
      _this6.uiService.hideLoader();
    })();
  }
  selectlooking() {
    var _this7 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.iamlookings = [];
      _this7.iam_looking.setValue('');
      _this7.iam_looking.enable();
      console.log(_this7.iam_a.value);
      _this7.iamlookings = yield _this7.userService.getCatalogoImLookingFor(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.IamLooking.toString(), _this7.lanCatalogo, _this7.iam_a.value, '');
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
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__.UiService
    }];
  }
  static {
    this.propDecorators = {
      modalLoc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
        args: ['modalLoc']
      }]
    };
  }
};
EditAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-edit-account',
  template: _edit_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_edit_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EditAccountPage);


/***/ }),

/***/ 20716:
/*!******************************************************************************!*\
  !*** ./src/app/pages/account/edit-account/edit-account.page.scss?ngResource ***!
  \******************************************************************************/
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
}

.save-Bt {
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
  color: var(--ion-color-primary1);
  text-transform: none;
}

.txtTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-bottom: 0;
}

ion-item {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  --detail-icon-color: var(--ion-color-primary1);
}

.detailText {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  --color: var(--ion-color-gris1);
  margin-right: 0px;
}

.item-field {
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
.item-field.item-shape-round {
  border-style: solid !important;
  border-width: 1px !important;
  border-radius: 15px !important;
}

.item-field::part(native) {
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
  margin-top: 5px;
}

.toggleChk {
  display: flex;
  --background: var(--ion-color-gris1);
  --background-checked: var(--ion-color-primary1);
  --handle-background: var(--ion-color-blanco);
  --handle-background-checked: var(--ion-color-blanco);
  --handle-spacing: 2px;
  --handle-height: 25px;
  --handle-width: 25px;
  width: 50px;
  height: 30px;
  padding: 0px;
  padding-right: 5px;
  border: 0.6px solid var(--ion-color-blanco);
  border-radius: 18px;
}

.cal-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 13px;
  text-transform: none;
  width: 100%;
  height: 60px;
  --border-radius: 10px;
  --box-shadow:none;
}

.img-cal {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.date-cal {
  margin-left: auto;
  margin-right: 0;
}

.modal-cal {
  --width: 400px;
}

.content-cal .scroll-content {
  display: flex !important;
  align-items: center !important;
}

ion-datetime {
  --background: var(--ion-color-blanco);
  font-family: "Sk-Modernist-Bold";
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.title-cal {
  display: block;
  text-align: center;
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
  color: var(--ion-color-negro);
}

.calInter-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
  width: 100%;
  height: 60px;
  --border-radius: 10px;
  --box-shadow:none;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
}

.ion-item-long {
  --background: var(--ion-color-blanco);
  --color: var(--ion-color-negro);
  --color-focused: var(--ion-color-negro);
  --border-width: 1px !important;
  --padding-top: 3px;
  margin-top: 15px;
  --highlight-color-invalid: none;
  --highlight-color-valid: none;
  --highlight-color-focused: none !important;
  height: 170px;
}
.ion-item-long.item-shape-round {
  border-style: solid !important;
  border-width: 1px !important;
  border-radius: 10px !important;
}

.ion-item-long::part(native) {
  border: none;
}

.item-highlight {
  border-width: 0px !important;
}

.ion-item-select {
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
  /* margin-top: 30px;
  margin-bottom: 70px; */
}

ion-select {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  --padding-end: 0px;
}

ion-select::part(icon) {
  display: none !important;
}

.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),
.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h {
  opacity: 1 !important;
}

.contenedorLoc {
  margin-left: 20px !important;
  margin-right: 20px !important;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/account/edit-account/edit-account.page.scss"],"names":[],"mappings":"AAAA;EACI,yCAAA;EACA,oBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,gCAAA;EACA,oBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;EACA,8CAAA;AACJ;;AAEA;EACI,mCAAA;EACA,eAAA;EACA,+BAAA;EACA,iBAAA;AACJ;;AAEA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;AACJ;AACI;EACI,8BAAA;EACA,4BAAA;EACA,8BAAA;AACR;;AAIA;EACI,YAAA;AADJ;;AAIA;EACI,4BAAA;AADJ;;AAIA;EACI,mCAAA;EACA,eAAA;AADJ;AAGI;EACI,mCAAA;EACA,eAAA;EACA,wCAAA;EACA,sCAAA;EAAA,iCAAA;EACA,gBAAA;AADR;;AAKA;EACI,mCAAA;EACA,eAAA;EACA,eAAA;AAFJ;;AAKA;EACI,aAAA;EACA,oCAAA;EACA,+CAAA;EACA,4CAAA;EACA,oDAAA;EACA,qBAAA;EACA,qBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,2CAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;AAFJ;;AAKA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAFJ;;AAKA;EACI,iBAAA;EACA,eAAA;AAFJ;;AAKA;EACI,cAAA;AAFJ;;AAMI;EACI,wBAAA;EACA,8BAAA;AAHR;;AAOA;EACI,qCAAA;EACA,gCAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAJJ;;AAOA;EACI,cAAA;EACA,kBAAA;EACA,gCAAA;EACA,eAAA;EACA,6BAAA;AAJJ;;AAOA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EAEA,gBAAA;EACA,kBAAA;EACA,mBAAA;AALJ;;AAQA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,kBAAA;EACA,gBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EACA,aAAA;AALJ;AAOI;EACI,8BAAA;EACA,4BAAA;EACA,8BAAA;AALR;;AASA;EACI,YAAA;AANJ;;AASA;EACI,4BAAA;AANJ;;AASA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,qBAAA;EACA,sCAAA;EAEA,qBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EACA;wBAAA;AANJ;;AAUA;EACI,mCAAA;EACA,eAAA;EACA,kBAAA;AAPJ;;AAUA;EACI,wBAAA;AAPJ;;AAUA;;EAEI,qBAAA;AAPJ;;AAUA;EACI,4BAAA;EACA,6BAAA;AAPJ","sourcesContent":["ion-header {\n    background-color: var(--ion-color-blanco);\n    margin-bottom: -30px;\n}\n\n.title_txt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n}\n\n.save-Bt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-primary1);\n    text-transform: none;\n}\n\n.txtTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-bottom: 0;\n}\n\nion-item {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    --detail-icon-color: var(--ion-color-primary1);\n}\n\n.detailText {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    --color: var(--ion-color-gris1);\n    margin-right: 0px;\n}\n\n.item-field {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --padding-top: 3px; \n    --padding-start: 0px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n\n    &.item-shape-round {\n        border-style: solid !important;\n        border-width: 1px !important;\n        border-radius: 15px !important; \n    }\n\n}\n\n.item-field::part(native) {\n    border: none;\n}\n\n.item-highlight {\n    border-width: 0px !important;\n}\n\n.camposLabel-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    \n    &.label-floating {\n        font-family: 'Sk-Modernist-Regular';\n        font-size: 17px;\n        color: var(--ion-color-negro) !important;\n        max-width: fit-content !important;\n        margin-top: -6px;\n    }\n}\n\n.input-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 19px;\n    margin-top: 5px;\n}\n\n.toggleChk {\n    display: flex;\n    --background: var(--ion-color-gris1);\n    --background-checked: var(--ion-color-primary1);\n    --handle-background: var(--ion-color-blanco);\n    --handle-background-checked: var(--ion-color-blanco);\n    --handle-spacing: 2px;\n    --handle-height: 25px;\n    --handle-width: 25px;\n    width: 50px;\n    height: 30px;\n    padding: 0px;\n    padding-right: 5px;\n    border: 0.6px solid var(--ion-color-blanco);\n    border-radius: 18px;\n}\n\n.cal-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 13px;\n    text-transform: none;\n    width: 100%;\n    height: 60px;\n    --border-radius: 10px;\n    --box-shadow:none;\n}\n\n.img-cal {\n    width: 25px;\n    height: 25px;\n    margin-right: 10px;\n}\n\n.date-cal {\n    margin-left: auto;\n    margin-right: 0;\n}\n\n.modal-cal {\n    --width: 400px;\n}\n\n.content-cal {\n    .scroll-content {\n        display: flex !important;\n        align-items: center !important;\n    }\n}\n\nion-datetime {\n    --background: var(--ion-color-blanco);\n    font-family: 'Sk-Modernist-Bold';\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n}\n\n.title-cal {\n    display: block;\n    text-align: center;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-negro);\n}\n\n.calInter-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 60px;\n    --border-radius: 10px;\n    --box-shadow:none;\n\n    margin-top: 10px;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.ion-item-long {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --padding-top: 3px;\n    margin-top: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    height: 170px;\n\n    &.item-shape-round {\n        border-style: solid !important;\n        border-width: 1px !important;\n        border-radius: 10px !important; \n    }\n}\n\n.ion-item-long::part(native) {\n    border: none;\n}\n\n.item-highlight {\n    border-width: 0px !important;\n}\n\n.ion-item-select {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --border-radius: 15px;\n    --border-color: var(--ion-color-negro);\n    //--padding-bottom: 0px; \n    --padding-start: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    /* margin-top: 30px;\n    margin-bottom: 70px; */\n}\n\nion-select {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    --padding-end: 0px;\n}\n\nion-select::part(icon) {\n    display: none !important;\n}\n\n.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),\n    .item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{\n    opacity: 1 !important;\n}\n\n.contenedorLoc{\n    margin-left: 20px !important;\n    margin-right: 20px !important;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 24452:
/*!******************************************************************************!*\
  !*** ./src/app/pages/account/edit-account/edit-account.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"chevron-back-outline\"  (click)=\"save()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title_txt\" mode=\"ios\">{{ 'EDIT-ACCOUNT.TitleTxt' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button class=\"save-Bt\" (click)=\"save()\">{{ 'EDIT-ACCOUNT.SaveTxt' | translate }}</ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <form [formGroup]=\"editAccountForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.TitlePhoto' | translate }}</p>\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\" detail (click)=\"setPhotoPrfile()\">\n        <ion-label text-wrap>{{ 'EDIT-ACCOUNT.PhotoText' | translate }}</ion-label>\n        <ion-label class=\"detailText\" slot=\"end\" text-wrap>{{ 'EDIT-ACCOUNT.ChangeText' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.TitleLocation' | translate }}</p>\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-label class=\"label\">{{ 'EDIT-ACCOUNT.LabelLocGPS' | translate }}</ion-label>\n        <ion-toggle class=\"toggleChk\" formControlName=\"locGPSToggle\"></ion-toggle>\n      </ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'EDIT-ACCOUNT.LocationField' | translate }}</ion-label> \n            <ion-input id=\"loc-trigger\" class=\"input-CItem\" [value]=\"location.value\" type=\"text\" inputmode=\"text\" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-modal #modalLoc class=\"modal-loc\" [initialBreakpoint]=\"0.6\" [breakpoints]=\"[0.6, 0.6, 0.75]\" trigger=\"loc-trigger\">\n        <ng-template>\n          <ion-content class=\"content-cal\">\n            <ion-row class=\"contenedorLoc\">\n              <ion-col>\n                <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.country' | translate }}</p>\n              </ion-col>\n            </ion-row>\n            <ion-item class=\"ion-item-select contenedorLoc\" lines=\"none\" detail>\n              <ion-select formControlName=\"country\" [interfaceOptions]=\"customCountryOptions\" interface=\"action-sheet\" cancelText=\"Cancel\" (ionChange)=\"selectCountry()\">\n                <li *ngFor=\"let obj of countries\">\n                  <ion-select-option [value]=\"obj.id\">{{ obj.country }}</ion-select-option>\n                </li>\n              </ion-select>\n            </ion-item>\n            <ion-row class=\"contenedorLoc\">\n              <ion-col>\n                <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.state' | translate }}</p>\n              </ion-col>\n            </ion-row>\n            <ion-item class=\"ion-item-select contenedorLoc\" lines=\"none\" detail>\n              <ion-select formControlName=\"state\" [interfaceOptions]=\"customStateOptions\" interface=\"action-sheet\" cancelText=\"Cancel\" (ionChange)=\"selectState()\">\n                <li *ngFor=\"let obj of states\">\n                  <ion-select-option [value]=\"obj.id\">{{ obj.state }}</ion-select-option>\n                </li>\n              </ion-select>\n            </ion-item>\n            <ion-row class=\"contenedorLoc\">\n              <ion-col>\n                <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.city' | translate }}</p>\n              </ion-col>\n            </ion-row>\n            <ion-item class=\"ion-item-select contenedorLoc\" lines=\"none\" detail>\n              <ion-select formControlName=\"city\" [interfaceOptions]=\"customCityOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                <li *ngFor=\"let obj of cities\">\n                  <ion-select-option [value]=\"obj.id\">{{ obj.city }}</ion-select-option>\n                </li>\n              </ion-select>\n            </ion-item>\n            <ion-button class=\"calInter-Bt\" color=\"blanco\"  color=\"primary1\" (click)=\"locationChange()\">{{ 'EDIT-ACCOUNT.btnSave' | translate }}</ion-button>\n          </ion-content>\n        </ng-template>\n      </ion-modal>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.TitleProfile' | translate }}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'EDIT-ACCOUNT.FName' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"fname\" type=\"text\" inputmode=\"text\" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'EDIT-ACCOUNT.LName' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"lname\" type=\"text\" inputmode=\"text\" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n       <!-- <ion-row>\n        <ion-col>\n          <p class=\"txtTitle\">{{ 'ABOUT-ME.Gender' | translate }}*</p>\n        </ion-col>\n      </ion-row>\n         <ion-item detail class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n               \n              <ion-select formControlName=\"gender_S\" [interfaceOptions]=\"customGenderOptions\" interface=\"action-sheet\"\n                placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n                  <ion-select-option  *ngFor=\"let obj of genders\" [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n              </ion-select>\n            </ion-item> -->\n     \n      <ion-row> \n        <ion-col>\n          <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.Title_iam' | translate }}*</p>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"ion-item-select\" lines=\"none\" detail>\n        <ion-select formControlName=\"iam_a\" [interfaceOptions]=\"customIamOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n          <li *ngFor=\"let obj of iams\">\n            <ion-select-option [value]=\"obj.id\">{{ obj.name.slice(1) }}</ion-select-option>\n          </li>\n        </ion-select>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.Title_iam_a_looking_for' | translate }}*</p>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"ion-item-select\" lines=\"none\" detail>\n        <ion-select formControlName=\"iam_looking\"  [interfaceOptions]=\"customiam_lookingOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n          <li *ngFor=\"let obj of iamlookings\">\n            <ion-select-option [value]=\"obj.id\">{{ obj.name.slice(1) }}</ion-select-option>\n          </li>\n        </ion-select>\n      </ion-item>\n      \n      <!-- <ion-row>\n        <ion-col>\n          <ion-button id=\"cal-trigger\" class=\"cal-Bt\"  color=\"primary1\">\n            <ion-img class=\"img-cal\" slot=\"start\" src=\"../../../../assets/icon/11-Calendar_white.png\"></ion-img>\n            <p class=\"text-cal\">{{ 'EDIT-ACCOUNT.TextCalBtn' | translate }}</p>\n            <p class=\"date-cal\">{{txtBirthDay}}</p>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-modal #modalC class=\"modal-cal\" [initialBreakpoint]=\"0.6\" [breakpoints]=\"[0.6, 0.6, 0.75]\" trigger=\"cal-trigger\">\n        <ng-template>\n          <ion-content class=\"content-cal\">\n            <ion-datetime\n              presentation=\"date\"\n              formControlName=\"bday\"\n              locale=\"{{ 'EDIT-ACCOUNT.lanCal' | translate }}\"\n              color=\"primary1\"\n              mode=\"ios\"\n            >\n              <span class=\"title-cal\" slot=\"title\">{{ 'EDIT-ACCOUNT.TitleCal' | translate }}</span>\n            </ion-datetime>\n            <ion-button class=\"calInter-Bt\" color=\"blanco\"  color=\"primary1\" (click)=\"setBirthday()\">{{ 'EDIT-ACCOUNT.btnSave' | translate }}</ion-button>\n          </ion-content>\n        </ng-template>\n      </ion-modal> -->\n      \n      <ion-row>\n        <ion-col>\n          <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.TitleBio' | translate }}</p>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"ion-item-long\" shape=\"round\" lines=\"none\" mode=\"md\">\n        <ion-textarea class=\"input-CItem\" formControlName=\"bio\" inputmode=\"text\" maxlength=\"500\" rows=\"6\" ></ion-textarea>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.TitleEducation' | translate }}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'EDIT-ACCOUNT.School' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"school\" type=\"text\" inputmode=\"text\" ></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'EDIT-ACCOUNT.YearSchool' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"yearSchool\" type=\"number\" inputmode=\"numeric\" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.TitleWork' | translate }}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'EDIT-ACCOUNT.WorkTitle' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"workTitle\" type=\"text\" inputmode=\"text\" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'EDIT-ACCOUNT.WorkCo' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"workCo\" type=\"text\" inputmode=\"text\" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.TitleMore' | translate }}</p>\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\" detail (click)=\"aboutMe()\">\n        <ion-label text-wrap>{{ 'EDIT-ACCOUNT.AboutMeText' | translate }}</ion-label>\n        <ion-label class=\"detailText\" slot=\"end\" text-wrap>{{ 'EDIT-ACCOUNT.ChangeText' | translate }}</ion-label>\n      </ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'EDIT-ACCOUNT.Hometown' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"hometown\" type=\"text\" inputmode=\"text\" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"item-field\" fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'EDIT-ACCOUNT.Ethnicity' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"ethnicity\" type=\"text\" inputmode=\"text\" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n    </ion-grid>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_edit-account_edit-account_module_ts.js.map