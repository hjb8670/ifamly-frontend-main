(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_experience_detail-exp_detail-exp_module_ts"],{

/***/ 76304:
/*!**************************************************************************!*\
  !*** ./src/app/pages/experience/detail-exp/detail-exp-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailExpPageRoutingModule: () => (/* binding */ DetailExpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _detail_exp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-exp.page */ 94968);




const routes = [{
  path: '',
  component: _detail_exp_page__WEBPACK_IMPORTED_MODULE_0__.DetailExpPage
}];
let DetailExpPageRoutingModule = class DetailExpPageRoutingModule {};
DetailExpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DetailExpPageRoutingModule);


/***/ }),

/***/ 52436:
/*!******************************************************************!*\
  !*** ./src/app/pages/experience/detail-exp/detail-exp.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailExpPageModule: () => (/* binding */ DetailExpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _detail_exp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-exp-routing.module */ 76304);
/* harmony import */ var _detail_exp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-exp.page */ 94968);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let DetailExpPageModule = class DetailExpPageModule {};
DetailExpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _detail_exp_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailExpPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_detail_exp_page__WEBPACK_IMPORTED_MODULE_1__.DetailExpPage]
})], DetailExpPageModule);


/***/ }),

/***/ 94968:
/*!****************************************************************!*\
  !*** ./src/app/pages/experience/detail-exp/detail-exp.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailExpPage: () => (/* binding */ DetailExpPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _detail_exp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-exp.page.html?ngResource */ 49696);
/* harmony import */ var _detail_exp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-exp.page.scss?ngResource */ 34752);
/* harmony import */ var _detail_exp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_detail_exp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/experience.service */ 29340);
/* harmony import */ var _capacitor_community_photoviewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor-community/photoviewer */ 68308);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 27832);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ui.service */ 44136);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ 90628);
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/match.service */ 5876);
/* harmony import */ var _match_detail_match_menu_popover_detail_match_menu_popover_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../match/detail-match-menu-popover/detail-match-menu-popover.page */ 76244);
/* harmony import */ var src_app_services_talk_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/talk.service */ 68648);












// import { User } from 'talkjs/all';



