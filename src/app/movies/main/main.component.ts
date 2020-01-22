import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
//import { InfiniteScroll } from 'ngx-infinite-scroll';

import { MoviesSearchService } from '../../services/movies-search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title: string ='';
  year: string  ='';
  type: string  = '';
  moviesAll: Array<Object> = [];
  i: number = 1;
  
  constructor(
    private moviesSearchServices: MoviesSearchService,
    private spinner: NgxSpinnerService
  ) { }
  onScroll() {
    this.i++;
    this.searchMovies();
  }
  searchMovies(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    setTimeout(() =>{
      this.moviesSearchServices.getData(this.title, this.year, this.type, this.i).subscribe((resp: {}) => 
      this.moviesAll.push(resp));
    },1000)
  }

  ngOnInit() {
      
  }
}
