import { Injectable } from '@angular/core';
import { Product } from "../interfaces/product";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];
  cartSubject = new BehaviorSubject(this.cart);


  constructor() {
    this.getCartFromLocalStorage();
  }

  getCartFromLocalStorage() {
    let productsInLocalStorage = localStorage.getItem('cart');
    if (productsInLocalStorage) {
      this.cart = JSON.parse(productsInLocalStorage);
    }
    this.cartSubject.next(this.cart);
  }

  updateCartInLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCartTotal() {
    let total = 0;
    for (let item of this.cart) {
      total += item.product.price.current * item.quantity;
    }
    return total;
  }

  addProductToCart(product: Product, quantity: number) {
    this.cart.push({
      product: product,
      quantity: quantity
    });
    this.updateCartInLocalStorage();
  }

  removeProductFromCart(id: string) {
    this.cart = this.cart.filter(cartItem => {
      return cartItem.product._id !== id;
    });
    this.updateCartInLocalStorage();
    this.cartSubject.next(this.cart);
  }

  editProductQuantityInCart(item: CartItem, newQuantity: number) {
    if (newQuantity === 0) {
      this.removeProductFromCart(item.product._id);
    } else {
      item.quantity = newQuantity;
    }
    this.updateCartInLocalStorage();
  }

}




export interface CartItem {
  product: Product,
  quantity: number,
}
