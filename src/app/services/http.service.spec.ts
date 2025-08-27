import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://fakestoreapi.com';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });

    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('debería obtener todos los productos', () => {
    const mockProducts = [{ id: 1, title: 'Producto 1' }];
    
    service.getProducts().subscribe((products) => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(${apiUrl}/products);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('debería obtener las categorías', () => {
    const mockCategories = ['electronics', 'clothing'];
    
    service.getCategories().subscribe((categories) => {
      expect(categories).toEqual(mockCategories);
    });

    const req = httpMock.expectOne(${apiUrl}/products/categories);
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories);
  });

  it('debería obtener productos por categoría', () => {
    const category = 'electronics';
    const mockProducts = [{ id: 2, title: 'Producto 2' }];

    service.getProductsByCategory(category).subscribe((products) => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(${apiUrl}/products/category/${category});
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('debería obtener un producto por ID', () => {
    const id = 3;
    const mockProduct = { id: 3, title: 'Producto 3' };

    service.getProductById(id).subscribe((product) => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne(${apiUrl}/products/${id});
    expect(req.request.method).toBe('GET');
    req.flush(mockProduct);
  });
});
