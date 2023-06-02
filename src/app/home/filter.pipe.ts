import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: any): any {
    console.log(args);
    if (args == '') return value;
    const result = [];
    console.log(value);
    for (let product of value) {
      if (product.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        result.push(product);
      }
    }
    return result;
  }
}
