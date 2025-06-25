(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_experience_new-edit-exp_new-edit-exp_module_ts"],{

/***/ 54484:
/*!******************************************************************************!*\
  !*** ./src/app/pages/experience/new-edit-exp/new-edit-exp-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewEditExpPageRoutingModule: () => (/* binding */ NewEditExpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _new_edit_exp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-edit-exp.page */ 75276);




const routes = [{
  path: '',
  component: _new_edit_exp_page__WEBPACK_IMPORTED_MODULE_0__.NewEditExpPage
}];
let NewEditExpPageRoutingModule = class NewEditExpPageRoutingModule {};
NewEditExpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NewEditExpPageRoutingModule);


/***/ }),

/***/ 38288:
/*!**********************************************************************!*\
  !*** ./src/app/pages/experience/new-edit-exp/new-edit-exp.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewEditExpPageModule: () => (/* binding */ NewEditExpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _new_edit_exp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-edit-exp-routing.module */ 54484);
/* harmony import */ var _new_edit_exp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-edit-exp.page */ 75276);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let NewEditExpPageModule = class NewEditExpPageModule {};
NewEditExpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _new_edit_exp_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewEditExpPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_new_edit_exp_page__WEBPACK_IMPORTED_MODULE_1__.NewEditExpPage]
})], NewEditExpPageModule);


/***/ }),

/***/ 75276:
/*!********************************************************************!*\
  !*** ./src/app/pages/experience/new-edit-exp/new-edit-exp.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewEditExpPage: () => (/* binding */ NewEditExpPage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _new_edit_exp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-edit-exp.page.html?ngResource */ 67336);
/* harmony import */ var _new_edit_exp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-edit-exp.page.scss?ngResource */ 11696);
/* harmony import */ var _new_edit_exp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_new_edit_exp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 63924);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 50168);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ 90628);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/experience.service */ 29340);















