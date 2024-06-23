import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  renderer = inject(Renderer2);
  cartService = inject(CartService);

  @ViewChild('overlayMenu') overlayMenu!: ElementRef;
  @ViewChild('dimmer') dimmer!: ElementRef;
  @ViewChild('searchArea') searchArea!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;


  toggleMenu() {
    if (this.overlayMenu.nativeElement.style.display === '' || this.overlayMenu.nativeElement.style.display === 'none') {
      this.renderer.setStyle(this.overlayMenu.nativeElement, 'display', 'flex');
    } else {
      this.renderer.setStyle(this.overlayMenu.nativeElement, 'display', 'none');
    }
  }

  hideDimmer() {
    this.renderer.setStyle(this.dimmer.nativeElement, 'display', 'none');
  }

  onClickDimmer() {
    this.hideDimmer();
  }

  onSearchFocus() {
    this.renderer.setStyle(this.dimmer.nativeElement, 'display', 'block');
    this.renderer.addClass(this.searchArea.nativeElement, 'search-area-while-dimmer');
  }

  onClickSearchIcon() {
    this.hideDimmer();
    console.log(this.searchInput.nativeElement.value);
  }

}