let DetailExpPage = class DetailExpPage {
  constructor(activatedRoute, router, popoverCtrl, translate, animationCtrl, experienceService, userService, uiService, matchService, platform, talkService) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.popoverCtrl = popoverCtrl;
    this.translate = translate;
    this.animationCtrl = animationCtrl;
    this.experienceService = experienceService;
    this.userService = userService;
    this.uiService = uiService;
    this.matchService = matchService;
    this.platform = platform;
    this.talkService = talkService;
    this.expId = '';
    this.imgCover = '../../../assets/icon/30-Default_no-image.jpeg';
    this.isOwner = false; //Se actualiza de servicio
    this.isVIPExp = false; //Se actualiza de servicio
    this.iAmVIP = false; //Se actualiza de servicio
    this.interestedExp = false; //Se actualiza de servicio
    this.galImgs = [];
    this.uniDistancia = 'mi';
    this.showMoreDes = false;
    this.textDes = '';
    this.showAboutMe = false;
    this.textAboutMe = '';
    this.interestedUsrList = [];
    this.imgUsers = [];
    this.noPendingReq = 0;
    this.noRegistered = 0;
    this.pendingUsr = 0; //Esta pendiente de aceptar
    this.allowUsr = 1; //Esta aceptado
    this.denyUsr = 2; //Esta denegado
    //public registeredUsr = 3;
    this.isOpen = false;
    this.enterAnimation = baseEl => {
      const root = baseEl.shadowRoot;
      const backdropAnimation = this.animationCtrl.create().addElement(root.querySelector('ion-backdrop')).fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
      const wrapperAnimation = this.animationCtrl.create().addElement(root.querySelector('.modal-wrapper')).keyframes([{
        offset: 0,
        opacity: '0',
        transform: 'scale(0)'
      }, {
        offset: 1,
        opacity: '0.99',
        transform: 'scale(1)'
      }]);
      return this.animationCtrl.create().addElement(baseEl).easing('ease-out').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    this.leaveAnimation = baseEl => {
      return this.enterAnimation(baseEl).direction('reverse');
    };
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.expId = this.router.getCurrentNavigation().extras.state.expId;
        this.isOwner = this.router.getCurrentNavigation().extras.state.isMyExp;
      }
    });
  }
  ngOnInit() {}
  openMap(lat, long) {
    const url = `https://www.google.com/maps?q=${lat},${long}`;
    window.open(url, '_blank');
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.uiService.showLoader();
      if (_this.translate.currentLang == 'es') {
        _this.uniDistancia = 'Km';
      } else {
        _this.uniDistancia = 'mi';
      }
      _this.experience = yield _this.experienceService.getExperiencesById(Number(_this.expId));
      _this.setAvatarImg();
      _this.textDes = _this.experience?.description || '';
      console.log('EXP DETAIL: ', _this.experience);
      _this.isOpen = _this.experience?.isOpen || false;
      console.log('IS OPEN: ', _this.isOpen);
      if (_this.isOwner) {
        _this.interestedUsrList = yield _this.experienceService.getAllUsers(_this.experience.experienceId.toString());
        console.log('INTERESTED USERS: ', _this.interestedUsrList);
        for (let index = 0; index < _this.interestedUsrList.length; index++) {
          const user = _this.interestedUsrList[index];
          let datos = yield _this.userService.getUser(user.personId.toString());
          user.name = datos.firstName.concat(" " + datos.lastName);
          user.location = datos.location;
          user.rateUserExperiences = datos.rateUserExperiences;
          _this.imgUsers[index] = '../../../assets/icon/30-Default_no-image.jpeg';
          if (user.status !== 2) {
            let resImg = yield _this.matchService.getIMGS(user.personId.toString());
            for (const img of resImg) {
              if (img.avatar) {
                _this.imgUsers[index] = img.multimediaUrl;
              }
            }
          }
        }
        _this.noPendingReq = _this.countUsrList(_this.pendingUsr);
        _this.noRegistered = _this.countUsrList(_this.allowUsr);
      } else {
        //this.ownerExp = await this.experienceService.getOwnerExperiences(this.experience.ownerPersonId);
        _this.ownerExp = yield _this.userService.getUserOnly(_this.experience.ownerPersonId.toString());
        _this.textAboutMe = _this.ownerExp?.aboutMe || '';
        _this.interestedExp = yield _this.experienceService.checkedRegisterGuest(_this.expId);
        console.log('OWNER: ', _this.ownerExp);
        console.log('INTERESTED: ', _this.interestedExp);
        _this.imgUsers[0] = '../../../assets/icon/30-Default_no-image.jpeg';
        let resImg = yield _this.matchService.getIMGSOfPerson(_this.experience.ownerPersonId.toString());
        for (const img of resImg) {
          if (img.avatar) {
            _this.imgUsers[0] = img.multimediaUrl;
          }
        }
      }
      _this.uiService.hideLoader();
    })();
  }
  editExp() {
    let navegationExtras = {
      state: {
        experience: this.experience,
        isEdit: true
      }
    };
    this.router.navigate(['new-edit-exp'], navegationExtras);
  }
  trimString(string, length) {
    return string.length > length ? string.substring(0, length) + '...' : string;
  }
  setAvatarImg() {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.galleryImgs = yield _this2.experienceService.getIMGS(_this2.expId);
      let i = 0;
      for (const img of _this2.galleryImgs) {
        if (!img.avatar) {
          _this2.galImgs[i] = '../../../assets/icon/30-Default_no-image.jpeg';
          _this2.galImgs[i++] = img.multimediaUrl;
        } else {
          _this2.imgCover = img.multimediaUrl;
        }
      }
    })();
  }
  openPhoto(index) {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = [{
        url: _this3.galImgs[index]
      }];
      const opImg = {
        share: false,
        title: false,
        transformer: 'zoom'
      };
      const optPhoto = {
        images: img,
        mode: 'one',
        options: opImg
      };
      yield _this3.modalPhoto.present();
      const res = yield _capacitor_community_photoviewer__WEBPACK_IMPORTED_MODULE_4__.PhotoViewer.show(optPhoto);
      _this3.modalPhoto.dismiss();
    })();
  }
  doInterest() {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('INTERESTED');
      _this4.uiService.showLoader();
      if (_this4.isVIPExp) {
        if (_this4.iAmVIP) {
          console.log('INTERESADO-VIP');
          const res = yield _this4.experienceService.setInterestExperiences(Number(_this4.expId));
          console.log(res);
          if (res == 'Interest set') {
            _this4.interestedExp = true;
            _this4.uiService.alertOK(_this4.translate.instant('EXP-DETAIL.sucInterest') + _this4.experience?.title);
          } else {
            _this4.uiService.alertOK(_this4.translate.instant('EXP-DETAIL.errInterest'));
          }
        } else {
          //AQUI VA A LA TIENDA PARA ADQUIRIR MEMBRESIA 
          console.log('PURCHASING');
        }
      } else {
        console.log('INTERESADO-NO-VIP');
        const res = yield _this4.experienceService.setInterestExperiences(Number(_this4.expId));
        if (res == 'Exito') {
          _this4.interestedExp = true;
          _this4.uiService.alertOK(_this4.translate.instant('EXP-DETAIL.sucInterest') + _this4.experience?.title);
        } else {
          _this4.uiService.alertOK(_this4.translate.instant('EXP-DETAIL.errInterest'));
        }
      }
      _this4.uiService.hideLoader();
    })();
  }
  doUnInterest() {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.uiService.showLoader();
      const res = yield _this5.experienceService.deleteInterestExperiences(Number(_this5.expId));
      _this5.uiService.hideLoader();
      if (res == 'Exito') {
        _this5.interestedExp = false;
        _this5.uiService.alertOK(_this5.translate.instant('EXP-DETAIL.sucUnInterest') + _this5.experience?.title);
      } else {
        _this5.uiService.alertOK(_this5.translate.instant('EXP-DETAIL.errUnInterest'));
      }
    })();
  }
  acceptPeople(personId, status, cont) {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.uiService.showLoader();
      let resp = yield _this6.experienceService.updateGuest(personId.toString(), _this6.experience.experienceId.toString(), status.toString());
      _this6.uiService.hideLoader();
      if (resp) {
        //Se cambio el estado y se actualiza la tabla y los contadores
        _this6.interestedUsrList[cont].status = status;
        _this6.noPendingReq = _this6.countUsrList(_this6.pendingUsr);
        _this6.noRegistered = _this6.countUsrList(_this6.allowUsr);
      }
    })();
  }
  countUsrList(op) {
    let count = 0;
    for (let usr of this.interestedUsrList) {
      if (usr.status == op) {
        count++;
      }
    }
    return count;
  }
  cancelExperience() {
    var _this7 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resp = false;
      if (_this7.expId !== undefined && _this7.expId !== null) {
        _this7.uiService.showLoader();
        resp = yield _this7.experienceService.deleteExperience(_this7.expId);
        _this7.uiService.hideLoader();
      }
      let mensaje = 'EXP-DETAIL.cancel'.concat(resp ? '' : 'Error');
      yield _this7.uiService.alertOK_CANCEL(_this7.translate.instant(mensaje));
      let navegationExtras = {
        state: {
          isMyExp: true
        }
      };
      _this7.router.navigate(['/main/tabs/my-experience'], navegationExtras);
    })();
  }
  openMenuPopover(ev) {
    var _this8 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('OWNER POP-UP: ', _this8.ownerExp);
      ev.stopPropagation();
      const popover = yield _this8.popoverCtrl.create({
        component: _match_detail_match_menu_popover_detail_match_menu_popover_page__WEBPACK_IMPORTED_MODULE_8__.DetailMatchMenuPopoverPage,
        event: ev,
        componentProps: {
          typeBlock: 1,
          matchId: null,
          personId: _this8.ownerExp.personId,
          experienceId: _this8.expId
        }
      });
      yield popover.present();
    })();
  }
  selectPerson(ustInt, img_usr) {
    console.log('SELECTED INTERESTED PERSON: ', ustInt);
    //Validacion para sacar al otro usuario del match (matchId esta mal estructurado es personId)
    let navegationExtras = {
      state: {
        typePerson: 3,
        otherPerson: ustInt.personId,
        //(match.personLiked.toString() == this.user.personId ? match.personLikes : match.personLiked),
        matchId: ustInt.personId,
        image: img_usr
      }
    };
    this.router.navigate(['detail-match'], navegationExtras);
  }
  leaveRating() {
    let navegationExtras = {
      state: {
        idExperience: this.experience.experienceId,
        nameExp: this.experience.title,
        fechaExp: this.experience.dateTime,
        image: this.imgCover,
        idHost: this.ownerExp.personId,
        nameHost: this.ownerExp.firstName,
        lastNameHost: this.ownerExp.lastName,
        imageHost: this.imgUsers[0]
      }
    };
    this.router.navigate(['leave-ratings-experience'], navegationExtras);
  }
  openRatingExperiences() {
    if (this.ownerExp.rateExperiences == null || this.ownerExp.rateExperiences == 0) {
      // this.uiService.alertOK(this.translate.instant('EXP-DETAIL.noRate'));
      return;
    }
    let navegationExtras = {
      state: {
        idHost: this.ownerExp.personId,
        nameHost: this.ownerExp.firstName,
        lastNameHost: this.ownerExp.lastName,
        imageHost: this.imgUsers[0]
      }
    };
    this.router.navigate(['ratings-experience'], navegationExtras);
  }
  leaveRatingAssistan(idAssistant, nameAssistant, imageAssistant) {
    let navegationExtras = {
      state: {
        idAssistant,
        nameAssistant,
        imageAssistant,
        idExperience: this.experience.experienceId
      }
    };
    this.router.navigate(['leave-ratings-experience-assistant'], navegationExtras);
  }
  openRatingUser(idAssistant, nameAssistant, rateAssistant, imageAssistant) {
    if (rateAssistant == null || rateAssistant == 0) {
      // this.uiService.alertOK(this.translate.instant('EXP-DETAIL.noRate'));
      return;
    }
    let navegationExtras = {
      state: {
        idAssistant,
        nameAssistant,
        imageAssistant,
        idExperience: this.experience.experienceId
      }
    };
    this.router.navigate(['ratings-experience-assistant'], navegationExtras);
  }
  chatMatch(event, user) {
    var _this9 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.stopPropagation();
      console.log('user', user);
      _this9.uiService.showLoader();
      let resp = yield _this9.talkService.updateConversation(user.experienceId.toString());
      debugger;
      _this9.uiService.hideLoader();
      if (Object.keys(resp).length === 0) {
        console.log("Ocurrio un error alguno de los usuarios no esta registrado en chat.");
        return;
      }
      let navegationExtras = {
        state: {
          idConversation: resp["idConversation"]
        }
      };
      _this9.router.navigate(['main/tabs/message'], navegationExtras);
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController
    }, {
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AnimationController
    }, {
      type: _services_experience_service__WEBPACK_IMPORTED_MODULE_3__.ExperienceService
    }, {
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
    }, {
      type: _services_ui_service__WEBPACK_IMPORTED_MODULE_5__.UiService
    }, {
      type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_7__.MatchService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
    }, {
      type: src_app_services_talk_service__WEBPACK_IMPORTED_MODULE_9__.TalkService
    }];
  }
  static {
    this.propDecorators = {
      modalPhoto: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
        args: ['mPhoto']
      }]
    };
  }
};
DetailExpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-detail-exp',
  template: _detail_exp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_detail_exp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DetailExpPage);


