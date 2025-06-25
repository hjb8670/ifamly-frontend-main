import { Component, OnInit } from '@angular/core';
import { MatchPerson, User, ImagesUser } from '../../interfaces/interfaces';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { constants } from 'src/environments/constants';
import { UserService } from '../../services/user.service';
import { MatchService } from '../../services/match.service';
import { UiService } from '../../services/ui.service';
import { TalkService } from '../../services/talk.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-tabMatch',
  templateUrl: 'tabMatch.page.html',
  styleUrls: ['tabMatch.page.scss']
})
export class TabMatchPage implements OnInit {

  private lanCatalogo = '1';
  private user: User;
  private isLoading = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private userService: UserService,
    private matchService: MatchService,
    private uiService: UiService,
    private talkService: TalkService,
    private activatedRoute: ActivatedRoute,
    private authService: FirebaseAuthService,
    public dataHelper: DataStorageService
  ) {}

  ngOnInit() {
    // Only one queryParam subscription here
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['random']) {
        this.safeRefresh();
      }
    });
  }

  async ionViewDidEnter() {
    await this.safeRefresh();
  }

  private async safeRefresh() {
    if (this.isLoading) return;
    this.isLoading = true;
    try {
      await this.refreshMatches();
    } catch (err) {
      console.error('Error refreshing matches:', err);
    } finally {
      this.isLoading = false;
    }
  }

  async refreshMatches() {
    this.uiService.showLoader();

    // Clear both in component and service (important)
    this.matchService.matchPerson = [];
    this.user = await this.userService.getUserBasic('');

    await this.matchService.principal(); // <- ensure this method clears internal arrays

    this.uiService.hideLoader();

    this.lanCatalogo = this.translate.currentLang === 'es'
      ? constants.languages.es.toString()
      : constants.languages.en.toString();
  }

  async setAvatarImg(matchP: MatchPerson[]) {
    for (const usr of matchP) {
      usr.image = '../../../assets/icon/30-Default_no-image.jpeg';
      const personId = (usr.personLiked.toString() === this.user.personId ? usr.personLikes : usr.personLiked);
      let res_imgs = <ImagesUser[]>await this.matchService.getIMGS(personId.toString());
      res_imgs = res_imgs.filter(res => res.avatar);
      usr.image = res_imgs[0]?.multimediaUrl;
    }
  }

  selectMatch(match: MatchPerson) {
    const otherPerson = (match.personLiked.toString() === this.user.personId ? match.personLikes : match.personLiked);
    const navExtras: NavigationExtras = {
      state: {
        typePerson: 0,
        otherPerson,
        matchId: match.matchId,
        image: match.image
      }
    };
    this.router.navigate(['detail-match'], navExtras);
  }

  async cancelMatch(matchP: MatchPerson) {
    const resCancel = await this.uiService.alertOK_CANCEL(this.translate.instant('MATCH.ConfirmDelete'));
    if (!resCancel) return;

    const id = (matchP.personLiked.toString() === this.user.personId ? matchP.personLikes : matchP.personLiked);

    this.uiService.showLoader();
    const res = await this.matchService.doMatchProfiles(id.toString(), constants.statusUsrMatch.block.toString(), 'false', 'false', matchP.matchId);
    this.uiService.hideLoader();

    if (res) {
      // Navigate back with random param to force list reload
      const randomParam = Math.random().toString(36).substring(2);
      this.router.navigate(['main/tabs/match'], { queryParams: { random: randomParam } });
    }
  }

  async chatMatch(matchId: number) {
    this.uiService.showLoader();
    const resp = await this.talkService.updateConversation(matchId.toString());
    this.uiService.hideLoader();
    if (Object.keys(resp).length === 0) {
      console.log("Chat registration issue");
      return;
    }

    const navExtras: NavigationExtras = {
      state: {
        idConversation: resp["idConversation"]
      }
    };
    this.router.navigate(['main/tabs/message'], navExtras);
  }

}
