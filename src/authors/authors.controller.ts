import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthrosService } from './authros.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './entities/author.entity';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthrosService) {}

  @ApiOperation({ summary: 'Получение всех авторов' })
  @Get()
  async getAuthors(): Promise<Author[]> {
    return this.authorsService.getAuthors();
  }

  @ApiOperation({ summary: 'Получение автора по ID' })
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Author> {
    return this.authorsService.getById(Number(id));
  }

  @ApiOperation({ summary: 'Создание автора' })
  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorsService.create(createAuthorDto);
  }

  @ApiOperation({ summary: 'Обновление автора' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAuthorDto: CreateAuthorDto,
  ): Promise<Author> {
    return this.authorsService.updateAuthor(Number(id), updateAuthorDto);
  }

  @ApiOperation({ summary: 'Удаление автора' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.authorsService.removeAuthor(Number(id));
  }
}
