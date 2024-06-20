import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InfoCardsComponent } from "../../shared/info-cards/info-cards.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    InfoCardsComponent
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

}
