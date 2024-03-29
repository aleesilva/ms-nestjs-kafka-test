import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/interfaces/user-entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    database: 'users',
    entities: [UserEntity],
    synchronize: true
  })]
})
export class DatabaseModule { }
