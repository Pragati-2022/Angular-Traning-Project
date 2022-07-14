import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {
    const routeParam = this.activatedRoute.snapshot.paramMap;
    this.productService.id = Number(routeParam.get('id'));
  }

  ngOnInit(): void {
    const routeParam = this.activatedRoute.snapshot.paramMap;
    const productIdFromRoute = Number(routeParam.get('id'));
    this.product = this.productService.products.find((product) => product.id === productIdFromRoute);
  }

  onBack() {
    this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.productService.id = 0;
  }
}
