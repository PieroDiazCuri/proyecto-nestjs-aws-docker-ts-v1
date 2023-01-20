import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseApplication } from './base.service';
import { TaskService } from './task.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly task: TaskService,
    // priceService: BaseApplication,
    @Inject('LAYOUT') layaout: any,
    @Inject('LAYOUT_SERVICE') layaoutService: any,
  ) {
    console.log(task.getTask());
    // console.log('total', priceService.getTotal());
    console.log(layaout);
    console.log(layaoutService.getMessage());
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('users')
  getUser(): any[] {
    return this.appService.getUser();
  }
}
