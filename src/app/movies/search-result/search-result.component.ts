import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesSearchService } from '../../services/movies-search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input('title') title: string;
  @Input('year') year: string;
  @Input('poster') poster: string;
  @Input('id') id:string;

  private movie:any = null;
  private url:any = '';
 
  private ratings:[];
  
  compareLength(a,b){
    return a.Value.length - b.Value.length
  }
  constructor(private moviesSearchService: MoviesSearchService,
              private route: ActivatedRoute, 
              ) { }

  ngOnInit() { 
    this.moviesSearchService.getMovieById(this.id).subscribe(resp => {
    this.movie = resp; 
    this.ratings = this.movie.Ratings.sort(this.compareLength);
    });
    this.route.paramMap.subscribe(params => {
      this.url = params.get('url');
    });
  }
}