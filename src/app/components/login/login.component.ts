import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'Template driven forms';

 
  constructor(private service:loginService){

  } 
  login = {
    username:'',
    password:''
  }
  
  loginIntoApp(){
    this.service.getLoginDetails(this.login).subscribe((res: any)=>{
      console.log(res)
      localStorage.setItem('loginInfo',JSON.stringify(res))
    })
  }
 
}

