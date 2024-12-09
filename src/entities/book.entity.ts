import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Author } from 'src/entities/author.entity';
import { Category } from 'src/entities/categories.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publicationDate: Date;

  @ManyToMany(() => Author, (author) => author.affiliations)
  authors: Author[];

  @ManyToMany(() => Category, (category) => category.books)
  @JoinTable({
    name: 'book_categories',
    joinColumn: { name: 'book_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  })
  categories: Category[];
}