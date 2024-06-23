import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CartItem, CartService } from "../../services/cart.service";
import { ProductCardCartComponent } from "../../shared/product-card-cart/product-card-cart.component";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ProductCardCartComponent,
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartService = inject(CartService);

  cart: CartItem[] = [];

  ngOnInit() {
    this.cartService.cartSubject.subscribe(result => {
      this.cart = result;
    });
  }

}
