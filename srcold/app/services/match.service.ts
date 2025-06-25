import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { DiscoverUsr, MatchPerson, User, ImagesUser } from '../interfaces/interfaces';
import { UtilitiesService } from './utilities.service';
import { UiService } from './ui.service';
import { constants } from 'src/environments/constants';
import { Storage } from '@capacitor/storage';
const URL = environment.urlSrv;

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  token: string = '';
  map(arg0: (image: any, index: any) => Promise<void>): any {
    throw new Error('Method not implemented.');
  }

  private user: User;
  public todayMatchPerson: MatchPerson[];
  public yesterdayMatchPerson: MatchPerson[];
  public oldMatchPerson: MatchPerson[];
  public matchPerson:MatchPerson[];
  public newMatch:boolean

  constructor(
    private http: HttpClient,
    private userService: UserService,
    public uiService:UiService
  ) { }

  async principal(){
    /* */
    // this.uiService.showLoader();
    this.user = await this.userService.getUserBasic('');
    console.log("Basic prince");

    this.todayMatchPerson = <MatchPerson[]> await this.getMatches(constants.matcheOlder.today, this.user.personId);
    this.setAvatarImg(this.todayMatchPerson);
    this.yesterdayMatchPerson = <MatchPerson[]> await this.getMatches(constants.matcheOlder.yesterday, this.user.personId);
    this.setAvatarImg(this.yesterdayMatchPerson);
    this.oldMatchPerson = <MatchPerson[]> await this.getMatches(constants.matcheOlder.old, this.user.personId);
    this.setAvatarImg(this.oldMatchPerson);
    this.uiService.hideLoader();
    // console.log('MATCH TODAY: ', this.todayMatchPerson);
    // console.log('MATCH YESTERADY: ', this.yesterdayMatchPerson);
    // console.log('MATCH OLD: ', this.oldMatchPerson);
    if(this.todayMatchPerson.length > 0){
      this.todayMatchPerson.forEach(x => {
        this.matchPerson.push(x);
      })
    }
    this.todayMatchPerson.length > 1 ? this.newMatch = true : this.newMatch = false;
    if(this.yesterdayMatchPerson.length > 0){
      this.yesterdayMatchPerson.forEach(x => {
        this.matchPerson.push(x);
      })
    }
    if(this.oldMatchPerson.length > 0){
      this.oldMatchPerson.forEach(x => {
        this.matchPerson.push(x);
      })
    }
    this.uiService.loader ? this.uiService.hideLoader : null;
    
  }

  async setAvatarImg(matchP: MatchPerson[]) {
 
    for (const usr of matchP) {
      usr.image = '../../../assets/icon/30-Default_no-image.jpeg';
      // validación para tomar el otro usuario del match
      let personId = (usr.personLiked.toString() == this.user.personId ? usr.personLikes : usr.personLiked);
      let res_imgs =  <ImagesUser[]> await this.getIMGSOfPerson(personId.toString());
      res_imgs = res_imgs.filter(res => res.avatar);
      usr.image = res_imgs[0]?.multimediaUrl;
      /*for (const img of res_imgs) {
        if(img.avatar) {
          usr.image = img.multimediaUrl;
        }
      }*/
    }

  }

  async getDiscoverProfiles( pagNextId: string, pagRecordLimit: string, filter: {} ) {
     

    const data = '';
    // { pagNextId, pagRecordLimit, ...filter };
    // if(Array.isArray(data["selfRole"])){data["selfRole"] = Number(data["selfRole"][0])}
    // if(Array.isArray(data["targetRole"])){data["targetRole"] = Number(data["targetRole"][0])}
    // console.log('DATA (find-profile): ', data);
    

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/discover/find-profile`, data, { headers }).subscribe({ 
        next: async resp => {
          if(resp['sCode'] == 200) {
            let usrs_discover = <DiscoverUsr[]> resp['sData'] === undefined ? [] : resp['sData'];

            /* for (const usr of usrs_discover) {
              let resCat = await this.getCatalogueXUsr(usr.personId.toString(), constants.catalogs.IamA.toString()); 
              usr.iam_a = resCat[0]?.name;
            } */

            resolve(usrs_discover);
          }else{
            if(resp['sCode'] == -20){
              resolve(null);  
            }
            resolve([]);
          }
        },
        error:err => {
          console.log('ERR OBTENER PERFILES', err);
          resolve([]);
        }
      });
    });
  }

  async getCatalogueXUsr(idDiscover: string, idCatalogue: string) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/catalogue/person/${idDiscover}/catalogue/${idCatalogue}`, { headers }).subscribe({ 
        next: resp => {
          let usrs_Discover = resp['sData']
          if(resp['sCode'] == 2){
            //const resID = resp['sData'];
            resolve(resp['sData']);
          }

          resolve({});
        },
        error:err => {
          console.log('ERR MATCHES', err);
          resolve({});
        }
      });
    });
  }

  async doMatchProfiles( personLiked: string, accionId: string, isLike: string, isSuperLike: string , matchId: number) {
     

    const data = { personLiked, accionId, isLike, isSuperLike , matchId};
    console.log('DATA (crear-like): ', data);
    

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/match/crear-like`, data, { headers }).subscribe({ 
        next: resp => {
          console.log('RESP (crear-like): ', resp);

          if(resp['sCode'] != 7) {
            resolve(false)
          }
          
          resolve(true);
        },
        error:err => {
          console.log('ERR CREATE-LIKE', err);
          resolve(false);
        }
      });
    });
  }

  async getMatches( fecha: string , personIdOwner: string) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/match/matches/${fecha}`, { headers }).subscribe({ 
        next: async resp => {
          let usrMatchPerson = <MatchPerson[]> resp['sData']
          for (const usr of usrMatchPerson) {
            let personId = (usr.personLiked.toString() == personIdOwner ? usr.personLikes : usr.personLiked);
            let dataUsr = <User> await this.userService.getUser(personId.toString());
            usr.name = dataUsr.firstName;
            usr.lastName =  dataUsr.lastName;
            usr.age = dataUsr.age
          }

          console.log('RES - Matches: ', usrMatchPerson);
          
          resolve(usrMatchPerson);
        },
        error:err => {
          console.log('ERR MATCHES', err);
          resolve({});
        }
      });
    });
  }

  /* async getMatchUser( matchId: number ) {
     

    const data = { id: matchId };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/discover/getDiscoveredProfile`, data, { headers }).subscribe({ 
        next: resp => {
          resolve(resp['sData']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve({});
        }
      });
    });
  } */

  async setFeedback( targetProfile: number, rate: number, comment: string ) {
     

    const data = { selfProfile: (await this.userService.getUser('')).personId, targetProfile, rate, comment };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/discover/feedback`, data, { headers }).subscribe({ 
        next: resp => {
          console.log('RES SET FEED-BACK: ', resp['sData']);
          
          resolve(resp['sData']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve(false);
        }
      });
    });
  }

  async getRates( idMatch: number ) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/discover/feedback/${idMatch}`, { headers }).subscribe({ 
        next: resp => {
          console.log('RES GET FEEDBACKS: ', resp['sData']);
          
          resolve(resp['sData']);
        },
        error:err => {
          console.log('ERR MATCHES', err);
          resolve({});
        }
      });
    });
  }

  async uploadIMG( imagesArray: any[]) {
   
    // Homologar tamaño de imagenes
   
   console.log(imagesArray);
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/discover/image`, imagesArray, { headers }).subscribe({ 
      //this.http.post(`https://ifmly.com/discover/image`, data, { headers }).subscribe({ 
        next: resp => {
          if(resp['sCode'] == 3) {
            resolve(true);
          } else
            resolve(false);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve(false);
        }
      });
    });
  }
  
  async uploadIMG2( imagesArray: any[]) {
   
    // Homologar tamaño de imagenes
    const { value } = await Storage.get({ key: 'token' });
       this.token = value;
   console.log(imagesArray);
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/discover/image`, imagesArray, { headers }).subscribe({ 
      //this.http.post(`https://ifmly.com/discover/image`, data, { headers }).subscribe({ 
        next: resp => {
          if(resp['sCode'] == 3) {
            resolve(true);
          } else
            resolve(false);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve(false);
        }
      });
    });
  }

  async getIMGS( personId: string ) {
   
    console.log("GetImags: ",personId)
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/discover/image`, { headers }).subscribe({ 
        next: resp => {
          if(resp['sCode'] == 200) {
            console.log("images of person :",resp['sData'])
            resolve(resp['sData']);
          } else
            resolve([]);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve([]);
        }
      });
    });
  }

    async getIMGSOfPerson( personId: string ) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/discover/image/${personId}`, { headers }).subscribe({ 
        next: resp => {
          if(resp['sCode'] == 200) {
            console.log("images of person :",resp['sData'])
            resolve(resp['sData']);
          } else
            resolve([]);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve([]);
        }
      });
    });
  }

  async setAvatarIMG( imageId: string ) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/discover/image/set-avatar/${imageId}`, { headers }).subscribe({ 
        next: resp => {
          if(resp['sCode'] == 200) {
            resolve(true);
          } else
            resolve(false);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve(false);
        }
      });
    });
  }

  async deleteIMG(imageIds: number[]) {
    
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.userService.token);
  
    return new Promise(resolve => {
      this.http.request('delete', `${URL}/discover/image`, {
        headers,
        body: imageIds // 👈 Important: sending array in body
      }).subscribe({
        next: resp => {
          resolve(resp['sCode'] == 3);
        },
        error: err => {
          console.log('❌ Delete Error:', err);
          resolve(false);
        }
      });
    });
  }
  

  async rollbackLike( personaId: string) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/match/rollback/${personaId}`, { headers }).subscribe({ 
        next: resp => {
          if(resp['sCode'] == 200) {
            resolve(true);
          } else
            resolve(false);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve(false);
        }
      });
    });
  }

  async blockMatch( matchId: number, report: string) {
     

    const data = { matchId, report};
    console.log('DATA (/block-like-match): ', data);
    

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/match/block-like-match`, data, { headers }).subscribe({ 
        next: resp => {
          console.log('RESP (block-like-match): ', resp);

          if(resp['sCode'] != 200) {
            resolve(false)
            return;
          }
          
          resolve(true);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve(false);
        }
      });
    });
  }

  async getConversationXUsr(personId: string) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/match/conversation/${personId}`, { headers }).subscribe({ 
        next: resp => {
          let usrs_Discover = [];
          if(resp['sCode'] === 200){
            usrs_Discover = resp['sData'];
          }
          resolve(usrs_Discover);
        },
        error:err => {
          console.log('ERR CONVERSATION', err);
          resolve([]);
        }
      });
    });
  }

}
