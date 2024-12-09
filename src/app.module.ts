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
      host: 'localhost',
      port: 5432,
      username: 'edu',
      password: 'password',
      database: 'edu',
      synchronize: false,
      logging: true,
      migrations: ['dist/migrations/*.js'],
      migrationsRun: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
