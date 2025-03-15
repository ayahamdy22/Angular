import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  getAllProduct() {
    return [
      { id: 1, name: 'book', price: 200 },
      { id: 2, name: 'pen', price: 100 },
      { id: 3, name: 'watch', price: 300 },
      { id: 4, name: 'phone', price: 20000 },
    ];
  }
}
