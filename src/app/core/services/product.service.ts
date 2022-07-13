import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  id! : number | 0;
  products = [
    {
      id : 1,
      name: 'Watch',
      image : 'assets/images/1.jpeg',
      color: 'White',
      price: 1000,
      review: 2,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis! 
        Rerum, ducimus praesentium, eum reiciendis consequatur expedita aliquam!`,
    },
    {
      id : 2,
      name: 'Camera',
      image : 'assets/images/2.jpeg',
      color: 'Black',
      price: 20000,
      review: 5,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis! 
      Rerum, ducimus praesentium, eum reiciendis consequatur expedita aliquam!`,
    },
    {
      id : 3,
      name: 'Shoe',
      image : 'assets/images/3.jpeg',
      color: 'Black',
      price: 200,
      review: 3,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis! 
      Rerum, ducimus praesentium, eum reiciendis consequatur expedita aliquam!`,
    },
    {
      id : 4,
      name: 'Top',
      image : 'assets/images/4.jpeg',
      color: 'Gray',
      price: 200,
      review: 4,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis! 
      Rerum, ducimus praesentium, eum reiciendis consequatur expedita aliquam!`,
    },
    {
      id : 5,
      name: 'Phone',
      image : 'assets/images/5.jpg',
      color: 'Black',
      price: 200,
      review: 5,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis! 
      Rerum, ducimus praesentium, eum reiciendis consequatur expedita aliquam!`,
    },
    {
      id : 6,
      name: 'Eyeglasses',
      image : 'assets/images/6.jpeg',
      color: 'Black',
      price: 200,
      review: 5,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis! 
      Rerum, ducimus praesentium, eum reiciendis consequatur expedita aliquam!`,
    },
    {
      id : 7,
      name: 'Bag',
      image : 'assets/images/7.jpeg',
      color: 'Black',
      price: 200,
      review: 5,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, facilis! 
      Rerum, ducimus praesentium, eum reiciendis consequatur expedita aliquam!`,
    },
  ];

  constructor() {}
}
