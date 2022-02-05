import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLove(): string {
    return 'Love Love Love!';
  }

  getFood(): string {
    return 'Cake Coffee Candy!';
  }
}
