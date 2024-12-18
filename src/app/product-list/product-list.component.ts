import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

// Define a Product interface for type checking
export interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule]  // Import CommonModule here
})
export class ProductListComponent {
  // Sample products array
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 }
  ];

  // Method to add product to the cart
  addToCart(product: Product) {
    console.log('Product added to cart:', product);
  }
}
