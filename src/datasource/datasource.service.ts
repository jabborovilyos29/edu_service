import { Injectable } from '@nestjs/common';
import { Author } from 'src/authors/entities/author.entity';
import { Book } from 'src/books/entities/book.entity';

@Injectable()
export class DatasourceService {
  private authors: Author[] = [
    {
      id: 1,
      fullname: 'Test Testov',
      position: 'test',
      grade: 'grade test',
      books: [
        {
          id: 1,
          name: 'Tests book part 1',
          publicationDate: '2024-12-18',
          authorId: 1,
        },
        {
          id: 2,
          name: 'Tests book part 2',
          publicationDate: '2024-12-18',
          authorId: 1,
        },
        {
          id: 3,
          name: 'Tests book part 3',
          publicationDate: '2024-12-18',
          authorId: 1,
        },
      ],
    },
  ];

  private books: Book[] = [
    {
      id: 1,
      name: 'Tests book part 1',
      publicationDate: '2024-12-18',
      authorId: 1,
    },
    {
      id: 2,
      name: 'Tests book part 2',
      publicationDate: '2024-12-18',
      authorId: 1,
    },
    {
      id: 3,
      name: 'Tests book part 3',
      publicationDate: '2024-12-18',
      authorId: 1,
    },
  ];

  getAuthors(): Author[] {
    return this.authors;
  }

  getBooks(): Book[] {
    return this.books;
  }
}
