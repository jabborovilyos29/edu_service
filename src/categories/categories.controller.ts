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
import { CategoriesService } from './categories.service';
import { Category } from '../shared/entities/categories.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Получение всех категорий' })
  @Get()
  async getCategories(): Promise<Category[]> {
    return this.categoriesService.getCategories();
  }

  @ApiOperation({ summary: 'Получение категории по ID' })
  @Get(':id')
  async getCategoryById(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.getCategoriesById(Number(id));
  }

  @ApiOperation({ summary: 'Создание категории' })
  @Post()
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @ApiOperation({ summary: 'Обновление категории' })
  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategory: Category,
  ): Promise<Category> {
    return this.categoriesService.updateCategory(Number(id), updateCategory);
  }

  @ApiOperation({ summary: 'Удаление категории' })
  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<void> {
    return this.categoriesService.deleteCategory(Number(id));
  }
}
