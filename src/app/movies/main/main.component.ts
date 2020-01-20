import { Component, OnInit } from '@angular/core';

import { MoviesSearchService } from '../../services/movies-search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title: string;
  year: string;
  type: string;
  movies: Object;
  
  constructor(
    private moviesSearchServices: MoviesSearchService,
  ) { }

  searchMovies(){
    this.moviesSearchServices.getData(this.title, this.year, this.type).subscribe((resp: {}) => this.movies = resp);
  }

  ngOnInit() {
      
  }
}
