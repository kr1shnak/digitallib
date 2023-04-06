import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        console.log(filter)
        if (!items || !filter) {
            return items;
        }
        else if(filter.filterBy && !filter.search){
           return items
        }
  
        if(filter.filterBy === 'price'){
            return items.filter(item => item[filter.filterBy] < filter.search);
        }
        else
        return items.filter(item => item[filter.filterBy].indexOf(filter.search) !== -1);
    }
}