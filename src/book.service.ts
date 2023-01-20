import { NotFoundException } from '@nestjs/common';
import { BookCreateDTO } from './dtos/book.create.dto';

const dataBook: BookCreateDTO[] = [
  { title: 'titulo 1', author: 'author 1' },
  { title: 'titulo 2', author: 'author 2' },
  { title: 'titulo 3', author: 'author 3' },
];
export class BookService {
  getBook() {
    return dataBook;
  }
  getBookId(id: number) {
    if (id >= dataBook.length) {
      throw new NotFoundException('Book not found');
    }
    return dataBook[id];
  }
  insertBook(body: BookCreateDTO) {
    dataBook.push(body);
    return body;
  }
  removeBook(id: number) {
    if (id >= dataBook.length) {
      throw new NotFoundException('Book not found');
    }
    return dataBook.splice(id, 1);
  }
}
