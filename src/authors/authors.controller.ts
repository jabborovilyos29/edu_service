import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthrosService } from './authros.service';
import { Author } from './entities/author.entity';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthrosService) {}

  @Get()
  getAuthors() {
    return this.authorsService.getAuthors();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.authorsService.getById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthor: Author) {
    return this.authorsService.updateAuthor(Number(id), updateAuthor);
  }

  @Post()
  create(@Body() author: Author) {
    return this.authorsService.create(author);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorsService.removeAuthor(Number(id));
  }
}
