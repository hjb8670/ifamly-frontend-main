import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushNotifications, Token } from '@capacitor/push-notifications';
import { environment } from 'src/environments/environment';
import { LocalNotifications } from '@capacitor/local-notifications';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  async requestPermission(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (Capacitor.isNativePlatform()) {
        PushNotifications.requestPermissions().then(permission => {
          if (permission.receive === 'granted') {
            PushNotifications.register();

            PushNotifications.addListener('registration', (token: Token) => {
              console.log('✅ Push token:', token.value);
              resolve(token.value); // <-- Send this to your backend
            });

            PushNotifications.addListener('registrationError', err => {
              console.error('❌ Registration error:', err);
              reject(err);
            });
          } else {
            reject('Push permission not granted');
          }
        });
      } else {
        reject('Only supported on native platforms (Android/iOS)');
      }
    });
  }

listenToMessages() {
  if (Capacitor.isNativePlatform()) {
    PushNotifications.addListener('pushNotificationReceived', async (notification) => {
      console.log('📨 Push Received (foreground):', notification);

      const data = notification.data;
const randomInt = Math.floor(Math.random() * 100000); // always < Java int max

      await LocalNotifications.schedule({
        notifications: [
          {
            title: data.title || 'New Message',
            body: data.body || '',
            id: randomInt,
            sound: 'default',
            smallIcon: 'ic_stat_icon_config', // optional
            attachments: data.senderImageUrl ? [{ id: 'image', url: data.senderImageUrl }] : [],
            extra: data,
          },
        ],
      });
    });

    PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
      console.log('👆 Notification tapped:', action);
      alert('Match screen will show here...')
    });
  }
}

}
