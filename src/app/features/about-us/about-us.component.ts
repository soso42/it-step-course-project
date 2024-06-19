import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { InfoCardsComponent } from "../../shared/info-cards/info-cards.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    InfoCardsComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
