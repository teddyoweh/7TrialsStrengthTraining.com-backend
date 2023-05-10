import { Module } from '@nestjs/common';
import { AppModule } from './module/app.module';
import { ViewsModule } from './module/views.module';
import { PaymentModule } from './module/payment.module';

@Module({
  imports: [
    AppModule,
    ViewsModule,
    PaymentModule,
    // Add more modules here
  ],
})
export class APIModules {}
