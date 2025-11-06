import { Injectable } from '@angular/core';
// to share accross component
@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItem: any[] = [];

  getItems() {
    return this.cartItem;
  }
  getTotalItemCount() {
    return this.cartItem.reduce((sum, item) => sum + item.quantity, 0);
  }
  addProduct(product: any) {
    const productId = this.cartItem.findIndex((item) => item.id === product.id);
    if (productId === -1) {
      this.cartItem.push(product);
    } else {
      this.cartItem[productId].quantity = this.cartItem[productId].quantity + 1;
    }
  }
  removeIProduct(itemId: any) {
    this.cartItem = this.cartItem.filter((item) => item.id !== itemId);
  }
  updateQuantity(idx: number, qty: number) {
    this.cartItem[idx].quantity = Number(qty);
  }
  getTotalPrice() {
    return this.cartItem.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }
  clearCart() {
    this.cartItem = [];
  }
}
