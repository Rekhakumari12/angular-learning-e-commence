import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersDetails } from '../services/user.service';

@Component({
  selector: 'app-review-order',
  imports: [CommonModule],
  templateUrl: './review-order.html',
  styleUrl: './review-order.css',
  standalone: true,
})
export class ReviewOrder implements OnInit {
  user: any;
  totalPrice: any;
  cartItems: any;

  constructor(
    private cartService: CartService,
    private router: Router,
    private userDetails: UsersDetails
  ) {}

  ngOnInit() {
    this.user = this.userDetails.getUserDetails();
    this.totalPrice = this.cartService.getTotalPrice();
    this.cartItems = this.cartService.getItems();
    console.log(this.user);
  }

  onEdit() {
    this.router.navigate(['/checkout']);
  }

  onPlaceOrder() {
    return true;
  }
}
