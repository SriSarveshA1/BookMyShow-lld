import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './baseModel';
import { ShowEntity } from './show.entity';

@Entity({ name: 'movies' })
export class MovieEntity extends BaseModel {
  @Column()
  name: string;

  @OneToMany(() => ShowEntity, (showEntity) => showEntity.movie)
  shows: ShowEntity[];
}
