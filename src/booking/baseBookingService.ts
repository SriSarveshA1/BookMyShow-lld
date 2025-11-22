import { TicketEntity } from 'src/models/ticket.entity';

export interface BookingService {
  blockSeats(
    showId: string,
    seatIds: string[],
    userId: string,
  ): Promise<boolean>;

  bookTickets(
    showId: string,
    seatIds: string[],
    userId: string,
  ): Promise<TicketEntity>;
  // We can have more methods like unlock locks on the seatIds.
}
