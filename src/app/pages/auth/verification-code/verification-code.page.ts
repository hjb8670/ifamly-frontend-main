import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseAuthService } from '../../../services/firebase-auth.service';
import { UiService } from '../../../services/ui.service';
import { constants } from 'src/environments/constants';
import { fi, is } from 'date-fns/locale';

const limiteTimeOTP = 60;

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.page.html',
  styleUrls: ['./verification-code.page.scss'],
})



export class VerificationCodePage implements OnInit {
  private tOTP = limiteTimeOTP;
  public strTOTO = '00:'+this.tOTP;
  //public styleC = ['ion-itemW', 'ion-itemW', 'ion-itemW', 'ion-itemW', 'ion-itemW', 'ion-itemW']
  private email: string;
  private password: string;
  private name: string;
  private rs: string;
  private mobile: string;
  private verifID = '';
  private isMailCode = false;
  private lang = "";
  public metodCode = " phone";

  VCodeForm = this.formBuilder.group( {
    codigo: ['', [ Validators.required ]]
    /*c0: ['', [ Validators.required ]],
    c1: ['', [ Validators.required ]],
    c2: ['', [ Validators.required ]],
    c3: ['', [ Validators.required ]],
    c4: ['', [ Validators.required ]],
    c5: ['', [ Validators.required ]]*/
  });

  public validation_messages = {
    codigo: [ { type: 'required', message: 'msgErrReqMobile'} ]
    /*'c0': [ { type: 'required', message: 'msgErrReqMobile'} ],
    'c1': [ { type: 'required', message: 'msgErrReqMobile'} ],
    'c2': [ { type: 'required', message: 'msgErrReqMobile'} ],
    'c3': [ { type: 'required', message: 'msgErrReqMobile'} ],
    'c4': [ { type: 'required', message: 'msgErrReqMobile'} ],
    'c5': [ { type: 'required', message: 'msgErrReqMobile'} ]*/
  };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private uiService: UiService,
    private firebaseAuthService: FirebaseAuthService
  ) {
    this.activatedRoute.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.email = this.router.getCurrentNavigation().extras.state.email;
        this.password = this.router.getCurrentNavigation().extras.state.password;
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.rs = this.router.getCurrentNavigation().extras.state.rs;
        this.mobile = this.router.getCurrentNavigation().extras.state.mobile;
        
        await this.sendAgain();
      }
    });
  }

  get codigo() {
    return this.VCodeForm.get('codigo');
  }

  ngOnInit() {
    this.metodCode = this.translate.instant('VC.Phone');
    if (this.translate.currentLang == 'es') {
      this.lang = constants.languages.es;
    } else {
      this.lang = constants.languages.en;
    }
    this.firebaseAuthService.phoneCodeSent$.subscribe(
      async (event) => {
        try {
          this.verifID = event.verificationId;
          
        } catch (error) {
          console.log('ERROR AL OBTENER CODIGO DE SEGURIDAD: ', error);
          this.tOTP =  0;
          this.uiService.alertOK(this.translate.instant('VC.ErrServ'));
        }
      }
    );

    this.calculaTimeOTP();
  }

  onInputC( field: any, pos: number, nextC: any ){
    let val = field.target.value;
    //this.styleC[pos] = 'ion-itemW'

    console.log('EVEN: ', val);
    

    var patt= new RegExp('^[0-9]{1}$');
    if(!patt.test(val)){
      val = '';
    } else {
      //this.styleC[pos] = 'ion-itemO'
    }

    /*switch (pos) {
      case 0:
        //this.c1.setValue(val.substr(-1));
        this.c0.setValue(val);
        break;
      case 1:
        this.c1.setValue(val);
        break;
      case 2:
        this.c2.setValue(val);
        break;
      case 3:
        this.c3.setValue(val);
        break;
      case 4:
        this.c4.setValue(val);
        break;
      case 5:
        this.c5.setValue(val);
        break;
      default:
        break;
    }*/

    if(val != '') {
      nextC.setFocus();
    }
  }

  timeOTP(ms) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        this.tOTP--;
        if(this.tOTP <0 ) this.tOTP=0;
        this.strTOTO = '00:'+('00'+this.tOTP).slice(-2);
        resolve();
      }, ms);
    });
  }

  async calculaTimeOTP() {
    while (this.tOTP > 0) {
      await this.timeOTP(1000);
    }
  }

  async sendAgain() {
    console.log('SEND AGAIN');
    console.log(this.verifID !== '');
    this.VCodeForm.reset();
    this.isMailCode = false;
    
    try {
      if(this.verifID !== ''){
        this.uiService.showLoader();
      }
      await this.firebaseAuthService.signInWithPhoneNumber({
        phoneNumber: this.mobile,
      });
      this.uiService.hideLoader();
      this.tOTP = limiteTimeOTP;
    } catch (error) {
      this.uiService.hideLoader();
      console.log("Phoner number verification finally", error);
      this.tOTP =  0;
      this.uiService.alertOK(this.translate.instant('VC.ErrServ'));
    }
  }

  async sendCodeEmail() {
    console.log('SEND CODE EMAIL');
    this.isMailCode = true;
    this.metodCode = this.translate.instant('VC.Email');

    this.uiService.showLoader();
    try {
        await this.firebaseAuthService.sendVerificationCodeEmail(this.email, this.lang);
    } catch (error) {
      console.log("Email verification finally", error);
      this.uiService.alertOK(this.translate.instant('VC.ErrServ'));
    } finally {
      this.uiService.hideLoader();
    }
  }

  async next() {
    console.log('NEXT');
    var patt= new RegExp('^[0-9]{6}$');
    if (this.VCodeForm.invalid) {
      this.uiService.alertOK(this.translate.instant('VC.ErrMesg'));
      return;
    }else if(!patt.test(this.codigo.value)){
      this.uiService.alertOK(this.translate.instant('VC.ErrLengthCode'));
      return;
    }

    //const code =  this.c0.value + this.c1.value + this.c2.value + this.c3.value + this.c4.value + this.c5.value

    let valCod: boolean = false;
    
    try {
      if(this.isMailCode){ 
        console.log('CODIGO EMAIL');
        
        const resCodeValido = await this.firebaseAuthService.validaCodeEmail(this.email, this.codigo.value);
        console.log('RES CODE: ', resCodeValido);
        
        if(resCodeValido == '10'){
          valCod = true;
        }

      } else {
        console.log('CODIGO TELEFONO');

        let SIResult = await this.firebaseAuthService.confirmVerificationCode({
          verificationCode: this.codigo.value,
          verificationId: this.verifID,
        });
        console.log(SIResult);
        if (SIResult.user != null) {
          valCod = true;
        }
      }
      
    } catch (error) {
      console.log("ERROR COD: ", JSON.stringify(error));
      valCod = false;
    }

    valCod = true; //TODO: Borrar esta linea cuando se termine el desarrollo

    if(!valCod) {
      this.uiService.alertOK(this.translate.instant('VC.ErrCode'));
    } else {
      let navegationExtras: NavigationExtras = {
        state: {
          email: this.email,
          password: this.password,
          name: this.name,
          rs: this.rs,
          mobile: this.mobile
        }
      }
      
      this.router.navigate(['profile-details'], navegationExtras);
    }

  }



}
