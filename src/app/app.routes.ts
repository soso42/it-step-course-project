import { Routes } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";
import { ContactComponent } from "./features/contact/contact.component";
import { ErrorComponent } from "./features/error/error.component";
import { AboutUsComponent } from "./features/about-us/about-us.component";
import { ShopComponent } from "./features/shop/shop.component";
import { ProductPageComponent } from "./features/product-page/product-page.component";
import { CartComponent } from "./features/cart/cart.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Local Shop' },

  { path: 'shop', component: ShopComponent, title: 'Shop all products' },
  { path: 'product/:id', component: ProductPageComponent},

  { path: 'cart', component: CartComponent, title: 'Shopping cart' },

  { path: 'about', component: AboutUsComponent, title: 'About us' },
  { path: 'contact', component: ContactComponent, title: 'Contact us' },

  { path: '**', component: ErrorComponent, title: 'Error 404' }
];
