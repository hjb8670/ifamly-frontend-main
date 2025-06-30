import { Component, OnInit } from '@angular/core';
import { User, Catalog } from '../../../interfaces/interfaces';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { constants } from 'src/environments/constants';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
import { UiService } from '../../../services/ui.service';
import { Storage } from '@capacitor/storage';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-i-am-alooking-for',
  templateUrl: './i-am-alooking-for.page.html',
  styleUrls: ['./i-am-alooking-for.page.scss'],
})
export class IAmALookingForPage implements OnInit {
  private lanCatalogo = 'EN';
  private usr: User = {};
  private password = '';
  public iams: Catalog[];
  public iamlookings: Catalog[];

  customIamOptions = {
    header: this.translate.instant('I-AM.Title1'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('I-AM.SubHdIam'),
    translucent: true,
  };

  customIamLookingOptions = {
    header: this.translate.instant('I-AM.Title2'),
    cssClass: 'SelectControl',
    subHeader: this.translate.instant('I-AM.SubHdIamLooking'),
    translucent: true,
  };

  iamForm = this.formBuilder.group( {
    iam_a: ['', Validators.required],
    iam_looking: ['', Validators.required]
  });
  email: any;
  birth: any;
  gender: any;
  mail: any;
  selectedIamllookingName: string;
  tokensaved: any;
  arr: any[] = [];
  useremail: string;
  pass: string;
  gendername: string;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private userService: UserService,
    private uiService: UiService,
    private matchService: MatchService,
    private route: ActivatedRoute,
  ) {
   
    this.birth = this.route.snapshot.paramMap.get('birth');
    this.gender = this.route.snapshot.paramMap.get('gender');
    this.mail = this.route.snapshot.paramMap.get('mail');
   console.log(this.birth);
  }

  get iam_a() {
    return this.iamForm.get('iam_a');
  }

  get iam_looking() {
    return this.iamForm.get('iam_looking');
  }

  ngOnInit() {
    this.iamForm.get('iam_looking')?.disable();
  }

  async ionViewDidEnter() { 
   
    if(this.translate.currentLang == 'es'){
      this.lanCatalogo = constants.languages.es;
    } else {
      this.lanCatalogo = constants.languages.en;
    }
    if(this.gender == '214'){
      this.gendername='Man';
    }else if(this.gender == '215'){
      this.gendername='Woman';
    }
    else if(this.gender == '216'){
      this.gendername='Nonbinary';
    }
    else if(this.gender == '241'){
      this.gendername='Prefer not to say';
    }
   

    this.iams = <Catalog[]> await this.userService.getCatalogo2(constants.catalogs.IamA.toString(), this.lanCatalogo,this.birth,this.gendername,this.mail);
    
    // this.iamlookings = <Catalog[]> await this.userService.getCatalogo(constants.catalogs.IamLooking.toString(), this.lanCatalogo);
  }

  selectedIamName: string = '';


