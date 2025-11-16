import { Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './baseModel';
import { UserEntity } from './user.entity';
import { ShowEntity } from './show.entity';
import { ShowSeatEntity } from './showSeat.entity';

@Entity({ name: 'tickets' })
export class TicketEntity extends BaseModel {
  // we will have user entity telling which user the ticket is booked for.
  // 1 user can have many tickets,but one ticket belongs to 1 user only
  @ManyToOne(() => UserEntity, (userEntity) => userEntity)
  user: UserEntity;

  // A ticket will be part of a single show, but a single show can have many tickets.
  @ManyToOne(() => ShowEntity, (showEntity) => showEntity)
  show: ShowEntity;

  // A single showSeat will be having many tickets , but each ticket will be part of a single showSeat
  @ManyToOne(() => ShowSeatEntity, (showSeatEntity) => showSeatEntity)
  showSeat: ShowSeatEntity;
}
