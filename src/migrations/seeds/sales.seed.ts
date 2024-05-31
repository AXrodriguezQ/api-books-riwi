import { Sale } from "src/modules/sales/entities/sale.entity";
import { DataSource } from "typeorm";

export async function populateSalesTable( dataSource: DataSource ) {

    const sale1 = new Sale();
    sale1.date = new Date();
    sale1.bookId = 1;

    const sale2 = new Sale();
    sale2.date = new Date();
    sale2.bookId = 1;

    dataSource.manager.save(sale1)
    dataSource.manager.save(sale2)

}
