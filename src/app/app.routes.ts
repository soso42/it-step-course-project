import { Routes } from '@angular/router';
import { HomeComponent } from "./features/home/home.component";
import { ContactComponent } from "./features/contact/contact.component";
import { ErrorComponent } from "./features/error/error.component";
import { AboutUsComponent } from "./features/about-us/about-us.component";
import { ShopComponent } from "./features/shop/shop.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**', component: ErrorComponent }
];
