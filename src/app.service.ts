import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUser(): any[] {
    return [
      {
        id: 1,
        nombre: 'Piero',
        apellido: 'Diaz',
      },
      {
        id: 2,
        nombre: 'Alonso',
        apellido: 'Curi',
      },
    ];
  }
}