  async next(op: string) {
    if (this.iamForm.invalid) {
   this.uiService.alertOK(this.translate.instant('I-AM.allfieldreq'));
  return;
}
    console.log('IAM-A', this.iam_a.value);
    console.log('IAM-LOOKING', this.iam_looking.value);

    if(!this.iam_a.value){
      this.uiService.alertOK(this.translate.instant('I-AM.msgErrIAM'));
      return;
    }

    if(!this.iam_looking.value){
      this.uiService.alertOK(this.translate.instant('I-AM.msgErrIAMLookingFor'));
      return;
    }

    if( op == 'next' ) {
     
     // Check if this is an OAuth user (stored provider info)
     const oauthProvider = this.userService.getOAuthProvider();
     const isOAuthUser = oauthProvider === 'google' || oauthProvider === 'apple';
     
     // Get the complete user data
     let completeUserData: User;
     
     if (isOAuthUser) {
       // Merge OAuth data with collected profile data
       const oauthData = this.userService.getOAuthUserData();
       const collectedData = this.userService.getUserr();
       
       // Validate that we have the required OAuth data
       if (!oauthData.email || !oauthData.password || !oauthData.firstName || !oauthData.lastName) {
         console.error('Incomplete OAuth data:', oauthData);
         this.uiService.alertOK(this.translate.instant('I-AM.oauthDataError') || 'OAuth registration data is incomplete. Please try again.');
         this.router.navigate(['/registry']);
         return;
       }
       
       completeUserData = {
         ...oauthData, // Base OAuth data (email, password, firstName, lastName, image)
         ...collectedData, // Collected profile data (location, preferences, etc.)
         profileIam: this.selectedIamName,
         profileLookingFor: this.selectedIamllookingName
       };
       
       console.log('Complete OAuth user data:', completeUserData);
     } else {
       // Regular email registration
       completeUserData = {
         ...this.userService.getUserr(),
         profileIam: this.selectedIamName,
         profileLookingFor: this.selectedIamllookingName
       };
     }
     
     this.useremail = completeUserData.email;
     this.pass = completeUserData.password;
     
     let res;
     if (isOAuthUser) {
       console.log('Using OAuth registration for user:', completeUserData.email, 'Provider:', oauthProvider);
       res = await this.userService.registerOAuth(completeUserData);
     } else {
       res = await this.userService.register(completeUserData);
     } 
     console.log(res); 
      if(res['sCode'] == '1') {
        this.tokensaved = res['sData']['token'];
        await Storage.set({
             key: 'token',
             value: this.tokensaved
           });
           // Retrieve the saved image (await is crucial here!)
        const { value } = await Storage.get({ key: 'dp' });

        // Optional: check if value exists
        if (value) {
          // Compress base64 image before pushing
          const compressed = await UtilitiesService.compressBase64Image(value, 800, 800, 0.7);

          this.arr.push({
            multimediaName: "Profile.png",
            multimediaBase64: compressed,
            avatar: true  // or false depending on your use-case
          });
        }

              // Wait until all files are processed
              if (this.arr.length > 0) {
                let resp = await this.matchService.uploadIMG2(this.arr);
           
            if(resp){
             console.log(resp);
             const valido = await this.userService.login( this.useremail, this.pass );
      
             if(valido['ok']){
               //this.navCtrl.navigateRoot( '/main/tabs/discover', { animated: true } );
               const provider = isOAuthUser ? oauthProvider : 'email';
               this.userService.setUserRS(this.useremail, this.pass, provider);
               
               // Clear OAuth data after successful registration
               if (isOAuthUser) {
                 this.userService.clearOAuthUserData();
               }
               
              //  this.router.navigate(['/main/tabs/discover']);
              this.router.navigate(['/notification-prompt']);
              // this.uiService.alertOK(this.translate.instant('LOCATION.SuccessMsg2'));
       
             }
             
             
            }else{
              this.uiService.alertOK(this.translate.instant('ACCOUNT.imageError'));
              // this.router.navigate(['/main/tabs/discover']);
              this.router.navigate(['/notification-prompt']);
            }
            }
        
       
       
    } else{
     // this.uiService.alertOK(this.translate.instant('ABOUT-ME.ErrorMsg2'));
      this.router.navigate(['/registry']);
    }
    
    }
   
  }

  async seleccionarIam(){
    const selectedId:any = this.iamForm.get('iam_a')?.value;
    const selectedObj = this.iams.find(obj => obj.id === selectedId);
    this.selectedIamName = selectedObj?.name || '';
    console.log('Selected Name:', this.selectedIamName);
    this.iamlookings = <Catalog[]> [];
    this.iam_looking.setValue('')
    this.iam_looking.enable();
    console.log(this.iam_a.value);
    this.iamlookings = <Catalog[]> await this.userService.getCatalogoImLookingFor(constants.catalogs.IamLooking.toString(), this.lanCatalogo, this.iam_a.value, this.email);
  }

  
  async seleccionarIamlooking(){
    const selectedId:any = this.iamForm.get('iam_looking')?.value;
    const selectedObj = this.iamlookings.find(obj => obj.id === selectedId);
    this.selectedIamllookingName = selectedObj?.name || '';
    console.log('Selected Name:', this.selectedIamllookingName);
  }
}
