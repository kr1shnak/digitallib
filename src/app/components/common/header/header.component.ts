import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
userInfo: any;
  constructor(private route:Router){
    this.route.events.subscribe(() => {
        let user = localStorage.getItem('loginInfo')
        this.userInfo = user ? JSON.parse(user) : ''
    })


  }
  ngOnInit(): void {

  }

  logout(){
    localStorage.clear()
    this.route.navigate(['login']);
  }

}
 