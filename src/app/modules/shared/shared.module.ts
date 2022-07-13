import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { RouterModule } from '@angular/router';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { CartModule } from '../cart-module/cart.module';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { LongPressDirective } from './directives/long-press.directive';
// import { UnLessDirective } from './directives/un-less.directive';
// import { HighlightDirective } from './directives/highlight.directive';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderTitleComponent } from './header-title/header-title.component'; 
import { MethodCardComponent } from './method-card/method-card.component';
import { ProductModule } from '../product/product.module';
import { DynamicFilterPipe } from './pipes/dynamic-filter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MethodCardComponent,
    HeaderTitleComponent,
    DynamicFilterPipe,
    // LongPressDirective,
    // UnLessDirective,
    // HighlightDirective
  ],
  imports: [
    CommonModule,
    NgxNavbarModule,
    RouterModule,
    NgxBootstrapIconsModule.pick(allIcons),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MethodCardComponent,
    HeaderTitleComponent,
    DynamicFilterPipe
  ],
  entryComponents: [
    CartModule,
    ProductModule
  ]
})
export class SharedModule { }
