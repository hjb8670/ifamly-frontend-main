import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GoogleSignInService } from 'src/app/services/google-sign-in.service';
import { UserService } from 'src/app/services/user.service';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { UiService } from 'src/app/services/ui.service';
import { SelectlangPage } from '../../selectlang/selectlang.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-settings-account',
  templateUrl: './settings-account.page.html',
  styleUrls: ['./settings-account.page.scss'],
})
export class SettingsAccountPage implements OnInit {

  constructor(public translate: TranslateService,
    public userService: UserService,
    private router: Router,
    public modalController: ModalController,
    private googleSingInService: GoogleSignInService,
    private firebaseAuthService: FirebaseAuthService,
    private uiService: UiService
  ) { }

  ngOnInit() {
  }
  async logout(){
    let res = await this.uiService.alertOK_CANCEL(this.translate.instant('SETTINGS-ACOUNT.ConfirmLogout'));
    if(!res){
      return;
    }
    //await this.googleSingInService.logout();  //Cerrar sesión en Google
    //await this.firebaseAuthService.logout();  //Cerrar sesión en Firebase

    const { rs } = await this.userService.getUserRS();
    if (rs === 'google') {
      await this.googleSingInService.logout();
    } else if (rs === 'apple') {
      await this.firebaseAuthService.logout();
    }

    await this.userService.removeUserRS();
    await this.userService.logout();
  }

    async langchange(){
    const modal = await this.modalController.create({
            component: SelectlangPage,
            cssClass: 'popupclass2',
            backdropDismiss:false,
            componentProps: {
              pageid: 'settings',
            }
    
          });
    
          modal.onDidDismiss().then(async (dataReturned) => {
          });
          return await modal.present();
    
  }

  async params(parameters: string){
    let navegationExtras: NavigationExtras = {
      state: {
        parameters: parameters,
        paramReturn: 'settings-account'
      }
    }
    this.router.navigate(['params'], navegationExtras);
  }

  changePassword(){
    this.router.navigate(['change-password']);
  }

  async deleteAccount(){
    let res = await this.uiService.alertOK_CANCEL(this.translate.instant('SETTINGS-ACOUNT.ConfirmDelete'));
    if(res){
      this.uiService.showLoader();
      let resp = await this.userService.deleteAccount();
      this.uiService.hideLoader();
      if(resp){
        await this.uiService.alertOK_CANCEL(this.translate.instant('SETTINGS-ACOUNT.DeleteSuccess'));
        await this.userService.removeUserRS();
        await this.userService.logout(); //this.router.navigate(['login']);
      }else{
        this.uiService.alertOK(this.translate.instant('SETTINGS-ACOUNT.DeleteError'));
      }
    }
  }
}
