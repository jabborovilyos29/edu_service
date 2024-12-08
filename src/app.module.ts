import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { DatasourceModule } from './datasource/datasource.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [AuthorsModule, BooksModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
