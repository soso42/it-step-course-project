import { Component, inject } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { InfoCardsComponent } from "../../shared/info-cards/info-cards.component";
import { RouterLink } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../interfaces/product";
import { catchError, map, tap } from "rxjs";
import { ProductCardComponent } from "../../shared/product-card/product-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    InfoCardsComponent,
    RouterLink,
    ProductCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  topDiscountedProducts: Product[] = [];
  highestRatedProducts: Product[] = [];

  productService = inject(ProductService);

  constructor() {
    this.getFilteredProducts();
  }

  getFilteredProducts() {
    this.productService.getProducts()
      .pipe(
        map((result) => {
          return result.products;
        }),
        tap((result) => {
          // Get most discounted products
          result.sort((a: Product, b: Product) => b.price.discountPercentage - a.price.discountPercentage);
          this.topDiscountedProducts = result.slice(0, 4);
          // Get highest rated products
          result.sort((a: Product, b: Product) => b.rating - a.rating);
          this.highestRatedProducts = result.slice(0, 4);
        }),
        catchError((err) => {
          throw 'Error getting http response. Details: ' + err;
        })
      )
      .subscribe();
  }

}
