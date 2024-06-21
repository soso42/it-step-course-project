import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InfoCardsComponent } from "../../shared/info-cards/info-cards.component";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../interfaces/product";
import { catchError, tap } from "rxjs";
import { FormsModule } from "@angular/forms";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    InfoCardsComponent,
    FormsModule
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {

  @ViewChild('productMainImage') mainImage!: ElementRef;

  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  cartService = inject(CartService);
  renderer = inject(Renderer2);

  product!: Product;
  productQuantityToBuy!: number;


  ngOnInit() {
    const product_id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(product_id)
      .pipe(
        tap(result => {
          this.product = result;
          this.productQuantityToBuy = this.product.stock > 1 ? 1 : 0;
        }),
        catchError(err => {
          throw 'Error:' + err;
        })
      )
      .subscribe();
  }

  onClickThumbnail(imageURL: string) {
    this.renderer.setAttribute(this.mainImage.nativeElement, 'src', imageURL);
  }

  onClickDecrement() {
    if (this.productQuantityToBuy > 1) {
      this.productQuantityToBuy--;
    }
  }

  onClickIncrement() {
    if (this.product.stock > this.productQuantityToBuy) {
      this.productQuantityToBuy++;
    }
  }

}
