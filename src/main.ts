/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';

import { APIModules } from './modules';
import { Env } from './env';
import mongoose from 'mongoose';
const env = new Env();


async function bootstrap() {
  const app = await NestFactory.create(APIModules);
  console.log(env.env().URI)
  mongoose.connect(env.env().URI).then(
    () => {
      
      console.log('Database is connected');
    },
    (err) => {
      console.log('Can not connect to the database' + err);
    },
  );

  app.enableCors();
  await app.listen(4000);
}
bootstrap();
