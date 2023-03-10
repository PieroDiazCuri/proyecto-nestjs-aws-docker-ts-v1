import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UsePipes,
  Delete,
} from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';
import { BookService } from './book.service';
import { BookCreateDTO } from './dtos/book.create.dto';
import { BookGetOneDTO } from './dtos/book.getone.dto';

@Controller('book')
//   @UsePipes(new ValidationPipe()) // se usa por controlador
export class BookController {
  constructor(private readonly bookService: BookService) {
    this.bookService = bookService;
  }
  @Get('list')
  async getBook() {
    return await this.bookService.getBook();
  }
  @Get(':identificador')
  //   @UsePipes(new ValidationPipe()) // se usa en cada método
  getBookId(@Param() values: BookGetOneDTO) {
    console.log('getBookId', values.identificador);
    return this.bookService.getBookId(values.identificador);
  }
  @Post()
  async createBook(@Body() body: BookCreateDTO) {
    return await this.bookService.insertBook(body);
  }
  @Delete(':identificador')
  deleteBook(@Param() value: BookGetOneDTO) {
    return this.bookService.removeBook(value.identificador);
  }
}
