import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProducts } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<IProducts[]>('/api/products');
  }
}
