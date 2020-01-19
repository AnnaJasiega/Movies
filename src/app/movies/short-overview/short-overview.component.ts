import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie'

import { MoviesSearchService } from '../../services/movies-search.service';


@Component({
  selector: 'app-short-overview',
  templateUrl: './short-overview.component.html',
  styleUrls: ['./short-overview.component.css']
})
export class ShortOverviewComponent implements OnInit {
  @Input('title') title: string;
  @Input('year') year: string;
  @Input('poster') poster: string;
  @Input('id') id:string;

  movie: Object;
  
  
  constructor(private moviesSearchService: MoviesSearchService) { }

  ngOnInit() { 
    this.moviesSearchService.getMovieById().subscribe(resp => {this.movie = resp; console.log(resp)})
    console.log('ANa')
  }
}