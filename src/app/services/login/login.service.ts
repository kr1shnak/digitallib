import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class loginService{
 constructor(private http :HttpClient){

 }

getLoginDetails(login:any):any{

  return this.http.post("https://dummyjson.com/auth/login",login)
}

  IsloggedIn(){
    let user =localStorage.getItem('loginInfo')
    const status = (user) ? true: false;
    console.log(status)
     return status;
  }

}


  

