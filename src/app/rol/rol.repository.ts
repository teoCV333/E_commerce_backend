import { Logger } from "@nestjs/common";
import { Rol } from "src/repository/entities/rol.entity";
import { Repository } from "typeorm";

export class RolRepository extends Repository<Rol> {

    private logger = new Logger('rolRepository');

    async getAll(): Promise<Rol[]> { 
        try {
            const payload = await this.find();
            return payload;
        } catch (error) {
            this.logger.error(error + ' getAll');
            return null;
        }
    }
    
 }

