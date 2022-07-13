import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modules/shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class ArrayMethodsService {
  arr: IUser[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
      },
      phone: '1-770-736-8031 x56442',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
      },
      phone: '010-692-6593 x09125',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
      },
      phone: '1-463-123-4447',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
      },
      phone: '493-170-9623 x156',
      company: {
        name: 'Robel-Corkery',
        catchPhrase: 'Multi-tiered zero tolerance productivity',
        bs: 'transition cutting-edge web services',
      },
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
      },
      phone: '(254)954-1289',
      company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution',
        bs: 'revolutionize end-to-end systems',
      },
    },
  ];

  constructor() {}

  pushMethod() {
    let obj = {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
      },
      phone: '1-477-935-8478 x6430',
      company: {
        name: 'Considine-Lockman',
        catchPhrase: 'Synchronised bottom-line interface',
        bs: 'e-enable innovative applications',
      },
    };
    this.arr.push(obj);
    console.log(this.arr);
    alert('Object pushed!');
  }

  concatMethod() {
    let secondArr = [
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
          street: 'Norberto Crossing',
          suite: 'Apt. 950',
          city: 'South Christy',
          zipcode: '23505-1337',
        },
        phone: '1-477-935-8478 x6430',
        company: {
          name: 'Considine-Lockman',
          catchPhrase: 'Synchronised bottom-line interface',
          bs: 'e-enable innovative applications',
        },
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
          street: 'Rex Trail',
          suite: 'Suite 280',
          city: 'Howemouth',
          zipcode: '58804-1099',
        },
        phone: '210.067.6132',
        company: {
          name: 'Johns Group',
          catchPhrase: 'Configurable multimedia task-force',
          bs: 'generate enterprise e-tailers',
        },
      },
    ];

    let thirdArr = [
      {
        id: 8,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
          street: 'Rex Trail',
          suite: 'Suite 280',
          city: 'Howemouth',
          zipcode: '58804-1099',
        },
        phone: '210.067.6132',
        company: {
          name: 'Johns Group',
          catchPhrase: 'Configurable multimedia task-force',
          bs: 'generate enterprise e-tailers',
        },
      },
    ];

    // let concatedArr = this.arr.concat(secondArr);
    let concatedArr = this.arr.concat(secondArr, thirdArr);
    console.log(concatedArr);
    console.log(this.arr);
    alert('arrays are concated!');
  }

  constructorPrototype() {
    let obj = { id: 101, name: 'pragati' };
    let str = 'pragati';
    let num = 2000;
    let bool = true;

    let result = this.arr.constructor;
    console.log(result);
    console.log(obj.constructor);
    console.log(str.constructor);
    console.log(num.constructor);
    console.log(bool.constructor);
  }

  copyWithinMethod() {
    console.log('Before : ');
    console.log(this.arr);
    console.log('After : ');
    // console.log(this.arr.copyWithin(3, 0));
    // console.log(this.arr.copyWithin(2, 0, 2));
    // console.log(this.arr.copyWithin(2, 0, -3))
    console.log(this.arr.copyWithin(2, 0, -2));
  }

  entriesMethod() {
    const result = this.arr.entries();
    for (let x of result) {
      console.log(x);
    }
    console.log(result);
  }

  everyMethod() {
    //1st way
    function checkUsernameLength(obj: IUser) {
      // return obj.username.length > 4; //false; it return 1 obj's condition false so it false
      return obj.username.length > 3; //true; it return all obj's condition true
    }

    console.log(this.arr.every(checkUsernameLength));

    //2nd way
    function checkLength(el: any, index: number, arr: any[]) {
      console.log(el);

      console.log(arr[index].username);
      console.log(el.username.length > 4);

      return el.username.length > 4;
    }

    console.log(this.arr.every(checkLength));
  }

  fillMethod() {
    this.arr.fill(
      {
        id: 8,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
          street: 'Rex Trail',
          suite: 'Suite 280',
          city: 'Howemouth',
          zipcode: '58804-1099',
        },
        phone: '210.067.6132',
        company: {
          name: 'Johns Group',
          catchPhrase: 'Configurable multimedia task-force',
          bs: 'generate enterprise e-tailers',
        },
      },
      2,
      4
    );

    console.log(this.arr);
  }

  filterMethod() {
    let filteredArray = this.arr.filter(
      (e) => e.company.name === 'Romaguera-Crona'
    );
    console.log(filteredArray);
  }

  findMethod() {
    let findedArray = this.arr.find(
      (e) => e.company.name === 'Romaguera-Crona'
    );
    console.log(findedArray);
  }

  findIndexMethod() {
    let index = this.arr.findIndex((e) => e.username === 'Karianne');
    console.log(index);
  }

  forEachMethod() {
    let sum = 0;
    this.arr.forEach((e) => (sum += e.id));
    console.log(sum);

    this.arr.forEach((item, index, array) => {
      array[index].username = item.username + 'A';
    });
    console.log(this.arr);
  }

  fromMethod() {
    let str = 'Pragati';
    console.log(Array.from(str));
  }

  includesMethod() {
    console.log(this.arr.filter((e) => e.name.includes('Ervin Howell'))); //true - array
    console.log(this.arr.filter((e) => e.name.includes('Ervin'))); // true - array
    console.log(this.arr.filter((e) => e.name.includes('Ervin', 3))); //false - empty array

    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    // let bool = fruits.includes('Apple');
    let bool = fruits.includes('Apple', 3);
    console.log(bool);
  }

  indexOfMethod() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    let index = fruits.indexOf('Mango');
    console.log(index);
  }

  isArrayMethod() {
    console.log(Array.isArray(this.arr)); //true
    console.log(Array.isArray('sd')); //false
    console.log(Array.isArray([1, 32, 4, 43])); //true
  }

  joinMethod() {
    const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    // let str = fruits.join();
    let str = fruits.join(' and ');
    console.log(str);
  }

  keysMethod() {
    // const keys = this.arr.keys();
    const keys = Object.keys(this.arr);

    let text = '';
    for (let x of keys) {
      console.log(x);

      text += x + ` `;
    }

    console.log(text);
  }

  lastIndexOfMethod() {
    const fruits = ['Mango', 'Orange', 'Apple', 'Mango'];
    let index = fruits.indexOf('Mango');
    let index2 = fruits.lastIndexOf('Mango');
    console.log(index, index2);
  }

  lengthProperty() {
    console.log(this.arr.length);

    this.arr.length = 2;
    console.log(this.arr);
  }

  mapMethod() {
    // const userNames = this.arr.map((e) => e.username);
    const userNames = this.arr.map((e) => e.username + 'A');
    console.log(this.arr);
    console.log(userNames);
    // [ "BretA", "AntonetteA", "SamanthaA", "KarianneA", "KamrenA" ]
  }

  popMethod() {
    const newArray = this.arr.pop();
    console.log(this.arr);
    console.log(newArray);
  }

  reduceMethod() {
    //1st example
    const numbers = [200, 25, 50];
    function sub(total: number, num: number) {
      return total - num;
    }
    console.log(numbers.reduce(sub));

    //2nd example
    const numbers2 = [15.5, 2.1, 1, 3.6, 2.3];
    function sum(total: number, num: number) {
      return total + Math.round(num);
    }
    console.log(numbers2.reduce(sum, 0));
  }

  reduceRightMethod() {
    //1st example
    const numbers = [200, 25, 50];
    function sub(total: number, num: number) {
      return total - num;
    }
    console.log(numbers.reduceRight(sub));

    //2nd example
    const numbers2 = [15.5, 2.1, 1, 3.6, 2.3];
    function sum(total: number, num: number) {
      return total + Math.round(num);
    }
    console.log(numbers2.reduceRight(sum, 0));

    //3rd example
    const numbers3 = [100, 25, 200];
    function sub2(total: number, num: number) {
      return total - num;
    }
    console.log(numbers3.reduceRight(sub2));
  }

  reverseMethod() {
    this.arr.reverse();
    console.log(this.arr);
  }

  shiftMethod() {
    const shiftedArray = this.arr.shift();
    console.log(this.arr);
    console.log(shiftedArray);
  }

  unshiftMethod() {
    let obj = {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
      },
      phone: '1-477-935-8478 x6430',
      company: {
        name: 'Considine-Lockman',
        catchPhrase: 'Synchronised bottom-line interface',
        bs: 'e-enable innovative applications',
      },
    };

    const unshiftedArray = this.arr.unshift(obj);
    console.log(this.arr);
    console.log(unshiftedArray);
  }

  valueOfMethod() {
    console.log(this.arr.valueOf());
  }

  toStringMethod() {
    let str = this.arr.map((e) => e.username).toString();
    console.log(str);
  }

  spliceMethod() {
    // 1st example
    // let arr1 = this.arr.splice(2, 1);
    // console.log(arr1);
    // console.log(this.arr);

    // 2nd example
    //  let arr2 = this.arr.splice(2, 2);
    //  console.log(arr2);
    //  console.log(this.arr);

    // 3rd example
    let obj = {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
      },
      phone: '1-477-935-8478 x6430',
      company: {
        name: 'Considine-Lockman',
        catchPhrase: 'Synchronised bottom-line interface',
        bs: 'e-enable innovative applications',
      },
    };
    //  let arr3 = this.arr.splice(2, 0, obj);
    //  console.log(arr3);
    //  console.log(this.arr);

    //4th example
    let arr4 = this.arr.splice(2, 1, obj);
    console.log(arr4);
    console.log(this.arr);
  }

  sliceMethod() {
    // 1st example
    // let arr1 = this.arr.slice(1, 3);
    // console.log(arr1);
    // console.log(this.arr);

    //  2nd example
    let arr2 = this.arr.slice(-3, -1);
    console.log(arr2);
    console.log(this.arr);
  }

  sortMethod() {
    //1st example ascending order for string
    // this.arr.sort((a: IUser, b: IUser) => {
    //   if (a.name < b.name) return -1;
    //   else if (a.name > b.name) return 1;
    //   else return 0;
    // });
    // console.log(this.arr);
    //2nd example for descending order for string
    // this.arr.sort((a: IUser, b: IUser) => {
    //   if (a.name < b.name) return 1;
    //   else if (a.name > b.name) return -1;
    //   else return 0;
    // });
    // console.log(this.arr);

    // //3rd example for ascending order for number
    // this.arr.sort((a: IUser, b: IUser) => {
    //   if (a.address.zipcode < b.address.zipcode) return -1;
    //   else if (a.address.zipcode > b.address.zipcode) return 1;
    //   else return 0;
    // });
    // console.log(this.arr);

    //4th eaxmple for number ascending order
    let nums = [25, 100, 45, 67, 2, 56, 1000, 0.1, 5.7];
    nums.sort((a: number, b: number) => {
      if (a > b) return 1;
      else return -1;
    });
    console.log(nums);
  }

  someMethod() {
    //1st way
    function checkUsernameLength(obj: IUser) {
      // return obj.username.length > 4; //true; it return 1 obj's condition true so it true
      return obj.username.length > 3; //true; it return all obj's condition true
    }

    console.log(this.arr.some(checkUsernameLength));

    //2nd way
    function checkLength(el: any, index: number, arr: any[]) {
      console.log(el);

      console.log(arr[index].username);
      console.log(el.username.length > 4);

      return el.username.length > 4;
    }

    console.log(this.arr.some(checkLength));

    //3rd example
    // function checkCompanyName(el: any, index: number, arr: any[]) {
    //   console.log(el);
    //   console.log(!el.company.name);
    //   return !el.company.name;
    // }

    function checkCompanyName(obj: any) {
      return !obj.company.name;
    }
    console.log(this.arr.some(checkCompanyName));
  }

  diffEverySomeMethods() {
    let productArray = [
      {
        productName: 'Netflix',
        isSubscriptionValid: false,
        isPaymentApproved: true,
      },
      {
        productName: 'Amazon Video',
        isSubscriptionValid: false,
        isPaymentApproved: false,
      },
      {
        productName: 'Some Subscriber',
        isSubscriptionValid: true,
        isPaymentApproved: true,
      },
    ];

    function checkValidation(obj: any) {
      console.log(obj);
      console.log(obj.isSubscriptionValid || obj.isPaymentApproved);

      return obj.isSubscriptionValid || obj.isPaymentApproved;
    }

    console.log('Every method return true if all tests return true!');
    console.log(productArray.every(checkValidation));

    console.log('Some method return true if any one test return true!');
    console.log(productArray.some(checkValidation));
  }
}
