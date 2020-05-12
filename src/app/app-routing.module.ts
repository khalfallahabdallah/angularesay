import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LogoComponent } from './logo/logo.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'',redirectTo:'Products',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  
  {path:'Contact',component:ContactComponent},
 
  {path:'Logo',component:LogoComponent},
 
  {path:'Shop',component:ShopComponent},
  
  {path:'Products',component:ProductsComponent},
 
  {path:'Productdetails',component:ProductdetailsComponent},
  
  {path:'Checkout',component:CheckoutComponent},
  
  {path:'Cart',component:CartComponent},
 
  {path:'Login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
