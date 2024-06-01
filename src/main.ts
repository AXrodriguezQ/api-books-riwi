import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dataSource } from './migrations/data/source.data';
import { populateAuthorsTable } from './migrations/seeds/authors.seed';
import { populateBooksTable } from './migrations/seeds/books.seed';
import { populateSalesTable } from './migrations/seeds/sales.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.POPULATION == 'true') {
    dataSource.initialize().then(async () => {
      await populateAuthorsTable(dataSource)
      await populateBooksTable(dataSource)
      await populateSalesTable(dataSource)
      console.log('the database has been filled correctly');
    })
    .catch((err) => console.log(err))  
  }

  await app.listen(process.env.PORT);
  console.log(`application running on: http://localhost:${process.env.PORT}`);
}
bootstrap();
