import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './interfaces/users.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Will check if username and password are valid (env based)
  async validateUser(inputName: string, inputPass: string): Promise<any> {
    const user = {
      username: process.env.AUTH_USER,
      password: process.env.AUTH_PASS,
    };
    if (inputName === user.username && inputPass === user.password) {
      return { response: 'Authentication Success!' };
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username };
    return {
      access_token: 'Bearer ' + this.jwtService.sign(payload),
    };
  }
}
