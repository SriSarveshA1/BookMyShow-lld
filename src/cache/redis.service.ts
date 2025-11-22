import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { CacheService } from './cache.interface';

@Injectable()
export class RedisService implements CacheService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  // We can create basic methods to interact with Redis here
  async set(key: string, value: string): Promise<'OK'> {
    return this.redis.set(key, value);
  }

  async setWithExpiry(
    key: string,
    value: string,
    expiryInSeconds: number,
  ): Promise<'OK'> {
    return this.redis.set(key, value, 'EX', expiryInSeconds);
  }

  async getValue(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  async getAllKeysAndValues(): Promise<{ [key: string]: string }[]> {
    const keys = await this.redis.keys('*');
    const values = await this.redis.mget(keys);
    return keys.map((key, index) => ({ [key]: values[index] }));
  }

  async getAllValuesForKeys(
    keys: string[],
  ): Promise<{ [key: string]: string }[]> {
    const values = await this.redis.mget(keys);
    return keys.map((key, index) => ({ [key]: values[index] }));
  }

  async evalLuaScript(
    script: string,
    keyLength: number,
    ...args: any
  ): Promise<unknown> {
    return await this.redis.eval(script, keyLength, ...args);
  }

  async getValueFromSet(setName: string): Promise<string[]> {
    return await this.redis.smembers(setName);
  }
}
