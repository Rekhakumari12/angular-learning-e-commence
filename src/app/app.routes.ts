import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { AddProduct } from './add-product/add-product';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { ReviewOrder } from './review-order/review-order';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'add-product', component: AddProduct },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'review', component: ReviewOrder },
];