let NewEditExpPage = class NewEditExpPage {
  constructor(formBuilder, activatedRoute, router, navCtrl, translate, userService, experienceService, uiService, dms) {
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.navCtrl = navCtrl;
    this.translate = translate;
    this.userService = userService;
    this.experienceService = experienceService;
    this.uiService = uiService;
    this.dms = dms;
    this.presentarErroresCampos = false;
    this.lanCatalogo = 'EN';
    this.txtDate = '';
    this.experienceCat = [];
    this.isEdit = false;
    this.catSelected = '0';
    this.isDefault = true;
    this.image = '';
    this.name_img = '';
    this.experienceId = 0;
    this.imgsSelected = [];
    this.newLocation = null;
    this.experienceForm = this.formBuilder.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      dateF: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(999)]],
      location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      nopeople: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(999)]],
      category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      country: '',
      state: '',
      city: ''
    });
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
      'title': [{
        type: 'required',
        message: 'msgErrReqTitle'
      }],
      'description': [{
        type: 'required',
        message: 'msgErrReqDescription'
      }],
      'dateF': [{
        type: 'required',
        message: 'msgErrReqDate'
      }],
      'price': [{
        type: 'required',
        message: 'msgErrReqPrice'
      }, {
        type: 'min',
        message: 'msgErrMinPrice'
      }, {
        type: 'max',
        message: 'msgErrMaxPrice'
      }],
      'location': [{
        type: 'required',
        message: 'msgErrReqLocation'
      }],
      'nopeople': [{
        type: 'required',
        message: 'msgErrReqNoPeople'
      }, {
        type: 'min',
        message: 'msgErrMinNoPeople'
      }, {
        type: 'max',
        message: 'msgErrMaxNoPeople'
      }],
      "category": [{
        type: 'required',
        message: 'msgErrReqCategory'
      }]
    };
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.experience = this.router.getCurrentNavigation().extras.state.experience;
        this.isEdit = this.router.getCurrentNavigation().extras.state.isEdit;
        console.log('EXPERIENCE TO EDIT: ', this.experience);
        console.log('is EDIT: ', this.isEdit);
      }
    });
  }
  ngOnInit() {
    this.dateF.setValue(new Date().toISOString());
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.translate.currentLang == 'es') {
        _this.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.languages.es;
      } else {
        _this.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.languages.en;
      }
      _this.uiService.showLoader();
      _this.countries = yield _this.userService.getCountries();
      _this.experienceCat = yield _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.catalogs.ExperienceCat.toString(), _this.lanCatalogo);
      if (_this.isEdit) {
        _this.setFields();
      }
      _this.uiService.hideLoader();
    })();
  }
  get title() {
    return this.experienceForm.get('title');
  }
  get description() {
    return this.experienceForm.get('description');
  }
  get dateF() {
    return this.experienceForm.get('dateF');
  }
  get price() {
    return this.experienceForm.get('price');
  }
  get location() {
    return this.experienceForm.get('location');
  }
  get nopeople() {
    return this.experienceForm.get('nopeople');
  }
  get category() {
    return this.experienceForm.get('category');
  }
  get country() {
    return this.experienceForm.get('country');
  }
  get state() {
    return this.experienceForm.get('state');
  }
  get city() {
    return this.experienceForm.get('city');
  }
  validaCampo(campo, message) {
    for (let validation of message) {
      if (campo.hasError(validation.type)) {
        console.log(this.translate.instant('NEW-EDIT-EXP.' + validation.message));
        this.uiService.alertOK(this.translate.instant('NEW-EDIT-EXP.' + validation.message));
        return true;
      }
    }
    return false;
  }
  onUploadImg() {
    var _this2 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const imge = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64
      });
      _this2.isDefault = false;
      _this2.name_img = 'exp.' + imge.format;
      _this2.image = imge.base64String;
      _this2.fileExperience = _this2.displayImg(imge.format, imge.base64String);
    })();
  }
  displayImg(format, b64) {
    return this.dms.bypassSecurityTrustUrl("data:image/" + format + ";base64," + b64);
  }
  setDate() {
    if (this.dateF.value == null || this.dateF.value == '') {
      this.txtDate = '';
      this.modalCal.dismiss();
      return;
    }
    this.txtDate = this.converterDatetoString(this.dateF.value);
    this.modalCal.dismiss();
  }
  converterDatetoString(dateT) {
    const fec = new Date(dateT);
    const day = ('00' + fec.getDate()).slice(-2);
    const year = fec.getFullYear();
    const hours = ('00' + fec.getHours()).slice(-2);
    const minutes = ('00' + fec.getMinutes()).slice(-2);
    let t_date;
    if (this.translate.instant('PROF-DETAIL.lanCal') == 'es-MX') {
      t_date = day + ' ' + src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.meses.mesES[fec.getMonth()] + ', ' + year + ' @ ' + hours + ':' + minutes; //'01.20.75';
    } else {
      t_date = day + ' ' + src_environments_constants__WEBPACK_IMPORTED_MODULE_4__.constants.meses.mesEN[fec.getMonth()] + ', ' + year + ' @ ' + hours + ':' + minutes;
    }
    return t_date;
  }
  optionSelected(ev) {
    var _this3 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.category.setValue(ev.detail.value);
    })();
  }
  onSubmit() {
    var _this4 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('SUBMIT');
      if (_this4.validaCampo(_this4.title, _this4.validation_messages.title)) {
        return;
      }
      if (_this4.validaCampo(_this4.description, _this4.validation_messages.description)) {
        return;
      }
      if (_this4.validaCampo(_this4.dateF, _this4.validation_messages.dateF)) {
        return;
      }
      if (_this4.validaCampo(_this4.location, _this4.validation_messages.location)) {
        return;
      }
      if (_this4.validaCampo(_this4.nopeople, _this4.validation_messages.nopeople)) {
        return;
      }
      if (_this4.validaCampo(_this4.category, _this4.validation_messages.category)) {
        return;
      }
      if (_this4.validaCampo(_this4.price, _this4.validation_messages.price)) {
        return;
      }
      _this4.uiService.showLoader();
      let fec_t = new Date(_this4.dateF.value);
      console.log('MES: ', fec_t.getMonth());
      const year = fec_t.getFullYear();
      const mon_inx = fec_t.getMonth() + 1;
      const month = ('00' + mon_inx).slice(-2);
      const day = ('00' + fec_t.getDate()).slice(-2);
      const hours = ('00' + fec_t.getHours()).slice(-2);
      const minutes = ('00' + fec_t.getMinutes()).slice(-2);
      let fec_fin = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':00';
      console.log('DATE: ', fec_fin);
      _this4.experience = {
        title: _this4.title.value,
        description: _this4.description.value,
        dateTime: fec_fin,
        //'2023-03-22T00:00:00',
        location: _this4.newLocation,
        amountPeople: Number(_this4.nopeople.value),
        experienceCategory: {
          id: Number(_this4.category.value)
        },
        vip: false,
        coins: Number(_this4.price.value)
      };
      let res;
      if (_this4.isEdit) {
        _this4.experience["experienceId"] = _this4.experienceId;
        res = yield _this4.experienceService.updateExperience(_this4.experience);
      } else {
        res = yield _this4.experienceService.addExperience(_this4.experience);
      }
      if (_this4.image === '') {
        console.log("No se modifico la imagen");
        _this4.uiService.hideLoader();
        //this.navCtrl.pop();
        _this4.reloadMyExperiences();
        return;
      }
      if (res !== null) {
        res = yield _this4.experienceService.uploadIMG(res["lastId"], _this4.name_img, _this4.image);
        _this4.uiService.hideLoader();
        if (!res) {
          _this4.uiService.alertOK(_this4.translate.instant('NEW-EDIT-EXP.imageError'));
          return;
        }
      } else {
        _this4.uiService.hideLoader();
        _this4.uiService.alertOK(_this4.translate.instant('NEW-EDIT-EXP.createError'));
        return;
      }
      _this4.uiService.hideLoader();
      //this.navCtrl.pop();
      _this4.reloadMyExperiences();
    })();
  }
  reloadMyExperiences() {
    let navegationExtras = {
      state: {
        isMyExp: true
      }
    };
    this.router.navigate(['/main/tabs/my-experience'], navegationExtras);
  }
  setFields() {
    this.experienceId = this.experience.experienceId;
    this.title.setValue(this.experience.title);
    this.description.setValue(this.experience.description);
    this.dateF.setValue(new Date(this.experience.dateTime).toISOString());
    this.txtDate = this.converterDatetoString(this.dateF.value);
    this.location.setValue( /*this.usrApp.location.address+', 'Ahorita no se esta guardando y ver si se quedara o no */this.experience.location.city + ', ' + this.experience.location.state + ', ' + this.experience.location.country);
    this.nopeople.setValue(this.experience.amountPeople.toString());
    this.catSelected = this.experience.experienceCategory.id.toString();
    this.category.setValue(this.experience.experienceCategory.id.toString());
    this.price.setValue(this.experience.coins.toString());
    this.getAvatarImg(this.experience);
  }
  getAvatarImg(experience) {
    var _this5 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.fileExperience = '../../../assets/icon/30-Default_no-image.jpeg';
      const res_imgs = yield _this5.experienceService.getIMGS(experience.experienceId.toString());
      if (res_imgs !== undefined && res_imgs != null) {
        for (const img of res_imgs) {
          if (img.avatar) {
            _this5.fileExperience = img.multimediaUrl;
          }
        }
      }
    })();
  }
  selectCountry() {
    var _this6 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.uiService.showLoader();
      _this6.state.setValue('');
      _this6.city.setValue('');
      _this6.cities = [];
      _this6.states = [];
      _this6.states = yield _this6.userService.getStates(_this6.country.value);
      _this6.uiService.hideLoader();
    })();
  }
  selectState() {
    var _this7 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.uiService.showLoader();
      _this7.cities = [];
      _this7.city.setValue('');
      _this7.cities = yield _this7.userService.getCities(_this7.country.value, _this7.state.value);
      console.log(_this7.cities);
      _this7.uiService.hideLoader();
    })();
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
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
    }, {
      type: _services_experience_service__WEBPACK_IMPORTED_MODULE_7__.ExperienceService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_6__.UiService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
    }];
  }
  static {
    this.propDecorators = {
      modalCal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
        args: ['modalC']
      }],
      modalLoc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
        args: ['modalLoc']
      }]
    };
  }
};
NewEditExpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-new-edit-exp',
  template: _new_edit_exp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_new_edit_exp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NewEditExpPage);


