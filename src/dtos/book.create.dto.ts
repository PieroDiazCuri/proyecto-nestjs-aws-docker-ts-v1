import { IsString, IsEmpty, IsNotEmpty } from 'class-validator';

export class BookCreateDTO {
  @IsNotEmpty({ message: 'El título es obligatorio' })
  @IsString({ message: 'El título debe ser un texto' })
  title: string;

  @IsNotEmpty({ message: 'El author es obligatorio' })
  @IsString({ message: 'El author debe ser un texto' })
  author: string;
}
