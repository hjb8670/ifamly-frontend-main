(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_extras_photos-view_photos-view_module_ts"],{

/***/ 60548:
/*!************************************************************************!*\
  !*** ./src/app/pages/extras/photos-view/photos-view-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotosViewPageRoutingModule: () => (/* binding */ PhotosViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _photos_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos-view.page */ 75172);




const routes = [{
  path: '',
  component: _photos_view_page__WEBPACK_IMPORTED_MODULE_0__.PhotosViewPage
}];
let PhotosViewPageRoutingModule = class PhotosViewPageRoutingModule {};
PhotosViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PhotosViewPageRoutingModule);


/***/ }),

/***/ 48628:
/*!****************************************************************!*\
  !*** ./src/app/pages/extras/photos-view/photos-view.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotosViewPageModule: () => (/* binding */ PhotosViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _photos_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos-view-routing.module */ 60548);
/* harmony import */ var _photos_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos-view.page */ 75172);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);








let PhotosViewPageModule = class PhotosViewPageModule {};
PhotosViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _photos_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotosViewPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
  declarations: [_photos_view_page__WEBPACK_IMPORTED_MODULE_1__.PhotosViewPage]
})], PhotosViewPageModule);


/***/ }),

/***/ 75172:
/*!**************************************************************!*\
  !*** ./src/app/pages/extras/photos-view/photos-view.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotosViewPage: () => (/* binding */ PhotosViewPage)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _photos_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos-view.page.html?ngResource */ 66636);
/* harmony import */ var _photos_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos-view.page.scss?ngResource */ 38276);
/* harmony import */ var _photos_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_photos_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _capacitor_community_photoviewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/photoviewer */ 68308);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78848);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/match.service */ 5876);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ui.service */ 44136);
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ 61412);












let PhotosViewPage = class PhotosViewPage {
  constructor(translate, matchService, uiService, router, animationCtrl) {
    this.translate = translate;
    this.matchService = matchService;
    this.uiService = uiService;
    this.router = router;
    this.animationCtrl = animationCtrl;
    this.imgsChecked = [];
    this.canDelete = false;
    this.arr = [];
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
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.principal();
      _this.checkDeleteEligibility();
    })();
  }
  checkDeleteEligibility() {
    this.canDelete = this.galleryImgs.length > 1;
  }
  testup(event) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const files = event.target.files;
      _this2.arr = []; // clear previous entries
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = /*#__PURE__*/function () {
          var _ref = (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
            const result = e.target.result;
            const base64Data = result.split(',')[1];
            // Compress base64 image before pushing
            const compressed = yield src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__.UtilitiesService.compressBase64Image(base64Data, 800, 800, 0.7);
            _this2.arr.push({
              multimediaName: file.name,
              multimediaBase64: compressed,
              avatar: true // or false depending on your use-case
            });
            // Wait until all files are processed
            if (_this2.arr.length === files.length) {
              let resp = yield _this2.matchService.uploadIMG(_this2.arr);
              _this2.uiService.hideLoader();
              if (resp) {
                console.log(resp);
                _this2.uiService.alertOK(_this2.translate.instant('ACCOUNT.multipleimagesuccess'));
                yield _this2.principal();
              } else {
                _this2.uiService.alertOK(_this2.translate.instant('ACCOUNT.imageError'));
              }
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();
        reader.onerror = err => {
          console.error("FileReader error:", err);
          alert('Error reading file.');
        };
        reader.readAsDataURL(file);
      }
    })();
  }
  // async addPhoto() {
  //   console.log('ADD PHOTO');
  //   const imge = await Camera.getPhoto({
  //     quality: 100,
  //     allowEditing: false,
  //     resultType: CameraResultType.Base64
  //   });
  //   this.name_img = 'profile.'+imge.format;
  //   this.image = imge.base64String;
  //   this.uiService.showLoader();
  //   let resp = await this.matchService.uploadIMG(this.name_img, this.image, true);
  //   this.uiService.hideLoader();
  //   if(resp){
  //     await this.iniUsr();
  //     this.uiService.alertOK(this.translate.instant('ACCOUNT.imageSuccess'));
  //   }else{
  //     this.uiService.alertOK(this.translate.instant('ACCOUNT.imageError'));
  //   }
  // }
  iniUsr() {
    throw new Error('Method not implemented.');
  }
  principal() {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.uiService.showLoader();
      _this3.imgsChecked = []; // ← empty array for storing selected image IDs
      _this3.galleryImgs = yield _this3.matchService.getIMGS('');
      if (!_this3.galleryImgs) {
        _this3.galleryImgs = [];
      }
      _this3.uiService.hideLoader();
    })();
  }
  save() {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.imgsChecked.length === 0) {
        _this4.uiService.alertOK(_this4.translate.instant('PHOTO-VIEW.notSelected'));
        return;
      }
      const selectedId = _this4.imgsChecked[0];
      const selectedImg = _this4.galleryImgs.find(img => img.imageId === selectedId);
      if (!selectedImg) {
        _this4.uiService.alertOK(_this4.translate.instant('PHOTO-VIEW.saveError'));
        return;
      }
      _this4.uiService.showLoader();
      const resp = yield _this4.matchService.setAvatarIMG(selectedImg.imageId.toString());
      _this4.uiService.hideLoader();
      if (resp) {
        yield _this4.uiService.alertOK_CANCEL(_this4.translate.instant('PHOTO-VIEW.save'));
        _this4.router.navigate(['main/tabs/account'], {
          queryParams: {
            reload: true
          }
        });
      } else {
        _this4.uiService.alertOK(_this4.translate.instant('PHOTO-VIEW.saveError'));
      }
    })();
  }
  openPhoto(url) {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = [{
        url: url
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
      yield _this5.modalPhoto.present();
      const res = yield _capacitor_community_photoviewer__WEBPACK_IMPORTED_MODULE_3__.PhotoViewer.show(optPhoto);
      console.log(res);
      _this5.modalPhoto.dismiss();
    })();
  }
  seleccionarImg(index, imgid) {
    const idx = this.imgsChecked.indexOf(imgid);
    if (idx > -1) {
      // Deselect
      this.imgsChecked.splice(idx, 1);
    } else {
      // Select
      this.imgsChecked.push(imgid);
    }
    console.log(this.imgsChecked); // Logs selected image IDs
  }
  back() {
    this.router.navigate(['main/tabs/account']);
  }
  delete() {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this6.imgsChecked);
      if (_this6.imgsChecked.length === 0) {
        yield _this6.uiService.alertOK(_this6.translate.instant('PHOTO-VIEW.notSelected'));
        return;
      }
      const confirm = yield _this6.uiService.alertOK_CANCEL(_this6.translate.instant('PHOTO-VIEW.deleteConfirm'));
      if (!confirm) return;
      _this6.uiService.showLoader();
      console.log(_this6.imgsChecked);
      const resp = yield _this6.matchService.deleteIMG(_this6.imgsChecked); // Pass whole array
      _this6.uiService.hideLoader();
      if (resp) {
        yield _this6.uiService.alertOK(_this6.translate.instant('PHOTO-VIEW.deleteOk'));
        yield _this6.principal(); // Refresh gallery
      } else {
        yield _this6.uiService.alertOK(_this6.translate.instant('PHOTO-VIEW.deleteError'));
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
    }, {
      type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_4__.MatchService
    }, {
      type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__.UiService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AnimationController
    }];
  }
  static {
    this.propDecorators = {
      modalPhoto: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ['mPhoto']
      }]
    };
  }
};
PhotosViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-photos-view',
  template: _photos_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_photos_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PhotosViewPage);


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

