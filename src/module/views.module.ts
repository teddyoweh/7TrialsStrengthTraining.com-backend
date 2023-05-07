import { Module } from '@nestjs/common';
import { ViewController } from '../controllers/views.controller';
import { ViewService } from '../services/view.service';

@Module({
  imports: [],
  controllers: [ViewController],
  providers: [ViewService],
})
export class ViewsModule {}
