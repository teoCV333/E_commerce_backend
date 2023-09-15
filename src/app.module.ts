import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { RolModule } from './app/rol/rol.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RolModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(private dataSource: DataSource) {}

}
