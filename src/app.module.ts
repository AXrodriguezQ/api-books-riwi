import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { SalesModule } from './modules/sales/sales.module';
import { AuthorsModule } from './modules/authors/authors.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.db,
      autoLoadEntities: true,
      synchronize: true
    }),
    BooksModule,
    SalesModule, 
    AuthorsModule,
  ],
})
export class AppModule {}
