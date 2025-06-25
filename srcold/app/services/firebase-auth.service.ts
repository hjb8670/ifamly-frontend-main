import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from '@firebase/app';
import { getAuth, getIdToken } from '@firebase/auth';
//import { OAuthProvider } from '@firebase/auth-types';
import { Platform } from '@ionic/angular';
import { Subject, ReplaySubject, Observable, lastValueFrom, take } from 'rxjs';
import { AppleSignInService } from './apple-sign-in.service';
import { UserService } from './user.service';
import { 
  AuthStateChange, 
  ConfirmVerificationCodeOptions, 
  FirebaseAuthentication,
  GetIdTokenOptions,
  SignInResult, 
  SignInWithPhoneNumberOptions,
  User
} from '@capacitor-firebase/authentication';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private currentUserSubject = new ReplaySubject<User | null>(1);
  private readonly authStateSubj = new Subject<AuthStateChange>();
  private phoneCodeSentSubject = new Subject<{ verificationId: string; }>();

  constructor(
    private readonly platform: Platform,
    private readonly ngZone: NgZone,
    private appleSignInService: AppleSignInService,
    private usrService: UserService
  ) {
    FirebaseAuthentication.removeAllListeners().then(() => {
      FirebaseAuthentication.addListener('authStateChange', (change) => {
        this.ngZone.run(() => {
          this.authStateSubj.next(change);
        });
      });
      FirebaseAuthentication.addListener('phoneCodeSent', async (event) => {
        this.ngZone.run(() => {
          this.phoneCodeSentSubject.next(event);
        });
      });
      // Only needed to support dev livereload.
      FirebaseAuthentication.getCurrentUser().then((result) => {
        this.currentUserSubject.next(result.user);
      });
    });
  }

  public get authState$(): Observable<AuthStateChange> {
    return this.authStateSubj.asObservable();
  }

  public async initialize(): Promise<void> {
    if (this.platform.is('capacitor')) {
      return;
    }
  
    initializeApp(environment.firebaseConfig);
  }

  public get currentUser$(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  //Obtener el usuario actual
  public getCurrentUser(): Promise<User | null> {
    return lastValueFrom(this.currentUser$.pipe(take(1)));
  }

  //Obtener el token de autenticación
  public async getIdToken(options?: GetIdTokenOptions): Promise<string> {
    const result = await FirebaseAuthentication.getIdToken(options);
    return result.token;
  }

  //Validación con telefono y generación de código SMS
  public async signInWithPhoneNumber( options: SignInWithPhoneNumberOptions ): Promise<void> {
    return await FirebaseAuthentication.signInWithPhoneNumber(options);
  }

  public async confirmVerificationCode( options: ConfirmVerificationCodeOptions ): Promise<SignInResult> {
    return await FirebaseAuthentication.confirmVerificationCode(options);
  }

  public get phoneCodeSent$(): Observable<{ verificationId: string; }> {
    return this.phoneCodeSentSubject.asObservable();
  }

  public async sendVerificationCodeEmail(email: string, lang: string): Promise<boolean> {
    return this.usrService.getCodeEmail(email, lang) as unknown as boolean;
  }

  public async validaCodeEmail(email: string, code: string): Promise<string> {
    return this.usrService.validaCodeEmail(email, code) as unknown as string;
  }

  //SignIn con Apple
  public async signInWithApple(): Promise<any> {
    
    if (this.platform.is('ios')) {
      return await this.appleSignInService.signInWithAppleNative();
    } else {
      return await this.signInWithAppleWeb();
    }
  }

  public async signInWithAppleWeb( ): Promise<User> {
    return (await FirebaseAuthentication.signInWithApple()).user;
  }

  async getidToken() {
    const auth = getAuth();
    console.log('Usr: ', auth.currentUser);
    
    await getIdToken(auth.currentUser, true).then((idToken) => {
      console.log("IdToken: ", idToken);
    });
  }

  //Cerrar sesión
  public async logout(): Promise<void> {
    await FirebaseAuthentication.signOut();
  }
} 