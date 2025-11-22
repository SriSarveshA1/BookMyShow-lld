import { Inject, Injectable } from '@nestjs/common';
import { ShowEntity } from 'src/models/show.entity';
import { Repository } from 'typeorm';
import { IShowRepository } from '../base.repository';

@Injectable()
export class ShowRepository implements IShowRepository {
  constructor(
    @Inject('SHOW_REPOSITORY')
    private showRepository: Repository<ShowEntity>,
  ) {}

  async getShowById(showId: string): Promise<ShowEntity> {
    return this.showRepository.findOneBy({ id: showId });
  }
}
