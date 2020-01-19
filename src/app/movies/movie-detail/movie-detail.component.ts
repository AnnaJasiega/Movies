import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesSearchService } from '../../services/movies-search.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private service: MoviesSearchService,
              ) { }

  private movieId = null;
  private subscription;
  private movie:any = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
    });
    this.service.getMovieById().subscribe((resp) => (this.movie = resp))
  }

}
