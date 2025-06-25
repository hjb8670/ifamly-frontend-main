import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { UiService } from 'src/app/services/ui.service';
import { ExperienceService } from '../../../services/experience.service';

@Component({
  selector: 'app-leave-ratings-experience',
  templateUrl: './leave-ratings-experience.page.html',
  styleUrls: ['./leave-ratings-experience.page.scss'],
})
export class LeaveRatingsExperiencePage implements OnInit {

  public presentarErroresCampos = false;
  public idExperience = '';
  public nameExp = '';
  public fechaExp = '';
  public imgCover = '../../../assets/icon/30-Default_no-image.jpeg';
  private rate = 0;
  private idHost = '';
  private nameHost = '';
  private lastNameHost = '';
  private imageHost = '';

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
    private experienceService: ExperienceService
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.idExperience = this.router.getCurrentNavigation().extras.state.idExperience;
        this.nameExp = this.router.getCurrentNavigation().extras.state.nameExp;
        this.fechaExp = this.router.getCurrentNavigation().extras.state.fechaExp;
        this.imgCover = this.router.getCurrentNavigation().extras.state.image;
        this.idHost= this.router.getCurrentNavigation().extras.state.idHost;
        this.nameHost= this.router.getCurrentNavigation().extras.state.nameHost;
        this.lastNameHost= this.router.getCurrentNavigation().extras.state.lastNameHost;
        this.imageHost= this.router.getCurrentNavigation().extras.state.imageHost;
        console.log('NAME: ', this.nameExp);
        console.log('DATE: ', this.fechaExp);
        console.log('IMG COVER: ', this.imgCover);
        console.log('ID HOST: ', this.idHost);
        console.log('NAME HOST: ', this.nameHost);
        console.log('LAST NAME HOST: ', this.lastNameHost);
        console.log('IMG HOST: ', this.imageHost);
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
      const res = await this.experienceService.setFeedbackExperience(this.idExperience, this.rate, this.comment.value)
      this.uiService.hideLoader();
  
      if(!res) {
        this.uiService.alertOK(this.translate.instant('LEAVE-RATING.errResFeedback'));
        return;
      }else {
        let navegationExtras: NavigationExtras = {
          state: {
            /* idExperience: this.idExperience,
            nameExp: this.nameExp,
            fechaExp: this.fechaExp,
            image: this.imgCover */

            idHost: this.idHost,
            nameHost: this.nameHost,
            lastNameHost: this.lastNameHost,
            imageHost: this.imageHost 
          }
        }
        
        this.router.navigate(['ratings-experience'], navegationExtras);
      }
    }

}
