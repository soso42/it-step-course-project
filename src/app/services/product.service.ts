import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductResponse } from "../interfaces/product-response";
import { catchError, tap } from "rxjs";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.httpClient.get<ProductResponse>('https://api.everrest.educata.dev/shop/products/all')
  }

}
