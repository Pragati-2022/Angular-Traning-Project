import { Component, OnInit } from '@angular/core';
import { SearchFilterService } from 'src/app/core/services/search-filter.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent{
  searchStudent! : string;
  searchStudentByEmail! : string;
  
  constructor(public searchFilterService : SearchFilterService) { }

}
