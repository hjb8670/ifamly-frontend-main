import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { constants } from 'src/environments/constants';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../services/user.service';
import { Catalog, User } from '../../../interfaces/interfaces';
import { UiService } from 'src/app/services/ui.service';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
  //@ViewChild('modalC') modalCal: IonModal;
  @ViewChild('modalLoc') modalLoc: IonModal;

  public txtBirthDay = '';
  private usrApp: User;
  private lanCatalogo = 'EN';
  public iams: Catalog[];
  public iamlookings: Catalog[];
  public countries: Catalog[];
  public states: Catalog[];
  public cities: Catalog[];
  public genders: Catalog[];
  public imgsSelected = [];
  public newLocation = null;

  editAccountForm = this.formBuilder.group( {
    locGPSToggle: false,
    location: ['', [ Validators.required ]],
    fname: ['', [ Validators.required ]],
    lname: ['', [ Validators.required ]],
    gender_S: ['', [ Validators.required ]],
    bday: ['', [ /*Validators.required */]],
    bio: ['', [ Validators.required ]],
    iam_a: ['', [ Validators.required ]],
    iam_looking: ['', [ Validators.required]],
    school: '',
    yearSchool: [0, [ Validators.min(1900), Validators.max(2101)]],
    workTitle: '',
    workCo: '',
    hometown: '',
    ethnicity: '',
    country: '',
    state: '',
    city: ''
  });

  customIamOptions = {
    header: this.translate.instant('EDIT-ACCOUNT.Title_iam'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
    translucent: true,
  };

  customiam_lookingOptions =  {
    header: this.translate.instant('EDIT-ACCOUNT.Title_iam_a_looking_for'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
    translucent: true,
  };

  customCountryOptions = {
    header: this.translate.instant('EDIT-ACCOUNT.country'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
    translucent: true,
  };

  customStateOptions = {
    header: this.translate.instant('EDIT-ACCOUNT.state'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
    translucent: true,
  };

  customCityOptions = {
    header: this.translate.instant('EDIT-ACCOUNT.city'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('EDIT-ACCOUNT.SubHdIam'),
    translucent: true,
  };

  public validation_messages = {
    'location': [ { type: 'required', message: 'msgErrReqLocation'} ],
    'fname': [ { type: 'required', message: 'msgErrReqFName'} ],
    //'lname': [ { type: 'required', message: 'msgErrReqLName'} ],
    'bday': [ { type: 'required', message: 'msgErrReqBirthday'} ],
    'bio': [ { type: 'required', message: 'msgErrReqBio'} ],
    'iam_a': [ { type: 'required', message: 'msgErrReqIam'} ],
    'iam_looking': [ { type: 'required', message: 'msgErrReqIamlooking'} ],
    'schollYear': [ { type: 'min', message: 'msgValidYear'}, { type: 'max', message: 'msgValidYear'} ]
  };
  user: User;
  email: string;
  newlocapiresp: any;
  lati: number;
  longi: number;
  address: any;
  country: any;
  state: any;
  city: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private translate: TranslateService,
    private uiService: UiService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.principal();
    });
  }

  async principal() {
    this.uiService.showLoader();
  
 
  
    this.usrApp = await this.userService.getUserBasic('');
    this.user = this.usrApp;
  
    console.log('USR-APP: ', this.usrApp);
    this.country=this.usrApp.location.country;
    this.state=this.usrApp.location.state;
    this.city=this.usrApp.location.city;
    this.email=this.usrApp.email;
  
    this.userService.getCatalogo2(
      constants.catalogs.Gender.toString(),
      this.lanCatalogo,
      this.user.birthDay,
      this.user.gender,
      this.user.email
    ).then((value: any) => {
      this.genders = value;
    });
  
    this.countries = <Catalog[]>await this.userService.getCountries();
  
    this.fillForm();
  
    this.uiService.hideLoader();
  } 
  async getCurrentPosition() {
    console.log(this.locGPSToggle.value);
    if(this.locGPSToggle.value == false){

    
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates.coords);
  
    const latitude = coordinates.coords.latitude;
    const longitude = coordinates.coords.longitude;
   
    const res = await this.userService.locationnewapi(latitude,longitude); 
   // console.log(res); 
    this.newlocapiresp=res;
    console.log(this.newlocapiresp);
    this.country=this.newlocapiresp.country;
    this.state=this.newlocapiresp.state;
    this.city=this.newlocapiresp.city;
    this.lati=latitude;
    this.longi=longitude;
    this.address=this.newlocapiresp.address;
    }
  }
  

  get locGPSToggle() {
    return this.editAccountForm.get('locGPSToggle');
  }

  get location() {
    return this.editAccountForm.get('location');
  }

  get fname() {
    return this.editAccountForm.get('fname');
  }

  get lname() {
    return this.editAccountForm.get('lname');
  }

  get bday() {
    return this.editAccountForm.get('bday');
  }

  get iam_a() {
    return this.editAccountForm.get('iam_a');
  }

  get iam_looking() {
    return this.editAccountForm.get('iam_looking');
  }

  get bio() {
    return this.editAccountForm.get('bio');
  }

  get school() {
    return this.editAccountForm.get('school');
  }
  get gender_S() {
  return this.editAccountForm.get('gender_S');
}

  get yearSchool() {
    return this.editAccountForm.get('yearSchool');
  }

  get workTitle() {
    return this.editAccountForm.get('workTitle');
  }

  get workCo() {
    return this.editAccountForm.get('workCo');
  }
  // get country() {
  //   return this.editAccountForm.get('country');
  // }
  // get state() {
  //   return this.editAccountForm.get('state');
  // }
  // get city() {
  //   return this.editAccountForm.get('city');
  // }

  get hometown() {
    return this.editAccountForm.get('hometown');
  }

  get ethnicity() {
    return this.editAccountForm.get('ethnicity');
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    if(this.translate.currentLang == 'es'){
      this.lanCatalogo = constants.languages.es;
    } else {
      this.lanCatalogo = constants.languages.en;
    }
  }

  async fillForm() {
    this.iams = <Catalog[]>await this.userService.getCatalogo3(
      constants.catalogs.IamA.toString(),
      this.lanCatalogo,
      this.usrApp.birthDay,
      this.user.gender,
      this.usrApp.email
    );
    setTimeout(() => {
      this.editAccountForm.get('iam_a')?.valueChanges.subscribe(async (selectedValue) => {
        console.log('iam_a selected:', selectedValue);
    
        if (!selectedValue) return; // ⛔ Guard clause
        this.iam_looking.setValue(this.usrApp.iam_looking_4_id);
        this.iamlookings = <Catalog[]> await this.userService.getCatalogoImLookingFor2(
          constants.catalogs.IamLooking.toString(),
          this.lanCatalogo,
          selectedValue,
          this.email
        );
      });
      this.iam_looking.setValue(this.usrApp.iam_looking_4_id);
    });
    
   // this.iam_looking.setValue(this.iamlookings);
    this.location.setValue(
      `${this.usrApp.location.city}, ${this.usrApp.location.state}, ${this.usrApp.location.country}`
    );
    this.fname.setValue(this.usrApp.firstName);
    this.lname.setValue(this.usrApp.lastName);
    this.setBirthdayVal(this.usrApp.birthDay);
    this.bday.setValue(this.usrApp.birthDay);
    this.bio.setValue(this.usrApp.aboutMe);
    this.school.setValue(this.usrApp.educationName);
    this.yearSchool.setValue(this.usrApp.educationYear);
    this.workTitle.setValue(this.usrApp.title);
    this.workCo.setValue(this.usrApp.company);
    this.hometown.setValue(this.usrApp.dondeSoy);
    this.ethnicity.setValue(this.usrApp.queSoy);
  
    const iam_a_val: any = await this.userService.getXCatalogo(constants.catalogs.IamA);
    this.iam_a.setValue(iam_a_val);
   
    this.iam_a.setValue(this.usrApp.iam_a_id);
    
  }
  

  async save() {
     if (this.iam_a.invalid || !this.iam_a.value || this.iam_looking.invalid || !this.iam_looking.value ) {
    this.uiService.alertOK(this.translate.instant('ABOUT-ME.missingfiled'));
    this.iam_a.markAsTouched();
    this.iam_looking.markAsTouched();
   
    return;
  }else{
this.uiService.showLoader();
    let usr: User= {
      //usr.location = this.location.value,//Dato especial necesitamos cambiarlo.
      firstName: this.fname.value === undefined ? null : this.fname.value,
      lastName: this.lname.value === undefined ? null : this.lname.value,
      aboutMe: this.bio.value === undefined ? null : this.bio.value,
      educationName: this.school.value === undefined ? null : this.school.value,
      educationYear: this.yearSchool.value === undefined ? null : this.yearSchool.value,
      title: this.workTitle.value === undefined ? null : this.workTitle.value,
      company: this.workCo.value === undefined ? null : this.workCo.value,
      dondeSoy: this.hometown.value === undefined ? null : this.hometown.value,
      queSoy: this.ethnicity.value === undefined ? null : this.ethnicity.value,
      location: this.newLocation,
      iam_a: this.iam_a.value,
      gender: this.gender_S.value,
    };
    

    console.log('i am',this.iam_a)
    let res1 = <boolean> await this.userService.setCatalogo(this.iam_a.value);
    let res0 = <boolean> await this.userService.update(usr);

    // debugger;
    // let res2 = <boolean> await this.userService.setCatalogo(this.iam_looking.value);

    this.uiService.hideLoader();
    if(!res0 || !res1){
     // this.uiService.alertOK(this.translate.instant('EDIT-ACCOUNT.ErrorMsg'));
      this.router.navigate(['main/tabs/account']);
      return;
      
    }
    this.router.navigate(['main/tabs/account']);
  }
}

  setPhotoPrfile() {
    let navegationExtras: NavigationExtras = {
      state: {
        usrApp: this.usrApp
      }
    }
    
    this.router.navigate(['photos-view'], navegationExtras);
  }

  setBirthday() {
    this.setBirthdayVal(this.bday.value);
  }

  setBirthdayVal(dateB: string) {
    console.log('FECHA: ', dateB);
    
    const fec = new Date(dateB)
    const day =  ('00'+fec.getDate()).slice(-2);
    const t_month = fec.getMonth()+1;
    const month = ('00'+t_month).slice(-2);
    const year = fec.getFullYear();
    //this.birthday = year+'-'+month+'-'+day; // 2022-05-27

    if( this.translate.instant('PROF-DETAIL.lanCal') == 'es-MX') {
      this.txtBirthDay = day+'.'+month+'.'+year;  //'01.20.75';
    } else {
      this.txtBirthDay = month+'.'+day+'.'+year;
    }

    //this.modalCal.dismiss();
  }

  aboutMe() {
    console.log('ABOUT ME');

    let navegationExtras: NavigationExtras = {
      state: {
        usrApp: this.usrApp,
        banEdit: true
      }
    }
    
    this.router.navigate(['about-me'], navegationExtras);
    
  }

  validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        this.uiService.alertOK(this.translate.instant('PROF-DETAIL.'+validation.message));
        return true;
      }
    }
    return false;
  }

  locationChange(){
    console.log(this.country.value);
    console.log(this.state.value);
    console.log(this.city.value);
    if(this.city.value === '' || this.state.value === '' || this.country.value === null){
      this.uiService.alertOK(this.translate.instant('EDIT-ACCOUNT.errorNotCSC'));
      return;
    }
    let countryS = this.countries.filter(c => c['id'] === Number(this.country.value))
    let stateS = this.states.filter(t => t['id'] === Number(this.state.value))
    let cityS = this.cities.filter(c => c['id'] === Number(this.city.value))
    if(countryS.length === 0 || stateS.length === 0 || cityS.length === 0 ){
      this.uiService.alertOK(this.translate.instant('EDIT-ACCOUNT.errorCSC'));
      return;
    }
    this.location.setValue(countryS[0]['country']+", "+stateS[0]['state']+", "+cityS[0]['city']);
    this.newLocation = {
      country: countryS[0]['country'],
      state: stateS[0]['state'],
      city: cityS[0]['city'],
      latitud: '19.2824',//Definidas por defecto en lo que se da solución al mismo
      longitud: '-99.6569',
      address: ''
    }
    this.modalLoc.dismiss();
  }

  async selectCountry(){
    this.uiService.showLoader();
    this.state.setValue('');
    this.city.setValue('');
    this.cities = [];
    this.states = [];
    this.states = <Catalog[]> await this.userService.getStates(this.country.value);
    this.uiService.hideLoader();
  }

  async selectState(){
    this.uiService.showLoader();
    this.cities = [];
    this.city.setValue('');
    this.cities = <Catalog[]> await this.userService.getCities(this.country.value, this.state.value);
    console.log(this.cities);
    this.uiService.hideLoader();
  }

  async selectlooking(){
    this.iamlookings = <Catalog[]> [];
    this.iam_looking.setValue('')
    this.iam_looking.enable();
    console.log(this.iam_a.value);
    this.iamlookings = <Catalog[]> await this.userService.getCatalogoImLookingFor(constants.catalogs.IamLooking.toString(), this.lanCatalogo, this.iam_a.value,'');
  }

}
