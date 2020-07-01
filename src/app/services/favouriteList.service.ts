import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { FavouriteCart } from '../models/favouriteCart'


@Injectable({
  providedIn: 'root'
})
export class FavouriteListService {

  favouriteMovie;
  userID: string;

  constructor(private db: AngularFireDatabase) { }
/*00
  async getFavourites(): Promise<Observable<FavouriteCart>> {
    let favId = await this.getOrCreateFavId();
    let object$ = this.db.object('/favouriteMovie/' + favId).valueChanges();
      console.log(object$)
    return
  }
*/

  async getFavourites(){
    let userId = await this.getOrCreateUserId();
    this.favouriteMovie = this.db.list('/favouriteMovie/' + userId).valueChanges();
    return this.favouriteMovie;
  }  


  private create() {
    return this.db.list('/favouriteMovie').push({
      dateCreated: new Date().getTime(),
    })
  }

  private async getOrCreateUserId() {
    let userId = localStorage.getItem('userId');
    if (userId) return userId;

    let result = await this.create();
    localStorage.setItem('userId', result.key);
    return result.key
  }

  private getMovie(userId: string, movieId: string){
    return this.db.object('/favouriteMovie/' + userId + '/' + movieId);
  }

  async addOrRemoveToFavourites(movieId, isClicked) {
    let userId = await this.getOrCreateUserId();
    let movie$ = this.getMovie(userId, movieId);

    if(isClicked) movie$.set({movieId: movieId})
    else movie$.remove();  
  }

  checkIfExist(movieId){
    let userId = localStorage.getItem('userId');
    //if (!favId) return false;
    let movie$ = this.getMovie(userId, movieId);
    //console.log(movie$.valueChanges());
    //return movie$.valueChanges();
    
        
  }
}
