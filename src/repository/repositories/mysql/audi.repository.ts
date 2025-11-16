import { Inject, Injectable } from '@nestjs/common';
import { IAudiRepository } from '../base.repository';
import { Repository } from 'typeorm';
import { AudiEntity } from 'src/models/audi.entity';
import { CreateAudiRequestDTO } from 'src/booking/dtos/request';

@Injectable()
export class AudiRepository implements IAudiRepository {
  constructor(
    @Inject('AUDI_REPOSITORY')
    private audiRepository: Repository<AudiEntity>,
  ) {}

  async createAudi(
    createAudiRequestDTO: CreateAudiRequestDTO,
  ): Promise<AudiEntity> {
    const audiEntity = this.audiRepository.create(createAudiRequestDTO);
    return this.audiRepository.save(audiEntity);
  }

  async findAudiById(id: string): Promise<AudiEntity> {
    return this.audiRepository.findOneBy({ id });
  }

  async findAllAudies(): Promise<AudiEntity[]> {
    return this.audiRepository.find();
  }
}
