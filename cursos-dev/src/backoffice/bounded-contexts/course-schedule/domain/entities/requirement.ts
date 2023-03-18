import { v4 as uuidv4 } from 'uuid';
import { ScheduleVO } from '../value-objects/schedule-id.vo';
export type RequerimentProperties = {
  readonly scheduleId: ScheduleVO;
  readonly text: string;
};
export class Requeriment {
  private readonly requerimentId: string;
  private readonly scheduleId: ScheduleVO;
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
