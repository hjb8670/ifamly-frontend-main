import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { constants } from 'src/environments/constants';
import { User, Rate } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';
import { ExperienceService } from '../../../services/experience.service';



@Component({
  selector: 'app-ratings-experience',
  templateUrl: './ratings-experience.page.html',
  styleUrls: ['./ratings-experience.page.scss'],
})
export class RatingsExperiencePage implements OnInit {

  public idHost = '';
  public nameHost = '';
  public lastNameHost = '';
  public imageHost = '';
  public rateHost = 0;
  public rates: Rate[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private translate: TranslateService,
    private userService: UserService,
    private experienceService: ExperienceService
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.idHost= this.router.getCurrentNavigation().extras.state.idHost;
        this.nameHost= this.router.getCurrentNavigation().extras.state.nameHost;
        this.lastNameHost= this.router.getCurrentNavigation().extras.state.lastNameHost;
        this.imageHost= this.router.getCurrentNavigation().extras.state.imageHost;
        console.log('ID HOST: ', this.idHost);
        console.log('NAME HOST: ', this.nameHost);
        console.log('LAST NAME HOST: ', this.lastNameHost);
        console.log('IMG HOST: ', this.imageHost);
      }
    });
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    let ratedUser: User = await this.userService.getUserBasic(this.idHost);
    this.rateHost = Math.round(ratedUser.rateExperiences);

    this.rates = <Rate[]> await this.experienceService.getRatesHost(this.idHost);
    console.log('RATES: ', this.rates);
  }

  backPage() {
    this.router.navigate(['detail-exp']);
    //this.location.back();
    //this.navCtrl.back();

  }

  createTempArray(number){
    var arr=[];
    for(let i=0;i<number;i++){
      arr[i]="";
    }
    return arr;
  }

  setPositionStart(ini, delta, pos) {
    let posF = ini+(delta*pos);
    
    return posF+'px';
  }

  converterDatetoString(dateT): string {
    const fec = new Date(dateT)
    const day =  ('00'+fec.getDate()).slice(-2);
    const year = fec.getFullYear();
    const hours = ('00'+fec.getHours()).slice(-2);
    const minutes = ('00'+fec.getMinutes()).slice(-2);
    let t_date;

    if( this.translate.instant('PROF-DETAIL.lanCal') == 'es-MX') {
      t_date = day+' '+constants.meses.mesES[fec.getMonth()]+', '+year;
    } else {
      t_date = constants.meses.mesEN[fec.getMonth()]+' '+day+', '+year;
    }

    return t_date;
  }

}
