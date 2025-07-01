import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
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
        private zone: NgZone,
        private notificationService: NotificationService
  ) {}

  async allowNotifications() {
    try {
      const token = await this.notificationService.requestPermission();
      this.userService.setNotificationsAllowed(true);
      this.notificationService.listenToMessages(); // Start listening
      await this.userService.sendDeviceToken(token);

      // Force navigation inside Angular zone
      this.zone.run(() => {
        this.router.navigate(['/main/tabs/discover']);
      });
    } catch (err) {
      console.error('Notification permission denied or failed:', err);
      this.userService.setNotificationsAllowed(false);
  
      this.zone.run(() => {
        this.router.navigate(['/main/tabs/discover']);
      });
    }
  }


  skip() {
    this.userService.setNotificationsAllowed(false);
    this.router.navigate(['/main/tabs/discover']);
  }
}
