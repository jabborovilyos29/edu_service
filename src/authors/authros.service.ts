import { Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthrosService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(author: Author): Author {
    this.datasourceService.getAuthors().push(author);
    return author;
  }

  getById(id: number): Author {
    const findedAuthor = this.datasourceService
      .getAuthors()
      .find((author) => author.id === id);

    return findedAuthor;
  }

  getAuthors(): Author[] {
    return this.datasourceService.getAuthors();
  }

  updateAuthor(id: number, updatedAuthor: Author): Author {
    const index = this.datasourceService
      .getAuthors()
      .findIndex((author) => author.id === id);

    this.datasourceService.getAuthors()[index] = updatedAuthor;

    return this.datasourceService.getAuthors()[index];
  }

  removeAuthor(id: number): Author {
    const index = this.datasourceService
      .getAuthors()
      .findIndex((author) => author.id === id);

    const res = this.datasourceService.getAuthors().splice(index, 1);

    return res[0];
  }
}
