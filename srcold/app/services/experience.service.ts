import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { Experience, InterestedUsr } from '../interfaces/interfaces';
import { UtilitiesService } from './utilities.service';

const URL = environment.urlSrv;

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  async getExperiences( pagNextId: string, pagRecordLimit: string, location: {}, experienceCategoryId: number ) {
    console.log('category id',experienceCategoryId);

     

    const data = { pagNextId, pagRecordLimit, location, experienceCategoryId };
    console.log('DATA-EXP: ', data);
    

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/experience/find`, data, { headers }).subscribe({ 
        next: resp => {
          console.log('RESP EXP: ', resp);
          
          resolve(resp['sData'] === null ? [] : resp['sData']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve([]);
        }
      });
    });
  }

  async getMyExperiences( pagNextId: string, pagRecordLimit: string, experienceCategoryId: number ) {
     

    const data = { pagNextId, pagRecordLimit, experienceCategoryId };

    console.log('DATA: ', data);
    

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/experience/get-by-user`,data,  { headers }).subscribe({ 
        next: resp => {
          console.log('RESP MY EXP: ', resp);
          
          resolve(resp['sData'] === null ? [] : resp['sData']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve([]);
        }
      });
    });
  }

  async getExperiencesById( experienceId: number ) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/experience/get/`+experienceId, { headers }).subscribe({ 
        next: resp => {
          resolve(resp['sData'] === null ? [] : resp['sData']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve({});
        }
      });
    });
  }

  async getOwnerExperiences( ownerId: number ) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/user/`+ownerId, { headers }).subscribe({ 
        next: resp => {
          resolve(resp['sData'] === null ? [] : resp['sData']);
        },
        error:err => {
          console.log('ERR OWNER EXPERIENCES', err);
          resolve({});
        }
      });
    });
  }

  async setInterestExperiences( experienceId: number ) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/experience/guests/register-guest/${experienceId}`, { headers }).subscribe({ 
        next: resp => {
          console.log();
          resolve(resp['sMsg']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve({});
        }
      });
    });
  }

  async addExperience( experience: Experience ) {
     

    const data = { ...experience };
    console.log('DATA EXP: ', data);
    

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/experience/add`, data, { headers }).subscribe({ 
        next: resp => {
          resolve(resp['sData'] === null ? null : resp['sData']);
        },
        error:err => {
          console.log('ERR ADD EXPERIENCE', err);
          resolve(null);
        }
      });
    });
  }

  async updateExperience( experience: Experience ) {
     

    const data = { ...experience };
    console.log('DATA EXP: ', data);
    

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/experience/update`, data, { headers }).subscribe({ 
        next: resp => {
          resolve(resp['sData'] === null ? null : resp['sData']);
        },
        error:err => {
          console.log('ERR ADD EXPERIENCE', err);
          resolve(null);
        }
      });
    });
  }

  async getIMGS( experienceId: string ) {
    // const tVal = await this.userService.validaToken();
    // if( !tVal ) {
    //   return;
    // }
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/experience/image/${experienceId}`, { headers }).subscribe({ 
        next: resp => {
          if(resp['sCode'] == 200) {
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

  async deleteExperience( experienceId: string ): Promise<boolean> {
     
    
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.delete(`${URL}/experience/delete/${experienceId}`, { headers }).subscribe({
        next: resp => {
          console.log(resp); 
          if(resp['sCode'] == 200) {
            resolve(true);
          } else
            resolve(false);
        },
        error:err => {
          console.log('ERR DELTE EXPERIENCE', err);
          resolve(false);
        }
      });
    });
  }

  async uploadIMG( experienceId: number, multimediaName: string, multimediaBase64: string ) {
     
    //hOMOLOGAR TAMAÑO DE IMAGENES.
    multimediaBase64 = await UtilitiesService.compressBase64Image(multimediaBase64, 800, 800, 0.7);
    const data = { 
      multimediaName,
      multimediaBase64,
      expressionId: experienceId,
      avatar: true
    };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/experience/image`, data, { headers }).subscribe({ 
      //this.http.post(`https://ifmly.com/experience/image`, data, { headers }).subscribe({ 
        next: resp => {
          console.log(resp);
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

  async getAllUsers( experienceId: string ): Promise<InterestedUsr[]> {
     
    
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/experience/guests/get-guests/${experienceId}`, { headers }).subscribe({ 
        next: resp => {
          if(resp['sCode'] == 200) {
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

  async updateGuest(personId: string, experienceId: string, status: string) {
     

    const data = { personId, experienceId, status };
    console.log('DATA-GUEST-UPDATE: ', data);
    

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/experience/guests/update-guest`, data, { headers }).subscribe({ 
        next: resp => {
          console.log(resp);
          resolve(resp['sData'] === null ? [] : resp['sData']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve([]);
        }
      });
    });
  }

  async checkedRegisterGuest( experienceId: string ): Promise<boolean> {
     
    
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/experience/guests/check-register-guest/${experienceId}`, { headers }).subscribe({ 
        next: resp => {
          console.log('ES GUEST REGISTER: ',resp);
          if(resp['sCode'] == 200) {
            //resolve(true);
            resolve(resp['sData'].found);
          } /* else
            resolve(false); */
        },
        error:err => {
          console.log('ERR CHECK GUEST REGISTER: ', err);
          resolve(false);
        }
      });
    });
  }

  async deleteInterestExperiences( experienceId: number ) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/experience/guests/deregister-guest/${experienceId}`, { headers }).subscribe({ 
        next: resp => {
          console.log(resp);
          resolve(resp['sMsg']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve({});
        }
      });
    });
  }

  async setFeedbackExperience( targetExperience: string, rate: number, comment: string ) {
     

    const data = { targetExperience, rate, comment };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/experience/feedback`, data, { headers }).subscribe({ 
        next: resp => {
          console.log('RES FEED-BACK EXP: ', resp['sData']);
          
          resolve(resp['sData']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve(false);
        }
      });
    });
  }

  async getRatesHost( idHost: string ) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/experience/feedback/user/${idHost}`, { headers }).subscribe({ 
        next: resp => {
          console.log('RES FEEDBACKS HOST: ', resp['sData']);
          
          resolve(resp['sData']);
        },
        error:err => {
          console.log('ERR MATCHES', err);  
          resolve({});
        }
      });
    });
  }

  async setFeedbackExperienceAssistant( idAssistant: string, targetExperience: string, rate: number, comment: string ) { 
     

    const data = { targetExperience, rate, comment };

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.post(`${URL}/experience/feedback/${idAssistant}`, data, { headers }).subscribe({ 
        next: resp => {
          console.log('RES FEED-BACK EXP: ', resp['sData']);
          
          resolve(resp['sData']);
        },
        error:err => {
          console.log('ERR CATALOGO', err);
          resolve(false);
        }
      });
    });
  }

  async getRatesAssistan( idAssistant: string ) {
     

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.userService.token);

    return new Promise(resolve => {
      this.http.get(`${URL}/experience/guests/get-guests/user/${idAssistant}`, { headers }).subscribe({ 
        next: resp => {
          console.log('RES FEEDBACKS ASSISTAN: ', resp['sData']);
          
          resolve(resp['sData']);
        },
        error:err => {
          console.log('ERR MATCHES', err);  
          resolve({});
        }
      });
    });
  }

}
