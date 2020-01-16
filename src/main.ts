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
  const port = process.env.PORT || 8080;
  await app.listen(port).then(() => {
    console.log('Listening on port ' + process.env.PORT || 8080);
  });
}

bootstrap();
