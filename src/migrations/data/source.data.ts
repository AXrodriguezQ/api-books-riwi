import { Author } from "src/modules/authors/entities/author.entity";
import { Book } from "src/modules/books/entities/book.entity";
import { Sale } from "src/modules/sales/entities/sale.entity";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: 'postgres',
  host : process.env.DATABASE_HOST,
  port : parseInt(process.env.DATABASE_PORT),
  username : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  database : 'postgres',
  entities: [Author, Sale, Book],
  synchronize: true,
});
