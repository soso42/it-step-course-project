import { Component, Input } from '@angular/core';
import { Product } from "../../interfaces/product";
import { RouterLink } from "@angular/router";
import { TitleShortenerPipe } from "../../pipes/title-shortener.pipe";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink,
    TitleShortenerPipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product!: Product;

}
