import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InfoCardsComponent } from "../../shared/info-cards/info-cards.component";

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

}
