import { Controller, Post, Body } from '@nestjs/common';
import { NotificationPublisherService } from './notification.publisher.service';
import { NotificationSubscriberService } from './notification.subscriber.service';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationPublisherService: NotificationPublisherService,
  ) {}

  @Post('publisher')
  publisher(@Body('notification') notification: string) {
    return this.notificationPublisherService.addNotification(notification);
  }
  @Post('subscribir')
  subscriber(@Body('name') name: string, @Body('email') email: string) {
    const newSubscriber = new NotificationSubscriberService(name, email);
    return this.notificationPublisherService.attach(newSubscriber);
  }
}
