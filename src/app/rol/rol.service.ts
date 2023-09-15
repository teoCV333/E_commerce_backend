import { Injectable, Logger } from '@nestjs/common';
import { CustomCodes } from 'src/enums/custom-codes.enum';
import { RolRepository } from './rol.repository';

@Injectable()
export class RolService {

    constructor(
        private rolRepository: RolRepository
    ) {}

    private logger = new Logger('RolService');
    
    async getAll(): Promise<genericResponseModel> {
        try {
            const data = await this.rolRepository.getAll();
            if(!data) {
                return {
                    error: false,
                    data: []
                }
            }
            return {
                error: false,
                data: data
            }
        } catch (error) {
            this.logger.error(error + ' getAll');
            return {
                error: true,
                codeError: CustomCodes.internal_error
            }
        }
    }

}
