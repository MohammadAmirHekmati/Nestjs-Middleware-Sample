import { Controller, Get } from '@nestjs/common';

@Controller('middleware')
export class MiddlewareTestController {


  @Get('test')
  async middlewareTest():Promise<string>
  {
    return 'Ok'
  }
}