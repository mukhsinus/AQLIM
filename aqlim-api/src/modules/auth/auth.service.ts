import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  async register(_dto: RegisterDto) {
    return { message: 'TODO: implement register' };
  }

  async login(_dto: LoginDto) {
    return { message: 'TODO: implement login' };
  }

  async refreshTokens(_userId: string) {
    return { message: 'TODO: implement refresh tokens' };
  }

  async logout(_userId: string) {
    return { message: 'TODO: implement logout' };
  }
}
