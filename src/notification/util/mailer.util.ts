import { Resend } from 'resend';
export class MailerUtil {
  static async sendMail(
    to: string,
    subject: string,
    body: string,
  ): Promise<boolean> {
    try {
      const apiKey = process.env.API_KEY || null;
      if (!apiKey) {
        throw new Error('API key not provided');
      }

      const resend = new Resend(apiKey);

      const { error } = await resend.emails.send({
        from: 'practice test <onboarding@resend.dev>',
        to: [to],
        subject: subject,
        html: body,
      });

      if (error) {
        throw new Error('Error sending email: ' + error.message);
      }

      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}
