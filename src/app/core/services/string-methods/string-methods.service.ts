import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringMethodsService {
  str = 'Apple, Banana, Kiwi, Apple';
  date = new Date();

  constructor() {}

  lengthProperty() {
    console.log(this.str.length);
    console.log(this.str);
  }

  sliceMethod() {
    console.log(this.str.slice(7, 13));
    console.log(this.str.slice(15, 7)); //not working or empty string
    console.log(this.str.slice(-15, -7));
    console.log(this.str.slice(8));
  }

  substringMethod() {
    console.log(this.str.substring(7, 13));
    console.log(this.str.substring(15, 7));
    console.log(this.str.substring(-15, -7)); //not working or empty string
    console.log(this.str.substring(8));
  }

  substrMethod() {
    console.log(this.str.substr(7, 13));
    console.log(this.str.substr(15, 7));
    console.log(this.str.substr(-15, -7)); //not working or empty string
    console.log(this.str.substr(-15, 7));
    console.log(this.str.substr(8));
  }

  replaceMethod() {
    //   let newStr = this.str.replace("Apple", "Mango");
    //   console.log(this.str, newStr);

    //To replace case insensitive, use a regular expression with an /i flag (insensitive):
    let newStr2 = this.str.replace(/APPLE/i, 'Mango');
    console.log(this.str, newStr2);

    //To replace all matches, use a regular expression with a /g flag (global match):
    // let newStr3 = this.str.replace(/APPLE/ig, 'Mango');
    let newStr3 = this.str.replace(/Apple/g, 'Mango');
    console.log(this.str, newStr3);
  }

  toUpperCaseMethod() {
    let newStr = this.str.toUpperCase();
    console.log(this.str, newStr);
  }

  toLowerCaseMethod() {
    let newStr = this.str.toLowerCase();
    console.log(this.str, newStr);
  }

  concatMethod() {
    let newStr = this.str.concat(', ', ' Orange');
    let newStr2 = this.str + ', ' + 'Orange';
    console.log(this.str, newStr, newStr2);
  }

  trimMethod() {
    let str1 = '    Hello Pragati       ';
    let newStr = str1.trim();
    console.log(str1, newStr);
  }

  padStartMethod() {
    //string.padStart(lengthOfNewString, msgToAddAtStart)
    let num = 90;
    let text = num.toString();

    let newStr = this.str.padStart(30, 'P');
    let newStr2 = text.padStart(8, '0');

    let newStr3 = text.padStart(3, '6');

    console.log('Before : ' + this.str);
    console.log('After : ' + newStr, newStr2, newStr3);
  }

  padEndMethod() {
    //string.padStart(lengthOfNewString, msgToAddAtEnd)
    let newStr = this.str.padEnd(30, 'P');
    let newStr2 = this.str.padEnd(32, '0');

    let num = 90;
    let text = num.toString();
    let newStr3 = text.padEnd(3, '6');

    console.log('Before : ' + this.str);
    console.log('After : ' + newStr, newStr2, newStr3);
  }

  charAtMethod() {
    let char = this.str.charAt(7);
    console.log(char, this.str.charAt(32));

    //if index is more then langth then it give empty string
  }

  charCodeAtMethod() {
    let char = this.str.charCodeAt(7);
    console.log(char, this.str.charCodeAt(32));

    //if index is more then langth then it give NaN
  }

  accessProperty() {
    let char = this.str[8];
    console.log(char, this.str[32]);

    //if index is more then langth then it give undefined
    // this.str[8] = "G"; //not working allow only reading
  }

  splitMethod() {
    let arr1 = this.str.split(',');
    console.log("By ',' : ");
    console.log(arr1);

    let arr2 = this.str.split('');
    console.log("By '' : ");
    console.log(arr2);

    let arr3 = this.str.split('A');
    console.log("By 'A' : ");
    console.log(arr3);

    let arr4 = this.str.split('a');
    console.log("By 'a' : ");
    console.log(arr4);

    let arr5 = this.str.split(' ');
    console.log("By ' ' : ");
    console.log(arr5);

    let arr6 = this.str.split('|');
    console.log("By '|' : ");
    console.log(arr6);

    let arr7 = this.str.split('@');
    console.log("By '@' : ");
    console.log(arr7);
  }

  indexOfMethod() {
    console.log(this.str.indexOf('Apple'));
    //take second parameter as a starting position
    console.log(this.str.indexOf('Apple', 10));
    console.log(this.str.indexOf('a'));
    console.log(this.str.indexOf('U'));
  }

  LastIndexOfMethod() {
    console.log(this.str.lastIndexOf('Apple'));
    //it search backward like Apple are two times 1st at 0 index and 2nd at 21
    // so in the index i will put 0-20 it will give 0 and after 21 it will give 21
    console.log(this.str.lastIndexOf('Apple', 20));
  }

  searchMethod() {
    console.log(this.str.search('Apple'));
    console.log(this.str.search('Kiwi'));
    console.log(this.str.search('KIWI'));
  }

  matchMethod() {
    console.log(this.str.match('an'));
    console.log(this.str.match(/an/));
    console.log(this.str.match(/ap/i));
    console.log(this.str.match(/AP/i));
    console.log(this.str.match(/Ap/i));
    console.log(this.str.match(/ap/g));
    console.log(this.str.match(/AP/g));
    console.log(this.str.match(/Ap/g));
    console.log(this.str.match(/ap/gi));
    console.log(this.str.match(/AP/gi));
    console.log(this.str.match(/Ap/gi));
  }

  includesMethod() {
    console.log(this.str.includes('APPle'));
    console.log(this.str.includes('Apple'));
    console.log(this.str.includes('Apple', 15));
    console.log(this.str.includes('Banana'));
    console.log(this.str.includes('Banana', 13));
    console.log(this.str.includes('Banana', 14));
    console.log(this.str.includes('Banana', 7));
    console.log(this.str.includes('Banana', 9));
  }

  startsWithMethod() {
    console.log(this.str.startsWith('Apple'));
    console.log(this.str.startsWith('APPLE'));
    console.log(this.str.startsWith('Apple', 1));
    console.log(this.str.startsWith('Banana', 7));
    console.log(this.str.startsWith('Banana', 8));
    console.log(this.str.startsWith('Apple', 21));
  }

  endsWithMethod() {
    console.log(this.str.endsWith('Apple'));
    console.log(this.str.endsWith('APPLE'));
    console.log(this.str.endsWith('Apple', 5));
    console.log(this.str.endsWith('Banana', 13));
    console.log(this.str.endsWith('Banana', 14));
    console.log(this.str.endsWith('Apple', 26));
  }

  isNaNMethod() {
    console.log(
      Number.isNaN(123),
      Number.isNaN(-1.23),
      Number.isNaN('123'),
      Number.isNaN(0 / 0)
    );

    console.log(
      Number.isNaN(5 - 2),
      Number.isNaN(0),
      Number.isNaN('Hello'),
      Number.isNaN('2005/12/12'),
      Number.isNaN(' ')
    );

    console.log(
      Number.isNaN(false),
      Number.isNaN(true),
      Number.isNaN(undefined),
      Number.isNaN('NaN'),
      Number.isNaN(NaN)
    );

    console.log(Number.isNaN('Hello'));
  }

  naNProperty() {
    let x = Number.NaN;
    let x1 = NaN;
    console.log(x, x1);
  }

  maxValueProperty() {
    let x = Number.MAX_VALUE;
    console.log(x);
  }

  minValueProperty() {
    let x = Number.MIN_VALUE;
    console.log(x);
  }

  toFixedMethod() {
    let num = 5.56789;
    console.log(num.toFixed());
    console.log(num.toFixed(2));
    console.log(num.toFixed(10));
  }

  toLocaleDateStringMethod() {
    let text = this.date.toLocaleDateString();
    console.log(text, this.date);
  }

  toLocaleTimeStringMethod() {
    let text = this.date.toLocaleTimeString();
    let text2 = this.date.toTimeString();
    console.log(text, text2);
  }

  toLocaleStringMethod() {
    let text = this.date.toLocaleString();
    console.log(text, this.date);
  }

  manyDateMethod(method: string) {
    if (method === 'Constructor') {
      console.log('Constructor');
      console.log(this.date.constructor);
    } else if (method === 'GetDate') {
      console.log('GetDate');
      console.log(this.date.getDate());

      const d = new Date('July 21, 1983 01:15:00');
      console.log(d.getDate());
    } else if (method === 'GetDay') {
      console.log('GetDay');
      console.log(this.date.getDay());

      const d = new Date('July 21, 1983 01:15:00');
      console.log(d.getDay());

      const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      console.log(weekday[d.getDay()]);
    } else if (method === 'GetFullYear') {
      console.log('GetFullYear');
      console.log(this.date.getFullYear());

      const d = new Date('July 21, 1983 01:15:00');
      console.log(d.getFullYear());
    } else if (method === 'GetHours') {
      console.log('GetHours');
      console.log(this.date.getHours());

      const d = new Date('July 21, 1983 01:15:00');
      console.log(d.getHours());
    } else if (method === 'GetMilliseconds') {
      console.log('GetMilliseconds');
      console.log(this.date.getMilliseconds());

      const d = new Date('July 21, 1983 01:15:00');
      console.log(d.getMilliseconds());
    } else if (method === 'GetMinutes') {
      console.log('GetMinutes');
      console.log(this.date.getMinutes());

      const d = new Date('July 21, 1983 01:15:00');
      console.log(d.getMinutes());
    } else if (method === 'GetMonth') {
      console.log('GetMonth');
      console.log(this.date.getMonth());

      const d = new Date('July 21, 1983 01:15:00');
      console.log(d.getMonth());

      const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      console.log(month[d.getMonth()]);
    } else if (method === 'GetSeconds') {
      console.log('GetSeconds');
      console.log(this.date.getSeconds());

      const d = new Date('July 21, 1983 01:15:00');
      console.log(d.getSeconds());
    } else if (method === 'GetTime') {
      console.log('GetTime');
      console.log(this.date.getTime());

      const d = new Date('July 21, 1983 01:15:00');
      console.log(d.getTime());
    } else if (method === 'Now and Difference between yesterday') {
      console.log('Now and Difference between yesterday');
      console.log(Date.now());

      const minute = 1000 * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const year = day * 365;

      const currentDate = Date.now();
      const yesterdayDate = Date.parse('July 6, 2022');

      const diff = currentDate - yesterdayDate;
      const diffHour = diff / hour;

      console.log('Difference in hours' + diffHour);
      console.log('Difference in minutes' + diff / minute);
      console.log('Difference in day' + diff / day);
      console.log('Difference in year' + diff / year);
    } else if (method === 'Parse') {
      console.log('Parse');
      console.log(Date.parse('July 21, 1983'));
    }
  }
}
