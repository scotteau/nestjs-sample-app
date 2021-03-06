import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('love')
  getLove(): string {
    return this.appService.getLove();
  }

  @Get('eat')
  getFood(): string {
    return this.appService.getFood();
  }
}
