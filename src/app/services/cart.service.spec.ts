import { CartService } from './cart.service';
import { ToastController } from '@ionic/angular';

describe('CartService', () => {
  let service: CartService;
  let toastControllerMock: Partial<ToastController>;

  beforeEach(() => {

    toastControllerMock = {
      create: jest.fn().mockResolvedValue({ present: jest.fn() })
    };

    const store: Record<string, string> = {};
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key: string): string | null => store[key] || null);
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation((key: string, value: string): void => {
      store[key] = value;
    });
    jest.spyOn(Storage.prototype, 'removeItem').mockImplementation((key: string): void => {
      delete store[key];
    });

    service = new CartService(toastControllerMock as ToastController);
  });

  it('debe inicializar el carrito desde localStorage', () => {
    expect(service.getCart()).toEqual([]);
    service.addToCart({ id: 1, name: 'Producto' });
    expect(service.getCart().length).toBe(1);
  });

  it('debe agregar un producto al carrito y actualizar contador', (done) => {
    service.addToCart({ id: 1, name: 'Producto' });
    expect(service.getCart()).toEqual([{ id: 1, name: 'Producto' }]);
    service.cartCount$.subscribe((count) => {
      expect(count).toBe(1);
      done();
    });
    expect(toastControllerMock.create).toHaveBeenCalled();
  });

  it('debe eliminar un producto del carrito', () => {
    service.addToCart({ id: 1, name: 'Producto' });
    service.removeFromCart(0);
    expect(service.getCart()).toEqual([]);
    expect(toastControllerMock.create).toHaveBeenCalled();
  });

  it('debe vaciar el carrito', (done) => {
    service.addToCart({ id: 1, name: 'Producto' });
    service.clearCart();
    expect(service.getCart()).toEqual([]);
    service.cartCount$.subscribe((count) => {
      expect(count).toBe(0);
      done();
    });
    expect(toastControllerMock.create).toHaveBeenCalled();
  });
});
