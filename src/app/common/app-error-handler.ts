import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error){
        //alert ('Sorry, an unexpected error occured');
        console.log(error);
    }
}
