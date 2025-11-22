import { Module } from '@nestjs/common';
import { Database } from '../typeorm-cli.datasource';

@Module({
  providers: [...Database],
  exports: [...Database],
})
export class DatabaseModule {}
