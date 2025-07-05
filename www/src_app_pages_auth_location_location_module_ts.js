(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_location_location_module_ts"],{

/***/ 78672:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/location/location-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationPageRoutingModule: () => (/* binding */ LocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.page */ 12288);




const routes = [{
  path: '',
  component: _location_page__WEBPACK_IMPORTED_MODULE_0__.LocationPage
}];
let LocationPageRoutingModule = class LocationPageRoutingModule {};
LocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LocationPageRoutingModule);


/***/ }),

/***/ 94139:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/location/location.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationPageModule: () => (/* binding */ LocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-routing.module */ 78672);
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.page */ 12288);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/pipes.module */ 96464);









let LocationPageModule = class LocationPageModule {};
LocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _location_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule],
  declarations: [_location_page__WEBPACK_IMPORTED_MODULE_1__.LocationPage]
})], LocationPageModule);


/***/ }),

/***/ 12288:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/location/location.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationPage: () => (/* binding */ LocationPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _location_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.page.html?ngResource */ 10632);
/* harmony import */ var _location_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.page.scss?ngResource */ 34192);
/* harmony import */ var _location_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_location_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ 90628);
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/match.service */ 5876);











let LocationPage = class LocationPage {
  /* locationForm = this.formBuilder.group( {
    iam_a: [''],
    iam_looking: ['']
  }); */
  constructor(activatedRoute, router, translate, uiService, userService, matchService) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.translate = translate;
    this.uiService = uiService;
    this.userService = userService;
    this.matchService = matchService;
    this.lanCatalogo = 'EN';
    this.usr = {};
    this.rs = '';
    this.imgsUser = [];
    this.name_img = '';
    this.countrySelected = this.translate.instant('LOCATION.CountryPH');
    this.idCountry = '';
    this.countryBuscar = '';
    this.stateSelected = this.translate.instant('LOCATION.StatePH');
    this.idState = '';
    this.stateBuscar = '';
    this.citySelected = this.translate.instant('LOCATION.CityPH');
    this.idCity = '';
    this.cityBuscar = '';
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usr = this.router.getCurrentNavigation().extras.state.usr;
        this.rs = this.router.getCurrentNavigation().extras.state.rs;
        this.name_img = this.router.getCurrentNavigation().extras.state.name_img;
        this.birth = this.router.getCurrentNavigation().extras.state.birth;
        this.gend = this.router.getCurrentNavigation().extras.state.gender;
        this.emaill = this.router.getCurrentNavigation().extras.state.email;
        console.log('USR: ', this.usr);
        console.log('RS: ', this.rs);
        console.log('NAME_IMG: ', this.name_img);
      }
    });
  }
  ngOnInit() {
    this.idCountry = "";
    this.countrySelected = this.translate.instant('LOCATION.CountryPH');
    ;
    this.stateSelected = this.translate.instant('LOCATION.StatePH');
    this.idState = '';
    this.citySelected = this.translate.instant('LOCATION.CityPH');
    this.idCity = '';
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.getCurrentPosition();
      if (_this.translate.currentLang == 'es') {
        _this.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.es;
      } else {
        _this.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.en;
      }
      _this.uiService.showLoader();
      _this.countries = yield _this.userService.getCountries();
      _this.uiService.hideLoader();
      _this.states = [];
      _this.cities = [];
      console.log('COUNTRIES: ', _this.countries);
    })();
  }
  openModalC() {
    this.countryBuscar = '';
  }
  searchCountry(ev) {
    this.countryBuscar = ev.detail.value;
  }
  selectCountry(idC, nameC) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.idCountry = idC;
      _this2.countrySelected = nameC;
      _this2.stateSelected = _this2.translate.instant('LOCATION.StatePH');
      _this2.idState = '';
      _this2.citySelected = _this2.translate.instant('LOCATION.CityPH');
      _this2.idCity = '';
      _this2.cities = [];
      _this2.uiService.showLoader();
      _this2.states = yield _this2.userService.getStates(_this2.idCountry);
      _this2.uiService.hideLoader();
      console.log('ESTADOS: ', _this2.states);
      _this2.modalCountry.dismiss();
    })();
  }
  openModalS() {
    this.stateBuscar = '';
    if (this.idCountry == '') {
      this.uiService.alertOK(this.translate.instant('LOCATION.StateMsg'));
      return;
    }
    this.modalState.present();
  }
  searchState(ev) {
    this.stateBuscar = ev.detail.value;
  }
  selectState(obj) {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.idState = obj.id;
      _this3.stateSelected = obj.state;
      _this3.citySelected = _this3.translate.instant('LOCATION.CityPH');
      _this3.idCity = '';
      _this3.uiService.showLoader();
      _this3.cities = yield _this3.userService.getCities(obj.countryId, _this3.idState);
      _this3.uiService.hideLoader();
      console.log('CIUDADES: ', _this3.cities);
      _this3.modalState.dismiss();
    })();
  }
  openModalCt() {
    this.cityBuscar = '';
    console.log('CITY: ', this.idCity);
    if (this.idState == '') {
      this.uiService.alertOK(this.translate.instant('LOCATION.CityMsg'));
      return;
    }
    this.modalCity.present();
  }
  searchCity(ev) {
    this.cityBuscar = ev.detail.value;
  }
  selectCity(idCt, nameCt) {
    this.idCity = idCt;
    this.citySelected = nameCt;
    this.modalCity.dismiss();
  }
  getCurrentPosition() {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const coordinates = await Geolocation.getCurrentPosition();
      // console.log('Current position:', coordinates.coords);
      // const latitude = coordinates.coords.latitude;
      // const longitude = coordinates.coords.longitude;
      const latitude = 54.567567;
      const longitude = 76.6567363;
      const res = yield _this4.userService.locationnewapi(latitude, longitude);
      // console.log(res); 
      _this4.newlocapiresp = res;
      console.log(_this4.newlocapiresp);
      _this4.country = _this4.newlocapiresp.country;
      _this4.state = _this4.newlocapiresp.state;
      _this4.city = _this4.newlocapiresp.city;
      _this4.lati = latitude;
      _this4.longi = longitude;
      _this4.address = _this4.newlocapiresp.address;
    })();
  }
  next(op) {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (op == 'next') {
        _this5.usr.location = _this5.newlocapiresp;
        /*this.usr.location.country = this.idCountry;
        this.usr.location.state = this.idState;
        this.usr.location.city = this.idCity; */
      }
      console.log('USR: ', _this5.usr);
      const user = {
        location: {
          country: _this5.country,
          state: _this5.state,
          city: _this5.city,
          address: _this5.address,
          latitud: _this5.lati,
          longitud: _this5.longi,
          radio: '20'
        }
      };
      // Save it somewhere accessible (like a service or localStorage)
      _this5.userService.setUserr(user);
      _this5.router.navigate(['about-me'], {
        state: {
          pageid: 'regview',
          birth: _this5.birth,
          gender: _this5.usr.gender,
          mail: _this5.emaill
        }
      });
      _this5.uiService.showLoader();
      //const res = await this.userService.register(this.usr); 
      //console.log(res);   
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
    }, {
      type: _services_match_service__WEBPACK_IMPORTED_MODULE_6__.MatchService
    }];
  }
  static {
    this.propDecorators = {
      modalCountry: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
        args: ['mCountry']
      }],
      modalState: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
        args: ['mState']
      }],
      modalCity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
        args: ['mCity']
      }]
    };
  }
};
LocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-location',
  template: _location_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_location_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LocationPage);


