import { Pipe, PipeTransform } from '@angular/core';
//https://angular.io/api/core/PipeTransform

//need to add pipe decoration
@Pipe({
    name: 'summary' //name to use in the markup
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number){
        if (!value) {
            return null;
        }
        let actualLimit = (limit) ? limit : 50;
        return value.substr(0,actualLimit) + '...';
    }
}

/**
 * it will give us an error if we dont declare the pipe in the app.module file
 * like all components, custom pipes also must be declared
 */
