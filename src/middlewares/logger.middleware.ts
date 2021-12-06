import { Injectable, Logger, NestMiddleware, RequestMethod } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware
{
  private logger=new Logger()

  use(req: any, res: any, next: () => void): any {

    const requestRoute=req.originalUrl
      this.logger.log(`Request Route Address: ${requestRoute}`)

    const requestMethod=req.method
      this.logger.log(`Request Method is:  ${requestMethod}`)

    next()
  }

}