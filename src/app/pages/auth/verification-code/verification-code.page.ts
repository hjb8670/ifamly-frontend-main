import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class VerificationCodePage implements OnInit, OnDestroy {
  private tOTP = limiteTimeOTP;
  public strTOTO = '00:' + ('00' + this.tOTP).slice(-2);
  private isTimerRunning = false; // Flag to track if timer is running
  private timerInterval: any; // Store interval ID for cleanup
  private email: string;
  private password: string;
  private name: string;
  private rs: string;
  private mobile: string;
  private verifID = '';
  private isMailCode = true;
  private lang = '';
  public metodCode = ' phone';

  VCodeForm = this.formBuilder.group({
    codigo: ['', [Validators.required]],
    /*c0: ['', [ Validators.required ]],
    c1: ['', [ Validators.required ]],
    c2: ['', [ Validators.required ]],
    c3: ['', [ Validators.required ]],
    c4: ['', [ Validators.required ]],
    c5: ['', [ Validators.required ]]*/
  });

  public validation_messages = {
    codigo: [{ type: 'required', message: 'msgErrReqMobile' }],
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
    this.activatedRoute.queryParams.subscribe(async (params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.email = this.router.getCurrentNavigation().extras.state.email;
        this.password = this.router.getCurrentNavigation().extras.state.password;
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.rs = this.router.getCurrentNavigation().extras.state.rs;
        this.mobile = this.router.getCurrentNavigation().extras.state.mobile;
        
        await this.sendCodeEmail();
      }
    });
  }

  get codigo() {
    return this.VCodeForm.get('codigo');
  }

  ngOnInit() {
    this.metodCode = this.translate.instant('VC.Email');
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
          this.stopTimer();
          this.uiService.alertOK(this.translate.instant('VC.ErrServ'));
        }
      }
    );

    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer(); // Cleanup timer on component destruction
  }

  onInputC(field: any, pos: number, nextC: any) {
    let val = field.target.value;
    //this.styleC[pos] = 'ion-itemW'

    console.log('EVEN: ', val);

    var patt = new RegExp('^[0-9]{1}$');
    if (!patt.test(val)) {
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

    if (val != '') {
      nextC.setFocus();
    }
  }

  private startTimer() {
    if (this.isTimerRunning) {
      console.log('Timer already running, skipping start');
      return; // Prevent multiple timer instances
    }

    this.isTimerRunning = true;
    this.tOTP = limiteTimeOTP;
    this.strTOTO = '00:' + ('00' + this.tOTP).slice(-2);
    console.log('Timer started, tOTP:', this.tOTP, 'strTOTO:', this.strTOTO);

    this.timerInterval = setInterval(() => {
      if (this.tOTP > 0) {
        this.tOTP--;
        this.strTOTO = '00:' + ('00' + this.tOTP).slice(-2);
        console.log('Timer tick, tOTP:', this.tOTP, 'strTOTO:', this.strTOTO);
      } else {
        this.stopTimer();
        console.log('Timer expired, tOTP:', this.tOTP, 'strTOTO:', this.strTOTO, 'isTimerRunning:', this.isTimerRunning);
      }
    }, 1000);
  }

  private stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.tOTP = 0;
    this.strTOTO = '00:00';
    this.isTimerRunning = false;
    console.log('Timer stopped, tOTP:', this.tOTP, 'strTOTO:', this.strTOTO, 'isTimerRunning:', this.isTimerRunning);
  }

  async sendAgain() {
    if (this.isTimerRunning) {
      console.log('Resend blocked, timer running, tOTP:', this.tOTP, 'isTimerRunning:', this.isTimerRunning);
      this.uiService.alertOK(this.translate.instant('VC.WaitTimer') || 'Please wait until the timer expires to resend the code.');
      return;
    }

    console.log('SEND AGAIN');
    console.log('Verification ID exists:', this.verifID !== '');
    this.VCodeForm.reset();
    this.isMailCode = false;

    try {
      if (this.verifID !== '') {
        this.uiService.showLoader();
      }
      await this.firebaseAuthService.signInWithPhoneNumber({
        phoneNumber: this.mobile,
      });
      this.uiService.hideLoader();
      this.startTimer(); // Start new timer after successful send
      console.log('Phone code sent successfully, timer restarted');
    } catch (error) {
      this.uiService.hideLoader();
      console.log('Phone number verification failed', error);
      this.stopTimer();
      this.uiService.alertOK(this.translate.instant('VC.ErrServ'));
    }
  }

  async sendCodeEmail() {
    if (this.isTimerRunning) {
      console.log('Resend blocked, timer running, tOTP:', this.tOTP, 'isTimerRunning:', this.isTimerRunning);
      this.uiService.alertOK(this.translate.instant('VC.WaitTimer') || 'Please wait until the timer expires to resend the code.');
      return;
    }

    console.log('SEND CODE EMAIL');
    this.isMailCode = true;
    this.metodCode = this.translate.instant('VC.Email');

    this.uiService.showLoader();
    try {
      await this.firebaseAuthService.sendVerificationCodeEmail(this.email, this.lang === '' ? "EN" : this.lang);
      this.uiService.hideLoader();
      this.startTimer(); // Start new timer after successful send
      console.log('Email code sent successfully, timer restarted');
    } catch (error) {
      this.uiService.hideLoader();
      console.log('Email verification failed', error);
      this.stopTimer();
      this.uiService.alertOK(this.translate.instant('VC.ErrServ'));
    }
  }

  async next() {
    console.log('NEXT');
    var patt = new RegExp('^[0-9]{6}$');
    if (this.VCodeForm.invalid) {
      console.log('Form invalid, showing VC.ErrMesg');
      this.uiService.alertOK(this.translate.instant('VC.ErrMesg'));
      return;
    } else if (!patt.test(this.codigo.value)) {
      console.log('Code length invalid, showing VC.ErrLengthCode');
      this.uiService.alertOK(this.translate.instant('VC.ErrLengthCode'));
      return;
    }

    let valCod = false;

    try {
      if (this.isMailCode) {
        console.log('CODIGO EMAIL');
        const resCodeValido = await this.firebaseAuthService.validaCodeEmail(
          this.email,
          this.codigo.value
        );
        console.log('RES CODE: ', resCodeValido, 'Type:', typeof resCodeValido);

        if (String(resCodeValido) === '10') {
          console.log('Code valid, setting valCod = true');
          valCod = true;
        } else {
          // Handle specific error codes
          let errorMessage: string;
          switch (String(resCodeValido)) {
            case '-20':
              errorMessage =
                this.translate.instant('VC.ErrNoCode') ||
                'No existe ningun codigo de verificación';
              console.log('Error -20: No code exists');
              break;
            case '-30':
              errorMessage =
                this.translate.instant('VC.ErrCode') || 'El código no es igual';
              console.log('Error -30: Incorrect code');
              break;
            case '-40':
              errorMessage =
                this.translate.instant('VC.ErrExpiredCode') ||
                'El código está vencido';
              console.log('Error -40: Expired code');
              break;
            default:
              errorMessage =
                this.translate.instant('VC.ErrCode') ||
                'Invalid verification code.';
              console.log('Default error: Invalid code, resCodeValido:', resCodeValido);
          }
          this.uiService.alertOK(errorMessage);
        }
      } else {
        console.log('CODIGO TELEFONO');
        let SIResult = await this.firebaseAuthService.confirmVerificationCode({
          verificationCode: this.codigo.value,
          verificationId: this.verifID,
        });
        console.log('Phone verification result:', SIResult);
        if (SIResult.user != null) {
          console.log('Phone code valid, setting valCod = true');
          valCod = true;
        } else {
          console.log('Phone code invalid, showing VC.ErrCode');
          this.uiService.alertOK(this.translate.instant('VC.ErrCode'));
        }
      }
    } catch (error) {
      console.log('Verification error: ', JSON.stringify(error));
      // Suppress the offline service dialog; only log the error
    }

    if (valCod) {
      console.log('valCod is true, navigating to profile-details');
      let navegationExtras: NavigationExtras = {
        state: {
          email: this.email,
          password: this.password,
          name: this.name,
          rs: this.rs,
          mobile: this.mobile,
        },
      };
      this.router.navigate(['profile-details'], navegationExtras);
    } else {
      console.log('valCod is false, no navigation');
    }
  }
}
