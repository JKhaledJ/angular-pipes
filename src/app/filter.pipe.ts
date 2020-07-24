import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStatus: string, props: string): any {
    if(value.length===0 || filterStatus===''){
      return value;
    }
    const filteredArray=[];
    for(const item of value){
      if(item[props]===filterStatus){
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

}
