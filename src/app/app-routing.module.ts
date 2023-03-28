import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RigistrationComponent } from './rigistration/rigistration.component';


const routes: Routes = [

  {
    path:"regiter",component:RigistrationComponent,
  
  },
  {
    path:"login",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
