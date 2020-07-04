import { Component, OnInit } from '@angular/core';
import { FavouriteCart } from 'src/app/models/favouriteCart';
import { FavouriteListService } from 'src/app/services/favouriteList.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fav',
  templateUrl: './favouriteMovies.component.html',
  styleUrls: ['./favouriteMovies.component.scss']
})
export class FavouriteMoviesComponent implements OnInit {

favouriteMovies;

  constructor(private favouriteCart: FavouriteListService) { }

  async ngOnInit() {
    let movies$ = await this.favouriteCart.getFavourites()
    
    movies$.subscribe(favouriteMovies => {
      this.favouriteMovies = favouriteMovies
      this.favouriteMovies.reverse();
    });
  }

}
