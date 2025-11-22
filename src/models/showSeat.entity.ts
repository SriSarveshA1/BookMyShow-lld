import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './baseModel';
import { ShowEntity } from './show.entity';
import { SeatEntity } from './seat.entity';
import { ShowSeatStatus } from '../enums/common.enums';
import { TicketEntity } from './ticket.entity';

@Entity({ name: 'showSeats' })
export class ShowSeatEntity extends BaseModel {
  // this table basically helps in combining the (show,seat) relationship
  // 1 show can have many seats, but 1 seat will be part of one show.
  // --
  // so in this table there can be multiple rows with the same show id but
  // (show_id,seat_id) pair will be unique
  private _show: ShowEntity;

  @ManyToOne(() => ShowEntity, (showEntity) => showEntity.showSeat, {
    nullable: false,
  })
  get show(): ShowEntity {
    return this._show;
  }

  set show(value: ShowEntity) {
    this._show = value;
  }

  // And also this table contains multiple rows with same seatId with(show_id,seat_id) pair being unique
  // so many rows of seatId's here will be mapped to one single seatId.
  private _seat: SeatEntity;

  @ManyToOne(() => SeatEntity, (seatEntity) => seatEntity, { nullable: false })
  get seat(): SeatEntity {
    return this._seat;
  }

  set seat(value: SeatEntity) {
    this._seat = value;
  }

  private _showSeatStatus: ShowSeatStatus;

  @Column()
  get showSeatStatus(): ShowSeatStatus {
    return this._showSeatStatus;
  }

  set showSeatStatus(value: ShowSeatStatus) {
    this._showSeatStatus = value;
  }

  // Many show seat entities can have one ticket, and 1 ticket can have many show seats.
  private _ticket: TicketEntity;

  @ManyToOne(() => TicketEntity, (ticketEntity) => ticketEntity.id)
  public get ticket(): TicketEntity {
    return this._ticket;
  }
  public set ticket(value: TicketEntity) {
    this._ticket = value;
  }
}
