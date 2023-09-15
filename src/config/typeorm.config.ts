import { TypeOrmModuleOptions } from "@nestjs/typeorm";

require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/**/*.entity.{js,ts}'],
    autoLoadEntities: true,
    synchronize: true,
}
console.log(typeOrmConfig)