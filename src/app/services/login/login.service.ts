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

IsloggedIn(): boolean{
  let user = localStorage.getItem('loginInfo')
  if(user){
    return true
  }
  else{
    return false
  }
}

}


  

