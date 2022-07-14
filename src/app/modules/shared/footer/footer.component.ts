import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  count = 0;
  constructor() {}
  message = "It's Footer."

  onLongPress() {
    this.count++;
    console.log(this.count);
  }
}
