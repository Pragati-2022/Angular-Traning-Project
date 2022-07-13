import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { ArrayMethodsService } from 'src/app/core/services/product/array-methods/array-methods.service';

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss'],
})
export class ArrayMethodsComponent {
  methods = [
    {
      name: 'Push',
      description:
        'The push() method adds new items to the end of an array, changes the length of the array and eturns the new length.',
    },
    {
      name: 'Concat',
      description:
        'The concat() method concatenates (joins) two or more arrays, returns a new array, containing the joined arrays and does not change the existing arrays.',
    },
    {
      name: 'Constructor',
      description:
        'The constructor property returns the function that created the Array prototype. (return the data type of array, object, string, number, boolean',
    },
    {
      name: 'CopyWithin',
      description:
        'The copyWithin() method copies array elements to another position in the array, overwrites the existing values and does not add items to the array. ',
    },
    {
      name: 'Entries',
      description:
        'The entries() method returns an Array Iterator object with key/value pairs and  does not change the original array',
      // [0, "Banana"]
      // [1, "Orange"]
      // [2, "Apple"]
      // [3, "Mango"]
    },
    {
      name: 'Every',
      description:
        'The every() method executes a function for each array element, returns true if the function returns true for all elements, returns false if the function returns false for one element, does not execute the function for empty elements and does not change the original array.',
    },
    {
      name: 'Fill',
      description:
        'The fill() method fills specified elements in an array with a value, overwrites the original array. Start and end position can be specified. If not, all elements will be filled.',
    },
    {
      name: 'Filter',
      description:
        'The filter() method creates a new array filled with elements that pass a test provided by a function, does not execute the function for empty elements and does not change the original array.',
    },
    {
      name: 'Find',
      description:
        // array.find(function(currentValue, index, arr),thisValue)
        'The find() method returns the value of the first element that passes a test, executes a function for each array element, returns undefined if no elements are found, does not execute the function for empty elements and not change the original array.',
    },
    {
      name: 'FindIndex',
      description:
        // array.findIndex(function(currentValue, index, arr),thisValue)
        'The findIndex() method executes a function for each array element, returns the index (position) of the first element that passes a test, returns -1 if no match is found, does not execute the function for empty array elements and does not change the original array.',
    },
    {
      name: 'ForEach',
      description:
        // array.forEach(function(currentValue, index, arr),thisValue)
        'The forEach() method calls a function for each element in an array and method is not executed for empty elements.',
    },
    {
      name: 'From',
      description:
        'The from() method returns an array from any iterable object with a length property. It allows only string nad array.',
    },
    {
      name: 'Includes',
      description:
        // array.includes(element, start)
        'The includes() method returns true if an array contains a specified value, returns false if the value is not found and  is case sensitive.',
    },
    {
      name: 'IndexOf',
      description:
        // array.indexOf(item, start)
        'The indexOf() method returns the first index (position) of a specified value, returns -1 if the value is not found, starts at a specified index and searches from left to right. By default the search starts at the first element and ends at the last. Negative start values counts from the last element (but still searches from left to right).',
    },
    {
      name: 'IsArray',
      description:
        // array.isArray(obj)
        'The isArray() method returns true if an object is an array, otherwise false.',
    },
    {
      name: 'Join',
      description:
        // array.join(separator)
        'The join() method returns an array as a string and does not change the original array. Any separator can be specified. The default is comma (,).',
    },
    {
      name: 'Keys',
      description:
        // array.keys()
        'The keys() method returns an Array Iterator object with the keys of an array and does not change the original array.',
    },
    {
      name: 'LastIndexOf',
      description:
        'The lastIndexOf() method returns the last index (position) of a specified value, eturns -1 if the value is not found, starts at a specified index and searches from right to left. By defalt the search starts at the last element and ends at the first. Negative start values counts from the last element (but still searches from right to left).',
    },
    {
      name: 'Length',
      description:
        'The length property sets or returns the number of elements in an array.',
    },
    {
      name: 'Map',
      description:
        'map() creates a new array from calling a function for every array element, calls a function once for each element in an array, does not execute the function for empty elements and does not change the original array.',
    },
    {
      name: 'Pop',
      description:
        'pop() method removes (pops) the last element of an array, changes the original array and eturns the removed element.',
    },
    {
      name: 'Reduce',
      description:
        // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
        "The reduce() method executes a reducer function for array element,  returns a single value: the function's accumulated result, does not execute the function for empty array elements and does not change the original array.",
    },
    {
      name: 'ReduceRight',
      description:
        // array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
        "The reduceRight() method executes a reducer function for array element,  returns a single value: the function's accumulated result, does not execute the function for empty array elements and works from right to left.",
    },
    {
      name: 'Reverse',
      description:
        //  array.reverse()
        'The reverse() method reverses the order of the elements in an array and overwrites the original array.',
    },
    {
      name: 'Shift',
      description:
        //  array.shift()
        'The shift() method removes the first item of an array, changes the original array and returns the shifted element.',
    },
    {
      name: 'Unshift',
      description:
        // array.unshift(item1, item2, ..., itemX)
        'The unshift() method adds new elements to the beginning of an array and changes the original array.',
    },
    {
      name: 'ValueOf',
      description:
        // array.valueOf()
        'The valueOf() method returns the array itself, does not change the original array. fruits.valueOf() returns the same as fruits.',
    },
    {
      name: 'ToString',
      description:
        // array.toString()
        'The toString() method returns a string with array values separated by commas and does not change the original array.',
    },
    {
      name: 'Splice',
      description:
        // array.splice(index, howmany, item1, ....., itemX)
        'The splice() method adds and/or removes array elements and overwrites the original array.',
    },
    {
      name: 'Slice',
      description:
        //  array.slice(start, end)
        'The slice() method returns selected elements in an array, as a new array, selects from a given start, up to a (not inclusive) given end and does not change the original array.',
    },
    {
      name: 'Sort',
      description:
        //  array.sort(compareFunction)
        'The sort() method sorts the elements of an array, overwrites the original array and sorts the elements as strings in alphabetical and ascending order. ',
    },
    {
      name: 'Some',
      description:
        // array.some(function(value, index, arr), this)
        'The some() method checks if any array elements pass a test (provided as a callback function), executes the callback function once for each array element, returns true (and stops) if the function returns true for one of the array elements, returns false if the function returns false for all of the array elements, does not execute the function for empty array elements and does not change the original array.',
    },
    {
      name: 'Difference',
      description: '',
    },
  ];

