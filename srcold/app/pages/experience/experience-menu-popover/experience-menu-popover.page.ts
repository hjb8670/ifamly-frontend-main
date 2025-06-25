import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PopoverController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-experience-menu-popover',
  templateUrl: './experience-menu-popover.page.html',
  styleUrls: ['./experience-menu-popover.page.scss'],
})
export class ExperienceMenuPopoverPage implements OnInit {
  @Input() isMyExp: boolean;

  op1Selected = false;
  op2Selected = false;

  constructor(  
    private translate: TranslateService,
    private popoverCtrl: PopoverController,
    private router: Router
    //private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.op1Selected = false;
    this.op2Selected = false;
  }

  selectOp(op: number){
    this.popoverCtrl.dismiss();
    if(op == 0) {
      this.op1Selected = true;
      this.op2Selected = false;
      this.isMyExp = !this.isMyExp;

      let navegationExtras: NavigationExtras = {
        state: {
          isMyExp: this.isMyExp
        }
      }
      
      if(!this.isMyExp) {
        this.router.navigate(['/main/tabs/experience'], navegationExtras);
      }else {
        this.router.navigate(['/main/tabs/my-experience'], navegationExtras);
      }

      /* this.router.navigateByUrl('/main/tabs/experience', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/main/tabs/experience'], navegationExtras);
      }); */

      //this.navCtrl.navigateRoot( '/main/tabs/experience', { animated: true } );
    } else {
      this.op1Selected = false;
      this.op2Selected = true;

      this.router.navigate(['new-edit-exp']);
      //this.navCtrl.navigateRoot( '/main/tabs/discover', { animated: true } );
    }

  }

}
