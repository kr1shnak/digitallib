import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {
  constructor(private authService: loginService,private route:Router) { }
  canActivate(): boolean {
      if (this.authService.IsloggedIn()) {
        this.route.navigate(['home']);
        return false;      
     }
     else{
        return true;
     }
  }
  
}
