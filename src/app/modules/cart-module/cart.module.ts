import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { CartModelComponent } from './cart-model/cart-model.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartComponent,
    CartModelComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
    SharedModule
  ]
})
export class CartModule { }
