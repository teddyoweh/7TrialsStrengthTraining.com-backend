import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(@Req() request: Request): string {
    console.log(request.body);
    return this.appService.getHello();
  }
}
