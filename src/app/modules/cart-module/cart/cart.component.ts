import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { ToasterService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  subTotal = 0;
  shipping = 70;

  @ViewChild('inputQuantity') inputQuantity!: ElementRef;

  constructor(
    public cartService: CartService,
    private toastrService: ToasterService
  ) {}

  ngOnInit(): void {
    for (let i = 0; i < this.cartService.cartItems.length; i++) {
      this.subTotal +=
        (this.cartService.cartItems[i].quantity || 0) *
        this.cartService.cartItems[i].price;
    }
  }

  onDelete(id: number) {
    this.cartService.deleteItem(id);

    this.subTotal = 0;
    for (let i = 0; i < this.cartService.cartItems.length; i++) {
      this.subTotal +=
        (this.cartService.cartItems[i].quantity || 0) *
        this.cartService.cartItems[i].price;
    }
  }

  onMins(id: number) {
    this.cartService.minsItem(id);
    this.subTotal = 0;

    for (let i = 0; i < this.cartService.cartItems.length; i++) {
      this.subTotal +=
        (this.cartService.cartItems[i].quantity || 0) *
        this.cartService.cartItems[i].price;
    }
  }

  onPlus(id: number) {
    this.cartService.plusItem(id);

    this.subTotal = 0;
    for (let i = 0; i < this.cartService.cartItems.length; i++) {
      this.subTotal +=
        (this.cartService.cartItems[i].quantity || 0) *
        this.cartService.cartItems[i].price;
    }
  }

  onQuantity(event: any) {
    console.log(event.key);

    try {
      let k;
      if (/^[0-9]*$/.test(event.key)) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  onKeyup(id: number) {
    console.log(this.inputQuantity.nativeElement.value);

    let index: number = this.cartService.cartItems.findIndex(
      (product) => product.id === id
    );

    if (this.inputQuantity.nativeElement.value == 0) {
      this.toastrService.toasterWarning("Can't enter 0 quantity!!");
      this.cartService.cartItems[index].quantity = 1;
    } else {
      this.cartService.cartItems[index].quantity = Number(
        this.inputQuantity.nativeElement.value
      );
      this.toastrService.toasterSuccess('Successfully changed quantity!!');
    }

    this.subTotal = 0;
    this.cartService.count = 0;
    for (let i = 0; i < this.cartService.cartItems.length; i++) {
      this.subTotal +=
        (this.cartService.cartItems[i].quantity || 0) *
        this.cartService.cartItems[i].price;

      this.cartService.count += this.cartService.cartItems[i].quantity || 0;
    }
  }
}
