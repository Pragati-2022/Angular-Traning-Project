import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart } from 'src/app/modules/shared/model/cart';
import { IAction } from 'src/app/modules/shared/model/user';
import { ToasterService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ICart[] = [];
  count = 0;
  private favouriteTotal = new BehaviorSubject(0);
  favouriteTotal$ = this.favouriteTotal.asObservable();

  constructor(private toastrService: ToasterService) {
    for (let i = 0; i < this.cartItems.length; i++) {
      this.count += this.cartItems[i].quantity || 0;
    }
  }

  addToCart(item: ICart) {
    this.count = 1;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.count += this.cartItems[i].quantity || 0;
    }

    let index: number = this.cartItems.findIndex((product) => product.id === item.id);

    if (index >= 0) {
      let quantity = this.cartItems[index].quantity || 0;
      this.cartItems[index].quantity = quantity + 1;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    const passAction : IAction = {
      isNavigation : true,
      path : "cart",
    }
    this.toastrService.toasterSuccess('Added to cart succesfully!!', passAction );
  }

  clearCart() {
    this.count = 0;
    this.cartItems = [];
  }

  deleteItem(id: number) {
    let index: number = this.cartItems.findIndex((product) => product.id === id);

    if (index != -1 && index != null) {
      this.count = this.count - (this.cartItems[index].quantity || 0);
      this.cartItems.splice(index, 1);
      this.toastrService.toasterError('Cart item is deleted!!');
    } else {
      this.toastrService.toasterError('There is any issue!!');
    }
  }

  plusItem(id: number) {
    let index: number = this.cartItems.findIndex((product) => product.id === id);

    if (index != -1 && index != null) {
      let quantity = this.cartItems[index].quantity || 0;
      quantity += 1;

      this.cartItems[index].quantity = quantity;
      this.count = this.count + 1;
      this.toastrService.toasterSuccess('Successfully plused the cart item!!');
    } else {
      this.toastrService.toasterError('There is any issue!!');
    }
  }

  minsItem(id: number) {
    let index: number = this.cartItems.findIndex((product) => product.id === id);

    if (index != -1 && index != null) {
      let quantity = this.cartItems[index].quantity || 0;
      quantity = quantity - 1;

      if (quantity > 0) {
        this.cartItems[index].quantity = quantity;
        this.toastrService.toasterWarning('Item minus from cart!!');
        this.count = this.count - 1;
      } else {
        this.toastrService.toasterWarning('Max quantity is one!');
      }
    }
  }

  getfavouriteTotal(): Observable<any> {
    return this.favouriteTotal$;
  }

  setfavouriteTotal(latestValue: number) {
    let count: number = 0;

    this.getfavouriteTotal().subscribe((data) => {
      this.count = data;
    });

    return this.favouriteTotal.next(this.count + latestValue);
  }
}
