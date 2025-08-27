import { Component, Input } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-product-card',  // 👈 Esto debe coincidir con el HTML
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: any;  // 👈 Asegurar que el Input está definido
}
