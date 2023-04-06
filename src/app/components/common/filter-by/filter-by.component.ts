import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss']
})
export class FilterByComponent implements OnInit {

  filter= {
    filterBy: '',
    search:'',
    sortBy: '',
  }

  @Output() searchInfo = new EventEmitter();

  ngOnInit(): void {
    
  }

  searchEvent(): void{
    if((this.filter.filterBy) || this.filter.sortBy){
        this.searchInfo.emit(this.filter)
        console.log(this.filter)
    }

  }

}
