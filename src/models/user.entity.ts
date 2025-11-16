import { Column, Entity } from 'typeorm';
import { BaseModel } from './baseModel';

@Entity({ name: 'users' })
export class UserEntity extends BaseModel {
  @Column()
  name: string;

  @Column()
  email: string;
}
