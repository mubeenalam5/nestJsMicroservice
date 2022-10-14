import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return this.appService.getUsers();
  }

  @Post()
  createUser(@Body(ValidationPipe) createUserRequest: CreateUserRequest) {
    this.appService.createUser(createUserRequest);
  }
}
