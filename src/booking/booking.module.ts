import { Module } from '@nestjs/common';
import { RedisBasedBookingService } from './booking.service';
import { RedisService } from 'src/cache/redis.service';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  providers: [RedisBasedBookingService, RedisService],
  imports: [RepositoryModule],
})
export class BookingModule {}
