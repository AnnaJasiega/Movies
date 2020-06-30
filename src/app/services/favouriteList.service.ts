import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { FavouriteCart } from '../models/favouriteCart'


@Injectable({
  providedIn: 'root'
})
export class FavouriteListService {

  constructor(private db: AngularFireDatabase) { }

  async getFavourites(): Promise<Observable<FavouriteCart>> {
    let favId = await this.getOrCreateFavId();
    let object$ = this.db.object('/favouriteMovie/' + favId).snapshotChanges()
      console.log(object$)
    return 
  }

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

  async addOrRemoveToFavourites(movieId, isClicked) {
    let favId = await this.getOrCreateFavId();
    let movie$ = this.getMovie(favId, movieId);

    if(isClicked) movie$.set({movieId: movieId})
    else movie$.remove();  
  }

  checkIfExist(movieId){
    let favId = localStorage.getItem('favId');
    //if (!favId) return false;
    let movie$ = this.getMovie(favId, movieId);
    
    
        
  }
}
