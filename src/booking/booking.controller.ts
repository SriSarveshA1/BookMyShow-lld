import { Body, Controller, Post } from '@nestjs/common';
import {
  CreateBookingRequestDTO,
  CreateLookSeatsRequestDTO,
} from './dtos/request';
import { TicketEntity } from 'src/models/ticket.entity';
import { RedisBasedBookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: RedisBasedBookingService) {}

  @Post('lock')
  async blockSeats(
    @Body() createLookSeatsRequestDTO: CreateLookSeatsRequestDTO,
  ): Promise<boolean> {
    return await this.bookingService.blockSeats(
      createLookSeatsRequestDTO.showId,
      createLookSeatsRequestDTO.seatIds,
      createLookSeatsRequestDTO.userId,
    );
  }

  @Post('')
  async bookSeats(
    @Body() createBookingRequestDTO: CreateBookingRequestDTO,
  ): Promise<TicketEntity> {
    return await this.bookingService.bookTickets(
      createBookingRequestDTO.showId,
      createBookingRequestDTO.seatIds,
      createBookingRequestDTO.userId,
    );
  }
}
