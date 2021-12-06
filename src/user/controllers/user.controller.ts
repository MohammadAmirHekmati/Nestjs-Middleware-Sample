import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthPostMethodDto } from '../../auth/dto/auth-post-method.dto';
import { UserPostMethodDto } from '../dto/user-post-method.dto';

@ApiTags('User')
@Controller('user')
export class UserController {

  @Get('get')
  async getMethodTest():Promise<any>
  {
    return 'Get Method OK'
  }

  @Post('post')
  async postMethodTest(@Body() userPostMethodDto:UserPostMethodDto):Promise<any>
  {
    return userPostMethodDto.name
  }
}