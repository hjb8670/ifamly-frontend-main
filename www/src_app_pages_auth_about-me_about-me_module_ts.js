(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_about-me_about-me_module_ts"],{

/***/ 14824:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/about-me/about-me-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutMePageRoutingModule: () => (/* binding */ AboutMePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _about_me_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-me.page */ 39008);




const routes = [{
  path: '',
  component: _about_me_page__WEBPACK_IMPORTED_MODULE_0__.AboutMePage
}];
let AboutMePageRoutingModule = class AboutMePageRoutingModule {};
AboutMePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AboutMePageRoutingModule);


/***/ }),

/***/ 40932:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/about-me/about-me.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutMePageModule: () => (/* binding */ AboutMePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _about_me_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-me-routing.module */ 14824);
/* harmony import */ var _about_me_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-me.page */ 39008);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let AboutMePageModule = class AboutMePageModule {};
AboutMePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _about_me_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutMePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_about_me_page__WEBPACK_IMPORTED_MODULE_1__.AboutMePage]
})], AboutMePageModule);


/***/ }),

/***/ 39008:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/about-me/about-me.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutMePage: () => (/* binding */ AboutMePage)
/* harmony export */ });
/* harmony import */ var C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _about_me_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-me.page.html?ngResource */ 39604);
/* harmony import */ var _about_me_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me.page.scss?ngResource */ 79328);
/* harmony import */ var _about_me_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_me_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_environments_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/constants */ 57724);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ 90628);












