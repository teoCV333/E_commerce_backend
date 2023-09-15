import { HttpStatus } from '@nestjs/common';

export interface ResponseParamsInterace {
    httpStatusCode?: HttpStatus;
    httpStatusMessage?: string;
    httpMessageException?: string;
    httpMessageErrors?: string;
    codeError?: number;
    path?: string;
}
