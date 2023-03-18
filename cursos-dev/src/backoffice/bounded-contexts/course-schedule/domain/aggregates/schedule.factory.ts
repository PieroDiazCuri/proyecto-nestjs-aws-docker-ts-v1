import { ScheduleVO } from '../value-objects/schedule-id.vo';
import { Schedule } from './schedule';

export class ScheduleFactory {
  create(
    scheduleId: ScheduleVO,
    courseId: string,
    subject: string,
    status: string,
  ) {
    if (subject.trim() === '') throw new Error('subject is required');
    if (subject.trim().split('').length < 5)
      throw new Error('subject must be at least 5 words');
    if (status.trim() === '') throw new Error('status is required');
    return new Schedule({ scheduleId, courseId, subject, status });
  }
}
