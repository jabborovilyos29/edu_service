import {
  Controller,
  Post,
  Get,
  Param,
  Put,
  Body,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): Book[] {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book {
    return this.booksService.getBookById(Number(id));
  }

  @Get('/author/:authorId')
  getBookByAuthorId(@Param('authorId') authorId: string): Book[] {
    return this.booksService.getBooksByAuthorId(Number(authorId));
  }

  @Get('/category/:categoryId')
  getBookByCategory(@Param('categoryId') categoryId: string): Book[] {
    return this.booksService.getBooksByCategory(Number(categoryId));
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateBook: Book): Book {
    return this.booksService.updateBook(Number(id), updateBook);
  }

  @Post()
  createBook(@Body() book: Book): Book {
    return this.booksService.createBook(book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Book {
    return this.booksService.deleteBook(Number(id));
  }
}
