import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from '../entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOperation({ summary: 'Получение всех книг' })
  @Get()
  async getBooks(): Promise<Book[]> {
    return this.booksService.getBooks();
  }

  @ApiOperation({ summary: 'Получение книги по ID' })
  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return this.booksService.getBookById(Number(id));
  }

  @ApiOperation({ summary: 'Получение книг по ID автора' })
  @Get('/author/:authorId')
  async getBooksByAuthorId(
    @Param('authorId') authorId: string,
  ): Promise<Book[]> {
    return this.booksService.getBooksByAuthorId(Number(authorId));
  }

  @ApiOperation({ summary: 'Получение книг по ID категории' })
  @Get('/category/:categoryId')
  async getBooksByCategory(
    @Param('categoryId') categoryId: string,
  ): Promise<Book[]> {
    return this.booksService.getBooksByCategory(Number(categoryId));
  }

  @ApiOperation({ summary: 'Создание книги' })
  @Post()
  async createBook(@Body() book: CreateBookDto): Promise<Book> {
    return this.booksService.createBook(book);
  }

  @ApiOperation({ summary: 'Обновление книги' })
  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() updateBook: Partial<Book>,
  ): Promise<Book> {
    return this.booksService.updateBook(Number(id), updateBook);
  }

  @ApiOperation({ summary: 'Удаление книги' })
  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<void> {
    return this.booksService.deleteBook(Number(id));
  }
}
