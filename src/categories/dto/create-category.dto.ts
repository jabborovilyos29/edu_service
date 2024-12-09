import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Фантастика', description: 'Название категории' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
