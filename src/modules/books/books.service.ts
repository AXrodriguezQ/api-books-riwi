import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { PaginationQuery } from './dto/pagination-book.dto';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<string> {
    const book = this.bookRepository.create(createBookDto);
    return 'book added susseful';
  }

  async findAll({ limit, offset }: PaginationQuery): Promise<Book[]> {
    return await this.bookRepository.find({ relations: ['author'], skip: offset, take: limit });
  }

  async findOne(id: number): Promise<Book> {

    const query = this.bookRepository.createQueryBuilder('book')
      .leftJoinAndSelect('book.author', 'author')
      .where('book.id = :id', { id })

    const book = await query.getOne();

    if ( !book ) throw new Error(`Book with id ${id} not found`);

    return book

  }

  async update(id: number, { amount, price }: UpdateBookDto) {
    const book: Book = await this.bookRepository.preload({
      id,
      amount,
      price,
    });

    if (!book) throw new Error(`Book with id ${id} not found`);

    await this.bookRepository.save(book);
    return book;
  }

  remove(id: number) {
    return this.bookRepository.softDelete(id);
  }

}
