import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BookingModule } from './booking/booking.module';
import { RepositoryModule } from './repository/repository.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [
    DatabaseModule,
    RepositoryModule,
    BookingModule,
    RedisModule.forRootAsync({
      useFactory: () => ({
        type: 'single',
        url: 'redis://localhost:6379',
      }),
    }),
    CacheModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
