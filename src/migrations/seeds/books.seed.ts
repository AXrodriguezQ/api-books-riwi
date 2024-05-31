import { Book } from "src/modules/books/entities/book.entity";
import { DataSource } from "typeorm";

export async function populateBooksTable( dataSource: DataSource ) {

  const book1 = new Book();
  book1.id = 1
  book1.title = 'El Señor de los Anillos';
  book1.amount = 50;
  book1.sales = 1;
  book1.authorId = 1;
  
  const book2 = new Book();
  book2.id = 2
  book2.title = 'Harry Potter';
  book2.amount = 80;
  book1.sales = 10;
  book2.authorId = 1;
  
  const book3 = new Book();
  book3.id = 3
  book3.title = 'El secreto';
  book3.amount = 10;
  book3.authorId = 2;

  dataSource.manager.save(book1)
  dataSource.manager.save(book2)
  dataSource.manager.save(book3)

}
