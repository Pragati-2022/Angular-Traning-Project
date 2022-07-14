import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/core/services/product/api.service';
import { IProduct } from '../../shared/model/productAPI';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class APIComponent implements OnInit {
  products!: IProduct[];
  returnedArray!: IProduct[];

  constructor(
    private apiService: ApiService,
    private ngxUiLoaderService: NgxUiLoaderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      console.log(data['data']);
    });

    this.ngxUiLoaderService.start();
    this.apiService.getProduct().subscribe((data) => {
      this.products = data.data;
      this.returnedArray = this.products.slice(0, 3);
      this.ngxUiLoaderService.stop();
    });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.products.slice(startItem, endItem);
  }
}
