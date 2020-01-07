import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new WsAdapter(app));
  app.enableCors({
    origin: '*',
    allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
    methods: [
      'GET',
      'POST',
      'OPTIONS',
    ],
  });
  await app.listen(8080);
}

bootstrap();
