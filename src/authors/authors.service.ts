import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../shared/entities/author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(author: CreateAuthorDto): Promise<Author> {
    const newAuthor = this.authorRepository.create(author);
    return this.authorRepository.save(newAuthor);
  }

  async getById(id: number): Promise<Author> {
    return this.authorRepository.findOne({
      where: { id },
      relations: ['books'],
    });
  }

  async getAuthors(): Promise<Author[]> {
    return this.authorRepository.find({
      relations: ['books'],
    });
  }

  async updateAuthor(
    id: number,
    updatedAuthor: CreateAuthorDto,
  ): Promise<Author> {
    await this.authorRepository.update(id, updatedAuthor);
    return this.getById(id);
  }

  async removeAuthor(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
