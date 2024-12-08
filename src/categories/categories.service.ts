import { Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly datasourceService: DatasourceService) {}

  createCategory(category: Category): Category {
    this.datasourceService.getCategories().push(category);
    return category;
  }

  getCategories(): Category[] {
    return this.datasourceService.getCategories();
  }

  getCategoriesById(id: number): Category | undefined {
    return this.datasourceService
      .getCategories()
      .find((category) => category.id === id);
  }

  updateCategory(id: number, updateCategory: Category): Category {
    const index = this.datasourceService
      .getCategories()
      .findIndex((category) => category.id === id);

    this.datasourceService.getCategories()[index] = updateCategory;

    return updateCategory;
  }

  deleteCategory(id: number): Category {
    const index = this.datasourceService
      .getCategories()
      .findIndex((category) => category.id === id);

    const res = this.datasourceService.getCategories().splice(index, 1);

    return res[0];
  }
}
