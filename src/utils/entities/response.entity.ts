import { ResponseParamsInterace } from "src/interfaces/response-params.interace";
import { ResponseStatusEntity } from "./response-status.entity";

export class ResponseEntity {

    public headerStatus: ResponseStatusEntity;
    public messages: string;
    public serverTime: string;
    public data: any;
    public success: boolean;
    public codeError: number;

    public resolve(object: any, params?: ResponseParamsInterace): ResponseEntity {

        this.headerStatus = new ResponseStatusEntity();
        this.headerStatus.code = params?.httpStatusCode;
        this.headerStatus.description = params?.httpStatusMessage || '';

        this.codeError = params?.codeError;

        this.messages = params?.httpMessageErrors || '';

        this.serverTime = new Date().toISOString();

        this.data = object ?? null;

        this.success = this.headerStatus.code === 200 ? true : false;

        return this;
    }
}
