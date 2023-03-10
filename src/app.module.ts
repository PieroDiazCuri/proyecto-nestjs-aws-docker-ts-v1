import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseApplication, Price } from './base.service';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { ParamsService } from './database/params.service';
import { TaskService } from './task.service';

export class TestDI {
  getMessage() {
    return 'Message from TestDI';
  }
}
@Module({
  imports: [],
  controllers: [AppController, BookController],
  providers: [
    ParamsService,
    AppService,
    BookService,
    {
      provide: 'LAYOUT_SERVICE',
      useFactory: () => {
        return new TestDI();
      },
    },
    {
      provide: 'LAYOUT',
      useValue: {
        title: 'La Oficina',
        description: 'App La Oficina description',
      },
    },
    // {
    //   //crear un toquen de la clase BaseApplication pero usando la clase Price
    //   provide: BaseApplication,
    //   useValue: Price,
    // },
    {
      provide: TaskService,
      useFactory: (prefix) => new TaskService(prefix),
      inject: ['app-poc'],
    },
    {
      provide: 'app-poc',
      useValue: 'app-poc',
    },
  ],
})
export class AppModule {}
