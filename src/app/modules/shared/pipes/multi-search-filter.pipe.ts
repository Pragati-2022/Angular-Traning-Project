import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiSearchFilter',
})
export class MultiSearchFilterPipe implements PipeTransform {
  transform(value: any[], email?: string, args?: string): any[] | null {
    if (!value) {
      return null;
    } else if (args || email) {
      if (args && !email) {
        let result: any[];

        args = args?.toLowerCase();
        args = args?.trim();
        result = value.filter((data) => data.name.toLowerCase().indexOf(args) == 0);

        return result;
      } else if (email && !args) {
        let result: any[];

        email = email?.toLowerCase();
        email = email?.trim();
        result = value.filter((data) => data.email.indexOf(email) == 0);

        return result;
      } else if (args && email) {
        console.log('both2');
        let result: any[];

        args = args?.toLowerCase();
        args = args?.trim();
        result = value.filter((data) => data.name.toLowerCase().indexOf(args) == 0);

        email = email?.toLowerCase();
        email = email?.trim();

        result = result.filter((data) => data.email.indexOf(email) == 0);

        return result;
      } else {
        return value;
      }
    } else {
      return value;
    }
  }
}
