import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './baseModel';
import { TheatreEntity } from './theatre.entity';

@Entity({ name: 'cities' })
export class CityEntity extends BaseModel {
  @Column({ nullable: false, unique: true })
  name: string;

  @OneToMany(() => TheatreEntity, (theatre) => theatre.city)
  theatres: TheatreEntity[];
}
