import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewService {
  getHello(): string {
    return 'Hello World!';
  }
}
