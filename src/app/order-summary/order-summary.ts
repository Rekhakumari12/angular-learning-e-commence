import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary {
  constructor(private cartService: CartService) {}
  @Input() cartItems: any;

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  updateQuantity(idx: number, value: number) {
    console.log(value, '===');
    this.cartService.updateQuantity(idx, value);
  }
}
