import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any[], args: string): any[] | null {
    if (!value) {
      return null;
    } else if (!args) {
      return value;
    } else {
      args = args.toLowerCase();
      args = args.trim();
      console.log(args);
      
      // let result = value.filter((data) =>
      //   data.name.toLowerCase().includes(args)
      // );

      let result = value.filter((data) => 
        data.name.toLowerCase().includes(args) || data.email.toLowerCase().includes(args));

      console.log(result);
      
      return result;
    }
  }
}
