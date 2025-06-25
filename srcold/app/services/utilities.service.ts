import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

const urlIPInfo = environment.urlSrvIPInfo;
const tokenIPInfo = environment.tokenIPInfo;
const urlServer = environment.urlSrv;

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(  
    private http: HttpClient,
    private userService: UserService
  ) { }

  async getCountryISO() {
    return new Promise(resolve => {
      this.http.get(`${urlIPInfo}?token=${tokenIPInfo}`).subscribe({ 
        next: resp => {
          console.log('RESP: ', resp);
          
          let resp_ok = {
            'ok': true,
            country: resp['country']
          }
          resolve(resp_ok);
        },
        error: err => {
          let resp_err = {
            'ok': false,
            err
          }
          resolve(resp_err);
        }
      });
    });
  }

  static async compressBase64Image(base64: string, maxWidth = 800, maxHeight = 800, quality = 0.7): Promise<string> {
    return new Promise((resolve) => {
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
  }  
}
