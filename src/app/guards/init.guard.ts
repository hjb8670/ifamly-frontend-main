import { Injectable } from '@angular/core';
import { CanActivate, NavigationExtras, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { DiscoverUsr, FilterDiscover, ImagesUser } from '../interfaces/interfaces';
import { MatchService } from '../services/match.service';

@Injectable({
  providedIn: 'root',
})
export class InitGuard implements CanActivate {
  private isInitialized = false;

  constructor(
    private userService: UserService, 
    private router: Router,
  private matchService: MatchService
) { }

  async canActivate(): Promise<boolean> {
    if (this.isInitialized) {
      return true;
    }

    // Realiza la validación inicial
    const { rs } = await this.userService.getUserRS();

    if (rs === 'email' && (await this.userService.loginWithEmail())) {
      this.isInitialized = true;
      await this.goDiscovers();
      return false;
    } else if (rs === 'google' && (await this.userService.loginWithGoogle())) {
      this.isInitialized = true;
      await this.goDiscovers();
      return false;
    } else if (rs === 'apple' && (await this.userService.loginWithApple())) {
      this.isInitialized = true;
      //this.router.navigate(['/main/tabs/discover']);
      await this.goDiscovers();
      return false;
    }

    // Si no hay credenciales válidas, permite el acceso a la pantalla de login
    this.isInitialized = true;
    return true;
  }

  async goDiscovers() {
  // Check if notifications are allowed before navigating
  const isNotifAllowed = this.userService.getNotificationsAllowed();
  if (!isNotifAllowed) {
    await this.router.navigate(['/notification-prompt']);
    return;
  }


    const discoverUsrs = await this.preLoadDis();
    console.log('GO DISCOVER USRS: ', discoverUsrs);
    

    let navegationExtras: NavigationExtras = {
      state: {
        discoverUsrs
      }
    }
    await this.router.navigate(['/main/tabs/discover'], navegationExtras);

  }

  async preLoadDis(){
      try {
        const filter: FilterDiscover = {
          selfRole: null,
          targetRole: null,
          ageIni: 18,
          ageEnd: 100,
          distance: 1,
          minHeight: 1,
          maxHeight: 100,
          exercise: null,
          zodiacSign: null,
          education: null,
          drinking: null,
          smoking: null,
          kids: null,
          religion: null,
          location: null
        };
  
        let discoverU = <DiscoverUsr[]> await this.matchService.getDiscoverProfiles("0", "10", filter);
        await this.setAvatarImg(discoverU);
  
        console.log('RE-LOAD DISCOVER_USR: ', discoverU);
  
        return discoverU; 
  
      } catch (error) {
        console.log('ERROR AL RECARGAR PROFILES');
        return [];
      }
    }

    async setAvatarImg(usrDicover: DiscoverUsr[]) {
        // for (const usr of usrDicover) {
        //   usr.image = '../../../assets/icon/30-Default_no-image.jpeg';
    
        //   const res_imgs =  <ImagesUser[]> await this.matchService.getIMGS(usr.personId.toString());
        //   for (const img of res_imgs) {
        //     if(img.avatar) {
        //       usr.image = img.multimediaUrl;
        //     }
        //   }
        // }
      }
}