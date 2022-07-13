import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { ToasterService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const routeParam = this.activatedRoute.snapshot.paramMap;
    console.log(routeParam);

    const productIdFromRoute = Number(routeParam.get('id'));
    console.log(productIdFromRoute);

    this.product = this.productService.products.find(
      (product) => product.id === productIdFromRoute
    );
    console.log(this.product);
  }

  onBack() {
    this.router.navigate(['home']);
    this.productService.id = 0;
  }
}
