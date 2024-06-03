import config from "src/config/config";
import { Author } from "src/modules/authors/entities/author.entity";
import { Book } from "src/modules/books/entities/book.entity";
import { Sale } from "src/modules/sales/entities/sale.entity";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: 'postgres',
  host : config().database.host,
  port : config().database.port,
  username : config().database.username,
  password : config().database.password,
  database : 'postgres',
  entities: [Author, Sale, Book],
  synchronize: true,
});