  date = new Date();
  constructor(public arrayMethodsService: ArrayMethodsService, public commonService : CommonService) {}

  onSubmit(method: string) {

    if (method === 'Push') {
      this.arrayMethodsService.pushMethod();
    } else if (method === 'Concat') {
      this.arrayMethodsService.concatMethod();
    } else if (method === 'Constructor') {
      this.arrayMethodsService.constructorPrototype();
    } else if (method === 'CopyWithin') {
      this.arrayMethodsService.copyWithinMethod();
    } else if (method === 'Entries') {
      this.arrayMethodsService.entriesMethod();
    } else if (method === 'Every') {
      this.arrayMethodsService.everyMethod();
    } else if (method === 'Fill') {
      this.arrayMethodsService.fillMethod();
    } else if (method === 'Filter') {
      this.arrayMethodsService.filterMethod();
    } else if (method === 'Find') {
      this.arrayMethodsService.findMethod();
    } else if (method === 'FindIndex') {
      this.arrayMethodsService.findIndexMethod();
    } else if (method === 'ForEach') {
      this.arrayMethodsService.forEachMethod();
    } else if (method === 'From') {
      this.arrayMethodsService.fromMethod();
    } else if (method === 'Includes') {
      this.arrayMethodsService.includesMethod();
    } else if (method === 'IndexOf') {
      this.arrayMethodsService.indexOfMethod();
    } else if (method === 'IsArray') {
      this.arrayMethodsService.isArrayMethod();
    } else if (method === 'Join') {
      this.arrayMethodsService.joinMethod();
    } else if (method === 'Keys') {
      this.arrayMethodsService.keysMethod();
    } else if (method === 'LastIndexOf') {
      this.arrayMethodsService.lastIndexOfMethod();
    } else if (method === 'Length') {
      this.arrayMethodsService.lengthProperty();
    } else if (method === 'Map') {
      this.arrayMethodsService.mapMethod();
    } else if (method === 'Pop') {
      this.arrayMethodsService.popMethod();
    } else if (method === 'Reduce') {
      this.arrayMethodsService.reduceMethod();
    } else if (method === 'ReduceRight') {
      this.arrayMethodsService.reduceRightMethod();
    } else if (method === 'Reverse') {
      this.arrayMethodsService.reverseMethod();
    } else if (method === 'Shift') {
      this.arrayMethodsService.shiftMethod();
    } else if (method === 'Unshift') {
      this.arrayMethodsService.unshiftMethod();
    } else if (method === 'ValueOf') {
      this.arrayMethodsService.valueOfMethod();
    } else if (method === 'ToString') {
      this.arrayMethodsService.toStringMethod();
    } else if (method === 'Splice') {
      this.arrayMethodsService.spliceMethod();
    } else if (method === 'Slice') {
      this.arrayMethodsService.sliceMethod();
    } else if (method === 'Sort') {
      this.arrayMethodsService.sortMethod();
    } else if (method === 'Some') {
      this.arrayMethodsService.someMethod();
    } else if (method === 'Difference') {
      this.arrayMethodsService.diffEverySomeMethods();
    }
  }
}
