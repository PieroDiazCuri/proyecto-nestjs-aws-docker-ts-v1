import { va as uuidv4 } from 'uuid';
export type RequerimentProperties = {
  readonly scheduleId: string;
  readonly text: string;
};
export class Requeriment {
  private readonly requerimentId: string;
  private readonly scheduleId: string;
  private readonly text: string;
  constructor(properties: RequerimentProperties) {
    Object.assign(this, properties);
    this.requerimentId = uuidv4();
  }
  properties() {
    return {
      requerimentId: this.requerimentId,
      scheduleId: this.scheduleId,
      text: this.text,
    };
  }
}
