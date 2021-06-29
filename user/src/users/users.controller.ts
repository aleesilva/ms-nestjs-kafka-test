import { Body, Controller, Get, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';

@Controller('users')
export class UsersController implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: '_user',
        brokers: ['localhost:9092']
      },
      consumer: {
        groupId: 'user-consumer',
        allowAutoTopicCreation: true
      }
    }
  })

  private client: ClientKafka

  async onModuleInit() {
    const topics = ['find-all', 'create']

    topics.forEach(async topic => {
      this.client.subscribeToResponseOf(topic)
      await this.client.connect()
    })
  }

  @Get()
  findAll(): Observable<User[]> {
    return this.client.send('find-all', {})
  }


  @Post()
  create(@Body() user: User): Observable<User> {
    return this.client.send('create', { user })
  }

}
