import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie'

import { MoviesSearchService } from '../../services/movies-search.service';


@Component({
  selector: 'app-short-overview',
  templateUrl: './short-overview.component.html',
  styleUrls: ['./short-overview.component.css']
})
export class ShortOverviewComponent implements OnInit {
  movies: Object;
  
  constructor(
    private moviesSearchServices: MoviesSearchService,
  ) { }

  ngOnInit() {
    this.moviesSearchServices.getData().subscribe((resp: {}) => {this.movies = resp });  
  }
}