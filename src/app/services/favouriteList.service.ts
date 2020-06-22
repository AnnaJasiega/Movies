import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FavouriteListService {

  constructor(private db: AngularFireDatabase) { }


  private getOrCreateFavId() {

  }

  addToFavourites(movieId) {
    //let favId = await this.getOrCreateFavId();
  }
}
