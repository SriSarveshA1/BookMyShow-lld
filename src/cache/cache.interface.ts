export interface CacheService {
  set(key: string, value: string): Promise<'OK'>;
  setWithExpiry(
    key: string,
    value: string,
    expiryInSeconds: number,
  ): Promise<'OK'>;
  getValue(key: string): Promise<string | null>;
  getAllKeysAndValues(): Promise<{ [key: string]: string }[]>;
  getAllValuesForKeys(keys: string[]): Promise<{ [key: string]: string }[]>;
  evalLuaScript(
    script: string,
    keyLength: number,
    ...args: any
  ): Promise<unknown>;
  getValueFromSet(setName: string): Promise<string[]>;
}
