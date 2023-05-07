import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ViewService } from '../services/view.service';
import { Request } from 'express';
@Controller('views')
export class ViewController {
  constructor(private readonly appService: ViewService) {}

  @Post()
  findAll(@Req() request: Request): string {
    console.log(request.body);
    return this.appService.getHello();
  }
}
