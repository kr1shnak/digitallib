import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksInfo } from 'src/app/models/digitallib-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  books$ : Observable<BooksInfo> | undefined

  products : any = []
  images = [
    "/assets/images/image3.jpg",
    "/assets/images/image 4.jpg",
    "/assets/images/image 5.jpg",
    "/assets/images/image 6.jpg",
    "/assets/images/image 7.jpg",
  ]

  status = [
    'success',
    'pending',
    'return',
    'cancel'
  ]
  constructor(private service: ApiService ){
    
  }
  
  ngOnInit(): void {
    this.loadBooks();

  }

  loadBooks() { 
    this.books$ = this.service.getProductList()
  }

  addToCart(item:any):any{
    item.qty = 1;
    this.service.sendcart(item)
  }
    
  
  

}
