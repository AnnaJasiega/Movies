import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesSearchService } from '../../services/movies-search.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  private movieId = null;
  private movie:any = null;
  private actors:Array<String>;
  private directors:Array<String>;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private service: MoviesSearchService,
              ) { }



    ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
    });
    this.service.getMovieById(this.movieId).subscribe((resp) => {
      this.movie = resp;
      this.actors = this.movie.Actors.split(',');
      this.directors = this.movie.Director.split(',');

      })
    }
}
