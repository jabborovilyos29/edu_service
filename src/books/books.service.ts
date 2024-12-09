import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { Author } from 'src/entities/author.entity';
import { Category } from 'src/entities/categories.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const { title, publicationDate, authors, categories } = createBookDto;

    const book = this.bookRepository.create({
      title,
      publicationDate: new Date(publicationDate),
      authors: authors.map((id) => ({ id }) as Author),
      categories: categories.map((id) => ({ id }) as Category),
    });

    return this.bookRepository.save(book);
  }

  async getBooks(): Promise<Book[]> {
    return this.bookRepository.find({
      relations: ['authors', 'categories'],
    });
  }

  async getBookById(id: number): Promise<Book> {
    return this.bookRepository.findOne({
      where: { id },
      relations: ['authors', 'categories'],
    });
  }

  async updateBook(id: number, updateBook: Partial<Book>): Promise<Book> {
    const { authors: authorIds, ...bookData } = updateBook;

    const book = await this.bookRepository.findOne({
      where: { id },
      relations: ['authors'],
    });

    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }

    Object.assign(book, bookData);

    if (authorIds) {
      const authors = await this.authorRepository.findBy({ id: In(authorIds) });
      book.authors = authors;
    }

    return this.bookRepository.save(book);
  }

  async deleteBook(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }

  async getBooksByAuthorId(authorId: number): Promise<Book[]> {
    return this.bookRepository.find({
      where: {
        authors: { id: authorId },
      },
      relations: ['authors', 'categories'],
    });
  }

  async getBooksByCategory(categoryId: number): Promise<Book[]> {
    return this.bookRepository.find({
      where: {
        categories: { id: categoryId },
      },
      relations: ['authors', 'categories'],
    });
  }
}
