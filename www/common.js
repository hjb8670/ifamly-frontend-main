(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 40504:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/experience/experience-menu-popover/experience-menu-popover.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceMenuPopoverPage: () => (/* binding */ ExperienceMenuPopoverPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _experience_menu_popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience-menu-popover.page.html?ngResource */ 11596);
/* harmony import */ var _experience_menu_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience-menu-popover.page.scss?ngResource */ 81248);
/* harmony import */ var _experience_menu_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_experience_menu_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 24040);








let ExperienceMenuPopoverPage = class ExperienceMenuPopoverPage {
  constructor(translate, popoverCtrl, router
  //private navCtrl: NavController
  ) {
    this.translate = translate;
    this.popoverCtrl = popoverCtrl;
    this.router = router;
    this.op1Selected = false;
    this.op2Selected = false;
  }
  ngOnInit() {}
  ionViewWillEnter() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.op1Selected = false;
      _this.op2Selected = false;
    })();
  }
  selectOp(op) {
    this.popoverCtrl.dismiss();
    if (op == 0) {
      this.op1Selected = true;
      this.op2Selected = false;
      this.isMyExp = !this.isMyExp;
      let navegationExtras = {
        state: {
          isMyExp: this.isMyExp
        }
      };
      if (!this.isMyExp) {
        this.router.navigate(['/main/tabs/experience'], navegationExtras);
      } else {
        this.router.navigate(['/main/tabs/my-experience'], navegationExtras);
      }
      /* this.router.navigateByUrl('/main/tabs/experience', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/main/tabs/experience'], navegationExtras);
      }); */
      //this.navCtrl.navigateRoot( '/main/tabs/experience', { animated: true } );
    } else {
      this.op1Selected = false;
      this.op2Selected = true;
      this.router.navigate(['new-edit-exp']);
      //this.navCtrl.navigateRoot( '/main/tabs/discover', { animated: true } );
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
    }];
  }
  static {
    this.propDecorators = {
      isMyExp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
      }]
    };
  }
};
ExperienceMenuPopoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-experience-menu-popover',
  template: _experience_menu_popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_experience_menu_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ExperienceMenuPopoverPage);


/***/ }),

/***/ 56092:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/match/report-popover/report-popover-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportPopoverPageRoutingModule: () => (/* binding */ ReportPopoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _report_popover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-popover.page */ 55276);




const routes = [{
  path: '',
  component: _report_popover_page__WEBPACK_IMPORTED_MODULE_0__.ReportPopoverPage
}];
let ReportPopoverPageRoutingModule = class ReportPopoverPageRoutingModule {};
ReportPopoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ReportPopoverPageRoutingModule);


/***/ }),

/***/ 68648:
/*!******************************************!*\
  !*** ./src/app/services/talk.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TalkService: () => (/* binding */ TalkService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var talkjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! talkjs */ 54020);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 36716);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ 90628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33712);







