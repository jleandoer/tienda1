import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  standalone:false,
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit {
  cart: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.loadCart();
  }

  goToSummary() {
    this.router.navigate(['/summary'], { state: { cart: this.cart, total: this.total } });
  }
  
}
