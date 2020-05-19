import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesSearchService } from '../../services/movies-search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title: string ='';
  year: string  ='';
  type: string  = '';
  moviesAll: Array<Object> = [];
  i: number = 1;
  scrolled: boolean = false;
  url: string = '';
  noUrl: boolean = true;
  mouseover: boolean = false;
  types: Array<String> = ["Movie", "Series", "Episode"];

  
  constructor(
    private moviesSearchServices: MoviesSearchService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute, 
    private router: Router,
  ) { }
  onScroll() {
    this.i++;
    this.searchMovies();
  }
  onScrolled(){
    this.scrolled = true;
  }
  offScrolled(){
    this.scrolled = false;
  }
  getUrl(){
    this.route.paramMap.subscribe(params => {
      this.url = params.get('url');
      });
  }
 
  click(){
    this.moviesAll = [];
    this.searchMovies();
  }
  searchMovies(){
    this.getUrl();
    if(this.i=1){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 700);
    setTimeout(() =>{
      this.moviesSearchServices.getData(this.url, this.i).subscribe((resp: {}) => 
      this.moviesAll.push(resp));
    },1000)
    } else {
      this.moviesSearchServices.getData(this.url, this.i).subscribe((resp: {}) => 
      this.moviesAll.push(resp));
    }
  }
  ngOnInit() {
    this.getUrl();
    if (this.url){
      this.noUrl = false;
      this.searchMovies()
    }
  }
}
