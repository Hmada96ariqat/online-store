import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define the CartItem interface for item structure
export interface CartItem {
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule]  // Ensure CommonModule is imported for ngFor
})
export class CartComponent {
  // Items array with CartItem type
  items: CartItem[] = [
    { name: 'Item 1', price: 20 },
    { name: 'Item 2', price: 30 }
  ];

  // clearCart method to reset the items array
  clearCart() {
    this.items = [];
  }
}
