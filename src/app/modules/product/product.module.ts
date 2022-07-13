import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddProductComponent } from './home/add-product/add-product.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SearchFilterPipe } from 'src/app/modules/shared/pipes/search-filter.pipe';
import { MultiSearchFilterComponent } from './multi-search-filter/multi-search-filter.component';
import { MultiSearchFilterPipe } from '../shared/pipes/multi-search-filter.pipe';
import { APIComponent } from './api/api.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { UnLessDirective } from '../shared/directives/un-less.directive';
import { LongPressDirective } from '../shared/directives/long-press.directive';
import { OnboardingComponent } from './multi-step-form/onboarding/onboarding.component';
import { AccountComponent } from './multi-step-form/onboarding/account/account.component';
import { PersonalComponent } from './multi-step-form/onboarding/personal/personal.component';
import { TranslateModule } from '@ngx-translate/core';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { StringMethodsComponent } from './string-methods/string-methods.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFilterPipe } from '../shared/pipes/dynamic-filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductDetailComponent,
    AddProductComponent,
    SearchFilterComponent,
    SearchFilterPipe,
    MultiSearchFilterComponent,
    MultiSearchFilterPipe,
    APIComponent,
    HighlightDirective,
    UnLessDirective,
    LongPressDirective,
    OnboardingComponent,
    AccountComponent,
    PersonalComponent,
    ArrayMethodsComponent,
    StringMethodsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule,
    NgxBootstrapIconsModule.pick(allIcons),
    PaginationModule.forRoot(),
    TranslateModule,
    SharedModule
  ],
  exports : [
    AccountComponent,
    PersonalComponent
  ],
  providers: [ ]
})
export class ProductModule { }
