import { Component, OnInit } from '@angular/core';
import { SearchFilterService } from 'src/app/core/services/search-filter.service';

@Component({
  selector: 'app-multi-search-filter',
  templateUrl: './multi-search-filter.component.html',
  styleUrls: ['./multi-search-filter.component.scss']
})
export class MultiSearchFilterComponent {
  searchByName! : string;
  searchByEmail! : string;

  constructor(public searchFilterService : SearchFilterService) { }
}
