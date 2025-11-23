import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/cache/redis.service';
import { ShowSeatRepository } from 'src/repository/repositories/mysql/showSeat.repository';
import { BookingService } from './baseBookingService';
import { TicketEntity } from 'src/models/ticket.entity';
import { ShowSeatEntity } from 'src/models/showSeat.entity';
import { ShowSeatStatus } from 'src/enums/common.enums';
import { CHECK_FOR_EXISTENCE_AND_LOCK } from './constants/luaScripts';
import { IsNumber } from 'class-validator';
import { ShowRepository } from 'src/repository/repositories/mysql/show.repository';
import { UserRepository } from 'src/repository/repositories/mysql/user.repository';
import { TicketRepository } from 'src/repository/repositories/mysql/ticket.repository';
import { BookingRepository } from 'src/repository/repositories/mysql/booking.repository';

@Injectable()
export class RedisBasedBookingService implements BookingService {
  // we use redis based seat locking mechanism for seat booking
  constructor(
    private redisService: RedisService,
    private showSeatRepository: ShowSeatRepository,
    private showRepository: ShowRepository,
    private userRepository: UserRepository,
    private ticketRepository: TicketRepository,
    private bookingRepository: BookingRepository,
  ) {}

  async blockSeats(
    showId: string,
    seatIds: string[],
    userId: string,
  ): Promise<boolean> {
    // Step 1 (DB level)
    //       Check showSeat entities → ensure seat exists + is OPEN.
    // Step 2  → Single Lua script
    //  Atomic:
    //      Check redis locks (key existence)
    //      Lock seats
    //      Add seats to user-tracking set
    //      Return result
    // Step 3:
    //      Return success/failure to user.
    const showSeats: ShowSeatEntity[] =
      await this.showSeatRepository.findAllByShowIdAndSeatIds(showId, seatIds);

    for (const showSeat of showSeats) {
      if (showSeat.showSeatStatus != ShowSeatStatus.OPEN) {
        return false;
      }
    }

    // Frame the redis keys for seat locking
    const luaScriptExpression = await this.redisService.evalLuaScript(
      CHECK_FOR_EXISTENCE_AND_LOCK,
      showSeats.length,
      ...showSeats.map((showSeat) => `SHOW_SEAT:${showSeat.id}`),
      userId,
      60,
      `USER_SHOW_ID:${userId}`,
    );

    console.log('luaScriptExpression = ', luaScriptExpression);

    if (IsNumber(luaScriptExpression) && luaScriptExpression == 1) {
      return true;
    }

    return false;
  }

  async bookTickets(
    showId: string,
    seatIds: string[],
    userId: string,
  ): Promise<TicketEntity> {
    // we will check if this user id has a set (show seat id) which has all the seats from the input,
    // if yes we will be able to book the ticket or else throw error.
    // then we just create a ticket entity and save it in db.
    const seatsLockedForUser = await this.redisService.getValueFromSet(
      `USER_SHOW_ID:${userId}`,
    );

    // If not even one seat is not present in the set we can't book the ticket,
    // all the seats should be blocked under the userId.
    const showSeats: ShowSeatEntity[] =
      await this.showSeatRepository.findAllByShowIdAndSeatIds(showId, seatIds);

    for (const showSeat of showSeats) {
      if (!seatsLockedForUser.includes(`SHOW_SEAT:${showSeat.id}`)) {
        // If the given seat is not part of the locked seats we can't book the ticket with that seat as part of the input.
        // we throw error.

        // Todo: we should be using a custom error class here.
        throw new Error('Seat not locked for user, cannot book ticket');
      }
    }

    // we try to create the ticket entity
    const userEntity = await this.userRepository.getUserById(userId);
    const showEntity = await this.showRepository.getShowById(showId);

    // We can use builder pattern here
    const ticketEntity = new TicketEntity();
    // These will internally call the getters and setters.
    ticketEntity.show = showEntity;
    ticketEntity.user = userEntity;
    ticketEntity.showSeat = showSeats;

    // await this.ticketRepository.createTicket(ticketEntity);

    // const updatedShowEntities =
    //   await this.showSeatRepository.bulkUpdateShowSeatsWithTicket(
    //     showId,
    //     seatIds,
    //     ticketEntity.id,
    //   );
    return await this.bookingRepository.bookTicket(
      ticketEntity,
      userId,
      showId,
      seatIds,
    );
  }
}
