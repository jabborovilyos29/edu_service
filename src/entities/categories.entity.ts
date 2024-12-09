import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Book } from 'src/entities/book.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Book, (book) => book.categories)
  books: Book[];
}
