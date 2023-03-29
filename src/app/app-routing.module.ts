import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

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
=======
import { LoginComponent } from './login/login.component';
import { RigistrationComponent } from './rigistration/rigistration.component';


const routes: Routes = [

  {
    path:"regiter",component:RigistrationComponent,
  
  },
  {
    path:"login",component:LoginComponent
>>>>>>> 326930a201ff701f0ea8b45516077dc1bc51d093
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
