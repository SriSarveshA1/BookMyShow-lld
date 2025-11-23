import { Inject, Injectable } from '@nestjs/common';
import { IShowSeatRepository } from '../base.repository';
import { In, Repository } from 'typeorm';
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

  async bulkUpdateShowSeatsWithTicket(
    showId: string,
    seatIds: string[],
    ticketId: string,
  ): Promise<ShowSeatEntity> {
    const placeholders = seatIds.map(() => '?').join(', ');
    this.showSeatRepository.query(
      `UPDATE showSeats set ticketId=? where showId=? and seatId IN (${placeholders})`,
      [ticketId, showId, ...seatIds],
    );
    return this.showSeatRepository.findOneBy({
      show: { id: showId },
      seat: { id: In(seatIds) },
    });
  }
}