/***/ }),

/***/ 34752:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/experience/detail-exp/detail-exp.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-header {
  height: 32%;
}

.btnBack {
  font-size: 18px;
  background: var(--ion-color-blanco);
  height: 48px;
  width: 50px;
  color: var(--ion-color-negro);
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  margin-top: 0px;
}

ion-toolbar {
  --background:transparent;
}

.menuBtn {
  font-size: 18px;
  background: var(--ion-color-blanco);
  height: 48px;
  width: 50px;
  color: var(--ion-color-negro);
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  margin-top: 0px;
  margin-left: 0px;
}

.menuIcon {
  margin-left: auto;
  margin-right: auto;
}

.imgCover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contenedor-img {
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  align-content: center;
  top: 0;
  left: 0;
}

ion-back-button {
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  margin-top: 20px;
}

.nameExp {
  font-family: "Sk-Modernist-Bold";
  font-size: 20px;
  color: var(--ion-color-negro);
  margin: 0;
}

.countryExp {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin-top: 5px;
}

.btnEdit {
  display: block;
  font-family: "Sk-Modernist-Bold";
  font-size: 12px;
  text-transform: none;
  color: var(--ion-color-gris1);
  width: 85%;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  margin-top: 0;
  margin-right: 0;
  margin-left: auto;
  margin-bottom: 0;
}

