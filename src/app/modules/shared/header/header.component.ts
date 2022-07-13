import { Component, OnInit } from '@angular/core';
import { withModule } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { timer, takeUntil, interval, fromEvent } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { UnsubscriberService } from 'src/app/core/services/common/Unsubscriber/unsubscriber.service';
import { CartModelComponent } from '../../cart-module/cart-model/cart-model.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UnsubscriberService]
})
export class HeaderComponent implements OnInit {
  bsModalRef!: BsModalRef;
  favouriteTotal!: number;
  items: string[] = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
  count = 0;

  constructor(
    private modalService: BsModalService,
    public cartService: CartService,
    private translate: TranslateService,
    private readonly _unsubscriber: UnsubscriberService
  ) {}

  ngOnInit(): void {
    this.cartService.getfavouriteTotal().subscribe((data) => {
      this.favouriteTotal = data;
    });
  }

  public showModal() {
    this.bsModalRef = this.modalService.show(CartModelComponent);
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
