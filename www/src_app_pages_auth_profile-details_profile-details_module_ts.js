(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_profile-details_profile-details_module_ts"],{

/***/ 19196:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/profile-details/profile-details-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileDetailsPageRoutingModule: () => (/* binding */ ProfileDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _profile_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-details.page */ 5132);




const routes = [{
  path: '',
  component: _profile_details_page__WEBPACK_IMPORTED_MODULE_0__.ProfileDetailsPage
}];
let ProfileDetailsPageRoutingModule = class ProfileDetailsPageRoutingModule {};
ProfileDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ProfileDetailsPageRoutingModule);


/***/ }),

/***/ 88676:
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/profile-details/profile-details.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileDetailsPageModule: () => (/* binding */ ProfileDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _profile_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-details-routing.module */ 19196);
/* harmony import */ var _profile_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-details.page */ 5132);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let ProfileDetailsPageModule = class ProfileDetailsPageModule {};
ProfileDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileDetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_profile_details_page__WEBPACK_IMPORTED_MODULE_1__.ProfileDetailsPage]
})], ProfileDetailsPageModule);


/***/ }),

/***/ 5132:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/profile-details/profile-details.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileDetailsPage: () => (/* binding */ ProfileDetailsPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _profile_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-details.page.html?ngResource */ 37160);
/* harmony import */ var _profile_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-details.page.scss?ngResource */ 22868);
/* harmony import */ var _profile_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 20480);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 98504);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 63924);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 50168);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ 90628);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/storage */ 2108);















