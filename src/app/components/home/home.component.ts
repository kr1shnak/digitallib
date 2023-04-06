import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksInfo } from 'src/app/models/digitallib-model';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  
  books : any = []

  products : any = []
  images = [
    "/assets/images/image3.jpg",
    "/assets/images/image 4.jpg",
    "/assets/images/image 5.jpg",
    "/assets/images/image 6.jpg",
    "/assets/images/image 7.jpg",
  ]
  DummyBooks = [];

  status = [
    'success',
    'pending',
    'return',
    'cancel'
  ]

  filterBy: any
  constructor(private service: ApiService ){
    
  }
  
  ngOnInit(): void {
    this.loadBooks();

  }

  loadBooks() { 
    this.service.getProductList().subscribe(res=>{
      this.books = res.products
      this.DummyBooks = res.products
    })
  }

  addToCart(item:any):any{
    item.qty = 1;
    this.service.sendcart(item)
  }

  getSearchInfo(filter: any): void{
    if(filter.sortBy){
      let books = [...this.DummyBooks]
      this.books = books.sort((a, b) => a[filter.sortBy] > b[filter.sortBy] ? 1 : -1)
    }
    else{
      this.filterBy = filter
    }
  }
    
  
  

}
