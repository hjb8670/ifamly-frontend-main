import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonModal, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';

import { constants } from 'src/environments/constants';
import { Catalog, Experience, ImagesExperience, ImagesUser } from '../../../interfaces/interfaces';
import { UserService } from '../../../services/user.service';
import { UiService } from '../../../services/ui.service';
import { ExperienceService } from '../../../services/experience.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-new-edit-exp',
  templateUrl: './new-edit-exp.page.html',
  styleUrls: ['./new-edit-exp.page.scss'],
})
export class NewEditExpPage implements OnInit {
  @ViewChild('modalC') modalCal: IonModal;
  @ViewChild('modalLoc') modalLoc: IonModal;

  public presentarErroresCampos = false;
  private lanCatalogo = 'EN';
  public txtDate = '';
  public experienceCat: Catalog[] = [];
  public experience: Experience;
  public isEdit = false;
  public catSelected = '0';
  public isDefault = true;
  public fileExperience;
  private image = '';
  private name_img = '';
  private experienceId = 0;

  public countries: Catalog[];
  public states: Catalog[];
  public cities: Catalog[];
  public imgsSelected = [];
  public newLocation = null;
  
  experienceForm = this.formBuilder.group( {
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    dateF: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(0), Validators.max(999)]],
    location: ['', [Validators.required]],
    nopeople: ['', [Validators.required, Validators.min(1), Validators.max(999)]],
    category: ['', [Validators.required]],
    country: '',
    state: '',
    city: ''
  });

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
    'title': [ { type: 'required', message: 'msgErrReqTitle' } ],
    'description': [ { type: 'required', message: 'msgErrReqDescription' } ],
    'dateF': [ { type: 'required', message: 'msgErrReqDate'} ],
    'price': [
      { type: 'required', message: 'msgErrReqPrice' },
      { type: 'min', message: 'msgErrMinPrice' },
      { type: 'max', message: 'msgErrMaxPrice' }
    ],
    'location': [ { type: 'required', message: 'msgErrReqLocation'} ],
    'nopeople': [
      { type: 'required', message: 'msgErrReqNoPeople' },
      { type: 'min', message: 'msgErrMinNoPeople' },
      { type: 'max', message: 'msgErrMaxNoPeople' }
    ],
    "category": [ { type: 'required', message: 'msgErrReqCategory'} ]
   };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private translate: TranslateService,
    private userService: UserService,
    private experienceService: ExperienceService,
    private uiService: UiService,
    public dms: DomSanitizer
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.experience = this.router.getCurrentNavigation().extras.state.experience;
        this.isEdit = this.router.getCurrentNavigation().extras.state.isEdit;
      
        console.log('EXPERIENCE TO EDIT: ', this.experience);
        console.log('is EDIT: ', this.isEdit);
      }
    });
  }

  ngOnInit() {
    this.dateF.setValue(new Date().toISOString());
  }

  async ionViewDidEnter() {
    if(this.translate.currentLang == 'es'){
      this.lanCatalogo = constants.languages.es;
    } else {
      this.lanCatalogo = constants.languages.en;
    }

     
    
    this.uiService.showLoader();

    this.countries = <Catalog[]> await this.userService.getCountries();

    this.experienceCat = <Catalog[]> await this.userService.getCatalogo(constants.catalogs.ExperienceCat.toString(), this.lanCatalogo);

    if(this.isEdit) {
      this.setFields();
    }
    this.uiService.hideLoader();
  }

  get title() {
    return this.experienceForm.get('title');
  }

  get description() {
    return this.experienceForm.get('description');
  }

  get dateF() {
    return this.experienceForm.get('dateF');
  }

  get price() {
    return this.experienceForm.get('price');
  }

  get location() {
    return this.experienceForm.get('location');
  }

  get nopeople() {
    return this.experienceForm.get('nopeople');
  }

  get category() {
    return this.experienceForm.get('category');
  }

  get country() {
    return this.experienceForm.get('country');
  }

  get state() {
    return this.experienceForm.get('state');
  }

  get city() {
    return this.experienceForm.get('city');
  }

  validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        console.log(this.translate.instant('NEW-EDIT-EXP.'+validation.message));
        this.uiService.alertOK(this.translate.instant('NEW-EDIT-EXP.'+validation.message));
        return true;
      }
    }

    return false;
  }

  async onUploadImg() {
    const imge = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });
    
    this.isDefault = false;
    this.name_img = 'exp.'+imge.format;
    this.image = imge.base64String;
    
    this.fileExperience = this.displayImg(imge.format, imge.base64String);


  }

  displayImg(format: string, b64: string) {
    return this.dms.bypassSecurityTrustUrl("data:image/"+format+";base64," + b64);
  }

  setDate() {
    if (this.dateF.value == null || this.dateF.value == '') {
      this.txtDate = '';
      this.modalCal.dismiss();
      return;
    }
    
    this.txtDate = this.converterDatetoString(this.dateF.value);

    this.modalCal.dismiss();
  }

  converterDatetoString(dateT): string {
    const fec = new Date(dateT)
    const day =  ('00'+fec.getDate()).slice(-2);
    const year = fec.getFullYear();
    const hours = ('00'+fec.getHours()).slice(-2);
    const minutes = ('00'+fec.getMinutes()).slice(-2);
    let t_date;

    if( this.translate.instant('PROF-DETAIL.lanCal') == 'es-MX') {
      t_date = day+' '+constants.meses.mesES[fec.getMonth()]+', '+year+' @ '+hours+':'+minutes;  //'01.20.75';
    } else {
      t_date = day+' '+constants.meses.mesEN[fec.getMonth()]+', '+year+' @ '+hours+':'+minutes;
    }

    return t_date;
  }

  async optionSelected(ev: any) {
    this.category.setValue(ev.detail.value);
  }

  async onSubmit() {
    console.log('SUBMIT');

    if(this.validaCampo(this.title, this.validation_messages.title)){
      return;
    }

    if(this.validaCampo(this.description, this.validation_messages.description)){
      return;
    }

    if(this.validaCampo(this.dateF, this.validation_messages.dateF)){
      return;
    }

    if(this.validaCampo(this.location, this.validation_messages.location)){
      return;
    }

    if(this.validaCampo(this.nopeople, this.validation_messages.nopeople)){
      return;
    }

    if(this.validaCampo(this.category, this.validation_messages.category)){
      return;
    }
    if(this.validaCampo(this.price, this.validation_messages.price)){
      return;
    }
    this.uiService.showLoader();

    let fec_t: Date = new Date(this.dateF.value)
    console.log('MES: ', fec_t.getMonth());
    const year = fec_t.getFullYear();
    const mon_inx = fec_t.getMonth()+1;
    const month = ('00'+mon_inx).slice(-2);
    const day =  ('00'+fec_t.getDate()).slice(-2);
    const hours = ('00'+fec_t.getHours()).slice(-2);
    const minutes = ('00'+fec_t.getMinutes()).slice(-2);
    let fec_fin = year+'-'+month+'-'+day+'T'+hours+':'+minutes+':00';

    console.log('DATE: ', fec_fin);

    this.experience = {
      title: this.title.value,
      description: this.description.value,
      dateTime: fec_fin, //'2023-03-22T00:00:00',
      location: this.newLocation,
      amountPeople: Number(this.nopeople.value),
      experienceCategory: { id: Number(this.category.value) },
      vip: false,
      coins: Number(this.price.value)
    }
    let res;
    if(this.isEdit){
      this.experience["experienceId"] = this.experienceId;
      res = await this.experienceService.updateExperience(this.experience);
    }else{
      res = await this.experienceService.addExperience(this.experience);
    }
    if(this.image === ''){
      console.log("No se modifico la imagen");
      this.uiService.hideLoader();
      //this.navCtrl.pop();
      this.reloadMyExperiences();
      return;
    }
    if(res !== null){
      res = await this.experienceService.uploadIMG(res["lastId"],this.name_img, this.image); 
      this.uiService.hideLoader();
      if(!res){
        this.uiService.alertOK(this.translate.instant('NEW-EDIT-EXP.imageError'));
        return;
      }
    }else{
      this.uiService.hideLoader();
      this.uiService.alertOK(this.translate.instant('NEW-EDIT-EXP.createError'));
      return;
    }
    this.uiService.hideLoader();
    //this.navCtrl.pop();
    
    this.reloadMyExperiences();
  }

  reloadMyExperiences(){
    let navegationExtras: NavigationExtras = {
      state: {
        isMyExp: true
      }
    }
    this.router.navigate(['/main/tabs/my-experience'], navegationExtras);
  }

  setFields() {
    this.experienceId = this.experience.experienceId;
    this.title.setValue(this.experience.title);
    this.description.setValue(this.experience.description);
    this.dateF.setValue(new Date(this.experience.dateTime).toISOString());
    this.txtDate = this.converterDatetoString(this.dateF.value);
    this.location.setValue(/*this.usrApp.location.address+', 'Ahorita no se esta guardando y ver si se quedara o no */this.experience.location.city+', '+this.experience.location.state+', '+this.experience.location.country)
    this.nopeople.setValue(this.experience.amountPeople.toString());
    this.catSelected = this.experience.experienceCategory.id.toString();
    this.category.setValue(this.experience.experienceCategory.id.toString());
    this.price.setValue(this.experience.coins.toString());
    this.getAvatarImg(this.experience);
  }

  async getAvatarImg(experience: Experience) {
    this.fileExperience = '../../../assets/icon/30-Default_no-image.jpeg';

    const res_imgs =  <ImagesExperience[]> await this.experienceService.getIMGS(experience.experienceId.toString());
    if(res_imgs !== undefined && res_imgs != null){
      for (const img of res_imgs) {
        if(img.avatar) {
          this.fileExperience = img.multimediaUrl;
        }
      }
    }
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

}
