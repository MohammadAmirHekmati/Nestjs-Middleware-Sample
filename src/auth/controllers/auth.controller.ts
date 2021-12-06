import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthPostMethodDto } from '../dto/auth-post-method.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  @Get('get')
  async getMethodTest():Promise<any>
  {
    return 'Get Method OK'
  }

  @Post('post')
  async postMethodTest(@Body() authPostMethodDto:AuthPostMethodDto):Promise<any>
  {
    return authPostMethodDto.name
  }
}