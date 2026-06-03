import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  async findAll() {
    return { message: 'TODO: implement findAll categories' };
  }

  async findOne(id: string) {
    return { message: `TODO: implement findOne category ${id}` };
  }

  async create(_dto: CreateCategoryDto) {
    return { message: 'TODO: implement create category' };
  }

  async update(id: string, _dto: Partial<CreateCategoryDto>) {
    return { message: `TODO: implement update category ${id}` };
  }

  async remove(id: string) {
    return { message: `TODO: implement remove category ${id}` };
  }
}
