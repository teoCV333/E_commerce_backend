import { HttpStatus } from '@nestjs/common';
import { ResponseEntity } from '../entities/response.entity';

export class GenericController {
    
    constructor() {}

    protected async response(object: any, httpStatus: HttpStatus, message?: string, codeError?: number): Promise<ResponseEntity> {
        const httpStatusMessage: string = message;
        const httpStatusCode = httpStatus;
        return new ResponseEntity().resolve(object, {
            httpStatusMessage,
            httpStatusCode,   
            httpMessageErrors: message,
            codeError: codeError    
        })
    }

    async returnResponse(data?: any) {
        if (data) {
            if (data.isError) {
                return await this.response({}, 400, data.message, data.codeError);
            }
            return await this.response(data.data, HttpStatus.OK);
        } else {
            return await this.response({}, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
