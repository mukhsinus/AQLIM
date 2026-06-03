import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  async findAll() {
    return { message: 'TODO: implement findAll reviews' };
  }

  async findByBook(bookId: string) {
    return { message: `TODO: implement findByBook reviews ${bookId}` };
  }

  async create(_userId: string, _dto: CreateReviewDto) {
    return { message: 'TODO: implement create review' };
  }

  async remove(id: string) {
    return { message: `TODO: implement remove review ${id}` };
  }
}
