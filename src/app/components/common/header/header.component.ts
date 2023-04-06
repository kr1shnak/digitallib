import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
userInfo: any;
cartListInfo : any = []
  constructor(private route:Router, private service: ApiService){


    this.route.events.subscribe(() => {
        let user = localStorage.getItem('loginInfo')
        this.userInfo = user ? JSON.parse(user) : ''
    })


  }
  ngOnInit(): void {
    if(localStorage.getItem('cart')){
      const list = localStorage.getItem('cart')
     this.cartListInfo =  list !== null ? JSON.parse(list) : '';
   } 
    this.service.cartList.subscribe((result: any)=>{
      this.cartListInfo.push(result);
      localStorage.setItem('cart',JSON.stringify(this.cartListInfo))
    })
  }

  logout(){
    localStorage.clear()
    this.route.navigate(['login']);
  }

}
 