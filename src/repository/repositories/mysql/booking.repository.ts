import { Inject } from '@nestjs/common';
import { TicketEntity } from 'src/models/ticket.entity';
import { IBookingRepository } from '../base.repository';
import { DataSource } from 'typeorm';

export class BookingRepository implements IBookingRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private database: DataSource,
  ) {}

  async bookTicket(
    ticket: TicketEntity,
    userId: string,
    showId: string,
    seatIds: string[],
  ): Promise<TicketEntity> {
    const queryRunner = await this.database.createQueryRunner();

    // We can specify the isolation level in which we want the transactions to happen
    await queryRunner.startTransaction('SERIALIZABLE');
    let ticketEntity;

    try {
      const placeholders = seatIds.map(() => '?').join(', ');

      console.log('ticket about to be inserted = ', ticket);

      await queryRunner.manager.save(ticket);

      await queryRunner.manager.query(
        `UPDATE showSeats set ticketId=? where showId=? and seatId IN (${placeholders})`,
        [ticket.id, showId, ...seatIds],
      );

      await queryRunner.commitTransaction();
    } catch (e: unknown) {
      console.log('Error during the transaction = ', e);
      await queryRunner.rollbackTransaction();
    } finally {
      ticketEntity = await queryRunner.manager.findOneBy(TicketEntity, {
        id: ticket.id,
      });
      await queryRunner.release();
    }

    return ticketEntity;
  }
}
