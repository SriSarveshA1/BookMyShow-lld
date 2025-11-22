import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './baseModel';
import { UserEntity } from './user.entity';
import { ShowEntity } from './show.entity';
import { ShowSeatEntity } from './showSeat.entity';

@Entity({ name: 'tickets' })
export class TicketEntity extends BaseModel {
  // we will have user entity telling which user the ticket is booked for.
  // 1 user can have many tickets,but one ticket belongs to 1 user only
  private _user: UserEntity;
  @ManyToOne(() => UserEntity, (userEntity) => userEntity)
  public get user(): UserEntity {
    return this._user;
  }
  public set user(value: UserEntity) {
    this._user = value;
  }

  // A ticket will be part of a single show, but a single show can have many tickets.
  private _show: ShowEntity;
  @ManyToOne(() => ShowEntity, (showEntity) => showEntity)
  public get show(): ShowEntity {
    return this._show;
  }
  public set show(value: ShowEntity) {
    this._show = value;
  }

  // A single showSeat will be having many tickets , but each ticket will be part of a single showSeat
  private _showSeat: ShowSeatEntity[];
  @OneToMany(() => ShowSeatEntity, (showSeatEntity) => showSeatEntity.ticket)
  public get showSeat(): ShowSeatEntity[] {
    return this._showSeat;
  }
  public set showSeat(value: ShowSeatEntity[]) {
    this._showSeat = value;
  }
}