const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.urlSrv;
let TalkService = class TalkService {
  constructor(userService, http) {
    this.userService = userService;
    this.http = http;
  }
  getUser(userId) {
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield talkjs__WEBPACK_IMPORTED_MODULE_1__["default"].ready;
      return new talkjs__WEBPACK_IMPORTED_MODULE_1__["default"].User(userId);
    })();
  }
  createCurrentSession(idUsuario, firstName) {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield talkjs__WEBPACK_IMPORTED_MODULE_1__["default"].ready;
      _this.currentUser = new talkjs__WEBPACK_IMPORTED_MODULE_1__["default"].User({
        id: idUsuario,
        name: firstName // This is what TalkJS shows by default
      });
      _this.session = new talkjs__WEBPACK_IMPORTED_MODULE_1__["default"].Session({
        appId: 't79Ku1zV',
        me: _this.currentUser
      });
      return _this.session;
    })();
  }
  getOrCreateConversation(idConversation) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //const otherUser = await this.createUser(otherApplicationUser);
      if (idConversation === undefined || idConversation === '') {
        return null;
      }
      const conversation = _this2.session.getOrCreateConversation(idConversation);
      console.log(conversation);
      // conversation.setParticipant(this.currentUser);
      // conversation.setParticipant(otherUser);
      return conversation;
    })();
  }
  createInbox(idConversation) {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const conversation = yield _this3.getOrCreateConversation(idConversation);
      let options = {
        theme: 'ifamily'
      };
      const inbox = _this3.session.createInbox(options);
      //inbox.setFeedFilter({}); Filtro de las conversaciones que se mostraran en el inbox
      inbox.select(conversation);
      return inbox;
    })();
  }
  updateConversation(matchId) {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tVal = yield _this4.userService.validaToken();
      if (!tVal) {
        return;
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this4.userService.token);
      return new Promise(resolve => {
        _this4.http.get(`${URL}/chat/update/${matchId}`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] == 200) {
              resolve(resp['sData']);
            }
            resolve({});
          },
          error: err => {
            console.log('ERR MATCHES', err);
            resolve({});
          }
        });
      });
    })();
  }
  updateConversationByPerson(personId) {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tVal = yield _this5.userService.validaToken();
      if (!tVal) {
        return;
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this5.userService.token);
      return new Promise(resolve => {
        _this5.http.get(`${URL}/chat/update/person/${personId}`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] == 200) {
              resolve(resp['sData']);
            }
            resolve({});
          },
          error: err => {
            console.log('ERR MATCHES', err);
            resolve({});
          }
        });
      });
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
    }];
  }
};
TalkService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], TalkService);


/***/ }),

/***/ 72040:
/*!*******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/photoviewer/dist/esm/definitions.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 68308:
/*!*************************************************************************!*\
  !*** ./node_modules/@capacitor-community/photoviewer/dist/esm/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotoViewer: () => (/* binding */ PhotoViewer)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 3536);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 72040);

const PhotoViewer = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PhotoViewer', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_photoviewer_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 96736)).then(m => new m.PhotoViewerWeb())
});



/***/ }),

/***/ 672:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraDirection: () => (/* binding */ CameraDirection),
/* harmony export */   CameraResultType: () => (/* binding */ CameraResultType),
/* harmony export */   CameraSource: () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 63924:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   CameraDirection: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   CameraResultType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   CameraSource: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 3536);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 672);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 58472)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 52616:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-414be235.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_a1a47f01_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a1a47f01.js */ 37052);
/* harmony import */ var _haptic_554688a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-554688a5.js */ 69755);
/* harmony import */ var _index_2cf77112_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-2cf77112.js */ 19144);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_a1a47f01_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_a1a47f01_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_2cf77112_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_554688a5_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_554688a5_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_554688a5_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};


/***/ }),

/***/ 76252:
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/capacitor-59395cbd.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getCapacitor)
/* harmony export */ });
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a5d50daf.js */ 17168);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const getCapacitor = () => {
  if (_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined) {
    return _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor;
  }
  return undefined;
};


/***/ }),

/***/ 78507:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/compare-with-utils-a96ff2ea.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ compareOptions),
/* harmony export */   i: () => (/* binding */ isOptionSelected)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Uses the compareWith param to compare two values to determine if they are equal.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */
const compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};
/**
 * Compares a value against the current value(s) to determine if it is selected.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */
const isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val => compareOptions(val, compareValue, compareWith));
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};


/***/ }),

/***/ 15176:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-babeabeb.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};


/***/ }),

/***/ 86584:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-dd40d69f.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startFocusVisible: () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        // TODO(FW-2832): type
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown, {
    passive: true
  });
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};


/***/ }),

/***/ 69755:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-554688a5.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ImpactStyle),
/* harmony export */   a: () => (/* binding */ hapticSelectionStart),
/* harmony export */   b: () => (/* binding */ hapticSelectionChanged),
/* harmony export */   c: () => (/* binding */ hapticSelection),
/* harmony export */   d: () => (/* binding */ hapticImpact),
/* harmony export */   h: () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/* harmony import */ var _capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitor-59395cbd.js */ 76252);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

