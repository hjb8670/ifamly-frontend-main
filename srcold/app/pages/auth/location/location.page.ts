import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { constants } from 'src/environments/constants';
import { TranslateService } from '@ngx-translate/core';
import { User, Catalog, ImagesUser } from '../../../interfaces/interfaces';
import { IonModal } from '@ionic/angular';
import { UiService } from '../../../services/ui.service';
import { UserService } from '../../../services/user.service';
import { MatchService } from '../../../services/match.service';
import { Geolocation } from '@capacitor/geolocation';
import { isThisISOWeek } from 'date-fns';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild('mCountry') modalCountry: IonModal;
  @ViewChild('mState') modalState: IonModal;
  @ViewChild('mCity') modalCity: IonModal;

  private lanCatalogo = 'EN';
  private usr: User = { };
  private rs = '';
  private imgsUser: ImagesUser[] = [];
  private name_img = '';
  public countries: Catalog[];
  public countrySelected = this.translate.instant('LOCATION.CountryPH');
  public idCountry = '';
  public countryBuscar = '';
  public states: Catalog[];
  public stateSelected = this.translate.instant('LOCATION.StatePH');
  public idState = '';
  public stateBuscar = '';
  public cities: Catalog[];
  public citySelected = this.translate.instant('LOCATION.CityPH');
  private idCity = '';
  public cityBuscar = '';
  newlocapiresp: any;
  country: any;
  state: any;
  city: any;
  birth: any;
  gend: any;
  emaill: any;
  lati: any;
  longi: any;
  address: any;


  /* locationForm = this.formBuilder.group( {
    iam_a: [''],
    iam_looking: ['']
  }); */

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private uiService: UiService,
    private userService: UserService,
    private matchService: MatchService
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usr = this.router.getCurrentNavigation().extras.state.usr;
        this.rs = this.router.getCurrentNavigation().extras.state.rs;
        this.name_img = this.router.getCurrentNavigation().extras.state.name_img;
        this.birth = this.router.getCurrentNavigation().extras.state.birth;
        this.gend = this.router.getCurrentNavigation().extras.state.gender;
        this.emaill = this.router.getCurrentNavigation().extras.state.email;
        console.log('USR: ', this.usr);
        console.log('RS: ', this.rs);
        console.log('NAME_IMG: ', this.name_img);
      }
    });
  }

  ngOnInit() {
    this.idCountry = "";
    this.countrySelected = this.translate.instant('LOCATION.CountryPH');;
    this.stateSelected = this.translate.instant('LOCATION.StatePH');
    this.idState = '';
    this.citySelected = this.translate.instant('LOCATION.CityPH');
    this.idCity = '';
  }

  async ionViewDidEnter() { 
    this.getCurrentPosition();
    if(this.translate.currentLang == 'es'){
      this.lanCatalogo = constants.languages.es;
    } else {
      this.lanCatalogo = constants.languages.en;
    }
    this.uiService.showLoader();
    this.countries = <Catalog[]> await this.userService.getCountries();
    this.uiService.hideLoader();
    this.states = [];
    this.cities = []; 
    console.log('COUNTRIES: ', this.countries);
    
  }

  openModalC() {
    this.countryBuscar = '';
  }

  searchCountry(ev) {
    this.countryBuscar = ev.detail.value;
  }

  async selectCountry(idC, nameC) {
    this.idCountry = idC;
    this.countrySelected = nameC;

    this.stateSelected = this.translate.instant('LOCATION.StatePH');
    this.idState = '';
    this.citySelected = this.translate.instant('LOCATION.CityPH');
    this.idCity = '';
    this.cities = [];
    this.uiService.showLoader();
    this.states = <Catalog[]> await this.userService.getStates(this.idCountry);
    this.uiService.hideLoader();
    console.log('ESTADOS: ', this.states);

    this.modalCountry.dismiss();
  }

  openModalS() {
    this.stateBuscar = '';
    
    if(this.idCountry == ''){
      this.uiService.alertOK(this.translate.instant('LOCATION.StateMsg'));
      return;
    }

    this.modalState.present();
  }

  searchState(ev) {
    this.stateBuscar = ev.detail.value;
  }

  async selectState(obj) {
    this.idState = obj.id;
    this.stateSelected = obj.state;

    this.citySelected = this.translate.instant('LOCATION.CityPH');
    this.idCity = '';
    this.uiService.showLoader();
    this.cities = <Catalog[]> await this.userService.getCities(obj.countryId, this.idState);
    this.uiService.hideLoader();
    console.log('CIUDADES: ', this.cities);

    this.modalState.dismiss();
  }

  openModalCt() {
    this.cityBuscar = '';
    console.log('CITY: ', this.idCity);
    
    if(this.idState == ''){
      this.uiService.alertOK(this.translate.instant('LOCATION.CityMsg'));
      return;
    }

    this.modalCity.present();
  }

  searchCity(ev) {
    this.cityBuscar = ev.detail.value;
  }

  selectCity(idCt, nameCt) {
    this.idCity = idCt;
    this.citySelected = nameCt;

    this.modalCity.dismiss();
  }

  async getCurrentPosition() {
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


  async next(op: string) {
   
    if( op == 'next' ) {
     
      this.usr.location =  this.newlocapiresp;

      /*this.usr.location.country = this.idCountry;
      this.usr.location.state = this.idState;
      this.usr.location.city = this.idCity; */
    }
    
    console.log('USR: ', this.usr);
    const user: User = {
      location:{
        country: this.country,
        state: this.state,
        city: this.city,
        address: this.address,
        latitud: this.lati,
        longitud: this.longi,
        radio: '20'
    },
    };
    
    // Save it somewhere accessible (like a service or localStorage)
    this.userService.setUserr(user);
    this.router.navigate(['about-me'], {
      state: { pageid: 'regview' ,birth:this.birth,gender:this.usr.gender,mail:this.emaill}
      });
    this.uiService.showLoader();
   
    //const res = await this.userService.register(this.usr); 
    //console.log(res);   
   
  }
}
