import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './baseModel';
import { MovieEntity } from './movie.entity';
import { AudiEntity } from './audi.entity';
import { ShowSeatEntity } from './showSeat.entity';

@Entity({ name: 'shows' })
export class ShowEntity extends BaseModel {
  @Column({ type: 'timestamp' })
  showStartTime: Date;

  @Column({ type: 'timestamp' })
  showEndTime: Date;

  @Column({ type: 'date' })
  date: Date;

  // show is associated with a movie.
  // 1 movie can have many shows, but 1 show can be part of only 1 movie
  @ManyToOne(() => MovieEntity, (movieEntity) => movieEntity.shows)
  movie: MovieEntity;

  // 1 Audi can have many shows, but one show will be part of one audi.
  @ManyToOne(() => AudiEntity, (audiEntity) => audiEntity.shows)
  audi: AudiEntity;

  // 1 show can be part of many showSeats
  @OneToMany(() => ShowSeatEntity, (showSeatEntity) => showSeatEntity.show)
  showSeat: ShowSeatEntity[];
}
