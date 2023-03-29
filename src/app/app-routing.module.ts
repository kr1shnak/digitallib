import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { NewbookComponent } from './components/newbook/newbook.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RigistrationComponent } from './components/rigistration/rigistration.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:"regiter",component:RigistrationComponent,
  
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:'newbook',component:NewbookComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
