import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MiddlewaresModule } from './middlewares/middlewares.module';


@Module({
  imports: [UserModule, AuthModule, MiddlewaresModule]
})
export class AppModule {}
