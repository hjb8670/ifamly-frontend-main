import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Catalog, User } from '../../../interfaces/interfaces';
import { UtilitiesService } from '../../../services/utilities.service';
import { UiService } from '../../../services/ui.service';
import { GoogleSignInService } from 'src/app/services/google-sign-in.service';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {
  public presentarErroresCampos = true;
  public contryISO='us';
  public idToken = '';
  public view = false;
  public isLegal = false;
  public isTerms = false;

  registryForm = this.formBuilder.group( {
    email: ['', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]],
    password: ['', [
      Validators.required,
      this.regexValidator(new RegExp('(?=.*[a-z]).*$'), {'1lowercase': true}),
      this.regexValidator(new RegExp('(?=.*[A-Z]).*$'), {'1uppercase': true}),
      this.regexValidator(new RegExp('(?=.*[0-9]).*$'), {'1number': true}),
      this.regexValidator(new RegExp('(?=.*[#?!@$%^&*-+]).*$'), {'1especial': true}),
      this.regexValidator(new RegExp('.{8,}$'), {'longmin': true})
      //Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
    ]]
  });

  public validation_messages = {
   'email': [
      { type: 'required', message: 'msgErrReqEmail' },
      { type: 'pattern', message: 'msgErrPattEmail' }
    ],
    'password': [
      { type: 'required', message: 'msgErrReqPassword' }
      // { type: '1lowercase', message: 'msgErrMin'},
      // { type: '1uppercase', message: 'msgErrMay'},
      // { type: '1number', message: 'msgErrNum'},
      // { type: '1especial', message: 'msgErrCarc'},
      // { type: 'longmin', message: 'msgErrLongMin'}
    ]
  };

  constructor(  
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private router: Router,
    private uiService: UiService,
    private utilities: UtilitiesService,
    private googleSingInService: GoogleSignInService,
    private firebaseAuthService: FirebaseAuthService,
     private userService: UserService,
  ) { }

  ngOnInit() {
    this.isLegal = false;
  }

  regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if (!control.value) {
        return null;
      }
      /* console.log('EVALUANDO: ', control.value);
      console.log('CON:', regex); */
      
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  get email(){
    return this.registryForm.get('email');
  }

  get password(){
    return this.registryForm.get('password');
  }

  validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        console.log(this.translate.instant('REGISTRY.'+validation.message));
        this.uiService.alertOK(this.translate.instant('REGISTRY.'+validation.message));
        return true;
      }
    }

    return false;
  }

  async singUpFacebook() {
    console.log("SING UP WITH FACEBOOK");
    // if(!this.isLegal){
    //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorLegal'));
    //   return;
    // }
    // if(!this.isTerms){
    //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorTerms'));
    //   return;
    // }
  }

  async singUpGoogle() {
    console.log("SING UP WITH GOOGLE");
    // if(!this.isLegal){
    //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorLegal'));
    //   return;
    // }
    // if(!this.isTerms){
    //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorTerms'));
    //   return;
    // }

    try {
      const usr = await this.googleSingInService.loginViaGoogle();
      console.log('USER GOOGLE: ', usr);

      this.goMobile(usr.email, this.generateRandomPassword(), '', 'google');
    } catch (error) {
      console.log("Google Sign Up Error", error);
      this.uiService.alertOK(this.translate.instant('REGISTRY.msgErrGoogle'));
    }
  }

  async singUpApple() {
    console.log("SING UP WITH APPLE");
    if(!this.isLegal){
      this.uiService.alertOK(this.translate.instant('REGISTRY.errorLegal'));
      return;
    }
    if(!this.isTerms){
      this.uiService.alertOK(this.translate.instant('REGISTRY.errorTerms'));
      return;
    }

    try {
      const usr = await this.firebaseAuthService.signInWithApple();
      console.log("USER APPLE", usr);

      this.goMobile(usr.email, this.generateRandomPassword(), usr.displayName, 'apple');
      
      
    } catch (error) {
      console.log("Apple Sign Up Error", error);
      this.uiService.alertOK(this.translate.instant('REGISTRY.msgErrApple'));
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

  async create() {
    console.log("CREATE");
    //document.getElementById('item').style.border = "solid 2px #107CF1";

    if(this.validaCampo(this.email, this.validation_messages.email)){
      return;
    }
    if(this.validaCampo(this.password, this.validation_messages.password)){
      return;
    }
    // if(!this.isLegal){
    //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorLegal'));
    //   return;
    // }
    // if(!this.isTerms){
    //   this.uiService.alertOK(this.translate.instant('REGISTRY.errorTerms'));
    //   return;
    // }
    const user: User = {
      email: this.email.value,
      password: this.password.value
    };
    
    // Save it somewhere accessible (like a service or localStorage)
    this.userService.setUserr(user);
    await this.goMobile(this.email.value, this.password.value, '', 'email');
  }

  private async goMobile(email: string, password: string, name: string, rs: string) {
    const res = await this.utilities.getCountryISO();

    console.log('RES: ', res);
    if (res['ok']) {
      this.contryISO = String(res['country']).toLowerCase();
    } else {
      console.log('ERROR al obtener CONTRY ISO');
      this.contryISO = 'us';
    }


    let navegationExtras: NavigationExtras = {
      state: {
        email: email,
        password: password,
        name: name,
        rs: rs,
        cISO: this.contryISO
      }
    };

    this.router.navigate(['my-mobile'], navegationExtras);
  }

  async params(parameters: string){
    let navegationExtras: NavigationExtras = {
      state: {
        parameters: parameters,
        paramReturn: 'registry'
      }
    }
    this.router.navigate(['params'], navegationExtras);
  }

  verContra(){
    this.view = !this.view;
  }

  isChecked(indChecked){
    switch(indChecked){
      case 'legal': 
        this.isLegal = !this.isLegal;
        break
      case 'terms':
        this.isTerms = !this.isTerms;
        break;
    }
  }
}
