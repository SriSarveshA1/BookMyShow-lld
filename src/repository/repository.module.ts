import { Module } from '@nestjs/common';
import { DbEntityProvider } from '../repository/providers/custom.provider';
import { AudiRepository } from './repositories/mysql/audi.repository';
import { Database } from 'src/database/database';

@Module({
  providers: [...DbEntityProvider, AudiRepository, ...Database],
})
export class RepositoryModule {}
