import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { AuthController } from '../auth/controllers/auth.controller';
import { UserController } from '../user/controllers/user.controller';

@Module({})
export class MiddlewaresModule implements NestModule
{
  configure(consumer: MiddlewareConsumer): any
  {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(AuthController,UserController)
  }

}
