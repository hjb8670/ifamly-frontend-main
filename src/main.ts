import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


  navigator.serviceWorker.register('firebase-messaging-sw.js')
    .then(reg => console.log('Service Worker Registered', reg));


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
