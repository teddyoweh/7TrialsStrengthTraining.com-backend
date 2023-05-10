import { Module } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { PaymentController } from 'src/controllers/payment.controller';
@Module({
  imports: [],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
