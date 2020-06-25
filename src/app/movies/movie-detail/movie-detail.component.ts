import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesSearchService } from '../../services/movies-search.service';
import { FavouriteListService } from 'src/app/services/favouriteList.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  private movieId = "";
  private movie:any;
  private actors:Array<String> = [];
  private directors:Array<String> = [];
  private currentRate = 0;
  private isVisible: boolean = false;
  private isClicked: boolean = false;
  private url:string = '';
  private seeMore: boolean = false;
  private poster = "";
  

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private service: MoviesSearchService,
              private favouriteList: FavouriteListService
              ) { }

    seePoster(){
      this.isVisible=!this.isVisible
    }

    seeMoreClick(){
      this.seeMore = !this.seeMore
    }

    checkPoster() {
      if (this.movie.Poster == 'N/A') {
        return this.poster = 'https://webstockreview.net/images/camera-clipart-abstract-26.png'
      }
      return this.poster = this.movie.Poster
    }

    addOrRemoveToFav() {

      this.favouriteList.addOrRemoveToFavourites(this.movieId, this.isClicked);
    }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.movieId = params.get('id');
      });
      this.route.paramMap.subscribe(params => {
        (this.url = params.get('url'))||(this.url = 'movies');
      });
      this.service.getMovieById(this.movieId).subscribe((resp) => {
        this.movie = resp;
        this.actors = this.movie.Actors.split(',');
        this.directors = this.movie.Director.split(',');
        this.currentRate = this.movie.imdbRating;
        this.checkPoster();
      });

      this.favouriteList.checkIfExist(this.movieId)
    }
}
