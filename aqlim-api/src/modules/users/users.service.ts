import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async findAll() {
    return { message: 'TODO: implement findAll users' };
  }

  async findOne(id: string) {
    return { message: `TODO: implement findOne user ${id}` };
  }

  async update(id: string, _dto: UpdateUserDto) {
    return { message: `TODO: implement update user ${id}` };
  }

  async remove(id: string) {
    return { message: `TODO: implement remove user ${id}` };
  }
}
