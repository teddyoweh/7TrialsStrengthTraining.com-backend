import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ViewsModule } from './module/views.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
