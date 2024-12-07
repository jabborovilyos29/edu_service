import { Module } from '@nestjs/common';
import { Author } from './entities/author.entity';
import { AuthorsController } from './authors.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { AuthrosService } from './authros.service';

@Module({
  imports: [Author, DatasourceModule],
  controllers: [AuthorsController],
  providers: [AuthrosService],
})
export class AuthorsModule {}
