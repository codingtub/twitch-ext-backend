import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'ws';
import { ClickData, ClickService } from '../click/service/click.service';
import { OnModuleDestroy } from '@nestjs/common';
import { Subscription } from 'rxjs';

@WebSocketGateway(8081)
export class EventsGateway implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect, OnModuleDestroy {

  private clickSubscription: Subscription;

  @WebSocketServer()
  private server: Server;

  constructor(private readonly clickService: ClickService) {
  }

  afterInit(server: any): any {
    this.clickSubscription = this.clickService.click$.subscribe((clickData: ClickData) => {
      this.server.clients.forEach((client) => {
        client.send(JSON.stringify({event: 'click', data: clickData}));
      });
    });
  }

  public onModuleDestroy(): any {
    this.clickSubscription.unsubscribe();
  }

  handleConnection(client: WebSocket, ...args: any[]): any {
  }

  handleDisconnect(client: any): any {
  }

}
