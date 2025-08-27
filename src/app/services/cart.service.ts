import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  constructor(private toastController: ToastController) {
    const savedCart = localStorage.getItem('cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [];
    this.cartCount.next(this.cart.length);
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top'
    });
    toast.present();
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartCount.next(this.cart.length);
    this.showToast('Producto agregado al carrito 🛒');
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartCount.next(this.cart.length);
    this.showToast('Producto eliminado del carrito ❌', 'warning');
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
    this.cartCount.next(0);
    this.showToast('Compra realizada con éxito 🎉', 'success');
  }
}
