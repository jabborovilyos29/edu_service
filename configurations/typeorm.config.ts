import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'edu',
  password: 'password',
  database: 'edu',
  synchronize: false,
  logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
});
