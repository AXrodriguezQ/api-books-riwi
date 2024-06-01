import { Book } from "src/modules/books/entities/book.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "sales"})
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  bookId: number;

  @ManyToOne(() => Book, book => book.sales)
  @JoinColumn({ name: 'book_id' })
  book: Book;
}
