import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from 'util/api.decoretors';

@Controller('')
export class AppController {
  constructor(private service: AppService) {}

  @Public()
  @Get()
  endpoints() {
    return this.service.endpoints();
  }
}
