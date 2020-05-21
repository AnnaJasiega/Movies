import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'summary',
})
export class SummaryPipe implements PipeTransform {
    transform(value: string){
        if(!value) {
            return null
        } else if (value.length < 900){
            return value
        } else {
            return value.substr(0, 900) + '...'
        }    
    }
}
