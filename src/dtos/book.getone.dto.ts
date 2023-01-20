import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class BookGetOneDTO {
  @IsNumber()
  identificador: number;
}
