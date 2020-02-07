import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get("/hallo")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/jeroen")
  getJeroen(): string {
    return "Jeroen";
  }
  @Get("/status")
  getStatus(): string {
    return "Status";
  }
}
