import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Authentication, GoogleAuth, User } from "@codetrix-studio/capacitor-google-auth";
import { initializeApp } from "firebase/app";

import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GoogleSignInService {
  private firebase: any;
  userLogged: User | null = null;

  constructor(
    private platform: Platform,
  ) { 
    this.firebase = initializeApp(environment.firebaseConfig);
  }

  initialize() {
    if (this.platform.is('capacitor')) {
      return;
    }

    GoogleAuth.initialize({ 
      clientId: '1008524938992-tesl4nq07h550n063b9p28kenopd0ule.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true 
    });
  }

  /* public async refreshToken(): Promise<string>{
    let currentTokens: Authentication;

    await GoogleAuth.refresh()
        .then((data) => {
            //console.log('REFRESH TOKEN: ', data);
            if (data.accessToken) {
                currentTokens = data;            }
        })
        .catch((error) => {
            console.log('ERROR REFRESH TOKEN: ', error);
            if (error.type === 'userLoggedOut') {
                console.log('USER LOGGED OUT');
            }
        });

    return currentTokens?.idToken;
  } */

  async refreshToken(): Promise<string | null> {
    try {
      const data = await GoogleAuth.refresh();
      if (data.accessToken) {
        console.log('Token de Google refrescado correctamente:', data.accessToken);
        return data.idToken || null;
      }
    } catch (error) {
      console.log('ERROR REFRESH TOKEN:', error);
  
      if (error.type === 'userLoggedOut' || error.message === 'User not logged in.') {
        console.log('El usuario no está autenticado. Iniciando sesión con Google...');
        const user = await GoogleAuth.signIn();
        return user.authentication.idToken || null;
      }
    }
  
    return null;
  }

  async loginViaGoogle(): Promise<User>{
    let user_t: User | null = null;

    await GoogleAuth.signIn()
        .then((user) => {
          user_t = user;
        })
        .catch((error) => {
            console.log('ERROR LOGIN VIA GOOGLE: ', error);
        });
    
    return user_t;
}

  async logout() {
    await GoogleAuth.signOut()
        .then((user) => {
          console.log('SUCCESS LOGOUT');
        })
        .catch((error) => {
            console.log('ERROR LOGOUT VIA GOOGLE: ', error);
        });
  }

}
