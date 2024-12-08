import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { DatasourceModule } from './datasource/datasource.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthorsModule,
    CategoriesModule,
    BooksModule,
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'edu',
      password: '1234',
      host: 'localhost',
      synchronize: false,
      logging: 'all',
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
