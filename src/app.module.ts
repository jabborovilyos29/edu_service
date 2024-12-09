import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { DatasourceModule } from './datasource/datasource.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Book } from './entities/book.entity';
import { Category } from './entities/categories.entity';

@Module({
  imports: [
    AuthorsModule,
    CategoriesModule,
    BooksModule,
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'edu',
      password: 'password',
      database: 'edu',
      synchronize: true,
      logging: true,
      migrations: ['src/migrations/*{.ts,.js}'],
      entities: [Author, Book, Category],
      migrationsRun: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
