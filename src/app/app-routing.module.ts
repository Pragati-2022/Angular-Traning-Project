import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth/auth.guard';
import { ApiService } from './core/services/product/api.service';
import { CartComponent } from './modules/cart-module/cart/cart.component';
import { AboutComponent } from './modules/product/about/about.component';
import { APIComponent } from './modules/product/api/api.component';
import { ArrayMethodsComponent } from './modules/product/array-methods/array-methods.component';
import { ContactComponent } from './modules/product/contact/contact.component';
import { AddProductComponent } from './modules/product/home/add-product/add-product.component';
import { HomeComponent } from './modules/product/home/home.component';
import { ProductDetailComponent } from './modules/product/home/product-detail/product-detail.component';
import { MultiSearchFilterComponent } from './modules/product/multi-search-filter/multi-search-filter.component';
import { OnboardingComponent } from './modules/product/multi-step-form/onboarding/onboarding.component';
import { SearchFilterComponent } from './modules/product/search-filter/search-filter.component';
import { StringMethodsComponent } from './modules/product/string-methods/string-methods.component';
import { LoginComponent } from './modules/user/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
    ],
  },
  // {
  //   path : 'home/product/:id',
  //   component : ProductDetailComponent
  // },
  {
    path: 'home/add-product',
    canActivate: [AuthGuard],
    component: AddProductComponent,
  },
  {
    path: 'about',
    canActivate: [AuthGuard],
    component: AboutComponent,
  },
  {
    path: 'contact',
    canActivate: [AuthGuard],
    component: ContactComponent,
  },
  {
    path: 'search',
    canActivate: [AuthGuard],
    component: SearchFilterComponent,
  },
  {
    path: 'multiSearch',
    canActivate: [AuthGuard],
    component: MultiSearchFilterComponent,
  },
  {
    path: 'api',
    canActivate: [AuthGuard],
    component: APIComponent
  },
  {
    path: 'api/:id',
    canActivate: [AuthGuard],
    component: APIComponent,
    resolve: {data: AuthGuard}  
  },
  {
    path: 'mutliStep',
    canActivate: [AuthGuard],
    component: OnboardingComponent
  },
  {
    path: 'arrayMethods',
    canActivate: [AuthGuard],
    component: ArrayMethodsComponent
  },
  {
    path: 'stringMethods',
    canActivate: [AuthGuard],
    component: StringMethodsComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    component: CartComponent,
  },
  {
    path: 'a',
    loadChildren: () =>
      import('./modulea/modulea.module').then((m) => m.ModuleaModule),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
