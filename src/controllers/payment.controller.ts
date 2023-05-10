import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  findAll(@Req() request: Request): string {
    console.log('payments');
    console.log(request.body);
    return this.paymentService.getHello();
  }
  @Post('/add')
  addPayment(@Body() body: any): string {
    return this.paymentService.makePayment(body);
  }
}
