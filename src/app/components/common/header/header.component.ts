import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo: any;
  ngOnInit(): void {
    let user = localStorage.getItem('loginInfo')
    this.userInfo = user ? JSON.parse(user) : ''
  }

}
