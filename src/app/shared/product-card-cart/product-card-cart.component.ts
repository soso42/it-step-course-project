import { Component, inject, Input } from '@angular/core';
import { CartItem, CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product-card-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-card-cart.component.html',
  styleUrl: './product-card-cart.component.scss'
})
export class ProductCardCartComponent {

  cartService = inject(CartService);

  @Input() item!: CartItem;

  onClickRemove(id: string) {
    this.cartService.removeProductFromCart(id);
  }

  onClickDecrement() {
    this.cartService.editProductQuantityInCart(this.item, this.item.quantity - 1);
  }

  onClickIncrement() {
    this.cartService.editProductQuantityInCart(this.item, this.item.quantity + 1);
  }

}
