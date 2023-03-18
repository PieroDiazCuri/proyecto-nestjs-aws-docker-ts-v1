import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ScheduleFactory } from './backoffice/bounded-contexts/course-schedule/domain/aggregates/schedule.factory';
import { ScheduleVO } from './backoffice/bounded-contexts/course-schedule/domain/value-objects/schedule-id.vo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const courseId = '3bca4b5a-d2d8-45bf-b68d-9eac25478d70';
    const subject = 'Curso de Arquitectura NodeJS usando DDD y NestJS';
    const status = 'Status';
    const scheduleVO = ScheduleVO.create(
      'c4824ffd-57ba-4c06-b5e0-db4437621ebf',
    );
    const schedule = new ScheduleFactory().create(
      scheduleVO,
      courseId,
      subject,
      status,
    );
    schedule.addRequirement('Requirement 1');
    schedule.addRequirement('Requirement 2');
    schedule.addRequirement('Requirement 3');
    schedule.addGoal('Goal');
    schedule.addGoal('Goal 2');
    schedule.addGoal('Goal 3');
    schedule.addSyllabus('Syllabus 1');
    schedule.addSyllabus('Syllabus 2');
    schedule.addSyllabus('Syllabus 3');
    console.log(schedule);
    return 'ok';
  }
}
