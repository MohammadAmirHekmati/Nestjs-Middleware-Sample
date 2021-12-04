import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware
{
  private logger=new Logger()
  async use(req: any, res: any, next: () => void):Promise<any>
  {
    const route=req.originalUrl
    // const fullUrl=host.concat(route)
  this.logger.log(route)
    next()
  }

}