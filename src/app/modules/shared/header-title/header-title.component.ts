import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss'],
})
export class HeaderTitleComponent implements OnInit {
  @Input() title!:string;
  
  constructor() {}

  ngOnInit(): void {
    console.log("Title",this.title);
    
  }
}
