import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  cartList = new Subject();

  sendcart(item: any) {
    this.cartList.next(item)
  }
  

  constructor(private http:HttpClient) { }


  getProductList() : any{
    return this.http.get('https://dummyjson.com/products')
  }


  
}
 