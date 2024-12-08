import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './entities/categories.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getCategories(): Category[] {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  getCategoriesById(@Param('id') id: string): Category {
    return this.categoriesService.getCategoriesById(Number(id));
  }

  @Post()
  createCategory(@Body() category: Category): Category {
    return this.categoriesService.createCategory(category);
  }

  @Put(':id')
  updateCategory(
    @Param('id') id: string,
    @Body() updateCategory: Category,
  ): Category {
    return this.categoriesService.updateCategory(Number(id), updateCategory);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string): Category {
    return this.categoriesService.deleteCategory(Number(id));
  }
}
