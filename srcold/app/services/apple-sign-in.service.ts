import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {
  SignInWithApple,
  SignInWithAppleOptions
} from '@capacitor-community/apple-sign-in';

@Injectable({
  providedIn: 'root'
})
export class AppleSignInService {
  private optionsAppleSignIn: SignInWithAppleOptions = {
    clientId: 'com.hit2b.iFamily',
    redirectURI: 'https://ifamily-180d6.firebaseapp.com/__/auth/handler',
    scopes: 'email name',
    state: '12345',
  };

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  public async signInWithAppleNative() {
    try {
      const appleAuthResponse = await SignInWithApple.authorize(this.optionsAppleSignIn);

      const credential = new firebase.auth.OAuthProvider('apple.com').credential({
        idToken: appleAuthResponse.response.identityToken,
      });

      const firebaseUserCredential = await this.afAuth.signInWithCredential(credential);

      return firebaseUserCredential.user;

    } catch (error) {
      console.error('Error during sign in with Apple', error);
      return null;
    }
  }
}
