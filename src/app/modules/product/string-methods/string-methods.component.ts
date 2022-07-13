import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { CommonService } from 'src/app/core/services/common/common.service';
import { StringMethodsService } from 'src/app/core/services/string-methods/string-methods.service';

@Component({
  selector: 'app-string-methods',
  templateUrl: './string-methods.component.html',
  styleUrls: ['./string-methods.component.scss'],
})
export class StringMethodsComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  isArray!: boolean;
  isTrue = () => { return true };
  itTrue = () => { return true };

  methods = [
    {
      name: 'Length',
      description: ` The length property returns the length of a string.`,
    },
    {
      name: 'Slice',
      description: '',
    },
    {
      name: 'Substring',
      description: '',
    },
    {
      name: 'Substr',
      description: '',
    },
    {
      name: 'Replace',
      description:
        'The replace() method does not change the string it is called on, returns a new string, replaces only the first match. If you want to replace all matches, use a regular expression with the /g flag set. See examples below.',
    },
    {
      name: 'ToUpperCase',
      description: 'A string is converted to upper case with toUpperCase().',
    },
    {
      name: 'ToLowerCase',
      description: 'A string is converted to lower case with toLowerCase().',
    },
    {
      name: 'Concat',
      description: 'concat() joins two or more strings.',
    },
    {
      name: 'Trim',
      description:
        'The trim() method removes whitespace from both sides of a string.',
    },
    {
      name: 'PadStart',
      description:
        'ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string. The padStart() method pads a string with another string',
    },
    {
      name: 'PadEnd',
      description:
        'ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string. The padStart() method pads a string with another string',
    },
    {
      name: 'CharAt',
      description:
        'The charAt() method returns the character at a specified index (position) in a string:',
    },
    {
      name: 'CharCodeAt',
      description:
        'The charCodeAt() method returns the unicode of the character at a specified index in a string: The method returns a UTF-16 code (an integer between 0 and 65535).',
    },
    {
      name: 'Access',
      description:
        'ECMAScript 5 (2009) allows property access [ ] on strings: Property access might be a little unpredictable: It makes strings look like arrays (but they are not). If no character is found, [ ] returns undefined, while charAt() returns an empty string. It is read only. str[0] = "A" gives no error (but does not work!)',
    },
    {
      name: 'Split',
      description:
        'A string can be converted to an array with the split() method. If the separator is omitted, the returned array will contain the whole string in index [0]. If the separator is "", the returned array will be an array of single characters.',
    },
    {
      name: 'LastIndexOf',
      description:
        'The lastIndexOf() method returns the index of the last occurrence of a specified text in a string, return -1 if the text is not found and accept a second parameter as the starting position for the search. The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.',
    },
    {
      name: 'IndexOf',
      description:
        'The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string, return -1 if the text is not found and accept a second parameter as the starting position for the search.',
    },
    {
      name: 'Difference Between indexOf() and search()',
      description:
        'The search() method cannot take a second start position argument. The indexOf() method cannot take powerful search values (regular expressions).',
    },
    {
      name: 'Search',
      description:
        'The search() method searches a string for a specified value and returns the position of the match. ',
    },
    {
      name: 'Match',
      description:
        // string.match(regexp)
        'The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object. If a regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.',
    },
    {
      name: 'Includes',
      description:
        // string.includes(searchvalue, start)
        'The includes() method returns true if a string contains a specified value. ',
    },
    {
      name: 'StartsWith',
      description:
        // string.startsWith(searchvalue, start)
        'The startsWith() method returns true if a string begins with a specified value, otherwise false. The startsWith() method is case sensitive.',
    },
    {
      name: 'EndsWith',
      description:
        // string.endsWith(searchvalue, length)
        'The endsWith() method returns true if a string ends with a specified value, otherwise false. The endsWith() method is case sensitive.',
    },
  ];

  numberMethods = [
    {
      name: 'IsNaN',
      description:
        //  Number.isNaN(value)
        'NaN is short for "Not-a-Number". NaN is a number that is not a legal number. The Number.isNaN() method returns true if the value is NaN, and the type is a Number. isNaN() method returns true if a value is Not-a-Number. isNaN() converts the value to a number before testing it. ',
    },
    {
      name: 'NaN',
      description:
        //  Number.NaN
        'NaN is short for "Not-a-Number". NaN is a number that is not a legal number. The Global NaN property is the same as the Number.Nan property. ',
    },
    {
      name: 'MAX_VALUE',
      description:
        //  Number.MAX_VALUE
        'Number.MAX_VALUE returns the largest number possible in JavaScript and  has the value of 1.7976931348623157e+308,  is a property of the JavaScript Number object. You can only use it as Number.MAX_VALUE. Using x.MAX_VALUE, where x is a variable, will return undefined. ',
    },
    {
      name: 'MIN_VALUE',
      description:
        //  Number.MIN_VALUE
        'Number.MIN_VALUE returns the smallest number possible in JavaScript and has a value of 5e-324. MIN_VALUE is a property of the JavaScript Number object. You can only use it as Number.MIN_VALUE. Using x.MIN_VALUE, where x is a variable, will return undefined.',
    },
    {
      name: 'ToFixed',
      description:
        //  number.toFixed(x)
        'The toFixed() method converts a number to a string and rounds the string to a specified number of decimals. If the number of decimals are higher than in the number, zeros are added.',
    },
  ];

  dateMethods = [
    {
      name: 'ToLocaleDateString',
      description:
        // Date.toLocaleDateString()
        'The toLocaleDateString() method returns the date (not the time) of a date object as a string, using locale conventions.',
    },
    {
      name: 'ToLocaleTimeString And ToTimeString',
      description:
        // Date.toLocaleTimeString()
        'The toLocaleTimeString() method returns the time portion of a date object as a string, using locale conventions.',
    },
    {
      name: 'ToLocaleString',
      description:
        // Date.toLocaleString(locales, options)
        'The toLocaleString() method returns a Date object as a string, using locale settings. The default language depends on the locale setup on your computer.',
    },
    {
      name: 'Constructor',
      description:
        // Date.constructor
        'The constructor property returns the function that created the Date prototype. For JavaScript dates the constructor property returns. function Date() { [native code] }',
    },
    {
      name: 'GetDate',
      description:
        //  Date.getDate()
        'The getDate() method returns the day of the month (1 to 31) of a date.',
    },
    {
      name: 'GetDay',
      description:
        // Date.getDay()
        'The getDay() method returns the day of the week (0 to 6) of a date. Sunday = 0, Monday = 1, ... (See below):',
    },
    {
      name: 'GetFullYear',
      description:
        // Date.getFullYear()
        'getFullYear() returns the full year (4 digits) of a date.',
    },
    {
      name: 'GetHours',
      description:
        // Date.getHours()
        'getHours() returns the hour (0 to 23) of a date.',
    },
    {
      name: 'GetMilliseconds',
      description:
        // Date.getMilliseconds()
        'getMilliseconds() returns the milliseconds (0 to 999) of a date.',
    },
    {
      name: 'GetMinutes',
      description:
        // Date.getMinutes()
        'getMinutes() returns the minutes (0 to 59) of a date.',
    },
    {
      name: 'GetMonth',
      description:
        // Date.getMonth()
        'getMonth() returns the month (0 to 11) of a date. January =0, February = 1, ... (see below):',
    },
    {
      name: 'GetSeconds',
      description:
        // Date.getSeconds()
        'getSeconds() returns the seconds (0 to 59) of a date.',
    },
    {
      name: 'GetTime',
      description:
        // Date.getTime()
        'getTime() returns the number of milliseconds since January 1, 1970 00:00:00.',
    },
    {
      name: 'Now and Difference between yesterday',
      description:
        // Date.now()
        'Date.now() returns the number of milliseconds since January 1, 1970.',
    },
    {
      name: 'Parse',
      description:
        // Date.parse()
        'parses a date string and returns the time difference since January 1, 1970 and returns the time difference in milliseconds.',
    },
  ];

  types: any = [
    {
      title: 'TITLE.METHODS.STRING',
      methodName : Constants.methods.string,
      name: this.methods,
    },
    {
      title: 'TITLE.METHODS.NUMBER',
      methodName : Constants.methods.number,
      name: this.numberMethods,
    },
    {
      title: 'TITLE.METHODS.DATE',
      methodName : Constants.methods.date,
      name: this.dateMethods,
    },
  ];

  constructor(private stringMethodsService: StringMethodsService, private commonService : CommonService) { }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked in  string');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked in  string');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit in  string');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in string');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck in string');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges in string');
  }

  ngOnInit(): void {
    console.log('ngOnInit in string');
  }

  onSubmit(method: string | string[]) {
    if (method === 'Length') {
      this.stringMethodsService.lengthProperty();
    } else if (method === 'Slice') {
      this.stringMethodsService.sliceMethod();
    } else if (method === 'Substring') {
      this.stringMethodsService.substringMethod();
    } else if (method === 'Substr') {
      this.stringMethodsService.substrMethod();
    } else if (method === 'Replace') {
      this.stringMethodsService.replaceMethod();
    } else if (method === 'ToUpperCase') {
      this.stringMethodsService.toUpperCaseMethod();
    } else if (method === 'ToLowerCase') {
      this.stringMethodsService.toLowerCaseMethod();
    } else if (method === 'Concat') {
      this.stringMethodsService.concatMethod();
    } else if (method === 'Trim') {
      this.stringMethodsService.trimMethod();
    } else if (method === 'PadStart') {
      this.stringMethodsService.padStartMethod();
    } else if (method === 'PadEnd') {
      this.stringMethodsService.padEndMethod();
    } else if (method === 'CharAt') {
      this.stringMethodsService.charAtMethod();
    } else if (method === 'CharCodeAt') {
      this.stringMethodsService.charCodeAtMethod();
    } else if (method === 'Access') {
      this.stringMethodsService.accessProperty();
    } else if (method === 'Split') {
      this.stringMethodsService.splitMethod();
    } else if (method === 'IndexOf') {
      this.stringMethodsService.indexOfMethod();
    } else if (method === 'LastIndexOf') {
      this.stringMethodsService.LastIndexOfMethod();
    } else if (method === 'Search') {
      this.stringMethodsService.searchMethod();
    } else if (method === 'Match') {
      this.stringMethodsService.matchMethod();
    } else if (method === 'Includes') {
      this.stringMethodsService.includesMethod();
    } else if (method === 'StartsWith') {
      this.stringMethodsService.startsWithMethod();
    } else if (method === 'EndsWith') {
      this.stringMethodsService.endsWithMethod();
    } else if (method === 'IsNaN') {
      this.stringMethodsService.isNaNMethod();
    } else if (method === 'NaN') {
      this.stringMethodsService.naNProperty();
    } else if (method === 'MAX_VALUE') {
      this.stringMethodsService.maxValueProperty();
    } else if (method === 'MIN_VALUE') {
      this.stringMethodsService.minValueProperty();
    } else if (method === 'ToFixed') {
      this.stringMethodsService.toFixedMethod();
    }
  }

  onDateMethodSubmit(method: string | string[]) {
    if (method === 'ToLocaleDateString') {
      this.stringMethodsService.toLocaleDateStringMethod();
    } else if (method === 'ToLocaleTimeString And ToTimeString') {
      this.stringMethodsService.toLocaleTimeStringMethod();
    } else if (method === 'ToLocaleString') {
      this.stringMethodsService.toLocaleStringMethod();
    } else if (method === 'Constructor') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'GetDate') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'GetDay') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'GetFullYear') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'GetHours') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'GetMilliseconds') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'GetMinutes') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'GetMonth') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'GetSeconds') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'GetTime') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'Now and Difference between yesterday') {
      this.stringMethodsService.manyDateMethod(method);
    } else if (method === 'Parse') {
      this.stringMethodsService.manyDateMethod(method);
    }
  }

  onCard(method: string, title: string) {
    console.log(method, title);
      const checkMethos = [Constants.methods.string,Constants.methods.number];
    if (checkMethos.includes(title)) {
      this.onSubmit(method);
    } else {
      this.onDateMethodSubmit(method);
    }
  }
}
