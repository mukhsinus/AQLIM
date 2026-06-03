import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorsService {
  async findAll() {
    return { message: 'TODO: implement findAll authors' };
  }

  async findOne(id: string) {
    return { message: `TODO: implement findOne author ${id}` };
  }

  async create(_dto: CreateAuthorDto) {
    return { message: 'TODO: implement create author' };
  }

  async update(id: string, _dto: Partial<CreateAuthorDto>) {
    return { message: `TODO: implement update author ${id}` };
  }

  async remove(id: string) {
    return { message: `TODO: implement remove author ${id}` };
  }
}
