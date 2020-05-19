import { Injectable } from '@angular/core';
import { Movie } from '../models/movie'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesSearchService {
  web:string = 'http://www.omdbapi.com/'
  apiKey:string = '&apikey=49390c5c';

  constructor(
    private http: HttpClient
  ) {}
  
  public getData(url, page): Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/' + url +"&page=" + page + this.apiKey)
  }
  
  public getMovieById(id): Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?i='+id+'&plot=full'+ this.apiKey)
  }
  public getRandom(word, type): Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?s='+word+'&type=' + type + '&plot=full'+ this.apiKey)
  }
}
