import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { MatchService } from 'src/app/services/match.service';
import { UiService } from 'src/app/services/ui.service';
import { constants } from 'src/environments/constants';

@Component({
  selector: 'app-report-popover',
  templateUrl: './report-popover.page.html',
  styleUrls: ['./report-popover.page.scss'],
})
export class ReportPopoverPage implements OnInit {
  @Input() typeBlock: number;
  @Input() matchId: number;
  @Input() personId: number;
  public description: string;

  constructor(
    private translate: TranslateService,
    private uiService: UiService,
    private matchService: MatchService,
    private router: Router,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async sendReport(){
    console.log(this.description);
    if(this.description === undefined || this.description === ""){
      this.uiService.alertOK(this.translate.instant('MATCH-DETAIL.requiredPOReport'));
      return;
    }

    let res = await this.uiService.alertOK_CANCEL(this.translate.instant('MATCH-DETAIL.confirmBlock'));
    if(!res){
      return;
    }
    /* if(!this.matchId){
      console.log("No tiene matchID");
      return
    } */
    
    if(this.typeBlock == 0){
      await this.blockMatch();
    } else if(this.typeBlock == 1){
      await this.blockExperiencie();
    } else if(this.typeBlock == 2){
      await this.blockDiscover();
    }
  }

  async blockMatch(){
    this.uiService.showLoader();
    let resp = await this.matchService.blockMatch(this.matchId, this.description);
    this.uiService.hideLoader();
    if(resp){
      this.popoverCtrl.dismiss();
      await this.uiService.alertOK_CANCEL(this.translate.instant('MATCH-DETAIL.block'));
      this.router.navigate(['/main/tabs/match']);
    }else{
       this.popoverCtrl.dismiss();
      this.uiService.alertOK(this.translate.instant('MATCH-DETAIL.block'));
    }
  }

  async blockExperiencie() {
    this.uiService.showLoader();
    let res = await this.matchService.doMatchProfiles(this.personId.toString(), constants.statusUsrMatch.block.toString(), 'false', 'false', null);
    this.uiService.hideLoader();
    if(res){
      this.popoverCtrl.dismiss();
      await this.uiService.alertOK_CANCEL(this.translate.instant('MATCH-DETAIL.block'));
      this.router.navigate(['/main/tabs/experience']);
    }else{
       this.popoverCtrl.dismiss();
      this.uiService.alertOK(this.translate.instant('MATCH-DETAIL.block'));
    }
  }

  async blockDiscover() {
    this.uiService.showLoader();
    let res = await this.matchService.doMatchProfiles(this.personId.toString(), constants.statusUsrMatch.block.toString(), 'false', 'false', null);
    this.uiService.hideLoader();
    if(res){
      this.popoverCtrl.dismiss();
      await this.uiService.alertOK_CANCEL(this.translate.instant('MATCH-DETAIL.block'));
      const randomParam = Math.random().toString(36).substring(2); // Genera un parámetro aleatorio
      this.router.navigate(['/main/tabs/discover'], { queryParams: { random: randomParam } });
    }else{
       this.popoverCtrl.dismiss();
      this.uiService.alertOK(this.translate.instant('MATCH-DETAIL.block'));
    }
  }
}
