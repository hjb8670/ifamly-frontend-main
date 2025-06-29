import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Catalog, CatalogItem, User } from '../../../interfaces/interfaces';
import { constants } from 'src/environments/constants';
import { PickerColumnOption, PickerController } from '@ionic/angular';
import { UiService } from '../../../services/ui.service';
import { UserService } from '../../../services/user.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {
  private lanCatalogo = 'EN';
  private selectedHeight = '';
  public phHeight = this.translate.instant('ABOUT-ME.Gral_ph');
  private fHeight = '0';
  private indexFHeight = 0;
  private iHeight = '0';
  private indexIHeight = 0;
  public styleLabelData = 'dataLabel_gris';
  private intHeight: PickerColumnOption[] = [];
  private decHeight: PickerColumnOption[] = [];
  public genders: Catalog[];
  public pronouns: Catalog[];
  public languajes: Catalog[];
  public exercises: Catalog[];
  public sings: Catalog[];
  public hobbies: Catalog[];
  public pets: Catalog[];
  public educations: Catalog[];
  public valTraits: Catalog[];
  public drinks: Catalog[];
  public smoks: Catalog[];
  public kids: Catalog[];
  public drugs: Catalog[];
  public religions: Catalog[];
  public politicals: Catalog[];
  private usrApp: User;
  public banEdit = false;
  

  customGenderOptions = {
    header: this.translate.instant('ABOUT-ME.Gender'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdGender'),
    translucent: true,
  };

  customPronounOptions = {
    header: this.translate.instant('ABOUT-ME.Pronoun'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdPronoun'),
    translucent: true,
  };

  customLanguajeOptions = {
    header: this.translate.instant('ABOUT-ME.Languaje'),
    cssClass: 'MultiSelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdLanguaje'),
    translucent: true,
  };

  customExerciseOptions = {
    header: this.translate.instant('ABOUT-ME.Exercise'),
    cssClass: 'MultiSelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdExe'),
    translucent: true,
  };

  customHobbyOptions = {
    header: this.translate.instant('ABOUT-ME.Hobby'),
    cssClass: 'MultiSelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdHobby'),
    translucent: true,
  };

  customSingOptions = {
    header: this.translate.instant('ABOUT-ME.Sing'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdSing'),
    translucent: true,
  };

  customEducationOptions = {
    header: this.translate.instant('ABOUT-ME.Education'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdEdu'),
    translucent: true,
  };

  customPetOptions = {
    header: this.translate.instant('ABOUT-ME.Pet'),
    cssClass: 'MultiSelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdPet'),
    translucent: true,
  };

  customValTraitOptions = {
    header: this.translate.instant('ABOUT-ME.valTrait'),
    cssClass: 'MultiSelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdValTrait'),
    translucent: true,
  };

  customDrinkOptions = {
    header: this.translate.instant('ABOUT-ME.Drink'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdDrnk'),
    translucent: true,
  };

  customSmokOptions = {
    header: this.translate.instant('ABOUT-ME.Smok'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdSmk'),
    translucent: true,
  };

  customKidOptions = {
    header: this.translate.instant('ABOUT-ME.Kid'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdKid'),
    translucent: true,
  };

  customDrugOptions = {
    header: this.translate.instant('ABOUT-ME.Drug'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdDrug'),
    translucent: true,
  };

  customReligionOptions = {
    header: this.translate.instant('ABOUT-ME.Religion'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdRlgn'),
    translucent: true,
  };

  customPoliticalOptions = {
    header: this.translate.instant('ABOUT-ME.Political'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('ABOUT-ME.SubHdPolitical'),
    translucent: true,
  };

  aboutMeForm = this.formBuilder.group({
    gender_S: [''],
    pronoun_S: [''],
    languaje_S: [''],
    exercise_S: [''],
    sing_S: [''],
    hobby_S: [''],
    education_S: [''],
    pet_S: [''],
    valTrait_S: [''],
    drink_S: [''],
    smok_S: [''],
    drug_S: [''],
    religion_S: [''],
    political_S: [''],
    kid_S: [''],
  });
  
  pageid: any;
  birth: any;
  gender: any;
  mail: any;
  selectedGenderName: string;
  selectedId: any;
  selectedName: any;
  genderid: string;
  selectedgender: string;

  /* public validation_messages = {
    'exercise_S': [ { type: 'required', message: 'msgErrReqFName'} ]
  }; */

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private userService: UserService,
    private pickerController: PickerController,
    private uiService: UiService
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      const nav = this.router.getCurrentNavigation();
      if (nav?.extras?.state) {
        const state = nav.extras.state;
        this.pageid = state.pageid;
        this.banEdit = state.banEdit;
        this.birth = state.birth;
        this.gender = state.gender;
        this.mail = state.mail;
        console.log('pageid:', this.pageid);
        this.setValidationRules();  // ✅ set form validation after pageid is known
      }
  
      this.principal();
    });
  }

  setValidationRules() {
    const optionalFields = [
      'pronoun_S', 'languaje_S', 'exercise_S', 'sing_S', 'hobby_S',
      'education_S', 'pet_S', 'valTrait_S', 'drink_S', 'smok_S',
      'drug_S', 'religion_S', 'political_S'
    ];
  
    this.aboutMeForm.setValidators(
      this.atLeastNFieldsRequiredWithGenderCondition(optionalFields, 3, this.pageid)
    );
  }
  


  atLeastNFieldsRequiredWithGenderCondition(fields: string[], requiredCount: number, pageid: string): ValidatorFn {
    return (form: AbstractControl): { [key: string]: any } | null => {
      let filled = 0;
  
      // Count how many of the optional fields are filled
      for (const field of fields) {
        const control = form.get(field);
        if (control && control.value && control.value.toString().trim() !== '') {
          filled++;
        }
      }
  
     
      // If not on 'regview', gender is not required; just check N other fields
      return filled >= requiredCount ? null : { atLeastNFieldsRequired: true };
    };
  }
  
  
  

  async principal() {
    if(this.pageid !== 'regview'){
      this.usrApp = await this.userService.getUserBasic('');
      console.log(this.usrApp);
    }
   
    // this.uiService.showLoader();
  // this.usrApp = await this.userService.getUserBasic('');
    
    //this.exercises =  await this.loadCatalog(constants.catalogs.Ejercicio);
    if (this.banEdit) {
      this.fillForm();
    }
    
   
    this.userService.getCatalogo(constants.catalogs.Pronoun.toString(), this.lanCatalogo).then((value: any) => { this.pronouns = value; });
    this.userService.getCatalogo(constants.catalogs.Lenguage.toString(), this.lanCatalogo).then((value: any) => { this.languajes = value; });
    this.userService.getCatalogo(constants.catalogs.Ejercicio.toString(), this.lanCatalogo).then((value: any) => { this.exercises = value; });
    this.userService.getCatalogo(constants.catalogs.Sing.toString(), this.lanCatalogo).then((value: any) => { this.sings = value; });
    this.userService.getCatalogo(constants.catalogs.Hobbies.toString(), this.lanCatalogo).then((value: any) => { this.hobbies = value; });
    this.userService.getCatalogo(constants.catalogs.Educacion.toString(), this.lanCatalogo).then((value: any) => { this.educations = value; });
    this.userService.getCatalogo(constants.catalogs.Pets.toString(), this.lanCatalogo).then((value: any) => { this.pets = value; });
    this.userService.getCatalogo(constants.catalogs.Values_Traits.toString(), this.lanCatalogo).then((value: any) => { this.valTraits = value; });
    this.userService.getCatalogo(constants.catalogs.Bebe.toString(), this.lanCatalogo).then((value: any) => { this.drinks = value; });
    this.userService.getCatalogo(constants.catalogs.Fuma.toString(), this.lanCatalogo).then((value: any) => { this.smoks = value; });
    this.userService.getCatalogo(constants.catalogs.Hijos.toString(), this.lanCatalogo).then((value: any) => { this.kids = value; });
    this.userService.getCatalogo(constants.catalogs.Drugs.toString(), this.lanCatalogo).then((value: any) => { this.drugs = value; });
    this.userService.getCatalogo(constants.catalogs.Religion.toString(), this.lanCatalogo).then((value: any) => { this.religions = value; });
    this.userService.getCatalogo(constants.catalogs.Political.toString(), this.lanCatalogo).then((value: any) => { this.politicals = value; });
    this.uiService.hideLoader();
  }

  get gender_S() {
    return this.aboutMeForm.get('gender_S');
  }

  get pronoun_S() {
    return this.aboutMeForm.get('pronoun_S');
  }

  get languaje_S() {
    return this.aboutMeForm.get('languaje_S');
  }

  get exercise_S() {
    return this.aboutMeForm.get('exercise_S');
  }

  get sing_S() {
    return this.aboutMeForm.get('sing_S');
  }

  get hobby_S() {
    return this.aboutMeForm.get('hobby_S');
  }

  get education_S() {
    return this.aboutMeForm.get('education_S');
  }

  get pet_S() {
    return this.aboutMeForm.get('pet_S');
  }

  get valTrait_S() {
    return this.aboutMeForm.get('valTrait_S');
  }

  get drink_S() {
    return this.aboutMeForm.get('drink_S');
  }

  get smok_S() {
    return this.aboutMeForm.get('smok_S');
  }

  get kid_S() {
    return this.aboutMeForm.get('kid_S');
  }

  get drug_S() {
    return this.aboutMeForm.get('drug_S');
  }

  get religion_S() {
    return this.aboutMeForm.get('religion_S');
  }

  get political_S() {
    return this.aboutMeForm.get('political_S');
  }

  ngOnInit() {
    
   
  }
  

  async ionViewDidEnter() {
    // const user = this.userService.getUserr();
    // console.log(user);
    if (this.translate.currentLang == 'es') {
      this.lanCatalogo = constants.languages.es;
    } else {
      this.lanCatalogo = constants.languages.en;
    }

    this.loadHeightArrays();

  }
  

  fillForm() {
    console.log(this.usrApp.height);
    if (this.usrApp.height !== undefined && this.usrApp.height !== null) {
      this.fHeight = this.usrApp.height.split(".")[0];
      this.iHeight = this.usrApp.height.split(".")[1];
      this.selectedHeight = this.usrApp.height;
      this.phHeight = this.usrApp.height + ' ' + this.translate.instant('ABOUT-ME.Unit1');
      this.styleLabelData = 'dataLabel_negro';
      this.checkedHeightArrays();
    }
   
    this.userService.getXCatalogo(constants.catalogs.Pronoun).then((value: string) => { this.pronoun_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Educacion).then((value: string) => { this.education_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Lenguage).then((value: string) => { this.languaje_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Sing).then((value: string) => { this.sing_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Ejercicio).then((value: string) => { this.exercise_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Hobbies).then((value: string) => { this.hobby_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Pets).then((value: string) => { this.pet_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Values_Traits).then((value: string) => { this.valTrait_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Bebe).then((value: string) => { this.drink_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Fuma).then((value: string) => { this.smok_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Drugs).then((value: string) => { this.drug_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Religion).then((value: string) => { this.religion_S.setValue(value); });
    this.userService.getXCatalogo(constants.catalogs.Political).then((value: string) => { this.political_S.setValue(value); });
    // this.gender_S.setValue(this.usrApp.gender);
  }

  loadHeightArrays() {
    //Foots
    let intIni = 1;
    let intFin = 7;

    //Metros
    console.log('LAN: ', this.translate.currentLang);

    if (this.translate.currentLang == 'es') {
      intIni = 0;
      intFin = 2;
    }

    for (let i = intIni; i <= intFin; i++) {
      this.intHeight.push({
        text: i.toString(),
        value: i.toString()
      });
    }

    for (let i = 0; i < 100; i++) {
      this.decHeight.push({
        text: ('00' + i).slice(-2),
        value: ('00' + i).slice(-2)
      });
    }
  }

  checkedHeightArrays() {
    //for (const obj of this.intHeight) {
    for (var i in this.intHeight) {
      if (this.intHeight[i].value === this.fHeight) {
        this.indexFHeight = Number(i);
        break;
      }
    }

    for (var i in this.decHeight) {
      if (this.decHeight[i].value === this.iHeight) {
        this.indexIHeight = Number(i);
        break;
      }
    }

  }

  async presentPicker() {
    const picker = await this.pickerController.create({
      cssClass: 'PickerControl',
      buttons: [
        {
          text: 'Confirm',
          handler: (selected) => {
            this.fHeight = selected.intHeight.value;
            this.iHeight = selected.decHeight.value;
            this.selectedHeight = this.fHeight + '.' + this.iHeight;
            this.phHeight = this.selectedHeight + ' ' + this.translate.instant('ABOUT-ME.Unit1');
            this.styleLabelData = 'dataLabel_negro';
            this.checkedHeightArrays();
          },
        }
      ],
      columns: [
        {
          name: 'intHeight',
          selectedIndex: this.indexFHeight,
          suffix: this.translate.instant('ABOUT-ME.Unit1'),
          options: this.intHeight
        },
        {
          name: 'decHeight',
          selectedIndex: this.indexIHeight,
          suffix: this.translate.instant('ABOUT-ME.Unit2'),
          options: this.decHeight
        }
      ],
    });
    await picker.present();
  }

 


  async next(op: string) {
    
  //    if(this.aboutMeForm.invalid) {
  //   this.uiService.alertOK(this.translate.instant('EXP-DETAIL.PleaseFill'));
  //   return; // Don't proceed with save
  // }
    if (op == 'next') {
      this.router.navigate(['edit-account']);
      let usr: User = { height: this.selectedHeight };

      console.log('HEIGHT: ', this.selectedHeight);
     
      console.log('PRONOUN: ', this.pronoun_S.value);
      console.log('LANGUAJE: ', this.languaje_S.value);
      console.log('EXERCISE: ', this.exercise_S.value);
      console.log('ZODIACO: ', this.sing_S.value);
      console.log('HOBBIES: ', this.hobby_S.value);
      console.log('EDUCATION: ', this.education_S.value);
      console.log('PETS: ', this.pet_S.value);
      console.log('DRINK: ', this.drink_S.value);
      console.log('SMOK: ', this.smok_S.value);
      console.log('KIDS: ', this.kid_S.value);
      console.log('DRUGS: ', this.drug_S.value);
      console.log('RELIGION: ', this.religion_S.value);
      this.uiService.showLoader();
      let res0 = true, res1 = true, res2 = true, res3 = true, res4 = true, res5 = true,
        res6 = true, res7 = true, res8 = true, res9 = true, res10 = true, res11 = true,
        res12 = true, res13 = true, res14 = true, res15 = true;

      // res0 = <boolean>await this.userService.update({ height: this.selectedHeight ?? '' });
      if (this.pronoun_S.value !== null && this.pronoun_S.value !== undefined && this.pronoun_S.value !== '') {
        res2 = <boolean>await this.userService.setCatalogo(this.pronoun_S.value);
      }
      if (this.languaje_S.value !== null && this.languaje_S.value !== undefined && this.languaje_S.value.length > 0) {
        res3 = <boolean>await this.userService.setCatalogoMultiple(constants.catalogs.Lenguage, this.languaje_S.value);
      }
      if (this.exercise_S.value?.length > 0) {
        res4 = <boolean>await this.userService.setCatalogoMultiple(constants.catalogs.Ejercicio, this.exercise_S.value);
      }

      if (this.sing_S.value !== null && this.sing_S.value !== undefined && this.sing_S.value !== '') {
        res5 = <boolean>await this.userService.setCatalogo(this.sing_S.value);
      }

      if (this.hobby_S.value?.length > 0) {
        res6 = <boolean>await this.userService.setCatalogoMultiple(constants.catalogs.Hobbies, this.hobby_S.value);
      }

      if (this.education_S.value) {
        res7 = <boolean>await this.userService.setCatalogo(this.education_S.value);
      }

      if (this.pet_S.value?.length > 0) {
        res8 = <boolean>await this.userService.setCatalogoMultiple(constants.catalogs.Pets, this.pet_S.value);
      }

      if (this.valTrait_S.value?.length > 0) {
        res9 = <boolean>await this.userService.setCatalogoMultiple(constants.catalogs.Values_Traits, this.valTrait_S.value);
      }

      if (this.drink_S.value) {
        res10 = <boolean>await this.userService.setCatalogo(this.drink_S.value);
      }

      if (this.smok_S.value) {
        res11 = <boolean>await this.userService.setCatalogo(this.smok_S.value);
      }

      if (this.kid_S.value) {
        res12 = <boolean>await this.userService.setCatalogo(this.kid_S.value);
      }

      if (this.drug_S.value) {
        res13 = <boolean>await this.userService.setCatalogo(this.drug_S.value);
      }

      if (this.religion_S.value) {
        res14 = <boolean>await this.userService.setCatalogo(this.religion_S.value);
      }

      if (this.political_S.value) {
        res15 = <boolean>await this.userService.setCatalogo(this.political_S.value);
      }

      this.uiService.hideLoader();
      // if (!res0 || !res2 || !res3 || !res4 || !res5 || !res6 || !res7 || !res8 || !res9 || !res10 || !res11 || !res12 || !res13 || !res14) {
       
      //    //this.uiService.alertOK(this.translate.instant('EDIT-ACCOUNT.ErrorMsg'));
        
       
      //   return;
      // }
    }
     else {
      // this.router.navigate(['location'], this.userService.navegationExtras);
      const mapToCatalogItems = (array: any): CatalogItem[] => {
        if (!Array.isArray(array)) return [];
        return array
          .filter(item => typeof item === 'number') // ensure only numbers are mapped
          .map((item: number) => ({ item_id: item }));
      };

      const user: User = {
        height: this.selectedHeight,
        pronoun: this.pronoun_S.value,
        languajes: mapToCatalogItems(this.languaje_S.value),
        exercise: mapToCatalogItems(this.exercise_S.value),
        sings: this.sing_S.value,
        hobbies: mapToCatalogItems(this.hobby_S.value),
        education: this.education_S.value,
        pets: mapToCatalogItems(this.pet_S.value),
        valTraits: mapToCatalogItems(this.valTrait_S.value),
        drinking: this.drink_S.value,
        smoking: this.smok_S.value,
        drugs: this.drug_S.value,
        religion: this.religion_S.value,
        political: this.political_S.value,
      };
      
      // Save it somewhere accessible (like a service or localStorage)
      this.userService.setUserr(user);
      this.router.navigate(['i-am-alooking-for',{birth:this.birth,gender:this.gender,mail:this.mail}]);
    }
  }
}
