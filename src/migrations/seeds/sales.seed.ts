import { Sale } from "src/modules/sales/entities/sale.entity";
import { DataSource } from "typeorm";
import { allSales } from "../interfaces/sales";

export async function populateSalesTable( dataSource: DataSource ) {

    allSales.forEach( (sales) => {
        dataSource.manager.save( Sale, sales )
    })

}
