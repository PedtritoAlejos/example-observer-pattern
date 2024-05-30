import { Injectable } from '@nestjs/common';
import { Observer, Subject } from './interfaces/observer.interface';

@Injectable()
export class NotificationPublisherService implements Subject {
  private observers: Observer[] = [];
  private lastNotification: string | null = null;

  attach(observer: Observer): void {
    this.observers.push(observer);
  }
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex > -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.lastNotification);
    }
  }

  addNotification(notification: string): void {
    this.lastNotification = notification;
    this.notify();
  }
}