let ProfileDetailsPage = class ProfileDetailsPage {
  constructor(formBuilder, activatedRoute, router, translate, uiService, dms, userService) {
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.translate = translate;
    this.uiService = uiService;
    this.dms = dms;
    this.userService = userService;
    this.lanCatalogo = 'EN';
    this.isDefault = true;
    this.email = '';
    this.password = '';
    this.name = '';
    this.rs = '';
    this.mobile = '';
    this.birthday = '';
    this.image = null;
    this.name_img = '';
    this.txtBirthDay = '';
    this.ProfileForm = this.formBuilder.group({
      fname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      lname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      bday: [new Date().toISOString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.validation_messages = {
      'fname': [{
        type: 'required',
        message: 'msgErrReqFName'
      }],
      'lname': [{
        type: 'required',
        message: 'msgErrReqLName'
      }],
      'gender': [{
        type: 'required',
        message: 'msgErrGender'
      }],
      'bday': [{
        type: 'required',
        message: 'msgErrReqBirthday'
      }]
    };
    this.customGenderOptions = {
      header: this.translate.instant('ABOUT-ME.Gender'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdGender'),
      translucent: true
    };
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.email = this.router.getCurrentNavigation().extras.state.email;
        this.password = this.router.getCurrentNavigation().extras.state.password;
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.rs = this.router.getCurrentNavigation().extras.state.rs;
        this.mobile = this.router.getCurrentNavigation().extras.state.mobile;
      }
    });
    this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_6__.constants.catalogs.Gender.toString(), this.lanCatalogo).then(value => {
      this.genders = value;
    });
  }
  get fname() {
    return this.ProfileForm.get('fname');
  }
  get lname() {
    return this.ProfileForm.get('lname');
  }
  get gender() {
    return this.ProfileForm.get('gender');
  }
  get bday() {
    return this.ProfileForm.get('bday');
  }
  ngOnInit() {
    this.separaName(this.name);
  }
  validaCampo(campo, message) {
    for (let validation of message) {
      if (campo.hasError(validation.type)) {
        console.log(this.translate.instant('PROF-DETAIL.' + validation.message));
        this.uiService.alertOK(this.translate.instant('PROF-DETAIL.' + validation.message));
        return true;
      }
    }
    return false;
  }
  takePicture() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('TAKE PICTURE');
      const imge = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64
      });
      _this.isDefault = false;
      _this.name_img = 'profile.' + imge.format;
      _this.image = imge.base64String;
      _this.fileProfile = _this.displayImg(imge.format, imge.base64String);
    })();
  }
  displayImg(format, b64) {
    return this.dms.bypassSecurityTrustUrl("data:image/" + format + ";base64," + b64);
  }
  setBirthday() {
    const fec = new Date(this.bday.value);
    const day = ('00' + fec.getDate()).slice(-2);
    const t_month = fec.getMonth() + 1;
    const month = ('00' + t_month).slice(-2);
    const year = fec.getFullYear();
    this.birthday = year + '-' + month + '-' + day; // 2022-05-27
    console.log('FECHA: ', this.birthday);
    if (!this.isAdult(this.birthday)) {
      this.uiService.alertOK(this.translate.instant('PROF-DETAIL.mayorEdad'));
      this.bday.setValue(null);
      this.txtBirthDay = '';
      this.modalCal.dismiss();
      return;
    }
    if (this.translate.instant('PROF-DETAIL.lanCal') == 'es-MX') {
      this.txtBirthDay = day + '.' + month + '.' + year; //'01.20.75';
    } else {
      this.txtBirthDay = month + '.' + day + '.' + year;
    }
    this.modalCal.dismiss();
  }
  next() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('SIGUIENTE');
      if (!_this2.fileProfile) {
        _this2.uiService.alertOK(_this2.translate.instant('PROF-DETAIL.msgErrProfileImage'));
        return;
      }
      if (_this2.validaCampo(_this2.fname, _this2.validation_messages.fname)) {
        return;
      }
      if (_this2.validaCampo(_this2.lname, _this2.validation_messages.lname)) {
        return;
      }
      if (_this2.validaCampo(_this2.gender, _this2.validation_messages.gender)) {
        return;
      }
      //Se va en la siguiente promocion
      /*if(this.name_img === undefined || this.name_img === null || this.name_img === ''){
        this.uiService.alertOK(this.translate.instant('PROF-DETAIL.msgErrReqImg'));
        return;
      }*/
      /* if(this.validaCampo(this.bday, this.validation_messages.bday)){
        return;
      } */
      if (_this2.validaCampo(_this2.bday, _this2.validation_messages.bday) || _this2.birthday == null || _this2.birthday == '' || !_this2.isAdult(_this2.birthday)) {
        _this2.uiService.alertOK(_this2.translate.instant('PROF-DETAIL.msgErrReqBirthday'));
        return;
      }
      const res = yield _this2.uiService.alertOK_CANCEL(_this2.translate.instant('PROF-DETAIL.msgValidaEdad'));
      if (!res) {
        return;
      }
      const usr_tmp = {};
      usr_tmp.firstName = _this2.fname.value;
      usr_tmp.lastName = _this2.lname.value;
      usr_tmp.gender = _this2.gender.value;
      usr_tmp.email = _this2.email;
      usr_tmp.phone = _this2.mobile;
      usr_tmp.birthDay = _this2.birthday;
      usr_tmp.image = _this2.image;
      usr_tmp.password = _this2.password;
      _this2.userService.navegationExtras = {
        state: {
          usr: usr_tmp,
          rs: _this2.rs,
          name_img: _this2.image,
          birth: _this2.birthday,
          gender: usr_tmp.gender,
          email: _this2.email
        }
      };
      // this.router.navigate(['i-am-alooking-for']);
      const user = {
        firstName: _this2.fname.value,
        lastName: _this2.lname.value,
        image: null,
        gender: _this2.gender.value,
        birthDay: _this2.birthday
      };
      console.log(user);
      yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_7__.Storage.set({
        key: 'dp',
        value: _this2.image
      });
      // Save it somewhere accessible (like a service or localStorage)
      _this2.userService.setUserr(user);
      _this2.router.navigate(['location'], _this2.userService.navegationExtras);
    })();
  }
  isAdult(dateString) {
    //const birthday = addDays(parseISO(dateString), 1);
    const birthday = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(dateString);
    const today = new Date();
    const age = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(today, birthday);
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  formatoCapital(campo) {
    let palabra = this.ProfileForm.get(campo);
    if (palabra.value !== null && palabra.value !== "") {
      palabra.setValue(palabra.value.substring(0, 1).toUpperCase() + palabra.value.substring(1, palabra.value.lenght).toLowerCase());
    }
  }
  separaName(name) {
    //name = 'Humberto Luis +Garcia';
    if (name && name.trim() !== '') {
      let nameArr = name.split(' ');
      this.fname.setValue(nameArr[0]);
      if (nameArr.length > 1) {
        this.lname.setValue(nameArr[1].replace('+', ' '));
      } else {
        this.lname.setValue('');
      }
    } else {
      this.fname.setValue('');
      this.lname.setValue('');
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
    }];
  }
  static {
    this.propDecorators = {
      modalCal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
        args: ['modalC']
      }]
    };
  }
};
ProfileDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-profile-details',
  template: _profile_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_profile_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ProfileDetailsPage);


