import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Talk from 'talkjs';
import { TalkService } from '../../services/talk.service';
import { User } from 'src/app/interfaces/interfaces';
import { MatchService } from 'src/app/services/match.service';
import { TabService } from 'src/app/services/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  activeExperience = false;
  activeDiscover = false;
  activeMatch = false;
  activeMessage = false;
  activeAccount = false;

  //Talkjs
  unreadMessages = 0; // Contador de mensajes no leídos
  private session: any;
  user: User;

  constructor(private userService: UserService, 
    private talkService: TalkService,
    public matchService:MatchService,
    private cdr: ChangeDetectorRef, // Inyectamos ChangeDetectorRef
    private tabService: TabService
  ) {
    this.activeDiscover = true;

    // Subscribe to tab changes
    this.tabService.currentTab$.subscribe(tab => {
      this.changeIcon(tab);
    });
  }

  async ngOnInit(){
    this.user = await this.userService.getUserBasic('');
    this.session = await this.talkService.createCurrentSession(this.user.personId, this.user.firstName.concat(" ", this.user.lastName));
    this.escucharTalkJS();
  }

  async changeIcon(page) {
    if (page == 'discover') {
      this.activeExperience = false;
      this.activeDiscover = true;
      this.activeMatch = false;
      this.activeMessage = false;
      this.activeAccount = false;
    } else if (page == 'match') {
      this.activeExperience = false;
      this.activeDiscover = false;
      this.activeMatch = true;
      this.activeMessage = false;
      this.activeAccount = false;
    } else if (page == 'experience') {
      this.activeExperience = true;
      this.activeDiscover = false
      this.activeMatch = false;
      this.activeMessage = false;
      this.activeAccount = false;
    } else if (page == 'message') {
      this.activeExperience = false;
      this.activeDiscover = false;
      this.activeMatch = false;
      this.activeMessage = true;
      this.activeAccount = false;
    } else {
      this.activeExperience = false;
      this.activeDiscover = false;
      this.activeMatch = false;
      this.activeMessage = false;
      this.activeAccount = true;
    }
    
    // Update the tab service
    this.tabService.setActiveTab(page);
  }

  async escucharTalkJS(){
    this.session.unreads.onChange((conversations: any) => {
      this.unreadMessages = 0;
      conversations.forEach(conver => {
        if(this.unreadMessages >= 9){return;}
        this.unreadMessages += conver.unreadMessageCount;
      });
      this.cdr.detectChanges();
    })
  }
}