/***/ }),

/***/ 11696:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/experience/new-edit-exp/new-edit-exp.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-header {
  background-color: var(--ion-color-gris2);
  height: 32%;
}

.header-center-heigh {
  text-align: center;
  align-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

ion-back-button {
  font-size: 18px;
  background: var(--ion-color-blanco);
  height: 48px;
  width: 50px;
  color: var(--ion-color-negro);
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  margin-top: 20px;
}

.imgCover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titleCExp1 {
  font-family: "Sk-Modernist-Bold";
  font-size: 22px;
}

.titleCExp2 {
  font-family: "Sk-Modernist-Bold";
  font-size: 22px;
  margin-top: 22px;
}

.boxUpCover {
  background: linear-gradient(to right, white 60%, var(--ion-color-gris2) 0%), linear-gradient(white 60%, var(--ion-color-gris2) 0%), linear-gradient(to right, white 60%, var(--ion-color-gris2) 0%), linear-gradient(white 60%, var(--ion-color-gris2) 0%);
  background-position: top, right, bottom, left;
  background-repeat: repeat-x, repeat-y;
  background-size: 10px 1px, 1px 10px;
  border-radius: 10px;
  height: 45%;
  width: 100%;
  display: flex;
  align-content: center;
  text-align: center;
  margin-top: 12%;
}

.titleUpCover {
  font-family: "Sk-Modernist-Regular";
  font-size: 15px;
}

.imgUpCover {
  width: 35px;
}

.fieldTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin: 0;
}

