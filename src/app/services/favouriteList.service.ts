import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FavouriteListService {

  constructor(private db: AngularFireDatabase) { }


  private create() {
    return this.db.list('/favouriteMovie').push({
      dateCreated: new Date().getTime(),
    })
  }

  private async getOrCreateFavId() {
    let favId = localStorage.getItem('favId');
    if (favId) return favId;

    let result = await this.create();
    localStorage.setItem('favId', result.key);
    return result.key
  }

  private getMovie(favId: string, movieId: string){
    return this.db.object('/favouriteMovie/' + favId + '/' + movieId);
  }

  async addToFavourites(movieId) {
    console.log("ANIA" + movieId)
    let favId = await this.getOrCreateFavId();
    console.log(favId)
    let movie$ = this.getMovie(favId, movieId);
    console.log(movie$)

   movie$.set({movieId: movieId})
    
  }
}
