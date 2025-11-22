import { AudiEntity } from 'src/models/audi.entity';
import { SeatEntity } from 'src/models/seat.entity';
import { ShowEntity } from 'src/models/show.entity';
import { ShowSeatEntity } from 'src/models/showSeat.entity';
import { TicketEntity } from 'src/models/ticket.entity';
import { UserEntity } from 'src/models/user.entity';
import { DataSource } from 'typeorm';

export const DbEntityProvider = [
  {
    provide: 'AUDI_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AudiEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'SHOW_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ShowEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'SEAT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SeatEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'SHOW_SEAT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ShowSeatEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'TICKET_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TicketEntity),
    inject: ['DATA_SOURCE'],
  },
];
