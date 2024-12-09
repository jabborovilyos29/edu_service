import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/categories.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.find({
      relations: ['books'],
    });
  }

  async getCategoriesById(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { id },
      relations: ['books'],
    });
  }

  async updateCategory(
    id: number,
    updateCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    await this.categoryRepository.update(id, updateCategoryDto);
    return this.getCategoriesById(id);
  }

  async deleteCategory(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
