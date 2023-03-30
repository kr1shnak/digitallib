import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { loginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  
  constructor(private authService: loginService,private route:Router) { }
  canActivate():  boolean {
      if (this.authService.IsloggedIn()) {
        return true;
     }
     else{
        this.route.navigate(['login']);
        return false;
     }
  }
  
}
