import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  parameters: string;
  lenguaje: string;
  contenido: string;
  title : '';
  paramReturn: '';

  constructor(public translate: TranslateService,
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private uiserve: UiService
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.paramReturn = this.router.getCurrentNavigation().extras.state['paramReturn'];
        switch(this.router.getCurrentNavigation().extras.state['parameters']){
          case 'terms':
            this.parameters = "TCAQ";
            this.title = this.translate.instant('PARAMS.TitleTerms');
            break;
          case 'terms-complete':
              this.parameters = "TCAQ_COMPLETE";
              this.title = this.translate.instant('PARAMS.TitleTerms');
              break;
          case 'privacy':
            this.parameters = "POLPRIV";
            this.title = this.translate.instant('PARAMS.TitlePrivacy');
            break;
          case 'AgePolicy':
            this.parameters = 'AVP';
            this.title = this.translate.instant('PARAMS.TitleAge');
            break;
          case 'UserLic':
            this.parameters = 'EULA';
            this.title = this.translate.instant('PARAMS.TitleUserLic');
            break;
          case 'Community':
            this.parameters = 'CPOL';
            this.title = this.translate.instant('PARAMS.TitleCommunity');
            break;
          case 'DMCAPOL':
            this.parameters = 'DMCAPOL';
            this.title = this.translate.instant('PARAMS.TitleDMCAPOL');
            break;
            case 'RADW':
              this.parameters = 'RADW';
              this.title = this.translate.instant('PARAMS.TitleRADW');
              break;
        }
      }
    });
  }

  async ngOnInit() {
    this.uiserve.showLoader();
    //await this.userService.getUser('');//Este es para que el token no venga vacio
    if(this.translate.currentLang == 'es'){
      this.lenguaje = "";
    } else {
      this.lenguaje = "_ENG";
    }
    if(!this.parameters){
      this.uiserve.hideLoader();
      console.log("No estan los parametros");
      return;
    }
    this.contenido = await this.userService.getParametros(this.parameters.concat(this.lenguaje));
    console.log(this.contenido);
    this.uiserve.hideLoader();
  }
  public regresar(){
    this.router.navigate([this.paramReturn]);
  }
} 
