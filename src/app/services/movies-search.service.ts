import { Injectable } from '@angular/core';
import { Movie } from '../models/movie'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesSearchService {

  apiKey:string = '&apikey=49390c5c';
  titleUrl='';
  yearUrl='';
  typeUrl='';

  constructor(
    private http: HttpClient
  ) {}
  
  public getData(title, year, type, page): Observable<Movie> {
    if(title){this.titleUrl = "s=" + title};
    if(year){this.yearUrl = "&y=" + year};
    if(type){this.typeUrl = "&type=" + type};

    return this.http.get<Movie>('http://www.omdbapi.com/?' + this.titleUrl + this.typeUrl + this.yearUrl +"&page=" + page + this.apiKey)
  }
  
  public getMovieById(id): Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?i='+id+'&plot=full'+ this.apiKey)
  }
}
