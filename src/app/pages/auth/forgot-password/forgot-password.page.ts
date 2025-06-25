import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { constants } from 'src/environments/constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public passwordForm = this.formBuilder.group( {
    email: ['', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]]
  });

  public validation_messages = {
    'email': [
       { type: 'required', message: 'msgErrReqEmail' },
       { type: 'pattern', message: 'msgErrPattEmail' }
     ]
   };
   private lang = "";
  
  constructor(private translate: TranslateService,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private userService: UserService,
    private router: Router
  ) { }

  get email(){
    return this.passwordForm.get('email');
  }
  

  ngOnInit() {
    if (this.translate.currentLang == 'es') {
          this.lang = constants.languages.es;
        } else {
          this.lang = constants.languages.en;
        }
  }

  async next(){
    console.log(this.email);
    if(this.validaCampo(this.email, this.validation_messages.email)){
      return;
    }
    let res = await this.userService.resetPasssword(this.email.value, this.lang);

    if(res === 500){
      this.uiService.alertOK(this.translate.instant("REC_PASS.resetPasswordError"));
      return;
    } else if(res === 421){
      this.uiService.alertOK_CANCEL(this.translate.instant("REC_PASS.emailNotFound"));
      return;
    }
    await this.uiService.alertOK_CANCEL(this.translate.instant("REC_PASS.resetPassword"));
    this.router.navigate(['login']);
  }

  validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        this.uiService.alertOK(this.translate.instant('LOGIN.'+validation.message));
        return true;
      }
    }
    return false;
  }

}
