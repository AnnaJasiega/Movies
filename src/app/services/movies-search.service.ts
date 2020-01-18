import { Injectable } from '@angular/core';
import { Movie } from '../models/movie'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesSearchService {

  constructor(
    private http: HttpClient
  ) {}
  
  public getData(): Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?s=girl&type=movie&y=2007&apikey=49390c5c')
    
  }

}
