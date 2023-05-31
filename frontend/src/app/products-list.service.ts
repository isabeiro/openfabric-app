import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  baseUrl = "http://localhost:8080/api/products"
  
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  readById(_id: string): Observable<Product> {
    const url = `${this.baseUrl}/${_id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product[]> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product[]>(url, product)
  }
}
