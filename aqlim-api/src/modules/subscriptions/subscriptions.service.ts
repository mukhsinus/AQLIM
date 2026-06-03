import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';

@Injectable()
export class SubscriptionsService {
  async findAll() {
    return { message: 'TODO: implement findAll subscriptions' };
  }

  async findOne(id: string) {
    return { message: `TODO: implement findOne subscription ${id}` };
  }

  async create(_dto: CreateSubscriptionDto) {
    return { message: 'TODO: implement create subscription' };
  }

  async subscribe(_userId: string, _planId: string) {
    return { message: 'TODO: implement user subscribe' };
  }

  async remove(id: string) {
    return { message: `TODO: implement remove subscription ${id}` };
  }
}
