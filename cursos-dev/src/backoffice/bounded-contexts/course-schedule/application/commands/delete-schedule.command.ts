import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';

export class DeleteSchaduleCommand implements ICommand {
  constructor(public readonly scheduleId: string) {}
}

@CommandHandler(DeleteSchaduleCommand)
export class DeleteSchaduleCommandHandler
  implements ICommandHandler<DeleteSchaduleCommand, any>
{
  execute(command: DeleteSchaduleCommand): Promise<any> {
    console.log(command);
    return Promise.resolve();
  }
}
