import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './baseModel';
import { CityEntity } from './city.entity';
import { AudiEntity } from './audi.entity';

@Entity({ name: 'theatres' })
export class TheatreEntity extends BaseModel {
  @Column()
  name: string;

  @ManyToOne(() => CityEntity, (city) => city.theatres)
  city: CityEntity;

  @OneToMany(() => AudiEntity, (audi) => audi.theatre)
  audies: AudiEntity[];
}
