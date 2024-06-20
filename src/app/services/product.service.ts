import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductResponse } from "../interfaces/product-response";
import { Product } from "../interfaces/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.httpClient
      .get<ProductResponse>('https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=15');
  }

  getProductById(id: string) {
    return this.httpClient
      .get<Product>('https://api.everrest.educata.dev/shop/products/id/' + id);
  }

}
