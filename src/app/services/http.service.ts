import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {  
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getCategories(): Observable<string[]> { 
    return this.http.get<string[]>(`${this.apiUrl}/products/categories`);
  }

  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/category/${category}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }
  
}
