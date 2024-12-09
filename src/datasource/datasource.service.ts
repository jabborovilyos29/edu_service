import { Injectable } from '@nestjs/common';
import { Author } from 'src/entities/author.entity';
import { Book } from 'src/entities/book.entity';
import { Category } from 'src/entities/categories.entity';

@Injectable()
export class DatasourceService {
  private authors: Author[] = [];

  private books: Book[] = [];

  private categories: Category[] = [];

  getAuthors(): Author[] {
    return this.authors;
  }

  getBooks(): Book[] {
    return this.books;
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
