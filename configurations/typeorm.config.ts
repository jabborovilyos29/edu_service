import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'edu',
  password: 'password',
  database: 'edu',
  synchronize: false,
  logging: true,
  migrations: ['migrations/*.js, *.ts'],
  migrationsRun: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
});