/***/ }),

/***/ 26340:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 88828:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 71840:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 7368);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 26340);


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ 37132:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ 22376:
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 7368);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 26340);


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ 98504:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInYears/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 7368);
/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ 22376);
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ 71840);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 26340);




/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));

  // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days
  dateLeft.setFullYear(1584);
  dateRight.setFullYear(1584);

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;
  var result = sign * (difference - Number(isLastYearNotFull));
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 20480:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 37132);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 26340);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 88828);



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ 7368:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ 36008);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 26340);


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ 22868:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/profile-details/profile-details.page.scss?ngResource ***!
  \*********************************************************************************/
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

.text-h1 {
  font-family: "Sk-Modernist-Bold";
  font-size: 36px;
  margin-top: -10px;
  margin-bottom: 0px;
}

.image-col {
  position: relative;
}

.img-profile {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 100px !important;
  margin: 50px auto 0;
}
.img-profile img {
  object-fit: cover;
  object-position: top;
}

.img-camera-default {
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 5px;
  right: 110px;
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

/* ion-popover {
    --offset-y: -100px;
    --width: 335px;
} */
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

.next-Bt {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
  width: 100%;
  height: 40px;
  --border-radius: 10px;
  --box-shadow:none;
  margin-top: 25px;
}

.gender-label {
  min-width: 80% !important;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/auth/profile-details/profile-details.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/auth/profile-details/profile-details.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;ACCJ;;ADEA;EAGI,gCAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;ACDJ;;ADGA;EACI,kBAAA;ACAJ;;ADGA;EACI,YAAA;EACA,aAAA;EACA,gBAAA;EACA,+BAAA;EACA,mBAAA;ACAJ;ADEI;EACI,iBAAA;EACA,oBAAA;ACAR;;ADoBA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;ACjBJ;;ADsBA;EACI,qCAAA;EACA,+BAAA;EACA,uCAAA;EACA,8BAAA;EACA,kBAAA;EACA,oBAAA;EACA,+BAAA;EACA,6BAAA;EACA,0CAAA;ACnBJ;ADqBI;EACI,8BAAA;EACA,4BAAA;EACA,8BAAA;ACnBR;;ADwBA;EACI,YAAA;ACrBJ;;ADwBA;EACI,4BAAA;ACrBJ;;ADwBA;EACI,mCAAA;EACA,eAAA;ACrBJ;ADuBI;EACI,mCAAA;EACA,eAAA;EACA,wCAAA;EACA,sCAAA;EAAA,iCAAA;EACA,gBAAA;ACrBR;;ADyBA;EACI,mCAAA;EACA,eAAA;ACtBJ;;AD0BA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;ACvBJ;;AD0BA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;ACvBJ;;AD0BA;EACI,iBAAA;EACA,eAAA;ACvBJ;;AD0BA;;;GAAA;AAKA;EACI,cAAA;ACxBJ;;AD4BI;EACI,wBAAA;EACA,8BAAA;ACzBR;;AD6BA;EACI,qCAAA;EACA,gCAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AC1BJ;;AD6BA;EACI,cAAA;EACA,kBAAA;EACA,gCAAA;EACA,eAAA;EACA,6BAAA;AC1BJ;;AD6BA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EAEA,gBAAA;EACA,kBAAA;EACA,mBAAA;AC3BJ;;AD8BA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EACD,gBAAA;AC3BH;;AD8BA;EACI,yBAAA;AC3BJ","sourcesContent":["ion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n}\n\n.text-h1 {\n    //display: flex;\n    //justify-content: center;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 36px;\n    margin-top: -10px;\n    margin-bottom: 0px;\n}\n.image-col{\n    position: relative;\n}\n\n.img-profile {\n    width: 120px;\n    height: 120px;\n    overflow: hidden;\n    border-radius: 100px !important;\n    margin: 50px auto 0;\n\n    img{\n        object-fit: cover;\n        object-position: top;\n    }\n}\n\n// .img-profile-user {\n//     max-width: 80%;\n//     max-height: 250px;\n//     border-radius: 10px !important;\n\n//     margin-top: 50px;\n// }\n\n// .img-camera {\n//     width: 35px;\n//     height: 35px;\n//     position: absolute;\n//     // margin-left: -28px;\n//     // margin-bottom: -10px;\n// }\n\n.img-camera-default {\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    bottom: 5px;\n    right: 110px;\n    // margin-left: -35px;\n    // margin-bottom: 5px;\n}\n\nion-item {\n    --background: var(--ion-color-blanco);\n    --color: var(--ion-color-negro);\n    --color-focused: var(--ion-color-negro);\n    --border-width: 1px !important;\n    --padding-top: 3px; \n    --padding-start: 0px;\n    --highlight-color-invalid: none;\n    --highlight-color-valid: none;\n    --highlight-color-focused: none !important;\n\n    &.item-shape-round {\n        border-style: solid !important;\n        border-width: 1px !important;\n        border-radius: 15px !important; \n    }\n\n}\n\nion-item::part(native) {\n    border: none;\n}\n\n.item-highlight {\n    border-width: 0px !important;\n}\n\n.camposLabel-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    \n    &.label-floating {\n        font-family: 'Sk-Modernist-Regular';\n        font-size: 17px;\n        color: var(--ion-color-negro) !important;\n        max-width: fit-content !important;\n        margin-top: -6px;\n    }\n}\n\n.input-CItem {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 19px;\n    //height: 20px !important;\n}\n\n.cal-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 13px;\n    text-transform: none;\n    width: 100%;\n    height: 60px;\n    --border-radius: 10px;\n    --box-shadow:none;\n}\n\n.img-cal {\n    width: 25px;\n    height: 25px;\n    margin-right: 10px;\n}\n\n.date-cal {\n    margin-left: auto;\n    margin-right: 0;\n}\n\n/* ion-popover {\n    --offset-y: -100px;\n    --width: 335px;\n} */\n\n.modal-cal {\n    --width: 400px;\n}\n\n.content-cal {\n    .scroll-content {\n        display: flex !important;\n        align-items: center !important;\n    }\n}\n\nion-datetime {\n    --background: var(--ion-color-blanco);\n    font-family: 'Sk-Modernist-Bold';\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n}\n\n.title-cal {\n    display: block;\n    text-align: center;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-negro);\n}\n\n.calInter-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 60px;\n    --border-radius: 10px;\n    --box-shadow:none;\n\n    margin-top: 10px;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.next-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 40px;\n    --border-radius: 10px;\n    --box-shadow:none;\n   margin-top: 25px;\n}\n\n.gender-label{\n    min-width: 80% !important;\n}","ion-back-button {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 20px;\n}\n\n.text-h1 {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 36px;\n  margin-top: -10px;\n  margin-bottom: 0px;\n}\n\n.image-col {\n  position: relative;\n}\n\n.img-profile {\n  width: 120px;\n  height: 120px;\n  overflow: hidden;\n  border-radius: 100px !important;\n  margin: 50px auto 0;\n}\n.img-profile img {\n  object-fit: cover;\n  object-position: top;\n}\n\n.img-camera-default {\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  bottom: 5px;\n  right: 110px;\n}\n\nion-item {\n  --background: var(--ion-color-blanco);\n  --color: var(--ion-color-negro);\n  --color-focused: var(--ion-color-negro);\n  --border-width: 1px !important;\n  --padding-top: 3px;\n  --padding-start: 0px;\n  --highlight-color-invalid: none;\n  --highlight-color-valid: none;\n  --highlight-color-focused: none !important;\n}\nion-item.item-shape-round {\n  border-style: solid !important;\n  border-width: 1px !important;\n  border-radius: 15px !important;\n}\n\nion-item::part(native) {\n  border: none;\n}\n\n.item-highlight {\n  border-width: 0px !important;\n}\n\n.camposLabel-CItem {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 16px;\n}\n.camposLabel-CItem.label-floating {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 17px;\n  color: var(--ion-color-negro) !important;\n  max-width: fit-content !important;\n  margin-top: -6px;\n}\n\n.input-CItem {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 19px;\n}\n\n.cal-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 13px;\n  text-transform: none;\n  width: 100%;\n  height: 60px;\n  --border-radius: 10px;\n  --box-shadow:none;\n}\n\n.img-cal {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\n\n.date-cal {\n  margin-left: auto;\n  margin-right: 0;\n}\n\n/* ion-popover {\n    --offset-y: -100px;\n    --width: 335px;\n} */\n.modal-cal {\n  --width: 400px;\n}\n\n.content-cal .scroll-content {\n  display: flex !important;\n  align-items: center !important;\n}\n\nion-datetime {\n  --background: var(--ion-color-blanco);\n  font-family: \"Sk-Modernist-Bold\";\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n\n.title-cal {\n  display: block;\n  text-align: center;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  color: var(--ion-color-negro);\n}\n\n.calInter-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 60px;\n  --border-radius: 10px;\n  --box-shadow:none;\n  margin-top: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.next-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 40px;\n  --border-radius: 10px;\n  --box-shadow:none;\n  margin-top: 25px;\n}\n\n.gender-label {\n  min-width: 80% !important;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 37160:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/profile-details/profile-details.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"verification-code\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <form [formGroup]=\"ProfileForm\" (ngSubmit)=\"next()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"text-h1\">{{ 'PROF-DETAIL.Title' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"image-col\">\n          <div class=\"img-profile\">\n            <img [src]=\"fileProfile\" onError=\"this.src = '../../../../assets/icon/09-UserProfile.png'\" />\n          </div>\n          <img class=\"img-camera-default\" src=\"../../../../assets/icon/10-Camera.png\" (click)=\"takePicture()\">\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col style=\"text-align: center;\" *ngIf=\"!isDefault\">\n          <img class=\"img-profile-user\" [src]=\"fileProfile\" (click)=\"takePicture()\">\n          <img class=\"img-camera\" src=\"../../../../assets/icon/10-Camera.png\" (click)=\"takePicture()\">\n        </ion-col>\n        <ion-col style=\"text-align: center;\" *ngIf=\"isDefault\">\n          <img class=\"img-profile\" src=\"../../../../assets/icon/09-UserProfile.png\" (click)=\"takePicture()\">\n          <img class=\"img-camera-default\" src=\"../../../../assets/icon/10-Camera.png\" (click)=\"takePicture()\">\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row style=\"margin-top: 40px;\">\n        <ion-col>\n          <ion-item fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'PROF-DETAIL.FName' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"fname\" type=\"text\" inputmode=\"text\" required (focusout)=\"formatoCapital('fname')\"></ion-input>\n          </ion-item>\n          <!-- <div class=\"validation-errors\" *ngIf = presentarErroresCampos>\n            <ng-container *ngFor=\"let validation of validation_messages.fname\">\n              <div class=\"error-message\" *ngIf=\"fname.hasError(validation.type) && (fname.dirty || fname.touched)\">\n                <small class=\"error-message\">{{ 'REGISTRY.'+validation.message | translate }}</small>\n              </div>\n            </ng-container>\n          </div> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label class=\"camposLabel-CItem\" position=\"floating\">{{ 'PROF-DETAIL.LName' | translate }}</ion-label> \n            <ion-input class=\"input-CItem\" formControlName=\"lname\" type=\"text\" inputmode=\"text\" required (focusout)=\"formatoCapital('lname')\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item fill=\"outline\" shape=\"round\" lines=\"none\" mode=\"md\">\n            <ion-label text-wrap class=\"gender-label\">{{'ABOUT-ME.Gender' | translate }}</ion-label>\n            <ion-select formControlName=\"gender\" [interfaceOptions]=\"customGenderOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n                <ion-select-option *ngFor=\"let obj of genders\" [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-item lines=\"none\" detail>\n        <ion-icon slot=\"start\" name=\"transgender-outline\"> </ion-icon>\n        \n      </ion-item> -->\n\n      <ion-row>\n        <ion-col>\n          <ion-button id=\"cal-trigger\" class=\"cal-Bt\"  color=\"primary1\">\n            <ion-img class=\"img-cal\" slot=\"start\" src=\"../../../../assets/icon/11-Calendar_white.png\"></ion-img>\n            <p class=\"text-cal\">{{ 'PROF-DETAIL.TextCalBtn' | translate }}</p>\n            <p class=\"date-cal\">{{txtBirthDay}}</p>\n          </ion-button>\n        </ion-col>\n      </ion-row>      \n      <!-- <ion-popover trigger=\"cal-trigger\" triggerAction=\"click\" size=\"auto\" alignment=\"center\" mode=\"md\">\n        <ng-template>\n          <ion-datetime\n            presentation=\"date\"\n            formControlName=\"birthday\"\n            locale=\"es-MX\"\n          ></ion-datetime>\n        </ng-template>\n      </ion-popover> -->\n      <ion-modal #modalC class=\"modal-cal\" [initialBreakpoint]=\"0.7\" [breakpoints]=\"[0, 0.7]\" trigger=\"cal-trigger\" aria-hidden=\"true\">\n        <ng-template>\n          <ion-content class=\"content-cal\">\n            <ion-datetime\n              presentation=\"date\"\n              formControlName=\"bday\"\n              locale=\"{{ 'PROF-DETAIL.lanCal' | translate }}\"\n              color=\"primary1\"\n              mode=\"ios\"\n            >\n              <span class=\"title-cal\" slot=\"title\">{{ 'PROF-DETAIL.TitleCal' | translate }}</span>\n             <!--  <ion-buttons slot=\"buttons\">\n                <ion-button class=\"calInter-Bt\" color=\"blanco\" (click)=\"setBirthday()\">Save</ion-button>\n              </ion-buttons> -->\n            </ion-datetime>\n            <ion-button class=\"calInter-Bt\" color=\"blanco\"  color=\"primary1\" (click)=\"setBirthday()\">{{ 'PROF-DETAIL.btnSave' | translate }}</ion-button>\n          </ion-content>\n        </ng-template>\n      </ion-modal>\n\n      <ion-row>\n        <ion-button class=\"next-Bt\" color=\"primary1\" type=\"submit\">\n          {{ 'PROF-DETAIL.btnNext' | translate }}\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n</ion-content>\n";

/***/ }),

/***/ 36008:
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_profile-details_profile-details_module_ts.js.map