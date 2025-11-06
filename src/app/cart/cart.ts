import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderSummary } from '../order-summary/order-summary';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule, OrderSummary],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  cartItems: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  removeFromCart(id: any) {
    this.cartService.removeIProduct(id);
    this.cartItems = this.cartService.getItems();
  }

  get totalItemCount() {
    return this.cartService.getTotalItemCount();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
