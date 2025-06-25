import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

import { constants } from 'src/environments/constants';
import { User, Rate } from '../../../interfaces/interfaces';
import { MatchService } from '../../../services/match.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {

  private matchId = '';
  private otherPerson = '';
  public imgCover = '../../../assets/icon/30-Default_no-image.jpeg';
  public usrMatch: User;
  public rates: Rate[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private matchService: MatchService,
    private userService: UserService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.matchId = this.router.getCurrentNavigation().extras.state.matchId;
        this.otherPerson = this.router.getCurrentNavigation().extras.state.otherPerson;
        this.imgCover = this.router.getCurrentNavigation().extras.state.image;
        console.log('MATCH-ID: ', this.matchId);
      }
    });
  }

  async ngOnInit() {}

  async ionViewDidEnter() {
    this.usrMatch = <User> await this.userService.getUser(this.otherPerson); //<User> await this.matchService.getMatchUser(Number(this.matchId));
    console.log('USR-MATCH: ', this.usrMatch);
    this.rates = <Rate[]> await this.matchService.getRates(Number(this.otherPerson));
    console.log('RATES: ', this.rates);
  }

  backMatch() {
    let navegationExtras: NavigationExtras = {
      state: {
        matchId: this.matchId,
        otherPerson: this.otherPerson,
        image: this.imgCover        
      }
    }
    
    this.router.navigate(['detail-match'], navegationExtras);
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
