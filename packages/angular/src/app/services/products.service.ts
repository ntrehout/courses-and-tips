import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProductByID(id: string): Observable<Product> {
    return of({
      id,
      name: 'Product',
      price: 100,
    });
  }
}
