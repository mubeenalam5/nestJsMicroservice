import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-suer.event';
import { CreateUserRequest } from './create-user-request.dto';

@Injectable()
export class AppService {

  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  ) { }

  getUsers() {

    this.communicationClient.emit(
      'saved_users',
      this.users
    );;
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email)
    );
  }
}
