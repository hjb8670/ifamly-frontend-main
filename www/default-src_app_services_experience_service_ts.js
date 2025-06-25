"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_experience_service_ts"],{

/***/ 29340:
/*!************************************************!*\
  !*** ./src/app/services/experience.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceService: () => (/* binding */ ExperienceService)
/* harmony export */ });
/* harmony import */ var _Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 21124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33712);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 36716);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 90628);
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.service */ 61412);







const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlSrv;
let ExperienceService = class ExperienceService {
  constructor(http, userService) {
    this.http = http;
    this.userService = userService;
  }
  getExperiences(pagNextId, pagRecordLimit, location, experienceCategoryId) {
    var _this = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('category id', experienceCategoryId);
      const data = {
        pagNextId,
        pagRecordLimit,
        location,
        experienceCategoryId
      };
      console.log('DATA-EXP: ', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this.userService.token);
      return new Promise(resolve => {
        _this.http.post(`${URL}/experience/find`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RESP EXP: ', resp);
            resolve(resp['sData'] === null ? [] : resp['sData']);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getMyExperiences(pagNextId, pagRecordLimit, experienceCategoryId) {
    var _this2 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        pagNextId,
        pagRecordLimit,
        experienceCategoryId
      };
      console.log('DATA: ', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this2.userService.token);
      return new Promise(resolve => {
        _this2.http.post(`${URL}/experience/get-by-user`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RESP MY EXP: ', resp);
            resolve(resp['sData'] === null ? [] : resp['sData']);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  getExperiencesById(experienceId) {
    var _this3 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this3.userService.token);
      return new Promise(resolve => {
        _this3.http.get(`${URL}/experience/get/` + experienceId, {
          headers
        }).subscribe({
          next: resp => {
            resolve(resp['sData'] === null ? [] : resp['sData']);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve({});
          }
        });
      });
    })();
  }
  getOwnerExperiences(ownerId) {
    var _this4 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this4.userService.token);
      return new Promise(resolve => {
        _this4.http.get(`${URL}/user/` + ownerId, {
          headers
        }).subscribe({
          next: resp => {
            resolve(resp['sData'] === null ? [] : resp['sData']);
          },
          error: err => {
            console.log('ERR OWNER EXPERIENCES', err);
            resolve({});
          }
        });
      });
    })();
  }
  setInterestExperiences(experienceId) {
    var _this5 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this5.userService.token);
      return new Promise(resolve => {
        _this5.http.get(`${URL}/experience/guests/register-guest/${experienceId}`, {
          headers
        }).subscribe({
          next: resp => {
            console.log();
            resolve(resp['sMsg']);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve({});
          }
        });
      });
    })();
  }
  addExperience(experience) {
    var _this6 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        ...experience
      };
      console.log('DATA EXP: ', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this6.userService.token);
      return new Promise(resolve => {
        _this6.http.post(`${URL}/experience/add`, data, {
          headers
        }).subscribe({
          next: resp => {
            resolve(resp['sData'] === null ? null : resp['sData']);
          },
          error: err => {
            console.log('ERR ADD EXPERIENCE', err);
            resolve(null);
          }
        });
      });
    })();
  }
  updateExperience(experience) {
    var _this7 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        ...experience
      };
      console.log('DATA EXP: ', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this7.userService.token);
      return new Promise(resolve => {
        _this7.http.post(`${URL}/experience/update`, data, {
          headers
        }).subscribe({
          next: resp => {
            resolve(resp['sData'] === null ? null : resp['sData']);
          },
          error: err => {
            console.log('ERR ADD EXPERIENCE', err);
            resolve(null);
          }
        });
      });
    })();
  }
  getIMGS(experienceId) {
    var _this8 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const tVal = await this.userService.validaToken();
      // if( !tVal ) {
      //   return;
      // }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this8.userService.token);
      return new Promise(resolve => {
        _this8.http.get(`${URL}/experience/image/${experienceId}`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] == 200) {
              resolve(resp['sData']);
            } else resolve([]);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  deleteExperience(experienceId) {
    var _this9 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this9.userService.token);
      return new Promise(resolve => {
        _this9.http.delete(`${URL}/experience/delete/${experienceId}`, {
          headers
        }).subscribe({
          next: resp => {
            console.log(resp);
            if (resp['sCode'] == 200) {
              resolve(true);
            } else resolve(false);
          },
          error: err => {
            console.log('ERR DELTE EXPERIENCE', err);
            resolve(false);
          }
        });
      });
    })();
  }
  uploadIMG(experienceId, multimediaName, multimediaBase64) {
    var _this10 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //hOMOLOGAR TAMAÑO DE IMAGENES.
      multimediaBase64 = yield _utilities_service__WEBPACK_IMPORTED_MODULE_3__.UtilitiesService.compressBase64Image(multimediaBase64, 800, 800, 0.7);
      const data = {
        multimediaName,
        multimediaBase64,
        expressionId: experienceId,
        avatar: true
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this10.userService.token);
      return new Promise(resolve => {
        _this10.http.post(`${URL}/experience/image`, data, {
          headers
        }).subscribe({
          //this.http.post(`https://ifmly.com/experience/image`, data, { headers }).subscribe({ 
          next: resp => {
            console.log(resp);
            if (resp['sCode'] == 3) {
              resolve(true);
            } else resolve(false);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  getAllUsers(experienceId) {
    var _this11 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this11.userService.token);
      return new Promise(resolve => {
        _this11.http.get(`${URL}/experience/guests/get-guests/${experienceId}`, {
          headers
        }).subscribe({
          next: resp => {
            if (resp['sCode'] == 200) {
              resolve(resp['sData']);
            } else resolve([]);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  updateGuest(personId, experienceId, status) {
    var _this12 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        personId,
        experienceId,
        status
      };
      console.log('DATA-GUEST-UPDATE: ', data);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this12.userService.token);
      return new Promise(resolve => {
        _this12.http.post(`${URL}/experience/guests/update-guest`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log(resp);
            resolve(resp['sData'] === null ? [] : resp['sData']);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve([]);
          }
        });
      });
    })();
  }
  checkedRegisterGuest(experienceId) {
    var _this13 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this13.userService.token);
      return new Promise(resolve => {
        _this13.http.get(`${URL}/experience/guests/check-register-guest/${experienceId}`, {
          headers
        }).subscribe({
          next: resp => {
            console.log('ES GUEST REGISTER: ', resp);
            if (resp['sCode'] == 200) {
              //resolve(true);
              resolve(resp['sData'].found);
            } /* else
              resolve(false); */
          },
          error: err => {
            console.log('ERR CHECK GUEST REGISTER: ', err);
            resolve(false);
          }
        });
      });
    })();
  }
  deleteInterestExperiences(experienceId) {
    var _this14 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this14.userService.token);
      return new Promise(resolve => {
        _this14.http.get(`${URL}/experience/guests/deregister-guest/${experienceId}`, {
          headers
        }).subscribe({
          next: resp => {
            console.log(resp);
            resolve(resp['sMsg']);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve({});
          }
        });
      });
    })();
  }
  setFeedbackExperience(targetExperience, rate, comment) {
    var _this15 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        targetExperience,
        rate,
        comment
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this15.userService.token);
      return new Promise(resolve => {
        _this15.http.post(`${URL}/experience/feedback`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RES FEED-BACK EXP: ', resp['sData']);
            resolve(resp['sData']);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  getRatesHost(idHost) {
    var _this16 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this16.userService.token);
      return new Promise(resolve => {
        _this16.http.get(`${URL}/experience/feedback/user/${idHost}`, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RES FEEDBACKS HOST: ', resp['sData']);
            resolve(resp['sData']);
          },
          error: err => {
            console.log('ERR MATCHES', err);
            resolve({});
          }
        });
      });
    })();
  }
  setFeedbackExperienceAssistant(idAssistant, targetExperience, rate, comment) {
    var _this17 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        targetExperience,
        rate,
        comment
      };
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this17.userService.token);
      return new Promise(resolve => {
        _this17.http.post(`${URL}/experience/feedback/${idAssistant}`, data, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RES FEED-BACK EXP: ', resp['sData']);
            resolve(resp['sData']);
          },
          error: err => {
            console.log('ERR CATALOGO', err);
            resolve(false);
          }
        });
      });
    })();
  }
  getRatesAssistan(idAssistant) {
    var _this18 = this;
    return (0,_Users_mac_Desktop_My_Projects_frontend_ifamily_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', _this18.userService.token);
      return new Promise(resolve => {
        _this18.http.get(`${URL}/experience/guests/get-guests/user/${idAssistant}`, {
          headers
        }).subscribe({
          next: resp => {
            console.log('RES FEEDBACKS ASSISTAN: ', resp['sData']);
            resolve(resp['sData']);
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
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
    }, {
      type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
    }];
  }
};
ExperienceService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], ExperienceService);


/***/ }),

/***/ 61412:
/*!***********************************************!*\
  !*** ./src/app/services/utilities.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=default-src_app_services_experience_service_ts.js.map