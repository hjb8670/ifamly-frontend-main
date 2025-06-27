import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
//*import { User } from '@capacitor-firebase/authentication';

import { DiscoverUsr, FilterDiscover, ImagesUser } from 'src/app/interfaces/interfaces';
import { UiService } from '../../../services/ui.service';
import { UserService } from '../../../services/user.service';
import { MatchService } from 'src/app/services/match.service';
import { GoogleSignInService } from 'src/app/services/google-sign-in.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { fr } from 'date-fns/locale';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public verApp: string =  'v1.0.2 r20.03-3p';
  public presentarErroresCampos = false;
  //*public currentUser: User | null = null;
  public idToken = '';
  public view = false;

  loginForm = this.formBuilder.group( {
    email: ['', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]],
    password: ['', [Validators.required]]
  });

  public validation_messages = {
   'email': [
      { type: 'required', message: 'msgErrReqEmail' },
      { type: 'pattern', message: 'msgErrPattEmail' }
    ],
    'password': [
        { type: 'required', message: 'msgErrReqPassword' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private translate: TranslateService,
    private uiService: UiService,
    private userService: UserService,
    private matchService: MatchService,
    private utilities: UtilitiesService,
    private firebaseAuthService: FirebaseAuthService,
    private googleSingInService: GoogleSignInService
  ) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    if(this.userService.sesionFin) {
      this.uiService.alertOK(this.translate.instant('LOGIN.FinSesionMsg'));
    }

    /* const { rs } = await this.userService.getUserRS();

    if(rs === 'email') {
      if(await this.intoUser('email')) {
        return;
      }
    } else if (rs === 'google') {
      if(await this.ValidaUsrGoogle()) {
        return;
      }
    } else if (rs === 'apple') {
      if(await this.ValidaUsrApple()) {
        return;
      }
    } */
    
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        this.uiService.alertOK(this.translate.instant('LOGIN.'+validation.message));
        return true;
      }
    }

    return false;
  }


  private async intoUser(fromRS: string): Promise<boolean>{
    const { email, password, rs } = await this.userService.getUserRS();

    const valido = await this.userService.login(email, password);
    if (valido['ok']) {
      await this.goDiscovers();
      return true;
    } else {
      if (rs === 'google') {
        await this.googleSingInService.logout();
      } else if (rs === 'apple') {
        await this.firebaseAuthService.logout();
      }

      this.uiService.alertOK(this.translate.instant('LOGIN.errRegistroMsg'));
    }

    return false;
  }

  private async ValidaUsrGoogle(): Promise<boolean>{
    this.idToken = await this.googleSingInService.refreshToken();
    console.log('ID TOKEN - GOOGLE - ANT: ', this.idToken);

    if (this.idToken !== null && this.idToken !== '' && this.idToken !== undefined) {
      console.log('ID TOKEN - GOOGLE: ', this.idToken);

      return await this.intoUser('google');
    }

    return false;
  }

  private async ValidaUsrApple(): Promise<boolean>{
    try {
      await this.firebaseAuthService.getIdToken({ forceRefresh: true }).then(async (idToken) => {
        this.idToken = idToken;
        console.log('ID TOKEN - APPLE:', this.idToken);

        return await this.intoUser('apple');
      });
    } catch (error) {
      console.log('ERROR AL OBTENER ID TOKEN - APPLE: ', error);
    }

    return false;
  }

  async singIn() {
    /* if(this.validaCampo(this.email, this.validation_messages.email)){
      return;
    } */
    if(this.validaCampo(this.password, this.validation_messages.password)){
      return;
    }

    await this.uiService.showLoader();
    try {
      const valido = await this.userService.login( this.email.value, this.password.value );
      
      if(valido['ok']){
        //this.navCtrl.navigateRoot( '/main/tabs/discover', { animated: true } );
        this.userService.setUserRS(this.email.value, this.password.value, 'email');
        await this.goDiscovers();

      } else {
        if( valido['name'] === "HttpErrorResponse" ) {
          if (valido['status'] === 401)
            this.uiService.alertOK(this.translate.instant('LOGIN.msgErrLogin'));  
          else
            this.uiService.alertOK( this.translate.instant('LOGIN.msgErrCnx') );
        }
        else {
          this.uiService.alertOK(this.translate.instant('LOGIN.msgErrLogin'));
        }
      }
    } catch (err) {
      console.log('ERROR LOGIN: ', err);
      this.uiService.alertOK( this.translate.instant('LOGIN.msgErrCnx') );
    }

    await this.uiService.hideLoader();

  }

  async preLoadDis(){
    try {
      const filter: FilterDiscover = {
        selfRole: null,
        targetRole: null,
        ageIni: 18,
        ageEnd: 100,
        distance: 1,
        minHeight: 1,
        maxHeight: 100,
        exercise: null,
        zodiacSign: null,
        education: null,
        drinking: null,
        smoking: null,
        kids: null,
        religion: null,
        location: null
      };

      let discoverU = <DiscoverUsr[]> await this.matchService.getDiscoverProfiles("0", "10", filter);
      await this.setAvatarImg(discoverU);

      console.log('RE-LOAD DISCOVER_USR: ', discoverU);

      return discoverU; 

    } catch (error) {
      console.log('ERROR AL RECARGAR PROFILES');
      return [];
    }
  }

  async setAvatarImg(usrDicover: DiscoverUsr[]) {
    // for (const usr of usrDicover) {
    //   usr.image = '../../../assets/icon/30-Default_no-image.jpeg';

    //   const res_imgs =  <ImagesUser[]> await this.matchService.getIMGS(usr.personId.toString());
    //   for (const img of res_imgs) {
    //     if(img.avatar) {
    //       usr.image = img.multimediaUrl;
    //     }
    //   }
    // }

  }

  singInFacebook() {
    console.log("SING IN WITH FACEBOOK");
    this.uiService.alertOK(this.translate.instant('LOGIN.msgOtherSign'));
  }

  async singInGoogle() {
    console.log("SING IN WITH GOOGLE");

    let email_final = '';
    let password_final = '';

    try {
      const usr = await this.googleSingInService.loginViaGoogle();

      if (usr === null) {
        this.uiService.alertOK(this.translate.instant('LOGIN.msgErrGoogle'));
        return;
      }

      let { email, password, rs } = await this.userService.getUserRS();
      console.log('EMAIL_SAVE: ', email);
      console.log('PASSWORD_SAVE: ', password);
      console.log('RS_SAVE: ', rs);

      if (email === usr.email) {
        email_final = email;
        password_final = password;
      } else {
        email = '';
        password = '';
      }

      if (email === null || password === null || email === '' || password === '') {
        //Valida si el usuario ya esta registrado
        const res = await this.userService.existI(usr.email);

        if (!res) {
          //Si no esta registrado, se registra
          this.goRegistro(usr.email, this.generateRandomPassword(), '', 'google');
          return;
          
        } else {
          //Si esta registrado, se cambia password, se hace login y se guarda email y password
          email_final = usr.email;
          password_final = this.generateRandomPassword();

          const resP = await this.userService.upPas(usr.email, password_final);
          if (resP) {            
            this.userService.setUserRS(email_final, password_final, 'google');
          }else {
            return
          }
        }
      }

      const valido = await this.userService.login(email_final, password_final);

      if (valido['ok']) {
        await this.goDiscovers();
      } else {
        await this.googleSingInService.logout();
        this.uiService.alertOK(this.translate.instant('LOGIN.errRegistroMsg'));
      }
      
    } catch (error) {
      console.log("Google Sign in Error", error);
      this.uiService.alertOK(this.translate.instant('LOGIN.msgErrGoogle'));
    }
  }

  async singInApple() {
    console.log("SING IN WITH APPLE");

    let email_final = '';
    let password_final = '';

    try {
      const user = await this.firebaseAuthService.signInWithApple();
      console.log('USER APPLE: ', user);
      
      let { email, password, rs } = await this.userService.getUserRS();
      console.log('EMAIL_SAVE: ', email);
      console.log('PASSWORD_SAVE: ', password);
      console.log('RS_SAVE: ', rs);

      if (email === user.email) {
        email_final = email;
        password_final = password;
      } else {
        email = '';
        password = '';
      }
      
      if (email === null || password === null || email === '' || password === '') {
        //Valida si el usuario ya esta registrado
        const res = await this.userService.existI(user.email);

        console.log('RES_EXIST: ', res);

        if (!res) {
          //Si no esta registrado, se registra
          this.goRegistro(user.email, this.generateRandomPassword(), user.displayName, 'apple');
          return;
          
        } else {
          //Si esta registrado, se cambia password, se hace login y se guarda email y password
          email_final = user.email;
          password_final = this.generateRandomPassword();

          const resP = await this.userService.upPas(user.email, password_final);
          if (resP) {            
            this.userService.setUserRS(email_final, password_final, 'apple');
          }else {
            return
          }
        }
      }


      const valido = await this.userService.login(email_final, password_final);

      if (valido['ok']) {
        await this.goDiscovers();
      } else {
        await this.googleSingInService.logout();
        this.uiService.alertOK(this.translate.instant('LOGIN.errRegistroMsg'));
      }
      
      
    } catch (error) {
      console.log("Apple Sign in Error", error);
      this.uiService.alertOK(this.translate.instant('LOGIN.msgErrApple'));
    }
  }

  generateRandomPassword(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }

  private async goRegistro(email: string, password: string, name: string, rs: string) {
    const res = await this.utilities.getCountryISO();
    console.log('RES: ', res);

    let contryISO='us';
    if (res['ok']) {
      contryISO = String(res['country']).toLowerCase();
    } else {
      console.log('ERROR al obtener CONTRY ISO');
      contryISO = 'us';
    }


    let navegationExtras: NavigationExtras = {
      state: {
        email: email,
        password: password,
        name: name,
        rs: rs,
        cISO: contryISO
      }
    };

    this.router.navigate(['my-mobile'], navegationExtras);
  }

  async params(parameters: string){
    let navegationExtras: NavigationExtras = {
      state: {
        parameters: parameters,
        paramReturn: 'login'
      }
    }
    this.router.navigate(['params'], navegationExtras);
  }

  async goDiscovers() {
    const discoverUsrs = await this.preLoadDis();

    let navegationExtras: NavigationExtras = {
      state: {
        discoverUsrs
      }
    }
    await this.router.navigate(['/main/tabs/discover'], navegationExtras);

  }

  verContra(){
    this.view = !this.view;
  }
}
