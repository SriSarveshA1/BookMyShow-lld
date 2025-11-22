import { Inject, Injectable } from '@nestjs/common';
import { IShowSeatRepository } from '../base.repository';
import { Repository } from 'typeorm';
import { ShowSeatEntity } from 'src/models/showSeat.entity';

@Injectable()
export class ShowSeatRepository implements IShowSeatRepository {
  constructor(
    @Inject('SHOW_SEAT_REPOSITORY')
    private showSeatRepository: Repository<ShowSeatEntity>,
  ) {}

  async findAllByShowIdAndSeatIds(
    showId: string,
    seatIds: string[],
  ): Promise<ShowSeatEntity[]> {
    return this.showSeatRepository
      .createQueryBuilder('showSeats')
      .where('showId = :showId', { showId: showId })
      .andWhere('seatId IN (:...ids)', { ids: seatIds })
      .getMany();
  }
}
