import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onProductSelected(product: any) {
    this.productService.setSelectedProduct(product);
  }

  get selectedProduct() {
    return this.productService.selectedProduct;
  }
  get cartProductCount() {
    return this.cartService.getItems().length;
  }

  addToCart(product: any) {
    this.cartService.addProduct(product);
  }
}
