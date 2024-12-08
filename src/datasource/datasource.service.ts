import { Injectable } from '@nestjs/common';
import { Author } from 'src/authors/entities/author.entity';
import { Book } from 'src/books/entities/book.entity';
import { Category } from 'src/categories/entities/categories.entity';

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
          categoryIds: [1, 2, 3],
        },
        {
          id: 2,
          name: 'Tests book part 2',
          publicationDate: '2024-12-18',
          authorId: 1,
          categoryIds: [2],
        },
        {
          id: 3,
          name: 'Tests book part 3',
          publicationDate: '2024-12-18',
          authorId: 1,
          categoryIds: [3],
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
      categoryIds: [1, 2, 3],
    },
    {
      id: 2,
      name: 'Tests book part 2',
      publicationDate: '2024-12-18',
      authorId: 1,
      categoryIds: [2],
    },
    {
      id: 3,
      name: 'Tests book part 3',
      publicationDate: '2024-12-18',
      authorId: 1,
      categoryIds: [3],
    },
  ];

  private categories: Category[] = [
    { id: 1, name: 'Kitchen' },
    { id: 2, name: 'Sport' },
    { id: 3, name: 'IT' },
  ];

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
