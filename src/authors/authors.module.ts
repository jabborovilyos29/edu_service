import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { Author } from '../entities/author.entity';
import { Book } from 'src/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
