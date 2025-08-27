import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  standalone:false,
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss']
})
export class ProductDetailsPage implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');  
    if (id) {
      this.httpService.getProductById(+id).subscribe(data => {
        this.product = data;
      });
    }
  }

  

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigate(['/cart']);
  }
}
