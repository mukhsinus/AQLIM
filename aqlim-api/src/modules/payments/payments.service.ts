import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  async findAll() {
    return { message: 'TODO: implement findAll payments' };
  }

  async findOne(id: string) {
    return { message: `TODO: implement findOne payment ${id}` };
  }

  async create(_userId: string, _dto: CreatePaymentDto) {
    return { message: 'TODO: implement create payment' };
  }

  async findByUser(_userId: string) {
    return { message: 'TODO: implement findByUser payments' };
  }
}
