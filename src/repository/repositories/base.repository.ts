import { AudiEntity } from 'src/models/audi.entity';
import {
  CreateAudiRequestDTO,
  CreateCityRequestDto,
} from '../../booking/dtos/request';
import { CityEntity } from 'src/models/city.entity';

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
