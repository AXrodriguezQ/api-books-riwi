import { Author } from "src/modules/authors/entities/author.entity";
import { DataSource } from "typeorm";

export async function populateAuthorsTable( dataSource: DataSource ) {

    const author1 = new Author();
    author1.id = 1;
    author1.name = 'J.K.Rowling';
        
    const author2 = new Author();
    author2.id = 2;
    author2.name = 'J.R.R.Tolkien';
    
    dataSource.manager.save(author1)
    dataSource.manager.save(author2)
    
}
