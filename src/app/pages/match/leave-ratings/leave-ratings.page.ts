import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { UiService } from '../../../services/ui.service';
import { MatchService } from '../../../services/match.service';

@Component({
  selector: 'app-leave-ratings',
  templateUrl: './leave-ratings.page.html',
  styleUrls: ['./leave-ratings.page.scss'],
})
export class LeaveRatingsPage implements OnInit {

  public presentarErroresCampos = false;
  private matchId = '';
  private otherPerson = '';
  public name = '';
  public lastName = '';
  public imgCover = '../../../assets/icon/30-Default_no-image.jpeg';
  private rate = 0;

  leaveRForm = this.formBuilder.group( {
    comment: ['', [Validators.required]]
  });

  public validation_messages = {
    'comment': [ { type: 'required', message: 'msgErrReqMsg' } ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private uiService: UiService,
    private matchService: MatchService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.matchId = this.router.getCurrentNavigation().extras.state.matchId;
        this.otherPerson = this.router.getCurrentNavigation().extras.state.otherPerson;
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.lastName = this.router.getCurrentNavigation().extras.state.lastName;
        this.imgCover = this.router.getCurrentNavigation().extras.state.image;
        console.log('MATCH-ID: ', this.matchId);
        console.log('NAME: ', this.name + this.lastName);
        console.log('IMG COVER: ', this.imgCover);
      }
    });
  }

  ngOnInit() {
  }

  get comment() {
    return this.leaveRForm.get('comment');
  }

  validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        console.log(this.translate.instant('LEAVE-RATING.'+validation.message));
        this.uiService.alertOK(this.translate.instant('LEAVE-RATING.'+validation.message));
        return true;
      }
    }

    return false;
  }

  ratingChanged(valRating: any) {
    this.rate = valRating
  }

  async onSubmit() {
    console.log('COMMENT: ', this.comment.value);
    console.log('RATE', this.rate);

    if(this.rate == 0) {
      this.uiService.alertOK(this.translate.instant('LEAVE-RATING.msgErrReqRate'));
      return;
    }
    
    if(this.validaCampo(this.comment, this.validation_messages.comment)){
      return;
    }
    this.uiService.showLoader();
    const res = await this.matchService.setFeedback(Number(this.otherPerson), this.rate, this.comment.value)
    this.uiService.hideLoader();

    if(!res) {
      this.uiService.alertOK(this.translate.instant('LEAVE-RATING.errResFeedback'));
      return;
    }else {
      let navegationExtras: NavigationExtras = {
        state: {
          otherPerson: this.otherPerson,
          matchId: this.matchId,
          image: this.imgCover
        }
      }
      
      this.router.navigate(['ratings'], navegationExtras);
    }
  }

}
