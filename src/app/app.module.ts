import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NewbookComponent } from './components/newbook/newbook.component';
import { loginService } from './services/login/login.service';
import { LoginComponent } from './components/login/login.component';
import { RigistrationComponent } from './components/rigistration/rigistration.component';
import { AuthGuard } from './gaurds/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RigistrationComponent,
    NewbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    loginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