var ImpactStyle;
(function (ImpactStyle) {
  /**
   * A collision between large, heavy user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Heavy"] = "HEAVY";
  /**
   * A collision between moderately sized user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Medium"] = "MEDIUM";
  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Light"] = "LIGHT";
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
(function (NotificationType) {
  /**
   * A notification feedback type indicating that a task has completed successfully
   *
   * @since 1.0.0
   */
  NotificationType["Success"] = "SUCCESS";
  /**
   * A notification feedback type indicating that a task has produced a warning
   *
   * @since 1.0.0
   */
  NotificationType["Warning"] = "WARNING";
  /**
   * A notification feedback type indicating that a task has failed
   *
   * @since 1.0.0
   */
  NotificationType["Error"] = "ERROR";
})(NotificationType || (NotificationType = {}));
const HapticEngine = {
  getEngine() {
    const tapticEngine = window.TapticEngine;
    if (tapticEngine) {
      // Cordova
      // TODO FW-4707 - Remove this in Ionic 8
      return tapticEngine;
    }
    const capacitor = (0,_capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('Haptics')) {
      // Capacitor
      return capacitor.Plugins.Haptics;
    }
    return undefined;
  },
  available() {
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    const capacitor = (0,_capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */
    if ((capacitor === null || capacitor === void 0 ? void 0 : capacitor.getPlatform()) === 'web') {
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }
    return true;
  },
  isCordova() {
    return window.TapticEngine !== undefined;
  },
  isCapacitor() {
    return (0,_capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__.g)() !== undefined;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    /**
     * To provide backwards compatibility with Cordova apps,
     * we convert the style to lowercase.
     *
     * TODO: FW-4707 - Remove this in Ionic 8
     */
    const style = this.isCapacitor() ? options.style : options.style.toLowerCase();
    engine.impact({
      style
    });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    /**
     * To provide backwards compatibility with Cordova apps,
     * we convert the style to lowercase.
     *
     * TODO: FW-4707 - Remove this in Ionic 8
     */
    const type = this.isCapacitor() ? options.type : options.type.toLowerCase();
    engine.notification({
      type
    });
  },
  selection() {
    /**
     * To provide backwards compatibility with Cordova apps,
     * we convert the style to lowercase.
     *
     * TODO: FW-4707 - Remove this in Ionic 8
     */
    const style = this.isCapacitor() ? ImpactStyle.Light : 'light';
    this.impact({
      style
    });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: ImpactStyle.LIGHT }` (or `MEDIUM`/`HEAVY`)
 */
const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};


/***/ }),

/***/ 56412:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-f3946ac1.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   a: () => (/* binding */ findIonContent),
/* harmony export */   b: () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   c: () => (/* binding */ scrollByPoint),
/* harmony export */   d: () => (/* binding */ disableContentScrollY),
/* harmony export */   f: () => (/* binding */ findClosestIonContent),
/* harmony export */   g: () => (/* binding */ getScrollElement),
/* harmony export */   i: () => (/* binding */ isIonContent),
/* harmony export */   p: () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   r: () => (/* binding */ resetContentScrollY),
/* harmony export */   s: () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var _helpers_be245865_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-be245865.js */ 66256);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 69852);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */
const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */
const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_be245865_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }
    return el;
  });
  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */
const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
  if (customContentHost) {
    return customContentHost;
  }
  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */
const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */
const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */
const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }
  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */
const printIonContentErrorMsg = el => {
  return (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_2__.b)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */
const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */
    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};
const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};


/***/ }),

/***/ 26508:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-f7dc70ba.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ arrowBackSharp),
/* harmony export */   b: () => (/* binding */ closeCircle),
/* harmony export */   c: () => (/* binding */ chevronBack),
/* harmony export */   d: () => (/* binding */ closeSharp),
/* harmony export */   e: () => (/* binding */ searchSharp),
/* harmony export */   f: () => (/* binding */ checkmarkOutline),
/* harmony export */   g: () => (/* binding */ ellipseOutline),
/* harmony export */   h: () => (/* binding */ caretBackSharp),
/* harmony export */   i: () => (/* binding */ arrowDown),
/* harmony export */   j: () => (/* binding */ reorderThreeOutline),
/* harmony export */   k: () => (/* binding */ reorderTwoSharp),
/* harmony export */   l: () => (/* binding */ chevronDown),
/* harmony export */   m: () => (/* binding */ chevronForwardOutline),
/* harmony export */   n: () => (/* binding */ ellipsisHorizontal),
/* harmony export */   o: () => (/* binding */ chevronForward),
/* harmony export */   p: () => (/* binding */ caretUpSharp),
/* harmony export */   q: () => (/* binding */ caretDownSharp),
/* harmony export */   r: () => (/* binding */ removeOutline),
/* harmony export */   s: () => (/* binding */ searchOutline),
/* harmony export */   t: () => (/* binding */ close),
/* harmony export */   u: () => (/* binding */ menuOutline),
/* harmony export */   v: () => (/* binding */ menuSharp),
/* harmony export */   w: () => (/* binding */ chevronExpand)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v7.2.2, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronExpand = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 16168:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-52278bd7.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYBOARD_DID_CLOSE: () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   KEYBOARD_DID_OPEN: () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   copyVisualViewport: () => (/* binding */ copyVisualViewport),
/* harmony export */   keyboardDidClose: () => (/* binding */ keyboardDidClose),
/* harmony export */   keyboardDidOpen: () => (/* binding */ keyboardDidOpen),
/* harmony export */   keyboardDidResize: () => (/* binding */ keyboardDidResize),
/* harmony export */   resetKeyboardAssist: () => (/* binding */ resetKeyboardAssist),
/* harmony export */   setKeyboardClose: () => (/* binding */ setKeyboardClose),
/* harmony export */   setKeyboardOpen: () => (/* binding */ setKeyboardOpen),
/* harmony export */   startKeyboardAssist: () => (/* binding */ startKeyboardAssist),
/* harmony export */   trackViewportChanges: () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/* harmony import */ var _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-73175e24.js */ 20464);
/* harmony import */ var _capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capacitor-59395cbd.js */ 76252);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-a5d50daf.js */ 17168);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
// TODO(FW-2832): types
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */
const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};
const startKeyboardAssist = win => {
  const nativeEngine = _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_0__.K.getEngine();
  /**
   * If the native keyboard plugin is available
   * then we are running in a native environment. As a result
   * we should only listen on the native events instead of
   * using the Visual Viewport as the Ionic webview manipulates
   * how it resizes such that the Visual Viewport API is not
   * reliable here.
   */
  if (nativeEngine) {
    startNativeListeners(win);
  } else {
    if (!win.visualViewport) {
      return;
    }
    currentVisualViewport = copyVisualViewport(win.visualViewport);
    win.visualViewport.onresize = () => {
      trackViewportChanges(win);
      if (keyboardDidOpen() || keyboardDidResize(win)) {
        setKeyboardOpen(win);
      } else if (keyboardDidClose(win)) {
        setKeyboardClose(win);
      }
    };
  }
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */
const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};
const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};
const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */
const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */
const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */
const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */
const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */
const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */
const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */
const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};


/***/ }),

/***/ 20464:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-73175e24.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ Keyboard),
/* harmony export */   a: () => (/* binding */ KeyboardResize)
/* harmony export */ });
/* harmony import */ var _capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitor-59395cbd.js */ 76252);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

var ExceptionCode;
(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */
  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
var KeyboardResize;
(function (KeyboardResize) {
  /**
   * Only the `body` HTML element will be resized.
   * Relative units are not affected, because the viewport does not change.
   *
   * @since 1.0.0
   */
  KeyboardResize["Body"] = "body";
  /**
   * Only the `ion-app` HTML element will be resized.
   * Use it only for Ionic Framework apps.
   *
   * @since 1.0.0
   */
  KeyboardResize["Ionic"] = "ionic";
  /**
   * The whole native Web View will be resized when the keyboard shows/hides.
   * This affects the `vh` relative unit.
   *
   * @since 1.0.0
   */
  KeyboardResize["Native"] = "native";
  /**
   * Neither the app nor the Web View are resized.
   *
   * @since 1.0.0
   */
  KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
const Keyboard = {
  getEngine() {
    const capacitor = (0,_capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('Keyboard')) {
      return capacitor.Plugins.Keyboard;
    }
    return undefined;
  },
  getResizeMode() {
    const engine = this.getEngine();
    if (!(engine === null || engine === void 0 ? void 0 : engine.getResizeMode)) {
      return Promise.resolve(undefined);
    }
    return engine.getResizeMode().catch(e => {
      if (e.code === ExceptionCode.Unimplemented) {
        // If the native implementation is not available
        // we treat it the same as if the plugin is not available.
        return undefined;
      }
      throw e;
    });
  }
};


/***/ }),

/***/ 40956:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-ec5c2bfa.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-a5d50daf.js */ 17168);
/* harmony import */ var _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard-73175e24.js */ 20464);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



/**
 * The element that resizes when the keyboard opens
 * is going to depend on the resize mode
 * which is why we check that here.
 */
const getResizeContainer = resizeMode => {
  /**
   * If doc is undefined then we are
   * in an SSR environment, so the keyboard
   * adjustment does not apply.
   * If the webview does not resize then there
   * is no container to resize.
   */
  if (_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d === undefined || resizeMode === _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_2__.a.None || resizeMode === undefined) {
    return null;
  }
  /**
   * The three remaining resize modes: Native, Ionic, and Body
   * all cause `ion-app` to resize, so we can listen for changes
   * on that. In the event `ion-app` is not available then
   * we can fall back to `body`.
   */
  const ionApp = _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d.querySelector('ion-app');
  return ionApp !== null && ionApp !== void 0 ? ionApp : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d.body;
};
/**
 * Get the height of ion-app or body.
 * This is used for determining if the webview
 * has resized before the keyboard closed.
 * */
const getResizeContainerHeight = resizeMode => {
  const containerElement = getResizeContainer(resizeMode);
  return containerElement === null ? 0 : containerElement.clientHeight;
};
/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */
const createKeyboardController = /*#__PURE__*/function () {
  var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (keyboardChangeCallback) {
    let keyboardWillShowHandler;
    let keyboardWillHideHandler;
    let keyboardVisible;
    /**
     * This lets us determine if the webview content
     * has resized as a result of the keyboard.
     */
    let initialResizeContainerHeight;
    const init = /*#__PURE__*/function () {
      var _ref2 = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const resizeOptions = yield _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_2__.K.getResizeMode();
        const resizeMode = resizeOptions === undefined ? undefined : resizeOptions.mode;
        keyboardWillShowHandler = () => {
          /**
           * We need to compute initialResizeContainerHeight right before
           * the keyboard opens to guarantee the resize container is visible.
           * The resize container may not be visible if we compute this
           * as soon as the keyboard controller is created.
           * We should only need to do this once to avoid additional clientHeight
           * computations.
           */
          if (initialResizeContainerHeight === undefined) {
            initialResizeContainerHeight = getResizeContainerHeight(resizeMode);
          }
          keyboardVisible = true;
          fireChangeCallback(keyboardVisible, resizeMode);
        };
        keyboardWillHideHandler = () => {
          keyboardVisible = false;
          fireChangeCallback(keyboardVisible, resizeMode);
        };
        _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
        _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
      });
      return function init() {
        return _ref2.apply(this, arguments);
      };
    }();
    const fireChangeCallback = (state, resizeMode) => {
      if (keyboardChangeCallback) {
        keyboardChangeCallback(state, createResizePromiseIfNeeded(resizeMode));
      }
    };
    /**
     * Code responding to keyboard lifecycles may need
     * to show/hide content once the webview has
     * resized as a result of the keyboard showing/hiding.
     * createResizePromiseIfNeeded provides a way for code to wait for the
     * resize event that was triggered as a result of the keyboard.
     */
    const createResizePromiseIfNeeded = resizeMode => {
      if (
      /**
       * If we are in an SSR environment then there is
       * no window to resize. Additionally, if there
       * is no resize mode or the resize mode is "None"
       * then initialResizeContainerHeight will be 0
       */
      initialResizeContainerHeight === 0 ||
      /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      initialResizeContainerHeight === getResizeContainerHeight(resizeMode)) {
        return;
      }
      /**
       * Get the resize container so we can
       * attach the ResizeObserver below to
       * the correct element.
       */
      const containerElement = getResizeContainer(resizeMode);
      if (containerElement === null) {
        return;
      }
      /**
       * Some part of the web content should resize,
       * and we need to listen for a resize.
       */
      return new Promise(resolve => {
        const callback = () => {
          /**
           * As per the spec, the ResizeObserver
           * will fire when observation starts if
           * the observed element is rendered and does not
           * have a size of 0 x 0. However, the watched element
           * may or may not have resized by the time this first
           * callback is fired. As a result, we need to check
           * the dimensions of the element.
           *
           * https://www.w3.org/TR/resize-observer/#intro
           */
          if (containerElement.clientHeight === initialResizeContainerHeight) {
            /**
             * The resize happened, so stop listening
             * for resize on this element.
             */
            ro.disconnect();
            resolve();
          }
        };
        /**
         * In Capacitor there can be delay between when the window
         * resizes and when the container element resizes, so we cannot
         * rely on a 'resize' event listener on the window.
         * Instead, we need to determine when the container
         * element resizes using a ResizeObserver.
         */
        const ro = new ResizeObserver(callback);
        ro.observe(containerElement);
      });
    };
    const destroy = () => {
      _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
      _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
      keyboardWillShowHandler = keyboardWillHideHandler = undefined;
    };
    const isKeyboardVisible = () => keyboardVisible;
    yield init();
    return {
      init,
      destroy,
      isKeyboardVisible
    };
  });
  return function createKeyboardController(_x) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ 17744:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/lock-controller-316928be.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createLockController)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Creates a lock controller.
 *
 * Claiming a lock means that nothing else can acquire the lock until it is released.
 * This can momentarily prevent execution of code that needs to wait for the earlier code to finish.
 * For example, this can be used to prevent multiple transitions from occurring at the same time.
 */
const createLockController = () => {
  let waitPromise;
  /**
   * When lock() is called, the lock is claimed.
   * Once a lock has been claimed, it cannot be claimed again until it is released.
   * When this function gets resolved, the lock is released, allowing it to be claimed again.
   *
   * @example ```tsx
   * const unlock = await this.lockController.lock();
   * // do other stuff
   * unlock();
   * ```
   */
  const lock = /*#__PURE__*/function () {
    var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const p = waitPromise;
      let resolve;
      waitPromise = new Promise(r => resolve = r);
      if (p !== undefined) {
        yield p;
      }
      return resolve;
    });
    return function lock() {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    lock
  };
};


/***/ }),

/***/ 11424:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-964f7cf3.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${32 - 32 * index}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 69528:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-37a22d34.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSwipeBackGesture: () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_be245865_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-be245865.js */ 66256);
/* harmony import */ var _dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-babeabeb.js */ 15176);
/* harmony import */ var _index_2cf77112_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-2cf77112.js */ 19144);
/* harmony import */ var _gesture_controller_1bf57181_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-1bf57181.js */ 43724);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */
  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  };
  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };
  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };
  const canStart = detail => {
    /**
     * The user's locale can change mid-session,
     * so we need to check text direction at
     * the beginning of every gesture.
     */
    rtl = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
    return isAtEdge(detail) && canStartHandler();
  };
  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };
  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_be245865_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };
  return (0,_index_2cf77112_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    /**
     * Swipe to go back should have priority over other horizontal swipe
     * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
     */
    gesturePriority: 101,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};


/***/ }),

/***/ 81936:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-c2911ace.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ watchForOptions)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const watchForOptions = (containerEl, tagName, onChange) => {
  if (typeof MutationObserver === 'undefined') {
    return;
  }
  const mutation = new MutationObserver(mutationList => {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
  let newOption;
  mutationList.forEach(mut => {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};
/**
 * The "value" key is only set on some components such as ion-select-option.
 * As a result, we create a default union type of HTMLElement and the "value" key.
 * However, implementers are required to provide the appropriate component type
 * such as HTMLIonSelectOptionElement.
 */
const findCheckedOption = (node, tagName) => {
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
   * The above check ensures "node" is an Element (nodeType 1).
   */
  if (node.nodeType !== 1) {
    return undefined;
  }
  // HTMLElement inherits from Element, so we cast "el" as T.
  const el = node;
  const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find(o => o.value === el.value);
};


/***/ }),

/***/ 54020:
/*!*************************************************!*\
  !*** ./node_modules/talkjs/src/index.esnext.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (typeof window === "undefined") {
  // note: this code should never be called, unless somehow the customer manages to use a bundler
  // that doesn't read the package.json "browser" field.
  throw new Error("[TalkJS] The TalkJS JavaScript SDK only works in browsers (and not, for example, in Node.js)");
}

// Snippet[starts]
(function (t, a, l, k, j, s) {
  s = a.createElement("script");
  s.async = 1;
  s.src = "https://cdn.talkjs.com/talk.js";
  a.head.appendChild(s);
  k = t.Promise;
  t.Talk = {
    v: 3,
    ready: {
      then: function (f) {
        if (k) return new k(function (r, e) {
          l.push([f, r, e]);
        });
        l.push([f]);
      },
      catch: function () {
        return k && new k();
      },
      c: l
    }
  };
})(window, document, []);
// Snippet[ends]

var Talk = window.Talk;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Talk);

/***/ }),

/***/ 81248:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/experience/experience-menu-popover/experience-menu-popover.page.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-item {
  height: 30px;
  font-size: 15px;
  /*.ios {
      font-size: 15px;
  }*/
}

.itemSelected {
  --background: var(--ion-color-primary1);
  border-style: solid;
  border-color: var(--ion-color-primary1);
  border-radius: 15px;
}

ion-label {
  margin-top: -10px;
}

.labelselected {
  font-family: "Sk-Modernist-Bold";
  color: var(--ion-color-blanco);
}`, "",{"version":3,"sources":["webpack://./src/app/pages/experience/experience-menu-popover/experience-menu-popover.page.scss","webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/experience/experience-menu-popover/experience-menu-popover.page.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,eAAA;EAEA;;IAAA;ACEJ;;ADGA;EACI,uCAAA;EACA,mBAAA;EACA,uCAAA;EACA,mBAAA;ACAJ;;ADGA;EACI,iBAAA;ACAJ;;ADGA;EACI,gCAAA;EACA,8BAAA;ACAJ","sourcesContent":["ion-item {\n    height: 30px;\n    font-size: 15px;\n    //margin-bottom: 10px;\n    /*.ios {\n        font-size: 15px;\n    }*///Si solo se quiere para ios\n}\n\n.itemSelected {\n    --background: var(--ion-color-primary1);\n    border-style: solid;\n    border-color: var(--ion-color-primary1);\n    border-radius: 15px;\n}\n\nion-label{\n    margin-top: -10px;\n}\n\n.labelselected {\n    font-family: 'Sk-Modernist-Bold';\n    color: var(--ion-color-blanco);\n}","ion-item {\n  height: 30px;\n  font-size: 15px;\n  /*.ios {\n      font-size: 15px;\n  }*/\n}\n\n.itemSelected {\n  --background: var(--ion-color-primary1);\n  border-style: solid;\n  border-color: var(--ion-color-primary1);\n  border-radius: 15px;\n}\n\nion-label {\n  margin-top: -10px;\n}\n\n.labelselected {\n  font-family: \"Sk-Modernist-Bold\";\n  color: var(--ion-color-blanco);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11596:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/experience/experience-menu-popover/experience-menu-popover.page.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list class=\"ion-padding\">\n  <ion-item   [ngClass]=\"{'itemSelected' : op1Selected}\" (click)=\"selectOp(0)\" lines=\"none\" style=\"margin-bottom: 10px;\" detail=\"false\" mode=\"ios\">\n    <ion-label [ngClass]=\"{'labelselected' : op1Selected}\" text-wrap [innerHtml]=\"(isMyExp ? 'EXPERIENCE.MenuOp12' : 'EXPERIENCE.MenuOp1') | translate\"></ion-label>\n  </ion-item>\n  <ion-item [ngClass]=\"{'itemSelected' : op2Selected}\" (click)=\"selectOp(1)\" lines=\"none\" detail=\"false\" mode=\"ios\">\n    <ion-label [ngClass]=\"{'labelselected' : op2Selected}\" text-wrap>\n      {{ 'EXPERIENCE.MenuOp2' | translate }}\n    </ion-label>\n  </ion-item>\n</ion-list>\n";

/***/ })

}]);
//# sourceMappingURL=common.js.map