import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItem: any[] = [];

  getItems() {
    return this.cartItem;
  }
  addProduct(product: any) {
    this.cartItem.push(product);
  }
  removeIProduct(itemId: any) {
    this.cartItem = this.cartItem.filter((item) => item.id !== itemId);
  }
  clearCart() {
    this.cartItem = [];
  }
}
