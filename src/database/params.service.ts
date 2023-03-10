import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { EntityManager, DataSource } from 'typeorm';

interface DBConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string[];
  synchronize: boolean;
  logging: boolean;
}
// Permite acceder y hacer operaciones con la base de datos
let manager: EntityManager;
@Injectable()
export class ParamsService implements OnModuleInit, OnModuleDestroy {
  private dataSource: DataSource | void;
  private get dbConfig(): DBConfig {
    return {
      host: 'localhost',
      port: 3340,
      username: 'root',
      password: 'mysql',
      database: 'ddd',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    };
  }
  async onModuleInit() {
    this.dataSource = await new DataSource({
      type: 'mysql',
      ...this.dbConfig,
    })
      .initialize()
      .catch(this.failToConnectToDatabase);
    console.log('Connected to database');
    manager = (this.dataSource as DataSource).manager;
  }
  failToConnectToDatabase() {
    console.log('Fail to connect to database');
    process.exit(1);
  }
  async onModuleDestroy() {
    if (this.dataSource) await this.dataSource.destroy();
  }
  //como es statico se muede llamar desde cualquier lado
  static get manager(): EntityManager {
    return manager;
  }
}
