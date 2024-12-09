import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book } from '../entities/book.entity';
import { Author } from 'src/entities/author.entity';
import { Category } from 'src/entities/categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author, Category])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
