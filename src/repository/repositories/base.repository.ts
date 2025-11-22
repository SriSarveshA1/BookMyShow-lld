import { AudiEntity } from 'src/models/audi.entity';
import {
  CreateAudiRequestDTO,
  CreateCityRequestDto,
} from '../../booking/dtos/request';
import { CityEntity } from 'src/models/city.entity';
import { ShowSeatEntity } from 'src/models/showSeat.entity';
import { UserEntity } from 'src/models/user.entity';
import { ShowEntity } from 'src/models/show.entity';
import { TicketEntity } from 'src/models/ticket.entity';

export interface IAudiRepository {
  createAudi(createAudiRequestDTO: CreateAudiRequestDTO): Promise<AudiEntity>;
  findAudiById(id: string): Promise<AudiEntity>;
  findAllAudies(): Promise<AudiEntity[]>;
}

export interface ICityRepository {
  createCity(createCityRequestDto: CreateCityRequestDto): Promise<CityEntity>;
  findCityByName(name: string): Promise<CityEntity>;
  findCityById(id: string): Promise<CityEntity>;
  findAllCities(): Promise<CityEntity[]>;
}

// like wise we can create repositories for all the entities.
export interface IShowSeatRepository {
  // We can add more methods
  findAllByShowIdAndSeatIds(
    showId: string,
    seatIds: [string],
  ): Promise<ShowSeatEntity[]>;
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
