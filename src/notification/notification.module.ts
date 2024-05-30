import { Module } from '@nestjs/common';
import { NotificationPublisherService } from './notification.publisher.service';
import { NotificationSubscriberService } from './notification.subscriber.service';
import { NotificationController } from './notification.controller';

@Module({
  controllers: [NotificationController],
  providers: [NotificationPublisherService],
  exports: [NotificationPublisherService],
})
export class NotificationModule {}
