import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products.service';
import { FormsModule } from '@angular/forms'
import { HomeService } from './home.service';
import { ContactComponent } from './contact/contact.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    InputFormatDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
