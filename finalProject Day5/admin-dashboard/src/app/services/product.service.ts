import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseURL: string = 'http://localhost:3005/products';

  constructor(private http: HttpClient) {
    // this.http.
  }

  // all product
  getAllProduct(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.baseURL);
  }

  // product id
  getProductById(productId: string): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.baseURL}/${productId}`);
  }

  // add product
  addProduct(product: any): Observable<Iproduct> {
    return this.http.post<Iproduct>(this.baseURL, product);
  }

  // edit
  editProduct(productId: string, product: any): Observable<Iproduct> {
    return this.http.put<Iproduct>(`${this.baseURL}/${productId}`, product);
  }

  // delete
  deletProduct(productId: string) {
    return this.http.delete(`${this.baseURL}/${productId}`);
  }
}
