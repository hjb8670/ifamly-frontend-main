import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TalkService } from '../../services/talk.service';
import Talk from 'talkjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UiService } from '../../services/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { MatchService } from '../../services/match.service';
@Component({
  selector: 'app-tabMessage',
  templateUrl: './tabMessage.page.html',
  styleUrls: ['./tabMessage.page.scss'],
})
export class TabMessagePage implements OnInit {
  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;


  private inbox: Talk.Inbox;
  private session: Talk.Session;
  private idConversation: string;
  public mostrarNoExiste = false;
  public mostrarChat = false;


  constructor(private talkService: TalkService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private uiService: UiService,
    private translate: TranslateService, 
    private matchService: MatchService
    ) {
      this.activatedRoute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.idConversation = this.router.getCurrentNavigation().extras.state.idConversation;
          console.log('idConversation: ', this.idConversation);
        }
        this.createInbox();
      });
  }

  
  ngOnInit() {
    
  }

async createInbox() {
  this.mostrarNoExiste = false;
  this.mostrarChat = false;
  this.uiService.showLoader();

  try {
    const user = await this.userService.getUserBasic('');

    // Fallback if no conversation ID
    if (!this.idConversation) {
      const resp = <string[]>await this.matchService.getConversationXUsr(user.personId);
      if (!resp || resp.length === 0) {
        this.mostrarNoExiste = true;
        return;
      }
      this.idConversation = resp[0]; // fallback to first conversation
    }

    // Create TalkJS session and inbox with custom theme
    this.session = await this.talkService.createCurrentSession(
      user.personId,
      `${user.firstName} ${user.lastName}`
    );

    this.inbox = await this.session.createInbox({
     // selected: this.session.getOrCreateConversation(this.idConversation),
      theme: 'ifamily' // <- make sure you have this theme in dashboard
    });

    await this.inbox.mount(this.talkjsContainer.nativeElement);
    this.mostrarChat = true;

  } catch (error) {
    console.error('Failed to create TalkJS inbox:', error);
    this.mostrarNoExiste = true;
  } finally {
    this.uiService.hideLoader();
  }
}

}
