import { Book } from 'src/books/entities/book.entity';

export class Author {
  id: number;
  fullname: string;
  position: string;
  grade: string;
  books: Book[];
}
