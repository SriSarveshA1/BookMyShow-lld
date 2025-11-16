import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BookingModule } from './booking/booking.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [DatabaseModule, RepositoryModule, BookingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
