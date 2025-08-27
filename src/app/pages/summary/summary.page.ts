import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  standalone:false,
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss']
})
export class SummaryPage implements OnInit {
  cart: any[] = [];
  total: number = 0;

  constructor(private router: Router, private cartService: CartService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.cart = navigation.extras.state['cart'];
      this.total = navigation.extras.state['total'];
    }
  }

  ngOnInit() {
    this.cartService.clearCart(); // ✅ Vaciar el carrito al llegar a summary
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
