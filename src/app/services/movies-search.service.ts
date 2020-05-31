import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppErrorHandler } from '../common/app-error-handler';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesSearchService {
  web:string = 'http://www.omdbapi.com/';
  apiKey:string = '&apikey=49390c5c';
  url:string = '';

  constructor(private http: HttpClient) {};
  
  getData(url, page): Observable<Movie> {
    this.url = this.web + url +"&page=" + page + this.apiKey
    return this.getAll(this.url);  
  }
    
  getMovieById(id): Observable<Movie> {
    this.url = this.web +'?i='+id+'&plot=full'+ this.apiKey
    return this.getAll(this.url);
  }
  getRandom(word, type): Observable<Movie> {
    this.url = this.web + '?s='+word+'&type=' + type + '&plot=full'+ this.apiKey;
    return this.getAll(this.url);
  }

  getAll(url) {
    return this.http.get<Movie>(url)
    .pipe(catchError(this.handleError))
  }

  private handleError(error: Response) {
    if (error.status === 400)
    return throwError(new BadInput(error.json()));

    if (error.status === 404)
    return throwError(new NotFoundError())

    return throwError(new AppErrorHandler())
  }
}
