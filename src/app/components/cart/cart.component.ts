import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  
  cartItems : any = []
  totalCartValue : any = 0;
  constructor(){

  }

  ngOnInit(): void {
    if(localStorage.getItem('cart')){
       const list = localStorage.getItem('cart')
      this.cartItems =  list !== null ? JSON.parse(list) : '';
    } 
    this.getTotal();

  }

  getTotal(): void{
    this.totalCartValue = 0;
    this.cartItems.forEach((element: any) => {
      this.totalCartValue = this.totalCartValue + (element.qty * element.price)
    });
  }


  deleteItem(index: number) : void{
    this.cartItems.splice(index , 1)
    this.getTotal();
    localStorage.setItem('cart',JSON.stringify(this.cartItems))
  }
  increase(item : any) : void{
    item.qty = item.qty + 1;
    localStorage.setItem('cart',JSON.stringify(this.cartItems))
    this.getTotal();
  }
  decrese(item: any): void{
    item.qty = item.qty - 1;
    localStorage.setItem('cart',JSON.stringify(this.cartItems))
    this.getTotal();
  
  }

}


