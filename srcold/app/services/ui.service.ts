import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  loader:any;

  constructor(  
    public alertController: AlertController,
    public loadingController: LoadingController,
              private translate: TranslateService
  ) { }

  async alertOK(message: string) {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      message,
      buttons: [this.translate.instant('UI-SERVICE.OKBtn')]
    });

    await alert.present();
  }

  async alertOK_CANCEL(message: string) {
    let resUsr = false;

    const alert = await this.alertController.create({
      message,
      buttons: [
        {
          text: this.translate.instant('UI-SERVICE.CANCELBtn'),
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            resUsr = false;
          }
        },
        {
          text: this.translate.instant('UI-SERVICE.OKBtn'),
          role: 'ok',
          handler: () => {
            console.log('OK clicked');
            resUsr = true;
          }
        }
      ]
    });
    
    alert.present();
    const { role } = await alert.onDidDismiss();

    return role == 'ok';
  }

  //***** LOADER CONTROL *****
  async showLoader(){
    
  }

  async hideLoader() {
  
  }
  //*****************
}
