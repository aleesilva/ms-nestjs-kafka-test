import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices'
import { UserEntity } from './interfaces/user-entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('find-all')
  async findAll(): Promise<UserEntity[]> {
    return await this.appService.findAll()
  }

  @MessagePattern('create')
  async create(@Payload() data: any): Promise<UserEntity> {
    const { user } = data?.value
    if (user) {
      const response = await this.appService.create(user)
      console.log(response)
    }
    return
  }
}
