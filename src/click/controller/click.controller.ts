import { Body, Controller, Post } from '@nestjs/common';
import { ClickData, ClickService } from '../service/click.service';

@Controller('click')
export class ClickController {

  constructor(private readonly clickService: ClickService) {
  }

  @Post('/')
  public getClickEvent(@Body() clickData: ClickData): ClickData {

    this.clickService.click(clickData);

    return clickData;
  }
}
