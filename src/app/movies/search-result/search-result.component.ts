import { Component, OnInit, Input } from '@angular/core';
import { MoviesSearchService } from '../../services/movies-search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
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