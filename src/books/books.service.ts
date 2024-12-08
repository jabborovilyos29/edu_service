import { Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(private readonly datasourceService: DatasourceService) {}

  createBook(book: Book): Book {
    this.datasourceService.getBooks().push(book);
    return book;
  }

  getBookById(id: number): Book | undefined {
    return this.datasourceService.getBooks().find((book) => book.id === id);
  }

  getBooks(): Book[] {
    return this.datasourceService.getBooks();
  }

  getBooksByAuthorId(id: number): Book[] {
    return this.datasourceService
      .getBooks()
      .filter((book) => book.authorId === id);
  }

  updateBook(id: number, updateBook: Book): Book {
    const index = this.datasourceService
      .getBooks()
      .findIndex((book) => book.id === id);

    this.datasourceService.getBooks()[index] = updateBook;

    return this.datasourceService.getBooks()[index];
  }

  deleteBook(id: number): Book {
    const index = this.datasourceService
      .getBooks()
      .findIndex((book) => book.id === id);

    const res = this.datasourceService.getBooks().splice(index, 1);

    return res[0];
  }
}
