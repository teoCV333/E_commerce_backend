class genericResponseModel {
    error?: boolean;
    data?: any;
    codeError?: number;

    constructor(error: boolean, data: any, codeError?: number) {
        this.error = error;
        this.data = data;
        this.codeError = codeError;
    }
}