import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  //args? --> de elly hya el arguments elly ba7ot feha elparameters elly el pipe hya5odha
  transform(value: string, args?: any): any {
    return value.length;
  }

}
