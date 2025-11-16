import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './baseModel';
import { AudiEntity } from './audi.entity';
import { SeatType } from 'src/enums/common.enums';

@Entity({ name: 'seats' })
export class SeatEntity extends BaseModel {
  @Column()
  seatNumber: number;

  @Column()
  seatType: SeatType;

  @Column()
  row: number;

  @Column()
  col: number;

  // 1 audi can have many seats but 1 seat belongs to 1 audi
  // audi -> seat is 1 to many ,but seat -> audi is many to 1
  @ManyToOne(() => AudiEntity, (audiEntity) => audiEntity.seats)
  audi: AudiEntity;
}
