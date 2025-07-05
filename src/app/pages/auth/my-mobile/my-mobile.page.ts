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

  myMobileForm = this.formBuilder.group({
    mobile: ['', [Validators.required]],
  });

  public validation_messages = {
    mobile: [
      { type: 'required', message: 'msgErrReqMobile' },
      { type: 'phone', message: 'msgErrMobile' },
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private translate: TranslateService,
    private uiService: UiService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.email = this.router.getCurrentNavigation().extras.state.email;
        this.password = this.router.getCurrentNavigation().extras.state.password;
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.rs = this.router.getCurrentNavigation().extras.state.rs;
        this.selectedCodeCountry = 'US'; // Default to US or derive from cISO
        let codeP = this.codesPhone.filter(
          (code) => code.iso === this.selectedCodeCountry
        );
        this.selectedCodePhone = codeP[0]?.code || '+52';

        console.log('Email: ', this.email);
        console.log('Password: ', this.password);
        console.log('Name: ', this.name);
        console.log('RS: ', this.rs);
        console.log('Selected Code Country: ', this.selectedCodeCountry);
      }
    });

    this.phoneNumberSubscription = this.mobile.valueChanges.subscribe(
      (phoneNumber) => {
        this.phoneNumberValidator(phoneNumber);
      }
    );
  }

  get mobile() {
    return this.myMobileForm.get('mobile');
  }

  async ngOnInit() {}

  ionViewDidEnter() {
    this.errorTel = false;
  }

  ngOnDestroy() {
    this.phoneNumberSubscription.unsubscribe();
  }

  validaCampo(campo: any, message: any): boolean {
    for (let validation of message) {
      if (campo.hasError(validation.type)) {
        console.log(this.translate.instant('MY-MOBILE.' + validation.message));
        this.uiService.alertOK(
          this.translate.instant('MY-MOBILE.' + validation.message)
        );
        return true;
      }
    }
    return false;
  }

  skip() {
    let navigationExtras: NavigationExtras = {
      state: {
        email: this.email,
        password: this.password,
        name: this.name,
        rs: this.rs,
        mobile: '',
      },
    };
    const user: User = {
      phone: '',
    };
    this.userService.setUserr(user);

    // For email signup, go to VerificationCodePage; otherwise, go to profile-details
    if (this.rs === 'email') {
      this.router.navigate(['verification-code'], navigationExtras);
    } else {
      this.router.navigate(['profile-details'], navigationExtras);
    }
  }

  next() {
    console.log('CREATE');

    if (this.errorTel) {
      this.uiService.alertOK(this.translate.instant('MY-MOBILE.msgErrMobile'));
      return;
    }
    console.log(this.mobile.value);

    let navigationExtras: NavigationExtras = {
      state: {
        email: this.email,
        password: this.password,
        name: this.name,
        rs: this.rs,
        mobile: this.mobile.value
          ? this.selectedCodePhone + this.mobile.value
          : '',
      },
    };

    if (this.mobile.value !== '') {
      const user: User = {
        phone: this.selectedCodePhone + this.mobile.value,
      };
      this.userService.setUserr(user);
    } else {
      const user: User = {
        phone: '',
      };
      this.userService.setUserr(user);
    }

    // Store OAuth provider info if available
    if (this.rs && (this.rs === 'google' || this.rs === 'apple')) {
      this.userService.setOAuthProvider(this.rs);
    }

    // For email signup, go to VerificationCodePage; otherwise, go to profile-details
    if (this.rs === 'email') {
      this.router.navigate(['verification-code'], navigationExtras);
    } else {
      this.router.navigate(['profile-details'], navigationExtras);
    }
  }

  phoneNumberValidator(phoneNumber: string) {
    if (
      phoneNumber == null ||
      phoneNumber == undefined ||
      phoneNumber == ''
    ) {
      this.errorTel = false;
      return;
    }

    if (isNaN(Number(phoneNumber).valueOf())) {
      this.errorTel = true;
      return;
    }

    if (phoneNumber.length < 5) {
      this.errorTel = true;
      return;
    }

    if (phoneNumber) {
      const parsedNumber = this.phoneNumberUtil.parse(
        phoneNumber,
        this.selectedCodeCountry
      );

      if (this.phoneNumberUtil.isValidNumber(parsedNumber)) {
        const formattedNumber = this.phoneNumberUtil.format(
          parsedNumber,
          PhoneNumberFormat.E164
        );
        this.errorTel = false;
      } else {
        this.errorTel = true;
      }
    }
  }

  codePhoneSelectionChanged(codeCountry: string) {
    this.selectedCodeCountry = codeCountry;
    const codePhone =
      this.codesPhone.find((item) => item.iso === codeCountry)?.code || '';
    this.selectedCodePhone = codePhone;

    this.modal.dismiss();
    this.mobile.setValue(this.mobile.value);
  }
}