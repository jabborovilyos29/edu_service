import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Author } from '../entities/author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Book } from 'src/entities/book.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const { books: bookIds, ...authorData } = createAuthorDto;
    const books = await this.bookRepository.findBy({ id: In(bookIds) });
    const author = this.authorRepository.create({ ...authorData, books });
    return this.authorRepository.save(author);
  }

  async getById(id: number): Promise<Author> {
    return this.authorRepository.findOne({
      where: { id },
      relations: ['books'],
    });
  }

  async getAuthors(): Promise<Author[]> {
    return this.authorRepository.find({
      relations: ['books'],
    });
  }

  async updateAuthor(
    id: number,
    updatedAuthor: CreateAuthorDto,
  ): Promise<Author> {
    const { books: bookIds, ...authorData } = updatedAuthor;

    const books = await this.bookRepository.findBy({ id: In(bookIds) });

    await this.authorRepository.update(id, { ...authorData });

    const author = await this.authorRepository.findOne({
      where: { id },
      relations: ['books'],
    });

    if (!author) {
      throw new Error(`Author with ID ${id} not found`);
    }

    author.books = books;

    return this.authorRepository.save(author);
  }

  async removeAuthor(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
