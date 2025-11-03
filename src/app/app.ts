import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddProduct } from './add-product/add-product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
