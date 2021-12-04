import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MiddlewareModule } from './middleware/middleware.module';


@Module({
  imports: [MiddlewareModule]
})
export class AppModule {}
