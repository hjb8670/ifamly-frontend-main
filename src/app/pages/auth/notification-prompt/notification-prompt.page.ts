import { Component } from '@angular/core';
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
        private notificationService: NotificationService
  ) {}

async allowNotifications() {
  try {
    const token = await this.notificationService.requestPermission();
    this.notificationService.listenToMessages(); // Start listening
    await this.userService.sendDeviceToken(token);
    this.userService.setNotificationsAllowed(true);
    this.router.navigate(['/main/tabs/discover']);
  } catch (err) {
    console.error('Notification permission denied or failed:', err);
    this.userService.setNotificationsAllowed(false);
    this.router.navigate(['/main/tabs/discover']);
  }
}


  skip() {
    this.userService.setNotificationsAllowed(false);
    this.router.navigate(['/main/tabs/discover']);
  }
}
