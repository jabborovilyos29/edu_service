import { Injectable } from '@nestjs/common';
import { Author } from 'src/authors/entities/author.entity';

@Injectable()
export class DatasourceService {
  private authors: Author[] = [
    {
      id: 1,
      fullname: 'Test Testov',
      position: 'test',
      grade: 'grade test',
    },
  ];

  getAuthors(): Author[] {
    return this.authors;
  }
}
