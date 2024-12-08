import { Book } from 'src/books/entities/book.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({})
  fullname: string;
  @Column()
  position: string;
  @Column()
  grade: string;
  @Column()
  books: Book[];
  @ManyToMany((type) => Article, (article) => article.authors)

  @JoinTable({
    name: "article_authors",
    joinColumn: {name: "author_id"},
    inverseJoinColumn: {name: "article_id"},
  })
}
