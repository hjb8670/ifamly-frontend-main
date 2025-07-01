import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { parseISO, differenceInYears } from 'date-fns';

import { TranslateService } from '@ngx-translate/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { UiService } from '../../../services/ui.service';
import { Catalog, User } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';
import { constants } from 'src/environments/constants';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {
  @ViewChild('modalC') modalCal: IonModal;
  private lanCatalogo = 'EN'; 
  public isDefault = true;
  public fileProfile;
  private email = '';
  private password = '';
  private name = '';
  private rs = '';
  private mobile = '';
  private birthday = '';
  private image = null;
  private name_img = '';
  public txtBirthDay = '';
  public genders: Catalog[];

  ProfileForm = this.formBuilder.group( {
    fname: ['', [ Validators.required ]],
    lname: ['', [ Validators.required ]],
    gender: ['', [ Validators.required ]],
    bday: [new Date().toISOString(), [ Validators.required ]]
  });

  public validation_messages = {
    'fname': [ { type: 'required', message: 'msgErrReqFName'} ],
    'lname': [ { type: 'required', message: 'msgErrReqLName'} ],
    'gender': [ { type: 'required', message: 'msgErrGender'} ],
    'bday': [ { type: 'required', message: 'msgErrReqBirthday'} ]
  };

  customGenderOptions = {
    header: this.translate.instant('ABOUT-ME.Gender'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdGender'),
    translucent: true,
  };

  constructor( 
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private uiService: UiService,
    public dms: DomSanitizer,
    private userService: UserService,
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.email = this.router.getCurrentNavigation().extras.state.email;
        this.password = this.router.getCurrentNavigation().extras.state.password;
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.rs = this.router.getCurrentNavigation().extras.state.rs;
        this.mobile = this.router.getCurrentNavigation().extras.state.mobile;
      }
    });

    this.userService.getCatalogo(constants.catalogs.Gender.toString(), this.lanCatalogo).then((value: any) => { this.genders = value; });
  }

  get fname() {
    return this.ProfileForm.get('fname');
  }

  get lname() {
    return this.ProfileForm.get('lname');
  }

  get gender() {
    return this.ProfileForm.get('gender');
  }

  get bday() {
    return this.ProfileForm.get('bday');
  }

  ngOnInit() {
    this.separaName(this.name);
  }

  validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        console.log(this.translate.instant('PROF-DETAIL.'+validation.message));
        this.uiService.alertOK(this.translate.instant('PROF-DETAIL.'+validation.message));
        return true;
      }
    }

    return false;
  }


  async takePicture() {
    console.log('TAKE PICTURE');

    const imge = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });
    
    this.isDefault = false;
    this.name_img = 'profile.'+imge.format;
    this.image = imge.base64String;
    
    this.fileProfile = this.displayImg(imge.format, imge.base64String);
  }

  displayImg(format: string, b64: string) {
    return this.dms.bypassSecurityTrustUrl("data:image/"+format+";base64," + b64);
  }

  setBirthday() {
    const fec = new Date(this.bday.value)
    const day =  ('00'+fec.getDate()).slice(-2);
    const t_month = fec.getMonth()+1;
    const month = ('00'+t_month).slice(-2);
    const year = fec.getFullYear();
    this.birthday = year+'-'+month+'-'+day; // 2022-05-27

    console.log('FECHA: ', this.birthday);
    
    if(!this.isAdult(this.birthday)) {
      this.uiService.alertOK(this.translate.instant('PROF-DETAIL.mayorEdad'));
      this.bday.setValue(null);
      this.txtBirthDay = '';
      this.modalCal.dismiss();
      return
    } 

    if( this.translate.instant('PROF-DETAIL.lanCal') == 'es-MX') {
      this.txtBirthDay = day+'.'+month+'.'+year;  //'01.20.75';
    } else {
      this.txtBirthDay = month+'.'+day+'.'+year;
    }

    this.modalCal.dismiss();
  }



  async next() {
    console.log('SIGUIENTE');

    if(!this.fileProfile){
      this.uiService.alertOK(this.translate.instant('PROF-DETAIL.msgErrProfileImage'));
      return;
    }
    if(this.validaCampo(this.fname, this.validation_messages.fname)){
      return;
    }
    

    // if(this.validaCampo(this.lname, this.validation_messages.lname)){
    //   return;
    // }

    if(this.validaCampo(this.gender, this.validation_messages.gender)){
      return;
    }

    //Se va en la siguiente promocion
    /*if(this.name_img === undefined || this.name_img === null || this.name_img === ''){
      this.uiService.alertOK(this.translate.instant('PROF-DETAIL.msgErrReqImg'));
      return;
    }*/

    /* if(this.validaCampo(this.bday, this.validation_messages.bday)){
      return;
    } */
   if (this.validaCampo(this.bday, this.validation_messages.bday) || 
    this.birthday == null || this.birthday == '' || !this.isAdult(this.birthday)) {
  this.uiService.alertOK(this.translate.instant('PROF-DETAIL.msgErrReqBirthday'));
  return;
}


    const res = await this.uiService.alertOK_CANCEL(this.translate.instant('PROF-DETAIL.msgValidaEdad'));
    if(!res){
      return;
    }
    
    const usr_tmp: User = {};

    usr_tmp.firstName = this.fname.value;
    usr_tmp.lastName = this.lname.value;
    usr_tmp.gender = this.gender.value;
    usr_tmp.email = this.email;
    usr_tmp.phone = this.mobile;
    usr_tmp.birthDay = this.birthday;
    usr_tmp.image = this.image;
    usr_tmp.password = this.password;

    this.userService.navegationExtras = {
      state: {
        usr: usr_tmp,
        rs: this.rs,
        name_img: this.image,
        birth:this.birthday,
        gender:usr_tmp.gender,
        email:this.email

      }
    }
    // this.router.navigate(['i-am-alooking-for']);
    const user: User = {
      firstName: this.fname.value,
      lastName: this.lname.value,
      image: null,
      gender: this.gender.value,
      birthDay: this.birthday
    };
    console.log(user);
    await Storage.set({
      key: 'dp',
      value: this.image
    });
    // Save it somewhere accessible (like a service or localStorage)
    this.userService.setUserr(user);
    this.router.navigate(['location'], this.userService.navegationExtras);
    
  }

  isAdult(dateString: string): boolean {
    //const birthday = addDays(parseISO(dateString), 1);
    const birthday = parseISO(dateString);
    const today = new Date();
    const age = differenceInYears(today, birthday);

    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }

  formatoCapital(campo: string){
    let palabra = this.ProfileForm.get(campo);
    if(palabra.value !== null && palabra.value !== ""){
      palabra.setValue(palabra.value.substring(0, 1).toUpperCase() + palabra.value.substring(1, palabra.value.lenght).toLowerCase());
    }
  }

  separaName(name: string){
    //name = 'Humberto Luis +Garcia';
    if (name && name.trim() !== '') {
      let nameArr = name.split(' ');
      this.fname.setValue(nameArr[0]);
      if (nameArr.length > 1) {
        this.lname.setValue(nameArr[1].replace('+', ' '));
      } else {
        this.lname.setValue('');
      }
    } else {
      this.fname.setValue('');
      this.lname.setValue('');
    }
  }
  
}
