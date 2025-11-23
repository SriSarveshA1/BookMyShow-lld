import { Module } from '@nestjs/common';
import { RedisBasedBookingService } from './booking.service';
import { RedisService } from 'src/cache/redis.service';
import { RepositoryModule } from 'src/repository/repository.module';
import { BookingController } from './booking.controller';

@Module({
  providers: [RedisBasedBookingService, RedisService, RedisBasedBookingService],
  imports: [RepositoryModule],
  controllers: [BookingController],
})
export class BookingModule {}
