import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Standalone AppComponent
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './app/product-list/product-list.component';
import { CartComponent } from './app/cart/cart.component';

// Define routes directly in the main.ts file
const routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RouterModule,
      useValue: RouterModule.forRoot(routes)
    }
  ]
})
  .catch((err) => console.error(err));
