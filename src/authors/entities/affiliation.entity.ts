import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './author.entity';

@Entity('affiliations')
export class Affiliation {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  companyName: string;
  @Column()
  address: string;
  @Column()
  specialization: string;
  @ManyToMany((type) => Author, (author) => author.books)
  @JoinTable({
    name: ""
  })
}
