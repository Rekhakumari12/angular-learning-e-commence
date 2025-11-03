import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  // private means only class can change/access products directly
  private products: any = [
    { name: 'Angular T-Shirt', price: 25, id: 0 },
    { name: 'Laptop Stand', price: 45, id: 1 },
    { name: 'Mechanic Keyboard', price: 120, id: 2 },
    { name: 'Wireless Mouse', price: 30, id: 3 },
    { name: 'USB-C Hub', price: 50, id: 4 },
  ];

  selectedProduct: any = null;

  getProducts(): any {
    return this.products;
  }

  addProduct(newProduct: any) {
    if (newProduct.name && newProduct.price) {
      const name = newProduct.name.charAt(0).toUpperCase() + newProduct.name.slice(1);
      this.products.push({
        ...newProduct,
        name,
        id: new Date().getTime(),
      });
    }
  }

  setSelectedProduct(product: any) {
    this.selectedProduct = product;
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }
}
