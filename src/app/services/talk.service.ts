import { Injectable } from '@angular/core';
import Talk from 'talkjs';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = environment.urlSrv;

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  private currentUser: Talk.User;
  private session: Talk.Session;

  constructor(private userService: UserService,
    private http: HttpClient
  ) { }

  async getUser(userId: any) {
    await Talk.ready;
    return new Talk.User(userId);
  }

  async createCurrentSession(idUsuario: string, nombre: string) {
    await Talk.ready;
    this.currentUser = await this.getUser(idUsuario);
    //Traer el appId desde BD 
    this.session = new Talk.Session({
         appId: 't79Ku1zV',
         me: this.currentUser
    });
    return this.session;
  }

  private async getOrCreateConversation(idConversation: string) {
    //const otherUser = await this.createUser(otherApplicationUser);
    if(idConversation === undefined || idConversation === ''){
      return null;
    }
    const conversation = this.session.getOrCreateConversation(idConversation);
    // conversation.setParticipant(this.currentUser);
    // conversation.setParticipant(otherUser);
    return conversation;
  }

  async createInbox(idConversation: string) {
    const conversation = await this.getOrCreateConversation(idConversation);
    let options: Talk.InboxOptions = {
      theme: 'ifamily',    
    };
    const inbox = this.session.createInbox(options);
    //inbox.setFeedFilter({}); Filtro de las conversaciones que se mostraran en el inbox
    inbox.select(conversation);    
    return inbox;
 }

 async updateConversation(matchId: string) {
  const tVal = await this.userService.validaToken();
  if( !tVal ) {
    return;
  }

  const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', this.userService.token);

  return new Promise(resolve => {
    this.http.get(`${URL}/chat/update/${matchId}`, { headers }).subscribe({ 
      next: resp => {
        if(resp['sCode'] == 200){
          resolve(resp['sData']);
        }

        resolve({});
      },
      error:err => {
        console.log('ERR MATCHES', err);
        resolve({});
      }
    });
  });
}

}
