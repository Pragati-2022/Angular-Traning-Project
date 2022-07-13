import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/product/api.service';
import { IProduct } from '../../shared/model/productAPI';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class APIComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  returnedArray!: IProduct[];
  myValueSub!: Subscription;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    const arr = [
      { place: 'here', name: 'x', other: 'other stuff1' },
      { place: 'there', name: 'x', other: 'other stuff2' },
      { place: 'here', name: 'y', other: 'other stuff4' },
      { place: 'here', name: 'z', other: 'other stuff5' }
    ];

    console.log(arr.map((data) => data.name));
    

    function getUniqueListBy(arr: { place: string; name: string; other: string }[], key: string) {
      return [...new Map(arr.map((item: any) => [item[key], item])).values()];
    }

    const arr1 = getUniqueListBy(arr, 'place');

    console.log('Unique by place');
    console.log(JSON.stringify(arr1));
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      console.log(data['data']);
    });

    this.myValueSub = this.apiService.getProduct().subscribe((data) => {
      this.products = data.data;

      this.returnedArray = this.products.slice(0, 3);
    });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.products.slice(startItem, endItem);
  }

  ngOnDestroy(): void {
    if (this.myValueSub) {
      this.myValueSub.unsubscribe();
      console.log('unsubcribe');
    }
  }
}
