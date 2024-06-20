import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InfoCardsComponent } from "../../shared/info-cards/info-cards.component";
import { ProductService } from "../../services/product.service";
import { Product } from '../../interfaces/product';
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    InfoCardsComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  productService = inject(ProductService);
  products: Product[] = [];

  constructor() {
    this.productService.getProducts()
      .pipe(
        tap((productResponse) => {
            this.products = productResponse.products;
          }
        ),
        catchError(err => {
          throw 'Error getting http response. Details: ' + err;
        })
      )
      .subscribe();
  }

}
