import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from '../../../services/user.service';
import { ChangePassword, User } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  //public usrApp: User;

  public passwordForm = this.formBuilder.group( {
    oldPassword: ['', [Validators.required]],
    password: ['', [
      Validators.required,
      this.regexValidator(new RegExp('(?=.*[a-z]).*$'), {'1lowercase': true}),
      this.regexValidator(new RegExp('(?=.*[A-Z]).*$'), {'1uppercase': true}),
      this.regexValidator(new RegExp('(?=.*[0-9]).*$'), {'1number': true}),
      this.regexValidator(new RegExp('(?=.*[#?!@$%^&*-+]).*$'), {'1especial': true}),
      this.regexValidator(new RegExp('.{8,}$'), {'longmin': true})
    ]],
    confirm: ['', [
      Validators.required,
      this.regexValidator(new RegExp('(?=.*[a-z]).*$'), {'1lowercase': true}),
      this.regexValidator(new RegExp('(?=.*[A-Z]).*$'), {'1uppercase': true}),
      this.regexValidator(new RegExp('(?=.*[0-9]).*$'), {'1number': true}),
      this.regexValidator(new RegExp('(?=.*[#?!@$%^&*-+]).*$'), {'1especial': true}),
      this.regexValidator(new RegExp('.{8,}$'), {'longmin': true})
    ]],
    view: false,
    viewOld: false,
    viewC: false
  });

  public validation_messages = {
    'oldPassword': [
      { type: 'required', message: 'msgErrReqOldPassword' }
    ],
    'password': [
       { type: 'required', message: 'msgErrReqPassword' },
       { type: '1lowercase', message: 'msgErrMin'},
       { type: '1uppercase', message: 'msgErrMay'},
       { type: '1number', message: 'msgErrNum'},
       { type: '1especial', message: 'msgErrCarc'},
       { type: 'longmin', message: 'msgErrLongMin'}
     ],
     'confirm': [
      { type: 'required', message: 'msgErrReqConfirm' },
      { type: '1lowercase', message: 'msgErrMin'},
      { type: '1uppercase', message: 'msgErrMay'},
      { type: '1number', message: 'msgErrNum'},
      { type: '1especial', message: 'msgErrCarc'},
      { type: 'longmin', message: 'msgErrLongMin'}
    ]
   };
  
  constructor(private translate: TranslateService,
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private userService: UserService,
    private router: Router
  ) { 
    this.oldPassword.setValue("");
    this.password.setValue("");
    this.confirm.setValue("");
  }

  get password(){
    return this.passwordForm.get('password');
  }

  get oldPassword(){
    return this.passwordForm.get('oldPassword');
  }

  get confirm(){
    return this.passwordForm.get('confirm');
  }

  get view(){
    return this.passwordForm.get('view');
  }
  
  get viewOld(){
    return this.passwordForm.get('viewOld');
  }

  get viewC(){
    return this.passwordForm.get('viewC');
  }

  async ngOnInit() {
    this.uiService.showLoader();
    const tVal = await this.userService.validaToken();
    if( !tVal ) {
      this.uiService.hideLoader();
      return;
    }
    //this.usrApp = await this.userService.getUser('');
    this.uiService.hideLoader();
  }

  async next(){
    //if(this.validaCampo(this.password, this.validation_messages.password) || this.validaCampo(this.confirm, this.validation_messages.confirm)){
      console.log(this.passwordForm)
    if(this.passwordForm.status === 'INVALID'){
      this.oldPassword.markAsTouched();
      this.password.markAsTouched();
      this.confirm.markAsTouched();
      return;
    } else if(this.password.value !== this.confirm.value){
      this.uiService.alertOK(this.translate.instant('CHANGE_PASS.msgErrEqualPassword'));
      return;
    } else if(this.password.value === this.oldPassword.value){
      this.uiService.alertOK(this.translate.instant('CHANGE_PASS.msgErrEqualOldPassword'));
      return;
    } 

    let usr: ChangePassword = {password: this.password.value, oldPassword: this.oldPassword.value};
    this.uiService.showLoader();
    let res = await this.userService.changePassword(usr);
    console.log(res);
    let mensaje = res === 1 ? this.translate.instant('CHANGE_PASS.ChangePassword') 
      : res === 427 ? this.translate.instant('CHANGE_PASS.msgErrOldPassword')
      : this.translate.instant('CHANGE_PASS.ChangePasswordError');
    this.uiService.hideLoader();
    await this.uiService.alertOK_CANCEL(mensaje);

    if(res === 1){
      this.router.navigate(['settings-account']);
    }
  }

  /*validaCampo(campo:any, message: any): boolean {
    for (let validation of message) {
      if(campo.hasError(validation.type)) {
        this.uiService.alertOK(this.translate.instant('CHANGE_PASS.'+validation.message));
        return true;
      }
    }
    return false;
  }*/

  regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if (!control.value) {
        return null;
      }
      
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  verContra(control: string){
    this.passwordForm.get(control).setValue(!this.passwordForm.get(control).value);
  }
}
