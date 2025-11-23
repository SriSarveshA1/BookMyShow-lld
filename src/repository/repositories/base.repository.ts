import { ShowSeatEntity } from 'src/models/showSeat.entity';
import { UserEntity } from 'src/models/user.entity';
import { ShowEntity } from 'src/models/show.entity';
import { TicketEntity } from 'src/models/ticket.entity';

// like wise we can create repositories for all the entities.
export interface IShowSeatRepository {
  // We can add more methods
  findAllByShowIdAndSeatIds(
    showId: string,
    seatIds: [string],
  ): Promise<ShowSeatEntity[]>;

  bulkUpdateShowSeatsWithTicket(
    showId: string,
    seatIds: string[],
    ticketId: string,
  ): Promise<ShowSeatEntity>;
}

export interface IUserRepository {
  getUserById(userId: string): Promise<UserEntity>;
}

export interface IShowRepository {
  getShowById(userId: string): Promise<ShowEntity>;
}

export interface ITicketRepository {
  createTicket(ticket: TicketEntity): Promise<TicketEntity>;
}

export interface IBookingRepository {
  // book ticket
  bookTicket(
    ticket: TicketEntity,
    userId: string,
    showId: string,
    seatIds: string[],
  ): Promise<TicketEntity>;
}
