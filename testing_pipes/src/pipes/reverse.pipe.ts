import { Pipe } from 'angular2/core';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform(value: String, args: Array<string>) : any {
    return value.split('').reverse().join('');
  }
}