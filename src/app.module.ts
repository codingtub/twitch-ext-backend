import { Module } from '@nestjs/common';
import { ClickController } from './click/controller/click.controller';
import { EventsGateway } from './gateway/events.gateway';
import { ClickService } from './click/service/click.service';

@Module({
  imports: [
  ],
  controllers: [
    ClickController,
  ],
  providers: [
    EventsGateway,
    ClickService,
  ],
})
export class AppModule {
}