/***/ 38276:
/*!***************************************************************************!*\
  !*** ./src/app/pages/extras/photos-view/photos-view.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 19728);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 67804);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
ion-header {
  background-color: var(--ion-color-blanco);
  margin-bottom: -30px;
}

.title_txt {
  font-family: "Sk-Modernist-Bold";
  font-size: 18px;
}

.addphoto {
  margin-top: 20%;
}

.save-Bt {
  font-family: "Sk-Modernist-Bold";
  font-size: 15px;
  color: var(--ion-color-primary1);
  text-transform: none;
}

.txtTitle {
  font-family: "Sk-Modernist-Bold";
  font-size: 16px;
  color: var(--ion-color-negro);
  margin-bottom: 0;
}

.imgGallery1 {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
}

.imgSelected {
  border: 2px solid var(--ion-color-primary1);
}

.checklist {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1; /* Para asegurar que esté encima de la imagen */
  --checkbox-background-checked: var(--ion-color-primary1);
  --border-color-checked: var(--ion-color-primary1);
}`, "",{"version":3,"sources":["webpack://./../../My%20Projects/frontend-ifamily/src/app/pages/extras/photos-view/photos-view.page.scss","webpack://./src/app/pages/extras/photos-view/photos-view.page.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACI,yCAAA;EACA,oBAAA;ADEJ;;ACCA;EACI,gCAAA;EACA,eAAA;ADEJ;;ACAA;EACI,eAAA;ADGJ;;ACAA;EACI,gCAAA;EACA,eAAA;EACA,gCAAA;EACA,oBAAA;ADGJ;;ACAA;EACI,gCAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;ADGJ;;ACEA;EACI,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;ADCJ;;ACEA;EACI,2CAAA;ADCJ;;ACEA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA,EAAA,+CAAA;EACA,wDAAA;EACA,iDAAA;ADCJ","sourcesContent":["@charset \"UTF-8\";\nion-header {\n  background-color: var(--ion-color-blanco);\n  margin-bottom: -30px;\n}\n\n.title_txt {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 18px;\n}\n\n.addphoto {\n  margin-top: 20%;\n}\n\n.save-Bt {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 15px;\n  color: var(--ion-color-primary1);\n  text-transform: none;\n}\n\n.txtTitle {\n  font-family: \"Sk-Modernist-Bold\";\n  font-size: 16px;\n  color: var(--ion-color-negro);\n  margin-bottom: 0;\n}\n\n.imgGallery1 {\n  object-fit: cover;\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 10px;\n}\n\n.imgSelected {\n  border: 2px solid var(--ion-color-primary1);\n}\n\n.checklist {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 1; /* Para asegurar que esté encima de la imagen */\n  --checkbox-background-checked: var(--ion-color-primary1);\n  --border-color-checked: var(--ion-color-primary1);\n}","ion-header {\n    background-color: var(--ion-color-blanco);\n    margin-bottom: -30px;\n}\n\n.title_txt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 18px;\n}\n.addphoto{\n    margin-top: 20%;\n}\n\n.save-Bt {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 15px;\n    color: var(--ion-color-primary1);\n    text-transform: none;\n}\n\n.txtTitle {\n    font-family: 'Sk-Modernist-Bold';\n    font-size: 16px;\n    color: var(--ion-color-negro);\n    margin-bottom: 0;\n}\n\n\n\n.imgGallery1 {\n    object-fit: cover;\n    max-height: 100%;\n    max-width: 100%;\n    border-radius: 10px;\n}\n\n.imgSelected{\n    border: 2px solid var(--ion-color-primary1);\n}\n\n.checklist {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    z-index: 1; /* Para asegurar que esté encima de la imagen */\n    --checkbox-background-checked: var(--ion-color-primary1);\n    --border-color-checked: var(--ion-color-primary1);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66636:
/*!***************************************************************************!*\
  !*** ./src/app/pages/extras/photos-view/photos-view.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border ion-padding\" color=\"blanco\" >\n  <ion-toolbar color=\"blanco\" >\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"chevron-back\" (click)=\"back()\"></ion-icon>\n    </ion-buttons>\n     <ion-title class=\"title_txt\" mode=\"ios\">{{ 'PHOTO-VIEW.TitleTxt' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"save-Bt\"\n  [disabled]=\"\n    galleryImgs.length <= 1 || \n    imgsChecked.length === 0 || \n    imgsChecked.length === galleryImgs.length\n  \"\n  (click)=\"delete()\">\n  {{ 'PHOTO-VIEW.delete' | translate }}\n</ion-button>\n      <ion-button class=\"save-Bt\" (click)=\"save()\">{{ 'PHOTO-VIEW.SaveTxt' | translate }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"blanco ion-padding\" fullscreen>\n  <input type=\"file\" #fileInput accept=\"image/png, image/gif, image/jpeg\" style=\"position: absolute; width: 0; height: 0; opacity: 0\" multiple  (change)=\"testup($event)\">\n  <ion-row>\n    <ion-col></ion-col>\n     <ion-col size=\"4\" class=\"ion-no-margin ion-no-padding\">\n        <img class=\"addphoto btn-center\" src=\"../../../assets/icon/28-Add_photo.png\" (click)=\"fileInput.click()\">\n        <p class=\"btn-title\" style=\"text-align: center;\">{{ 'ACCOUNT.tAddPhoto' | translate }}</p>\n      </ion-col>\n      <ion-col></ion-col>\n  </ion-row>\n  <ion-grid style=\"margin-top: 5px;\">\n    <ion-row>\n      <ion-col>\n        <p class=\"txtTitle\">{{ 'PHOTO-VIEW.mensajeSubtitle' | translate }}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"img-col\" size=\"6\" *ngFor=\"let img of galleryImgs; let i = index\" style=\"text-align: center;align-content: center;\">\n        <img \n          [ngClass]=\"{'imgSelected': imgsChecked.includes(img.imageId), 'imgGallery1': true}\" \n          [src]=\"img.multimediaUrl\" \n          (click)=\"openPhoto(img.multimediaUrl)\" \n        />\n        \n        <ion-checkbox \n          [checked]=\"imgsChecked.includes(img.imageId)\" \n          class=\"checklist\" \n          (ionChange)=\"seleccionarImg(i, img.imageId)\">\n        </ion-checkbox>\n      </ion-col>\n      \n      <!-- <ion-col class=\"img-col\" size=\"8\">\n        <img class=\"imgGallery1\" src={{galImgs[1]}} (click)=\"openPhoto(1)\" />\n      </ion-col> -->\n    </ion-row>\n    <!--<ion-row>\n      <ion-col class=\"img-col\" size=\"4\">\n        <img class=\"imgGallery1\" src={{galImgs[2]}} (click)=\"openPhoto(2)\" />\n      </ion-col>\n      <ion-col class=\"img-col\" size=\"4\">\n        <img class=\"imgGallery1\" src={{galImgs[3]}} (click)=\"openPhoto(3)\" />\n      </ion-col>\n      <ion-col class=\"img-col\" size=\"4\">\n        <img class=\"imgGallery1\" src={{galImgs[4]}} (click)=\"openPhoto(4)\" />\n      </ion-col>\n    </ion-row> -->\n\n    <ion-modal #mPhoto class=\"modalPhoto\" [enterAnimation]=\"enterAnimation\" [leaveAnimation]=\"leaveAnimation\" >\n      <ng-template>\n        <ion-content>\n          <div id=\"photoviewer-container\" ></div>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_extras_photos-view_photos-view_module_ts.js.map