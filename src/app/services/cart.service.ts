import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  httpClient = inject(HttpClient)

  cartId!: string;

  constructor() {
    this.getCartIdFromLocalStorage();
  }

  getCartIdFromLocalStorage() {

  }

  isCartCreated(): boolean {
    return !!this.cartId;
  }

  createCart() {

  }

}
