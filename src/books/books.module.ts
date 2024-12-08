import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { BooksController } from './books.controller';

@Module({
  imports: [DatasourceModule, Book],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
