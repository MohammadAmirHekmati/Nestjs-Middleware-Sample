import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { MiddlewareTestController } from './controller/middleware-test.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  controllers:[MiddlewareTestController]
})
export class MiddlewareModule implements NestModule
{
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('middleware/test')
  }

}
