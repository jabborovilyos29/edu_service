import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({ example: 'Иван Иванов', description: 'Полное имя автора' })
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @ApiProperty({ example: 'Профессор', description: 'Должность' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({ example: 'Кандидат наук', description: 'Учёная степень' })
  @IsString()
  @IsNotEmpty()
  grade: string;

  @ApiProperty({
    example: [1, 2],
    description: 'Идентификаторы связанных книг',
  })
  @IsArray()
  affiliations: number[];
}
