import { Book } from "src/modules/books/entities/book.entity";
import { DataSource } from "typeorm";
import { allBooks } from "../interfaces/books";

export async function populateBooksTable( dataSource: DataSource ) {

  allBooks.forEach( (book) => {
    dataSource.manager.save( Book, book )
  })  

}
