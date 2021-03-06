import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicFilter'
})
export class DynamicFilterPipe implements PipeTransform {
  transform(items: any[], args: string, searchField: any[]): any[] | null {
    if (!items || !args || !searchField) {
      return items;
    }

    const arg = args.toLowerCase();

    return items.filter((data) => {
      return searchField.some((key) => {
        return String(data[key]).toLowerCase().includes(arg);
      });
    });
  }
}
