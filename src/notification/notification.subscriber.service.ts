import { Injectable } from '@nestjs/common';
import { Observer } from './interfaces/observer.interface';
import { MailerUtil } from './util/mailer.util';

@Injectable()
export class NotificationSubscriberService implements Observer {
  private name: string;
  private email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  update(message: string): void {
    console.log(`${this.name} (${this.email}) recibio la noticia : ${message}`);
    MailerUtil.sendMail(this.email, this.name, 'hello world');
  }
}
