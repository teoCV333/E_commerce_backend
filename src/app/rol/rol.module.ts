import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { RolRepository } from './rol.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [RolController],
  imports: [TypeOrmModule.forFeature([RolRepository]), HttpModule],
  providers: [RolService],
  
})
export class RolModule {}
