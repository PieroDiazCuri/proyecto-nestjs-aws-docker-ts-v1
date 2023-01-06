type SNSConfig = {topicArn: string; region: string};
const snsConfig: SNSConfig = {topicArn: 'arn:aws:sns:us-east-1:', region: 'us-east-1'};

type PhoneUSA = {code: string; number: string};
type Phone = string | number;
const phoneNumber: Phone = '123456789';
const phoneNumber2: Phone = 123456789;
const phoneNumber3: PhoneUSA = {code: '+1', number: '123456789'};