.imgEdit {
  width: 18px;
  margin-top: 2px;
  margin-right: 4px;
}

.locationTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin: 0;
}

.dir1Exp {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin-top: 5px;
  margin-bottom: 0px;
}

.dir2Exp {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin-top: 1px;
}

.contPosition {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--ion-color-primary1);
  width: 95%;
  height: 35px;
  border-style: solid;
  border-color: var(--ion-color-primary1);
  border-width: 1px;
  border-radius: 5px;
  margin-right: 0;
  margin-left: auto;
}

.imgPosition {
  width: 12px;
  margin-right: 4px;
}

.txtPosition {
  font-family: "Sk-Modernist-Bold";
  font-size: 12px;
  color: var(--ion-color-blanco);
}

.pExp {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin-top: 5px;
  margin-bottom: 5px;
}

.DesA {
  font-family: "Sk-Modernist-Bold";
  font-size: 14px;
  color: var(--ion-color-primary1);
  margin-top: 5px;
}

.lineHR {
  height: 1px;
  width: 100%;
  background: var(--ion-color-negro);
  margin-top: 10px;
}

.contPeople {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.imgPeople {
  width: 24px;
  margin-right: 10px;
}

.avatarOwner {
  width: 65px;
  height: 65px;
}
.avatarOwner img {
  object-fit: cover;
  object-position: top;
}

.nameOwner {
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
  color: var(--ion-color-negro);
  margin-left: 10px;
}

.contRating {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
}

.imgStart {
  width: 13px;
  margin-right: 5px;
}

.txtRating {
  font-family: "Sk-Modernist-Regular";
  font-size: 12px;
  color: var(--ion-color-gris1);
}

.aboutTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-top: 10px;
  margin-bottom: 5px;
}

.hostTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-top: 0;
  margin-bottom: 5px;
}

.imgHost1 {
  width: 100%;
  height: 204px;
  border-radius: 15px;
  padding-right: 5px;
}

.imgHost2 {
  width: 100%;
  height: 100px;
  border-radius: 15px;
  padding-left: 5px;
  padding-bottom: 5px;
}

.imgHost3 {
  width: 100%;
  height: 100px;
  border-radius: 15px;
  padding-top: 5px;
  padding-left: 5px;
}

.intersted-Bt {
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

.imgVIP {
  width: 30px;
  margin-left: 10px;
}

.modalPhoto {
  --width: 100%;
  --height: 100%;
}

.pendingReqTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin: 0;
}

.listPeopleLst {
  margin-top: 5px;
}

.itemPeopleLst {
  --padding-start: 5px;
  --padding-end:5px;
  --inner-padding-end:0;
  margin-bottom: 5px;
}

.imgPeopleLst {
  width: 60px;
  height: 60px;
  border-style: solid;
  border-color: var(--ion-color-gris1);
  border-width: 1px;
  border-radius: 10px;
  margin: 0;
  object-fit: cover;
  object-position: top;
}

.textPeopleLst {
  margin-left: 5px;
}

.namePeopleLst {
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
  color: var(--ion-color-negro);
  margin: 0;
}

.locPeopleLst {
  font-family: "Sk-Modernist-Regular";
  font-size: 14px;
  color: var(--ion-color-negro);
  margin: 0;
}

.btnPeopleLst {
  font-family: "Sk-Modernist-Bold";
  font-size: 12px;
  text-transform: none;
  width: 20%;
  height: 25px;
  --border-radius: 5px;
  --box-shadow:none;
  margin: 0 0 0 5px;
}

.btnLeaveRating {
  font-family: "Sk-Modernist-Bold";
  font-size: 10px;
  text-transform: none;
  width: 35%;
  height: 25px;
  --border-radius: 5px;
  --box-shadow:none;
  margin: 0 0 0 5px;
}

.linePeople {
  height: 0.5px;
  width: 100%;
  background: var(--ion-color-gris1);
  margin-top: 10px;
  margin-bottom: 10px;
}

.lineDivPeople {
  height: 1px;
  width: 100%;
  background: var(--ion-color-negro);
  margin-top: 15px;
  margin-bottom: 15px;
}

