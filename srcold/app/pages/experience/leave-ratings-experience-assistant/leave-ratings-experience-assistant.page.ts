import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ExperienceService } from 'src/app/services/experience.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-leave-ratings-experience-assistant',
  templateUrl: './leave-ratings-experience-assistant.page.html',
  styleUrls: ['./leave-ratings-experience-assistant.page.scss'],
})
export class LeaveRatingsExperienceAssistantPage implements OnInit {

  public presentarErroresCampos = false;
  public idAssistant = '';
  public nameAssistant = '';
  public imgCover = '../../../assets/icon/30-Default_no-image.jpeg';
  private rate = 0;
  private idExperience = '';
  
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
        this.idAssistant = this.router.getCurrentNavigation().extras.state.idAssistant;
        this.nameAssistant = this.router.getCurrentNavigation().extras.state.nameAssistant;
        this.imgCover = this.router.getCurrentNavigation().extras.state.imageAssistant;
        this.idExperience = this.router.getCurrentNavigation().extras.state.idExperience;
        console.log('ID ASSISTANT: ', this.idAssistant);
        console.log('NAME: ', this.nameAssistant);
        console.log('IMG COVER: ', this.imgCover);
        console.log('ID EXPERIENCE: ', this.idExperience);
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
    const res = await this.experienceService.setFeedbackExperienceAssistant(this.idAssistant, this.idExperience, this.rate, this.comment.value)
    this.uiService.hideLoader();

    if(!res) {
      this.uiService.alertOK(this.translate.instant('LEAVE-RATING.errResFeedback'));
      return;
    }else {
      let navegationExtras: NavigationExtras = {
        state: {
          idAssistant: this.idAssistant,
          nameAssistant: this.nameAssistant,
          imageAssistant: this.imgCover
        }
      }
      
      this.router.navigate(['ratings-experience-assistant'], navegationExtras);
    }
  }

}
