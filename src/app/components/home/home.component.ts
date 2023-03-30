import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { books, BooksInfo } from 'src/app/models/digitallib-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  books$ : Observable<BooksInfo> | undefined

  products : any = []
  constructor(private service: ApiService ){
    
  }

  ngOnInit(): void {
    this.loadBooks();
   
  }

  loadBooks() { 
    this.books$ = this.service.getProductList()
  }


  

}
