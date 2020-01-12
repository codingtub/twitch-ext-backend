import { Body, Controller, Post } from '@nestjs/common';
import { ClickData, ClickService } from '../service/click.service';

@Controller('click')
export class ClickController {

  constructor(private readonly clickService: ClickService) {
  }

  @Get('/')
  public getHello(): string {
    return 'Hello!';
  }

  @Post('/')
  public getClickEvent(@Body() clickData: ClickData): ClickData {

    this.clickService.click(clickData);

    return clickData;
  }
}
