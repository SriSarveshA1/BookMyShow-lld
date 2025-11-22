import { Inject } from '@nestjs/common';
import { ITicketRepository } from '../base.repository';
import { Repository } from 'typeorm';
import { TicketEntity } from 'src/models/ticket.entity';

export class TicketRepository implements ITicketRepository {
  constructor(
    @Inject('TICKET_REPOSITORY')
    private ticketRepository: Repository<TicketEntity>,
  ) {}

  async createTicket(ticket: TicketEntity): Promise<TicketEntity> {
    return this.ticketRepository.save(ticket);
  }
}
