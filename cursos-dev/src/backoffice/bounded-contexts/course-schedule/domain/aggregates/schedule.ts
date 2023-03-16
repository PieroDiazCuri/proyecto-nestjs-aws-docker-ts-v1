import { AggregateRoot } from '@nestjs/cqrs';
import { Requeriment } from '../entities/requirement';

export type ScheduleEsscencial = {
  readonly scheduleId: string;
  readonly courseId: string;
  readonly subject: string;
  readonly status: string;
};
export type ScheduleOptional = {
  readonly frequecy: string;
  readonly duration: string;
  readonly startDate: Date;
  readonly phrase: string;
  readonly timeStartAndEnd: string;
  readonly zoomId: string;
};
export type ScheduleUpdate = {
  readonly subject: string;
  readonly status: string;
  readonly frequecy: string;
  readonly duration: string;
  readonly startDate: Date;
  readonly phrase: string;
  readonly timeStartAndEnd: string;
  readonly zoomId: string;
};
export type ScheduleProperties = Required<ScheduleEsscencial> &
  Partial<ScheduleOptional>;
export class Schedule extends AggregateRoot {
  private readonly scheduleId: string;
  private readonly courseId: string;
  private subject: string;
  private status: string;
  private frequecy: string;
  private duration: string;
  private startDate: Date;
  private phare: string;
  private timeStartAndEnd: string;
  private zoomId: string;
  private active: boolean;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date;
  // acá se coloca las entidades que quieres llamar a traves de Schedule
  readonly requeriments: Requeriment[] = [];
  constructor(properties: ScheduleProperties) {
    super();
    Object.assign(this, properties);
    this.createdAt = new Date();
  }
  properties() {
    return {
      scheduleId: this.scheduleId,
      courseId: this.courseId,
      subject: this.subject,
      duration: this.duration,
      startDate: this.startDate,
      phare: this.phare,
      timeStartAndEnd: this.timeStartAndEnd,
      status: this.status,
      frequecy: this.frequecy,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      active: this.active,
      zoomId: this.zoomId,
    };
  }
  addRequirement(requirement: string) {
    const newRequirement = new Requeriment({
      scheduleId: this.scheduleId,
      text: requirement,
    });
    this.requeriments.push(newRequirement);
  }
  update(fields: Partial<ScheduleUpdate>) {
    Object.assign(this, fields);
    this.updatedAt = new Date();
  }
  delete() {
    this.active = false;
    this.deletedAt = new Date();
  }
}
