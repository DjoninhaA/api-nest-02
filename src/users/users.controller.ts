import {
  Post,
  Get,
  Patch,
  Param,
  Body,
  Controller,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Patch()
  update(@Param('id') id: string, @Body() data: updateUserDto) {
    return this.userService.update(id, data);
  }

  @Delete()
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
