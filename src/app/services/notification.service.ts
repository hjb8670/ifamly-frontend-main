import { Injectable } from '@angular/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messaging;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.messaging = getMessaging(app);
  }

  requestPermission(): Promise<string> {
    return getToken(this.messaging, {
      vapidKey: environment.firebaseConfig.vapidKey,
    });
  }

  listenToMessages() {
    onMessage(this.messaging, (payload) => {
      console.log('Foreground Notification received:', payload);
      // Optionally show a toast or alert here
    });
  }
}
