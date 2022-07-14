import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { UnsubscriberService } from 'src/app/core/services/common/Unsubscriber/unsubscriber.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ICart } from '../../shared/model/cart';
import { takeUntil} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UnsubscriberService]
})
export class HomeComponent implements OnInit {
  arr = Array;
  count = 0;
  design = {
    bgColor: 'Red',
    color: 'white'
  };
  condition = false;
  img!: string;

  constructor(
    public productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private readonly _unsubscriber: UnsubscriberService,
  ) {}

  ngOnInit(): void {
    this.cartService.getfavouriteTotal().pipe(takeUntil(this._unsubscriber.destroy$)).subscribe();
  }

  onProductDetail(id: number) {
    this.productService.id = id;
    this.router.navigate(['/home/product', id], { relativeTo: this.activatedRoute });
  }

  onAddToCart(product: ICart) {
    this.cartService.addToCart(product);
    this.cartService.setfavouriteTotal(1);
  }

  onLongPress(image: string) {
    this.img = image;
  }

  onBack() {
    this.img = '';
  }
}
