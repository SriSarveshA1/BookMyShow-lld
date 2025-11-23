import { IsNotEmpty } from 'class-validator';

export class CreateBookingRequestDTO {
  // we will have showId, seatIds, userId and need to have class validator decorators.
  @IsNotEmpty()
  showId: string;

  @IsNotEmpty()
  seatIds: string[];

  @IsNotEmpty()
  userId: string;
}

export class CreateLookSeatsRequestDTO {
  @IsNotEmpty()
  showId: string;

  @IsNotEmpty()
  seatIds: string[];

  @IsNotEmpty()
  userId: string;
}
