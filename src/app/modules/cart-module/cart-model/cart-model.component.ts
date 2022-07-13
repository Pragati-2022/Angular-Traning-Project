import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-model',
  templateUrl: './cart-model.component.html',
  styleUrls: ['./cart-model.component.scss']
})
export class CartModelComponent implements OnInit {

  subTotal = 0;
  shipping = 70;

  constructor(public cartService : CartService, private router : Router, private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    for (let i = 0; i < this.cartService.cartItems.length; i++) {
      this.subTotal +=
        (this.cartService.cartItems[i].quantity || 0) *
        this.cartService.cartItems[i].price;
    }
  }

  onViewCart(){
    this.router.navigate(['cart']);
    this.bsModalRef.hide();
  }

  onDelete(id : number){
    this.cartService.deleteItem(id);

    if(!this.cartService.cartItems.length){
      this.bsModalRef.hide();
    }

    this.subTotal = 0;
    for (let i = 0; i < this.cartService.cartItems.length; i++) {
      this.subTotal +=
        (this.cartService.cartItems[i].quantity || 0) *
        this.cartService.cartItems[i].price;
    }
  }
}
