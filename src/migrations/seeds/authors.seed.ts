import { Author } from "src/modules/authors/entities/author.entity";
import { DataSource } from "typeorm";
import { allAuthors } from "../interfaces/authors";

export async function populateAuthorsTable( dataSource: DataSource ) {

    allAuthors.forEach( (author) => {
        dataSource.manager.save( Author, author )
    })

}
