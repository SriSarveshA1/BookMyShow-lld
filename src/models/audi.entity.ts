import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './baseModel';
import { TheatreEntity } from './theatre.entity';
import { SeatEntity } from './seat.entity';
import { ShowEntity } from './show.entity';

@Entity({ name: 'audies' })
export class AudiEntity extends BaseModel {
  @Column()
  name: string;

  @Column()
  capacity: string;

  // 1 theatre can have multiple audies but 1 audi belongs to 1 theatre
  @ManyToOne(() => TheatreEntity, (theatreEntity) => theatreEntity.audies)
  theatre: TheatreEntity;

  // 1 audi can have many seats
  @OneToMany(() => SeatEntity, (seatEntity) => seatEntity.audi)
  seats: SeatEntity[];

  // 1 audi can have many shows
  @OneToMany(() => ShowEntity, (showEntity) => showEntity.audi)
  shows: ShowEntity[];
}
