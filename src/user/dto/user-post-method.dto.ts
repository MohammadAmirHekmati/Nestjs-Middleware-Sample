import { ApiProperty } from '@nestjs/swagger';

export class UserPostMethodDto {

  @ApiProperty()
  name:string
}