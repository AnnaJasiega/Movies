import { Component, OnInit } from '@angular/core';
import { FavouriteCart } from 'src/app/models/favouriteCart';
import { FavouriteListService } from 'src/app/services/favouriteList.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

favouriteMovies;

  constructor(private favouriteCart: FavouriteListService) { }

  ngOnInit(): void {
    this.favouriteMovies = this.favouriteCart.getFavourites()
  }

}
