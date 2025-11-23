import { Module } from '@nestjs/common';
import { DbEntityProvider } from '../repository/providers/custom.provider';
import { Database } from '../typeorm-cli.datasource';
import { ShowSeatRepository } from './repositories/mysql/showSeat.repository';
import { UserRepository } from './repositories/mysql/user.repository';
import { ShowRepository } from './repositories/mysql/show.repository';
import { TicketRepository } from './repositories/mysql/ticket.repository';
import { BookingRepository } from './repositories/mysql/booking.repository';

@Module({
  providers: [
    ...DbEntityProvider,
    ...Database,
    ShowSeatRepository,
    UserRepository,
    ShowRepository,
    TicketRepository,
    BookingRepository,
  ],
  exports: [
    ...DbEntityProvider,
    ...Database,
    ShowSeatRepository,
    UserRepository,
    ShowRepository,
    TicketRepository,
    BookingRepository,
  ],
})
export class RepositoryModule {}