/***/ }),

/***/ 89652:
/*!*********************************************!*\
  !*** ./src/app/pipes/filter-search.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterSearchPipe: () => (/* binding */ FilterSearchPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94280);


let FilterSearchPipe = class FilterSearchPipe {
  transform(lista, texto = '', columna) {
    if (texto == '') {
      return lista;
    }
    if (!lista) {
      return lista;
    }
    texto = texto.toLocaleLowerCase();
    return lista.filter(item => item[columna].toLowerCase().includes(texto));
  }
};
FilterSearchPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'filterSearch'
})], FilterSearchPipe);


/***/ }),

/***/ 96464:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipesModule: () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _filter_search_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-search.pipe */ 89652);



let PipesModule = class PipesModule {};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_filter_search_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterSearchPipe],
  exports: [_filter_search_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterSearchPipe]
})], PipesModule);


/***/ }),

/***/ 34192:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/location/location.page.scss?ngResource ***!
  \*******************************************************************/
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
  margin-bottom: 20px;
}

.campoItem {
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
  margin-top: 10px;
}

ion-searchbar {
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
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
}`, "",{"version":3,"sources":["webpack://./src/app/pages/auth/location/location.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/auth/location/location.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,gCAAA;EACA,eAAA;EACA,oBAAA;ACCJ;;ADGA;EACI,gCAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;ACAJ;;ADGA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,qBAAA;EACA,sCAAA;EAEA,qBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;EACA,gBAAA;ACDJ;;ADKA;EACI,gCAAA;EACA,eAAA;ACFJ;;ADQA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;ACLJ","sourcesContent":["ion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n}\n\n.skip-Bt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    //margin-top: 160px;\n}\n\n.text-h1 {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 36px;\n    margin-top: -10px;\n    margin-bottom: 20px;\n}\n\n.campoItem {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --border-radius: 15px;\n    --border-color: var(--ion-color-negro);\n    //--padding-bottom: 0px; \n    --padding-start: 15px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n    margin-top: 10px;\n    //margin-bottom: 70px;\n}\n\nion-searchbar {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    //--box-shadow: none;\n}\n\n\n\n.next-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 40px;\n    --border-radius: 10px;\n    --box-shadow:none;\n    margin-top: 200px;\n}","ion-back-button {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 20px;\n}\n\n.skip-Bt {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n}\n\n.text-h1 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 36px;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.campoItem {\n  --background: var(--ion-color-blanco);\n  --color: var(--ion-color-negro);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --border-radius: 15px;\n  --border-color: var(--ion-color-negro);\n  --padding-start: 15px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n  margin-top: 10px;\n}\n\nion-searchbar {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n}\n\n.next-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 40px;\n  --border-radius: 10px;\n  --box-shadow:none;\n  margin-top: 200px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 10632:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/location/location.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"profile-details\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button class=\"skip-Bt\" (click)=\"next('skip')\" defaultHref=\"profile-details\">Skip</ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <!-- <form [formGroup]=\"locationForm\" (ngSubmit)=\"next('next')\"> -->\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"text-h1\">{{ 'LOCATION.Title' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n    \n\n      <ion-row>\n        <ion-col>\n          <ion-item id=\"open-country\" class=\"campoItem\"  lines=\"none\" detail>\n            <ion-label>{{country}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-modal #mCountry trigger=\"open-country\" [initialBreakpoint]=\"0.25\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\n        <ng-template>\n          <ion-content>\n            <ion-searchbar placeholder=\"{{ 'LOCATION.SearchC' | translate }}\" (click)=\"mCountry.setCurrentBreakpoint(0.75)\" (ionChange)=\"searchCountry($event)\"></ion-searchbar>\n            <ion-list>\n              <ion-item *ngFor=\"let obj of countries | filterSearch:countryBuscar:'country'\" (click)=\"selectCountry(obj.id, obj.country)\">\n                <ion-label>{{obj.country}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-content>\n        </ng-template>\n      </ion-modal> -->\n\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"campoItem\"  lines=\"none\" detail>\n            <ion-label>{{state}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-modal #mState [initialBreakpoint]=\"0.25\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\n        <ng-template>\n          <ion-content>\n            <ion-searchbar placeholder=\"{{ 'LOCATION.SearchS' | translate }}\" (click)=\"mState.setCurrentBreakpoint(0.75)\" (ionChange)=\"searchState($event)\"></ion-searchbar>\n            <ion-list>\n              <ion-item *ngFor=\"let obj of states | filterSearch:stateBuscar:'state'\" (click)=\"selectState(obj)\">\n                <ion-label>{{obj.state}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-content>\n        </ng-template>\n      </ion-modal> -->\n\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"campoItem\"  lines=\"none\" detail>\n            <ion-label>{{city}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- <div *ngIf=\"idState != ''\"> -->\n      <!-- <ion-modal #mCity [initialBreakpoint]=\"0.25\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\n        <ng-template>\n          <ion-content>\n            <ion-searchbar placeholder=\"{{ 'LOCATION.SearchCt' | translate }}\" (click)=\"mCity.setCurrentBreakpoint(0.75)\" (ionChange)=\"searchCity($event)\"></ion-searchbar>\n            <ion-list>\n              <ion-item *ngFor=\"let obj of cities | filterSearch:cityBuscar:'city'\" (click)=\"selectCity(obj.id, obj.city)\">\n                <ion-label>{{obj.city}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-content>\n        </ng-template>\n      </ion-modal> -->\n      <!-- </div> -->\n\n      <ion-row>\n        <ion-button class=\"next-Bt\" color=\"primary1\" (click)=\"next('next')\">\n          {{ 'LOCATION.btnNext' | translate }}\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  <!-- </form> -->\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_location_location_module_ts.js.map