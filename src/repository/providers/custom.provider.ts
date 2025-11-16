import { AudiEntity } from 'src/models/audi.entity';
import { DataSource } from 'typeorm';

export const DbEntityProvider = [
  {
    provide: 'AUDI_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AudiEntity),
    inject: ['DATA_SOURCE'],
  },
];
