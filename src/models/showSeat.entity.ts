import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './baseModel';
import { ShowEntity } from './show.entity';
import { SeatEntity } from './seat.entity';
import { ShowSeatStatus } from 'src/enums/common.enums';

@Entity({ name: 'showSeats' })
export class ShowSeatEntity extends BaseModel {
  // this table basically helps in combining the (show,seat) relationship
  // 1 show can have many seats, but 1 seat will be part of one show.
  // --
  // so in this table there can be multiple rows with the same show id but
  // (show_id,seat_id) pair will be unique
  @ManyToOne(() => ShowEntity, (showEntity) => showEntity.showSeat, {
    nullable: false,
  })
  show: ShowEntity;

  // And also this table contains multiple rows with same seatId with(show_id,seat_id) pair being unique
  // so many rows of seatId's here will be mapped to one single seatId.
  @ManyToOne(() => SeatEntity, (seatEntity) => seatEntity, { nullable: false })
  seat: SeatEntity;

  @Column()
  showSeatStatus: ShowSeatStatus;
}
