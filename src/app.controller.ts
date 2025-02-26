import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  @Get('goodbye')
  getGoodbye(): { message: string } {
    return this.appService.getGoodbye();
  }
  @Get('buongiorno')
  getBuongiorno(): { message: string } {
    return this.appService.getBuongiorno();
  }
  @Get('buonasera')
  getBuonasera(): string {
    return this.appService.getBuonasera().message;
  }
}
