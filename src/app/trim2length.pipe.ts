import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim2length'
})
export class Trim2lengthPipe implements PipeTransform {

  transform(value: any, len: number): string {
    if(typeof value==='string'&&typeof len==='number'){
      return value.substr(0,len);
    }else{
      return 'Data Type Error';
    }
   
  }

}