let AboutMePage = class AboutMePage {
  /* public validation_messages = {
    'exercise_S': [ { type: 'required', message: 'msgErrReqFName'} ]
  }; */
  constructor(formBuilder, activatedRoute, router, translate, userService, pickerController, uiService) {
    this.formBuilder = formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.translate = translate;
    this.userService = userService;
    this.pickerController = pickerController;
    this.uiService = uiService;
    this.lanCatalogo = 'EN';
    this.selectedHeight = '';
    this.phHeight = this.translate.instant('ABOUT-ME.Gral_ph');
    this.fHeight = '0';
    this.indexFHeight = 0;
    this.iHeight = '0';
    this.indexIHeight = 0;
    this.styleLabelData = 'dataLabel_gris';
    this.intHeight = [];
    this.decHeight = [];
    this.banEdit = false;
    this.customGenderOptions = {
      header: this.translate.instant('ABOUT-ME.Gender'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdGender'),
      translucent: true
    };
    this.customPronounOptions = {
      header: this.translate.instant('ABOUT-ME.Pronoun'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdPronoun'),
      translucent: true
    };
    this.customLanguajeOptions = {
      header: this.translate.instant('ABOUT-ME.Languaje'),
      cssClass: 'MultiSelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdLanguaje'),
      translucent: true
    };
    this.customExerciseOptions = {
      header: this.translate.instant('ABOUT-ME.Exercise'),
      cssClass: 'MultiSelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdExe'),
      translucent: true
    };
    this.customHobbyOptions = {
      header: this.translate.instant('ABOUT-ME.Hobby'),
      cssClass: 'MultiSelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdHobby'),
      translucent: true
    };
    this.customSingOptions = {
      header: this.translate.instant('ABOUT-ME.Sing'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdSing'),
      translucent: true
    };
    this.customEducationOptions = {
      header: this.translate.instant('ABOUT-ME.Education'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdEdu'),
      translucent: true
    };
    this.customPetOptions = {
      header: this.translate.instant('ABOUT-ME.Pet'),
      cssClass: 'MultiSelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdPet'),
      translucent: true
    };
    this.customValTraitOptions = {
      header: this.translate.instant('ABOUT-ME.valTrait'),
      cssClass: 'MultiSelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdValTrait'),
      translucent: true
    };
    this.customDrinkOptions = {
      header: this.translate.instant('ABOUT-ME.Drink'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdDrnk'),
      translucent: true
    };
    this.customSmokOptions = {
      header: this.translate.instant('ABOUT-ME.Smok'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdSmk'),
      translucent: true
    };
    this.customKidOptions = {
      header: this.translate.instant('ABOUT-ME.Kid'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdKid'),
      translucent: true
    };
    this.customDrugOptions = {
      header: this.translate.instant('ABOUT-ME.Drug'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdDrug'),
      translucent: true
    };
    this.customReligionOptions = {
      header: this.translate.instant('ABOUT-ME.Religion'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdRlgn'),
      translucent: true
    };
    this.customPoliticalOptions = {
      header: this.translate.instant('ABOUT-ME.Political'),
      cssClass: 'SelectControl',
      subHeader: this.translate.instant('ABOUT-ME.SubHdPolitical'),
      translucent: true
    };
    this.aboutMeForm = this.formBuilder.group({
      gender_S: [''],
      pronoun_S: [''],
      languaje_S: [''],
      exercise_S: [''],
      sing_S: [''],
      hobby_S: [''],
      education_S: [''],
      pet_S: [''],
      valTrait_S: [''],
      drink_S: [''],
      smok_S: [''],
      drug_S: [''],
      religion_S: [''],
      political_S: ['']
    });
    this.activatedRoute.queryParams.subscribe(params => {
      const nav = this.router.getCurrentNavigation();
      if (nav?.extras?.state) {
        const state = nav.extras.state;
        this.pageid = state.pageid;
        this.banEdit = state.banEdit;
        this.birth = state.birth;
        this.gender = state.gender;
        this.mail = state.mail;
        console.log('pageid:', this.pageid);
        this.setValidationRules(); // ✅ set form validation after pageid is known
      }
      this.principal();
    });
  }
  setValidationRules() {
    const optionalFields = ['pronoun_S', 'languaje_S', 'exercise_S', 'sing_S', 'hobby_S', 'education_S', 'pet_S', 'valTrait_S', 'drink_S', 'smok_S', 'drug_S', 'religion_S', 'political_S'];
    this.aboutMeForm.setValidators(this.atLeastNFieldsRequiredWithGenderCondition(optionalFields, 3, this.pageid));
  }
  atLeastNFieldsRequiredWithGenderCondition(fields, requiredCount, pageid) {
    return form => {
      let filled = 0;
      // Count how many of the optional fields are filled
      for (const field of fields) {
        const control = form.get(field);
        if (control && control.value && control.value.toString().trim() !== '') {
          filled++;
        }
      }
      // If not on 'regview', gender is not required; just check N other fields
      return filled >= requiredCount ? null : {
        atLeastNFieldsRequired: true
      };
    };
  }
  principal() {
    var _this = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.pageid !== 'regview') {
        _this.usrApp = yield _this.userService.getUserBasic('');
        console.log(_this.usrApp);
      }
      // this.uiService.showLoader();
      // this.usrApp = await this.userService.getUserBasic('');
      //this.exercises =  await this.loadCatalog(constants.catalogs.Ejercicio);
      if (_this.banEdit) {
        _this.fillForm();
      }
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Pronoun.toString(), _this.lanCatalogo).then(value => {
        _this.pronouns = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Lenguage.toString(), _this.lanCatalogo).then(value => {
        _this.languajes = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Ejercicio.toString(), _this.lanCatalogo).then(value => {
        _this.exercises = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Sing.toString(), _this.lanCatalogo).then(value => {
        _this.sings = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Hobbies.toString(), _this.lanCatalogo).then(value => {
        _this.hobbies = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Educacion.toString(), _this.lanCatalogo).then(value => {
        _this.educations = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Pets.toString(), _this.lanCatalogo).then(value => {
        _this.pets = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Values_Traits.toString(), _this.lanCatalogo).then(value => {
        _this.valTraits = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Bebe.toString(), _this.lanCatalogo).then(value => {
        _this.drinks = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Fuma.toString(), _this.lanCatalogo).then(value => {
        _this.smoks = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Hijos.toString(), _this.lanCatalogo).then(value => {
        _this.kids = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Drugs.toString(), _this.lanCatalogo).then(value => {
        _this.drugs = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Religion.toString(), _this.lanCatalogo).then(value => {
        _this.religions = value;
      });
      _this.userService.getCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Political.toString(), _this.lanCatalogo).then(value => {
        _this.politicals = value;
      });
      _this.uiService.hideLoader();
    })();
  }
  get gender_S() {
    return this.aboutMeForm.get('gender_S');
  }
  get pronoun_S() {
    return this.aboutMeForm.get('pronoun_S');
  }
  get languaje_S() {
    return this.aboutMeForm.get('languaje_S');
  }
  get exercise_S() {
    return this.aboutMeForm.get('exercise_S');
  }
  get sing_S() {
    return this.aboutMeForm.get('sing_S');
  }
  get hobby_S() {
    return this.aboutMeForm.get('hobby_S');
  }
  get education_S() {
    return this.aboutMeForm.get('education_S');
  }
  get pet_S() {
    return this.aboutMeForm.get('pet_S');
  }
  get valTrait_S() {
    return this.aboutMeForm.get('valTrait_S');
  }
  get drink_S() {
    return this.aboutMeForm.get('drink_S');
  }
  get smok_S() {
    return this.aboutMeForm.get('smok_S');
  }
  get kid_S() {
    return this.aboutMeForm.get('kid_S');
  }
  get drug_S() {
    return this.aboutMeForm.get('drug_S');
  }
  get religion_S() {
    return this.aboutMeForm.get('religion_S');
  }
  get political_S() {
    return this.aboutMeForm.get('political_S');
  }
  ngOnInit() {}
  ionViewDidEnter() {
    var _this2 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const user = this.userService.getUserr();
      // console.log(user);
      if (_this2.translate.currentLang == 'es') {
        _this2.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.es;
      } else {
        _this2.lanCatalogo = src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.languages.en;
      }
      _this2.loadHeightArrays();
    })();
  }
  fillForm() {
    console.log(this.usrApp.height);
    if (this.usrApp.height !== undefined && this.usrApp.height !== null) {
      this.fHeight = this.usrApp.height.split(".")[0];
      this.iHeight = this.usrApp.height.split(".")[1];
      this.selectedHeight = this.usrApp.height;
      this.phHeight = this.usrApp.height + ' ' + this.translate.instant('ABOUT-ME.Unit1');
      this.styleLabelData = 'dataLabel_negro';
      this.checkedHeightArrays();
    }
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Pronoun).then(value => {
      this.pronoun_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Educacion).then(value => {
      this.education_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Lenguage).then(value => {
      this.languaje_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Sing).then(value => {
      this.sing_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Ejercicio).then(value => {
      this.exercise_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Hobbies).then(value => {
      this.hobby_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Pets).then(value => {
      this.pet_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Values_Traits).then(value => {
      this.valTrait_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Bebe).then(value => {
      this.drink_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Fuma).then(value => {
      this.smok_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Drugs).then(value => {
      this.drug_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Religion).then(value => {
      this.religion_S.setValue(value);
    });
    this.userService.getXCatalogo(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Political).then(value => {
      this.political_S.setValue(value);
    });
    // this.gender_S.setValue(this.usrApp.gender);
  }
  loadHeightArrays() {
    //Foots
    let intIni = 1;
    let intFin = 7;
    //Metros
    console.log('LAN: ', this.translate.currentLang);
    if (this.translate.currentLang == 'es') {
      intIni = 0;
      intFin = 2;
    }
    for (let i = intIni; i <= intFin; i++) {
      this.intHeight.push({
        text: i.toString(),
        value: i.toString()
      });
    }
    for (let i = 0; i < 100; i++) {
      this.decHeight.push({
        text: ('00' + i).slice(-2),
        value: ('00' + i).slice(-2)
      });
    }
  }
  checkedHeightArrays() {
    //for (const obj of this.intHeight) {
    for (var i in this.intHeight) {
      if (this.intHeight[i].value === this.fHeight) {
        this.indexFHeight = Number(i);
        break;
      }
    }
    for (var i in this.decHeight) {
      if (this.decHeight[i].value === this.iHeight) {
        this.indexIHeight = Number(i);
        break;
      }
    }
  }
  presentPicker() {
    var _this3 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const picker = yield _this3.pickerController.create({
        cssClass: 'PickerControl',
        buttons: [{
          text: 'Confirm',
          handler: selected => {
            _this3.fHeight = selected.intHeight.value;
            _this3.iHeight = selected.decHeight.value;
            _this3.selectedHeight = _this3.fHeight + '.' + _this3.iHeight;
            _this3.phHeight = _this3.selectedHeight + ' ' + _this3.translate.instant('ABOUT-ME.Unit1');
            _this3.styleLabelData = 'dataLabel_negro';
            _this3.checkedHeightArrays();
          }
        }],
        columns: [{
          name: 'intHeight',
          selectedIndex: _this3.indexFHeight,
          suffix: _this3.translate.instant('ABOUT-ME.Unit1'),
          options: _this3.intHeight
        }, {
          name: 'decHeight',
          selectedIndex: _this3.indexIHeight,
          suffix: _this3.translate.instant('ABOUT-ME.Unit2'),
          options: _this3.decHeight
        }]
      });
      yield picker.present();
    })();
  }
  next(op) {
    var _this4 = this;
    return (0,C_Users_DELL_Downloads_ifamily_client_main_ifamily_client_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.aboutMeForm.invalid) {
        _this4.uiService.alertOK(_this4.translate.instant('EXP-DETAIL.PleaseFill'));
        return; // Don't proceed with save
      }
      if (op == 'next') {
        _this4.router.navigate(['edit-account']);
        let usr = {
          height: _this4.selectedHeight
        };
        console.log('HEIGHT: ', _this4.selectedHeight);
        console.log('PRONOUN: ', _this4.pronoun_S.value);
        console.log('LANGUAJE: ', _this4.languaje_S.value);
        console.log('EXERCISE: ', _this4.exercise_S.value);
        console.log('ZODIACO: ', _this4.sing_S.value);
        console.log('HOBBIES: ', _this4.hobby_S.value);
        console.log('EDUCATION: ', _this4.education_S.value);
        console.log('PETS: ', _this4.pet_S.value);
        console.log('DRINK: ', _this4.drink_S.value);
        console.log('SMOK: ', _this4.smok_S.value);
        console.log('KIDS: ', _this4.kid_S.value);
        console.log('DRUGS: ', _this4.drug_S.value);
        console.log('RELIGION: ', _this4.religion_S.value);
        _this4.uiService.showLoader();
        let res0 = true,
          res1 = true,
          res2 = true,
          res3 = true,
          res4 = true,
          res5 = true,
          res6 = true,
          res7 = true,
          res8 = true,
          res9 = true,
          res10 = true,
          res11 = true,
          res12 = true,
          res13 = true,
          res14 = true,
          res15 = true;
        res0 = yield _this4.userService.update({
          height: _this4.selectedHeight ?? ''
        });
        res2 = yield _this4.userService.setCatalogo(_this4.pronoun_S.value ?? '');
        res3 = yield _this4.userService.setCatalogoMultiple(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Lenguage, _this4.languaje_S.value ?? []);
        res4 = yield _this4.userService.setCatalogoMultiple(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Ejercicio, _this4.exercise_S.value ?? []);
        res5 = yield _this4.userService.setCatalogo(_this4.sing_S.value ?? '');
        res6 = yield _this4.userService.setCatalogoMultiple(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Hobbies, _this4.hobby_S.value ?? []);
        res7 = yield _this4.userService.setCatalogo(_this4.education_S.value ?? '');
        res8 = yield _this4.userService.setCatalogoMultiple(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Pets, _this4.pet_S.value ?? []);
        res9 = yield _this4.userService.setCatalogoMultiple(src_environments_constants__WEBPACK_IMPORTED_MODULE_3__.constants.catalogs.Values_Traits, _this4.valTrait_S.value ?? []);
        res10 = yield _this4.userService.setCatalogo(_this4.drink_S.value ?? '');
        res11 = yield _this4.userService.setCatalogo(_this4.smok_S.value ?? '');
        res12 = yield _this4.userService.setCatalogo(_this4.kid_S.value ?? '');
        res13 = yield _this4.userService.setCatalogo(_this4.drug_S.value ?? '');
        res14 = yield _this4.userService.setCatalogo(_this4.religion_S.value ?? '');
        res15 = yield _this4.userService.setCatalogo(_this4.political_S.value ?? '');
        _this4.uiService.hideLoader();
        if (!res0 || !res2 || !res3 || !res4 || !res5 || !res6 || !res7 || !res8 || !res9 || !res10 || !res11 || !res12 || !res13 || !res14) {
          //this.uiService.alertOK(this.translate.instant('EDIT-ACCOUNT.ErrorMsg'));
          return;
        }
      } else {
        // this.router.navigate(['location'], this.userService.navegationExtras);
        const user = {
          height: _this4.selectedHeight,
          pronoun: _this4.pronoun_S.value,
          languajes: _this4.languaje_S.value,
          exercise: _this4.exercise_S.value,
          sings: _this4.sing_S.value,
          hobbies: _this4.hobby_S.value,
          education: _this4.education_S.value,
          pets: _this4.pet_S.value,
          valTraits: _this4.valTrait_S.value,
          drinking: _this4.drink_S.value,
          smoking: _this4.smok_S.value,
          drugs: _this4.drug_S.value,
          religion: _this4.religion_S.value,
          political: _this4.political_S.value
        };
        // Save it somewhere accessible (like a service or localStorage)
        _this4.userService.setUserr(user);
        _this4.router.navigate(['i-am-alooking-for', {
          birth: _this4.birth,
          gender: _this4.gender,
          mail: _this4.mail
        }]);
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
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PickerController
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService
    }];
  }
};
AboutMePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-about-me',
  template: _about_me_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_about_me_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AboutMePage);


/***/ }),

/***/ 79328:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/about-me/about-me.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ion-back-button {
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
    margin-top: 20px;
} */
.skip-Bt {
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  text-transform: none;
}

.save-Bt {
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
  color: var(--ion-color-primary1);
  text-transform: none;
}

.text-h1 {
  font-family: "Sk-Modernist-Bold";
  font-size: 36px;
  margin-top: -10px;
  margin-bottom: 0px;
}

ion-item {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  --detail-icon-color: var(--ion-color-primary1);
}

.dataLabel_gris {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  --color: var(--ion-color-gris1);
  margin-right: 0px;
}

.dataLabel_negro {
  font-family: "Sk-Modernist-Regular";
  font-size: 16px;
  --color: var(--ion-color-negro);
  margin-right: 0px;
}

.iconEnd {
  width: 12px;
  height: 18px;
  opacity: 0.33;
}

ion-select {
  /* font-family: 'Sk-Modernist-Regular';
  font-size: 16px; */
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
  margin-top: 20px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/auth/about-me/about-me.page.scss"],"names":[],"mappings":"AAAA;;;;;GAAA;AAOA;EACI,gCAAA;EACA,eAAA;EACA,oBAAA;AAAJ;;AAIA;EACI,gCAAA;EACA,eAAA;EACA,gCAAA;EACA,oBAAA;AADJ;;AAIA;EAGI,gCAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,gCAAA;EACA,eAAA;EACA,8CAAA;AAHJ;;AAMA;EACI,mCAAA;EACA,eAAA;EACA,+BAAA;EACA,iBAAA;AAHJ;;AAMA;EACI,mCAAA;EACA,eAAA;EACA,+BAAA;EACA,iBAAA;AAHJ;;AAMA;EACI,WAAA;EACA,YAAA;EACA,aAAA;AAHJ;;AAOA;EACI;oBAAA;EAEA,kBAAA;AAJJ;;AAOA;EACI,wBAAA;AAJJ;;AAOA;EACI,cAAA;EACA,gCAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;AAJJ","sourcesContent":["/* ion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n} */\n\n.skip-Bt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    //margin-top: 160px;\n}\n\n.save-Bt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-primary1);\n    text-transform: none;\n}\n\n.text-h1 {\n    //display: flex;\n    //justify-content: center;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 36px;\n    margin-top: -10px;\n    margin-bottom: 0px;\n}\n\nion-item {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    --detail-icon-color: var(--ion-color-primary1);\n}\n\n.dataLabel_gris {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    --color: var(--ion-color-gris1);\n    margin-right: 0px;\n}\n\n.dataLabel_negro {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 16px;\n    --color: var(--ion-color-negro);\n    margin-right: 0px;\n}\n\n.iconEnd {\n    width: 12px;\n    height: 18px;\n    opacity: 0.33;\n    //opacity: 0.55;\n}\n\nion-select {\n    /* font-family: 'Sk-Modernist-Regular';\n    font-size: 16px; */\n    --padding-end: 0px;\n}\n\nion-select::part(icon) {\n    display: none !important;\n}\n\n.next-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 40px;\n    --border-radius: 10px;\n    --box-shadow:none;\n    margin-top: 20px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39604:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/about-me/about-me.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" *ngIf = !banEdit>\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"skip-Bt\" (click)=\"next('skip')\" defaultHref=\"profile-details\">{{ 'ABOUT-ME.AboutTxt' | translate }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\"  *ngIf = banEdit>\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n       <ion-icon name=\"chevron-back-outline\"  (click)=\"next('next')\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"save-Bt\" (click)=\"next('next')\">{{ 'ABOUT-ME.SaveTxt' | translate }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <form [formGroup]=\"aboutMeForm\" (ngSubmit)=\"next('skip')\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"text-h1\">{{ 'ABOUT-ME.Title' | translate }}</h1>\n        </ion-col>\n      </ion-row>\n\n      <ion-list style=\"margin-top: 30px;\">\n        <!-- <ion-item lines=\"none\" detail *ngIf=\"pageid == 'regview'\">\n          <ion-icon slot=\"start\" name=\"transgender-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Gender' | translate }}*</ion-label>\n          <ion-select formControlName=\"gender_S\" [interfaceOptions]=\"customGenderOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\"  cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of genders\">\n              <ion-select-option [value]=\"obj.name\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item> -->\n        <ion-item lines=\"none\" detail (click)=\"presentPicker()\">\n          <ion-icon slot=\"start\" name=\"arrow-up-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Height' | translate }}</ion-label>\n          <ion-label [class]=\"styleLabelData\" slot=\"end\" text-wrap>{{phHeight}}</ion-label>\n          <!-- <ion-input type=\"number\" placeholder=\"Awesome Input\"></ion-input> -->\n        </ion-item>\n\n        \n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"information-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Pronoun' | translate }}</ion-label>\n          <ion-select formControlName=\"pronoun_S\" [interfaceOptions]=\"customPronounOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of pronouns\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"school-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Education' | translate }}</ion-label>\n          <ion-select formControlName=\"education_S\" [interfaceOptions]=\"customEducationOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of educations\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"language-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Languaje' | translate }}</ion-label>\n          <ion-select formControlName=\"languaje_S\" [interfaceOptions]=\"customLanguajeOptions\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\" [multiple]=\"true\">\n            <li *ngFor=\"let obj of languajes\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"planet-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Sing' | translate }}</ion-label>\n          <ion-select formControlName=\"sing_S\" [interfaceOptions]=\"customSingOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of sings\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"football-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Exercise' | translate }}</ion-label>\n          <ion-select formControlName=\"exercise_S\" [interfaceOptions]=\"customExerciseOptions\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\" [multiple]=\"true\">\n            <li *ngFor=\"let obj of exercises\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"game-controller-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Hobby' | translate }}</ion-label>\n          <ion-select formControlName=\"hobby_S\" [interfaceOptions]=\"customHobbyOptions\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\" [multiple]=\"true\">\n            <li *ngFor=\"let obj of hobbies\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <!-- <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"happy-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Kid' | translate }}</ion-label>\n          <ion-select formControlName=\"kid_S\" [interfaceOptions]=\"customKidOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of kids\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item> -->\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"paw-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Pet' | translate }}</ion-label>\n          <ion-select formControlName=\"pet_S\" [interfaceOptions]=\"customPetOptions\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\" [multiple]=\"true\">\n            <li *ngFor=\"let obj of pets\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"shield-checkmark-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.valTrait' | translate }}</ion-label>\n          <ion-select formControlName=\"valTrait_S\" [interfaceOptions]=\"customValTraitOptions\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\" [multiple]=\"true\">\n            <li *ngFor=\"let obj of valTraits\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"wine-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Drink' | translate }}</ion-label>\n          <ion-select formControlName=\"drink_S\" [interfaceOptions]=\"customDrinkOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of drinks\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"color-wand-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Smok' | translate }}</ion-label>\n          <ion-select formControlName=\"smok_S\" [interfaceOptions]=\"customSmokOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of smoks\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"sparkles-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Drug' | translate }}</ion-label>\n          <ion-select formControlName=\"drug_S\" [interfaceOptions]=\"customDrugOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of drugs\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"infinite-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Religion' | translate }}</ion-label>\n          <ion-select formControlName=\"religion_S\" [interfaceOptions]=\"customReligionOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of religions\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" detail>\n          <ion-icon slot=\"start\" name=\"library-outline\"> </ion-icon>\n          <ion-label text-wrap>{{ 'ABOUT-ME.Political' | translate }}</ion-label>\n          <ion-select formControlName=\"political_S\" [interfaceOptions]=\"customPoliticalOptions\" interface=\"action-sheet\" placeholder=\"{{ 'ABOUT-ME.Gral_ph' | translate }}\" cancelText=\"Cancel\">\n            <li *ngFor=\"let obj of politicals\">\n              <ion-select-option [value]=\"obj.id\">{{ obj.name }}</ion-select-option>\n            </li>\n          </ion-select>\n        </ion-item>\n\n\n      </ion-list>\n\n      <ion-row *ngIf = !banEdit>\n        <ion-button class=\"next-Bt\" color=\"primary1\" type=\"submit\">\n          {{ 'ABOUT-ME.btnNext' | translate }}\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_about-me_about-me_module_ts.js.map