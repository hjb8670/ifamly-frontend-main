import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import { User, Catalog } from '../../../interfaces/interfaces';
import { UiService } from '../../../services/ui.service';
import { IonModal } from '@ionic/angular';
import { CodePhone } from 'src/app/interfaces/interfaces';
import { codesCountries } from 'src/assets/codesPhoneCountry';
import { th } from 'date-fns/locale';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-mobile',
  templateUrl: './my-mobile.page.html',
  styleUrls: ['./my-mobile.page.scss'],
})
export class MyMobilePage implements OnInit {
  @ViewChild('modal', { static: true }) modal!: IonModal;
  public presentarErroresCampos = false;
  private email: string;
  private password: string;
  private name: string;
  private rs: string;
  public selectedCodePhone = '+52';
  public selectedCodeCountry = 'MX';
  private phoneNumberSubscription: Subscription;
  public codesPhone: CodePhone[] = codesCountries;
  private phoneNumberUtil = PhoneNumberUtil.getInstance();
  public errorTel = false;
  //public contryISO='us';
  
  myMobileForm = this.formBuilder.group( {
    mobile: ['', [
      Validators.required, 
      //IonIntlTelInputValidators.phone
    ]]
  });

  public validation_messages = {
    'mobile': [
        { type: 'required', message: 'msgErrReqMobile'}, 
        { type: 'phone', message: 'msgErrMobile' }
    ]
  };

  constructor(  
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
     private userService: UserService,
    private router: Router,
    private translate: TranslateService,
    private uiService: UiService
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.email = this.router.getCurrentNavigation().extras.state.email;
        this.password = this.router.getCurrentNavigation().extras.state.password;
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.rs = this.router.getCurrentNavigation().extras.state.rs;
        this.selectedCodeCountry = 'US';//this.router.getCurrentNavigation().extras.state.cISO.toUpperCase();
        //Solución para que el codigo de celular se quedaba en +52 aunque fuera otro pais
        let codeP = this.codesPhone.filter(code => {
          return code.iso == this.selectedCodeCountry
        });
        this.selectedCodePhone = codeP[0]["code"];

        console.log('Email: ', this.email);
        console.log('Password: ', this.password);
        console.log('Name: ', this.name);
        console.log('RS: ', this.rs);
        console.log('Selected Code Country: ', this.selectedCodeCountry);
      }
    });

    this.phoneNumberSubscription = this.mobile.valueChanges.subscribe((phoneNumber) => {
      this.phoneNumberValidator(phoneNumber);
    });
  }

  get mobile() {
    return this.myMobileForm.get('mobile');
  }

  async ngOnInit() { 

  }

  ionViewDidEnter() {
    this.errorTel = false;
  }

  ngOnDestroy() {
    this.phoneNumberSubscription.unsubscribe();
  }

  validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        console.log(this.translate.instant('MY-MOBILE.'+validation.message));
        this.uiService.alertOK(this.translate.instant('MY-MOBILE.'+validation.message));
        return true;
      }
    }

    return false;
  }

  next() {
    console.log("CREATE");
    //document.getElementById('item').style.border = "solid 2px #107CF1";

    if(this.validaCampo(this.mobile, this.validation_messages.mobile)){
      return;
    }

    if(this.errorTel) {
      this.uiService.alertOK(this.translate.instant('MY-MOBILE.msgErrMobile'));
      return;
    }

    let navegationExtras: NavigationExtras = {
      state: {
        email: this.email,
        password: this.password,
        name: this.name,
        rs: this.rs,
        mobile: this.selectedCodePhone + this.mobile.value //this.mobile.value['internationalNumber']
      }
    }
    const user: User = {
      phone: this.selectedCodePhone + this.mobile.value,
    };

    // Save it somewhere accessible (like a service or localStorage)
    this.userService.setUserr(user);
    
    // Store OAuth provider info if available
    if (this.rs && (this.rs === 'google' || this.rs === 'apple')) {
      this.userService.setOAuthProvider(this.rs);
    }
    
    this.router.navigate(['profile-details'], navegationExtras);
   

  }

  phoneNumberValidator(phoneNumber: string) {
    if(phoneNumber == null || phoneNumber == undefined || phoneNumber == '') {
      this.errorTel = false;
      return;
    }
    
    if(isNaN(Number(phoneNumber).valueOf())) {
      this.errorTel = true;
      return;
    }

    if(phoneNumber.length < 5) {
      this.errorTel = true;
      return;
    }

    if (phoneNumber) {
      const parsedNumber = this.phoneNumberUtil.parse(phoneNumber, this.selectedCodeCountry);

      if (this.phoneNumberUtil.isValidNumber(parsedNumber)) {
        const formattedNumber = this.phoneNumberUtil.format(parsedNumber, PhoneNumberFormat.E164);
        this.errorTel = false;
      } else {
        this.errorTel = true;
      }
    }
  }

  codePhoneSelectionChanged(codeCountry: string) {
    this.selectedCodeCountry = codeCountry;
    const codePhone = this.codesPhone.find((item) => item.iso === codeCountry)?.code || '';
    this.selectedCodePhone = codePhone;

    this.modal.dismiss();
    this.mobile.setValue(this.mobile.value);
  }

}
