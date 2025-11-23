import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './baseModel';
import { TicketEntity } from './ticket.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseModel {
  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => TicketEntity, (ticketEntity) => ticketEntity.user)
  tickets: TicketEntity[];
}
