import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// export const ORMConfig: MysqlConnectionOptions = {
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'user',
//     password: 'password',
//     database: 'test_db',
//     entities: [`${__dirname}/**/*.entity{.ts,.js}`],
//     synchronize: true,
// };

export const ORMConfig: PostgresConnectionOptions  = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'pg_db',
    entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    synchronize: true
};
