import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../environments/environment';
import { constants } from 'src/environments/constants';
import { Catalog, User } from '../interfaces/interfaces';
import { DataStorageService } from './data-storage.service';
import { FirebaseAuthService } from './firebase-auth.service';
import { GoogleSignInService } from './google-sign-in.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

const URL = environment.urlSrv;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string = '';
  private usuario: User = {};
  public sesionFin: boolean = false;
  private firebaseAuthService: any;
  public navegationExtras:NavigationExtras;

  constructor(  
    private http: HttpClient,
    private navCtrl: NavController,
    private translate: TranslateService,
    private dataStorageService: DataStorageService,
    private injector: Injector,
    private googleSignInService: GoogleSignInService
   /*  private utilitiesService: UtilitiesService, */
  ) { }
  private user: User = {};

  setUserr(user: Partial<User>) {
    this.user = { ...this.user, ...user };
  }
  

  getUserr(): User {
    return this.user;
  }
  login(username: string, password: string) {
    const data = { username, password };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    return new Promise(resolve => {
     this.http.post(`${URL}/authenticate`, data, { headers }).subscribe({
        next: async resp => {
          console.log( 'RESP LOGIN', resp );

          if( String(resp['token']).length > 0 ){
            let res_gToken = await this.guardarToken(resp['token']);

            if(res_gToken){
              const resp_ok = {
                ok: true,
                token: resp['token']
              }
              this.sesionFin = false;
              resolve(resp_ok);
            }
            else{
              const resp_err = {
                ok: false,
                mensaje: "Token Invalido"
              }
              resolve(resp_err);
            }

          } else {
            console.log("ERROR CON EL SERVIDOR", resp);
            this.token = null;
            await Storage.remove( {key: 'token'} );
            resolve(resp);
          }
        },
        error: async error => {
          console.log("ERROR CON EL SERVIDOR", error);
          this.token = null;
          await Storage.remove( {key: 'token'} );
          resolve(error);
        }
      });
    });
  }

  async resetPasssword( email: string , lang: string) {
    console.log('Email reset password', email);

    return new Promise(resolve => {
      this.http.get(`${URL}/passwoord/resetPW/${email}/${lang}`).subscribe({ 
        next: resp => {
          resolve(resp['sCode']);
        },
        error:err => {
          console.log('ERROR RESET PASSWORD', err);
          resolve(500);
        }
      });
    });
  }

  register(usuario: User) {
   
    const headers = new HttpHeaders()

          .set('Content-Type', 'application/json');
          
    return new Promise(resolve => {
      this.http.post(`${URL}/register`, usuario, { headers }).subscribe({

        next: async resp => {
          resolve(resp);
         
          /* if (resp['ok']) {
            this.guardarToken(resp['token']);
            resolve(resp);
          } else {
            this.token = null;
            await Storage.remove( {key: 'token'} );
            resolve(resp);
          } */
        },
        error: async error => {
          console.log("ERROR CON EL SERVIDOR", error);
          this.token = null;
          await Storage.remove( {key: 'token'} );
          resolve(error);
        }
      });
    });
  }

  update(usuario: User) {
     console.log("editing save on backup : ",usuario)
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);
         
    return new Promise(resolve => {
      this.http.post(`${URL}/discover/update`, usuario, { headers }).subscribe({
        next: async resp => {
          if(resp['sCode'] != 1) {
            resolve(false);
            return;
          }
          resolve(true);
          return;
        },
        error: async error => {
          console.log("ERROR CON EL SERVIDOR", error);
          resolve(false);
        }
      });
    });
  }

  locationnewapi(lat: any,lon: any) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    const locationapi={
      lat:lat,
      lon:lon
    }
          
    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/location`, locationapi, { headers }).subscribe({
        next: async resp => {
          console.log(resp);
          resolve(resp);   
        },
        error: async error => {
          console.log("ERROR CON EL SERVIDOR", error);
          resolve(false);
        }
      });
    });
  }

  changePassword(change: User) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);
          
    return new Promise(resolve => {
      this.http.post(`${URL}/discover/changePassword`, change, { headers }).subscribe({
        next: async resp => {
          resolve(resp['sCode']);
          return;
        },
        error: async error => {
          console.log("ERROR CON EL SERVIDOR", error);
          resolve(error['sCode']);
        }
      });
    });
  }

  async guardarToken(token: string) {
    this.token = token;
    await Storage.set({
      key: 'token',
      value: token
    });

    const tokenValido = await this.validaToken();
  
    if (!tokenValido) {
      return false;
    }

    return true;
  }

  async cargarToken() {
    const { value } = await Storage.get({ key: 'token' });
    this.token = value;
  }

  async validaToken(): Promise<boolean> {
    await this.cargarToken();

    if (!this.token) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>((resolve, reject) => {
      const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);
      
      try {
        this.http.get(`${ URL }/validaToken`, { headers }).subscribe({
          next: resp => {
            //console.log('RESPUESTA VALIDA TOKEN: ', resp);
            
            if (resp['sCode'] == 200) {
              //this.usuario = resp;
              resolve(true);
            } else {
              this.sesionFin = true;
              this.navCtrl.navigateRoot('/login');
              resolve(false);
            }

          }, 
          error: err => {
            console.log('ERRO VALIDA-TOKEN: ', err);
            this.sesionFin = true;
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }  
        });
      } catch (err) {
        console.log('ERROR LOGIN: ', err);
        this.sesionFin = true;
        this.navCtrl.navigateRoot('/login');
        reject(err);;
      }

    })
  }

  async getUser(userX: string) {
    if( !this.usuario?.personId ) {
       
    }

    return new Promise<User>((resolve, reject) => {
      const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);
      
      this.http.get(`${ URL }/discover/get-profile/${userX}`, { headers }).subscribe({
        next: async resp => {
          if (resp['sCode'] == 2) {
            let usr: User = resp['sData'];
            this.usuario = usr;
            let res;
            res =  await this.getXCatalogo(constants.catalogs.IamA),
            usr.iam_a = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.IamLooking),
            usr.iam_looking = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Ejercicio),
            usr.exercise = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Sing),
            usr.sings = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Educacion),
            usr.education = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Bebe),
            usr.drinking = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Fuma),
            usr.smoking = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Hijos),
            usr.kids = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Religion),
            usr.religion = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Gender),
            usr.gender = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Pronoun),
            usr.pronoun = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Lenguage),
            usr.languajes = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Hobbies),
            usr.hobbies = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Pets),
            usr.pets = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Values_Traits),
            usr.valTraits = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Drugs),
            usr.drugs = res == ''? null : res;
            res =  await this.getXCatalogo(constants.catalogs.Political),
            usr.political = res == ''? null : res;

            resolve(usr);
          } else {
            resolve({});
          }

        }, 
        error: err => {
          console.log('ERRO VALIDA-TOKEN: ', err);
          this.sesionFin = true;
          this.navCtrl.navigateRoot('/login');
          resolve({});
        }  
      });
    })

    //return { ...this.usuario };
  }

  async getUserOnly(userX: string) {
    if( !this.usuario?.personId ) {
       
    }

    return new Promise<User>((resolve, reject) => {
      const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);
      
      this.http.get(`${ URL }/discover/get-profile/${userX}`, { headers }).subscribe({
        next: async resp => {
          if (resp['sCode'] == 2) {
            let usr: User = resp['sData'];
            this.usuario = usr;
            resolve(usr);
          } else {
            resolve({});
          }

        }, 
        error: err => {
          console.log('ERRO VALIDA-TOKEN: ', err);
          this.sesionFin = true;
          this.navCtrl.navigateRoot('/login');
          resolve({});
        }  
      });
    })

    //return { ...this.usuario };
  }

  async getUserBasic3(userX: string) {

    return new Promise<User>((resolve, reject) => {
      const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);
      
      this.http.get(`${ URL }/discover/get-profile/`+userX, { headers }).subscribe({
        next: async resp => {
          if (resp['sCode'] == 2) {
            console.log('USER BASIC',resp['sData']);
            resolve(resp['sData']);
          } else {
            resolve({});
          }
        }, 
        error: err => {
          console.log('ERRO VALIDA-TOKEN: ', err);
          this.sesionFin = true;
          this.navCtrl.navigateRoot('/login');
          resolve({});
        }  
      });
    })
  }

  async getUserBasic(userX: string) {

    return new Promise<User>((resolve, reject) => {
      const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);
      
      this.http.get(`${ URL }/discover/get-profile`, { headers }).subscribe({
        next: async resp => {
          if (resp['sCode'] == 2) {
            console.log('USER BASIC',resp['sData']);
            resolve(resp['sData']);
          } else {
            resolve({});
          }
        }, 
        error: err => {
          console.log('ERRO VALIDA-TOKEN: ', err);
          this.sesionFin = true;
          this.navCtrl.navigateRoot('/login');
          resolve({});
        }  
      });
    })
  }

  async getUserBasic2(userX: string) {

    return new Promise<User>((resolve, reject) => {
      const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);
      
      this.http.get(`${ URL }/discover/get-profile`, { headers }).subscribe({
        next: async resp => {
          if (resp['sCode'] == 2) {
            console.log('USER BASIC',resp['sData']);
            resolve(resp['sData']);
          } else {
            resolve({});
          }
        }, 
        error: err => {
          console.log('ERRO VALIDA-TOKEN: ', err);
          this.sesionFin = true;
          this.navCtrl.navigateRoot('/login');
          resolve({});
        }  
      });
    })
  }

  async getCatalogo3( catalogueId: string, lang: string,birth:any,gender:any,mail:any) {
    const data = 
    {
      "catalogueId": catalogueId,
      "lang": lang,
      "email": mail,
      "gender": gender,
      "birthDay": birth
  };
   
    console.log('dataa',data);
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/get-items`, data, { headers }).subscribe({ 
        next: resp => {
          console.log('catalogue res',resp);
          if(resp['sCode'] == 2) {
            let arreglo = <Catalog[]> [];
            //ordenarlos por orden que defina el usuario
            if(resp['sData'] !== null){ 
              arreglo = resp['sData'].sort((a,b) => (a.orderRow > b.orderRow ? 1 : -1));
            }
            resolve(arreglo);
          } else {
            resolve([]);
          }
        },
        error:err => {
          console.log('ERR GET CATALOGO', err);
          resolve([]);
        }
      });
    });
  }
  async getCatalogo2( catalogueId: string, lang: string,birth:any,gender:any,mail:any) {
    const data = 
    {
      "catalogueId": catalogueId,
      "lang": lang,
      "email": mail,
      "gender": gender,
      "birthDay": birth
  };
   
    console.log('dataa',data);
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
         // .set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/get-items`, data, { headers }).subscribe({ 
        next: resp => {
          console.log('catalogue res',resp);
          if(resp['sCode'] == 2) {
            let arreglo = <Catalog[]> [];
            //ordenarlos por orden que defina el usuario
            if(resp['sData'] !== null){ 
              arreglo = resp['sData'].sort((a,b) => (a.orderRow > b.orderRow ? 1 : -1));
            }
            resolve(arreglo);
          } else {
            resolve([]);
          }
        },
        error:err => {
          console.log('ERR GET CATALOGO', err);
          resolve([]);
        }
      });
    });
  }

  async getCatalogo( catalogueId: string, lang: string) {
    const data = { catalogueId, lang };
    console.log('catalogue id',catalogueId)
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
        //  .set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/get-items`, data, { headers }).subscribe({ 
        next: resp => {
          console.log('catalogue res',resp);
          if(resp['sCode'] == 2) {
            let arreglo = <Catalog[]> [];
            //ordenarlos por orden que defina el usuario
            if(resp['sData'] !== null){ 
              arreglo = resp['sData'].sort((a,b) => (a.orderRow > b.orderRow ? 1 : -1));
            }
            resolve(arreglo);
          } else {
            resolve([]);
          }
        },
        error:err => {
          console.log('ERR GET CATALOGO', err);
          resolve([]);
        }
      });
    });
  }

  async getCatalogoImLookingFor2( catalogueId: string, lang: string, iAmId: string,email:any) {
    const data = { 
      "catalogueId": catalogueId, 
      "lang": lang, 
      "imId": iAmId,
      "email": email
    };

    console.log(data);

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);
        

    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/get-items`, data, { headers }).subscribe({ 
        next: resp => {
          console.log("looking for",resp);
          if(resp['sCode'] == 2) {
            let arreglo = <Catalog[]> [];
            //ordenarlos por orden que defina el usuario
            if(resp['sData'] !== null){ 
              arreglo = resp['sData'].sort((a,b) => (a.orderRow > b.orderRow ? 1 : -1));
            }
            resolve(arreglo);
          } else {
            resolve([]);
          }
        },
        error:err => {
          console.log('ERR GET CATALOGO', err);
          resolve([]);
        }
      });
    });
  }
  async getCatalogoImLookingFor( catalogueId: string, lang: string, iAmId: string,email:any) {
    const data = { 
      "catalogueId": catalogueId, 
      "lang": lang, 
      "imId": iAmId,
      "email": email
    };

    console.log(data);

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
        

    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/get-items`, data, { headers }).subscribe({ 
        next: resp => {
          console.log("looking for",resp);
          if(resp['sCode'] == 2) {
            let arreglo = <Catalog[]> [];
            //ordenarlos por orden que defina el usuario
            if(resp['sData'] !== null){ 
              arreglo = resp['sData'].sort((a,b) => (a.orderRow > b.orderRow ? 1 : -1));
            }
            resolve(arreglo);
          } else {
            resolve([]);
          }
        },
        error:err => {
          console.log('ERR GET CATALOGO', err);
          resolve([]);
        }
      });
    });
  }

  async setCatalogo( id: string | number ) {
    console.log('id',id);
    const tVal = await this.validaToken();
    if( !tVal ) {
      return;
    }

    console.log('ID SET CATALOGO', id);
    

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/catalogue/set-item-xperson/${id}`, { headers }).subscribe({ 
        next: resp => {
          if (resp['sCode'] != 200) {
            resolve(false);
          }
          resolve(true);
        },
        error:err => {
          console.log('ERR SET CATALOGO', err);
          resolve(false);
        }
      });
    });
  }

  async setCatalogoMultiple( id_catalogo: number, opCat: any ) {
    const tVal = await this.validaToken();
    if( !tVal ) {
      return;
    }
    let elementos = [];
    if(Array.isArray(opCat)){
      elementos = opCat.map((item) => {
        return { item_id: item };
      });
    }else{
      elementos.push({item_id: opCat});
    }
    

    const data = { id_catalogo, elementos };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/update-items`,  data, { headers }).subscribe({ 
        next: resp => {
          if (resp['sCode'] != 70) {
            resolve(false);
          }
          resolve(true);
        },
        error:err => {
          console.log('ERR SET CATALOGO', err);
          resolve(false);
        }
      });
    });
  }

  async getXCatalogo( idCatalogo: number ) {
  

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/catalogue/get-item-xperson/${idCatalogo}`, { headers }).subscribe({ 
        next: resp => {
          if (resp['sCode'] == 2) {
            const res = resp['sData'];
            if(res === null){
              resolve('');
              return;
            }
            let arreglo = [];
            res.forEach(element => {
                arreglo.push(element.id);
            });
            resolve(arreglo);
            return;
          }
          resolve('');
        },
        error:err => {
          console.log('ERR GET X CATALOGO', err);
          resolve('');
        }
      });
    });
  }

  async logout() {
    this.token = null;
    this.usuario = null;
    await Storage.remove( {key: 'token'} );
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  async getCountries() {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          //.set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/catalogue/countries`, { headers }).subscribe({ 
        next: resp => {
          console.log(resp);
          resolve(resp['sData'] ? resp['sData'] : []);
        },
        error:err => {
          console.log('ERR GET COUNTRIES', err);
          resolve([]);
        }
      });
    });
  }

  async getStates( country: string ) {
    const data = { country };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/state`, data, { headers }).subscribe({ 
        next: resp => {
          resolve(resp['sData'] ? resp['sData'] : []);
        },
        error:err => {
          console.log('ERR POST STATES', err);
          resolve([]);
        }
      });
    });
  }

  async getCities(country, state) {
    let data = {country, state};
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/city`, data, { headers }).subscribe({ 
        next: resp => {
          resolve(resp['sData'] ? resp['sData'] : []);
        },
        error:err => {
          console.log('ERR POST CITIES', err);
          resolve([]);
        }
      });
    });
  }

  get personId(): string {
  return this.usuario?.personId || null;
}

  async getParametros( paramTerminos: string ): Promise<string> {
    const data = { paramTerminos };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          //.set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/catalogue/terminos`, data, { headers }).subscribe({ 
        next: resp => {
          resolve(resp ? resp['valor'] : '');
        },
        error:err => {
          console.log('ERR POST PARAMETERS', err);
          resolve('');
        }
      });
    });
  }

  async setUserRS( email: string, password: string, rs: string ) {
    this.dataStorageService.set('email', email);
    this.dataStorageService.set('password', password);
    this.dataStorageService.set('rs', rs);
  }

  async getUserRS() {
    let email = await this.dataStorageService.get('email');
    let password = await this.dataStorageService.get('password');
    let rs = await this.dataStorageService.get('rs');
    return { email, password, rs };
  }

  async removeUserRS() {
    await this.dataStorageService.remove('email');
    await this.dataStorageService.remove('password');
    await this.dataStorageService.remove('rs');
  }

  async deleteAccount(): Promise<boolean> {
    const tVal = await this.validaToken();
    if( !tVal ) {
      return;
    }
    
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.delete(`${URL}/discover/delete`, { headers }).subscribe({
        next: resp => {
          console.log(resp); 
          if(resp['sCode'] == 200) {
            resolve(true);
          } else
            resolve(false);
        },
        error:err => {
          console.log('ERR DELTE USER', err);
          resolve(false);
        }
      });
    });
  }

  async existI(email: string) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')

    return new Promise(resolve => {
      this.http.get(`${URL}/discover/existEmail/${email}`, { headers }).subscribe({ 
        next: resp => {
          resolve(true);
        },
        error:err => {
          console.log('ERR GET COUNTRIES', err);
          resolve(false);
        }
      });
    });
  }

  async upPas( email: string, password: string ) {
    const data = { email, password };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')

    return new Promise(resolve => {
      this.http.post(`${URL}/discover/updatePassword`, data, { headers }).subscribe({ 
        next: resp => {
          resolve(true);
        },
        error:err => {
          console.log('ERR POST PARAMETERS', err);
          resolve(false);
        }
      });
    });
  }

  async getCodeEmail(email: string, lang: string) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')

    return new Promise(resolve => {
      this.http.get(`${URL}/passwoord/verifyCodeEmail/${email}/${lang}`, { headers }).subscribe({ 
        next: resp => {          
          resp["sCode"] == 200 ? resolve(true) : resolve(false);
        },
        error:err => {
          console.log('ERR GET COUNTRIES', err);
          resolve(false);
        }
      });
    });
  }

  async validaCodeEmail(email: string, code: string) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')

    return new Promise(resolve => {
      this.http.get(`${URL}/passwoord/verifyCode/${email}/${code}`, { headers }).subscribe({ 
        next: resp => {
          resolve(resp["sCode"]);
        },
        error:err => {
          console.log('ERR POST PARAMETERS', err);
          resolve('-30');
        }
      });
    });
  }

  private getFirebaseAuthService() {
    if (!this.firebaseAuthService) {
      this.firebaseAuthService = this.injector.get(FirebaseAuthService);
    }
    return this.firebaseAuthService;
  }

  async loginWithEmail(): Promise<boolean> {
    const { email, password } = await this.getUserRS();
    if (email && password) {
      const valido = await this.login(email, password);
      return valido['ok'];
    }
    return false;
  }

  async loginWithGoogle(): Promise<boolean> {
    return await this.loginWithEmail();
    try {
      const idToken = await this.googleSignInService.refreshToken();
      console.log('idToken', idToken);
  
      if (idToken) {
        return await this.loginWithEmail();
      }
    } catch (error) {
      console.error('Error en loginWithGoogle:', error);
    }
  }

  async loginWithApple(): Promise<boolean> {
    return await this.loginWithEmail();
    try {
      const idToken = await this.getFirebaseAuthService().getIdToken({ forceRefresh: true });
      if (idToken) {
        return await this.loginWithEmail();
      }
    } catch (error) {
      console.error('Error al obtener ID Token de Apple:', error);
    }
    return false;
  }

}
