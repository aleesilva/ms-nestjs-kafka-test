import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { AppModule } from './app.module';

const logger = new Logger('main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
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
  await app.listen(() => logger.log('user service is running'));
}
bootstrap();
