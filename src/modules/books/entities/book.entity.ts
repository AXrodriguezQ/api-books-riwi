import { Author } from "src/modules/authors/entities/author.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "books" })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  authorId: number;

  @Column({ default: 1 })
  amount: number;

  @Column({ default: 0 })
  sales: number;

  @ManyToOne(() => Author, author => author.books)
  @JoinColumn({ name: 'author_id' })
  author: Author;
}
