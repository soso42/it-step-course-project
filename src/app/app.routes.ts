import { Routes } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";
import { ContactComponent } from "./features/contact/contact.component";
import { ErrorComponent } from "./features/error/error.component";
import { AboutUsComponent } from "./features/about-us/about-us.component";
import { ShopComponent } from "./features/shop/shop.component";
import { ProductPageComponent } from "./features/product-page/product-page.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Local Shop' },

  { path: 'product/:id', component: ProductPageComponent },

  { path: 'shop', component: ShopComponent, title: 'Shop all products' },
  { path: 'about', component: AboutUsComponent, title: 'About us' },
  { path: 'contact', component: ContactComponent, title: 'Contact us' },

  { path: '**', component: ErrorComponent, title: 'Error 404' }
];
