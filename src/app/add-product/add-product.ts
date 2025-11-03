import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  constructor(private router: Router, private productService: ProductService) {}
  newProduct = { name: '', price: null };

  onSubmit(form: any) {
    if (form.valid) {
      this.productService.addProduct(this.newProduct)
      form.resetForm();
      this.router.navigate(['/']);
    }
  }
}
