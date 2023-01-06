interface SQSConfig {
  region: string;
  delaySeconds: number;
  url: string;
}
const sqsConfig: SQSConfig = {
  region: 'us-east-1',
  delaySeconds: 10,
  url: 'https://sqs.us-east-1...',
};
console.table({region: sqsConfig.region, delaySeconds: sqsConfig.delaySeconds, url: sqsConfig.url});
