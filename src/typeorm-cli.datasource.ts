import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'bms5',
  entities: [__dirname + '/models/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/*.{ts,js}'],
});

export const Database = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = AppDataSource;

      return dataSource.initialize();
    },
  },
];
