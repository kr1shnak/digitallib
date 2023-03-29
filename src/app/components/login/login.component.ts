import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'Template driven forms';

 
  constructor(private service:loginService, private route:Router){

  } 
  login = {
    username:'',
    password:''
  }
  
  loginIntoApp(){
    this.service.getLoginDetails(this.login).subscribe((res: any)=>{
      console.log(res)
      localStorage.setItem('loginInfo',JSON.stringify(res))
      this.route.navigate(['home']);
    })
  }
 
}

