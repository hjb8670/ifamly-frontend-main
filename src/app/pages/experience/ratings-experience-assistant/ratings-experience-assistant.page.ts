import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { constants } from 'src/environments/constants';
import { User, Rate } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-ratings-experience-assistant',
  templateUrl: './ratings-experience-assistant.page.html',
  styleUrls: ['./ratings-experience-assistant.page.scss'],
})
export class RatingsExperienceAssistantPage implements OnInit {
  public idAssistant = '';
  public nameAssistant = '';
  public rateAssistant = 0;
  public imageAssistant = '';
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
        this.idAssistant= this.router.getCurrentNavigation().extras.state.idAssistant;
        this.nameAssistant= this.router.getCurrentNavigation().extras.state.nameAssistant;
        this.imageAssistant= this.router.getCurrentNavigation().extras.state.imageAssistant;
        console.log('ID ASSISTANT: ', this.idAssistant);
        console.log('NAME ASSISTANT: ', this.nameAssistant);
        console.log('IMG ASSISTANT: ', this.imageAssistant);
      }
    });
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    let ratedUser: User = await this.userService.getUserBasic(this.idAssistant);
    this.rateAssistant = Math.round(ratedUser.rateUserExperiences);

    this.rates = <Rate[]> await this.experienceService.getRatesAssistan(this.idAssistant);
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
