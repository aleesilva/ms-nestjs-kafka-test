import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './interfaces/user-entity';

export interface User {
  name: string
  email: string
}

@Injectable()
export class AppService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

  async create(user: User): Promise<UserEntity> {
    return this.userRepository.save(user)
  }


}
