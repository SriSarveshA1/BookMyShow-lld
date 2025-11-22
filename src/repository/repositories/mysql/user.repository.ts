import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../base.repository';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/models/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUserById(userId: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id: userId });
  }
}
