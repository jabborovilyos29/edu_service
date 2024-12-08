import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Category } from './entities/categories.entity';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [DatasourceModule, Category],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
