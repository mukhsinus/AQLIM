import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';

@Injectable()
export class CollectionsService {
  async findAll() {
    return { message: 'TODO: implement findAll collections' };
  }

  async findOne(id: string) {
    return { message: `TODO: implement findOne collection ${id}` };
  }

  async create(_dto: CreateCollectionDto) {
    return { message: 'TODO: implement create collection' };
  }

  async update(id: string, _dto: Partial<CreateCollectionDto>) {
    return { message: `TODO: implement update collection ${id}` };
  }

  async remove(id: string) {
    return { message: `TODO: implement remove collection ${id}` };
  }
}
