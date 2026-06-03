import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookFilterDto } from './dto/book-filter.dto';

@Injectable()
export class BooksService {
  async findAll(_filters: BookFilterDto) {
    return { message: 'TODO: implement findAll books' };
  }

  async findOne(id: string) {
    return { message: `TODO: implement findOne book ${id}` };
  }

  async create(_dto: CreateBookDto) {
    return { message: 'TODO: implement create book' };
  }

  async update(id: string, _dto: UpdateBookDto) {
    return { message: `TODO: implement update book ${id}` };
  }

  async remove(id: string) {
    return { message: `TODO: implement remove book ${id}` };
  }
}
