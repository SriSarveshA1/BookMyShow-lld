import { Module } from '@nestjs/common';
import { DbEntityProvider } from '../repository/providers/custom.provider';
import { AudiRepository } from './repositories/mysql/audi.repository';
import { Database } from '../typeorm-cli.datasource';
import { ShowSeatRepository } from './repositories/mysql/showSeat.repository';
import { UserRepository } from './repositories/mysql/user.repository';
import { ShowRepository } from './repositories/mysql/show.repository';
import { TicketRepository } from './repositories/mysql/ticket.repository';

@Module({
  providers: [
    ...DbEntityProvider,
    AudiRepository,
    ...Database,
    ShowSeatRepository,
    UserRepository,
    ShowRepository,
    TicketRepository,
  ],
  exports: [
    ...DbEntityProvider,
    AudiRepository,
    ...Database,
    ShowSeatRepository,
    UserRepository,
    ShowRepository,
    TicketRepository,
  ],
})
export class RepositoryModule {}
