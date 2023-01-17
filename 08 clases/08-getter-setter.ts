interface SESConfig {
  from: string;
  to: string;
  subject: string;
  body: string;
  replyTo?: string;
}

class SendEmail {
  private config: SESConfig;
  set setConfiguration(config: SESConfig) {
    this.config = config;
  }
  get getConfiguration(): SESConfig {
    return this.config;
  }
  static get response(): string {
    return 'Email send';
  }
}

const sendEmail = new SendEmail();
const config: SESConfig = {
  from: 'diazcuri@gmail.com',
  to: 'pierodiazcuri@gmail.com',
  subject: 'Hello World',
  body: 'Hello World',
};
sendEmail.setConfiguration = config;

console.log(sendEmail.getConfiguration);
console.log(SendEmail.response);
