import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { ReportPopoverPage } from '../report-popover/report-popover.page';
import { UiService } from 'src/app/services/ui.service';
import { constants } from 'src/environments/constants';
import { MatchService } from 'src/app/services/match.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail-match-menu-popover',
  templateUrl: './detail-match-menu-popover.page.html',
  styleUrls: ['./detail-match-menu-popover.page.scss'],
})
export class DetailMatchMenuPopoverPage implements OnInit {
  @Input() typeBlock: number = 0; // 0: Match, 1: Person (para eventos), 2: Personas Discover
  @Input() matchId: number = null;
  @Input() personId: number = null;
  @Input() experienceId: number = null;

  constructor(
    private popoverCtrl: PopoverController,
    private router: Router,
    private translate: TranslateService,
    private uiService: UiService,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    console.log('type Block', this.typeBlock)
    console.log('MATCH ID: ', this.matchId);
    console.log('PERSON ID: ', this.personId);
    console.log('Experience ID',this.experienceId)
  }

  async selectOp(op: number, ev: any){
    console.log('report')
    if(op == 0) { 
      await this.popoverCtrl.dismiss();
      let report = await this.popoverCtrl.create({
        component: ReportPopoverPage,
        cssClass: "report-popever",
        showBackdrop: true,
        //mode: 'ios',
        event: ev,
        componentProps: { typeBlock: this.typeBlock, matchId: this.matchId, personId: this.personId }
      });
      report.present();
      
    } else {
      let res = await this.uiService.alertOK_CANCEL(this.translate.instant('MATCH-DETAIL.confirmBlock1'));
      if(!res){
        return;
      }

      if(this.typeBlock == 0){
        this.blockPerson(this.matchId.toString(), '/main/tabs/match');
      } else if(this.typeBlock == 1){
        console.log("I am in block experience");
        this.blockPerson(this.personId.toString(), '/main/tabs/experience');
      } else if(this.typeBlock == 2){
        this.blockPerson(this.personId.toString(), '/main/tabs/discover');
      }
      
    }
  }

  async blockPerson(personId: string, routeStr: string){
    this.uiService.showLoader();
    let res;
    if(this.typeBlock == 0){
      res = await this.matchService.blockMatch(this.matchId, '');
    } else {
      res = await this.matchService.doMatchProfiles(personId, constants.statusUsrMatch.block.toString(), 'false', 'false', null);
    }
    this.uiService.hideLoader();

    if(res){
      await this.popoverCtrl.dismiss(); 
      await this.uiService.alertOK_CANCEL(this.translate.instant('MATCH-DETAIL.block1'));
      const randomParam = Math.random().toString(36).substring(2);
      this.router.navigate([routeStr], { queryParams: { random: randomParam } });
    }else{
      this.uiService.alertOK(this.translate.instant('MATCH-DETAIL.block1'));
    }
  }

}
