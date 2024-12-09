import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate, IsArray } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ example: 'Война и мир', description: 'Название книги' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: '2023-12-31',
    description: 'Дата публикации книги',
  })
  @IsString()
  @IsNotEmpty()
  publicationDate: string;

  @ApiProperty({
    example: [1, 2],
    description: 'Идентификаторы авторов книги',
  })
  @IsArray()
  authors: number[];

  @ApiProperty({
    example: [3],
    description: 'Идентификаторы категорий книги',
  })
  @IsArray()
  categories: number[];
}
