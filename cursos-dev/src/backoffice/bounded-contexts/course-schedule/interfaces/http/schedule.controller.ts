import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateScheduleCommand } from '../../application/commands/create-schedule.command';
import { DeleteSchaduleCommand } from '../../application/commands/delete-schedule.command';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly commandBus: CommandBus) {}
  @Post()
  create(@Body() body: any) {
    const { courseId, subject, status } = body;
    const command = new CreateScheduleCommand(courseId, subject, status);
    this.commandBus.execute(command);
    return { message: 'Schedule created' };
  }
  @Delete(':scheduleId')
  delete(@Param() param: any) {
    const { scheduleId } = param;
    const command = new DeleteSchaduleCommand(scheduleId);
    this.commandBus.execute(command);
    return 'ok';
  }
}
