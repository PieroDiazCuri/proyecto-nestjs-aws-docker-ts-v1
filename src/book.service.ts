import { NotFoundException } from '@nestjs/common';
import { DatabaseEntityManager } from './database.manager';
import { BookCreateDTO } from './dtos/book.create.dto';
import { BookEntity } from './entities/book.entity';

const dataBook: BookCreateDTO[] = [
  { title: 'titulo 1', author: 'author 1' },
  { title: 'titulo 2', author: 'author 2' },
  { title: 'titulo 3', author: 'author 3' },
];
export class BookService extends DatabaseEntityManager {
  async getBook(): Promise<BookEntity[]> {
    return await this.manager.getRepository(BookEntity).find();
  }
  getBookId(id: number) {
    if (id >= dataBook.length) {
      throw new NotFoundException('Book not found');
    }
    return dataBook[id];
  }
  async insertBook(body: BookCreateDTO) {
    await this.manager.getRepository(BookEntity).save(body);
    return body;
  }
  async removeBook(id: number) {
    const book = await this.manager
      .getRepository(BookEntity)
      .findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    await this.manager.getRepository(BookEntity).delete({ id });
    return book;
  }
}
