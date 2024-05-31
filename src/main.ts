import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dataSource } from './migrations/data/source.data';
import { populateAuthorsTable } from './migrations/seeds/authors.seed';
import { populateBooksTable } from './migrations/seeds/books.seed';
import { populateSalesTable } from './migrations/seeds/sales.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dataSource.initialize().then(async () => {
    await populateAuthorsTable(dataSource)
    await populateBooksTable(dataSource)
    await populateSalesTable(dataSource)
  })
  .catch((err) => console.log(err))

  await app.listen(process.env.PORT);
}
bootstrap();