.defaultImg {
  object-position: center;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/experience/detail-exp/detail-exp.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/experience/detail-exp/detail-exp.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-header {\n    //background: url('https://picsum.photos/200/300?random=2') no-repeat center/cover fixed;\n    // height: 40%;\n    height: 32%;\n}\n\n//Se veia achaparrada la imagen (Quitar el div de la image)\n// .imgCover {\n//     position: fixed;\n//     width: 100%;\n//     height: 40%;\n//     margin-left: -16px;\n//     margin-top: -16px;\n// }\n\n.btnBack {\n    font-size: 18px;\n    background: var(--ion-color-blanco);\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-negro);\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 0px;\n    \n}\nion-toolbar{\n    --background:transparent;\n}\n\n.menuBtn {\n    font-size: 18px;\n    background: var(--ion-color-blanco);\n    height: 48px;\n    width: 50px;\n    color: var(--ion-color-negro);\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 0px;\n    margin-left: 0px;\n  \n}\n\n.menuIcon {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.imgCover {\n    // max-width: 100%;\n    // max-height: 100%;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.contenedor-img{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    text-align: center;\n    align-content: center;\n    top: 0;\n    left: 0;\n}\n\nion-back-button {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 15px;\n    margin-top: 20px;\n}\n\n.nameExp {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 20px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\n.countryExp {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin-top: 5px;\n    //margin: 0;\n}\n\n.btnEdit {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 12px;\n    text-transform: none;\n    color: var(--ion-color-gris1);\n    width: 85%;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 5px;\n    margin-top: 0;\n    margin-right: 0;\n    margin-left: auto;\n    margin-bottom: 0;\n}\n\n.imgEdit {\n    width: 18px;\n    margin-top: 2px;\n    margin-right: 4px;\n}\n\n.locationTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\n.dir1Exp {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin-top: 5px;\n    margin-bottom: 0px;\n}\n\n.dir2Exp {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin-top: 1px;\n}\n\n.contPosition {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: var(--ion-color-primary1);\n    width: 95%;\n    height: 35px;\n    border-style: solid;\n    border-color: var(--ion-color-primary1);;\n    border-width: 1px;\n    border-radius: 5px;\n    margin-right: 0;\n    margin-left: auto;\n}\n\n.imgPosition {\n    width: 12px;\n    margin-right: 4px;\n}\n\n.txtPosition {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 12px;\n    color: var(--ion-color-blanco);\n}\n\n.pExp {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.DesA {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    color: var(--ion-color-primary1);\n    margin-top: 5px;\n}\n\n.lineHR {\n    height: 1px;\n    width: 100%;\n    background: var(--ion-color-negro);\n    margin-top: 10px;\n}\n\n.contPeople {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.imgPeople {\n    width: 24px;\n    margin-right: 10px;\n}\n\n.avatarOwner {\n    width: 65px;\n    height: 65px;\n\n    img{\n        object-fit: cover;\n        object-position: top;\n    }\n    \n}\n\n.nameOwner {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-negro);\n    margin-left: 10px;\n}\n\n.contRating {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin-top: 5px;\n}\n\n.imgStart {\n    width: 13px;\n    margin-right: 5px;\n}\n\n.txtRating {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 12px;\n    color: var(--ion-color-gris1);\n}\n\n.aboutTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-top: 10px;\n    margin-bottom: 5px;\n}\n\n.hostTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n\n.imgHost1 {\n    width: 100%;\n    height: 204px;\n    border-radius: 15px;\n    padding-right: 5px;\n}\n\n.imgHost2 {\n    width: 100%;\n    height: 100px;\n    border-radius: 15px;\n    padding-left: 5px;\n    padding-bottom: 5px;\n}\n\n.imgHost3 {\n    width: 100%;\n    height: 100px;\n    border-radius: 15px;\n    padding-top: 5px;\n    padding-left: 5px;\n}\n\n.intersted-Bt {\n    display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    text-transform: none;\n    width: 100%;\n    height: 50px;\n    --border-radius: 15px;\n    --box-shadow:none;\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n\n.imgVIP {\n    width: 30px;\n    margin-left: 10px;\n}\n\n.modalPhoto {\n    --width: 100%;\n    --height: 100%;\n}\n\n.pendingReqTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\n.listPeopleLst {\n    margin-top: 5px;\n}\n\n.itemPeopleLst {\n    --padding-start: 5px;\n    --padding-end:5px;\n    --inner-padding-end:0;\n    margin-bottom: 5px;\n}\n\n.imgPeopleLst {\n    width: 60px;\n    height: 60px;\n    border-style: solid;\n    border-color: var(--ion-color-gris1);\n    border-width: 1px;\n    border-radius: 10px;\n    margin: 0;\n    object-fit: cover;\n    object-position: top;\n}\n\n.textPeopleLst {\n    margin-left: 5px;\n}\n\n.namePeopleLst {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\n.locPeopleLst {\n    font-family: 'Sk-Modernist-Regular';\n    font-size: 14px;\n    color: var(--ion-color-negro);\n    margin: 0;\n}\n\n.btnPeopleLst {\n    //display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 12px;\n    text-transform: none;\n    width: 20%;\n    height: 25px;\n    --border-radius: 5px;\n    --box-shadow:none;\n    margin: 0 0 0 5px;\n}\n\n.btnLeaveRating {\n    //display: block;\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 10px;\n    text-transform: none;\n    width: 35%;\n    height: 25px;\n    --border-radius: 5px;\n    --box-shadow:none;\n    margin: 0 0 0 5px;\n}\n\n.linePeople {\n    height: 0.5px;\n    width: 100%;\n    background: var(--ion-color-gris1);\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.lineDivPeople {\n    height: 1px;\n    width: 100%;\n    background: var(--ion-color-negro);\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n.defaultImg{\n    object-position: center;\n}","ion-header {\n  height: 32%;\n}\n\n.btnBack {\n  font-size: 18px;\n  background: var(--ion-color-blanco);\n  height: 48px;\n  width: 50px;\n  color: var(--ion-color-negro);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 0px;\n}\n\nion-toolbar {\n  --background:transparent;\n}\n\n.menuBtn {\n  font-size: 18px;\n  background: var(--ion-color-blanco);\n  height: 48px;\n  width: 50px;\n  color: var(--ion-color-negro);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 0px;\n  margin-left: 0px;\n}\n\n.menuIcon {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.imgCover {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.contenedor-img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  text-align: center;\n  align-content: center;\n  top: 0;\n  left: 0;\n}\n\nion-back-button {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 15px;\n  margin-top: 20px;\n}\n\n.nameExp {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 20px;\n  color: var(--ion-color-negro);\n  margin: 0;\n}\n\n.countryExp {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  margin-top: 5px;\n}\n\n.btnEdit {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 12px;\n  text-transform: none;\n  color: var(--ion-color-gris1);\n  width: 85%;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: auto;\n  margin-bottom: 0;\n}\n\n.imgEdit {\n  width: 18px;\n  margin-top: 2px;\n  margin-right: 4px;\n}\n\n.locationTitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  margin: 0;\n}\n\n.dir1Exp {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n\n.dir2Exp {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  margin-top: 1px;\n}\n\n.contPosition {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--ion-color-primary1);\n  width: 95%;\n  height: 35px;\n  border-style: solid;\n  border-color: var(--ion-color-primary1);\n  border-width: 1px;\n  border-radius: 5px;\n  margin-right: 0;\n  margin-left: auto;\n}\n\n.imgPosition {\n  width: 12px;\n  margin-right: 4px;\n}\n\n.txtPosition {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 12px;\n  color: var(--ion-color-blanco);\n}\n\n.pExp {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.DesA {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 14px;\n  color: var(--ion-color-primary1);\n  margin-top: 5px;\n}\n\n.lineHR {\n  height: 1px;\n  width: 100%;\n  background: var(--ion-color-negro);\n  margin-top: 10px;\n}\n\n.contPeople {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.imgPeople {\n  width: 24px;\n  margin-right: 10px;\n}\n\n.avatarOwner {\n  width: 65px;\n  height: 65px;\n}\n.avatarOwner img {\n  object-fit: cover;\n  object-position: top;\n}\n\n.nameOwner {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  color: var(--ion-color-negro);\n  margin-left: 10px;\n}\n\n.contRating {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 5px;\n}\n\n.imgStart {\n  width: 13px;\n  margin-right: 5px;\n}\n\n.txtRating {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 12px;\n  color: var(--ion-color-gris1);\n}\n\n.aboutTitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n.hostTitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.imgHost1 {\n  width: 100%;\n  height: 204px;\n  border-radius: 15px;\n  padding-right: 5px;\n}\n\n.imgHost2 {\n  width: 100%;\n  height: 100px;\n  border-radius: 15px;\n  padding-left: 5px;\n  padding-bottom: 5px;\n}\n\n.imgHost3 {\n  width: 100%;\n  height: 100px;\n  border-radius: 15px;\n  padding-top: 5px;\n  padding-left: 5px;\n}\n\n.intersted-Bt {\n  display: block;\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  text-transform: none;\n  width: 100%;\n  height: 50px;\n  --border-radius: 15px;\n  --box-shadow:none;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n.imgVIP {\n  width: 30px;\n  margin-left: 10px;\n}\n\n.modalPhoto {\n  --width: 100%;\n  --height: 100%;\n}\n\n.pendingReqTitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  margin: 0;\n}\n\n.listPeopleLst {\n  margin-top: 5px;\n}\n\n.itemPeopleLst {\n  --padding-start: 5px;\n  --padding-end:5px;\n  --inner-padding-end:0;\n  margin-bottom: 5px;\n}\n\n.imgPeopleLst {\n  width: 60px;\n  height: 60px;\n  border-style: solid;\n  border-color: var(--ion-color-gris1);\n  border-width: 1px;\n  border-radius: 10px;\n  margin: 0;\n  object-fit: cover;\n  object-position: top;\n}\n\n.textPeopleLst {\n  margin-left: 5px;\n}\n\n.namePeopleLst {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n  color: var(--ion-color-negro);\n  margin: 0;\n}\n\n.locPeopleLst {\n  font-family: \"Sk-Modernist-Regular\";\n  font-size: 14px;\n  color: var(--ion-color-negro);\n  margin: 0;\n}\n\n.btnPeopleLst {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 12px;\n  text-transform: none;\n  width: 20%;\n  height: 25px;\n  --border-radius: 5px;\n  --box-shadow:none;\n  margin: 0 0 0 5px;\n}\n\n.btnLeaveRating {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 10px;\n  text-transform: none;\n  width: 35%;\n  height: 25px;\n  --border-radius: 5px;\n  --box-shadow:none;\n  margin: 0 0 0 5px;\n}\n\n.linePeople {\n  height: 0.5px;\n  width: 100%;\n  background: var(--ion-color-gris1);\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.lineDivPeople {\n  height: 1px;\n  width: 100%;\n  background: var(--ion-color-negro);\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.defaultImg {\n  object-position: center;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 49696:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/experience/detail-exp/detail-exp.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <div class=\"contenedor-img\">\n    <img class=\"imgCover ion-no-padding\" src={{imgCover}}>\n  </div>\n\n  <ion-toolbar color=\"rgba(255,255,255,0)\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"btnBack\" icon=\"chevron-back\" defaultHref=\"main/tabs/experience\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons class=\"menuBtn\" slot=\"end\" (click)=\"openMenuPopover( $event )\">\n      <ion-icon class=\"menuIcon\" name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"blanco\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"nameExp\">{{ experience?.title }}</p>\n        <p class=\"countryExp\">{{ experience?.location.country }}</p>\n      </ion-col>\n      <ion-col size=\"3\" *ngIf=\"isOwner\" >\n        <ion-button class=\"btnEdit\" fill=\"none\" (click)=\"editExp()\">\n          <!-- <ion-icon slot=\"start\" name=\"pencil-outline\"></ion-icon> -->\n          <img class=\"imgEdit\" src=\"../../../../assets/icon/13-Edit_pen.png\">\n          {{ 'EXP-DETAIL.EditBtn' | translate }}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"9\">\n        <p class=\"locationTitle\">{{ 'EXP-DETAIL.LocTitle' | translate }}</p>\n        <p class=\"dir1Exp\">{{ experience?.location.address }} {{ experience?.location.city }}</p>\n        <p class=\"dir2Exp\">{{ experience?.location.state }} {{ experience?.location.country }}</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div class=\"contPosition\" (click)=\"openMap(experience?.location.latitud,experience?.location.longitud)\">\n          <img class=\"imgPosition\" src=\"../../../../assets/icon/14-Location_white.png\">\n          <ion-label class=\"txtPosition\">{{ experience?.location.radio }} {{ uniDistancia }}</ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p class=\"locationTitle\">{{ 'EXP-DETAIL.DTTitle' | translate }}</p>\n       <p class=\"pExp\">{{ experience?.dateTime | date:'MMMM d, y':'':'en-US' }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p class=\"locationTitle\">{{ 'EXP-DETAIL.DesTitle' | translate }}</p>\n        <!-- <p class=\"dir1Exp\">{{ experience?.description }}</p>  -->\n        <p class=\"pExp\" *ngIf=\"!showMoreDes\">{{ trimString(textDes,100) }}</p>\n        <p class=\"pExp\" *ngIf=\"showMoreDes\">{{ textDes }}</p>\n        <a class=\"DesA\" (click)=\"showMoreDes = !showMoreDes\" *ngIf=\"textDes.length > 100\">{{ 'EXP-DETAIL.txtRead' | translate }} <span [innerHtml]=\"(showMoreDes ? 'EXP-DETAIL.txtLess' : 'EXP-DETAIL.txtMore') | translate\"></span></a>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <hr class=\"lineHR\">\n        <div class=\"contPeople\">\n          <img class=\"imgPeople\" src=\"../../../../assets/icon/15-Group.png\">\n          <ion-label class=\"txtPeople\">{{ 'EXP-DETAIL.txt1People' | translate }} {{ experience?.amountPeople }} {{ 'EXP-DETAIL.txt2People' | translate }}</ion-label>\n        </div>\n        <hr class=\"lineHR\">\n      </ion-col>\n    </ion-row>\n\n    <ng-container *ngIf=\"!isOwner\">\n      <ion-row>\n        <ion-col (click)=\"selectPerson(ownerExp, imgUsers[0])\">\n          <ion-item class=\"ion-no-padding ion-no-margin\" lines=\"none\">\n            <ion-avatar class=\"avatarOwner\">\n              <img [src]=\"imgUsers[0]\" />\n            </ion-avatar>\n            <!-- <ion-label class=\"nameOwner\">{{ ownerExp?.name }} {{ ownerExp?.lastName }}</ion-label> -->\n            <ion-text class=\"nameOwner\">\n              <p class=\"namePeopleLst\" >{{ ownerExp?.firstName }} {{ ownerExp?.lastName }}</p>\n              <div class=\"contRating\" (click)=\"openRatingExperiences()\">\n                <img class=\"imgStart\" src=\"../../../../assets/icon/16-Star.png\">\n                <ion-label class=\"txtRating\">{{ ownerExp?.rateExperiences || 0 }} {{ 'EXP-DETAIL.txtRates' | translate }}</ion-label>\n              </div>\n            </ion-text>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"aboutTitle\">{{ 'EXP-DETAIL.txtAbout' | translate }}</p>\n          <p class=\"pExp\" *ngIf=\"!showAboutMe\">{{ trimString(textAboutMe,100) }}</p>\n          <p class=\"pExp\" *ngIf=\"showAboutMe\">{{ textAboutMe }}</p>\n          <a class=\"DesA\" (click)=\"showAboutMe = !showAboutMe\" *ngIf=\"textAboutMe.length > 100\">{{ 'EXP-DETAIL.txtRead' | translate }} <span [innerHtml]=\"(showAboutMe ? 'EXP-DETAIL.txtLess' : 'EXP-DETAIL.txtMore') | translate\"></span></a>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"hostTitle\">{{ 'EXP-DETAIL.txtHost' | translate }}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\" class=\"ion-no-padding\" *ngIf=\"galImgs[0]?.length > 0\">\n          <img class=\"imgHost1\" src={{galImgs[0]}} (click)=\"openPhoto(0)\" />\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" *ngIf=\"galImgs[1]?.length > 0\">\n              <img class=\"imgHost2\" src={{galImgs[1]}} (click)=\"openPhoto(1)\" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" *ngIf=\"galImgs[2]?.length > 0\">\n              <img class=\"imgHost3\" src={{galImgs[2]}} (click)=\"openPhoto(2)\" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-modal #mPhoto class=\"modalPhoto\" [enterAnimation]=\"enterAnimation\" [leaveAnimation]=\"leaveAnimation\">\n        <ng-template>\n          <ion-content>\n            <div id=\"photoviewer-container\"></div>\n          </ion-content>\n        </ng-template>\n      </ion-modal>\n\n      <ion-row *ngIf=\"isOpen\">\n        <ion-button class=\"intersted-Bt\" color=\"primary1\" (click)=\"doInterest()\" *ngIf=\"!interestedExp\">\n          {{ 'EXP-DETAIL.btnIntersted' | translate }}\n          <img class=\"imgVIP\" src=\"../../../../assets/icon/12-Vip_card.png\" *ngIf=\"isVIPExp\">\n        </ion-button>\n        <ion-button class=\"intersted-Bt\" color=\"primary1\" (click)=\"doUnInterest()\" *ngIf=\"interestedExp\">\n          {{ 'EXP-DETAIL.btnUnIntersted' | translate }}\n        </ion-button>\n      </ion-row>\n\n      <ion-col *ngIf=\"!isOpen\">\n        <ion-button class=\"intersted-Bt\" (click)=\"leaveRating()\" color=\"primary1\">\n          <ion-icon slot=\"start\" name=\"star-outline\"></ion-icon>\n          {{ 'MATCH-DETAIL.btnLeaveRating' | translate }}\n        </ion-button>\n      </ion-col>\n\n    </ng-container>\n\n    <ng-container *ngIf=\"isOwner\">\n      <ion-row>\n        <ion-col>\n          <p class=\"locationTitle\">{{ 'EXP-DETAIL.titleIntPeople' | translate }}</p>\n          <p class=\"pExp\">{{ 'EXP-DETAIL.subTitleIntPeople' | translate }}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p class=\"pendingReqTitle\">{{ 'EXP-DETAIL.PendingReq' | translate }} {{noPendingReq}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-list class=\"listPeopleLst\">\n        <ng-container *ngFor=\"let usr of interestedUsrList; let i = index;\">\n          <ion-item class=\"itemPeopleLst\" lines=\"none\" *ngIf=\"usr?.status == pendingUsr\">\n            <img class=\"imgPeopleLst\" [class.defaultImg]=\"imgUsers[i]\" [src]=\"imgUsers[i]\" slot=\"start\" (click)=\"selectPerson(usr, imgUsers[i])\"/>\n            <ion-text class=\"textPeopleLst\" (click)=\"selectPerson(usr, imgUsers[i])\">\n              <p class=\"namePeopleLst\" >{{usr?.name}}</p>\n              <p class=\"locPeopleLst\">{{usr?.location?.city}}, {{usr?.location?.state}}</p>\n             <!--  <div class=\"contRating\" (click)=\"openRatingUser()\">\n                <img class=\"imgStart\" src=\"../../../../assets/icon/16-Star.png\">\n                <ion-label class=\"txtRating\">{{ usr?.rateUserExperiences || 0 }} {{ 'EXP-DETAIL.txtRates' | translate }}</ion-label>\n              </div> -->\n            </ion-text>\n            <ion-button class=\"btnPeopleLst\" color=\"gris1\" (click)=\"acceptPeople(usr?.personId, allowUsr, i)\" slot=\"end\" *ngIf=\"isOpen\">\n              {{ 'EXP-DETAIL.AllowBt' | translate }}\n            </ion-button>\n            <ion-button class=\"btnPeopleLst\" color=\"primary1\" (click)=\"acceptPeople(usr?.personId, denyUsr,i)\" slot=\"end\" *ngIf=\"isOpen\">\n              {{ 'EXP-DETAIL.DenyBt' | translate }}\n            </ion-button>\n            <ion-button class=\"btnLeaveRating\" color=\"primary1\" (click)=\"leaveRatingAssistan(usr?.personId, usr?.name, imgUsers[i])\" slot=\"end\" *ngIf=\"!isOpen\">\n              <ion-icon slot=\"start\" name=\"star-outline\"></ion-icon>\n              {{ 'MATCH-DETAIL.btnLeaveRating' | translate }}\n            </ion-button>\n          </ion-item>\n          <div class=\"contRating\" (click)=\"openRatingUser(usr?.personId, usr?.name, usr?.rateUserExperiences, imgUsers[i])\">\n            <img class=\"imgStart\" src=\"../../../../assets/icon/16-Star.png\">\n            <ion-label class=\"txtRating\">{{ usr?.rateUserExperiences || 0 }} {{ 'EXP-DETAIL.txtRates' | translate }}</ion-label>\n          </div>\n          <hr class=\"linePeople\" *ngIf=\"i < interestedUsrList?.length-1 && usr?.status == pendingUsr\">\n        </ng-container>\n      </ion-list>\n\n      <hr class=\"lineDivPeople\"> \n\n      <ion-row>\n        <ion-col>\n          <p class=\"pendingReqTitle\">{{ 'EXP-DETAIL.RegisteredUsr' | translate }} {{noRegistered}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-list class=\"listPeopleLst\">\n        <ng-container *ngFor=\"let usr of interestedUsrList; let i = index;\">\n          <ion-item class=\"itemPeopleLst\" lines=\"none\" *ngIf=\"usr?.status == allowUsr\" (click)=\"selectPerson(usr, imgUsers[i])\">\n            <img class=\"imgPeopleLst\" [src]=\"imgUsers[i]\" slot=\"start\"/>\n            <ion-text class=\"textPeopleLst\">\n              <p class=\"namePeopleLst\" >{{usr?.name}}</p>\n              <p class=\"locPeopleLst\" >{{usr?.location?.city}}, {{usr?.location?.state}}</p>\n            </ion-text>\n            <ion-button slot=\"end\" color=\"negro\" (click)=\"chatMatch($event,usr)\">\n              <ion-icon slot=\"icon-only\" name=\"chatbubble\"></ion-icon>\n            </ion-button>\n          </ion-item>\n          <hr class=\"linePeople\" *ngIf=\"i < interestedUsrList?.length-1 && usr?.status == pendingUsr\">\n        </ng-container>\n      </ion-list>\n\n      <ion-row *ngIf=\"isOpen\">\n        <ion-button class=\"intersted-Bt\" color=\"primary1\" (click)=\"cancelExperience()\">\n          {{ 'EXP-DETAIL.btnCancelExp' | translate }}\n        </ion-button>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 10px;\" *ngIf=\"!isOpen\">\n        <ion-col></ion-col>\n      </ion-row>\n\n    </ng-container>\n\n</ion-grid>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_experience_detail-exp_detail-exp_module_ts.js.map