ion-item {
  --background: var(--ion-color-blanco);
  --color: var(--ion-color-negro);
  --color-focused: var(--ion-color-negro);
  --border-width: 1px !important;
  --padding-top: 3px;
  margin-top: 15px;
  margin-bottom: 15px;
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

.cal-Bt {
  display: block;
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  text-transform: none;
  width: 100%;
  height: 60px;
  --border-style: solid;
  --border-width: 1px;
  --border-radius: 15px;
  --box-shadow:none;
  margin-top: 15px;
  margin-bottom: 15px;
}

.img-cal {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.date-cal {
  margin-left: 0;
  margin-right: auto;
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

.toolbarCategory {
  --background: var(--ion-color-blanco);
  padding: 0;
  margin-top: 10px;
}

ion-segment {
  --background: var(--ion-color-blanco);
}
ion-segment::-webkit-scrollbar {
  display: none;
}

ion-segment-button {
  border-style: solid;
  --color: var(--ion-color-gris1);
  --color-checked: var(--ion-color-blanco) !important;
  --indicator-color: var(--ion-color-primary1);
  --border-radius:20px;
  --border-color: none;
  min-width: auto;
  margin-right: 10px;
}

ion-label {
  font-family: "Sk-Modernist-Bold";
}

.error-message {
  font-family: "Sk-Modernist-Regular";
  font-size: 10px;
  line-height: 0.5;
}

.submit-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
  width: 100%;
  height: 50px;
  --border-radius: 15px;
  --box-shadow:none;
  margin-top: 30px;
  margin-bottom: 20px;
}

.ion-item-select {
  --background: var(--ion-color-blanco) !important;
  --color: var(--ion-color-negro) !important;
  --color-focused: var(--ion-color-negro) !important;
  --border-width: 1px !important;
  --border-radius: 15px !important;
  --border-color: var(--ion-color-negro) !important;
  --padding-start: 15px !important;
  --highlight-color-invalid: none !important;
  --highlight-color-valid: none !important;
  --highlight-color-focused: none !important;
  /* margin-top: 30px;
  margin-bottom: 70px; */
}

ion-select {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  --padding-end: 0px;
}

.txtTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-bottom: 0;
}

ion-select::part(icon) {
  display: none !important;
}

.contenedorLoc {
  margin-left: 20px;
  margin-right: 20px;
}

.content-cal .scroll-content {
  display: flex !important;
  align-items: center !important;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/experience/new-edit-exp/new-edit-exp.page.scss"],"names":[],"mappings":"AAAA;EACI,wCAAA;EAEA,WAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AAAJ;;AAGA;EAMI,eAAA;EACA,mCAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;AALJ;;AAQA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AALJ;;AAaA;EACI,gCAAA;EACA,eAAA;AAVJ;;AAaA;EACI,gCAAA;EACA,eAAA;EACA,gBAAA;AAVJ;;AAaA;EACI,0PAAA;EACA,6CAAA;EACA,qCAAA;EACA,mCAAA;EACA,mBAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;AAVJ;;AAaA;EACI,mCAAA;EACA,eAAA;AAVJ;;AAaA;EACI,WAAA;AAVJ;;AAaA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,SAAA;AAVJ;;AAaA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;AAVJ;AAaI;EACI,8BAAA;EACA,4BAAA;EACA,8BAAA;AAXR;;AAeA;EACI,YAAA;AAZJ;;AAeA;EACI,4BAAA;AAZJ;;AAeA;EACI,mCAAA;EACA,eAAA;AAZJ;AAcI;EACI,mCAAA;EACA,eAAA;EACA,wCAAA;EACA,sCAAA;EAAA,iCAAA;EACA,gBAAA;AAZR;;AAgBA;EACI,mCAAA;EACA,eAAA;AAbJ;;AAiBA;EACI,cAAA;EACA,mCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;AAdJ;;AAiBA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAdJ;;AAiBA;EACI,cAAA;EACA,kBAAA;AAdJ;;AAiBA;EACI,cAAA;AAdJ;;AAkBI;EACI,wBAAA;EACA,8BAAA;AAfR;;AAmBA;EACI,qCAAA;EACA,gCAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAhBJ;;AAmBA;EACI,cAAA;EACA,kBAAA;EACA,gCAAA;EACA,eAAA;EACA,6BAAA;AAhBJ;;AAmBA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EAEA,gBAAA;EACA,kBAAA;EACA,mBAAA;AAjBJ;;AAoBA;EACI,qCAAA;EACA,UAAA;EACA,gBAAA;AAjBJ;;AAoBA;EACI,qCAAA;AAjBJ;AAmBI;EACI,aAAA;AAjBR;;AAqBA;EACI,mBAAA;EACA,+BAAA;EACA,mDAAA;EACA,4CAAA;EACA,oBAAA;EACA,oBAAA;EACA,eAAA;EACA,kBAAA;AAlBJ;;AAqBA;EACI,gCAAA;AAlBJ;;AAsBA;EACI,mCAAA;EACA,eAAA;EACA,gBAAA;AAnBJ;;AAsBA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;AAnBJ;;AAsBA;EACI,gDAAA;EACA,0CAAA;EACA,kDAAA;EACA,8BAAA;EACA,gCAAA;EACA,iDAAA;EAEA,gCAAA;EACA,0CAAA;EACA,wCAAA;EACA,0CAAA;EACA;wBAAA;AAnBJ;;AAuBA;EACI,mCAAA;EACA,eAAA;EACA,kBAAA;AApBJ;;AAuBA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;AApBJ;;AAuBA;EACI,wBAAA;AApBJ;;AAuBA;EACI,iBAAA;EACA,kBAAA;AApBJ;;AAwBI;EACI,wBAAA;EACA,8BAAA;AArBR","sourcesContent":["ion-header {\n    background-color: var(--ion-color-gris2);\n    // height: 40%;\n    height: 32%;\n}\n\n.header-center-heigh{\n    text-align: center;\n    align-content: center;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\nion-back-button {\n    // border-style: solid;\n    // border-width: 1px;\n    // border-radius: 15px;\n    // margin-top: 20px;\n\n    font-size: 18px;\n    background: var(--ion-color-blanco);\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-negro);\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n}\n\n.imgCover {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    //position: fixed;\n    // max-width: 100%;\n    // max-height: 100%;\n    //margin-left: -16px;\n    //margin-top: -29px;\n}\n\n.titleCExp1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 22px;\n}\n\n.titleCExp2 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 22px;\n    margin-top: 22px;\n}\n\n.boxUpCover {\n    background: linear-gradient(to right, white 60%, var(--ion-color-gris2) 0%), linear-gradient(white 60%, var(--ion-color-gris2) 0%), linear-gradient(to right, white 60%, var(--ion-color-gris2) 0%), linear-gradient(white 60%, var(--ion-color-gris2) 0%);\n    background-position: top, right, bottom, left;\n    background-repeat: repeat-x, repeat-y;\n    background-size: 10px 1px, 1px 10px;\n    border-radius: 10px;\n    height: 45%;\n    width: 100%;\n    display: flex;\n    align-content: center;\n    text-align: center;\n    margin-top: 12%;\n}\n\n.titleUpCover {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 15px;\n}\n\n.imgUpCover {\n    width: 35px;\n}\n\n.fieldTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --padding-top: 3px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    //height: 50px;\n\n    &.item-shape-round {\n        border-style: solid !important;\n        border-width: 1px !important;\n        border-radius: 15px !important; \n    }\n}\n\nion-item::part(native) {\n    border: none;\n}\n\n.item-highlight {\n    border-width: 0px !important;\n}\n\n.camposLabel-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    \n    &.label-floating {\n        font-family: 'Sk-Modernist-Regular';\n        font-size: 17px;\n        color: var(--ion-color-negro) !important;\n        max-width: fit-content !important;\n        margin-top: -6px;\n    }\n}\n\n.input-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 19px;\n    //height: 20px !important;\n}\n\n.cal-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    text-transform: none;\n    width: 100%;\n    height: 60px;\n    --border-style: solid;\n    --border-width: 1px;\n    --border-radius: 15px;\n    --box-shadow:none;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n\n.img-cal {\n    width: 25px;\n    height: 25px;\n    margin-right: 10px;\n}\n\n.date-cal {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.modal-cal {\n    --width: 400px;\n}\n\n.content-cal {\n    .scroll-content {\n        display: flex !important;\n        align-items: center !important;\n    }\n}\n\nion-datetime {\n    --background: var(--ion-color-blanco);\n    font-family: 'Sk-Modernist-Bold';\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n}\n\n.title-cal {\n    display: block;\n    text-align: center;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-negro);\n}\n\n.calInter-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 60px;\n    --border-radius: 10px;\n    --box-shadow:none;\n\n    margin-top: 10px;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.toolbarCategory {\n    --background: var(--ion-color-blanco);\n    padding: 0;\n    margin-top: 10px;\n}\n\nion-segment {\n    --background: var(--ion-color-blanco);\n\n    &::-webkit-scrollbar {\n        display: none;\n    }\n}\n\nion-segment-button {\n    border-style: solid;\n    --color: var(--ion-color-gris1);\n    --color-checked: var(--ion-color-blanco) !important;\n    --indicator-color: var(--ion-color-primary1);\n    --border-radius:20px;\n    --border-color: none;\n    min-width: auto;\n    margin-right: 10px;\n}\n\nion-label {\n    font-family: 'Sk-Modernist-Bold';\n}\n\n\n.error-message {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 10px;\n    line-height: .5;\n}\n\n.submit-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 50px;\n    --border-radius: 15px;\n    --box-shadow:none;\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n\n.ion-item-select {\n    --background: var(--ion-color-blanco) !important;\n    --color: var(--ion-color-negro) !important;\n    --color-focused: var(--ion-color-negro) !important;\n    --border-width: 1px !important;\n    --border-radius: 15px !important;\n    --border-color: var(--ion-color-negro) !important;\n    //--padding-bottom: 0px; \n    --padding-start: 15px !important;\n    --highlight-color-invalid: none !important;\n    --highlight-color-valid: none !important;\n    --highlight-color-focused: none !important;\n    /* margin-top: 30px;\n    margin-bottom: 70px; */\n}\n\nion-select {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    --padding-end: 0px;\n}\n\n.txtTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-bottom: 0;\n}\n\nion-select::part(icon) {\n    display: none !important;\n}\n\n.contenedorLoc{\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n.content-cal {\n    .scroll-content {\n        display: flex !important;\n        align-items: center !important;\n    }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 67336:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/experience/new-edit-exp/new-edit-exp.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" *ngIf=\"!isEdit && isDefault\">\n  <ion-toolbar color=\"rgba(255,255,255,0)\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"detail-exp\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"titleCExp1\" mode=\"ios\">{{ 'NEW-EDIT-EXP.Title1' | translate }}</ion-title>\n    <ion-title class=\"titleCExp2\" mode=\"ios\">{{ 'NEW-EDIT-EXP.Title2' | translate }}</ion-title>\n  </ion-toolbar>\n\n  <ion-row class=\"boxUpCover\">\n    <ion-col size=\"12\">\n      <p class=\"titleUpCover\">{{ 'NEW-EDIT-EXP.TxtUpload' | translate }}</p>\n      <img class=\"imgUpCover\" src=\"../../../../assets/icon/10-Camera.png\" (click)=\"onUploadImg()\">\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" *ngIf=\"!isEdit && !isDefault\">\n  <div class=\"header-center-heigh\" (click)=\"onUploadImg()\">\n    <img class=\"imgCover ion-no-padding\" [src]=\"fileExperience\">\n  </div>\n  <ion-toolbar color=\"rgba(255,255,255,0)\" style=\"width: 60px;\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"main/tabs/experience\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" *ngIf=\"isEdit\">\n  <div class=\"header-center-heigh\" (click)=\"onUploadImg()\">\n    <img class=\"imgCover ion-no-padding\" [src]=\"fileExperience\">\n  </div>\n  <ion-toolbar color=\"rgba(255,255,255,0)\" style=\"width: 60px;\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"main/tabs/experience\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"blanco\">\n  <form [formGroup]=\"experienceForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p class=\"fieldTitle\">{{ 'NEW-EDIT-EXP.ExpTitle' | translate }}</p>\n          <ion-item shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-input class=\"input-CItem\" formControlName=\"title\" inputmode=\"text\" required></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.title\">\n              <div class=\"error-message\" *ngIf=\"title.hasError(validation.type) && (title.dirty || title.touched)\">\n                <small class=\"error-message\">{{ 'NEW-EDIT-EXP.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"fieldTitle\">{{ 'NEW-EDIT-EXP.ExpDescripcion' | translate }}</p>\n          <ion-item shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-textarea class=\"input-CItem\" formControlName=\"description\" inputmode=\"text\" required></ion-textarea>\n          </ion-item>\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.description\">\n              <div class=\"error-message\" *ngIf=\"description.hasError(validation.type) && (description.dirty || description.touched)\">\n                <small class=\"error-message\">{{ 'NEW-EDIT-EXP.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"fieldTitle\">{{ 'NEW-EDIT-EXP.ExpDate' | translate }}</p>\n          <ion-button id=\"cal-trigger\" class=\"cal-Bt\"  color=\"blanco\">\n            <p class=\"date-cal\">{{txtDate}}</p>\n            <ion-img class=\"img-cal\" slot=\"end\" src=\"../../../../assets/icon/26-Calendar_black.png\"></ion-img>\n          </ion-button>\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.dateF\">\n              <div class=\"error-message\" *ngIf=\"dateF.hasError(validation.type) && (dateF.dirty || dateF.touched)\">\n                <small class=\"error-message\">{{ 'NEW-EDIT-EXP.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>      \n      <ion-modal #modalC class=\"modal-cal\" [initialBreakpoint]=\"0.6\" [breakpoints]=\"[0.6, 0.6, 0.75]\" trigger=\"cal-trigger\">\n        <ng-template>\n          <ion-content class=\"content-cal\">\n            <ion-datetime\n              formControlName=\"dateF\"\n              locale=\"{{ 'NEW-EDIT-EXP.lanCal' | translate }}\"\n              color=\"primary1\"\n              mode=\"ios\"\n            >\n              <span class=\"title-cal\" slot=\"title\">{{ 'NEW-EDIT-EXP.TitleCal' | translate }}</span>\n            </ion-datetime>\n            <ion-button class=\"calInter-Bt\" color=\"primary1\" (click)=\"setDate()\">{{ 'NEW-EDIT-EXP.btnSave' | translate }}</ion-button>\n          </ion-content>\n        </ng-template>\n      </ion-modal>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"fieldTitle\">{{ 'NEW-EDIT-EXP.ExpPrice' | translate }}</p>\n          <ion-item shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-input class=\"input-CItem\" formControlName=\"price\" type=\"number\" inputmode=\"numeric\" required></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.location\">\n              <div class=\"error-message\" *ngIf=\"location.hasError(validation.type) && (location.dirty || location.touched)\">\n                <small class=\"error-message\">{{ 'NEW-EDIT-EXP.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"fieldTitle\">{{ 'NEW-EDIT-EXP.ExpLocation' | translate }}</p>\n          <ion-item shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-input id=\"loc-trigger\" class=\"input-CItem\" formControlName=\"location\" inputmode=\"text\" required></ion-input>\n          </ion-item>\n\n          <ion-modal #modalLoc class=\"modal-loc\" [initialBreakpoint]=\"0.6\" [breakpoints]=\"[0.6, 0.6, 0.75]\" trigger=\"loc-trigger\">\n            <ng-template>\n              <ion-content class=\"content-cal\">\n                <ion-row class=\"contenedorLoc\">\n                  <ion-col>\n                    <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.country' | translate }}</p>\n                  </ion-col>\n                </ion-row>\n                <ion-item shape=\"round\" class=\"ion-item-select contenedorLoc\" lines=\"none\" detail>\n                  <ion-select formControlName=\"country\" [interfaceOptions]=\"customCountryOptions\" interface=\"action-sheet\" cancelText=\"Cancel\" (ionChange)=\"selectCountry()\">\n                    <li *ngFor=\"let obj of countries\">\n                      <ion-select-option [value]=\"obj.id\">{{ obj.country }}</ion-select-option>\n                    </li>\n                  </ion-select>\n                </ion-item>\n                <ion-row class=\"contenedorLoc\">\n                  <ion-col>\n                    <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.state' | translate }}</p>\n                  </ion-col>\n                </ion-row>\n                <ion-item shape=\"round\" class=\"ion-item-select contenedorLoc\" lines=\"none\" detail>\n                  <ion-select formControlName=\"state\" [interfaceOptions]=\"customStateOptions\" interface=\"action-sheet\" cancelText=\"Cancel\" (ionChange)=\"selectState()\">\n                    <li *ngFor=\"let obj of states\">\n                      <ion-select-option [value]=\"obj.id\">{{ obj.state }}</ion-select-option>\n                    </li>\n                  </ion-select>\n                </ion-item>\n                <ion-row class=\"contenedorLoc\">\n                  <ion-col>\n                    <p class=\"txtTitle\">{{ 'EDIT-ACCOUNT.city' | translate }}</p>\n                  </ion-col>\n                </ion-row>\n                <ion-item shape=\"round\" class=\"ion-item-select contenedorLoc\" lines=\"none\" detail>\n                  <ion-select formControlName=\"city\" [interfaceOptions]=\"customCityOptions\" interface=\"action-sheet\" cancelText=\"Cancel\">\n                    <li *ngFor=\"let obj of cities\">\n                      <ion-select-option [value]=\"obj.id\">{{ obj.city }}</ion-select-option>\n                    </li>\n                  </ion-select>\n                </ion-item>\n                <ion-button class=\"calInter-Bt\" color=\"blanco\"  color=\"primary1\" (click)=\"locationChange()\">{{ 'EDIT-ACCOUNT.btnSave' | translate }}</ion-button>\n              </ion-content>\n            </ng-template>\n          </ion-modal>\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.location\">\n              <div class=\"error-message\" *ngIf=\"location.hasError(validation.type) && (location.dirty || location.touched)\">\n                <small class=\"error-message\">{{ 'NEW-EDIT-EXP.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"fieldTitle\">{{ 'NEW-EDIT-EXP.NoPeople' | translate }}</p>\n          <ion-item shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-input class=\"input-CItem\" formControlName=\"nopeople\" type=\"number\" inputmode=\"numeric\" required></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.nopeople\">\n              <div class=\"error-message\" *ngIf=\"nopeople.hasError(validation.type) && (nopeople.dirty || nopeople.touched)\">\n                <small class=\"error-message\">{{ 'NEW-EDIT-EXP.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"fieldTitle\">{{ 'NEW-EDIT-EXP.Category' | translate }}</p>\n          <ion-input class=\"input-CItem\" formControlName=\"category\" inputmode=\"text\" hidden required style=\"display: none;\"></ion-input>\n          <ion-toolbar class=\"toolbarCategory\" mode=\"ios\">\n            <ion-segment (ionChange)=\"optionSelected($event)\" swipe-gesture=\"false\" [value]=\"catSelected\">\n              <ion-grid class=\"ion-no-padding\">\n                <ion-row>\n                  <ion-segment-button *ngFor=\"let op of experienceCat\" value={{op.id}}>\n                    <ion-label>{{ op.name }}</ion-label>\n                  </ion-segment-button>\n                </ion-row>\n              </ion-grid>\n            </ion-segment>\n          </ion-toolbar>\n\n          <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.category\">\n              <div class=\"error-message\" *ngIf=\"category.hasError(validation.type) && (category.dirty || category.touched)\">\n                <small class=\"error-message\">{{ 'NEW-EDIT-EXP.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"submit-Bt\" color=\"primary1\" type=\"submit\">\n            {{ 'NEW-EDIT-EXP.btnSubmit' | translate }}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_experience_new-edit-exp_new-edit-exp_module_ts.js.map