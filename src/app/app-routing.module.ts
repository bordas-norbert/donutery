import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "products", component: ProductsComponent },
  { path: "contact", component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
