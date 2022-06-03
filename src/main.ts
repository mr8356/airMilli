import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사 (미들웨어와 흡사)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted : true,//형식 안맞으면 거절
    transform : true //자동 자료형 변환
  }))
  await app.listen(3000);
}
bootstrap();

