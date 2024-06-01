import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { PaginationQuery } from './dto/pagination-author.dto';

@Injectable()
export class AuthorsService {

  constructor(
    @InjectRepository(Author) private readonly authorRepository: Repository<Author>,
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    this.authorRepository.create(createAuthorDto)
    return 'author added successfully';
  }

  async findAll({ limit, offset }: PaginationQuery) {
    return await this.authorRepository.find({ relations: ['books'], skip: offset, take: limit});
  }

  async findOne(id: number) {

    const query = this.authorRepository.createQueryBuilder('author')
    .leftJoinAndSelect('author.books', 'books')
    .where('author.id = :id', { id })

    const author = await query.getOne();

    if ( !author ) throw new Error(`Author with id ${id} not found`);

    return author

  }

  async update(id: number, { name }: UpdateAuthorDto) {
    const author: Author = await this.authorRepository.preload({
      id,
      name
    });

    if (!author) throw new Error(`author with id ${id} not found`);

    await this.authorRepository.save(author);
    return author;
  }

  remove(id: number) {
    return this.authorRepository.softDelete(id);
  }
}
