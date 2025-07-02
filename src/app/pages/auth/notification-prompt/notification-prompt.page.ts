import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notification-prompt',
  templateUrl: './notification-prompt.page.html',
  styleUrls: ['./notification-prompt.page.scss'],
})
export class NotificationPromptPage {

  constructor(
        private userService: UserService, 
        private router: Router,
         private translate: TranslateService,
        private zone: NgZone,
        private notificationService: NotificationService
  ) {}
  loading = false;
  async allowNotifications() {
    this.loading = true;
    try {
      const token = await this.notificationService.requestPermission();
      console.log(token);
      this.userService.setNotificationsAllowed(true);
      this.notificationService.listenToMessages(); // Start listening
      await this.userService.sendDeviceToken(token);

      // Force navigation inside Angular zone
      this.zone.run(() => {
        this.router.navigate(['/main/tabs/discover']);
        this.loading = false;
      });
    } catch (err) {
      console.error('Notification permission denied or failed:', err);
      this.userService.setNotificationsAllowed(false);
      this.loading = false;
  
      this.zone.run(() => {
        this.router.navigate(['/main/tabs/discover']);
        this.loading = false;
      });
    }
  }


  skip() {
    this.userService.setNotificationsAllowed(false);
    this.router.navigate(['/main/tabs/discover']);
  }
}
